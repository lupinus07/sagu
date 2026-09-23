/**
 * 로그인 바텀시트 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/16_로그인_바텀시트_639ec247.html element for element; edit it here from now on.
 */
import { useNavigate } from 'react-router-dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-on-surface/40 font-body-md text-body-md text-on-surface min-h-screen flex flex-col justify-end";

export default function LoginSheet() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col relative w-full bg-surface rounded-t-xl shadow-[0_12px_32px_-4px_rgba(19,27,46,0.08),0_2px_6px_-1px_rgba(19,27,46,0.03)] pb-safe">
        <div className="flex flex-col w-full relative">
          {/* Dimmed Background Layer Previewing Saju Result */}
          <div aria-hidden="true" className="w-full px-margin-mobile pt-space-md pb-space-xl opacity-30 blur-[1px] select-none pointer-events-none">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">명식 원국 분석</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">김서연 님의 사주</h2>
              </div>
              <span className="px-3 py-1 bg-surface-container rounded-full font-label-md text-label-md text-on-surface-variant">
                갑목(甲木) 일간
              </span>
            </div>
            {/* 4 Pillars Preview Grid */}
            <div className="grid grid-cols-4 gap-2 mb-space-md">
              <div className="bg-surface-container-low p-2 rounded-lg flex flex-col items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">시주 (時)</span>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1">
                  丙
                </div>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md">
                  寅
                </div>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg flex flex-col items-center ring-1 ring-secondary/30">
                <span className="font-label-sm text-label-sm text-secondary font-semibold mb-1">일주 (日)</span>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary mb-1">
                  甲
                </div>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md text-secondary">
                  子
                </div>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg flex flex-col items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">월주 (月)</span>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1">
                  戊
                </div>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md">
                  辰
                </div>
              </div>
              <div className="bg-surface-container-low p-2 rounded-lg flex flex-col items-center">
                <span className="font-label-sm text-label-sm text-on-surface-variant mb-1">년주 (年)</span>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md mb-1">
                  庚
                </div>
                <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-headline-md text-headline-md">
                  午
                </div>
              </div>
            </div>
            {/* Editorial snippet dummy */}
            <div className="p-space-md bg-surface-container-low rounded-xl mb-4">
              <div className="h-4 bg-surface-container-highest rounded w-3/4 mb-2" />
              <div className="h-3 bg-surface-container-highest rounded w-full mb-1.5" />
              <div className="h-3 bg-surface-container-highest rounded w-5/6" />
            </div>
          </div>
          {/* Modal Overlay Backdrop (Dimmed indigo-slate) */}
          <div className="absolute inset-0 bg-[#131b2e]/65 backdrop-blur-[2px] z-10 transition-opacity duration-300" />
          {/* Bottom Sheet Drawer */}
          <LoginSheetDrawer onDismiss={() => navigate('/home-guest')} />
        </div>
      </main>
    </>
  );
}

/** The sheet itself — shared by this screen and the overlay other screens open. */
export function LoginSheetDrawer({
  onDismiss,
  className = '',
  title = '결과를 저장할까요?',
  subtitle = '로그인하면 언제든 다시 볼 수 있어요',
}: {
  onDismiss?: () => void;
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  const navigate = useNavigate();
  return (
    <div className={`relative z-20 w-full bg-surface rounded-t-[28px] shadow-[0_-8px_32px_rgba(19,27,46,0.18)] flex flex-col px-margin-mobile pt-3 pb-space-lg transition-transform duration-300${className && ` ${className}`}`}>
      {/* Tactile Drag Handle */}
      <div aria-hidden="true" className="w-10 h-1 rounded-full bg-surface-container-highest mx-auto mb-4" />
      {/* Modal Header */}
      <div className="text-center mb-space-md">
        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{subtitle}</p>
      </div>
      {/* Membership Benefits Stack */}
      <div className="flex flex-col gap-2.5 mb-space-lg">
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors">
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">bookmark</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-title-md text-primary-container leading-snug">사주 결과 저장</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              언제든 다시 열어보는 내 사주 원국
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors">
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">group_add</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-title-md text-primary-container leading-snug">가족·친구 사주 추가</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              소중한 인연들의 명식 보관 및 궁합
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3.5 p-3 rounded-xl bg-surface-container-low transition-colors">
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-title-md text-primary-container leading-snug">오늘의 운세 알림</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              매일 아침 전해지는 맞춤 기운 안내
            </span>
          </div>
        </div>
      </div>
      {/* Social Sign-in Buttons */}
      <div className="flex flex-col gap-2.5 w-full">
        {/* Kakao */}
        <button className="w-full h-12 rounded-xl bg-[#FEE500] text-[#191919] font-title-md text-title-md flex items-center justify-center relative shadow-sm active:scale-[0.99] transition-transform" type="button" onClick={() => navigate('/terms')}>
          <span className="absolute left-4 flex items-center justify-center text-[#191919]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3C6.477 3 2 6.48 2 10.773c0 2.76 1.83 5.176 4.606 6.554l-.94 3.483c-.08.3.264.542.52.37l4.167-2.766c.532.057 1.077.087 1.647.087 5.523 0 10-3.48 10-7.774C22 6.48 17.523 3 12 3z" />
            </svg>
          </span>
          <span className="">카카오로 시작하기</span>
        </button>
        {/* Naver */}
        <button className="w-full h-12 rounded-xl bg-[#03C75A] text-on-primary font-title-md text-title-md flex items-center justify-center relative shadow-sm active:scale-[0.99] transition-transform" type="button" onClick={() => navigate('/terms')}>
          <span className="absolute left-4 flex items-center justify-center text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
            </svg>
          </span>
          <span className="">네이버로 시작하기</span>
        </button>
        {/* Google */}
        <button className="w-full h-12 rounded-xl bg-surface-container-lowest text-primary-container font-title-md text-title-md flex items-center justify-center relative shadow-[0_2px_8px_rgba(19,27,46,0.06)] active:scale-[0.99] transition-transform" type="button" onClick={() => navigate('/terms')}>
          <span className="absolute left-4 flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.27-2.09 3.66-5.17 3.66-9.14z" fill="#4285F4" />
              <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.25 21.36 7.33 24 12 24z" fill="#34A853" />
              <path d="M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.25C.45 8.19 0 10.04 0 12s.45 3.81 1.25 5.41l4.03-3.13z" fill="#FBBC05" />
              <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.64 1.25 6.59l4.03 3.13c.95-2.83 3.6-4.97 6.72-4.97z" fill="#EA4335" />
            </svg>
          </span>
          <span className="">Google로 시작하기</span>
        </button>
      </div>
      {/* Dismiss Option */}
      <div className="flex justify-center mt-3 mb-1">
        <button className="py-2.5 px-4 font-body-md text-body-md text-on-surface-variant hover:text-on-surface active:opacity-70 transition-opacity" type="button" onClick={onDismiss}>
          나중에 할게요
        </button>
      </div>
      {/* Terms & Privacy Footnote */}
      <p className="font-label-sm text-label-sm text-center text-outline leading-relaxed px-4 pb-2">
        로그인 시{" "}
        <a className="underline underline-offset-2 text-on-surface-variant hover:text-primary-container" href="#">
          이용약관
        </a>
        {" "}및{" "}
        <a className="underline underline-offset-2 text-on-surface-variant hover:text-primary-container" href="#">
          개인정보처리방침
        </a>
        에 동의하게 됩니다
      </p>
    </div>
  );
}
