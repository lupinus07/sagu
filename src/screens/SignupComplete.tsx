/**
 * 가입 완료 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/05_가입_완료_1966bb40.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-secondary-container selection:text-on-secondary-container";

export default function SignupComplete() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    // Gentle subtle tactile feedback for actions
    const primaryBtn = byId('btn-start');
    if (primaryBtn) {
      primaryBtn.addEventListener('click', () => {
        primaryBtn.classList.add('opacity-80');
        setTimeout(() => primaryBtn.classList.remove('opacity-80'), 200);
      });
    }
  }, []);

  return (
    <>
      <main className="flex-1 flex flex-col relative w-full bg-surface pt-safe pb-safe">
        <div className="flex flex-col w-full px-6 pt-10 pb-8 items-center justify-between min-w-0">
          {/* Top Brand / Celestial Motif Area */}
          <div className="w-full max-w-sm flex flex-col items-center text-center">
            {/* Aura & Seal Graphic */}
            <div className="relative w-32 h-32 flex items-center justify-center my-2">
              {/* Ambient Concentric Soft Glow Rings */}
              <div className="absolute inset-0 rounded-full bg-secondary-fixed/30 blur-xl animate-pulse" />
              {/* Outer subtle dotted orbit ring */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 128 128">
                <circle cx="64" cy="64" fill="none" opacity="0.35" r="58" stroke="#775a19" strokeDasharray="3 5" strokeWidth="1" />
                <circle cx="64" cy="6" fill="#775a19" opacity="0.7" r="3" />
              </svg>
              {/* Middle Hanji Seal Ring */}
              <div className="relative w-24 h-24 rounded-full bg-surface-container-low shadow-sm flex items-center justify-center p-1.5">
                <div className="w-full h-full rounded-full bg-surface-container-lowest flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                  {/* Subtle watermark circle */}
                  <div className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-secondary-fixed/20 pointer-events-none" />
                  {/* Seal Glyph "결" */}
                  <span className="font-headline-xl-mobile text-headline-xl-mobile text-primary-container font-bold tracking-tight select-none">
                    결
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-0.5 opacity-80" />
                </div>
              </div>
            </div>
            {/* Title & Welcoming Message */}
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-primary-container font-bold tracking-tight mt-5 mb-2">
              환영해요
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
              이제 결과를 저장하고 언제든 다시 볼 수 있어요
            </p>
            {/* Celestial Micro Divider */}
            <div className="flex items-center justify-center gap-2 my-6 opacity-60">
              <div className="w-8 h-[1px] bg-outline-variant" />
              <span className="material-symbols-outlined text-[14px] text-secondary">stars</span>
              <div className="w-8 h-[1px] bg-outline-variant" />
            </div>
            {/* Benefit Cards Stack */}
            <div className="w-full space-y-3">
              {/* Benefit 1: 내 사주 저장 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left">
                <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    auto_stories
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-title-md text-title-md text-primary-container truncate font-semibold">
                    내 사주 저장
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">언제든 다시 확인할 수 있어요</div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-xl">chevron_right</span>
              </div>
              {/* Benefit 2: 가족·친구 추가 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left">
                <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    diversity_1
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-title-md text-title-md text-primary-container truncate font-semibold">
                    가족·친구 추가
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">궁합도 볼 수 있어요</div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-xl">chevron_right</span>
              </div>
              {/* Benefit 3: 오늘의 운세 알림 */}
              <div className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 shadow-sm transition-all duration-300 active:scale-[0.99] text-left">
                <div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    wb_twilight
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-title-md text-title-md text-primary-container truncate font-semibold">
                    오늘의 운세 알림
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">매일 아침 받아보세요</div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-xl">chevron_right</span>
              </div>
            </div>
          </div>
          {/* Bottom CTA Group */}
          <div className="w-full max-w-sm flex flex-col items-center pt-8 mt-4">
            {/* Primary CTA */}
            <button className="w-full bg-primary-container text-on-primary py-4 px-6 rounded-xl font-label-lg text-label-lg font-medium shadow-md hover:opacity-95 active:scale-[0.98] transition flex items-center justify-center gap-2 group cursor-pointer" id="btn-start" type="button" onClick={() => navigate('/home')}>
              <span>내 사주 보러 가기</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            {/* Secondary Later Link */}
            <button className="w-full text-center py-3 mt-1 font-body-sm text-body-sm text-outline hover:text-on-surface transition cursor-pointer" id="btn-later" type="button" onClick={() => navigate('/home')}>
              나중에 할게요
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
