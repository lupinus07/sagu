/**
 * 더보기 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/12_더보기_92eedc62.html element for element; edit it here from now on.
 */
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

export default function More() {
  useBodyClass(BODY_CLASS);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">더보기</h1>
            <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase font-semibold">
              命理
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="설정 도움말" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">settings</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full">
          {/* Content Body Container */}
          <div className="w-full max-w-[480px] mx-auto px-margin-mobile py-space-sm flex flex-col gap-space-lg">
            {/* 1. Profile Card Section */}
            <div className="relative overflow-hidden bg-primary-container text-on-primary rounded-xl p-margin shadow-md">
              {/* Background Celestial Subtle Compass Motif */}
              <div className="absolute -right-8 -top-8 w-44 h-44 pointer-events-none opacity-20">
                <svg className="w-full h-full stroke-secondary-fixed fill-none" strokeWidth="0.75" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="36" />
                  <circle cx="50" cy="50" r="22" strokeDasharray="1 2" />
                  <line x1="50" x2="50" y1="4" y2="96" />
                  <line x1="4" x2="96" y1="50" y2="50" />
                  <circle className="fill-secondary-fixed" cx="50" cy="50" r="4" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col gap-space-md">
                {/* Top: Avatar & User Info & Edit Action */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-space-sm">
                    {/* Celestial Avatar Emblem */}
                    <div className="w-14 h-14 rounded-full bg-surface-container-highest/20 flex items-center justify-center p-0.5 shadow-sm">
                      <div className="w-full h-full rounded-full bg-primary-container flex items-center justify-center relative overflow-hidden">
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          stars
                        </span>
                        <span className="absolute text-[8px] font-label-sm text-secondary-fixed-dim/60 -bottom-0.5">
                          命
                        </span>
                      </div>
                    </div>
                    {/* Name and Solar/Lunar Tag */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-space-xs">
                        <h2 className="font-headline-md text-headline-md text-on-primary tracking-tight">김진하 님</h2>
                        <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded-full bg-secondary-fixed/20 text-secondary-fixed tracking-wider">
                          본인
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">
                        1994년 6월 15일 (양력) · 午時 (12:30)
                      </p>
                    </div>
                  </div>
                  {/* Edit Profile Action Button */}
                  <button className="flex items-center gap-0.5 font-label-sm text-label-sm text-secondary-fixed hover:text-secondary-fixed-dim transition-colors py-1 px-2 rounded-lg hover:bg-surface-container-highest/10" type="button">
                    <span className="">수정</span>
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                </div>
                {/* Saju Core Pillar Badge Pill */}
                <div className="flex items-center justify-between bg-surface-container-highest/10 rounded-lg px-3.5 py-2.5 backdrop-blur-sm">
                  <div className="flex items-center gap-space-sm">
                    {/* Day Pillar Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error text-on-error shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-on-error" />
                      <span className="font-title-md text-title-md font-semibold tracking-wide">丙午</span>
                      <span className="font-label-sm text-label-sm opacity-90">(병오일주)</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary-fixed font-medium">
                        陽火 · 화(火)의 불꽃
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container">열정적인 붉은 말의 기운</span>
                    </div>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-primary-container italic font-headline-md opacity-80">
                    日柱
                  </span>
                </div>
              </div>
            </div>
            {/* 2. Group 1: 내 리포트 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
                  내 리포트
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-headline-md">報告書</span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                {/* Row: 구매한 리포트 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">구매한 리포트</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">평생 대운 및 2026 신년 상세 풀이</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      3건
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
                  </div>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 결제 내역 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">결제 내역</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">구매 영수증 및 주문 상세 확인</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            {/* 3. Group 2: 설정 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
                  명리 정밀 설정
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-headline-md">設定</span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                {/* Row: 알림 설정 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">notifications_none</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">알림 설정</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        오늘의 일진, 절기 변경, 맞춤 운세 조언
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0">
                    <span className="font-label-sm text-label-sm text-secondary font-medium">오전 8시</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
                  </div>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 사주 계산 옵션 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">tune</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-title-md text-title-md text-on-surface truncate">사주 계산 옵션</span>
                        <span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                          학파별
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                        진태양시 보정 적용 · 야자시/조자시 구분
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">
                    chevron_right
                  </span>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 저장된 프로필 관리 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">group</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">저장된 명식 관리</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">나, 부모님, 배우자 총 3명 등록됨</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                      3명
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
                  </div>
                </a>
              </div>
            </div>
            {/* 4. Group 3: 안내 및 고객 지원 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="font-label-md text-label-md text-secondary font-semibold uppercase tracking-wider">
                  고객지원 및 안내
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-headline-md">情報</span>
              </div>
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                {/* Row: 공지사항 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">campaign</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">공지사항</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        정통 명리학 모델 v2.1 업데이트 소식
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-error" />
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
                  </div>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 문의하기 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">support_agent</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">1:1 문의 및 제안</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        평일 10:00 ~ 18:00 (답변 알림 수신)
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">
                    chevron_right
                  </span>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 이용약관 / 개인정보처리방침 */}
                <a className="flex items-center justify-between p-space-md hover:bg-surface-container-low transition-colors" href="#">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">policy</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">이용약관 및 개인정보처리방침</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">생년월일 데이터 암호화 보관 정책</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0">
                    chevron_right
                  </span>
                </a>
                {/* Inner Tonal Separator */}
                <div className="h-[1px] bg-surface-container w-full mx-space-md" />
                {/* Row: 앱 버전 */}
                <div className="flex items-center justify-between p-space-md">
                  <div className="flex items-center gap-space-md min-w-0">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined text-[20px]">scan</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-title-md text-on-surface truncate">앱 버전</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">한국천문연구원 역서 알고리즘 탑재</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low shrink-0">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">v1.4.2</span>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">최신</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 5. Classical Callout: Scholarly Mindful Quote */}
            <div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-sm relative overflow-hidden">
              <div className="w-1 rounded-full bg-secondary shrink-0" />
              <div className="flex flex-col gap-1">
                <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
                  “명(命)은 정해진 운명이 아니요, 자신의 기운과 그릇을 바로 알아 나아감과 물러남을 도모하는 지혜입니다.”
                </p>
                <span className="font-label-sm text-label-sm text-secondary tracking-wider font-headline-md">
                  — 《자평진전(子平眞詮)》
                </span>
              </div>
            </div>
            {/* 6. Footer & Account Actions */}
            <div className="flex flex-col items-center gap-space-sm pt-space-xs pb-space-lg text-center">
              {/* Account Action Links */}
              <div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant">
                <button className="hover:text-on-surface transition-colors py-1" type="button">로그아웃</button>
                <span className="opacity-30">·</span>
                <button className="hover:text-error transition-colors py-1" type="button">회원탈퇴</button>
              </div>
              {/* Legal Disclaimer */}
              <p className="font-label-sm text-label-sm text-on-surface-variant/80 max-w-[340px] leading-relaxed">
                본 서비스에서 제공하는 운세와 명리 분석은 자평진전 및 고전 문헌을 기반으로 한 자아 탐색용 참고 콘텐츠입니다.
              </p>
              {/* Copyright */}
              <p className="font-label-sm text-label-sm text-on-surface-variant/60 tracking-wider">
                © 2026 결 연구원. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]" data-active-classes="text-primary-container font-semibold">
        <div className="flex justify-around items-center h-16 px-gutter">
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">
            <span className="material-symbols-outlined text-[22px]">home</span>
            <span className="font-label-sm text-label-sm mt-1">홈</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="my-saju" href="#">
            <span className="material-symbols-outlined text-[22px]">auto_stories</span>
            <span className="font-label-sm text-label-sm mt-1">내 사주</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="ai-chat" href="#">
            <span className="material-symbols-outlined text-[22px]">forum</span>
            <span className="font-label-sm text-label-sm mt-1">AI 상담</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors" data-path="more" href="#">
            <span className="material-symbols-outlined text-[22px]">more_horiz</span>
            <span className="font-label-sm text-label-sm mt-1">더보기</span>
          </a>
        </div>
      </nav>
    </>
  );
}
