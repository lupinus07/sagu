/**
 * 사주 계산 옵션 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/10_사주_계산_옵션_461ce839.html element for element; edit it here from now on.
 */
import { byId, query, queryAll } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed";

function toggleSwitch(btn: HTMLElement) {
  const isChecked = btn.getAttribute('aria-checked') === 'true';
  const nextState = !isChecked;
  btn.setAttribute('aria-checked', String(nextState));
  const thumb = query('span', btn);

  if (nextState) {
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
    thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
  } else {
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-surface-container-high transition-colors duration-200 ease-in-out focus:outline-none";
    thumb.className = "translate-x-0.5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
  }
}

function selectOption(type: 'yaja' | 'joja') {
  const yajaLabel = byId('opt-yaja');
  const jojaLabel = byId('opt-joja');
  const yajaRadio = byId('radio-yaja');
  const jojaRadio = byId('radio-joja');

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
  const icon = byId('reset-icon');
  if (icon) {
    icon.classList.add('-rotate-180');
    setTimeout(() => icon.classList.remove('-rotate-180'), 500);
  }
  
  // Reset switches to ON
  const switches = queryAll('button[role="switch"]');
  switches.forEach(btn => {
    btn.setAttribute('aria-checked', 'true');
    btn.className = "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none";
    const thumb = query('span', btn);
    if (thumb) {
      thumb.className = "translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out";
    }
  });

  // Reset radio to Yaja
  selectOption('yaja');
}

export default function SajuOptions() {
  useBodyClass(BODY_CLASS);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(19,27,46,0.03)] pt-safe">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <button
            aria-label="뒤로 가기"
            className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-primary-container hover:bg-surface-container transition-colors"
            onClick={() => history.back()}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">arrow_back_ios_new</span>
          </button>
          <div className="flex-1 text-center px-space-xs">
            <h1 className="font-headline-md text-headline-md text-primary-container tracking-tight truncate">
              사주 계산 옵션
            </h1>
          </div>
          <div className="w-11 h-11 shrink-0" />
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full px-margin-mobile pb-12 pt-space-md space-y-6">
          {/* Subtle Atmospheric Banner */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  explore
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-title-md text-title-md text-on-surface">설정을 바꾸면 사주 결과가 달라질 수 있어요</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  전통 명리학 해석 기준에 따라 시주(時柱)와 절기 기준이 재계산됩니다.
                </p>
              </div>
            </div>
          </div>
          {/* Group 1: 정밀 시간 보정 */}
          <section className="flex flex-col space-y-2">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-title-lg text-title-lg text-primary-container tracking-tight">정밀 시간 보정</h2>
              <span className="font-label-sm text-label-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                정밀도 상향
              </span>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] space-y-4">
              {/* Row 1: 진태양시 보정 */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-title-md text-title-md text-on-surface">진태양시 보정</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">출생지 경도를 반영해 시간을 보정해요</p>
                </div>
                <button
                  aria-checked="true"
                  className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none"
                  onClick={(event) => toggleSwitch(event.currentTarget)}
                  role="switch"
                  type="button"
                >
                  <span className="translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out" />
                </button>
              </div>
              {/* Subtle separator */}
              <div className="h-px w-full bg-surface-container-high" />
              {/* Row 2: 서머타임 보정 */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-title-md text-title-md text-on-surface">서머타임 보정</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    1948~1960년, 1987~1988년 출생자에게 적용돼요
                  </p>
                </div>
                <button
                  aria-checked="true"
                  className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full bg-primary-container transition-colors duration-200 ease-in-out focus:outline-none"
                  onClick={(event) => toggleSwitch(event.currentTarget)}
                  role="switch"
                  type="button"
                >
                  <span className="translate-x-5 inline-block h-6 w-6 mt-0.5 ml-0.5 rounded-full bg-surface shadow-md transform transition duration-200 ease-in-out" />
                </button>
              </div>
            </div>
          </section>
          {/* Group 2: 자시 기준 */}
          <section className="flex flex-col space-y-2">
            <div className="px-1">
              <h2 className="font-title-lg text-title-lg text-primary-container tracking-tight">자시 기준</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                자시(23:00~01:00) 출생자의 날짜 변경 기준을 선택합니다.
              </p>
            </div>
            <div className="rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] overflow-hidden">
              {/* Option 1: 야자시 */}
              <label className="flex items-start p-space-md gap-3 cursor-pointer bg-surface-container-low/50 transition-colors" id="opt-yaja" onClick={() => selectOption('yaja')}>
                <div className="pt-0.5">
                  <div className="w-5 h-5 rounded-full bg-primary-container flex items-center justify-center transition-all" id="radio-yaja">
                    <div className="w-2 h-2 rounded-full bg-surface" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">야자시 (23시부터 다음 날)</span>
                    <span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container">
                      권장
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    오후 11시(23시)를 기점으로 다음 날의 일주(日柱)로 변경합니다. (대다수 현대 역학 권장)
                  </p>
                </div>
              </label>
              {/* Soft separator */}
              <div className="h-px w-full bg-surface-container-high" />
              {/* Option 2: 조자시 */}
              <label className="flex items-start p-space-md gap-3 cursor-pointer transition-colors" id="opt-joja" onClick={() => selectOption('joja')}>
                <div className="pt-0.5">
                  <div className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center transition-all" id="radio-joja">
                    <div className="w-2 h-2 rounded-full bg-transparent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md text-on-surface">조자시 (0시부터 당일)</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    자정(00:00)을 기준으로 날짜가 변경되며 23시대는 당일 일주로 봅니다.
                  </p>
                </div>
              </label>
            </div>
          </section>
          {/* Group 3: 절기 기준 */}
          <section className="flex flex-col space-y-2">
            <div className="px-1">
              <h2 className="font-title-lg text-title-lg text-primary-container tracking-tight">절기 기준</h2>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-[0_4px_20px_-2px_rgba(19,27,46,0.04)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[18px]">wb_twilight</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md text-on-surface">절기력 기준 시점</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">한국천문연구원 기준 (자동 적용)</p>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">
                기본값
              </span>
            </div>
          </section>
          {/* Visual Hanji Ornament / Cultural Assurance */}
          <div className="rounded-xl bg-surface-container-low p-space-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-secondary font-headline-md text-headline-md">
              易
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-label-lg text-label-lg text-on-surface">신뢰할 수 있는 만세력 알고리즘</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                동양 천문 역법과 표준 지리 데이터를 종합하여 1분 단위 오차 없이 산출합니다.
              </p>
            </div>
          </div>
          {/* Bottom Reset Action Area */}
          <div className="pt-space-sm pb-space-lg flex flex-col items-center justify-center">
            <button className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all text-body-sm font-body-sm" onClick={() => resetDefaults()} type="button">
              <span className="material-symbols-outlined text-[18px] transition-transform duration-500" id="reset-icon">
                restart_alt
              </span>
              <span className="">기본값으로 되돌리기</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
