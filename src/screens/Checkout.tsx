/**
 * 결제하기 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/09_결제하기_3ca054f1.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { byId, query, queryAll } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen";

export default function Checkout() {
  useBodyClass(BODY_CLASS);
  const navigate = useNavigate();

  useEffect(() => {
    // Payment Method Selection Micro-interaction
    const paymentItems = queryAll('.payment-method-item');
    paymentItems.forEach(item => {
      item.addEventListener('click', () => {
        paymentItems.forEach(pi => {
          pi.classList.remove('bg-surface-container-high');
          pi.classList.add('bg-surface-container-lowest');
          const ind = query('.radio-indicator', pi);
          ind.classList.remove('bg-primary-container', 'text-on-primary');
          ind.classList.add('bg-surface-container', 'text-transparent');
        });
        item.classList.remove('bg-surface-container-lowest');
        item.classList.add('bg-surface-container-high');
        const activeInd = query('.radio-indicator', item);
        activeInd.classList.remove('bg-surface-container', 'text-transparent');
        activeInd.classList.add('bg-primary-container', 'text-on-primary');
      });
    });
    // Agreement Logic
    const agreeAllBtn = byId('agree-all-btn');
    const agreeAllCheck = byId('agree-all-check');
    const subBoxes = queryAll('.sub-check-box');
    const subLabels = queryAll('.sub-check-label');
    let allChecked = true;
    function updateState(checked: boolean) {
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
        const box = query('.sub-check-box', label);
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
    const payBtn = byId('pay-submit-btn');
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
        navigate('/report-loading');
      }, 1500);
    });
  }, [navigate]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 px-gutter-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="뒤로 가기"
              className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => history.back()}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <img alt="Brand logo. - Primary color: #131b2e
- Font: notoSerif
- Mode: light
- Roundness: rounded-md
" className="h-8 w-auto object-contain" src="/assets/img06.png" />
          </div>
          <h1 className="absolute left-1/2 -translate-x-1/2 font-headline-md text-headline-md text-primary-container pointer-events-none select-none">
            결제하기
          </h1>
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="닫기"
              className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={() => history.back()}
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
      <main className="flex flex-col relative w-full pt-16 bg-surface pb-safe flex-1">
        <div className="flex flex-col w-full px-margin-mobile pb-36 space-y-space-lg">
          {/* Subtle Ornamental Atmospheric Header */}
          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center space-x-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">auto_awesome</span>
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">
                Celestial Ordinance
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">보안 암호화 연결됨</span>
            </div>
          </div>
          {/* 1. Order Summary Card */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col space-y-space-md relative overflow-hidden">
            {/* Decorative Heavenly Element Callout */}
            <div className="absolute -right-4 -bottom-6 opacity-5 pointer-events-none select-none text-primary">
              <span className="material-symbols-outlined text-[120px]">cyclone</span>
            </div>
            {/* Badge Row */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center space-x-1.5 bg-primary-container text-secondary-container px-2.5 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[13px]">stars</span>
                <span className="font-label-sm text-label-sm">프리미엄 AI 심층 분석</span>
              </div>
              <div className="inline-flex items-center space-x-1 bg-surface-container px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-on-surface-variant text-[12px]">menu_book</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">PDF 소장 · 40P</span>
              </div>
            </div>
            {/* Title & Profile Target */}
            <div className="space-y-1">
              <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">
                이직운 심층 리포트 (2025~2026)
              </h2>
              <div className="flex items-center space-x-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[15px] text-secondary">person_outline</span>
                <span className="font-body-sm text-body-sm">김서연 님 맞춤 명리 정밀 해석</span>
              </div>
            </div>
            {/* Feature Bullet Points in Hanji Tinted Box */}
            <div className="bg-surface-container-low rounded-lg p-space-sm space-y-1.5">
              <div className="flex items-start space-x-2">
                <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
                <span className="font-body-sm text-body-sm text-on-surface">사주 원국 및 10년 대운·세운 정밀 분석</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">check_circle</span>
                <span className="font-body-sm text-body-sm text-on-surface">시기별 이직 성공 확률 & 커리어 전략 수록</span>
              </div>
            </div>
            {/* Price Section */}
            <div className="flex items-baseline justify-between pt-space-xs">
              <div className="flex items-center space-x-2">
                <span className="font-body-md text-body-md line-through text-outline">39,000원</span>
                <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-1.5 py-0.5 rounded font-semibold">
                  67% 할인
                </span>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight font-semibold">
                  12,900
                </span>
                <span className="font-body-md text-body-md text-primary-container">원</span>
              </div>
            </div>
          </div>
          {/* Visual Editorial Anchor (Book / Report Preview Imagery) */}
          <div className="w-full bg-surface-container-low rounded-xl p-space-sm flex items-center space-x-space-md shadow-sm">
            <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 shadow">
              <img className="w-full h-full object-cover" data-alt="Close-up of an elegant luxury Korean fortune telling book printed on textured cream hanji paper with gold foil typography and subtle astronomical constellations under warm soft sunlight" src="/assets/img07.jpg" />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1 space-y-0.5">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                Algorithmic Clarity
              </span>
              <h3 className="font-title-md text-title-md text-on-surface truncate">자평진전 기반 AI 명리 해석서</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                결제 완료 즉시 생성되어 평생 열람 가능합니다.
              </p>
            </div>
          </div>
          {/* 2. Payment Method Selection */}
          <div className="space-y-space-sm">
            <div className="space-y-0.5 px-0.5">
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">결제 수단</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">원하시는 결제 방식을 선택해 주세요</p>
            </div>
            <div className="space-y-2" id="payment-options">
              {/* Kakao Pay (Selected by default) */}
              <label className="payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200" data-value="kakaopay">
                <div className="flex items-center space-x-space-md">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shadow-inner flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">카카오페이</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">카카오페이머니 / 카드 간편결제</span>
                  </div>
                </div>
                <div className="radio-indicator w-5 h-5 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
              </label>
              {/* Toss Pay */}
              <label className="payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200" data-value="tosspay">
                <div className="flex items-center space-x-space-md">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">토스페이</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">계좌 및 토스머니 1초 결제</span>
                  </div>
                </div>
                <div className="radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
              </label>
              {/* Naver Pay */}
              <label className="payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200" data-value="naverpay">
                <div className="flex items-center space-x-space-md">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">savings</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">네이버페이</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">네이버페이 포인트 최대 3% 적립</span>
                  </div>
                </div>
                <div className="radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
              </label>
              {/* Credit / Debit Card */}
              <label className="payment-method-item flex items-center justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all duration-200" data-value="card">
                <div className="flex items-center space-x-space-md">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0">
                    <span className="material-symbols-outlined text-[20px]">credit_card</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">신용·체크카드</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">모든 국내 카드사 무이자 할부 지원</span>
                  </div>
                </div>
                <div className="radio-indicator w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-transparent">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
              </label>
            </div>
          </div>
          {/* 3. Agreement Checkboxes */}
          <div className="space-y-space-sm">
            <h3 className="font-title-lg text-title-lg text-on-surface font-semibold px-0.5">약관 동의</h3>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
              {/* Agree All Card */}
              <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg cursor-pointer transition-colors" id="agree-all-btn">
                <div className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded bg-primary-container text-on-primary flex items-center justify-center transition-colors" id="agree-all-check">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">주문 및 약관 전체 동의</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
                  필수 동의
                </span>
              </div>
              {/* Sub Agreements */}
              <div className="space-y-2.5 pt-1 px-1">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <label className="sub-check-label flex items-center space-x-2 cursor-pointer select-none">
                    <div className="sub-check-box w-4 h-4 rounded bg-primary-container text-on-primary flex items-center justify-center text-[12px] transition-colors">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      결제 서비스 이용약관 동의{" "}
                      <span className="text-error font-medium">(필수)</span>
                    </span>
                  </label>
                  <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface px-1 py-0.5 rounded hover:bg-surface-container" type="button">
                    보기
                  </button>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <label className="sub-check-label flex items-center space-x-2 cursor-pointer select-none">
                    <div className="sub-check-box w-4 h-4 rounded bg-primary-container text-on-primary flex items-center justify-center text-[12px] transition-colors">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      개인정보 제3자 제공 동의{" "}
                      <span className="text-error font-medium">(필수)</span>
                    </span>
                  </label>
                  <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface px-1 py-0.5 rounded hover:bg-surface-container" type="button">
                    보기
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 4. Refund Policy Notice Box */}
          <div className="w-full bg-surface-container-high rounded-xl p-space-md space-y-1.5 shadow-sm">
            <div className="flex items-center space-x-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">info</span>
              <span className="font-title-md text-title-md text-on-surface font-semibold">리포트 생성이 시작되면 환불이 불가합니다</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              디지털 맞춤 콘텐츠 특성상 AI 분석 및 문서 생성이 시작된 후에는 청약 철회 및 환불이 제한됩니다. 생성 중 문제 발생이나 문의사항은{" "}
              <button className="text-on-surface underline font-medium" type="button">고객센터</button>
              를 이용해 주세요.
            </p>
          </div>
          {/* Trust Guarantee Element */}
          <div className="flex items-center justify-center space-x-3 py-space-xs text-on-surface-variant opacity-80">
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="font-label-sm text-label-sm">한국명리학회 데이터 검증</span>
            </div>
            <span className="text-outline-variant">•</span>
            <div className="flex items-center space-x-1">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span className="font-label-sm text-label-sm">개인정보 안전 폐기</span>
            </div>
          </div>
          {/* 5. Sticky Bottom Bar & Payment CTA */}
          <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md pb-safe pt-space-sm px-margin-mobile shadow-[0_-8px_24px_rgba(19,27,46,0.06)]">
            <div className="max-w-[480px] mx-auto flex flex-col space-y-space-xs">
              {/* Price Summary Header in Sticky Bar */}
              <div className="flex items-baseline justify-between px-1">
                <span className="font-label-lg text-label-lg text-on-surface-variant">총 결제 금액</span>
                <div className="flex items-baseline space-x-0.5">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-semibold">
                    12,900
                  </span>
                  <span className="font-title-md text-title-md text-primary-container">원</span>
                </div>
              </div>
              {/* Action Button */}
              <button className="w-full bg-primary-container text-on-primary hover:bg-inverse-surface active:scale-[0.99] transition-all duration-150 py-3.5 px-space-md rounded-lg flex items-center justify-center space-x-2 shadow-md" id="pay-submit-btn" type="button">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">lock</span>
                <span className="font-title-md text-title-md text-on-primary font-semibold">12,900원 결제하기</span>
              </button>
              {/* Security Micro Caption */}
              <div className="flex items-center justify-center space-x-1 pb-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[13px] text-secondary">shield</span>
                <span className="font-label-sm text-label-sm">안전한 256-bit SSL 암호화 결제 시스템</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
