/**
 * 로그인 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/03_로그인_0df935af.html element for element; edit it here from now on.
 */
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-fixed";

export default function Login() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  return (
    <>
      <main className="flex-1 flex flex-col relative w-full pb-safe bg-surface min-h-screen pt-safe">
        <div className="flex flex-col w-full px-margin-mobile pb-space-lg select-none">
          {/* Top Dismiss Bar */}
          <div className="w-full flex items-center justify-between py-space-sm">
            <button
              aria-label="닫기"
              className="w-10 h-10 -ml-space-xs rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high/60 active:scale-95 transition-all"
              onClick={() => history.back()}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          {/* Hero Identity Section */}
          <div className="flex flex-col items-center justify-center pt-space-md pb-space-xl text-center relative">
            <div className="flex flex-col items-center justify-center pt-space-lg pb-space-md">
              <img src="/assets/img03.png" alt="결 · 내 결을 읽다" className="h-20 w-auto object-contain mb-space-sm select-none" />
              <p className="font-body-md text-body-md text-on-surface-variant font-normal leading-relaxed text-center">
                나를 온전히 마주하는 정밀 AI 명리 진단
              </p>
              <p className="font-label-sm text-label-sm text-outline tracking-wider pt-1">천간과 지지가 빚어내는 삶의 궤적을 확인해보세요</p>
            </div>
          </div>
          {/* Social Authentication Group */}
          <div className="w-full max-w-sm mx-auto flex flex-col gap-space-sm">
            {/* Kakao Button */}
            <button className="w-full h-13 py-3 px-space-md rounded-xl bg-[#FEE500] text-[#191919] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:brightness-95 active:scale-[0.99] transition-all" type="button" onClick={() => navigate('/terms')}>
              <span className="absolute left-space-md flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C6.48 3 2 6.58 2 11c0 2.85 1.88 5.35 4.73 6.72-.21.77-.76 2.79-.87 3.22-.14.53.19.53.41.38.17-.11 2.74-1.87 3.86-2.63.61.09 1.23.14 1.87.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                </svg>
              </span>
              <span className="">카카오로 시작하기</span>
            </button>
            {/* Naver Button */}
            <button className="w-full h-13 py-3 px-space-md rounded-xl bg-[#03C75A] text-[#FFFFFF] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:brightness-95 active:scale-[0.99] transition-all" type="button" onClick={() => navigate('/terms')}>
              <span className="absolute left-space-md flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845 7.37 0H0v24h7.727V11.155L16.63 24H24V0h-7.727v12.845z" />
                </svg>
              </span>
              <span className="">네이버로 시작하기</span>
            </button>
            {/* Google Button */}
            <button className="w-full h-13 py-3 px-space-md rounded-xl bg-surface-container-lowest text-[#1F2937] font-title-md text-title-md flex items-center justify-center relative shadow-sm hover:bg-surface-container-low active:scale-[0.99] transition-all border border-outline-variant/60" type="button" onClick={() => navigate('/terms')}>
              <span className="absolute left-space-md flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.67v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.16z" fill="#4285F4" />
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.4 7.34 24 12 24z" fill="#34A853" />
                  <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
                  <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.6 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
                </svg>
              </span>
              <span className="">Google로 시작하기</span>
            </button>
          </div>
          {/* Guest Access Link */}
          <div className="mt-space-lg flex justify-center items-center">
            <button className="group inline-flex items-center gap-1 font-body-md text-body-md text-on-surface-variant hover:text-primary py-space-xs px-space-sm rounded-full transition-colors" type="button" onClick={() => navigate('/home-guest')}>
              <span className="">둘러보기</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform text-outline">
                arrow_forward
              </span>
            </button>
          </div>
          {/* Contemplative Footer Quote & Terms */}
          <div className="mt-space-xl text-center space-y-space-sm px-space-md">
            <div className="flex items-center justify-center gap-2 text-outline-variant">
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
              <span className="w-8 h-px bg-outline-variant/60" />
              <span className="w-1 h-1 rounded-full bg-outline-variant" />
            </div>
            <p className="font-label-md text-label-md text-outline leading-relaxed max-w-xs mx-auto">
              로그인 시{" "}
              <a className="underline underline-offset-2 text-on-surface hover:text-primary transition-colors" href="#">
                이용약관
              </a>
              {" "}및{" "}
              <a className="underline underline-offset-2 text-on-surface hover:text-primary transition-colors" href="#">
                개인정보처리방침
              </a>
              에 동의하게 됩니다
            </p>
            <p className="font-label-sm text-label-sm text-outline/60 pt-space-xs">결 · 내 결을 읽다</p>
          </div>
        </div>
      </main>
    </>
  );
}
