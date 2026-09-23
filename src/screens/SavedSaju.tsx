/**
 * 저장된 사주 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/24_저장된_사주_66b1b5cc.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { query } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";

export default function SavedSaju() {
  useBodyClass(BODY_CLASS);

  useEffect(() => {
    // Simple micro-interaction for demonstration of swipe toggle.
    // (The export waited on DOMContentLoaded; the effect already runs after mount.)
    const swipedCard = query('.-translate-x-32');
    if (swipedCard) {
      swipedCard.addEventListener('click', () => {
        // Toggle the swiped state when clicking the card itself
        if (swipedCard.classList.contains('-translate-x-32')) {
          swipedCard.classList.remove('-translate-x-32');
        } else {
          swipedCard.classList.add('-translate-x-32');
        }
      });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(19,27,46,0.03)] pt-safe">
        <div className="h-14 px-margin-mobile flex items-center justify-between relative">
          <button
            aria-label="뒤로 가기"
            className="w-11 h-11 -ml-space-xs flex items-center justify-center text-on-primary-fixed active:opacity-60 transition-opacity"
            onClick={() => history.back()}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back_ios_new</span>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none max-w-[60%]">
            <h1 className="font-headline-md text-headline-md text-on-primary-fixed tracking-tight truncate">저장된 사주</h1>
          </div>
          <div className="flex items-center justify-end gap-space-sm">
            <button className="min-w-[44px] h-11 px-space-xs flex items-center justify-center font-label-lg text-label-lg text-secondary active:opacity-60 transition-opacity" type="button">
              편집
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-14 bg-surface pb-safe flex-1">
        <div className="flex flex-col w-full px-margin-mobile pb-space-xl">
          {/* Subdued Header Introduction & Slot Status */}
          <section className="mt-space-md mb-space-lg flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-md text-label-md text-secondary tracking-widest">명식 보관함</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">
                <span>저장 인원</span>
                <span className="font-title-md text-on-surface text-[12px] leading-none">3</span>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface-variant text-[11px] leading-none">5</span>
              </div>
            </div>
            <p className="font-headline-md text-headline-md text-on-primary-fixed mt-1">
              소중한 인연들의 사주를 보관하고
              <br />
              언제든 운과 궁합을 살펴보세요.
            </p>
          </section>
          {/* Profile List Container */}
          <div className="flex flex-col gap-space-md w-full" id="profile-container">
            {/* Card 1: User's Own Profile (나) */}
            <div className="relative w-full rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden transition-all duration-300 active:scale-[0.995]">
              <div className="p-space-md flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  {/* Five Elements Indicator (Earth - 황토/무토) */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#fbf6ec]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#c28e2e] shadow-sm flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#fbf6ec]/80" />
                    </div>
                    <span className="absolute -bottom-1 text-[9px] font-label-sm text-[#785a1a] bg-[#f5ecda] px-1.5 py-0.2 rounded-full">
                      토(土)
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-space-xs mb-0.5">
                      <span className="px-1.5 py-0.5 rounded bg-primary-container text-surface font-label-sm text-label-sm">
                        나
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface truncate">김진하</h2>
                      <div className="px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1">
                        戊申{" "}
                        <span className="font-body-sm text-[11px] text-on-surface-variant font-normal">무신</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      1994.08.24 14:15 · 여성 (양력)
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 text-on-surface-variant pl-1">
                  <span className="material-symbols-outlined text-[20px] text-outline-variant">chevron_right</span>
                </div>
              </div>
            </div>
            {/* Card 2: Exposed Swipe Actions Demo (이도윤) */}
            <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-high">
              {/* Hidden Action Buttons Revealed Underneath / Right-aligned */}
              <div className="absolute inset-y-0 right-0 flex items-stretch">
                <button aria-label="사주 정보 수정" className="w-16 bg-surface-container-highest text-on-primary-fixed flex flex-col items-center justify-center gap-0.5 active:bg-surface-dim transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">edit_note</span>
                  <span className="font-label-sm text-label-sm">수정</span>
                </button>
                <button aria-label="사주 프로필 삭제" className="w-16 bg-[#ba1a1a] text-on-error flex flex-col items-center justify-center gap-0.5 active:opacity-90 transition-opacity" type="button">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                  <span className="font-label-sm text-label-sm">삭제</span>
                </button>
              </div>
              {/* Foreground Card Content (Shifted left to reveal actions) */}
              <div className="relative w-full bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] -translate-x-32 transition-transform duration-300">
                <div className="p-space-md flex items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-md min-w-0">
                    {/* Five Elements Indicator (Water - 수/임수) */}
                    <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#edf2f9]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#2b5876] shadow-sm flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#edf2f9]/80" />
                      </div>
                      <span className="absolute -bottom-1 text-[9px] font-label-sm text-[#1e3b4d] bg-[#dbe5f1] px-1.5 py-0.2 rounded-full">
                        수(水)
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-space-xs mb-0.5">
                        <h2 className="font-headline-md text-headline-md text-on-surface truncate">이도윤</h2>
                        <div className="px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1">
                          壬子{" "}
                          <span className="font-body-sm text-[11px] text-on-surface-variant font-normal">임자</span>
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        1992.11.03 08:30 · 남성 (음력)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0 text-on-surface-variant pl-1">
                    <span className="material-symbols-outlined text-[18px] text-outline-variant">swipe_left</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3: Regular Profile Card (박서연) */}
            <div className="relative w-full rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden transition-all duration-300 active:scale-[0.995]">
              <div className="p-space-md flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-md min-w-0">
                  {/* Five Elements Indicator (Fire - 화/병화) */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#fbedeb]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#b84a39] shadow-sm flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#fbedeb]/80" />
                    </div>
                    <span className="absolute -bottom-1 text-[9px] font-label-sm text-[#872d1f] bg-[#f7d7d2] px-1.5 py-0.2 rounded-full">
                      화(火)
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-space-xs mb-0.5">
                      <h2 className="font-headline-md text-headline-md text-on-surface truncate">박서연</h2>
                      <div className="px-2 py-0.5 rounded-full bg-surface-container text-on-primary-fixed font-headline-md text-[13px] tracking-wide ml-1">
                        丙寅{" "}
                        <span className="font-body-sm text-[11px] text-on-surface-variant font-normal">병인</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      1998.05.19 19:40 · 여성 (양력)
                    </p>
                  </div>
                </div>
                <div className="flex items-center flex-shrink-0 text-on-surface-variant pl-1">
                  <span className="material-symbols-outlined text-[20px] text-outline-variant">chevron_right</span>
                </div>
              </div>
            </div>
            {/* Add Profile Interactive Tile */}
            <button className="group relative w-full rounded-xl py-5 px-space-md flex flex-col items-center justify-center gap-1.5 bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-all active:scale-[0.99]" type="button">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-sm group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">add</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-title-md text-title-md text-on-surface">사주 추가하기</span>
                <span className="font-body-sm text-body-sm text-outline-variant mt-0.5">가족, 연인, 동료의 사주를 등록해보세요</span>
              </div>
            </button>
          </div>
          {/* Footnote Guidance */}
          <footer className="mt-space-lg mb-space-sm flex flex-col items-center justify-center gap-space-xs text-center">
            <div className="flex items-center gap-1 text-outline">
              <span className="material-symbols-outlined text-[15px]">info</span>
              <span className="font-label-md text-label-md text-outline">최대 5개까지 사주를 저장할 수 있어요</span>
            </div>
            <p className="font-body-sm text-body-sm text-outline-variant text-[12px] max-w-[260px] leading-relaxed">
              저장된 사주는 궁합, 대운 풀이, 신년 운세 등에서 빠르게 선택하여 불러올 수 있습니다.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
