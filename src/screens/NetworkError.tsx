/**
 * 네트워크 오류 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/08_네트워크_오류_5b2cc62d.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen";

export default function NetworkError() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    const retryBtn = byId('retry-btn');
    const retryIcon = byId('retry-icon');
    if (retryBtn && retryIcon) {
      retryBtn.addEventListener('click', () => {
        retryIcon.classList.add('rotate-180');
        setTimeout(() => {
          retryIcon.classList.remove('rotate-180');
          window.location.reload();
        }, 500);
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
              네트워크 오류
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="창 닫기"
              className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => navigate('/home')}
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
        <div className="flex flex-col w-full px-margin-mobile py-space-xl items-center justify-between min-h-[calc(100vh-3.5rem)]">
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest uppercase">
                명식 데이터 통신 대기
              </span>
            </div>
          </div>
          <div className="w-full max-w-[340px] flex flex-col items-center text-center my-auto">
            <div className="relative w-52 h-52 flex items-center justify-center mb-space-lg">
              <div className="absolute inset-0 rounded-full bg-surface-container-low/70 scale-95 blur-xl" />
              <svg className="w-48 h-48 drop-shadow-sm" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-outline-variant/60" cx="80" cy="80" r="70" stroke="currentColor" strokeDasharray="3 4" strokeWidth="0.75" />
                <circle className="text-secondary/70 opacity-80" cx="80" cy="80" r="54" stroke="currentColor" strokeDasharray="18 10 4 10" strokeWidth="1.2" />
                <circle className="text-outline-variant/80" cx="80" cy="80" r="38" stroke="currentColor" strokeDasharray="2 3" strokeWidth="0.75" />
                <path className="text-on-primary-fixed/40" d="M42 62C52 48 76 44 94 50C108 55 116 66 114 78C111 92 98 100 84 98C68 96 64 82 72 74C80 66 94 70 96 82" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
                <path className="text-secondary" d="M28 88C44 86 58 92 68 84C76 78 88 77 98 83C110 91 126 89 136 80" stroke="currentColor" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="1.5" />
                <circle className="fill-primary" cx="80" cy="80" r="3" />
                <circle className="fill-secondary" cx="48" cy="48" r="1.5" />
                <circle className="fill-secondary" cx="116" cy="112" r="1.5" />
                <circle className="fill-outline-variant" cx="122" cy="56" r="2" />
                <circle className="fill-outline-variant" cx="38" cy="104" r="1.5" />
                <g opacity="0.85">
                  <circle className="text-secondary animate-ping" cx="98" cy="83" r="5" stroke="currentColor" strokeWidth="1" style={{ animationDuration: "3s" }} />
                  <circle className="fill-secondary" cx="98" cy="83" r="2.5" />
                </g>
              </svg>
              <div className="absolute -bottom-1 bg-surface-container-lowest px-space-sm py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[14px]">cloud_off</span>
                <span className="font-label-sm text-label-sm text-secondary tracking-tight">흐름 끊김</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-space-xs mb-space-sm">
              <span className="font-label-md text-label-md text-secondary tracking-widest">천지운기 정체</span>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary-fixed font-semibold">
                연결이 불안정해요
              </h1>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
              잠시 후 다시 시도해 주세요
            </p>
            <div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-sm">
              <div className="flex items-start gap-space-sm text-left">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] shrink-0 mt-0.5">
                  info
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">인터넷 연결 상태나 비행기 탑승 모드를 확인해 보세요</p>
              </div>
            </div>
            <div className="flex items-center gap-space-xs mt-space-xs opacity-70">
              <span className="font-label-sm text-label-sm text-outline">사주국 상태코드</span>
              <span className="font-label-sm text-label-sm font-semibold text-outline-variant">
                ERR_CELESTIAL_SYNC_TIMEOUT
              </span>
            </div>
          </div>
          <div className="w-full max-w-[340px] flex flex-col items-center gap-space-md pt-space-md">
            <button className="w-full h-14 bg-primary-container text-on-primary rounded-xl flex items-center justify-center gap-space-xs shadow-md active:scale-[0.98] transition-all" id="retry-btn" type="button">
              <span className="material-symbols-outlined text-[20px] transition-transform duration-700" id="retry-icon">
                refresh
              </span>
              <span className="font-title-md text-title-md tracking-normal">다시 시도</span>
            </button>
            <button className="w-full py-space-xs flex items-center justify-center gap-1 text-on-surface-variant hover:text-on-surface active:opacity-60 transition-colors" onClick={() => window.history.back()} type="button">
              <span className="font-label-lg text-label-lg">이전 화면으로 돌아가기</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
