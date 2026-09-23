# 결 · 내 결을 읽다 (AI Saju Fortune App)

Google Stitch 프로젝트 **AI Saju Fortune App** (`projects/18038522518281774441`) 의
22개 화면을 React 웹앱으로 옮긴 코드베이스입니다. 마크업·클래스·문구는 스티치 내보내기와
동일하며, 이제부터는 이 저장소가 원본입니다.

```bash
npm install
npm run dev        # http://localhost:5173 — 화면 갤러리
```

## 스택

| | |
|---|---|
| 번들러 | Vite 6 + React 19 + TypeScript (strict) |
| 스타일 | Tailwind CSS 3 — 스티치가 각 화면에 인라인하던 설정을 `tailwind.config.js` 로 이식 |
| 라우팅 | React Router 7 |
| 폰트 | Noto Sans KR / Noto Serif KR + Material Symbols Outlined (`index.html`) |

디자인 시스템은 스티치의 **Serene Celestial Saju** 입니다. 색상 47개, 타이포 13종,
spacing·radius 토큰이 `tailwind.config.js` 에 그대로 들어 있어 `bg-surface-container-lowest`,
`font-headline-xl-mobile` 같은 클래스명이 내보내기와 동일하게 동작합니다.

## 구조

```
index.html                  폰트 · 뷰포트 (스티치 <head> 와 동일)
tailwind.config.js          Serene Celestial Saju 디자인 토큰
src/
  index.css                 Tailwind 지시자 + 스티치 base 레이어(pt-safe/pb-safe 등)
  App.tsx                   라우트 — `/` 갤러리, `/<slug>` 각 화면
  pages/ScreenIndex.tsx     22개 화면 미리보기 벽 (390×844 iframe)
  screens/<Name>.tsx        화면 1개 = 파일 1개
  screens/registry.ts       slug · 제목 · 컴포넌트 목록
  lib/useBodyClass.ts       화면별 <body> 클래스 (스티치가 body 에 레이아웃을 검)
  lib/dom.ts                이식한 인라인 스크립트용 DOM 조회 헬퍼
public/assets/              스티치 이미지 11개 + 로고 SVG 2개 (로컬 사본)
.stitch/                    원본 HTML · 변환/검증 도구 (빌드에 포함되지 않음)
```

## 화면

| slug | 화면 |
|---|---|
| `splash` | 스플래시 |
| `login` / `login-sheet` | 로그인 / 로그인 바텀시트 |
| `terms` / `signup-complete` | 약관 동의 / 가입 완료 |
| `home-guest` / `home` | 홈 (비로그인) / 홈 |
| `saju-input` / `saju-options` | 사주 정보 입력 / 사주 계산 옵션 |
| `saju-result` / `daeun-flow` / `saved-saju` | 사주 분석 결과 / 대운 흐름 분석 / 저장된 사주 |
| `ai-chat` | 사주 AI 상담 |
| `store` / `checkout` / `report-loading` / `report-career-move` | 프리미엄 리포트 스토어 / 결제하기 / 리포트 생성 중 / 이직운 리포트 |
| `more` / `account-delete` | 더보기 / 회원 탈퇴 |
| `report-failed` / `network-error` / `not-found` | 리포트 생성 실패 / 네트워크 오류 / 페이지를 찾을 수 없음 |

화면끼리는 아직 연결되어 있지 않습니다. 내보내기의 링크가 전부 `href="#"` 이라
라우팅은 갤러리(`/`)에서 각 화면으로 들어가는 구조입니다.

## 스티치 내보내기와의 차이

동일하게 유지한 것: 엘리먼트 구조, 클래스 문자열, 텍스트, 인라인 SVG, `id`/`data-*`/`aria-*`,
`<body>` 클래스.

React 때문에 형태만 바뀐 것:

- `class` → `className`, `for` → `htmlFor`, SVG 속성은 camelCase (`stroke-width` → `strokeWidth`)
- `onclick="fn()"` → `onClick={() => fn()}`, `this` → `event.currentTarget`
- `<input value>` → `defaultValue`, `<option selected>` → 부모 `<select defaultValue>`
- 인라인 `<script>` 는 그대로 이식 — 인라인 핸들러가 호출하는 함수는 모듈 스코프로,
  나머지 DOM 배선은 마운트 `useEffect` 로. DOM 조회만 `lib/dom.ts` 헬퍼를 거칩니다.
- 이미지 URL은 만료되는 `lh3.googleusercontent.com` 대신 `public/assets/` 사본
- flex/grid 자식이거나 블록 요소 사이에 있어 **렌더링에 관여하지 않는** 공백 텍스트 노드는 제거
  (인라인 요소 사이의 공백은 `{" "}` 로 보존)

## 검증

```bash
npm run stitch:verify         # 각 화면을 SSR 렌더 → 원본 <body> 와 구조 비교
npm run build
npm run stitch:check-classes  # 사용된 클래스가 빌드된 CSS에 실제로 있는지 확인
```

현재 결과:

- `stitch:verify` — 22개 화면 전부 **엘리먼트 / 속성 / 텍스트 불일치 0건**
  (제거된 무의미 공백 노드 3,588개는 별도 집계)
- `stitch:check-classes` — 클래스 780개 중 767개가 CSS 규칙 생성, 8개는 스크립트가 잡는
  동작용 훅, 5개(`backdrop-blur-xs`, `h-13`, `py-0.2`, `no-scrollbar`, `scrollbar-none`)는
  Tailwind v3에 없는 클래스라 스티치가 쓰던 CDN 빌드에서도 아무 규칙을 만들지 않던 것들

## .stitch/

내보내기 원본과 도구입니다. 앱 번들에는 포함되지 않습니다.

- `html/` — 스티치 MCP 로 받은 화면 HTML 24개 (로고 SVG 2개 포함)
- `assets/` — 원격 이미지 원본
- `tools/convert.mjs` — HTML → TSX 변환기. 최초 1회 실행분이 `src/screens/` 이며,
  이후 타입 보정 등 수정이 들어가 있으므로 다시 실행하면 덮어씁니다
- `tools/verify.mjs`, `tools/check-classes.mjs` — 위 검증 스크립트
