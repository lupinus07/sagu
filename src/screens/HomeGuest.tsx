/**
 * 홈 (비로그인) — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/21_홈_(비로그인)_601ece2d.html element for element; edit it here from now on.
 */
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { query } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';
import { LoginSheetDrawer } from './LoginSheet';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

const NAV_TABS = [
  { path: '/home-guest', label: '홈', icon: 'home' },
  { path: '/saved-saju', label: '내 사주', icon: 'auto_stories' },
  { path: '/ai-chat', label: 'AI 상담', icon: 'forum' },
  { path: '/more', label: '더보기', icon: 'more_horiz' },
] as const;

export default function HomeGuest() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loginSheetOpen, setLoginSheetOpen] = useState(false);
  const openLoginSheet = () => setLoginSheetOpen(true);
  const closeLoginSheet = () => setLoginSheetOpen(false);

  // Lock page scroll and allow Esc to close while the sheet is up.
  useEffect(() => {
    if (!loginSheetOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLoginSheet();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [loginSheetOpen]);

  useEffect(() => {
    // Micro-interaction for smooth horizontal wheel scrolling on cards
    const scrollContainer = query('.overflow-x-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
          scrollContainer.scrollLeft += evt.deltaY;
        }
      });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_6px_rgba(19,27,46,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="flex items-center">
              <img src="/assets/img11.png" alt="결 · 내 결을 읽다 로고" className="h-8 w-auto object-contain" />
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
          {/* Top Utility Bar for Logged-Out State */}
          <div className="px-margin pt-space-xs pb-space-sm flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider">천문만세력 天文萬歲曆 기반</span>
            </div>
            <button className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary-container font-label-lg text-label-lg active:scale-95 transition-transform flex items-center gap-1 shadow-sm" type="button" onClick={() => navigate('/login')}>
              <span className="material-symbols-outlined text-[16px] text-secondary">login</span>
              <span className="">로그인</span>
            </button>
          </div>
          <div className="px-margin space-y-space-xl">
            {/* Hero Card: Serene Celestial Night & Manseiryeok Theme */}
            <div className="relative overflow-hidden rounded-xl bg-primary-container text-surface-container-lowest p-space-lg shadow-xl">
              {/* Celestial Ring SVG Watermark */}
              <div className="absolute -right-12 -top-10 w-48 h-48 pointer-events-none opacity-20">
                <svg className="w-full h-full text-secondary-fixed" fill="none" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
                  <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="1" />
                  <line stroke="currentColor" strokeWidth="0.75" x1="100" x2="100" y1="10" y2="190" />
                  <line stroke="currentColor" strokeWidth="0.75" x1="10" x2="190" y1="100" y2="100" />
                  <circle cx="100" cy="55" fill="#3E7B5C" r="4" />
                  <circle cx="145" cy="100" fill="#B33927" r="4" />
                  <circle cx="100" cy="145" fill="#C5A059" r="4" />
                  <circle cx="55" cy="100" fill="#DDE1E8" r="4" />
                  <circle cx="100" cy="100" r="6" stroke="#C5A059" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-start space-y-space-md">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                  <span className="font-label-sm text-label-sm text-secondary-fixed tracking-wide">
                    2026 정밀 신년 및 평생 사주
                  </span>
                </div>
                {/* Headline & Subtext */}
                <div className="space-y-space-xs">
                  <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-surface-bright tracking-tight leading-snug">
                    내 사주,
                    <br />
                    1분이면 알 수 있어요
                  </h1>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">회원가입 없이 생년월일로 바로 확인해 보세요</p>
                </div>
                {/* Four Pillars Mini Glyph Ribbon Preview */}
                <div className="w-full grid grid-cols-4 gap-space-xs pt-space-xs">
                  <div className="bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim">시주(時)</span>
                    <span className="font-headline-md text-headline-md text-secondary-fixed">時</span>
                  </div>
                  <div className="bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim">일주(日)</span>
                    <span className="font-headline-md text-headline-md text-secondary-fixed">日</span>
                  </div>
                  <div className="bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim">월주(月)</span>
                    <span className="font-headline-md text-headline-md text-secondary-fixed">月</span>
                  </div>
                  <div className="bg-surface-container-lowest/10 rounded-lg p-2 flex flex-col items-center">
                    <span className="font-label-sm text-label-sm text-primary-fixed-dim">년주(年)</span>
                    <span className="font-headline-md text-headline-md text-secondary-fixed">年</span>
                  </div>
                </div>
                {/* CTA Button */}
                <button className="w-full mt-space-xs py-3.5 px-space-md rounded-lg bg-secondary-container text-on-secondary-fixed font-title-md text-title-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md" type="button" onClick={openLoginSheet}>
                  <span className="">무료로 내 사주 보기</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Section: 이런 게 궁금하지 않으셨나요? */}
            <div className="space-y-space-sm">
              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-md text-headline-md text-primary-container">이런 게 궁금하셨나요?</span>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest">疑問</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">핵심 명리 진단</span>
              </div>
              <div className="flex gap-space-sm overflow-x-auto pb-2 scrollbar-none -mx-margin px-margin">
                {/* Card 1: Tree / Wood Element */}
                <div className="min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                    </div>
                    <h2 className="font-title-md text-title-md text-on-surface pt-1">나는 어떤 사람일까?</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      오행의 목(木)과 일간으로 탐색하는 타고난 기질과 잠재 역량
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="">본원 성향 알아보기</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </div>
                </div>
                {/* Card 2: Fire Element */}
                <div className="min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
                      <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                    </div>
                    <h2 className="font-title-md text-title-md text-on-surface pt-1">올해 운은 어떨까?</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      2026 병오(丙午)년 대운과 세운이 전하는 재물·이직의 흐름
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="">2026 세운 흐름</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </div>
                </div>
                {/* Card 3: Water Element */}
                <div className="min-w-[210px] flex-shrink-0 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[18px]">favorite</span>
                    </div>
                    <h2 className="font-title-md text-title-md text-on-surface pt-1">이 사람과 잘 맞을까?</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      천간합과 지지삼합으로 풀어내는 상호 보완적 오행 궁합
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="">인연 및 합충 분석</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Section: 오늘의 운세 (Locked Preview) */}
            <div className="space-y-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-headline-md text-headline-md text-primary-container">오늘의 운세</span>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest">日辰</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                  2026년 5월 18일
                </span>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                {/* Blurred Background Content */}
                <div aria-hidden="true" className="filter blur-[6px] select-none opacity-40 space-y-space-md pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="font-headline-lg-mobile text-headline-lg-mobile font-serif text-primary-container">
                      88점 · 大吉
                    </span>
                    <span className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                      만사형통
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    동방에서 귀인이 도우니 문서에 서명하거나 중요한 결단을 내리기에 더없이 청명한 기운이 깃든 날입니다. 붉은 빛 소품을 지니면 뜻밖의 재성(財星)이 일어납니다.
                  </p>
                  <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="p-2 bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">행운의 색상</span>
                      <p className="font-title-md text-title-md text-on-surface">청록색 (木)</p>
                    </div>
                    <div className="p-2 bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">행운의 숫자</span>
                      <p className="font-title-md text-title-md text-on-surface">3, 8</p>
                    </div>
                  </div>
                </div>
                {/* Lock Foreground Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-space-md text-center bg-surface-container-lowest/70 backdrop-blur-[2px]">
                  <div className="w-11 h-11 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center mb-space-sm shadow-md">
                    <span className="material-symbols-outlined text-[22px]">lock</span>
                  </div>
                  <h3 className="font-title-md text-title-md text-on-surface mb-1">생년월일을 입력하면 오늘의 운세를 볼 수 있어요</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[260px] mb-space-md">
                    본인의 일주(日柱)와 당일의 기운 간 상생상극을 정확히 계산합니다
                  </p>
                  <button className="px-space-md py-2.5 rounded-lg bg-primary-container text-surface-container-lowest font-label-lg text-label-lg flex items-center gap-1.5 active:scale-95 transition-all shadow-md" type="button" onClick={openLoginSheet}>
                    <span className="">생년월일 입력하고 무료로 보기</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Section: 이렇게 분석해 드려요 (3 Steps) */}
            <div className="space-y-space-md">
              <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-md text-headline-md text-primary-container">이렇게 분석해 드려요</span>
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest">傳統 命理</span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">정통 해석 체계</span>
              </div>
              <div className="space-y-space-sm">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">explore</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">STEP 01</span>
                      <h4 className="font-title-md text-title-md text-on-surface">정확한 만세력 계산</h4>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      한국천문연구원 기준 24절기와 출생지 진태양시(眞太陽時) 시차를 분 단위까지 정밀 보정합니다.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">view_column</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">STEP 02</span>
                      <h4 className="font-title-md text-title-md text-on-surface">사주 원국 및 오행 균형 판별</h4>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      천간과 지지 8글자의 상호작용과 십신(十神), 오행(목·화·토·금·수)의 과유불급을 가늠합니다.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">STEP 03</span>
                      <h4 className="font-title-md text-title-md text-on-surface">고전 기반의 현대적 AI 조언</h4>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      《자평진전》, 《적천수》 등 검증된 명리학 문헌을 학습한 AI가 현실적이고 정제된 언어로 해석합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Editorial Callout Panel: Classical Wisdom Quote */}
            <div className="relative bg-surface-container-low rounded-xl p-space-md shadow-sm overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary" />
              <div className="pl-2 space-y-space-xs">
                <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                  “자신의 기운과 그릇을 바로 알아 나아감과 물러남을 도모하는 지혜”
                </p>
                <span className="font-label-sm text-label-sm text-on-surface-variant block font-sans">
                  — 《자평진전 子平眞詮》 격국론(格局論) 중에서
                </span>
              </div>
            </div>
            {/* Trust Indicator Banner */}
            <div className="bg-surface-container rounded-lg p-space-sm flex items-center justify-center gap-2 text-center">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">절기·출생지 진태양시 정밀 보정 알고리즘 적용</span>
            </div>
            {/* Bottom Disclaimer & Copyright */}
            <div className="text-center space-y-1 pb-space-lg">
              <p className="font-label-sm text-label-sm text-on-surface-variant/80">
                본 서비스는 인생의 자기성찰을 돕기 위한 참고용 명리 콘텐츠입니다.
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant/60 font-sans">
                © 2026 결 연구원. All rights reserved.
              </p>
            </div>
          </div>
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
      {loginSheetOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-[#131b2e]/65 backdrop-blur-[2px] animate-fade-in" onClick={closeLoginSheet} />
          <div className="relative max-h-full overflow-y-auto rounded-t-[28px] bg-surface pb-safe animate-sheet-up">
            <LoginSheetDrawer
              title="로그인하고 무료로 사주 보기"
              subtitle="간편 로그인 후 바로 내 사주를 확인할 수 있어요"
              onDismiss={closeLoginSheet}
            />
          </div>
        </div>
      )}
    </>
  );
}
