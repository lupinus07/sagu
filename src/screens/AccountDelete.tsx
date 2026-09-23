/**
 * 회원 탈퇴 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/11_회원_탈퇴_cb0826d8.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { byId, queryAll, type El } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col";

export default function AccountDelete() {
  useBodyClass(BODY_CLASS);

  useEffect(() => {
    const radioGroup = queryAll('input[name="withdrawal_reason"]');
    const otherCard = byId('other-input-container');
    const agreeCheckbox = byId('agree-checkbox');
    const deleteBtn = byId('delete-btn');
    radioGroup.forEach((radio) => {
      radio.addEventListener('change', (e) => {
        if ((e.target as El).value === 'other') {
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
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-14 px-margin-mobile flex items-center justify-between relative">
          <button aria-label="돌아가기" className="w-11 h-11 -ml-space-xs flex items-center justify-center text-on-surface hover:text-on-surface-variant transition-colors focus:outline-none" onClick={() => history.back()}>
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
          <h1 className="absolute inset-x-0 mx-auto text-center pointer-events-none font-headline-md text-headline-md text-on-surface">
            회원 탈퇴
          </h1>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full px-margin-mobile pt-14 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full pb-10">
          {/* Intro Greeting & Emotional Resonation Section */}
          <section className="flex flex-col pt-space-md pb-space-lg text-center items-center">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-space-sm shadow-sm">
              <span className="material-symbols-outlined text-secondary text-[22px]">all_inclusive</span>
            </div>
            <span className="font-label-md text-secondary tracking-widest uppercase mb-1">인연의 매듭</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2">
              진하님과 맺은 소중한 인연,
              <br />
              이대로 떠나보내시겠어요?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-relaxed">
              사주 명식의 흐름을 함께 짚어온 시간들이
              <br />
              {" "}헛되지 않도록 탈퇴 전 유의사항을 확인해 주세요.
            </p>
          </section>
          {/* Visual Hanji Aesthetic Artwork Placeholder */}
          <div className="w-full h-32 rounded-xl overflow-hidden mb-space-lg relative bg-surface-container-low shadow-sm">
            <img className="w-full h-full object-cover opacity-85" data-alt="A serene minimalist Korean traditional Hanji paper texture background, faint celestial star maps and soft golden ink calligraphy strokes, peaceful contemplative ambient lighting, quiet modern Korean aesthetic, warm off-white and charcoal navy palette" src="/assets/img08.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-on-surface-variant font-medium">자연의 순환처럼 언제든 다시 열려 있습니다</span>
            </div>
          </div>
          {/* Warning Card (Soft Terracotta & Error Container) */}
          <div className="bg-error-container/40 rounded-xl p-space-md mb-space-lg shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-error-container flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-on-error-container text-[20px]">warning</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-title-md text-title-md text-on-error-container mb-1">탈퇴 시 데이터가 즉시 삭제되며 복구 불가합니다</h3>
                <p className="font-body-sm text-body-sm text-on-error-container/80 leading-relaxed">
                  저장된 사주 명식과 풀이 기록은 명리학적 보안 기준에 따라 영구 파기되어 다시 찾아뵐 수 없습니다.
                </p>
              </div>
            </div>
          </div>
          {/* List of Deleted Items Bento-Style Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md mb-space-lg shadow-sm">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm">
              <span className="font-title-md text-title-md text-on-surface">소멸 예정 자산 및 내역</span>
              <span className="font-label-md text-error bg-error-container/50 px-2 py-0.5 rounded-full">전체 삭제</span>
            </div>
            <div className="space-y-space-sm">
              {/* Item 1: Four Pillars Data */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[19px]">calendar_month</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-body-md text-on-surface font-medium">저장된 사주 정보</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">본인 및 인연 명식 (총 5건) 영구 삭제</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]">delete_sweep</span>
              </div>
              {/* Item 2: Purchased Reports */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[19px]">history_edu</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-body-md text-on-surface font-medium">구매한 심층 리포트</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">평생 신년운세 등 열람 권한 3건 소멸</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]">lock_reset</span>
              </div>
              {/* Item 3: AI Consultation Chats */}
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[19px]">chat_bubble</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-body-md text-on-surface font-medium">AI 명리학 상담 기록</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">문답 대화 및 운세 질의 전체 데이터 증발</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]">cloud_off</span>
              </div>
            </div>
          </div>
          {/* Helpful Gray Note Box (Preservation Tip) */}
          <div className="bg-surface-container-high/60 rounded-xl p-space-md mb-space-lg flex gap-3 items-start">
            <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">bookmark_added</span>
            <div className="flex flex-col">
              <p className="font-title-md text-body-md text-on-surface font-semibold mb-1">구매한 리포트는 미리 기기에 저장해 두셨나요?</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                탈퇴가 완료되면 구매하신 고유 명식 리포트를 다시 내려받으실 수 없습니다. 보관함에서 PDF로 미리 저장해 두시면 언제든 다시 보실 수 있어요.
              </p>
            </div>
          </div>
          {/* Reasons for Departure Radio Section */}
          <section className="mb-space-lg">
            <div className="mb-space-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">탈퇴하시는 이유를 들려주세요</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                보내주신 소중한 성찰은 더 조화로운 '결'을 만드는 밑거름이 됩니다.
              </p>
            </div>
            <div className="space-y-2 mt-space-sm" id="reason-group">
              {/* Option 1 */}
              <label className="reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container">
                <span className="font-body-md text-body-md text-on-surface font-medium">사주 풀이 해석이 기대에 못 미쳐요</span>
                <input className="sr-only peer" name="withdrawal_reason" type="radio" defaultValue="unsatisfied" />
                <div className="w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </label>
              {/* Option 2 */}
              <label className="reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container">
                <span className="font-body-md text-body-md text-on-surface font-medium">자주 열어보거나 사용하지 않아요</span>
                <input className="sr-only peer" name="withdrawal_reason" type="radio" defaultValue="rarely_used" />
                <div className="w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </label>
              {/* Option 3 */}
              <label className="reason-card flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container">
                <span className="font-body-md text-body-md text-on-surface font-medium">콘텐츠 및 풀이 가격이 다소 부담돼요</span>
                <input className="sr-only peer" name="withdrawal_reason" type="radio" defaultValue="price" />
                <div className="w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
              </label>
              {/* Option 4: Other with expandable input */}
              <label className="reason-card flex flex-col p-space-md bg-surface-container-lowest rounded-xl cursor-pointer shadow-sm transition-all hover:bg-surface-container" id="other-reason-card">
                <div className="flex items-center justify-between w-full">
                  <span className="font-body-md text-body-md text-on-surface font-medium">기타 사유</span>
                  <input className="sr-only peer" id="radio-other" name="withdrawal_reason" type="radio" defaultValue="other" />
                  <div className="w-5 h-5 rounded-full bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center transition-colors">
                    <div className="w-2 h-2 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="hidden mt-3 w-full" id="other-input-container">
                  <textarea className="w-full p-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none resize-none" placeholder="자유롭게 조언을 남겨주시면 깊이 경청하겠습니다." rows={2} />
                </div>
              </label>
            </div>
          </section>
          {/* Final Confirmation Checkbox Card */}
          <div className="mb-space-xl">
            <label className="flex items-start gap-3 p-space-md bg-surface-container-high/40 rounded-xl cursor-pointer shadow-sm select-none">
              <input className="sr-only peer" id="agree-checkbox" type="checkbox" />
              <div className="w-6 h-6 rounded-md bg-surface-container-highest peer-checked:bg-primary-container flex items-center justify-center text-on-primary shrink-0 transition-colors mt-0.5">
                <span className="material-symbols-outlined text-[18px] opacity-0 peer-checked:opacity-100 transition-opacity">
                  check
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface">유의사항 및 데이터 영구 파기에 동의합니다</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  모든 사주 기록과 리포트 열람 권한이 소멸됨을 인지하였습니다.
                </span>
              </div>
            </label>
          </div>
          {/* Action CTAs Stacked at Bottom */}
          <div className="flex flex-col gap-3 sticky bottom-4 pt-2">
            {/* Primary Retention Button: Continue Using (Midnight Navy) */}
            <button className="w-full py-4 px-space-lg rounded-xl bg-primary-container text-on-primary font-title-lg text-title-lg shadow-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all active:scale-[0.99]" onClick={() => history.back()} type="button">
              <span className="material-symbols-outlined text-[20px]">spa</span>
              <span>결과 인연 계속 이어가기</span>
            </button>
            {/* Secondary Destructive Button: Proceed with Deletion */}
            <button
              className="w-full py-3.5 px-space-lg rounded-xl bg-surface-container-high text-outline font-title-md text-title-md transition-all active:scale-[0.99] flex items-center justify-center"
              disabled
              id="delete-btn"
              type="button"
            >
              탈퇴 진행하기
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
