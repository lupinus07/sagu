
/* ===== 02_프리미엄_리포트_스토어_5b15eb14.html ===== */
(function() {
      const modal = document.getElementById('report-modal');
      const modalCard = document.getElementById('modal-card');
      const closeBtn = document.getElementById('modal-close');
      const titleElem = document.getElementById('modal-title');
      const descElem = document.getElementById('modal-desc');
      const badgeElem = document.getElementById('modal-badge');
      const priceElem = document.getElementById('modal-price');
      const origPriceElem = document.getElementById('modal-orig-price');

      function openModal(data) {
        titleElem.textContent = data.title;
        descElem.textContent = data.desc;
        badgeElem.textContent = data.badge;
        priceElem.textContent = data.price;
        origPriceElem.textContent = data.orig;

        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        modalCard.classList.remove('translate-y-full');
        modalCard.classList.add('translate-y-0');
      }

      function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
        modalCard.classList.add('translate-y-full');
        modalCard.classList.remove('translate-y-0');
      }

      document.querySelectorAll('.report-card').forEach(function(card) {
        const btn = card.querySelector('.open-detail-btn');
        const clickHandler = function(e) {
          e.stopPropagation();
          openModal({
            title: card.dataset.title,
            badge: card.dataset.badge,
            desc: card.dataset.desc,
            price: card.dataset.price,
            orig: card.dataset.orig
          });
        };
        if (btn) btn.addEventListener('click', clickHandler);
        card.addEventListener('click', clickHandler);
      });

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) closeModal();
        });
      }
    })();

/* ===== 04_리포트_생성_실패_072f6a58.html ===== */
const retryBtn = document.getElementById('retry-button');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      const originalContent = retryBtn.innerHTML;
      retryBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-surface-bright" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>천기(天氣) 다시 계산 중...</span>
      `;
      retryBtn.disabled = true;
      setTimeout(() => {
        retryBtn.innerHTML = originalContent;
        retryBtn.disabled = false;
        alert('분석 서버와의 연결을 재시도합니다.');
      }, 1500);
    });
  }

/* ===== 05_가입_완료_1966bb40.html ===== */
// Gentle subtle tactile feedback for actions
  const primaryBtn = document.getElementById('btn-start');
  if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
      primaryBtn.classList.add('opacity-80');
      setTimeout(() => primaryBtn.classList.remove('opacity-80'), 200);
    });
  }

/* ===== 07_이직운_리포트_b25e33d3.html ===== */
function downloadReport() {
    alert("김서연 님의 이직운 리포트(PDF)가 안전하게 다운로드되었습니다.");
  }
  function sendMailReport() {
    alert("등록하신 계정 메일함으로 정밀 분석 전문이 발송되었습니다.");
  }

/* ===== 08_네트워크_오류_5b2cc62d.html ===== */
const retryBtn = document.getElementById('retry-btn');
    const retryIcon = document.getElementById('retry-icon');
    
    if (retryBtn && retryIcon) {
      retryBtn.addEventListener('click', () => {
        retryIcon.classList.add('rotate-180');
        setTimeout(() => {
          retryIcon.classList.remove('rotate-180');
          window.location.reload();
        }, 500);
      });
    }

/* ===== 09_결제하기_3ca054f1.html ===== */
(function() {
    // Payment Method Selection Micro-interaction
    const paymentItems = document.querySelectorAll('.payment-method-item');
    paymentItems.forEach(item => {
      item.addEventListener('click', () => {
        paymentItems.forEach(pi => {
          pi.classList.remove('bg-surface-container-high');
          pi.classList.add('bg-surface-container-lowest');
          const ind = pi.querySelector('.radio-indicator');
          ind.classList.remove('bg-primary-container', 'text-on-primary');
          ind.classList.add('bg-surface-container', 'text-transparent');
        });
        item.classList.remove('bg-surface-container-lowest');
        item.classList.add('bg-surface-container-high');
        const activeInd = item.querySelector('.radio-indicator');
        activeInd.classList.remove('bg-surface-container', 'text-transparent');
        activeInd.classList.add('bg-primary-container', 'text-on-primary');
      });
    });

    // Agreement Logic
    const agreeAllBtn = document.getElementById('agree-all-btn');
    const agreeAllCheck = document.getElementById('agree-all-check');
    const subBoxes = document.querySelectorAll('.sub-check-box');
    const subLabels = document.querySelectorAll('.sub-check-label');
    let allChecked = true;

    function updateState(checked) {
      allChecked = checked;
      if (checked) {
        agreeAllCheck.classList.remove('bg-surface-container', 'text-transparent');
        agreeAllCheck.classList.add('bg-primary-container', 'text-on-primary');
        subBoxes.forEach(b => {
          b.classList.remove('bg-surface-container', 'text-transparent');
          b.classList.add('bg-primary-container', 'text-on-primary');
        });
      } else {
        agreeAllCheck.classList.add('bg-surface-container', 'text-transparent');
        agreeAllCheck.classList.remove('bg-primary-container', 'text-on-primary');
        subBoxes.forEach(b => {
          b.classList.add('bg-surface-container', 'text-transparent');
          b.classList.remove('bg-primary-container', 'text-on-primary');
        });
      }
    }

    agreeAllBtn.addEventListener('click', () => {
      updateState(!allChecked);
    });

    subLabels.forEach(label => {
      label.addEventListener('click', (e) => {
        e.preventDefault();
        const box = label.querySelector('.sub-check-box');
        const isCurrentChecked = box.classList.contains('bg-primary-container');
        if (isCurrentChecked) {
          box.classList.remove('bg-primary-container', 'text-on-primary');
          box.classList.add('bg-surface-container', 'text-transparent');
          agreeAllCheck.classList.add('bg-surface-container', 'text-transparent');
          agreeAllCheck.classList.remove('bg-primary-container', 'text-on-primary');
          allChecked = false;
        } else {
          box.classList.remove('bg-surface-container', 'text-transparent');
          box.classList.add('bg-primary-container', 'text-on-primary');
          const allNow = Array.from(subBoxes).every(b => b.classList.contains('bg-primary-container'));
          if (allNow) {
            agreeAllCheck.classList.remove('bg-surface-container', 'text-transparent');
            agreeAllCheck.classList.add('bg-primary-container', 'text-on-primary');
            allChecked = true;
          }
        }
      });
    });

    // Pay CTA interaction
    const payBtn = document.getElementById('pay-submit-btn');
    payBtn.addEventListener('click', () => {
      const anyUnchecked = Array.from(subBoxes).some(b => !b.classList.contains('bg-primary-container'));
      if (anyUnchecked) {
        alert('필수 약관에 모두 동의해 주세요.');
        return;
      }
      payBtn.classList.add('opacity-75', 'pointer-events-none');
      payBtn.innerHTML = `
        <span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
        <span class="font-title-md text-title-md text-on-primary font-semibold">결제 승인 진행 중...</span>
      `;
      setTimeout(() => {
        alert('안전하게 결제가 완료되었습니다. AI 심층 리포트 생성을 시작합니다.');
        payBtn.classList.remove('opacity-75', 'pointer-events-none');
        payBtn.innerHTML = `
          <span class="material-symbols-outlined text-[18px] text-secondary-container">lock</span>
          <span class="font-title-md text-title-md text-on-primary font-semibold">12,900원 결제하기</span>
        `;
      }, 1500);
    });
  })();

/* ===== 10_사주_계산_옵션_461ce839.html ===== */
function toggleSwitch(btn) {
    const isChecked = btn.getAttribute('aria-checked') === 'true';
    const nextState = !isChecked;
    btn.setAttribute('aria-checked', String(nextState));
    const thumb = btn.querySelector('span');

    if (nextState) {
      btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
      thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
    } else {
      btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-surface-container-high transition-colors duration-200 ease-in-out focus:outline-none";
      thumb.className = "translate-x-0.5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
    }
  }

  function selectOption(type) {
    const yajaLabel = document.getElementById('opt-yaja');
    const jojaLabel = document.getElementById('opt-joja');
    const yajaRadio = document.getElementById('radio-yaja');
    const jojaRadio = document.getElementById('radio-joja');

    if (type === 'yaja') {
      yajaLabel.classList.add('bg-surface-container-low/50');
      jojaLabel.classList.remove('bg-surface-container-low/50');

      yajaRadio.className = "w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all";
      yajaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-surface"></div>';

      jojaRadio.className = "w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all";
      jojaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
    } else {
      jojaLabel.classList.add('bg-surface-container-low/50');
      yajaLabel.classList.remove('bg-surface-container-low/50');

      jojaRadio.className = "w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all";
      jojaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-surface"></div>';

      yajaRadio.className = "w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all";
      yajaRadio.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
    }
  }

  function resetDefaults() {
    const icon = document.getElementById('reset-icon');
    if (icon) {
      icon.classList.add('-rotate-180');
      setTimeout(() => icon.classList.remove('-rotate-180'), 500);
    }
    
    // Reset switches to ON
    const switches = document.querySelectorAll('button[role="switch"]');
    switches.forEach(btn => {
      btn.setAttribute('aria-checked', 'true');
      btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
      const thumb = btn.querySelector('span');
      if (thumb) {
        thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
      }
    });

    // Reset radio to Yaja
    selectOption('yaja');
  }

/* ===== 11_회원_탈퇴_cb0826d8.html ===== */
(function() {
    const radioGroup = document.querySelectorAll('input[name="withdrawal_reason"]');
    const otherCard = document.getElementById('other-input-container');
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const deleteBtn = document.getElementById('delete-btn');

    radioGroup.forEach((radio) => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
          otherCard.classList.remove('hidden');
        } else {
          otherCard.classList.add('hidden');
        }
        updateButtonState();
      });
    });

    agreeCheckbox.addEventListener('change', () => {
      updateButtonState();
    });

    function updateButtonState() {
      const isChecked = agreeCheckbox.checked;
      const hasReason = Array.from(radioGroup).some(r => r.checked);

      if (isChecked && hasReason) {
        deleteBtn.removeAttribute('disabled');
        deleteBtn.className = "w-full py-3.5 px-space-lg rounded-xl bg-error/10 text-error font-title-md text-title-md hover:bg-error/20 transition-all active:scale-[0.99] flex items-center justify-center shadow-sm cursor-pointer";
      } else {
        deleteBtn.setAttribute('disabled', 'true');
        deleteBtn.className = "w-full py-3.5 px-space-lg rounded-xl bg-surface-container-high text-outline font-title-md text-title-md transition-all active:scale-[0.99] flex items-center justify-center cursor-not-allowed";
      }
    }

    deleteBtn.addEventListener('click', () => {
      if (!deleteBtn.hasAttribute('disabled')) {
        if (confirm("정말로 탈퇴하시겠습니까? 진하님의 모든 명리학 데이터가 즉시 삭제됩니다.")) {
          alert("그동안 결(結)과 함께해 주셔서 감사했습니다. 항상 평안한 운의 흐름이 함께하기를 바랍니다.");
          history.back();
        }
      }
    });
  })();

/* ===== 13_사주_정보_입력_bdf31da2.html ===== */
function setGender(gender) {
      const fBtn = document.getElementById('gender-f');
      const mBtn = document.getElementById('gender-m');
      if (gender === 'f') {
        fBtn.className = 'h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all shadow-sm bg-primary-container text-on-primary';
        mBtn.className = 'h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all text-on-surface-variant hover:text-on-surface';
      } else {
        mBtn.className = 'h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all shadow-sm bg-primary-container text-on-primary';
        fBtn.className = 'h-11 rounded-lg font-title-md text-title-md flex items-center justify-center gap-1.5 transition-all text-on-surface-variant hover:text-on-surface';
      }
    }

    function setCalendarType(type) {
      const solar = document.getElementById('cal-solar');
      const lunar = document.getElementById('cal-lunar');
      const leap = document.getElementById('cal-leap');

      const activeClasses = 'px-2.5 py-1 rounded-full bg-primary-container text-on-primary shadow-sm transition-all';
      const inactiveClasses = 'px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';

      solar.className = type === 'solar' ? activeClasses : inactiveClasses;
      lunar.className = type === 'lunar' ? activeClasses : inactiveClasses;
      leap.className = type === 'leap' ? activeClasses : inactiveClasses;
    }

    function toggleTimeUnknown(isChecked) {
      const box = document.getElementById('time-picker-box');
      const hint = document.getElementById('time-hint');
      if (isChecked) {
        box.classList.add('opacity-40', 'pointer-events-none');
        hint.classList.add('text-secondary', 'font-medium');
      } else {
        box.classList.remove('opacity-40', 'pointer-events-none');
        hint.classList.remove('text-secondary', 'font-medium');
      }
    }

    function handleSajuSubmit() {
      const btn = document.getElementById('submit-saju-btn');
      btn.innerHTML = `
        <span class="material-symbols-outlined animate-spin text-[22px]">progress_activity</span>
        <span class="tracking-wide">천간과 지지 분석 중...</span>
      `;
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = `
          <span class="material-symbols-outlined text-secondary-fixed text-[22px]" style="font-variation-settings: 'FILL' 1;">
            sparkles
          </span>
          <span class="tracking-wide">내 사주 보기</span>
        `;
        btn.disabled = false;
      }, 1200);
    }

/* ===== 14_사주_AI_상담_7f33ec5d.html ===== */
function toggleAccordion(id, btn) {
    const target = document.getElementById(id);
    const arrow = btn.querySelector('#accordion-arrow');
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

  function prefillInput(text) {
    const input = document.getElementById('chat-input');
    input.value = text;
    input.focus();
  }

  function showFeedback(msg) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    toastText.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    toast.classList.add('opacity-100');

    setTimeout(() => {
      toast.classList.remove('opacity-100');
      toast.classList.add('opacity-0', 'pointer-events-none');
    }, 2400);
  }

  function handleSend(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const query = input.value.trim();
    if (!query) return;

    showFeedback('명리 엔진이 사주 원국을 조회 중입니다...');
    input.value = '';
  }

/* ===== 17_약관_동의_cc958285.html ===== */
(function() {
    const termsState = {
      term1: false,
      term2: false,
      term3: false,
      term4: false
    };

    window.toggleItem = function(key) {
      termsState[key] = !termsState[key];
      renderState();
    };

    window.toggleAllAgreements = function() {
      const allActive = Object.values(termsState).every(Boolean);
      const targetState = !allActive;
      Object.keys(termsState).forEach(k => {
        termsState[k] = targetState;
      });
      renderState();
    };

    function renderState() {
      // 1. Update individual checkboxes
      Object.keys(termsState).forEach(key => {
        const isChecked = termsState[key];
        const box = document.getElementById('check-box-' + key);
        const icon = document.getElementById('check-icon-' + key);
        
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
      const allBox = document.getElementById('all-checkbox');
      const allIcon = document.getElementById('all-check-icon');
      const allCard = document.getElementById('all-agree-card');

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
      const submitBtn = document.getElementById('submit-btn');
      const helperText = document.getElementById('helper-text');

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

    // Modal Helpers
    const modal = document.getElementById('policy-modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    window.openModal = function(title, content) {
      modalTitle.textContent = title;
      modalText.textContent = content;
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      modalContent.classList.remove('translate-y-full');
      modalContent.classList.add('translate-y-0');
    };

    window.closeModal = function() {
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalContent.classList.remove('translate-y-0');
      modalContent.classList.add('translate-y-full');
    };

    // Close when clicking modal backdrop
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    window.handleNextStep = function() {
      if (!termsState.term1 || !termsState.term2 || !termsState.term3) return;
      
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-[20px]">sync</span><span>사주 원국으로 이동 중...</span>';
      submitBtn.classList.add('opacity-90');
      
      setTimeout(function() {
        // Handover to birthdate registration / onboarding flow
        if (typeof history !== 'undefined' && history.pushState) {
          console.log('Terms completed. Advancing to birth details screen.');
        }
      }, 700);
    };

    // Initialize
    renderState();
  })();

/* ===== 19_페이지를_찾을_수_없음_1d93c22e.html ===== */
document.getElementById('homeBtn')?.addEventListener('click', () => {
    window.location.href = '/';
  });

/* ===== 20_리포트_생성_중_fc3c573b.html ===== */
(function() {
    // Micro-interaction: Subtle incremental progress counter feeling alive
    const numEl = document.getElementById('progress-number');
    const barEl = document.getElementById('progress-bar-fill');
    const circleEl = document.getElementById('celestial-circle');
    let val = 72;

    const interval = setInterval(() => {
      if (val < 78) {
        val += 1;
        if (numEl) numEl.textContent = val;
        if (barEl) barEl.style.width = val + '%';
        if (circleEl) {
          // Circumference is 2 * PI * 70 approx 440
          const offset = 440 - (440 * (val / 100));
          circleEl.style.strokeDashoffset = offset;
        }
      } else {
        clearInterval(interval);
      }
    }, 4500);

    const btn = document.getElementById('exit-notify-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (window.history && window.history.length > 1) {
          window.history.back();
        } else {
          alert('알림 설정이 완료되었습니다. 창을 닫으셔도 안전합니다.');
        }
      });
    }
  })();

/* ===== 21_홈_(비로그인)_601ece2d.html ===== */
// Micro-interaction for smooth horizontal wheel scrolling on cards
  const scrollContainer = document.querySelector('.overflow-x-auto');
  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (evt) => {
      if (evt.deltaY !== 0) {
        scrollContainer.scrollLeft += evt.deltaY;
      }
    });
  }

/* ===== 22_홈_2d9c4652.html ===== */
// Simple micro-interaction for horizontal scroll feedback
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

/* ===== 23_사주_분석_결과_98844320.html ===== */
(function() {
    // Tab switching interactions
    const tabs = document.querySelectorAll('#sajuTabs button');
    const heading = document.getElementById('tabHeading');
    const paragraph = document.getElementById('tabParagraph');

    const tabData = {
      personality: {
        title: "타고난 기질과 대인관계의 흐름",
        content: `
          <p>당신의 일간 병화는 인목(寅木)을 아래에 두어 <strong>'목생화(木生火)'</strong>의 마르지 않는 연료를 지니고 있습니다. 이는 외부 환경이 냉랭해지더라도 스스로 사기를 북돋우고 다시 일어설 수 있는 강인한 회복탄력성을 의미합니다.</p>
          <p class="text-on-surface-variant text-body-sm">대인관계에서는 베푸는 데 인색하지 않고 솔직담백하여 주변에 사람이 끊이지 않습니다. 타인의 작은 결점에도 온유함을 품을 때 존경이 뒤따릅니다.</p>
        `
      },
      wealth: {
        title: "재물운(財運)과 축적의 방향",
        content: `
          <p>월주의 <strong>식신(戊戌)</strong>이 매우 탄탄하게 자리하여, 아이디어와 창의적 재능이 곧 재산으로 환원되는 <em>'식신생재(食神生財)'</em>의 전형적 명식입니다.</p>
          <p class="text-on-surface-variant text-body-sm">단기 투자나 투기적 투자는 피하고, 자신의 전문 기술이나 플랫폼 사업처럼 지식 자산을 시스템화할 때 부의 그릇이 극대화됩니다.</p>
        `
      },
      career: {
        title: "직업 적성과 천직(天職)",
        content: `
          <p>명식에 <strong>편관(壬水)</strong>과 <strong>식신(戊土)</strong>이 공존하여, 대중을 상대로 한 커뮤니케이션, 교육, 미디어 기획, 디자인 브랜딩 분야에서 독보적 역량을 발휘합니다.</p>
          <p class="text-on-surface-variant text-body-sm">조직 내부의 답답한 규율보다는 재량권이 넓고 성과가 투명하게 드러나는 직무 환경에서 능률이 200% 배가됩니다.</p>
        `
      },
      love: {
        title: "인연법과 연애·결혼 흐름",
        content: `
          <p>년지의 <strong>자수(子水) 정관</strong>과 시주의 <strong>임수(壬水)</strong>가 조화를 이루어, 지적이고 차분하며 본인의 열정을 묵묵히 받아주는 안정적인 동반자와의 궁합이 길합니다.</p>
          <p class="text-on-surface-variant text-body-sm">서로의 독립적 영역을 존중해 줄 때 관계가 오래 지속되며, 2025년 가을~겨울 즈음 의미 있는 만남의 기운이 짙어집니다.</p>
        `
      },
      flow: {
        title: "2025 을사년(乙巳年) 한 해의 총운",
        content: `
          <p>2025년은 목화(木火)의 기운이 더욱 거세지는 해로, <strong>새로운 도전과 도약의 분기점</strong>이 열립니다. 준비해 온 프로젝트를 세상 밖으로 꺼내기에 최적기입니다.</p>
          <p class="text-on-surface-variant text-body-sm">다만 에너지가 과열될 수 있으므로 번아웃을 경계하고 수(水)와 금(金)의 기운인 휴식과 명상을 반드시 병행하십시오.</p>
        `
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Reset classes
        tabs.forEach(t => {
          t.className = "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all";
        });
        // Active tab styling
        tab.className = "px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-primary-container text-on-primary shadow-sm transition-all";

        const key = tab.getAttribute('data-tab');
        if (tabData[key]) {
          heading.textContent = tabData[key].title;
          paragraph.innerHTML = tabData[key].content;
        }
      });
    });

    // Deep Reading Accordion Interaction
    const accordionBtn = document.getElementById('deepReadingBtn');
    const classicalBox = document.getElementById('classicalCallout');
    const accordionIcon = document.getElementById('deepReadingIcon');
    const accordionText = document.getElementById('deepReadingText');

    if (accordionBtn && classicalBox) {
      accordionBtn.addEventListener('click', () => {
        const isHidden = classicalBox.classList.contains('hidden');
        if (isHidden) {
          classicalBox.classList.remove('hidden');
          accordionIcon.textContent = 'expand_less';
          accordionText.textContent = '원전 고전해설 접기';
        } else {
          classicalBox.classList.add('hidden');
          accordionIcon.textContent = 'expand_more';
          accordionText.textContent = '명리학 원전 고전해설 더보기';
        }
      });
    }

    // Modal Interaction Feedback
    const modalTrigger = document.getElementById('askAiModalTrigger');
    if (modalTrigger) {
      modalTrigger.addEventListener('click', () => {
        alert("김하늘님의 사주명식(병인일주) 데이터를 컨텍스트로 불러와 실시간 AI 대화를 연결합니다.");
      });
    }
  })();

/* ===== 23_사주_분석_결과_98844320.html ===== */
(function() { const profiles = { self: { name: '김하늘님의 사주명식', badge: '坤命 · 여명', birth: '1996. 10. 24 (양력) 辰時', dayMaster: '‘병화(丙火)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘병화(丙火)’</strong>를 품어 세상을 비추는 따뜻한 태양과 같은 명운입니다.', persona: '陽火의 기질', ctaText: '내 병화(丙火) 원국을 기반으로 실시간 심층 상담' }, husband: { name: '박민우님의 사주명식', badge: '乾命 · 남명', birth: '1994. 03. 12 (양력) 子時', dayMaster: '‘임수(壬水)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘임수(壬水)’</strong>를 품어 넓은 바다처럼 유연하고 지혜로운 명운입니다.', persona: '陽水의 기질', ctaText: '박민우님의 임수(壬水) 원국을 기반으로 실시간 심층 상담' }, firstchild: { name: '박서아님의 사주명식', badge: '坤命 · 여명', birth: '2023. 07. 05 (양력) 巳時', dayMaster: '‘갑목(甲木)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘갑목(甲木)’</strong>을 품어 곧게 뻗어 오르는 큰 나무와 같은 성장형 명운입니다.', persona: '陽木의 기질', ctaText: '박서아님의 갑목(甲木) 원국을 기반으로 실시간 심층 상담' } }; const chipButtons = document.querySelectorAll('.profile-chip'); const headerCard = document.querySelector('main > div.flex.flex-col > div.w-full.bg-surface-container-lowest:nth-of-type(2)'); const nameHeading = headerCard ? headerCard.querySelector('h1') : null; const badgeSpan = headerCard ? headerCard.querySelector('span.inline-flex') : null; const birthSpan = headerCard ? headerCard.querySelectorAll('span.font-label-sm')[1] : null; const descP = headerCard ? headerCard.querySelector('p') : null; const ctaSub = document.querySelector('#askAiModalTrigger span.text-on-primary-container'); chipButtons.forEach(btn => { btn.addEventListener('click', () => { chipButtons.forEach(b => { b.className = 'profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm'; const labelSpans = b.querySelectorAll('span'); if (labelSpans[2]) labelSpans[2].className = 'text-[10px] text-on-surface-variant/70 font-normal'; }); btn.className = 'profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-white shadow-sm font-semibold transition-all shrink-0'; const activeSpans = btn.querySelectorAll('span'); if (activeSpans[2]) activeSpans[2].className = 'text-[10px] text-white/70 font-normal'; const profileKey = btn.getAttribute('data-profile-id'); const data = profiles[profileKey]; if (data && nameHeading && descP) { nameHeading.textContent = data.name; if (badgeSpan) badgeSpan.textContent = data.badge; if (birthSpan) birthSpan.textContent = data.birth; descP.innerHTML = data.desc; if (ctaSub) ctaSub.textContent = data.ctaText; } }); }); const addBtn = document.getElementById('addProfileBtn'); if (addBtn) { addBtn.addEventListener('click', () => { alert('새 가족/지인 사주 프로필 등록 화면으로 이동합니다.'); }); } const manageBtn = document.getElementById('manageProfilesBtn'); if (manageBtn) { manageBtn.addEventListener('click', () => { alert('저장된 사주 프로필 목록 관리(수정/순서변경) 창을 엽니다.'); }); } })();

/* ===== 24_저장된_사주_66b1b5cc.html ===== */
// Simple micro-interaction for demonstration of swipe toggle
  document.addEventListener('DOMContentLoaded', () => {
    const swipedCard = document.querySelector('.-translate-x-32');
    if (swipedCard) {
      swipedCard.addEventListener('click', (e) => {
        // Toggle the swiped state when clicking the card itself
        if (swipedCard.classList.contains('-translate-x-32')) {
          swipedCard.classList.remove('-translate-x-32');
        } else {
          swipedCard.classList.add('-translate-x-32');
        }
      });
    }
  });
