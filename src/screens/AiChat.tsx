/**
 * 사주 AI 상담 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/14_사주_AI_상담_7f33ec5d.html element for element; edit it here from now on.
 */
import type { FormEvent } from 'react';
import { byId, query } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

function toggleAccordion(id: string, btn: HTMLElement) {
  const target = byId(id);
  const arrow = query('#accordion-arrow', btn);
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    target.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    arrow.classList.remove('rotate-180');
  } else {
    target.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    arrow.classList.add('rotate-180');
  }
}

function prefillInput(text: string | undefined) {
  const input = byId('chat-input');
  input.value = text ?? '';
  input.focus();
}

function showFeedback(msg: string) {
  const toast = byId('toast');
  const toastText = byId('toast-text');
  toastText.textContent = msg;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2400);
}

function handleSend(e: FormEvent) {
  e.preventDefault();
  const input = byId('chat-input');
  const question = input.value.trim();
  if (!question) return;

  showFeedback('명리 엔진이 사주 원국을 조회 중입니다...');
  input.value = '';
}

export default function AiChat() {
  useBodyClass(BODY_CLASS);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="뒤로 가기"
              className="w-11 h-11 -ml-2 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
              onClick={() => history.back()}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-md text-headline-md text-on-surface tracking-tight">AI 상담</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">심층 문답 및 사주 해석</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="상담 정보 보기" className="w-11 h-11 flex items-center justify-center text-secondary hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
            </button>
            <button aria-label="더보기" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">more_vert</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-safe bg-surface">
        <div className="flex flex-col w-full">
          {/* Sticky Saju Context Header Banner */}
          <div className="sticky top-16 z-30 bg-surface/95 backdrop-blur-md px-margin-mobile py-space-sm shadow-sm">
            <div className="flex items-center justify-between gap-space-sm max-w-lg mx-auto">
              {/* User Day Pillar Badge */}
              <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-error" title="화(火) - 병화" />
                  <span className="w-2 h-2 rounded-full bg-on-tertiary-container" title="목(木) - 인목" />
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">일주</span>
                <span className="font-label-md text-label-md text-primary-container font-semibold">丙寅(병인)</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">· 붉은 호랑이</span>
              </div>
              {/* Free Question Counter */}
              <div className="flex items-center gap-1 bg-secondary-fixed/40 px-space-sm py-1 rounded-full">
                <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  arrow_back_ios_new
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">무료 질문 2회</span>
              </div>
            </div>
          </div>
          {/* Chat Messages Container */}
          <div className="flex flex-col px-margin-mobile pt-space-md pb-44 space-y-space-lg max-w-lg mx-auto w-full">
            {/* Timeline Marker */}
            <div className="flex justify-center items-center gap-space-sm py-1">
              <div className="h-px bg-surface-container-highest flex-1 max-w-[60px]" />
              <span className="font-label-sm text-label-sm text-outline">2024년 갑진년(甲辰年) 심층 문답</span>
              <div className="h-px bg-surface-container-highest flex-1 max-w-[60px]" />
            </div>
            {/* 1. AI Initial Greeting Message */}
            <div className="flex items-start gap-space-sm">
              {/* AI Logo Avatar */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-container shadow-sm flex items-center justify-center overflow-hidden">
                <img alt="AI 사주 명리상담소 심볼" className="w-full h-full object-cover" src="/assets/img09.png" />
              </div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                {/* AI Meta Info */}
                <div className="flex items-center gap-space-xs ml-1">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">AI 사주 명리상담사</span>
                  <span className="bg-secondary-fixed/60 text-secondary font-label-sm text-label-sm px-1.5 py-0.5 rounded-full">
                    공인명리
                  </span>
                </div>
                {/* AI Text Bubble */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl rounded-tl-none shadow-sm text-on-surface space-y-2">
                  <p className="font-body-md text-body-md leading-relaxed text-on-surface">
                    김하늘님의{" "}
                    <span className="text-secondary font-semibold">병화(丙火)</span>
                    {" "}일간과{" "}
                    <span className="text-on-tertiary-container font-semibold">목생화(木生火)</span>
                    {" "}원국을 기반으로 답변해 드립니다.
                  </p>
                  <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    사주 명식에서 올해 하반기 및 내년 초 궁금하신 점이나 현재 고민하고 계신 사안을 편하게 물어보세요.
                  </p>
                </div>
                <span className="font-label-sm text-label-sm text-outline ml-1">오전 10:24</span>
              </div>
            </div>
            {/* 2. User Message */}
            <div className="flex flex-col items-end gap-1 ml-auto max-w-[82%]">
              <div className="bg-primary-container text-on-primary p-space-md rounded-xl rounded-tr-none shadow-sm">
                <p className="font-body-md text-body-md leading-relaxed">
                  올해 하반기나 내년 초에 이직을 준비하고 있는데, 제 사주 흐름상 직장을 옮겨도 괜찮을까요?
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-outline mr-1">오전 10:25</span>
            </div>
            {/* 3. AI Detailed Consultation Response */}
            <div className="flex items-start gap-space-sm">
              {/* AI Logo Avatar */}
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-container shadow-sm flex items-center justify-center overflow-hidden">
                <img alt="AI 사주 명리상담소 심볼" className="w-full h-full object-cover" src="/assets/img09.png" />
              </div>
              <div className="flex flex-col gap-2 max-w-[88%] w-full">
                {/* AI Meta Info */}
                <div className="flex items-center gap-space-xs ml-1">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">AI 사주 명리상담사</span>
                  <span className="font-label-sm text-label-sm text-secondary">원국 정밀 대조완료</span>
                </div>
                {/* AI Main Answer Card */}
                <div className="bg-surface-container-lowest p-space-md rounded-xl rounded-tl-none shadow-sm space-y-space-md">
                  {/* Editorial Intro Quote Accent */}
                  <div className="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">menu_book</span>
                    <div className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      <span className="font-semibold text-secondary">하반기 흐름 요약:</span>
                      {" "}결실을 맺는 토(土) 식상과 금(金) 재성의 운이 서서히 태동하는 길목입니다.
                    </div>
                  </div>
                  {/* Main Response Body */}
                  <div className="space-y-space-sm font-body-md text-body-md leading-relaxed text-on-surface">
                    <p className="">
                      하늘님의 일간{" "}
                      <span className="font-semibold text-primary-container">병화(丙火)</span>
                      는 적극적인 추진력과 개척 정신이 탁월한 강점이 있습니다.
                    </p>
                    <p className="">
                      하지만 올해는 초조하게 서두르기보다,{" "}
                      <strong className="font-semibold text-secondary">11월 이후(해월·亥月)</strong>
                      {" "}편관과 정관의 기운이 안정적으로 자리 잡을 때 제안을 수락하거나 이직을 확정 짓는 것이 명리학적으로 훨씬 유리합니다.
                    </p>
                    <p className="text-on-surface-variant font-body-sm text-body-sm">
                      ✨ 특히{" "}
                      <span className="font-medium text-on-surface">기획, 신사업 브랜딩, 대외 커뮤니케이션</span>
                      {" "}등 시야를 넓게 쓰는 분야로의 확장을 추천해 드립니다.
                    </p>
                  </div>
                  {/* Accordion: Classical Saju Calculation Foundation */}
                  <div className="bg-surface-container-low rounded-lg overflow-hidden transition-all duration-300">
                    <button
                      aria-controls="saju-basis"
                      aria-expanded="false"
                      className="w-full flex items-center justify-between p-space-sm text-left hover:bg-surface-container transition-colors"
                      onClick={(event) => toggleAccordion('saju-basis', event.currentTarget)}
                      type="button"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-secondary">calculate</span>
                        <span className="font-title-md text-title-md text-on-surface text-[14px]">
                          명리학 해석 근거 (원국 분석)
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-outline transition-transform duration-200" id="accordion-arrow">
                        expand_more
                      </span>
                    </button>
                    {/* Collapsible Body */}
                    <div className="hidden p-space-sm pt-0 space-y-2 text-on-surface-variant font-body-sm text-body-sm" id="saju-basis">
                      <div className="h-px bg-surface-container-highest w-full my-1" />
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary font-semibold">・</span>
                          <div>
                            <span className="font-semibold text-on-surface">일간(日干): 丙火</span>
                            <p className="text-on-surface-variant text-[12px] leading-snug">
                              독립심과 실행력이 높으나 지지 인목(寅木) 장생(長生) 영향으로 새로운 환경 적응력이 매우 뛰어납니다.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-secondary font-semibold">・</span>
                          <div>
                            <span className="font-semibold text-on-surface">대운 및 세운 작용</span>
                            <p className="text-on-surface-variant text-[12px] leading-snug">
                              갑진년(甲辰年) 천간 편인과 지지 식신 작용으로 안주하기보다 새로운 영역 탐색 욕구가 강해지는 시기입니다.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-secondary font-semibold">・</span>
                          <div>
                            <span className="font-semibold text-on-surface">오행 보완(金 보충)</span>
                            <p className="text-on-surface-variant text-[12px] leading-snug">
                              부족한 금(金) 기운을 보완하기 위해 연봉 협상과 계약 조건을 명문화하는 것이 개운(開運)의 핵심 전략입니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Action Buttons in AI Card */}
                  <div className="flex items-center gap-space-xs pt-1">
                    <button className="flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-on-surface transition-colors font-label-md text-label-md" onClick={() => showFeedback('답변이 클립보드에 복사되었습니다.')} type="button">
                      <span className="material-symbols-outlined text-[15px]">content_copy</span>
                      <span className="">답변 복사</span>
                    </button>
                    <button className="flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-on-surface transition-colors font-label-md text-label-md" onClick={() => showFeedback('상담 내역이 보관함에 저장되었습니다.')} type="button">
                      <span className="material-symbols-outlined text-[15px]">bookmark</span>
                      <span className="">보관함에 저장</span>
                    </button>
                    <button className="flex items-center gap-1 bg-surface-container-high hover:bg-surface-container-highest px-space-sm py-1.5 rounded-lg text-secondary transition-colors font-label-md text-label-md ml-auto" onClick={() => prefillInput('11월 이직 운에 대해 더 자세히 알려주세요.')} type="button">
                      <span className="material-symbols-outlined text-[15px]">add_circle</span>
                      <span className="">더 자세히 묻기</span>
                    </button>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-outline ml-1">오전 10:25</span>
              </div>
            </div>
          </div>
          {/* Floating Toast Notification */}
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary-container text-on-primary px-space-md py-space-sm rounded-full shadow-lg font-label-md text-label-md flex items-center gap-space-xs opacity-0 pointer-events-none transition-all duration-300" id="toast">
            <span className="material-symbols-outlined text-[16px] text-secondary-fixed">check_circle</span>
            <span id="toast-text" className="">알림 내용</span>
          </div>
          {/* Bottom Interaction Panel (Chips + Chat Input) */}
          <div className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl shadow-lg pb-safe">
            <div className="max-w-lg mx-auto w-full flex flex-col">
              {/* Suggested Question Carousel Chips */}
              <div className="px-margin-mobile pt-space-sm pb-1 flex items-center gap-space-xs overflow-x-auto no-scrollbar">
                <button
                  className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm"
                  data-prompt="올해 이직해도 될까요?"
                  onClick={(event) => prefillInput(event.currentTarget.dataset.prompt)}
                  type="button"
                >
                  올해 이직해도 될까요? 💼
                </button>
                <button
                  className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm"
                  data-prompt="재물운은 언제 좋아지나요?"
                  onClick={(event) => prefillInput(event.currentTarget.dataset.prompt)}
                  type="button"
                >
                  재물운은 언제 좋아져요? 💰
                </button>
                <button
                  className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm"
                  data-prompt="나랑 사주상 잘 맞는 궁합의 사람은 어떤 오행인가요?"
                  onClick={(event) => prefillInput(event.currentTarget.dataset.prompt)}
                  type="button"
                >
                  나랑 잘 맞는 궁합은? 🌿
                </button>
                <button
                  className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container text-on-surface px-space-sm py-1.5 rounded-full font-label-md text-label-md transition-all active:scale-95 shadow-sm"
                  data-prompt="제 사주에서 부족한 금(金) 기운을 채우는 생활 습관이 있을까요?"
                  onClick={(event) => prefillInput(event.currentTarget.dataset.prompt)}
                  type="button"
                >
                  부족한 금(金) 채우는 법 🪙
                </button>
              </div>
              {/* Main Chat Input Bar */}
              <div className="px-margin-mobile pt-1 pb-space-xs">
                <form className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-full shadow-md" onSubmit={(event) => handleSend(event)}>
                  {/* Voice/Plus Attachment Button */}
                  <button
                    aria-label="추가 옵션"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => showFeedback('사주 원국 추가 열람 기능이 준비 중입니다.')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                  {/* Input Field */}
                  <input autoComplete="off" className="flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none px-1" id="chat-input" placeholder="사주와 관련해 궁금한 점을 질문해보세요..." type="text" />
                  {/* Voice Mic Button */}
                  <button
                    aria-label="음성 질문"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => showFeedback('음성 인식 마이크를 활성화합니다.')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">mic</span>
                  </button>
                  {/* Send Action Button */}
                  <button aria-label="메시지 전송" className="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center hover:opacity-90 active:scale-95 transition-all shadow-sm" type="submit">
                    <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                  </button>
                </form>
              </div>
              {/* Disclaimer Subtext */}
              <div className="px-margin-mobile pb-space-xs text-center">
                <span className="font-label-sm text-label-sm text-outline tracking-tight">
                  결 명리학 고전 해석과 사주 원국 통계를 기반으로 제공되는 참고용 상담입니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
