/**
 * 이직운 리포트 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/07_이직운_리포트_b25e33d3.html element for element; edit it here from now on.
 */
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen";

function downloadReport() {
  alert("김서연 님의 이직운 리포트(PDF)가 안전하게 다운로드되었습니다.");
}

function sendMailReport() {
  alert("등록하신 계정 메일함으로 정밀 분석 전문이 발송되었습니다.");
}

export default function CareerMoveReport() {
  useBodyClass(BODY_CLASS);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
        <div className="h-14 px-gutter flex items-center justify-between relative">
          <button aria-label="뒤로 가기" className="w-11 h-11 -ml-space-xs flex items-center justify-center rounded-full text-primary-container active:scale-95 transition-transform" onClick={() => history.back()}>
            <span className="material-symbols-outlined text-[22px]">arrow_back</span>
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <h1 className="font-headline-md text-headline-md text-primary-container tracking-tight">이직운 리포트</h1>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="리포트 내보내기" className="w-11 h-11 flex items-center justify-center rounded-full text-secondary active:scale-95 transition-transform hover:text-on-secondary-container">
              <span className="material-symbols-outlined text-[22px]">download</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-surface-container">
          <div className="h-full bg-secondary-container w-1/3 transition-all duration-300" id="reading-progress-bar" />
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-14 bg-surface pb-safe min-h-screen">
        <div className="flex flex-col w-full relative">
          {/* Under-header Reading Progress Bar Tracker */}
          <div className="sticky top-14 z-40 w-full bg-surface-container-low px-margin py-space-xs flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[15px] text-secondary">auto_stories</span>
              <span className="font-label-md text-label-md text-on-surface-variant">독서 진행도</span>
            </div>
            <div className="flex items-center gap-space-sm flex-1 max-w-[180px] ml-space-md">
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[38%] transition-all duration-300" />
              </div>
              <span className="font-label-md text-label-md text-secondary font-semibold">38%</span>
            </div>
          </div>
          <div className="px-margin flex flex-col gap-space-xl pb-28 pt-space-lg">
            {/* Report Cover Section */}
            <section className="flex flex-col items-center text-center">
              {/* Atmospheric Hanji Emblem */}
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-space-md shadow-sm relative">
                <div className="absolute inset-1 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-secondary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container rounded-full text-secondary font-label-md text-label-md mb-space-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                AI 정밀 명리 리포트 · 이직 & 커리어편
              </div>
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-primary-container tracking-tight mt-space-xs mb-space-md">
                새로운 길을 여는 때
                <br />
                {" "}
                <span className="text-secondary font-headline-lg-mobile text-headline-lg-mobile">
                  김서연 님의 이직운 심층 보고서
                </span>
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-space-lg">
                천간의 큰 나무가 뿌리를 내려 비로소 푸른 숲을 이루는 명리적 분기점의 기록
              </p>
              {/* User Metadata Box */}
              <div className="w-full bg-surface-container-lowest rounded-xl p-space-lg text-left shadow-sm">
                <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant">발행 등록번호</span>
                  <span className="font-label-md text-label-md font-semibold text-primary-container">
                    #SR-88412 · 2025. 02. 24
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-space-sm pt-space-xs">
                  <div className="flex justify-between items-center text-left">
                    <span className="font-label-lg text-label-lg text-on-surface-variant">분석 대상</span>
                    <span className="font-title-md text-title-md text-primary-container">김서연 (여명)</span>
                  </div>
                  <div className="flex justify-between items-center text-left">
                    <span className="font-label-lg text-label-lg text-on-surface-variant">생년월일시</span>
                    <span className="font-body-md text-body-md text-on-surface">1994년 10월 24일 08:30 (음력)</span>
                  </div>
                  <div className="flex justify-between items-center text-left">
                    <span className="font-label-lg text-label-lg text-on-surface-variant">사주 원국 일주</span>
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-container font-semibold font-label-md text-label-md">
                        갑자(甲子)일주
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">청아한 지혜목</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Celestial Ink Motif Divider */}
              <div className="w-full flex items-center justify-center my-space-lg gap-space-md">
                <div className="h-[1px] bg-surface-container-highest flex-1" />
                <div className="flex items-center gap-1.5 text-secondary-container">
                  <span className="w-1 h-1 rounded-full bg-secondary" />
                  <span className="material-symbols-outlined text-[16px] text-secondary">wb_twilight</span>
                  <span className="w-1 h-1 rounded-full bg-secondary" />
                </div>
                <div className="h-[1px] bg-surface-container-highest flex-1" />
              </div>
            </section>
            {/* Table of Contents Card (목차) */}
            <section className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="toc">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">menu_book</span>
                  <h2 className="font-title-lg text-title-lg text-primary-container">리포트 목차 (Index)</h2>
                </div>
                <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant">
                  총 4장 (약 10페이지)
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group" href="#chapter-1">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="font-label-md text-label-md font-bold text-secondary">01</span>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate">
                      제 1장. 타고난 직업적 기질과 천직의 결
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
                </a>
                <a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group" href="#chapter-2">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="font-label-md text-label-md font-bold text-secondary">02</span>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate">
                      제 2장. 2025~2026년 대운과 직업 이동수
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
                </a>
                <a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group" href="#chapter-3">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="font-label-md text-label-md font-bold text-secondary">03</span>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate">
                      제 3장. 최적의 이직 타이밍 & 유리한 방위
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
                </a>
                <a className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group" href="#chapter-4">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="font-label-md text-label-md font-bold text-secondary">04</span>
                    <span className="font-body-md text-body-md text-on-surface group-hover:text-primary-container truncate">
                      제 4장. 새로운 조직과의 궁합 및 커리어 조언
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
                </a>
              </div>
            </section>
            {/* Chapter 1 */}
            <article className="flex flex-col gap-space-md scroll-mt-24" id="chapter-1">
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">
                  CHAPTER 01
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Inherent Aptitude
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
                제 1장. 타고난 직업적 기질과 천직의 결
              </h2>
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  명리학적으로 김서연 님은 거대한 곧은 나무인{" "}
                  <strong className="font-semibold text-primary-container">갑목(甲木)</strong>
                  이 맑고 깊은 샘물인{" "}
                  <strong className="font-semibold text-primary-container">자수(子水)</strong>
                  의 인성(印星)을 품고 있는 형국입니다. 본래 사유가 깊고 직관력이 뛰어나며, 단순 반복 업무보다는 거시적 기획과 전문 영역 구축에서 독보적인 기량을 발휘합니다.
                </p>
                {/* Pull Quote Panel */}
                <blockquote className="bg-surface-container-low rounded-lg p-space-md flex gap-space-sm my-space-xs">
                  <div className="w-1 bg-secondary rounded-full flex-shrink-0" />
                  <p className="font-body-md text-body-md text-secondary font-medium italic">
                    “나무가 단단한 뿌리를 내리듯, 지금 겪는 고민은 성장의 한계가 아니라 새로운 비옥한 토양으로 뻗어가기 위한 자연스러운 생명력의 발현입니다.”
                  </p>
                </blockquote>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  기존의 틀에 안주하기보다는 자율성이 보장되는 환경에서 진취적으로 프로젝트를 주도할 때 심리적 만족과 경제적 결실이 동시에 따릅니다.
                </p>
                {/* Five Elements Balance Visual */}
                <div className="mt-space-sm pt-space-md bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
                  <div className="flex justify-between items-center mb-space-xs">
                    <span className="font-title-md text-title-md text-primary-container">오행(五行) 에너지 분포도</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">사주 원국 기준</span>
                  </div>
                  {/* Wood */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container" />
                        木 (나무 / 추진력)
                      </span>
                      <span className="text-primary-container font-semibold">32% · 강함</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-container h-full rounded-full w-[32%]" />
                    </div>
                  </div>
                  {/* Fire */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        火 (불 / 표현력)
                      </span>
                      <span className="text-secondary font-semibold">18% · 보통</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full w-[18%]" />
                    </div>
                  </div>
                  {/* Earth */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-outline" />
                        土 (흙 / 포용성)
                      </span>
                      <span className="text-on-surface-variant">8% · 약함</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-outline h-full rounded-full w-[8%]" />
                    </div>
                  </div>
                  {/* Metal */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-surface-tint" />
                        金 (쇠 / 결단력)
                      </span>
                      <span className="text-on-surface font-semibold">17% · 균형</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-surface-tint h-full rounded-full w-[17%]" />
                    </div>
                  </div>
                  {/* Water */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container" />
                        水 (물 / 지혜)
                      </span>
                      <span className="text-primary-container font-semibold">25% · 왕성</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-container h-full rounded-full w-[25%]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            {/* Chapter 2 */}
            <article className="flex flex-col gap-space-md scroll-mt-24" id="chapter-2">
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  CHAPTER 02
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Career Transition Flow
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
                제 2장. 2025~2026년 대운과 세운의 직업 이동수
              </h2>
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  다가오는 을사(乙巳)년과 병오(丙午)년으로 이어지는 따스한{" "}
                  <strong className="font-semibold text-primary-container">화(火) 기운의 유입</strong>
                  은, 긴 응축기를 보낸 차가운 갑목에게 커다란 꽃을 피우게 하는 계절적 전환을 의미합니다. 침체되었던 관성(官星)과 식상(食傷)이 강하게 타오르며 외부 헤드헌터 제안이나 유력 인사의 스카우트 이동수가 급격히 상승합니다.
                </p>
                {/* Atmospheric Image */}
                <div className="relative w-full h-44 rounded-lg overflow-hidden my-space-xs shadow-inner">
                  <img className="w-full h-full object-cover" data-alt="A serene minimalist Korean ink painting landscape depicting a lone strong pine tree on a cliff overlooking misty mountains with a golden morning sun rising in deep navy and warm ivory tones." src="/assets/img05.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-space-md">
                    <span className="font-label-sm text-label-sm text-surface-bright tracking-wide">
                      도약의 징후 · 2025 하반기 변곡점
                    </span>
                  </div>
                </div>
                {/* Timing Chart Card */}
                <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-title-md text-title-md text-primary-container">시기별 이직 성공 확률 및 기운 분석</span>
                    <span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    {/* 2025 H1 */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-outline" />
                          <span className="font-title-md text-title-md text-on-surface">2025년 상반기</span>
                        </div>
                        <span className="font-headline-md text-headline-md text-on-surface font-semibold">75%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        준비 및 시장 탐색기 · 포트폴리오 재정비와 네트워킹에 적합
                      </p>
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
                        <div className="bg-on-surface-variant h-full rounded-full w-[75%]" />
                      </div>
                    </div>
                    {/* 2025 H2 (Golden Time) */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 px-2.5 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-bl-lg font-bold">
                        최적의 골든타임
                      </div>
                      <div className="flex justify-between items-center pr-16">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                          <span className="font-title-md text-title-md text-primary-container font-bold">
                            2025년 하반기
                          </span>
                        </div>
                        <span className="font-headline-md text-headline-md text-secondary font-bold">94%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface font-medium">
                        연봉 협상 및 지위 도약 최상 · 동남(東南)방향의 새로운 터전 유력
                      </p>
                      <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-secondary h-full rounded-full w-[94%]" />
                      </div>
                    </div>
                    {/* 2026 H1 */}
                    <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-surface-tint" />
                          <span className="font-title-md text-title-md text-on-surface">2026년 상반기</span>
                        </div>
                        <span className="font-headline-md text-headline-md text-on-surface font-semibold">82%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        새 조직 안착기 · 권한 확대 및 핵심 프로젝트의 주도적 완수
                      </p>
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
                        <div className="bg-surface-tint h-full rounded-full w-[82%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-space-md scroll-mt-24" id="chapter-3">
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">
                  CHAPTER 03
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Timing & Direction
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
                제 3장. 최적의 이직 타이밍 & 유리한 방위
              </h2>
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  김서연 님에게 가장 길(吉)한 이동 방향은 생기(生氣)를 품은{" "}
                  <strong className="font-semibold text-primary-container">동남쪽(東南)</strong>
                  과 결실의 기운이 닿는{" "}
                  <strong className="font-semibold text-primary-container">남쪽(南)</strong>
                  입니다. 반면 겨울 수기운이 과한 서북방 이동은 피하는 것이 이롭습니다.
                </p>
                <div className="grid grid-cols-1 gap-space-sm">
                  <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[22px]">explore</span>
                      <div>
                        <p className="font-title-md text-title-md text-primary-container">유리한 방위 (吉方)</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">현 거주지 기준 동남향 및 남부 테크 벨트</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      대길(大吉)
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[22px]">event_available</span>
                      <div>
                        <p className="font-title-md text-title-md text-primary-container">계약 및 입사 적기</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">2025년 9월 ~ 11월 (가을 금화교역기)</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-container font-label-sm text-label-sm font-semibold">
                      최상기
                    </span>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-space-md scroll-mt-24" id="chapter-4">
              <div className="flex items-center gap-space-xs">
                <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm">
                  CHAPTER 04
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  Compatibility & Strategy
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-tight">
                제 4장. 새로운 조직과의 궁합 및 커리어 조언
              </h2>
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  수생목(水生木)의 지혜를 존중하고 자율적 기획 권한을 위임하는 수평적 기업 문화에서 잠재력이 극대화됩니다. 경직된 상명하복 조직보다는 전문 연구·기획형 조직을 적극 권장합니다.
                </p>
                <blockquote className="bg-surface-container-low rounded-lg p-space-md flex gap-space-sm my-space-xs">
                  <div className="w-1 bg-secondary rounded-full flex-shrink-0" />
                  <p className="font-body-md text-body-md text-secondary font-medium italic">
                    “성급한 수평 이동보다 자신의 직무 전문성을 한 단계 격상시킬 수 있는 리더십 롤을 목표로 삼으십시오.”
                  </p>
                </blockquote>
                <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                  <span className="font-label-md text-label-md text-on-surface-variant">리포트 총 분량</span>
                  <span className="font-label-md text-label-md font-semibold text-primary-container">
                    약 10페이지 요약본 완결
                  </span>
                </div>
              </div>
            </article>
          </div>
          {/* Floating Action Button (TOC quick trigger) */}
          <a aria-label="목차 바로가기" className="fixed right-margin bottom-28 z-40 w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform" href="#toc">
            <span className="material-symbols-outlined text-[24px]">list_alt</span>
          </a>
          {/* Bottom Action Bar / Sheet Trigger */}
          <aside className="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md pb-safe pt-space-sm px-margin shadow-[0_-4px_24px_rgba(19,27,46,0.06)] flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm w-full">
              <button className="flex-1 h-12 rounded-lg bg-surface-container-high text-primary-container font-label-lg text-label-lg flex items-center justify-center gap-space-xs active:scale-[0.98] transition-transform" onClick={() => downloadReport()}>
                <span className="material-symbols-outlined text-[20px]">download</span>
                PDF로 저장
              </button>
              <button className="flex-1 h-12 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs shadow-sm active:scale-[0.98] transition-transform" onClick={() => sendMailReport()}>
                <span className="material-symbols-outlined text-[20px]">mail</span>
                메일로 받기
              </button>
            </div>
            <div className="py-space-xs text-center">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                본 리포트는 영구 소장 가능하며{" "}
                <span className="font-semibold text-primary-container">[내 사주]</span>
                {" "}보관함에 자동 저장됩니다.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
