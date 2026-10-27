// 사주 계산의 유일한 진입점. 엔진(manseryeok) 교체·Java 이전 시 이 파일만 바꾼다.
import {
  calculateFourPillars,
  getEarthlyBranchElement,
  getHeavenlyStemElement,
  lunarToSolar,
  type DayBoundary,
  type FiveElement,
} from "manseryeok";

export type Gender = "male" | "female";

export type SajuInput = {
  year: number;
  month: number;
  day: number;
  /** null이면 태어난 시간 모름 → 삼주 */
  hour: number | null;
  minute?: number;
  gender: Gender;
  calendar?: "solar" | "lunar";
  isLeapMonth?: boolean;
  /** 야자시 적용 (기본 false = 통자시) */
  yaJasi?: boolean;
  /** 진태양시(경도) 보정 — 옵션. 지정하면 경도·균시차를 반영하고 기본 -30분 시진 보정은 쓰지 않는다 */
  trueSolar?: { longitude?: number };
  /** 대운 현재 위치 계산 기준일 (기본: 오늘) */
  referenceDate?: Date;
};

export type Element = "木" | "火" | "土" | "金" | "水";

export type PillarInfo = {
  /** 한글 간지 (예: 무진) */
  korean: string;
  /** 한자 간지 (예: 戊辰) */
  hanja: string;
  stem: string;
  branch: string;
  stemElement: Element;
  branchElement: Element;
  /** 천간·지지 십신 (일간 자신은 "일간") */
  tenGod: { stem: string; branch: string };
};

export type LuckPillarItem = {
  startAge: number;
  endAge: number;
  korean: string;
  hanja: string;
  stemElement: Element;
  branchElement: Element;
};

export type SajuChart = {
  /** 양력 출생 연도 (세운과 대운을 맞춰 볼 때 쓴다. 예전에 저장된 차트에는 없을 수 있다) */
  birthYear?: number;
  year: PillarInfo;
  month: PillarInfo;
  day: PillarInfo;
  /** 태어난 시간 모름이면 null */
  hour: PillarInfo | null;
  hasHourPillar: boolean;
  elementCounts: Record<Element, number>;
  voidBranches: string[];
  luck: {
    forward: boolean;
    startAge: number;
    pillars: LuckPillarItem[];
    /** 기준일 시점의 대운 (세는나이 기준). 대운 시작 전이면 null */
    current: LuckPillarItem | null;
  };
};

const ELEMENT_HANJA: Record<FiveElement, Element> = {
  목: "木",
  화: "火",
  토: "土",
  금: "金",
  수: "水",
};

/** 한국 표준시(동경 135°)와 한반도 자오선의 차이(30분)로 시진 경계를 :30에 둔다. */
const KST_SHIFT_MINUTES = 30;

function shiftMinutes(
  y: number,
  m: number,
  d: number,
  h: number,
  min: number,
  delta: number,
) {
  const t = new Date(Date.UTC(y, m - 1, d, h, min) + delta * 60_000);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
  };
}

type Raw = ReturnType<typeof calculateFourPillars>;
type RawPillar = Raw["year"];
type Slot = "year" | "month" | "day" | "hour";

function pillarInfo(raw: Raw, slot: Slot): PillarInfo {
  const p: RawPillar = raw[slot];
  const names = raw.toObject()[slot];
  const hanja = raw.toHanjaObject()[slot].hanja;
  return {
    korean: names,
    hanja,
    stem: p.heavenlyStem,
    branch: p.earthlyBranch,
    stemElement: ELEMENT_HANJA[getHeavenlyStemElement(p.heavenlyStem)],
    branchElement: ELEMENT_HANJA[getEarthlyBranchElement(p.earthlyBranch)],
    tenGod: raw.tenGods[slot],
  };
}

export function calculateSaju(input: SajuInput): SajuChart {
  let { year, month, day } = input;
  if (input.calendar === "lunar") {
    ({ year, month, day } = lunarToSolar(
      year,
      month,
      day,
      input.isLeapMonth ?? false,
    ));
  }

  const hasHour = input.hour !== null;
  // 시간 모름: 정오로 계산하고 시주는 버린다 (일 경계에서 멀어 일주에 영향 없음)
  const hour = hasHour ? input.hour! : 12;
  const minute = hasHour ? (input.minute ?? 0) : 0;
  const dayBoundary: DayBoundary = input.yaJasi ? "midnight" : "jasi";

  // 연주·월주·대운: 절입 순간 기준이라 입력 시각 그대로 계산
  const base = calculateFourPillars({
    year,
    month,
    day,
    hour,
    minute,
    gender: input.gender,
    dayBoundary,
    ...(input.trueSolar ? { trueSolarTime: input.trueSolar } : {}),
  });

  // 일주·시주: 진태양시 옵션이 없으면 30분 시진 보정을 적용
  const dh =
    input.trueSolar || !hasHour
      ? base
      : (() => {
          const s = shiftMinutes(year, month, day, hour, minute, -KST_SHIFT_MINUTES);
          return calculateFourPillars({ ...s, gender: input.gender, dayBoundary });
        })();

  const year_ = pillarInfo(base, "year");
  const month_ = pillarInfo(base, "month");
  const day_ = pillarInfo(dh, "day");
  const hour_ = hasHour ? pillarInfo(dh, "hour") : null;

  const elementCounts: Record<Element, number> = {
    木: 0,
    火: 0,
    土: 0,
    金: 0,
    水: 0,
  };
  for (const p of [year_, month_, day_, hour_]) {
    if (!p) continue;
    elementCounts[p.stemElement]++;
    elementCounts[p.branchElement]++;
  }

  const lp = base.luckPillars!;
  const hanjaOf = (korean: string) =>
    // 한글 간지 → 한자는 엔진 pillar 객체에서 얻을 수 없어 별도 매핑
    [...korean].map((c, i) => (i === 0 ? STEM_HANJA[c] : BRANCH_HANJA[c])).join("");
  const pillars: LuckPillarItem[] = lp.pillars.map((p) => ({
    startAge: p.age,
    endAge: p.age + 9,
    korean: p.korean,
    hanja: hanjaOf(p.korean),
    stemElement: ELEMENT_HANJA[getHeavenlyStemElement(p.pillar.heavenlyStem)],
    branchElement: ELEMENT_HANJA[getEarthlyBranchElement(p.pillar.earthlyBranch)],
  }));

  const ref = input.referenceDate ?? new Date();
  const koreanAge = ref.getFullYear() - year + 1;
  const current =
    pillars.find((p) => koreanAge >= p.startAge && koreanAge <= p.endAge) ?? null;

  return {
    birthYear: year,
    year: year_,
    month: month_,
    day: day_,
    hour: hour_,
    hasHourPillar: hasHour,
    elementCounts,
    voidBranches: base.voidBranches,
    luck: { forward: lp.forward, startAge: lp.startAge, pillars, current },
  };
}

const STEM_HANJA: Record<string, string> = {
  갑: "甲", 을: "乙", 병: "丙", 정: "丁", 무: "戊",
  기: "己", 경: "庚", 신: "辛", 임: "壬", 계: "癸",
};
const BRANCH_HANJA: Record<string, string> = {
  자: "子", 축: "丑", 인: "寅", 묘: "卯", 진: "辰", 사: "巳",
  오: "午", 미: "未", 신: "申", 유: "酉", 술: "戌", 해: "亥",
};
