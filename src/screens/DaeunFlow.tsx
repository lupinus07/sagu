/**
 * 대운 흐름 분석 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/15_대운_흐름_분석_d9e223ce.html element for element; edit it here from now on.
 */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

const NAV_TABS = [
  { path: '/home', label: '홈', icon: 'home', fill: false, matches: ['/home'] },
  { path: '/saved-saju', label: '내 사주', icon: 'calendar_view_week', fill: true, matches: ['/saved-saju', '/daeun-flow'] },
  { path: '/ai-chat', label: 'AI 상담', icon: 'chat', fill: false, matches: ['/ai-chat'] },
  { path: '/more', label: '더보기', icon: 'more_horiz', fill: false, matches: ['/more'] },
] as const;

export default function DaeunFlow() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <button aria-label="뒤로가기" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors text-on-surface" onClick={() => history.back()} type="button">
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight ml-1">대운 흐름</h1>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="도움말 안내" className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </button>
            <button aria-label="공유하기" className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full">
          {/* Subtle Top Ambient Texture */}
          <div className="relative w-full px-margin pt-space-md pb-space-xs">
            {/* Breadcrumb & User Pillar Meta Header */}
            {" "}
            {/* Personal Daewoon Cycle Badge Card */}
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-10 h-10 rounded-full bg-primary-container text-secondary-container flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cyclone
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-title-md text-title-md text-on-surface truncate">김하늘 님</span>
                    <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                      순행 2운
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-0.5 truncate">
                    대운수 2 · 10년 주기 환경 변화
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0 pl-space-xs">
                <span className="block font-label-sm text-label-sm text-secondary tracking-widest uppercase">
                  CURRENT
                </span>
                <span className="font-title-md text-title-md text-primary-container font-semibold">32-41세</span>
              </div>
            </div>
          </div>
          {/* SECTION 1: Luck Trajectory Line Graph */}
          <section className="px-margin mt-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between mb-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">
                    TRAJECTORY
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">평생 운세 흐름도</h2>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-label-sm text-label-sm font-medium">현재: 88점 (대도약기)</span>
                </div>
              </div>
              {/* Graph Canvas Container (SVG) */}
              <div className="relative w-full mt-space-sm">
                {/* SVG Chart */}
                {" "}
                <svg className="w-full h-44 overflow-visible" preserveAspectRatio="none" viewBox="0 0 360 170">
                  <defs>
                    {/* Gradient for current era glow column */}
                    <linearGradient id="currentColGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fed488" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#fed488" stopOpacity="0.0" />
                    </linearGradient>
                    {/* Line Area Under Gradient */}
                    <linearGradient id="chartLineGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#131B2E" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#131B2E" stopOpacity="0.0" />
                    </linearGradient>
                    {/* Active Point Aura Filter */}
                    <filter height="200%" id="auraGlow" width="200%" x="-50%" y="-50%">
                      <feDropShadow dx="0" dy="2" floodColor="#775a19" floodOpacity="0.35" stdDeviation="3" />
                    </filter>
                  </defs>
                  {/* Subtle Horizontal Reference Grids */}
                  <line stroke="#efeeea" strokeDasharray="3 3" strokeWidth="1" x1="20" x2="345" y1="35" y2="35" />
                  <line stroke="#efeeea" strokeDasharray="3 3" strokeWidth="1" x1="20" x2="345" y1="80" y2="80" />
                  <line stroke="#efeeea" strokeDasharray="3 3" strokeWidth="1" x1="20" x2="345" y1="125" y2="125" />
                  {/* Highlight Band for Current Period: Age 32 (x ~ 140 to 205) */}
                  <rect fill="url(#currentColGrad)" height="120" rx="6" width="60" x="125" y="15" />
                  {/* Area Under Curve */}
                  <path d="M 30,118 
                   C 65,115 75,95 95,90 
                   C 115,85 130,48 155,42 
                   C 185,35 195,25 218,22 
                   C 245,20 260,60 280,68 
                   C 305,76 325,82 335,85 
                   L 335,135 L 30,135 Z" fill="url(#chartLineGrad)" />
                  {/* Main Fortune Trajectory Curve */}
                  <path d="M 30,118 
                   C 65,115 75,95 95,90 
                   C 115,85 130,48 155,42 
                   C 185,35 195,25 218,22 
                   C 245,20 260,60 280,68 
                   C 305,76 325,82 335,85" fill="none" stroke="#131B2E" strokeLinecap="round" strokeWidth="2.5" />
                  {/* Milestone Nodes (Ages 12, 22, 32, 42, 52, 62) */}
                  {" "}
                  {/* 12세: x=30, y=118 */}
                  <circle cx="30" cy="118" fill="#ffffff" r="3.5" stroke="#76777d" strokeWidth="2" />
                  {/* 22세: x=95, y=90 */}
                  <circle cx="95" cy="90" fill="#ffffff" r="3.5" stroke="#76777d" strokeWidth="2" />
                  {/* 32세 (CURRENT ACTIVE NODE): x=155, y=42 */}
                  <circle className="animate-ping" cx="155" cy="42" fill="#fed488" fillOpacity="0.45" r="10" />
                  <circle cx="155" cy="42" fill="#131B2E" filter="url(#auraGlow)" r="6" stroke="#ffdea5" strokeWidth="2.5" />
                  <circle cx="155" cy="42" fill="#ffffff" r="2" />
                  {/* 42세: x=218, y=22 (Peak/Golden Era) */}
                  <circle cx="218" cy="22" fill="#775a19" r="4.5" stroke="#fed488" strokeWidth="1.5" />
                  {/* 52세: x=280, y=68 */}
                  <circle cx="280" cy="68" fill="#ffffff" r="3.5" stroke="#76777d" strokeWidth="2" />
                  {/* 62세: x=335, y=85 */}
                  <circle cx="335" cy="85" fill="#ffffff" r="3.5" stroke="#76777d" strokeWidth="2" />
                  {/* Dynamic Callout Box on Current Active Node */}
                  <g transform="translate(118, 5)">
                    <rect fill="#131B2E" height="20" rx="4" width="74" />
                    <text fill="#ffdea5" fontFamily="Noto Sans" fontSize="9" fontWeight="600" textAnchor="middle" x="37" y="14">
                      현재 대운 (88점)
                    </text>
                  </g>
                  {/* X-Axis Labels */}
                  <text fill="#76777d" fontFamily="Noto Sans" fontSize="10" textAnchor="middle" x="30" y="152">
                    12세~
                  </text>
                  <text fill="#76777d" fontFamily="Noto Sans" fontSize="10" textAnchor="middle" x="95" y="152">
                    22세~
                  </text>
                  <text fill="#131B2E" fontFamily="Noto Sans" fontSize="11" fontWeight="700" textAnchor="middle" x="155" y="152">
                    32세~
                  </text>
                  <text fill="#775a19" fontFamily="Noto Sans" fontSize="10" fontWeight="600" textAnchor="middle" x="218" y="152">
                    42세~★
                  </text>
                  <text fill="#76777d" fontFamily="Noto Sans" fontSize="10" textAnchor="middle" x="280" y="152">
                    52세~
                  </text>
                  <text fill="#76777d" fontFamily="Noto Sans" fontSize="10" textAnchor="middle" x="335" y="152">
                    62세~
                  </text>
                </svg>
              </div>
              {/* Graph Insight Footer */}
              <div className="mt-space-xs pt-space-xs flex items-center justify-between text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-secondary">trending_up</span>
                  <span className="font-label-md text-label-md">32세 기점으로 상승곡선 진입 · 42세 경진대운 최정점</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">목화통명(木火通明)</span>
              </div>
            </div>
          </section>
          {/* SECTION 2: Horizontal Scrollable 10-Year Timeline Pillars */}
          <section className="mt-space-lg w-full">
            <div className="px-margin flex items-baseline justify-between mb-space-xs">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">
                  TIMELINE
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">10년 대운 주기 (大運干支)</h2>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">좌우로 넘겨보기</span>
            </div>
            {/* Scrollable Cards Ribbon */}
            <div className="flex gap-space-sm overflow-x-auto px-margin pt-space-xs pb-space-md snap-x scroll-smooth" style={{ scrollbarWidth: "none" }}>
              {/* Pillar 1: 12~21세 丁丑 */}
              <button className="snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95" type="button">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      12 - 21세
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">지남</span>
                  </div>
                  {/* Ganji Tiles (Heavenly Stem / Earthly Branch) */}
                  <div className="my-space-sm flex justify-center gap-1.5">
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#C84B31" }}>
                        丁
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">정화(火)</span>
                    </div>
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#D99B26" }}>
                        丑
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">축토(土)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-on-surface block">정축 (丁丑)</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">식신 / 정재</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate block">학문 탐구기</span>
                </div>
              </button>
              {/* Pillar 2: 22~31세 戊寅 */}
              <button className="snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95" type="button">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      22 - 31세
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">지남</span>
                  </div>
                  {/* Ganji Tiles */}
                  <div className="my-space-sm flex justify-center gap-1.5">
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#D99B26" }}>
                        戊
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">무토(土)</span>
                    </div>
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#3E7B5C" }}>
                        寅
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">인목(木)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-on-surface block">무인 (戊寅)</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">정관 / 비견</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate block">사회 입문·수련</span>
                </div>
              </button>
              {/* Pillar 3: 32~41세 己卯 [ACTIVE - HIGHLIGHTED] */}
              <button className="snap-start shrink-0 w-40 rounded-xl p-space-sm bg-primary-container text-on-primary text-left shadow-md flex flex-col justify-between relative transition-transform active:scale-95" type="button">
                {/* Celestial Active Dot */}
                <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold shadow-sm">
                  진행중 (3년차)
                </span>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white/10 text-secondary-fixed">
                      32 - 41세
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary-container flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      현재
                    </span>
                  </div>
                  {/* Ganji Tiles with Gold Highlight */}
                  <div className="my-space-sm flex justify-center gap-2">
                    <div className="w-12 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shadow-inner">
                      <span className="font-headline-md text-headline-md leading-tight text-secondary-container">
                        己
                      </span>
                      <span className="font-label-sm text-label-sm text-primary-fixed-dim">토(土)</span>
                    </div>
                    <div className="w-12 h-14 rounded-lg bg-white/10 flex flex-col items-center justify-center shadow-inner">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#95d4b0" }}>
                        卯
                      </span>
                      <span className="font-label-sm text-label-sm text-primary-fixed-dim">목(木)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-white block">기묘 (己卯)</span>
                    <span className="font-label-sm text-label-sm text-secondary-fixed">상관 / 정인 조화</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center bg-white/5 rounded-lg py-1">
                  <span className="font-label-sm text-label-sm text-secondary-container font-medium block">
                    도약 및 결실 시작
                  </span>
                </div>
              </button>
              {/* Pillar 4: 42~51세 庚辰 [NEXT GOLDEN ERA] */}
              <button className="snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95" type="button">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container/40 text-on-secondary-container font-semibold">
                      42 - 51세
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">황금기</span>
                  </div>
                  {/* Ganji Tiles */}
                  <div className="my-space-sm flex justify-center gap-1.5">
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#94A3B8" }}>
                        庚
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">경금(金)</span>
                    </div>
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#D99B26" }}>
                        辰
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">진토(土)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-on-surface block">경진 (庚辰)</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">정재 / 겁재</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold truncate block">
                    인생 최고 전성기
                  </span>
                </div>
              </button>
              {/* Pillar 5: 52~61세 辛巳 */}
              <button className="snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95" type="button">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      52 - 61세
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">예정</span>
                  </div>
                  <div className="my-space-sm flex justify-center gap-1.5">
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#94A3B8" }}>
                        辛
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">신금(金)</span>
                    </div>
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#C84B31" }}>
                        巳
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">사화(火)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-on-surface block">신사 (辛巳)</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">편재 / 정관</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate block">안정적 자산 완성</span>
                </div>
              </button>
              {/* Pillar 6: 62~71세 壬午 */}
              <button className="snap-start shrink-0 w-36 rounded-xl p-space-sm bg-surface-container-lowest text-left shadow-sm flex flex-col justify-between transition-transform active:scale-95" type="button">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                      62 - 71세
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">예정</span>
                  </div>
                  <div className="my-space-sm flex justify-center gap-1.5">
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#1E293B" }}>
                        壬
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">임수(水)</span>
                    </div>
                    <div className="w-11 h-12 rounded-lg bg-surface-container-low flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md leading-tight" style={{ color: "#C84B31" }}>
                        午
                      </span>
                      <span className="font-label-sm text-label-sm text-outline">오화(火)</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="font-title-md text-title-md text-on-surface block">임오 (壬午)</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">편관 / 편인</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate block">여유와 명예 전수</span>
                </div>
              </button>
            </div>
          </section>
          {/* SECTION 3: In-Depth Saju Reading Card (Active: 己卯 대운) */}
          <section className="px-margin mt-space-sm mb-space-md">
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              {/* Chapter Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      현재 분석 중
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">2025 ~ 2034년 (만 32~41세)</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">己卯(기묘) 대운 종합 심층 분석</h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    menu_book
                  </span>
                </div>
              </div>
              {/* Core Element Archetype Summary Box */}
              <div className="p-space-md rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="material-symbols-outlined text-[18px] text-secondary">eco</span>
                  <span className="font-title-md text-title-md text-on-surface">대운의 본질: 윤토생목(潤土生木)</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  촉촉한 전답의 흙(己土)이 파릇한 봄나무(卯木)의 뿌리를 포근히 품어주는 형상입니다. 지난 10년간 쌓아온 내면의 씨앗과 무형의 재능이 비로소 사회적 결실과 실질적인 지위로 피어오르는 도약의 10년입니다.
                </p>
              </div>
              {/* 3 Key Focus Areas (Bento Column items) */}
              <div className="space-y-space-sm">
                {/* 1) Career / Social Status */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm" style={{ color: "#3E7B5C" }}>
                    <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">직업 · 사회운</span>
                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-medium">
                        상승 궤도
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      독자적 전문성을 인정받아 프로젝트의 핵심 주도권을 쥐게 됩니다. 남을 따르기보다 본인의 기획과 아이디어로 팀을 이끌어갈 때 가장 큰 운의 조력을 받습니다.
                    </p>
                  </div>
                </div>
                {/* 2) Wealth / Asset Building */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm" style={{ color: "#D99B26" }}>
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">재물 · 자산운</span>
                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-medium">
                        문서화 추천
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      단기 투기형 이익보다는 부동산, 지식재산권 등 안전한 '문서(印綬)' 형태로 자산을 묶어두는 것이 매우 유리합니다. 36세 전후로 실물 자산 취득 운이 강하게 들어옵니다.
                    </p>
                  </div>
                </div>
                {/* 3) Wellbeing / Mindset */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm" style={{ color: "#565e74" }}>
                    <span className="material-symbols-outlined text-[20px]">self_improvement</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">건강 · 마음가짐</span>
                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                        체력 안배
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      성장 욕구가 강해질수록 간(木)과 소화기(土)의 피로가 누적될 수 있습니다. 규칙적인 산책과 명상으로 과도한 신경 예민을 완화하는 생활 습관이 필수적입니다.
                    </p>
                  </div>
                </div>
              </div>
              {/* Traditional Classic Quote / Callout Panel (적천수) */}
              <div className="relative p-space-md rounded-lg bg-surface-container-high overflow-hidden">
                <div className="flex items-center gap-space-xs mb-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[18px]">history_edu</span>
                  <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                    고전 명리 조언 · 적천수(適天髓)
                  </span>
                </div>
                <blockquote className="font-headline-md text-headline-md text-on-surface italic leading-relaxed">
                  “묘목이 비옥한 토양을 만나 그 뿌리를 깊게 내리니, 조급해하지 않아도 시절의 인연은 저절로 피어난다.”
                </blockquote>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  눈앞의 성과를 서둘러 재촉하기보다, 기초를 단단히 다지는 사람에게 42세 대운의 거대한 영화(榮華)가 온전히 주어집니다.
                </p>
              </div>
            </div>
          </section>
          {/* SECTION 4: Contextual Interactive Action Prompts */}
          <section className="px-margin mb-space-lg">
            <div className="p-space-md rounded-xl bg-primary-container text-on-primary shadow-md flex items-center justify-between">
              <div className="min-w-0 pr-space-sm">
                <span className="font-label-sm text-label-sm text-secondary-container block mb-0.5">AI 맞춤 명리 상담</span>
                <h4 className="font-title-md text-title-md text-white truncate">현재 기묘 대운, 올해(乙巳년)는 어떨까?</h4>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-0.5 truncate">
                  대운과 세운(1년 운)의 조화 심층 질문하기
                </p>
              </div>
              <button className="shrink-0 px-space-md py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-title-md font-semibold hover:bg-secondary-fixed transition-colors flex items-center gap-1 shadow-sm" onClick={() => navigate('/ai-chat')} type="button">
                <span className="">질문하기</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]">
        <div className="flex justify-around items-center h-16 px-gutter">
          {NAV_TABS.map((tab) => {
            const active = (tab.matches as readonly string[]).includes(pathname);
            return (
              <Link
                key={tab.path}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center justify-center min-w-[56px] h-14 transition-colors ${active ? 'text-primary-container font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
                to={tab.path}
              >
                <span className="material-symbols-outlined text-[22px]" style={active && tab.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {tab.icon}
                </span>
                <span className="font-label-sm text-label-sm mt-1">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
