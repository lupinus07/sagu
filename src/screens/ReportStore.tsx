/**
 * 프리미엄 리포트 스토어 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/02_프리미엄_리포트_스토어_5b15eb14.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { byId, query, queryAll } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

const NAV_TABS = [
  { path: '/home', label: '홈', icon: 'home', matches: ['/home'] },
  { path: '/saved-saju', label: '내 사주', icon: 'view_column', matches: ['/saved-saju'] },
  { path: '/ai-chat', label: 'AI 상담', icon: 'forum', matches: ['/ai-chat'] },
  { path: '/more', label: '더보기', icon: 'more_horiz', matches: ['/more', '/store'] },
] as const;

export default function ReportStore() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const modal = byId('report-modal');
    const modalCard = byId('modal-card');
    const closeBtn = byId('modal-close');
    const titleElem = byId('modal-title');
    const descElem = byId('modal-desc');
    const badgeElem = byId('modal-badge');
    const priceElem = byId('modal-price');
    const origPriceElem = byId('modal-orig-price');
    function openModal(data: Record<'title' | 'desc' | 'badge' | 'price' | 'orig', string | undefined>) {
      titleElem.textContent = data.title ?? null;
      descElem.textContent = data.desc ?? null;
      badgeElem.textContent = data.badge ?? null;
      priceElem.textContent = data.price ?? null;
      origPriceElem.textContent = data.orig ?? null;

      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      modalCard.classList.remove('translate-y-full');
      modalCard.classList.add('translate-y-0');
    }
    function closeModal() {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modal.classList.remove('opacity-100');
      modalCard.classList.add('translate-y-full');
      modalCard.classList.remove('translate-y-0');
    }
    queryAll('.report-card').forEach(function(card) {
      const btn = query('.open-detail-btn', card);
      const clickHandler = function(e: Event) {
        e.stopPropagation();
        openModal({
          title: card.dataset.title,
          badge: card.dataset.badge,
          desc: card.dataset.desc,
          price: card.dataset.price,
          orig: card.dataset.orig
        });
      };
      if (btn) btn.addEventListener('click', clickHandler);
      card.addEventListener('click', clickHandler);
    });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
      });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-surface-container">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/img01.png" />
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight">프리미엄 리포트</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface-variant px-space-xs hidden sm:inline-block">
              사주 분석 결과
            </span>
            <button aria-label="도움말 안내" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full">
          {/* Interactive Modal Container for "자세히 보기" */}
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-primary-container/40 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="report-modal">
            <div className="bg-surface-container-lowest w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl transform translate-y-full transition-transform duration-300 max-h-[751px] overflow-y-auto" id="modal-card">
              <div className="flex items-center justify-between pb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                  <span id="modal-badge" className="">심층 리포트 안내</span>
                </span>
                <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" id="modal-close">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <div className="mt-2">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container" id="modal-title">
                  리포트 상세
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed" id="modal-desc">
                  상세 해설 내용이 표시됩니다.
                </p>
              </div>
              <div className="mt-5 p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <span className="">제공 형태</span>
                  <span className="text-on-surface font-title-md text-title-md">고화질 PDF 다운로드 + 앱 내 상시 열람</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <span className="">분량</span>
                  <span className="text-on-surface font-title-md text-title-md">약 10페이지 내외</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
                  <span className="">열람 혜택</span>
                  <span className="text-secondary font-title-md text-title-md">전용 AI 상담 질문권 3회 포함</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between pt-2">
                <div>
                  <span className="font-label-sm text-label-sm text-outline line-through" id="modal-orig-price">
                    정가 25,000원
                  </span>
                  <p className="font-headline-md text-headline-md text-primary-container" id="modal-price">15,900원</p>
                </div>
                <button className="px-6 py-3.5 rounded-lg bg-primary-container text-surface-bright font-title-md text-title-md shadow-md active:scale-95 transition-transform flex items-center gap-1.5" onClick={() => navigate('/checkout')}>
                  <span className="">리포트 열람하기</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-margin-mobile pt-3 pb-8 flex flex-col gap-6">
            {/* Top Editorial Header Banner */}
            <header className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-6 shadow-[0_4px_24px_-4px_rgba(19,27,46,0.06)]">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    PREMIUM SAJU REPORT
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[22px]">all_inclusive</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container leading-tight">
                    인생의 중대한 결정을 위한
                    <br />
                    맞춤 심층 리포트
                  </h1>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    인공지능과 정통 명리학 고전 원전(자평진전·적천수)의 정밀 대조를 통한 고해상도 사주 분석서
                  </p>
                </div>
                {/* User Context Pill */}
                <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-low text-primary-container shadow-sm self-start">
                  <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                  <span className="font-label-md text-label-md">
                    <strong className="font-title-md text-title-md text-on-surface">김하늘</strong>
                    님의{" "}
                    <span className="text-secondary font-medium">병화(丙火)</span>
                    {" "}원국 맞춤 분석 가능
                  </span>
                </div>
              </div>
              {/* Subtle background celestial motif */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" />
            </header>
            {/* Visual Storytelling Hero Card */}
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)]">
              <div className="relative h-44 w-full bg-cover bg-center" data-alt="A luxurious close-up of a traditional Korean calligraphy desk with aged mulberry Hanji paper, celestial star charts inked in deep indigo and antique gold leaf accents, illuminated by soft morning sunlight in a serene study." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHZhmXqnLUKn47YP0kfYVnjqDGcFEleJz_q4p5Hw7zcFGKpXyFrxvp3NpmilZo1veYuHHYcdX5mGbtU0mOZZS-xmAbsYdF0SGHznliwLsPr9Q57vq_80hDBPHNc9y0eXeDOgTre5WRHYcCWzBJjrQfiyS8sjarxKI9FVmJ2T7zcKLzSCkm798CyaHYpkrfova8pBLAzVWBFiaGnYhPQ6or_TVUbcARn1oKYMZvQmw2t8jSp_kMlulb4w')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="text-surface-bright">
                    <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
                      천문과 명리의 조화
                    </span>
                    <p className="font-headline-md text-headline-md text-surface-bright leading-tight mt-0.5">
                      단 한 권의 온전한 길잡이
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest/20 backdrop-blur-md text-surface-bright font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span className="">정통 사주 약 10p</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Themed Reports Section Header */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-primary-container">주제별 심층 리포트</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  총 2종
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-medium">실시간 AI 생성 (약 1분)</span>
            </div>
            {/* 4 Themed Report Cards */}
            <div className="flex flex-col gap-4">
              {/* Report 1: 이직운 리포트 */}
              <article
                className="report-card relative flex flex-col rounded-2xl bg-surface-container-lowest p-5 shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] transition-all active:scale-[0.99]"
                data-badge="직장인 베스트"
                data-desc="사주 원국 내 관성(官星)과 인성(印星)의 에너지를 해독하여 당신의 숨겨진 직업 적성과 가장 유리한 이직 최적기(월별 타이밍)를 짚어드립니다. 새 직장에서의 상사·동료 인연수 및 커리어 도약 전략을 정밀하게 안내합니다."
                data-orig="정가 19,000원 (32% 할인)"
                data-price="12,900원"
                data-title="이직운 리포트 (직장·커리어 심층 분석)"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">explore</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                          직장인 베스트
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">소장용 PDF</span>
                      </div>
                      <h2 className="font-title-lg text-title-lg text-primary-container mt-0.5 leading-snug">
                        이직운 리포트 (직장·커리어)
                      </h2>
                    </div>
                  </div>
                  <span className="text-secondary font-headline-md text-headline-md select-none">官</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                  적성과 이직 최적기(월별 타이밍), 상사·동료 인연수 및 커리어 도약 전략 분석
                </p>
                {/* Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    #이직 타이밍
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    #조직 적합도
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    #직장 내 귀인
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 bg-surface-container-low/50 px-3 py-2 rounded-xl">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-label-md text-label-md text-error font-medium">32%</span>
                    <span className="font-headline-md text-headline-md text-primary-container">12,900원</span>
                    <span className="font-label-sm text-label-sm text-outline line-through">19,000원</span>
                  </div>
                  <button className="open-detail-btn px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary-container font-label-lg text-label-lg shadow-sm hover:bg-surface-container active:scale-95 transition-all flex items-center gap-1" type="button">
                    <span className="">자세히 보기</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </article>
              {/* Report 2: 재물운 심층 리포트 (Featured / Popular 1) */}
              <article
                className="report-card relative flex flex-col rounded-2xl bg-surface-container-lowest p-5 shadow-[0_8px_28px_-4px_rgba(19,27,46,0.08)] ring-0 transition-all active:scale-[0.99]"
                data-badge="추천 종합"
                data-desc="초년·중년·말년의 평생 대운 흐름과 재물, 건강, 직업, 인연을 아우르는 사주 원국 총체적 분석. 본인의 선천적 기질과 인생 전환점 타이밍을 심층 해설합니다."
                data-orig="정가 30,000원 (35% 할인)"
                data-price="19,900원"
                data-title="종합 운세 리포트 (평생 사주 원국 총평)"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">menu_book</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-secondary text-surface-bright font-label-sm text-label-sm">
                          추천 종합
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-medium">인기 1위</span>
                      </div>
                      <h2 className="font-title-lg text-title-lg text-primary-container mt-0.5 leading-snug">
                        종합 운세 리포트 (평생 사주 원국 총평)
                      </h2>
                    </div>
                  </div>
                  <span className="text-secondary font-headline-md text-headline-md select-none">命</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
                  초년·중년·말년의 평생 대운 흐름과 재물, 건강, 직업, 인연을 아우르는 사주 원국 총체적 분석
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container">
                    #평생총운
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container">
                    #대운흐름
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-secondary-container/40 font-label-sm text-label-sm text-on-secondary-container">
                    #종합운세가이드
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 bg-surface-container-low/50 px-3 py-2 rounded-xl">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-label-md text-label-md text-error font-medium">35%</span>
                    <span className="font-headline-md text-headline-md text-primary-container">19,900원</span>
                    <span className="font-label-sm text-label-sm text-outline line-through">30,000원</span>
                  </div>
                  <button className="open-detail-btn px-3.5 py-1.5 rounded-lg bg-primary-container text-surface-bright font-label-lg text-label-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1" type="button">
                    <span className="">자세히 보기</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </article>
              {/* Report 3: 궁합 리포트 */}
              {/* Report 4: 2027년 신년운세 */}
            </div>
            {/* Editorial Callout Quote */}
            <div className="p-5 rounded-2xl bg-surface-container-low border-l-4 border-secondary flex flex-col gap-2 shadow-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                명리정종(命理正宗) 원문 발췌
              </span>
              <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                “지피지기면 백전불태라. 명(命)을 아는 자는 하늘을 원망하지 않고, 기미(機微)를 살피는 자는 때를 놓치지 아니한다.”
              </p>
            </div>
            {/* Trust & Value Proposition Section */}
            <section className="rounded-2xl bg-surface-container-lowest p-5 shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">shield_with_heart</span>
                <h3 className="font-title-md text-title-md text-primary-container">리포트 구매 보장 & 혜택</h3>
              </div>
              <div className="flex flex-col gap-3.5">
                {/* Benefit 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-title-md text-title-md text-on-surface">약 10페이지 분량 영구 소장</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      고해상도 PDF 다운로드 및 앱 보관함에서 평생 무제한 다시보기
                    </p>
                  </div>
                </div>
                {/* Benefit 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-title-md text-title-md text-on-surface">정통 명리학 박사진 감수</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      자평진전·적천수 정통 해석 모델을 적용한 검증된 심층 산출 알고리즘
                    </p>
                  </div>
                </div>
                {/* Benefit 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-title-md text-title-md text-on-surface">AI 상담 추가 질문권 3회 증정</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      리포트 열람 중 궁금한 사항을 전용 대화창에서 깊이 있게 질문 가능
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Bottom Disclaimer & Consumer Guard */}
            <footer className="flex flex-col items-center justify-center gap-1.5 pt-2 pb-6 px-4 text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">본 서비스는 참고용 콘텐츠입니다</p>
              <p className="font-label-sm text-label-sm text-outline max-w-xs leading-normal">
                명리학적 해석은 통계와 고전 이론에 기반하며 개인의 선택과 환경에 따라 결과가 다를 수 있습니다. 디지털 콘텐츠 특성상 리포트 열람 및 파일 다운로드 이후에는 청약철회가 제한될 수 있습니다.
              </p>
              <span className="font-label-sm text-label-sm text-outline-variant mt-1">
                © 2026 결 연구원. All rights reserved.
              </span>
            </footer>
          </div>
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
                <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
                <span className="font-label-sm text-label-sm mt-1">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
