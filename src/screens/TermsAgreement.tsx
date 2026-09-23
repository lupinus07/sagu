/**
 * 약관 동의 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/17_약관_동의_cc958285.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { byId } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-body-md text-on-surface flex flex-col antialiased selection:bg-secondary-fixed";

type TermKey = 'term1' | 'term2' | 'term3' | 'term4';

const termsState: Record<TermKey, boolean> = {
  term1: false,
  term2: false,
  term3: false,
  term4: false
};

const termKeys = () => Object.keys(termsState) as TermKey[];

function toggleItem(key: TermKey) {
  termsState[key] = !termsState[key];
  renderState();
};

function toggleAllAgreements() {
  const allActive = Object.values(termsState).every(Boolean);
  const targetState = !allActive;
  termKeys().forEach(k => {
    termsState[k] = targetState;
  });
  renderState();
};

function renderState() {
  // 1. Update individual checkboxes
  termKeys().forEach(key => {
    const isChecked = termsState[key];
    const box = byId('check-box-' + key);
    const icon = byId('check-icon-' + key);
    
    if (isChecked) {
      box.className = 'w-6 h-6 rounded-full bg-primary-container flex items-center justify-center shrink-0 transition-colors shadow-sm';
      icon.className = 'material-symbols-outlined text-[16px] text-surface-container-lowest';
    } else {
      box.className = 'w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors';
      icon.className = 'material-symbols-outlined text-[16px] text-outline';
    }
  });

  // 2. Master checkbox condition
  const allChecked = Object.values(termsState).every(Boolean);
  const allBox = byId('all-checkbox');
  const allIcon = byId('all-check-icon');
  const allCard = byId('all-agree-card');

  if (allChecked) {
    allBox.className = 'w-7 h-7 rounded-full bg-secondary flex items-center justify-center transition-colors duration-200 shadow-sm';
    allIcon.className = 'material-symbols-outlined text-[18px] text-on-secondary transition-transform duration-200 scale-100';
    allCard.className = 'w-full rounded-xl bg-secondary-fixed/30 p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between';
  } else {
    allBox.className = 'w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center transition-colors duration-200';
    allIcon.className = 'material-symbols-outlined text-[18px] text-outline transition-transform duration-200 scale-90';
    allCard.className = 'w-full rounded-xl bg-surface-container p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between';
  }

  // 3. Validation for Required items (term1, term2, term3)
  const requiredPassed = termsState.term1 && termsState.term2 && termsState.term3;
  const submitBtn = byId('submit-btn');
  const helperText = byId('helper-text');

  if (requiredPassed) {
    submitBtn.disabled = false;
    submitBtn.className = 'w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-primary-container text-surface-container-lowest shadow-md active:scale-[0.98] cursor-pointer';
    helperText.textContent = '모든 필수 약관에 동의하셨습니다';
    helperText.className = 'font-label-md text-label-md text-secondary font-medium transition-colors';
  } else {
    submitBtn.disabled = true;
    submitBtn.className = 'w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-surface-container-highest text-outline shadow-none cursor-not-allowed select-none';
    helperText.textContent = '필수 약관에 모두 동의하시면 계속 진행할 수 있어요';
    helperText.className = 'font-label-md text-label-md text-on-surface-variant transition-colors';
  }
}

// Modal Helpers — looked up on each call, since the markup mounts after this module.
const modalEls = () => ({
  modal: byId('policy-modal'),
  modalContent: byId('modal-content'),
  modalTitle: byId('modal-title'),
  modalText: byId('modal-text'),
});

function openModal(title: string, content: string) {
  const { modal, modalContent, modalTitle, modalText } = modalEls();
  modalTitle.textContent = title;
  modalText.textContent = content;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  modalContent.classList.remove('translate-y-full');
  modalContent.classList.add('translate-y-0');
};

function closeModal() {
  const { modal, modalContent } = modalEls();
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modalContent.classList.remove('translate-y-0');
  modalContent.classList.add('translate-y-full');
};

function handleNextStep(onComplete: () => void) {
  if (!termsState.term1 || !termsState.term2 || !termsState.term3) return;

  const submitBtn = byId('submit-btn');
  submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>사주 원국으로 이동 중...</span>';
  submitBtn.classList.add('opacity-90');

  setTimeout(onComplete, 700);
};

export default function TermsAgreement() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    // Close when clicking modal backdrop
    const modal = byId('policy-modal');
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
    // Initialize
    renderState();
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-14 px-margin-mobile flex items-center justify-between">
          <button aria-label="Go back" className="min-w-[44px] min-h-[44px] w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={() => history.back()}>
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-14 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full px-margin-mobile pb-space-xl">
          {/* Brand Atmosphere Decals & Intro Heading */}
          <div className="pt-space-md pb-space-lg flex flex-col items-start relative">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
              약관에 동의해 주세요
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">서비스 이용을 위해 필요해요</p>
          </div>
          {/* Master "Agree to All" Card */}
          <div className="w-full rounded-xl bg-surface-container p-space-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99] select-none flex items-center justify-between" id="all-agree-card" onClick={() => toggleAllAgreements()}>
            <div className="flex items-center gap-3.5">
              <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center transition-colors duration-200" id="all-checkbox">
                <span className="material-symbols-outlined text-[18px] text-outline transition-transform duration-200 scale-90" id="all-check-icon">
                  check
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-primary-container leading-tight">약관 전체 동의</span>
                <span className="font-label-md text-label-md text-on-surface-variant mt-0.5">선택 항목에 대한 동의도 포함됩니다</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant text-[20px]">verified</span>
          </div>
          {/* Harmonious Spacing & Section Divider */}
          <div className="w-full my-space-md flex items-center justify-center gap-2">
            <div className="h-[1px] flex-1 bg-surface-container-highest" />
            <span className="font-label-sm text-label-sm text-outline-variant px-1 font-headline-md italic">동의 항목</span>
            <div className="h-[1px] flex-1 bg-surface-container-highest" />
          </div>
          {/* Individual Terms Agreement List */}
          <div className="flex flex-col gap-1 w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm">
            {/* Item 1: Service Terms (Required) */}
            <div className="flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0" onClick={() => toggleItem('term1')}>
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors" id="check-box-term1">
                  <span className="material-symbols-outlined text-[16px] text-outline" id="check-icon-term1">
                    check
                  </span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0">
                    [필수]
                  </span>
                  <span className="font-body-md text-body-md text-on-surface truncate">서비스 이용약관</span>
                </div>
              </div>
              <button
                aria-label="서비스 이용약관 상세보기"
                className="w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1"
                onClick={() => openModal('서비스 이용약관', '제 1 조 (목적)\n본 약관은 ‘결 · 내 결을 읽다’(이하 ‘서비스’)가 제공하는 사주 분석, 일진 안내 및 라이프 코칭 정보 서비스의 이용 조건과 운영에 관한 제반 사항을 규정함을 목적으로 합니다.\n\n제 2 조 (회원의 의무)\n회원은 명리학적 분석을 위한 정확한 생년월일시 정보를 기재하여야 하며, 타인의 정보를 도용하여서는 아니 됩니다.')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
            {/* Item 2: Privacy Policy (Required) */}
            <div className="flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0" onClick={() => toggleItem('term2')}>
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors" id="check-box-term2">
                  <span className="material-symbols-outlined text-[16px] text-outline" id="check-icon-term2">
                    check
                  </span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0">
                    [필수]
                  </span>
                  <span className="font-body-md text-body-md text-on-surface truncate">개인정보 수집 및 이용 동의</span>
                </div>
              </div>
              <button
                aria-label="개인정보 수집 및 이용 동의 상세보기"
                className="w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1"
                onClick={() => openModal('개인정보 수집 및 이용', '1. 수집하는 개인정보 항목\n- 필수항목: 출생연월일, 출생시간, 성별, 양력/음력 구분, 닉네임\n\n2. 수집 및 이용 목적\n- 음양오행 및 사주팔자 만세력 산출, 맞춤형 명리 인사이트 생성\n\n3. 보유 및 이용 기간\n- 회원 탈퇴 시까지 또는 법정 보유 기간 준수 후 지체 없이 파기합니다.')}
                type="button"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
            {/* Item 3: Age Verification (Required) */}
            <div className="flex items-center justify-between py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0" onClick={() => toggleItem('term3')}>
                <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors" id="check-box-term3">
                  <span className="material-symbols-outlined text-[16px] text-outline" id="check-icon-term3">
                    check
                  </span>
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-label-md text-label-md px-1.5 py-0.5 rounded bg-primary-container text-surface-container-lowest font-medium shrink-0">
                    [필수]
                  </span>
                  <span className="font-body-md text-body-md text-on-surface truncate">만 14세 이상입니다</span>
                </div>
              </div>
              <div className="w-9 h-9 flex items-center justify-center text-outline-variant shrink-0 ml-1">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
              </div>
            </div>
            {/* Item 4: Marketing Notification (Optional) */}
            <div className="flex flex-col py-3 px-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0" onClick={() => toggleItem('term4')}>
                  <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 transition-colors" id="check-box-term4">
                    <span className="material-symbols-outlined text-[16px] text-outline" id="check-icon-term4">
                      check
                    </span>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-label-md text-label-md px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium shrink-0">
                      [선택]
                    </span>
                    <span className="font-body-md text-body-md text-on-surface truncate">마케팅 정보 수신 동의</span>
                  </div>
                </div>
                <button
                  aria-label="마케팅 정보 수신 동의 상세보기"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-outline hover:text-on-surface hover:bg-surface-container transition-colors shrink-0 ml-1"
                  onClick={() => openModal('마케팅 정보 수신 동의', '1. 혜택 및 절기별 운세 알림\n- 새로운 절기 전환, 오행 맞춤 복채 쿠폰, 대운 분석 이벤트 소식을 푸시 및 문자 메시지로 발송합니다.\n\n2. 철회 권리\n- 마케팅 정보 수신은 설정 화면에서 언제든지 자유롭게 철회하실 수 있습니다.')}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
              {/* Sub-description for marketing option */}
              <p className="font-body-sm text-body-sm text-on-surface-variant pl-9 pr-2 mt-1">
                절기 변화에 따른 맞춤 일진, 특별 리포트 및 혜택 안내 (앱 푸시, 문자)
              </p>
            </div>
          </div>
          {/* Hanji-inspired Aesthetic Callout Panel */}
          <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex items-start gap-3 shadow-sm">
            <div className="w-1 self-stretch rounded-full bg-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-title-md text-title-md text-primary-container font-headline-md">개인정보의 순환과 보전</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                입력하신 명리 원국 데이터는 오직 본인의 성찰과 일상 리듬 분석을 위해서만 정갈하게 활용됩니다.
              </p>
            </div>
          </div>
          {/* Sticky Bottom Interactive Submission Anchor */}
          <div className="mt-space-xl pt-space-md flex flex-col items-center gap-2.5">
            <p className="font-label-md text-label-md text-on-surface-variant transition-colors" id="helper-text">
              필수 약관에 모두 동의하시면 계속 진행할 수 있어요
            </p>
            <button
              className="w-full py-4 rounded-xl font-title-md text-title-md transition-all duration-300 flex items-center justify-center gap-2 bg-surface-container-highest text-outline shadow-none cursor-not-allowed select-none"
              disabled
              id="submit-btn"
              onClick={() => handleNextStep(() => navigate('/signup-complete'))}
            >
              <span className="">동의하고 시작하기</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
          {/* Detailed Policy Modal */}
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="policy-modal">
            <div className="w-full max-w-md bg-surface-container-lowest rounded-t-2xl p-space-lg shadow-xl transform translate-y-full transition-transform duration-300 flex flex-col max-h-[75vh]" id="modal-content">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <h3 className="font-title-lg text-title-lg text-primary-container font-headline-md truncate" id="modal-title">
                  약관 상세
                </h3>
                <button aria-label="닫기" className="w-9 h-9 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container" onClick={() => closeModal()}>
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>
              {/* Modal Body */}
              <div className="py-space-md overflow-y-auto flex-1 font-body-md text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed">
                <p id="modal-text" />
              </div>
              {/* Modal Action */}
              <div className="pt-space-sm">
                <button className="w-full py-3.5 rounded-lg bg-primary-container text-surface-container-lowest font-title-md text-title-md text-center hover:opacity-95 transition-opacity" onClick={() => closeModal()}>
                  확인했습니다
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
