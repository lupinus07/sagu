/**
 * 리포트 생성 실패 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/04_리포트_생성_실패_072f6a58.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";

export default function ReportFailed() {
  useBodyClass(BODY_CLASS);

  useEffect(() => {
    const retryBtn = byId('retry-button');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        const originalContent = retryBtn.innerHTML;
        retryBtn.innerHTML = `
          <svg class="animate-spin h-5 w-5 text-surface-bright" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>천기(天氣) 다시 계산 중...</span>
        `;
        retryBtn.disabled = true;
        setTimeout(() => {
          retryBtn.innerHTML = originalContent;
          retryBtn.disabled = false;
          alert('분석 서버와의 연결을 재시도합니다.');
        }, 1500);
      });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_12px_rgba(19,27,46,0.03)]">
        <div className="h-14 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="이전 페이지로 이동"
              className="w-11 h-11 -ml-space-xs flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors"
              onClick={() => window.history.back()}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <span className="font-headline-md text-headline-md text-on-surface tracking-tight truncate max-w-[200px]">
              리포트 생성 실패
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="창 닫기"
              className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => window.location.href='#'}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1 relative w-full pt-14 pb-safe bg-surface">
        <div className="flex flex-col w-full px-margin-mobile py-space-md max-w-[480px] mx-auto items-center justify-between text-center min-h-[calc(100vh-4rem)]">
          <div className="w-full flex flex-col items-center my-auto">
            {/* Gentle Animated Astrological Emblem */}
            <div className="relative w-44 h-44 mb-space-lg flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-surface-container-high opacity-40 blur-xl" />
              {/* Ambient Rotating Celestial Ring SVG */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]" fill="none" viewBox="0 0 160 160">
                <circle className="text-secondary-fixed-dim" cx="80" cy="80" opacity="0.6" r="74" stroke="currentColor" strokeDasharray="3 6" strokeWidth="1" />
                <circle className="text-outline-variant" cx="80" cy="80" r="62" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.75" />
                <circle className="text-secondary" cx="80" cy="6" fill="currentColor" r="3" />
                <circle className="text-outline" cx="154" cy="80" fill="currentColor" r="2" />
                <circle className="text-secondary" cx="80" cy="154" fill="currentColor" r="2.5" />
                <circle className="text-outline" cx="6" cy="80" fill="currentColor" r="2" />
              </svg>
              {/* Hanji Texture & Inkwash Artwork Container */}
              <div className="relative w-32 h-32 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover opacity-85 mix-blend-multiply" data-alt="An ethereal minimalist Korean ink-wash painting of ancient celestial chart paper Hanji with delicate golden constellations, a quiet brush mark paused mid-stroke, warm ivory tones, soft gold highlights, deep midnight navy ink, meditative and refined atmosphere" src="/assets/img04.jpg" />
                {/* Gentle Gold Paused Emblem Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/30 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      hourglass_pause
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative Yin-Yang Accent Dot */}
              <div className="absolute -bottom-1 bg-surface-container-low px-space-sm py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-sm text-label-sm text-secondary">계산 일시 정지</span>
              </div>
            </div>
            {/* Main Headings */}
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-headline-md tracking-tight mb-space-xs">
              리포트를 만들지 못했어요
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">결제 금액은 자동으로 환불돼요</p>
            {/* Reassuring Info Card (Hanji Texture & Callout Frame) */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm text-left relative overflow-hidden">
              {/* Muted Gold Accent Pillar on the left margin */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed-dim" />
              {/* Card Header: Refund Status */}
              <div className="flex items-center gap-space-xs mb-space-xs pl-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                <span className="font-title-md text-title-md text-on-surface font-semibold">자동 환불 접수 완료</span>
              </div>
              {/* Order Details */}
              <div className="pl-space-xs space-y-1">
                <p className="font-label-md text-label-md text-on-surface-variant">
                  주문번호:{" "}
                  <span className="text-on-surface">ORD-20241029-781</span>
                  {" "}· 결제 수단 승인 자동 취소 완료
                </p>
                <p className="font-body-sm text-body-sm text-outline pt-space-xs">명식 데이터를 분석하는 과정에서 일시적인 지연이 발생했습니다.</p>
              </div>
              {/* Saju Four Pillars Symbolic Indicator (Subtle balance hint) */}
              <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">auto_stories</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">사주 명리학 분석 엔진</span>
                </div>
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-outline">
                  <span>연</span>
                  <span>·</span>
                  <span>월</span>
                  <span>·</span>
                  <span>일</span>
                  <span>·</span>
                  <span>시</span>
                </div>
              </div>
            </div>
            {/* Reassurance Micro-notice */}
            <p className="font-label-md text-label-md text-outline mt-space-md">
              카드사에 따라 승인 취소 반영까지 영업일 기준 1~3일 소요될 수 있습니다.
            </p>
          </div>
          {/* Bottom Interactive Buttons */}
          <div className="w-full flex flex-col gap-space-sm pt-space-md pb-space-xs">
            {/* Retry Action */}
            <button className="w-full py-4 px-space-md rounded-lg bg-primary-container text-surface-bright font-title-md text-title-md font-medium shadow-md active:scale-[0.99] transition-transform flex items-center justify-center gap-space-xs" id="retry-button" type="button">
              <span className="material-symbols-outlined text-[20px]">refresh</span>
              <span>다시 시도</span>
            </button>
            {/* Support Inquiry Action */}
            <button className="w-full py-3.5 px-space-md rounded-lg bg-surface-container text-primary-container font-title-md text-title-md font-medium hover:bg-surface-container-high active:scale-[0.99] transition-all flex items-center justify-center gap-space-xs" onClick={() => alert('고객센터 연결: 평일 10:00 - 18:00 (1:1 실시간 상담)')} type="button">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>고객센터 문의</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
