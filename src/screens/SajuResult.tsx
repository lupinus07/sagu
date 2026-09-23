/**
 * 사주 분석 결과 — imported from the Stitch export of "AI Saju Fortune App".
 * Markup mirrors .stitch/html/23_사주_분석_결과_98844320.html element for element; edit it here from now on.
 */
import { useEffect } from 'react';
import { byId, query, queryAll } from '../lib/dom';
import { useBodyClass } from '../lib/useBodyClass';

export const BODY_CLASS =
  "bg-surface font-body-md text-on-surface flex flex-col min-h-screen";

export default function SajuResult() {
  useBodyClass(BODY_CLASS);

  useEffect(() => {
    // Tab switching interactions
    const tabs = queryAll('#sajuTabs button');
    const heading = byId('tabHeading');
    const paragraph = byId('tabParagraph');
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

        const key = tab.getAttribute('data-tab') as keyof typeof tabData | null;
        if (key && tabData[key]) {
          heading.textContent = tabData[key].title;
          paragraph.innerHTML = tabData[key].content;
        }
      });
    });
    // Deep Reading Accordion Interaction
    const accordionBtn = byId('deepReadingBtn');
    const classicalBox = byId('classicalCallout');
    const accordionIcon = byId('deepReadingIcon');
    const accordionText = byId('deepReadingText');
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
    const modalTrigger = byId('askAiModalTrigger');
    if (modalTrigger) {
      modalTrigger.addEventListener('click', () => {
        alert("김하늘님의 사주명식(병인일주) 데이터를 컨텍스트로 불러와 실시간 AI 대화를 연결합니다.");
      });
    }
    const profiles = { self: { name: '김하늘님의 사주명식', badge: '坤命 · 여명', birth: '1996. 10. 24 (양력) 辰時', dayMaster: '‘병화(丙火)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘병화(丙火)’</strong>를 품어 세상을 비추는 따뜻한 태양과 같은 명운입니다.', persona: '陽火의 기질', ctaText: '내 병화(丙火) 원국을 기반으로 실시간 심층 상담' }, husband: { name: '박민우님의 사주명식', badge: '乾命 · 남명', birth: '1994. 03. 12 (양력) 子時', dayMaster: '‘임수(壬水)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘임수(壬水)’</strong>를 품어 넓은 바다처럼 유연하고 지혜로운 명운입니다.', persona: '陽水의 기질', ctaText: '박민우님의 임수(壬水) 원국을 기반으로 실시간 심층 상담' }, firstchild: { name: '박서아님의 사주명식', badge: '坤命 · 여명', birth: '2023. 07. 05 (양력) 巳時', dayMaster: '‘갑목(甲木)’', desc: '태어난 날의 일간(日干) <strong class="text-secondary font-medium">‘갑목(甲木)’</strong>을 품어 곧게 뻗어 오르는 큰 나무와 같은 성장형 명운입니다.', persona: '陽木의 기질', ctaText: '박서아님의 갑목(甲木) 원국을 기반으로 실시간 심층 상담' } };
    const chipButtons = queryAll('.profile-chip');
    const headerCard = query('main > div.flex.flex-col > div.w-full.bg-surface-container-lowest:nth-of-type(2)');
    const nameHeading = headerCard ? query('h1', headerCard) : null;
    const badgeSpan = headerCard ? query('span.inline-flex', headerCard) : null;
    const birthSpan = headerCard ? queryAll('span.font-label-sm', headerCard)[1] : null;
    const descP = headerCard ? query('p', headerCard) : null;
    const ctaSub = query('#askAiModalTrigger span.text-on-primary-container');
    chipButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        chipButtons.forEach(b => {
          b.className = 'profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm';
          const labelSpans = queryAll('span', b);
          if (labelSpans[2]) labelSpans[2].className = 'text-[10px] text-on-surface-variant/70 font-normal';
        });
        btn.className = 'profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-white shadow-sm font-semibold transition-all shrink-0';
        const activeSpans = queryAll('span', btn);
        if (activeSpans[2]) activeSpans[2].className = 'text-[10px] text-white/70 font-normal';
        const profileKey = btn.getAttribute('data-profile-id') as keyof typeof profiles | null;
        const data = profileKey ? profiles[profileKey] : null;
        if (data && nameHeading && descP) {
          nameHeading.textContent = data.name;
          if (badgeSpan) badgeSpan.textContent = data.badge;
          if (birthSpan) birthSpan.textContent = data.birth;
          descP.innerHTML = data.desc;
          if (ctaSub) ctaSub.textContent = data.ctaText;
        }
      });
    });
    const addBtn = byId('addProfileBtn');
    if (addBtn) { addBtn.addEventListener('click', () => { alert('새 가족/지인 사주 프로필 등록 화면으로 이동합니다.'); }); }
    const manageBtn = byId('manageProfilesBtn');
    if (manageBtn) { manageBtn.addEventListener('click', () => { alert('저장된 사주 프로필 목록 관리(수정/순서변경) 창을 엽니다.'); }); }
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] pt-safe">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-surface-container">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/img01.png" />
            </div>
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight">내 사주</span>
              <span className="font-label-sm text-label-sm text-secondary tracking-wider uppercase font-semibold">
                命理
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface-variant px-space-xs hidden sm:inline-block">
              사주 분석 결과
            </span>
            <button aria-label="도움말 안내" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
        <div className="flex flex-col w-full px-margin-mobile pb-space-xl">
          {/* Profile Header Card */}
          <div className="w-full pt-1 pb-3 mb-1 border-b border-surface-container-highest/60">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 flex-1" id="profileChipList">
                <button type="button" className="profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-primary-container text-white shadow-sm font-semibold transition-all shrink-0" data-profile-id="self">
                  <span className="w-2 h-2 rounded-full bg-[#C84B31] shrink-0" />
                  <span className="">나</span>
                  <span className="text-[10px] text-white/70 font-normal">병화</span>
                </button>
                <button type="button" className="profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm" data-profile-id="husband">
                  <span className="w-2 h-2 rounded-full bg-[#1D3557] shrink-0" />
                  <span className="">남편</span>
                  <span className="text-[10px] text-on-surface-variant/70 font-normal">임수</span>
                </button>
                <button type="button" className="profile-chip flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-all shrink-0 shadow-sm" data-profile-id="firstchild">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F] shrink-0" />
                  <span className="">첫째</span>
                  <span className="text-[10px] text-on-surface-variant/70 font-normal">갑목</span>
                </button>
                <button type="button" className="flex items-center gap-1 px-3 py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap bg-surface-container text-on-surface-variant hover:bg-surface-container-highest transition-all shrink-0" id="addProfileBtn">
                  <span className="material-symbols-outlined text-[16px]">add</span>
                  <span className="">추가</span>
                </button>
              </div>
              <button
                type="button"
                aria-label="프로필 관리"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0"
                id="manageProfilesBtn"
              >
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md mt-space-sm relative overflow-hidden">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                    坤命 · 여명
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary tracking-wide">1996. 10. 24 (양력) 辰時</span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[18px]">wb_sunny</span>
              </div>
              <div className="flex items-baseline gap-space-xs mt-1">
                <h1 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                  김하늘님의 사주명식
                </h1>
                <span className="font-label-md text-label-md text-on-surface-variant">四柱命式</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                태어난 날의 일간(日干){" "}
                <strong className="text-secondary font-medium">‘병화(丙火)’</strong>
                를 품어 세상을 비추는 따뜻한 태양과 같은 명운입니다.
              </p>
            </div>
            {/* Atmospheric Hanji Accent Background Stamp */}
            <div className="absolute -right-3 -bottom-4 opacity-5 pointer-events-none select-none text-[84px] font-headline-xl text-primary">
              命
            </div>
          </div>
          {/* Four Pillars Matrix (사주 원국표) */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-secondary">view_column</span>
                <span className="font-title-md text-title-md text-on-surface">사주원국표</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                우→좌 순서(時·日·月·年)
              </span>
            </div>
            {/* 4 Columns Grid: Hour, Day (Self), Month, Year */}
            <div className="grid grid-cols-4 gap-space-xs">
              {/* Hour Column (시주) */}
              <div className="flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low">
                <div className="text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">시주(時)</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70">말년·자녀</span>
                </div>
                {/* Heavenly Stem: 壬 (Water) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">편관(水)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#1D3557] leading-none">
                    壬
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">임수</span>
                </div>
                {/* Earthly Branch: 辰 (Earth - Dragon) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">식신(土)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none">
                    辰
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">진토 · 龍</span>
                </div>
                <span className="font-label-sm text-[10px] text-on-surface-variant/80 text-center">관대(冠帶)</span>
              </div>
              {/* Day Column (일주 / 본원 - Highlighted) */}
              <div className="flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-secondary-container/20 relative shadow-sm">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-secondary text-on-secondary rounded-full font-label-sm text-[9px] whitespace-nowrap shadow-sm">
                  나·본원
                </div>
                <div className="text-center mt-1">
                  <span className="font-label-sm text-label-sm font-semibold text-secondary block">일주(日)</span>
                  <span className="font-label-sm text-label-sm text-secondary/80">중년·자아</span>
                </div>
                {/* Heavenly Stem: 丙 (Fire - Day Master) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center p-1 text-center shadow-md">
                  <span className="font-label-sm text-[10px] text-secondary font-semibold leading-none mb-0.5">
                    본원(火)
                  </span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-[#C84B31] leading-none">
                    丙
                  </span>
                  <span className="font-label-sm text-[10px] text-secondary font-medium mt-0.5">병화 (태양)</span>
                </div>
                {/* Earthly Branch: 寅 (Wood - Tiger) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center p-1 text-center shadow-md">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">편인(木)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#2D6A4F] leading-none">
                    寅
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">인목 · 虎</span>
                </div>
                <span className="font-label-sm text-[10px] text-secondary font-semibold text-center">장생(長生)</span>
              </div>
              {/* Month Column (월주) */}
              <div className="flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low">
                <div className="text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">월주(月)</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70">청년·사회</span>
                </div>
                {/* Heavenly Stem: 戊 (Earth) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">식신(土)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none">
                    戊
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">무토</span>
                </div>
                {/* Earthly Branch: 戌 (Earth - Dog) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">식신(土)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#D99B26] leading-none">
                    戌
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">술토 · 犬</span>
                </div>
                <span className="font-label-sm text-[10px] text-on-surface-variant/80 text-center">묘(墓)</span>
              </div>
              {/* Year Column (년주) */}
              <div className="flex flex-col items-center gap-space-xs p-1.5 rounded-lg bg-surface-container-low">
                <div className="text-center">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">년주(年)</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant/70">초년·조상</span>
                </div>
                {/* Heavenly Stem: 丙 (Fire) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">비견(火)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#C84B31] leading-none">
                    丙
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">병화</span>
                </div>
                {/* Earthly Branch: 子 (Water - Rat) */}
                <div className="w-full aspect-square rounded-lg bg-surface-container-highest flex flex-col items-center justify-center p-1 text-center shadow-sm">
                  <span className="font-label-sm text-[10px] text-on-surface-variant leading-none mb-0.5">정관(水)</span>
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-[#1D3557] leading-none">
                    子
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant mt-0.5">자수 · 鼠</span>
                </div>
                <span className="font-label-sm text-[10px] text-on-surface-variant/80 text-center">태(胎)</span>
              </div>
            </div>
            {/* Five Elements Legend Indicator */}
            <div className="flex items-center justify-around mt-space-sm pt-2 bg-surface-container-low/50 rounded-lg">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                <span className="font-label-sm text-[10px] text-on-surface-variant">목(木)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
                <span className="font-label-sm text-[10px] text-on-surface-variant">화(火)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#D99B26]" />
                <span className="font-label-sm text-[10px] text-on-surface-variant">토(土)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#8D99AE]" />
                <span className="font-label-sm text-[10px] text-on-surface-variant">금(金)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1D3557]" />
                <span className="font-label-sm text-[10px] text-on-surface-variant">수(水)</span>
              </div>
            </div>
          </div>
          {/* Five Elements Distribution & Balance */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md">
            <div className="flex flex-col gap-0.5 mb-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-title-md text-title-md text-on-surface">오행(五行) 에너지 분포</span>
                <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm font-semibold">
                  화·토 발달격
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                불(火)과 흙(土)의 기운이 풍부하여 따뜻하고 너른 들판의 형국입니다.
              </p>
            </div>
            {/* Segmented Macro Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-surface-container shadow-inner mb-space-sm">
              <div className="bg-[#C84B31] h-full" style={{ width: "35%" }} title="화 35%" />
              <div className="bg-[#D99B26] h-full" style={{ width: "30%" }} title="토 30%" />
              <div className="bg-[#2D6A4F] h-full" style={{ width: "15%" }} title="목 15%" />
              <div className="bg-[#1D3557] h-full" style={{ width: "15%" }} title="수 15%" />
              <div className="bg-[#8D99AE] h-full" style={{ width: "5%" }} title="금 5%" />
            </div>
            {/* Five Elements Quantitative Rows */}
            <div className="flex flex-col gap-space-xs">
              {/* Fire (화) */}
              <div className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-2 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
                  <span className="font-label-md text-label-md text-on-surface font-medium">화 (火)</span>
                </div>
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-[#C84B31] h-full rounded-full" style={{ width: "70%" }} />
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <span className="font-label-md text-label-md text-on-surface">35%</span>
                  <span className="font-label-sm text-[10px] text-[#C84B31] bg-[#C84B31]/10 px-1 py-0.2 rounded font-semibold">
                    강함
                  </span>
                </div>
              </div>
              {/* Earth (토) */}
              <div className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-2 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#D99B26]" />
                  <span className="font-label-md text-label-md text-on-surface font-medium">토 (土)</span>
                </div>
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-[#D99B26] h-full rounded-full" style={{ width: "60%" }} />
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <span className="font-label-md text-label-md text-on-surface">30%</span>
                  <span className="font-label-sm text-[10px] text-[#D99B26] bg-[#D99B26]/10 px-1 py-0.2 rounded font-semibold">
                    원만
                  </span>
                </div>
              </div>
              {/* Wood (목) */}
              <div className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-2 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                  <span className="font-label-md text-label-md text-on-surface font-medium">목 (木)</span>
                </div>
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-[#2D6A4F] h-full rounded-full" style={{ width: "30%" }} />
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <span className="font-label-md text-label-md text-on-surface">15%</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant bg-surface-container px-1 py-0.2 rounded">
                    적정
                  </span>
                </div>
              </div>
              {/* Water (수) */}
              <div className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-2 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#1D3557]" />
                  <span className="font-label-md text-label-md text-on-surface font-medium">수 (水)</span>
                </div>
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-[#1D3557] h-full rounded-full" style={{ width: "30%" }} />
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <span className="font-label-md text-label-md text-on-surface">15%</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant bg-surface-container px-1 py-0.2 rounded">
                    적정
                  </span>
                </div>
              </div>
              {/* Metal (금) */}
              <div className="flex items-center justify-between text-body-sm">
                <div className="flex items-center gap-2 w-20">
                  <span className="w-2 h-2 rounded-full bg-[#8D99AE]" />
                  <span className="font-label-md text-label-md text-on-surface font-medium">금 (金)</span>
                </div>
                <div className="flex-1 mx-2 bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-[#8D99AE] h-full rounded-full" style={{ width: "10%" }} />
                </div>
                <div className="flex items-center gap-1.5 w-16 justify-end">
                  <span className="font-label-md text-label-md text-on-surface">5%</span>
                  <span className="font-label-sm text-[10px] text-error bg-error-container/40 px-1 py-0.2 rounded font-semibold">
                    부족
                  </span>
                </div>
              </div>
            </div>
            {/* Prescriptive Recommendation Tag */}
            <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">lightbulb</span>
              <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                <strong className="text-secondary font-medium">개운(開運) 조언:</strong>
                {" "}부족한{" "}
                <span className="font-semibold text-on-surface">금(金)</span>
                의 기운을 보완하기 위해 흰색 계열의 옷차림, 금속 장신구, 그리고 명확하고 단호한 의사결정 습관이 운을 높여줍니다.
              </p>
            </div>
          </div>
          {/* Persona & Essence Summary Card */}
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">psychology_alt</span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">나는 어떤 사람일까?</h2>
              </div>
              <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase">陽火의 기질</span>
            </div>
            <div className="space-y-space-sm mt-space-sm">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5">
                  1
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  어둠을 걷어내는{" "}
                  <strong className="font-medium text-on-surface">한낮의 태양</strong>
                  처럼 매사에 당당하고 온화하며, 주위 사람들에게 환한 생기와 온기를 자연스럽게 건네는 존재입니다.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5">
                  2
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  목(木)의 지원을 받는 직관력과 창의력이 뛰어나 막힌 흐름 속에서도{" "}
                  <strong className="font-medium text-on-surface">새로운 길을 개척</strong>
                  해 내는 기획자형 천성을 지녔습니다.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-secondary-container/30 text-secondary flex items-center justify-center font-label-sm text-[11px] font-bold shrink-0 mt-0.5">
                  3
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  화려한 불꽃이 때때로 조급한 마음으로 번질 수 있으니, 중요한 순간{" "}
                  <strong className="font-medium text-on-surface">반 박자 쉬어가는 결단의 여유</strong>
                  를 취할 때 더욱 완벽해집니다.
                </p>
              </div>
            </div>
            {/* Keyword Hash Chips */}
            <div className="flex flex-wrap gap-1.5 mt-space-md pt-space-xs">
              <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                #열정적_추진력
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                #온화한_포용성
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                #빛나는_통찰
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                #자유로운_지성
              </span>
            </div>
          </div>
          {/* Interactive Analysis Chapters Tab Bar */}
          <div className="w-full mb-space-md">
            <div className="flex items-center justify-between pb-space-xs overflow-x-auto no-scrollbar gap-2" id="sajuTabs">
              <button className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-primary-container text-on-primary shadow-sm transition-all" data-tab="personality">
                기질 · 성격
              </button>
              <button className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" data-tab="wealth">
                재물운(財運)
              </button>
              <button className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" data-tab="career">
                직업 · 관운
              </button>
              <button className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" data-tab="love">
                연애 · 인연
              </button>
              <button className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" data-tab="flow">
                2025 운세
              </button>
            </div>
            {/* Active Tab Dynamic Insight Panel */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mt-space-xs" id="tabContentCard">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">auto_stories</span>
                <h3 className="font-title-md text-title-md text-on-surface" id="tabHeading">타고난 기질과 대인관계의 흐름</h3>
              </div>
              <div className="font-body-md text-body-md text-on-surface space-y-space-xs leading-relaxed" id="tabParagraph">
                <p className="">
                  당신의 일간 병화는 인목(寅木)을 아래에 두어{" "}
                  <strong>'목생화(木生火)'</strong>
                  의 마르지 않는 연료를 지니고 있습니다. 이는 외부 환경이 냉랭해지더라도 스스로 사기를 북돋우고 다시 일어설 수 있는 강인한 회복탄력성을 의미합니다.
                </p>
                <p className="text-on-surface-variant text-body-sm">
                  대인관계에서는 베푸는 데 인색하지 않고 솔직담백하여 주변에 사람이 끊이지 않습니다. 다만 때로는 타인의 비밀이나 사소한 단점에 관대해져야 더 큰 신망을 얻게 됩니다.
                </p>
              </div>
              {/* Expandable Deep Reading Accordion Trigger */}
              <button className="mt-space-sm w-full py-2 flex items-center justify-center gap-1 text-secondary font-label-md text-label-md hover:bg-secondary-container/10 rounded-lg transition-colors" id="deepReadingBtn" type="button">
                <span id="deepReadingText" className="">명리학 원전 고전해설 더보기</span>
                <span className="material-symbols-outlined text-[18px]" id="deepReadingIcon">expand_more</span>
              </button>
              {/* Classical Manuscript Callout (Hidden by default) */}
              <div className="hidden mt-space-sm p-space-sm bg-surface-container-low rounded-lg relative" id="classicalCallout">
                <div className="flex items-center gap-1.5 mb-1 text-secondary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                  <span className="">적천수(滴天髓) 원문 해석</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                  "丙火猛烈, 欺霜侮雪. 能鍛庚金, 逢辛反怯."
                  <br />
                  {" "}(병화는 맹렬하여 서리와 눈을 업신여기고, 단단한 경금을 제련하나 유연한 신금을 만나면 화합한다.)
                </p>
              </div>
            </div>
          </div>
          {/* Sticky Consult Floating Action Banner */}
          <div className="w-full mt-space-xs mb-space-sm">
            <button className="w-full bg-primary-container text-on-primary p-space-md rounded-xl shadow-md flex items-center justify-between group active:scale-[0.99] transition-transform" id="askAiModalTrigger" type="button">
              <div className="flex items-center gap-space-sm text-left">
                <div className="w-10 h-10 rounded-full bg-surface-container-lowest/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary-fixed text-[24px]">psychology</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-title-md text-title-md text-white font-semibold">AI 사주에게 직접 묻기</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">auto_awesome</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-primary-container block mt-0.5">
                    내 병화(丙火) 원국을 기반으로 실시간 심층 상담
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-white text-[22px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </button>
          </div>
        </div>
        {/* Micro-Interaction Logic for Tabs and Accordions */}
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(19,27,46,0.04)]" data-active-classes="text-primary-container font-semibold">
        <div className="flex justify-around items-center h-16 px-gutter">
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="#">
            <span className="material-symbols-outlined text-[22px]">home</span>
            <span className="font-label-sm text-label-sm mt-1">홈</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-primary-container font-semibold transition-colors" data-path="my-saju" href="#">
            <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            <span className="font-label-sm text-label-sm mt-1">내 사주</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="ai-chat" href="#">
            <span className="material-symbols-outlined text-[22px]">forum</span>
            <span className="font-label-sm text-label-sm mt-1">AI 상담</span>
          </a>
          <a className="flex flex-col items-center justify-center min-w-[56px] h-14 text-on-surface-variant hover:text-on-surface transition-colors" data-path="more" href="#">
            <span className="material-symbols-outlined text-[22px]">more_horiz</span>
            <span className="font-label-sm text-label-sm mt-1">더보기</span>
          </a>
        </div>
      </nav>
    </>
  );
}
