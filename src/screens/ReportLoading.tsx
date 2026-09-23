/**
 * 리포트 생성 중 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/20_리포트_생성_중_fc3c573b.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-body-md text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-fixed";

export default function ReportLoading() {
  useBodyClass(BODY_CLASS);

  useEffect(() => {
    // Micro-interaction: Subtle incremental progress counter feeling alive
    const numEl = byId('progress-number');
    const barEl = byId('progress-bar-fill');
    const circleEl = byId('celestial-circle');
    let val = 72;
    const interval = setInterval(() => {
      if (val < 78) {
        val += 1;
        if (numEl) numEl.textContent = String(val);
        if (barEl) barEl.style.width = val + '%';
        if (circleEl) {
          // Circumference is 2 * PI * 70 approx 440
          const offset = 440 - (440 * (val / 100));
          circleEl.style.strokeDashoffset = String(offset);
        }
      } else {
        clearInterval(interval);
      }
    }, 4500);
    const btn = byId('exit-notify-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (window.history && window.history.length > 1) {
          window.history.back();
        } else {
          alert('알림 설정이 완료되었습니다. 창을 닫으셔도 안전합니다.');
        }
      });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-14 px-margin-mobile flex items-center justify-between">
          <button aria-label="Close" className="w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-on-surface hover:text-on-surface-variant transition-colors" onClick={() => history.back()}>
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-on-surface font-medium truncate tracking-tight">
            리포트 생성 중
          </h1>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-14 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full px-margin-mobile pb-space-xl">
          {/* Status Badge */}
          <div className="flex items-center justify-center my-space-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
              <span className="font-label-md text-label-md tracking-wider text-secondary">정밀 심층 리포트 생성 중</span>
            </div>
          </div>
          {/* Zen Ink Circle & Celestial Pulse Visual */}
          <div className="relative flex items-center justify-center py-space-md my-space-xs">
            {/* Ambient Diffused Glow */}
            <div className="absolute w-44 h-44 rounded-full bg-secondary-fixed-dim/20 blur-2xl pointer-events-none" />
            {/* Celestial Ink Aura SVG Container */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                {/* Background Track (Aged Ink Tone) */}
                <circle className="text-surface-variant opacity-60" cx="80" cy="80" fill="none" r="70" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                {/* Progress Celestial Stroke (72%) */}
                <circle className="text-secondary transition-all duration-1000 ease-out" cx="80" cy="80" fill="none" id="celestial-circle" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="123" strokeLinecap="round" strokeWidth="4.5" style={{ strokeDashoffset: "96.8" }} />
              </svg>
              {/* Concentric Delicate Ring */}
              <div className="absolute inset-2.5 rounded-full bg-surface-container-low/40 flex items-center justify-center">
                {/* Inner Contemplative Hanja Seal */}
                <div className="w-28 h-28 rounded-full bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-secondary text-[16px] animate-pulse mb-0.5" style={{ fontVariationSettings: "\"FILL\" 1" }}>
                    arrow_back_ios_new
                  </span>
                  <span className="font-headline-xl text-headline-xl text-primary-container leading-none select-none tracking-tighter">
                    결
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Title & Reassurance Section */}
          <div className="flex flex-col items-center text-center mt-space-sm mb-space-lg">
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight">
              리포트를 만들고 있어요
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 flex items-center gap-1.5 justify-center">
              <span className="material-symbols-outlined text-[18px] text-secondary">hourglass_top</span>
              <span className="">약 5분 정도 걸려요. 완료되면 알려드릴게요</span>
            </p>
          </div>
          {/* Progress Bar Metric */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">auto_graph</span>
                <span className="font-label-lg text-label-lg text-on-surface">분석 진행률</span>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-headline-md text-headline-md text-primary-container font-semibold" id="progress-number">
                  78
                </span>
                <span className="font-label-md text-label-md text-secondary font-medium">%</span>
              </div>
            </div>
            {/* Linear Track */}
            <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden relative">
              <div className="h-full bg-primary-container rounded-full transition-all duration-700 ease-out relative" id="progress-bar-fill" style={{ width: "78%" }}>
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-secondary-fixed-dim rounded-full opacity-80 animate-pulse" />
              </div>
            </div>
          </div>
          {/* Step-by-Step Trajectory Card */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-semibold">
                Stage Checklist
              </span>
              <span className="font-label-md text-label-md text-secondary">4단계 중 3단계</span>
            </div>
            <div className="space-y-3.5">
              {/* Step 1: Complete */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-title-md text-title-md text-on-surface">사주 원국 분석 완료</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">00:45</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">년월일시 사주팔자 및 오행의 조화 계산</p>
                </div>
              </div>
              {/* Step 2: Complete */}
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-title-md text-title-md text-on-surface">대운 흐름 계산 완료</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">01:30</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">10년 단위 대운 주기 및 세운 기운 도출</p>
                </div>
              </div>
              {/* Step 3: In-Progress Active */}
              <div className="flex items-start gap-3 bg-surface-container-low rounded-lg p-2.5 -mx-1">
                <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 mt-0.5 animate-spin">
                  <span className="material-symbols-outlined text-on-primary text-[14px]">sync</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-title-md text-title-md text-primary-container font-semibold">심층 해석 작성 중...</p>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">진행 중</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-0.5">생년월일 기반 맞춤 AI 조언 도출 중</p>
                </div>
              </div>
              {/* Step 4: Pending */}
              <div className="flex items-start gap-3 opacity-50">
                <div className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-on-surface-variant text-[14px]">more_horiz</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-title-md text-title-md text-on-surface-variant">리포트 구성 중</p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">대기</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">총평 요약 및 시각화 데이터 바인딩</p>
                </div>
              </div>
            </div>
          </div>
          {/* Reassuring Tip Box */}
          <div className="w-full bg-surface-container-low rounded-xl p-space-md mb-space-lg flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
              <span className="material-symbols-outlined text-[18px]">notifications_active</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-lg text-label-lg text-primary-container mb-0.5">안심하고 화면을 닫으셔도 됩니다</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                화면을 벗어나셔도 분석은 멈추지 않습니다. 리포트가 완성되면 푸시 알림으로 가장 먼저 전해드릴게요.
              </p>
            </div>
          </div>
          {/* Action CTA Area */}
          <div className="flex flex-col items-center gap-space-xs mt-auto">
            <button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-transform" id="exit-notify-btn" type="button">
              <span className="material-symbols-outlined text-[18px]">notifications</span>
              <span className="">알림 받고 나가기</span>
            </button>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center pt-1">
              완료된 리포트는{" "}
              <span className="text-on-surface font-medium">[내 사주]</span>
              {" "}보관함에서 언제든 다시 열람할 수 있습니다.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
