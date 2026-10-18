# 결 (AI 사주 웹앱) — 프로젝트 가이드

이 파일은 Claude Code가 이 프로젝트를 이해하고 작업하기 위한 기준 문서다. 작업 전에 항상 이 문서를 먼저 따른다.

## 1. 서비스 개요

- 서비스명: **결** — "내 삶의 결을 읽다"
- 형태: 모바일 우선 웹앱 (앱 아님, 웹 PG 결제)
- 첫 상품: **이직 · 직업운** 풀이, 990원 단건 결제
- 다음 상품: 금전 · 재물운, 2027 신년운세, 나의 결(사주 원국 해석), 부부 재물운
- 결제 전 무료 미리보기는 없음. 대신 **샘플 풀이**(만든이의 실제 사주)를 전체 공개해서 품질을 보여준다.

## 2. 기술 스택

- Next.js (App Router) + TypeScript (strict) + Tailwind CSS
- 백엔드: Next.js Route Handlers (서버 하나로 시작, 추후 계산 로직만 Spring Boot로 분리 가능하게 설계)
- 만세력 엔진: `manseryeok` (npm, KASI 기반) — 필요 시 `ssaju`를 합충·신살 보조로 사용
- AI: Claude API (서버에서만 호출)
- DB: **Supabase** (PostgreSQL) — 리전 서울, 세부 규칙은 13-2 참고
- 결제: **토스페이먼츠** (결제위젯 SDK v2, `@tosspayments/tosspayments-sdk`) — 세부 규칙은 13-1 참고

## 3. 핵심 설계 원칙

1. **계산은 코드, 해석은 AI, 모양은 스키마.**
   - 사주팔자, 십신, 오행 개수, 대운, 세운, 합충은 전부 코드로 계산한다.
   - 날짜·점수·간지를 AI가 만들게 하지 않는다. AI는 계산 결과(JSON)를 받아 **해석 문장만** 쓴다.
   - AI 응답은 섹션 스키마에 맞춘 JSON으로만 받는다 (structured output / tool use로 강제).
2. **엔진은 감싼다.** 화면이나 API에서 라이브러리를 직접 부르지 않는다. 반드시 `lib/saju/calculateSaju.ts` 하나를 통해서만 계산한다. 엔진 교체·Java 이전 시 이 파일만 바꾼다.
3. **같은 렌더러.** 실제 결과와 샘플은 같은 결과 컴포넌트로 렌더링한다. 샘플은 정적 JSON 파일이다.
4. **한 번 생성, 계속 저장.** 결제 후 Claude를 1회 호출해 전체 풀이를 생성하고 DB에 저장한다. "내 풀이"에서 다시 볼 때 재호출하지 않는다.

## 4. 만세력 계산 규칙

- 연주: 입춘 절입 시각 기준 / 월주: 12절기(節) 경계 기준
- 시간 기준 기본값: **한국 표준시(KST), 경도 보정 없음**
- 자시 처리 기본값: **통자시**(23:30 이후 다음 날 子시). 입력 화면에 **야자시 적용 토글** 제공
- 진태양시(경도) 보정: 옵션으로만 제공
- 태어난 시간 "모름" 선택 시: 시주 없이 삼주(년·월·일)로 풀이하고, 결과에 그 사실을 표시
- 대운: 성별 + 년간 음양으로 순행/역행, 대운수는 엔진 계산값 사용
- 엔진 옵션은 `calculateSaju()` 안에서 한 곳에서만 설정한다

## 5. 골든 테스트 케이스 (반드시 통과)

`lib/saju/__tests__/golden.test.ts`에 정답표로 고정한다. 시중 만세력과 대조해 케이스를 10~20개까지 늘린다 (절기 당일 출생, 자정 전후 출생, 윤달 등).

| 입력 | 기대 결과 |
|---|---|
| 1988-03-15 00:25, 여, 양력, 통자시 | 戊辰 · 乙卯 · 己巳 · 甲子, 대운 역행, 현재 대운 辛亥(33~42세) |
| 1988-03-15 00:25, 여, 경도보정 + 야자시 | 일주가 戊辰으로 바뀜 (시주 甲子 또는 壬子 — 관법에 따라 다름, 엔진 동작 확인) |
| 1988-06-15 17:00, 남, 양력 | 戊辰 · 戊午 · 辛丑 · 丙申, 대운 순행, 현재 대운 壬戌(37~46세) |
| 1988-06-15 17:30, 남, 양력 | 시주만 丁酉로 바뀜 (申/酉 경계 확인용) |

## 6. 디자인 시스템

> 화면 레이아웃·간격·컴포넌트 모양은 `docs/design/` 이미지를 따른다.
> 단, **색상·폰트·크기 값은 아래 토큰이 기준**이다 (이미지에서 색을 추출하지 말 것).

### 디자인 참고 이미지

| 파일 | 내용 |
|---|---|
| `docs/design/input.png` | 사주 정보 입력 화면 (상황 선택, 체크리스트, 결제 버튼, 샘플 보기 링크) |
| `docs/design/sample-career.png` | 샘플 풀이 · 이직 직업운 전체 (배지, 인물 카드, 원국표, 모든 카드, 하단 고정 결제 버튼) |
| `docs/design/sample-money.png` | 샘플 풀이 · 금전 재물운 전체 (재물 자리 표시 원국표, 순위·지출 카드, 대운 막대, 연도별 그래프) |

이미지 사용 규칙:
- 이미지 속 문장·사주 내용·점수는 **예시 데이터**다. 하드코딩하지 말고 JSON에서 받아 렌더링한다.
- 이미지 속 원국표를 계산 정답으로 쓰지 않는다. 정답은 5번 골든 테스트가 기준이다.
- 이미지와 이 문서가 다르면 **이 문서가 우선**이다.

### 토큰

- 분위기: 다크 + 뮤트 골드, 차분하고 고급스럽게
- 색상
  - 배경 `#121212`, 카드 `#1A1A1A`, 테두리 `#262626`
  - 포인트(골드) `#F2B544`, 골드 배경 `#262219` / `#2A2416`
  - 본문 `#D6D1C6`, 보조 `#A8A39A`, 흐린 텍스트 `#8E897F`
  - 주의(코랄) `#E89A7A`
  - 오행: 木 `#7FB98B`, 火 `#E07F66`, 土 `#D2AE63`, 金 `#C4C8CC`, 水 `#6E9FE0`
- 폰트 (Google Fonts)
  - 제목·결론·간지: **Gowun Batang** (700)
  - 본문·UI: **Noto Sans KR** (400 / 500 / 700)
  - 크기: 화면 제목 19px, 섹션 제목 20px, 결론 18px, 본문 14.5px, 라벨 15px Bold, 캡션 12~12.5px
- 한자는 항상 **한자(한글)** 형태로 표기: 예) `己土(기토)`, `子午沖(자오충)`
- 터치 영역 최소 44px, 카드 radius 18px, 버튼 radius 14px
- 하단 탭 3개: **홈 / 내 풀이 / 마이**

## 7. 화면 목록

1. **홈**: 상품 카드(이직·직업운, 금전·재물운, 2027 신년운세, 나의 결)
2. **사주 정보 입력** (`input.png`)
   - 성별은 기본 선택 없음, 태어난 시간 첫 선택지는 "모름"
   - 이미지에 없는 **야자시 적용 토글**을 태어난 시간 아래에 추가
   - 필수값(상황·성별·생년월일) 미입력 시 결제 버튼 비활성
3. **샘플 풀이** (`sample-career.png`, `sample-money.png`): `data/samples/*.json`을 결과 렌더러로 표시. 하단 버튼은 스크롤해도 고정
4. **결제** → **로딩**(3~5초 연출, 섹션 순서대로 채워짐) → **결과**
5. **내 풀이**: 결제한 풀이 목록, 재호출 없이 DB에서 표시
6. **마이**: 계정, 결제 내역, 안내/약관

## 8. 결과 화면 구조 (이직 · 직업운)

카드 모양은 `sample-career.png` 참고. 카드 순서:
1. 결론 카드
2. 사주 원국
3. 내 일의 결
4. 상사 · 조직 궁합
5. 이직 타이밍 (3년 그래프 + 연도별 풀이)
6. 독립 · 창업 기운
7. 재물운과 직업의 결
8. 지금 해볼 3가지
9. 마무리 인용 문장 + 저장/공유 + "다른 결도 읽어보기"

각 해석 카드는 **4단 구성**: 한 줄 결론 → 사주 근거 칩 → 구체적인 일상 장면 → "이렇게 해보세요" 조언. 사주 근거 설명은 "왜 그런가요?" 접기 버튼 안에 둔다. 카드당 300~500자.

### 상황별 라벨 (status에 따라 교체)

| 섹션 | 재직 중 | 취업 준비 중 |
|---|---|---|
| 결론 질문 | 지금 움직여도 괜찮을까? | 언제쯤 길이 열릴까? |
| 3단 표시 | 움직일 때 / 준비할 때 / 머물 때 | 열리는 때 / 다지는 때 / 넓히는 때 |
| 타이밍 | 이직 타이밍 | 취업 타이밍 |
| 조직 | 상사 · 조직 궁합 | 잘 맞는 첫 직장 · 직무 |
| 독립 | 독립 · 창업 기운 | 나에게 맞는 일의 방향 |
| 재물 | 재물운과 직업의 결 | 첫 연봉과 재물 흐름 |

쉬는 중 = 복귀 타이밍 중심, 프리랜서 = 정규직 전환 vs 독립 유지 중심으로 같은 방식 적용.

## 9. 데이터 흐름

```
입력 → calculateSaju() → SajuChart(JSON)
     → 결제 검증(서버)
     → Claude 호출 1회 (SajuChart + status + 상품 타입 전달)
     → 스키마 검증(zod) → DB 저장 → 결과 렌더링
```

- 캐시 키: (생년월일시 + 성별 + 역법 + 자시 관법 + status + 상품 타입)
- 이직 타이밍 그래프의 점수는 세운의 합충 규칙으로 **코드가 먼저 계산**하고, AI는 설명만 쓴다

## 10. AI 출력 스키마 (이직 · 직업운, 초안)

```ts
type CareerReading = {
  verdict: "MOVE" | "PREPARE" | "STAY";
  verdictReason: string;            // 60자 이내
  keywords: [string, string, string];
  workStyle: Section & { independence: number /* 0-100 */; strength: string; caution: string; roles: string[] };
  bossFit: Section & { goodLeader: string; badLeader: string; fitOrg: string };
  timing: Section & { years: { year: number; tag: string; text: string }[] };
  independence: Section;
  money: Section & { incomeStyle: string; negotiation: string; caution: string };
  actions: [string, string, string];
  closingQuote: string;
};

type Section = {
  conclusion: string;   // 한 줄 결론
  evidenceChips: string[]; // 예: "己土(기토) 일간"
  scene: string;        // 일상 장면 묘사
  evidence: string;     // "왜 그런가요?" 내용
  advice: string;       // 이렇게 해보세요
};
```

- 금전 · 재물운 스키마는 같은 Section 구조를 재사용: 재물 그릇 / 돈이 들어오는 길 / 돈이 새는 구멍 / 재테크 궁합 / 평생 재물 흐름(대운) / 연도별 재물 흐름 / 지금 해볼 3가지
- 필드가 비거나 이상하면 기본 문구로 대체해서 화면이 깨지지 않게 한다

## 11. Claude API 사용 규칙

- 모델: Sonnet 계열 사용 (모델명은 공식 문서에서 최신 확인 후 환경변수로 관리)
- API 키는 서버 환경변수에만 둔다. 클라이언트 번들에 절대 포함 금지
- 시스템 프롬프트(해석 톤·규칙)는 고정하고 프롬프트 캐싱 적용
- `max_tokens`로 출력 상한 설정
- 해석 톤: 단정 대신 흐름 중심, 일상 장면으로 공감 → 근거 → 실천 조언. 공포 조장·의료·법률·투자 확정 표현 금지
- 결과 하단에 "사주 풀이는 삶을 돌아보는 참고용이에요" 고지

## 12. 샘플 데이터

- 위치: `data/samples/career.json`, `data/samples/money.json`
- 만든이 정보: 정유리 · 1988년 3월 15일 子시 · 수원 · 여성 (戊辰 · 乙卯 · 己巳 · 甲子)
- 실제 결과 렌더러로 그대로 렌더링, `isSample: true` 플래그로 배지·하단 버튼만 다르게

## 13. 보안 · 개인정보

- 결제 성공 여부는 반드시 서버에서 PG사 API로 재검증한 뒤 풀이 생성
- 생년월일시는 풀이 생성·재조회에 필요한 범위만 저장
- 이름은 선택 입력, 닉네임 허용

## 13-1. 토스페이먼츠 결제 흐름

```
1. 결제 버튼 클릭
   → 서버에서 주문 생성: orderId(UUID), amount=990, 입력값(사주 정보) 저장, status=READY
2. 클라이언트: 결제위젯으로 requestPayment({ orderId, amount, orderName, successUrl, failUrl })
3. 성공 시 successUrl로 paymentKey, orderId, amount가 쿼리로 돌아옴
4. 서버(api/payments/confirm):
   - DB의 주문 금액과 쿼리의 amount가 같은지 먼저 확인 (다르면 거절 — 금액 위조 방지)
   - 토스 결제 승인 API 호출: POST https://api.tosspayments.com/v1/payments/confirm
     Authorization: Basic base64(시크릿키 + ":")
   - 승인 성공 → status=PAID 저장 → 풀이 생성 시작 → 결과 페이지로 이동
5. 실패/취소 → failUrl, 주문 status=FAILED
```

규칙:
- 클라이언트 키만 브라우저에 노출, **시크릿 키는 서버 환경변수에만** (`TOSS_SECRET_KEY`)
- 개발은 테스트 키로 진행, 실제 키는 계약 후 교체
- 같은 orderId로 풀이를 두 번 생성하지 않게 멱등 처리 (승인 API 중복 호출 대비)
- 풀이 생성이 실패하면 자동 재시도 1회, 그래도 실패하면 결제 취소 API로 환불하고 안내
- 웹훅(결제 상태 변경)도 받아서 status를 동기화
- API 엔드포인트·SDK 사용법은 구현 전에 토스페이먼츠 공식 개발자 문서에서 최신 내용을 확인할 것

## 13-2. Supabase (DB · 인증)

- Supabase는 관리형 PostgreSQL이다. 표준 SQL과 Postgres 기능을 그대로 쓴다.
- 서버 전용 키(`SUPABASE_SERVICE_ROLE_KEY`)는 서버 환경변수에만 둔다. 브라우저에는 anon 키만.
- 모든 테이블에 RLS(Row Level Security)를 켜고, 사용자는 자기 주문·풀이만 읽을 수 있게 정책을 건다.
- 결제 승인, 풀이 저장 같은 쓰기는 서버(Route Handler)에서만 한다.
- 로그인: Supabase Auth (카카오 로그인 우선 검토)
- 스키마 변경은 `supabase/migrations/`에 SQL 마이그레이션 파일로 남긴다.

테이블 초안:

```sql
orders   (id uuid pk, user_id uuid, product text, amount int, status text,  -- READY / PAID / FAILED / REFUNDED
          payment_key text, birth_input jsonb, created_at timestamptz)
readings (id uuid pk, order_id uuid unique, user_id uuid, product text,
          cache_key text, saju_chart jsonb, content jsonb, created_at timestamptz)
```

- `readings.order_id` unique로 같은 주문의 중복 생성을 DB 레벨에서 막는다.

## 13-3. 확장성 (처음부터 지킬 것)

- **풀이 생성은 비동기 작업으로.** 결제 승인 API 안에서 Claude 응답을 기다리지 않는다.
  승인 → `readings` 행을 status=GENERATING으로 생성 → 작업 큐에서 Claude 호출 → status=DONE.
  결과/로딩 화면은 status를 폴링(또는 Supabase Realtime 구독)한다.
- Claude API 호출 수를 제한하는 동시성 제어를 둔다 (rate limit 초과 시 재시도 + 백오프).
- 같은 입력(cache_key 동일)이면 만세력 계산 결과를 재사용한다.
- 샘플·홈·소개 페이지는 정적 생성(SSG) + CDN 캐시. DB를 타지 않게 한다.
- 자주 조회하는 컬럼(`orders.user_id`, `readings.user_id`, `readings.order_id`, `readings.cache_key`)에 인덱스.
- 서버리스 환경에서는 Supabase 커넥션 풀러(트랜잭션 모드) 주소로 접속한다.

## 14. 폴더 구조 (제안)

```
app/
  (tabs)/page.tsx              # 홈
  (tabs)/readings/page.tsx     # 내 풀이
  (tabs)/my/page.tsx           # 마이
  input/[product]/page.tsx     # 사주 정보 입력
  sample/[product]/page.tsx    # 샘플 풀이
  result/[id]/page.tsx         # 결과
  api/orders/route.ts          # 주문 생성
  api/payments/confirm/route.ts # 토스 승인 + 풀이 생성
  api/payments/webhook/route.ts # 토스 웹훅
  payment/success/page.tsx     # 결제 성공 리다이렉트
  payment/fail/page.tsx        # 결제 실패
components/
  result/                      # VerdictCard, ChartCard, SectionCard, TimingChart, ...
  ui/                          # Button, Chip, Gauge, BottomNav, ...
lib/
  saju/calculateSaju.ts        # 엔진 래퍼 (유일한 진입점)
  saju/relations.ts            # 합충 규칙
  saju/__tests__/golden.test.ts
  ai/generateReading.ts        # Claude 호출 + 스키마 검증
  ai/schemas.ts
data/samples/
```

## 15. 작업 순서

1. Next.js 프로젝트 세팅, Tailwind 디자인 토큰, 폰트
2. `calculateSaju()` + 골든 테스트 통과
3. 결과 화면 컴포넌트 + 샘플 JSON으로 렌더링 (AI 없이)
4. 입력 화면 + 샘플 화면
5. Supabase 세팅(마이그레이션·RLS) + Claude 호출 + 스키마 검증 + DB 저장
6. 토스페이먼츠 연동 (테스트 키) + 서버 승인·금액 검증 + 웹훅
7. 내 풀이 / 마이, 공유(OG 이미지)
