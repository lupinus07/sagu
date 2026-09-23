/**
 * 스플래시 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/06_스플래시_bee06bb6.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-body-md text-on-surface antialiased";

export default function Splash() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/home-guest'), 1600);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <main
        className="flex flex-col relative w-full min-h-screen bg-surface pt-safe pb-safe cursor-pointer"
        onClick={() => navigate('/home-guest')}
      >
        <div className="flex flex-col w-full relative select-none overflow-hidden items-center justify-center" style={{ minHeight: "calc(100vh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))" }}>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl transform -translate-y-4" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center px-margin-mobile">
            <div className="relative flex items-center justify-center w-64 h-64">
              <svg
                className="absolute inset-0 w-full h-full text-secondary"
                fill="none"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" opacity="0.22" r="82" stroke="currentColor" strokeDasharray="2 6" strokeWidth="0.75" />
                <circle cx="100" cy="100" opacity="0.18" r="70" stroke="currentColor" strokeWidth="1.2" />
                <path d="M42,100 C42,68 68,42 100,42 C132,42 158,68 158,100 C158,132 132,158 100,158 C72,158 48,136 43,109" opacity="0.22" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                <circle cx="100" cy="100" fill="currentColor" opacity="0.04" r="54" />
              </svg>
              <span className="relative font-headline-xl text-[68px] leading-none font-semibold text-primary-container tracking-widest pl-2">
                결
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 my-space-sm opacity-40">
              <span className="w-1 h-1 rounded-full bg-secondary" />
            </div>
            <p className="font-headline-md text-headline-md text-outline tracking-[0.28em] font-normal pl-1 text-center">
              내 결을 읽다
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
