/**
 * 페이지를 찾을 수 없음 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/19_페이지를_찾을_수_없음_1d93c22e.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen pt-safe pb-safe";

export default function NotFound() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    byId('homeBtn')?.addEventListener('click', () => {
      navigate('/home');
    });
  }, [navigate]);

  return (
    <>
      <main className="flex flex-col flex-1 relative w-full bg-surface">
        <div className="flex flex-col w-full px-margin-mobile py-space-lg max-w-[480px] mx-auto min-w-0 items-center justify-center text-center select-none">
          <div className="relative w-full aspect-square max-w-[280px] my-space-md flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-surface-container-low opacity-60 scale-95 blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-sm flex items-center justify-center bg-surface-container-lowest">
              <img className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" data-alt="Tranquil Korean oriental watercolor painting depicting an uncharted celestial path with drifting soft midnight indigo ink clouds, minimalist constellations in muted antique gold, and a serene traditional stone lantern glowing softly in mist. Ethereal, meditative, textured Hanji paper aesthetic, balanced and calm." src="/assets/img10.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-surface-container-lowest/20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-4 flex flex-col items-center justify-center">
                <div className="px-space-md py-space-xs rounded-full bg-surface-container/90 backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="font-headline-md text-secondary tracking-widest text-body-sm font-semibold">
                    404
                  </span>
                  <span className="font-label-sm text-on-surface-variant font-medium">· 궤도 이탈</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-1 right-3 w-8 h-8 rounded-full bg-surface-container-high/60 flex items-center justify-center backdrop-blur-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-space-sm mb-space-lg w-full max-w-[340px]">
            <span className="font-label-md text-secondary font-medium tracking-wider mb-space-xs">길을 잃은 운행</span>
            <h1 className="font-headline-xl-mobile text-primary-container font-semibold tracking-tight text-on-surface mb-space-sm">
              찾을 수 없는 페이지예요
            </h1>
            <p className="font-title-md text-on-surface-variant font-medium mb-space-xs">주소를 다시 확인해 주세요</p>
            <p className="font-body-sm text-outline leading-relaxed mt-space-xs break-keep">
              존재하지 않거나 이미 삭제된 주소입니다. 결의 다른 운세와 분석을 계속 살펴보세요.
            </p>
          </div>
          <div className="w-full max-w-[320px] flex flex-col gap-space-sm">
            <button className="w-full py-3.5 px-space-lg rounded-lg bg-primary-container text-on-primary font-title-md shadow-md active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group" id="homeBtn" type="button">
              <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:-translate-x-0.5">
                home
              </span>
              <span>홈으로</span>
            </button>
            <button className="w-full py-3 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-lg transition-colors duration-150 flex items-center justify-center gap-1.5" onClick={() => window.history.back()} type="button">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>이전 화면으로 돌아가기</span>
            </button>
          </div>
          <div className="mt-space-xl pt-space-md flex items-center gap-space-xs text-outline opacity-75">
            <span className="material-symbols-outlined text-[15px]">brightness_empty</span>
            <span className="font-label-sm tracking-wide">사주명리 연구소 결(結)</span>
          </div>
        </div>
      </main>
    </>
  );
}
