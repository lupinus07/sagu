/**
 * 홈 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/22_홈_2d9c4652.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { queryAll } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

const NAV_TABS = [
  { path: '/home', label: '홈', icon: 'home' },
  { path: '/saved-saju', label: '내 사주', icon: 'auto_stories' },
  { path: '/ai-chat', label: 'AI 상담', icon: 'forum' },
  { path: '/more', label: '더보기', icon: 'more_horiz' },
] as const;

export default function Home() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Simple micro-interaction for horizontal scroll feedback
    queryAll('a[href="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_6px_rgba(19,27,46,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="flex items-center">
              <img src="/assets/img11.png" alt="결 · 내 결을 읽다 로고" className="h-9 w-auto object-contain" />
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="알림" className="relative w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded-full" type="button">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-secondary border border-surface" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Greeting & Cosmic Iljin Context */}
          <section className="px-margin pt-space-md pb-space-lg flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase flex items-center gap-1.5 font-medium">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
                2025년 5월 18일 (일)
              </span>
              {/* Iljin badge: Gi-Sa with Earth/Fire element cues */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container shadow-sm">
                <span className="material-symbols-outlined text-[14px] text-secondary">wb_sunny</span>
                <span className="font-label-sm text-label-sm text-primary-container font-semibold">오늘의 일진</span>
                <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium">
                  己巳 (기사일)
                </span>
              </div>
            </div>
            <div className="mt-1">
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight font-serif">
                안녕하세요, 진하님
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                따뜻한 대지 위에 피어난 볕처럼, 새로운 기회가 온화하게 열리는 날입니다.
              </p>
            </div>
          </section>
          {/* Section 2: Large Featured Card "오늘의 운세" */}
          <section className="px-margin mb-space-xl">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md p-space-lg flex flex-col gap-space-md">
              {/* Ambient subtle corner backdrop glyph */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-5 pointer-events-none flex items-center justify-center text-primary-container">
                <svg className="w-full h-full fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="32" />
                  <line x1="50" x2="50" y1="5" y2="95" />
                  <line x1="5" x2="95" y1="50" y2="50" />
                </svg>
              </div>
              {/* Card Top Header */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  </span>
                  <span className="font-title-md text-title-md text-primary-container font-serif">오늘의 일일 운세</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  정밀 명리 알고리즘
                </span>
              </div>
              {/* Score & Grade Indicator */}
              <div className="flex items-baseline justify-between py-1 relative z-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-serif">
                    88
                    <span className="font-title-md text-title-md text-secondary">점</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold">
                    대길(大吉)
                  </span>
                </div>
                {/* 5-Point Constellation Gauge */}
                <div aria-label="운세 지수 4.5점" className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest" />
                </div>
              </div>
              {/* Fortune Descriptive Text */}
              <div className="relative z-10 p-3.5 rounded-lg bg-surface-container-low">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  생각지 못한 귀인의 도움으로 정체되었던 사안이 시원하게 풀리는 형국입니다. 오늘은 본인의 주관을 확고히 세우고 결단력 있게 행동하기에 최적의 시기입니다.
                </p>
              </div>
              {/* Lucky Elements Pill Row */}
              <div className="grid grid-cols-3 gap-2 relative z-10 pt-1">
                <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">행운의 색</span>
                  <span className="font-body-sm text-body-sm text-primary-container font-medium mt-0.5">짙은 남색</span>
                </div>
                <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">행운의 숫자</span>
                  <span className="font-body-sm text-body-sm text-primary-container font-medium mt-0.5">7</span>
                </div>
                <div className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-container text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">행운의 방위</span>
                  <span className="font-body-sm text-body-sm text-primary-container font-medium mt-0.5">남동쪽</span>
                </div>
              </div>
              {/* Action Link */}
              <div className="pt-2 flex items-center justify-end relative z-10">
                <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-secondary font-semibold hover:text-on-secondary-container transition-colors py-1" href="#">
                  <span className="">시간대별 운세 상세 보기</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>
          {/* Section 3: "내 사주 한 줄 요약" Compact Card */}
          <section className="px-margin mb-space-xl">
            <div className="rounded-xl bg-primary-container text-surface p-space-lg shadow-lg relative overflow-hidden">
              {/* Decorative Celestial Compass / Astrolabe Graphic */}
              <div className="absolute -right-10 -top-10 w-40 h-40 opacity-10 pointer-events-none">
                <svg className="w-full h-full fill-none stroke-surface-bright" strokeWidth="1.2" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" strokeDasharray="4 2" />
                  <circle cx="50" cy="50" r="38" />
                  <circle cx="50" cy="50" r="24" />
                  <circle cx="50" cy="50" r="10" />
                  <line x1="50" x2="50" y1="0" y2="100" />
                  <line x1="0" x2="100" y1="50" y2="50" />
                  <circle cx="50" cy="12" fill="currentColor" r="3" />
                  <circle cx="88" cy="50" fill="currentColor" r="3" />
                  <circle cx="50" cy="88" fill="currentColor" r="3" />
                  <circle cx="12" cy="50" fill="currentColor" r="3" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                    <span className="font-label-md text-label-md text-primary-fixed uppercase tracking-wider">
                      진하님의 원국 일주(日柱)
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface/10 text-secondary-fixed">
                    陽火 · 陽火
                  </span>
                </div>
                <div className="flex items-center gap-3.5 my-1">
                  {/* Pillar Badge */}
                  <div className="w-14 h-14 rounded-lg bg-surface-container-lowest/10 flex flex-col items-center justify-center text-surface-bright shadow-inner">
                    <span className="font-headline-md text-headline-md font-serif leading-none tracking-tight">丙午</span>
                    <span className="font-label-sm text-label-sm text-secondary-fixed mt-1">병오</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-surface-bright font-serif">열정적인 붉은 말의 기운</span>
                    <span className="font-body-sm text-body-sm text-primary-fixed-dim mt-0.5">순수 오행: 화(火) 왕성격</span>
                  </div>
                </div>
                {/* Summary Quote */}
                <p className="font-body-md text-body-md text-surface-bright/90 bg-surface/5 p-3 rounded-lg leading-relaxed">
                  “불꽃처럼 번지는 추진력과 가식 없는 정직함을 품은 타고난 리더의 상”
                </p>
                {/* CTA row */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary-fixed-dim">오행 균형 및 십신 정밀 해설</span>
                  <Link className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-semibold hover:bg-secondary-fixed-dim transition-colors shadow-sm" to="/saju-result">
                    <span className="">내 사주 원식 보기</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: "추천 리포트" Horizontal Cards */}
          <section className="mb-space-xl">
            <div className="px-margin flex items-end justify-between mb-space-sm">
              <div className="flex flex-col">
                <h2 className="font-headline-md text-headline-md text-primary-container font-serif tracking-tight">
                  추천 리포트
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">병화 원국에 정밀 조율된 심층 해석서</p>
              </div>
              <Link className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-0.5" to="/store">
                전체보기
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </Link>
            </div>
            {/* Horizontal scroll container */}
            <div className="flex gap-space-sm overflow-x-auto px-margin pb-2 pt-1 scroll-smooth">
              {/* Report 1: 이직운 */}
              <div className="w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer" onClick={() => navigate('/checkout')}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">explore</span>
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container">
                      32% 할인
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary-container font-serif">이직운 리포트</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                    새로운 직무 적성과 길한 이동 시기를 대운 흐름으로 분석합니다.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-baseline justify-between">
                  <span className="font-label-sm text-label-sm line-through text-outline">19,000원</span>
                  <span className="font-title-lg text-title-lg text-primary-container font-semibold">12,900원</span>
                </div>
              </div>
              {/* Report 2: 궁합 */}
              <div className="w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer" onClick={() => navigate('/checkout')}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">all_inclusive</span>
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container">
                      32% 할인
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary-container font-serif">인연 궁합 리포트</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                    오행의 합과 충, 음양 조화로 보는 두 사람의 깊은 인연과 결실.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-baseline justify-between">
                  <span className="font-label-sm text-label-sm line-through text-outline">28,000원</span>
                  <span className="font-title-lg text-title-lg text-primary-container font-semibold">18,900원</span>
                </div>
              </div>
              {/* Report 3: 재물운 */}
              <div className="w-60 shrink-0 rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer" onClick={() => navigate('/checkout')}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[20px]">savings</span>
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded-full bg-error-container text-on-error-container">
                      36% 할인
                    </span>
                  </div>
                  <h3 className="font-title-md text-title-md text-primary-container font-serif">재물운 심층 분석</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                    타고난 재물 창고(재고귀인)의 유무와 평생 자산 상승기 파악.
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-baseline justify-between">
                  <span className="font-label-sm text-label-sm line-through text-outline">25,000원</span>
                  <span className="font-title-lg text-title-lg text-primary-container font-semibold">15,900원</span>
                </div>
              </div>
            </div>
          </section>
          {/* Section 5: "최근 본 리포트" */}
          <section className="px-margin mb-space-xl flex flex-col gap-space-sm">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-headline-md text-headline-md text-primary-container font-serif tracking-tight">
                최근 본 리포트
              </h2>
              <span className="font-label-sm text-label-sm text-on-surface-variant">총 2건 보관 중</span>
            </div>
            {/* Recent Item 1 */}
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-title-md text-title-md text-primary-container truncate font-serif">
                    2027년 신년운세 (정미년 풀이)
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-label-sm text-label-sm text-on-tertiary-container font-medium flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container inline-block" />
                      열람 완료 (PDF 저장됨)
                    </span>
                    <span className="text-outline-variant font-label-sm">·</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">어제 조회</span>
                  </div>
                </div>
              </div>
              <Link className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container text-primary-container font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-0.5" to="/store">
                다시보기
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
            {/* Recent Item 2 */}
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-title-md text-title-md text-primary-container truncate font-serif">
                    직업·커리어 대운 심층 분석
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                      분석 진행 중 80%
                    </span>
                    <span className="text-outline-variant font-label-sm">·</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">3일 전</span>
                  </div>
                </div>
              </div>
              <Link className="shrink-0 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-0.5 shadow-sm" to="/report-career-move">
                이어보기
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </section>
          {/* Editorial Atmospheric Quote Banner */}
          <section className="px-margin mb-space-xl">
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">format_quote</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                "운명(運命)은 정해진 종착역이 아닌, 내 천성을 바르게 알고 바람의 길을 읽어 나아가는 지혜로운 여정입니다."
                <span className="block mt-1 font-label-sm text-label-sm not-italic text-secondary">
                  ― 적천수(滴天髓) 원문 해석 중
                </span>
              </p>
            </div>
          </section>
          {/* Section 6: Editorial Disclaimer & Footer */}
          <footer className="px-margin pt-space-sm pb-space-lg flex flex-col items-center text-center gap-1.5">
            <div className="w-8 h-0.5 bg-outline-variant/40 rounded-full mb-2" />
            <p className="font-label-sm text-label-sm text-outline">
              본 서비스에서 제공하는 운세와 명리 분석은 자평진전 및 고전 문헌을 기반으로 한 참고용 콘텐츠입니다.
            </p>
            <p className="font-label-sm text-label-sm text-outline-variant mt-0.5">© 2026 결 연구원.</p>
          </footer>
        </div>
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)] border-t border-outline-variant/30">
        <div className="flex justify-around items-center h-16 px-gutter">
          {NAV_TABS.map((tab) => {
            const active = pathname === tab.path;
            return (
              <Link
                key={tab.path}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center justify-center min-w-[56px] h-14 transition-colors ${active ? 'text-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
                to={tab.path}
              >
                <span className="material-symbols-outlined text-[24px]">{tab.icon}</span>
                <span className="font-label-sm text-label-sm mt-1">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
