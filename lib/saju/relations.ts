// 세운 · 월운 · 대운과 원국의 합충, 십신, 점수. 전부 코드로 계산하고 AI는 이 결과를 설명만 한다.
import type { PillarInfo, SajuChart } from "./calculateSaju";

export type Product = "career" | "money";

const STEM_K = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const STEM_H = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCH_K = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const BRANCH_H = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
// 지지의 본기(本氣) 천간 — 지지 십신을 볼 때 쓴다
const BRANCH_MAIN_STEM = [9, 5, 0, 1, 4, 2, 3, 5, 6, 7, 4, 8];

const stemEl = (s: number) => Math.floor(s / 2); // 木火土金水 = 0..4
const label = (h: string, k: string) => `${h}(${k})`;

export const stemLabel = (s: number) => label(STEM_H[s], STEM_K[s]);
export const branchLabel = (b: number) => label(BRANCH_H[b], BRANCH_K[b]);
export const ganjiHanja = (s: number, b: number) => STEM_H[s] + BRANCH_H[b];
export const ganjiKorean = (s: number, b: number) => STEM_K[s] + BRANCH_K[b];

export type TenGod = "비견" | "겁재" | "식신" | "상관" | "편재" | "정재" | "편관" | "정관" | "편인" | "정인";

/** 일간(dm)에 대한 다른 천간(other)의 십신 */
export function tenGod(dm: number, other: number): TenGod {
  const samePolarity = dm % 2 === other % 2;
  switch ((stemEl(other) - stemEl(dm) + 5) % 5) {
    case 0:
      return samePolarity ? "비견" : "겁재";
    case 1:
      return samePolarity ? "식신" : "상관";
    case 2:
      return samePolarity ? "편재" : "정재";
    case 3:
      return samePolarity ? "편관" : "정관";
    default:
      return samePolarity ? "편인" : "정인";
  }
}

// 상품별로 그 해의 기운이 얼마나 도움이 되는지 (십신 가중치)
const GOD_WEIGHT: Record<Product, Record<TenGod, number>> = {
  career: { 정관: 14, 편관: 8, 정인: 10, 편인: 6, 정재: 6, 편재: 4, 식신: 3, 상관: -4, 비견: -2, 겁재: -6 },
  money: { 정재: 14, 편재: 14, 식신: 8, 상관: 4, 정관: 4, 편관: -2, 정인: -2, 편인: -4, 비견: -6, 겁재: -12 },
};

const STEM_HAP = [[0, 5], [1, 6], [2, 7], [3, 8], [4, 9]];
const STEM_CHUNG = [[0, 6], [1, 7], [2, 8], [3, 9]];
const BRANCH_YUKHAP = [[0, 1], [2, 11], [3, 10], [4, 9], [5, 8], [6, 7]];
const SAMHAP = [
  { b: [8, 0, 4], name: "申子辰(신자진) 水局(수국)" },
  { b: [11, 3, 7], name: "亥卯未(해묘미) 木局(목국)" },
  { b: [2, 6, 10], name: "寅午戌(인오술) 火局(화국)" },
  { b: [5, 9, 1], name: "巳酉丑(사유축) 金局(금국)" },
];

const has = (pairs: number[][], a: number, b: number) =>
  pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

type Slot = { name: string; stem: number; branch: number };

const idx = (list: string[], v: string) => list.indexOf(v);
const slotOf = (name: string, p: PillarInfo): Slot => ({
  name,
  stem: idx(STEM_K, p.stem),
  branch: idx(BRANCH_K, p.branch),
});

/** 원국의 기둥들 (시간을 모르면 시주 제외) */
function chartSlots(chart: SajuChart): Slot[] {
  const slots = [slotOf("년주", chart.year), slotOf("월주", chart.month), slotOf("일주", chart.day)];
  if (chart.hour) slots.push(slotOf("시주", chart.hour));
  return slots;
}

export type Hit = { text: string; weight: number };

function stemHits(inc: number, base: Slot[]): Hit[] {
  const hits: Hit[] = [];
  for (const s of base) {
    if (has(STEM_HAP, inc, s.stem))
      hits.push({
        text: `${s.name} ${stemLabel(s.stem)}와 ${STEM_H[Math.min(inc, s.stem)]}${STEM_H[Math.max(inc, s.stem)]}合(${STEM_K[Math.min(inc, s.stem)]}${STEM_K[Math.max(inc, s.stem)]}합)`,
        weight: s.name === "일주" ? 8 : 6,
      });
    if (has(STEM_CHUNG, inc, s.stem))
      hits.push({
        text: `${s.name} ${stemLabel(s.stem)}와 ${STEM_H[Math.min(inc, s.stem)]}${STEM_H[Math.max(inc, s.stem)]}沖(${STEM_K[Math.min(inc, s.stem)]}${STEM_K[Math.max(inc, s.stem)]}충)`,
        weight: -8,
      });
  }
  return hits;
}

function branchHits(inc: number, base: Slot[]): Hit[] {
  const hits: Hit[] = [];
  for (const s of base) {
    const pair = `${BRANCH_H[Math.min(inc, s.branch)]}${BRANCH_H[Math.max(inc, s.branch)]}`;
    const pairK = `${BRANCH_K[Math.min(inc, s.branch)]}${BRANCH_K[Math.max(inc, s.branch)]}`;
    if (has(BRANCH_YUKHAP, inc, s.branch))
      hits.push({ text: `${s.name} ${branchLabel(s.branch)}와 ${pair}合(${pairK}합)`, weight: s.name === "일주" ? 8 : 6 });
    if ((inc - s.branch + 12) % 12 === 6)
      hits.push({
        text: `${s.name} ${branchLabel(s.branch)}와 ${pair}沖(${pairK}충)`,
        weight: s.name === "일주" ? -12 : s.name === "월주" ? -10 : -8,
      });
  }
  // 삼합: 들어오는 지지가 원국 지지와 모여 국(局)을 이루는가
  const present = new Set(base.map((s) => s.branch));
  for (const g of SAMHAP) {
    if (!g.b.includes(inc)) continue;
    const others = g.b.filter((x) => x !== inc);
    const n = others.filter((x) => present.has(x)).length;
    if (n === 2) hits.push({ text: `${g.name} 완성`, weight: 14 });
    else if (n === 1) {
      const mate = others.find((x) => present.has(x))!;
      hits.push({ text: `${branchLabel(inc)}·${branchLabel(mate)} 반합(半合, ${g.name})`, weight: 5 });
    }
  }
  return hits;
}

const clamp = (n: number) => Math.max(15, Math.min(95, Math.round(n)));

export type PillarFact = {
  ganjiHanja: string;
  ganjiKorean: string;
  stemGod: TenGod;
  branchGod: TenGod;
  /** 원국(과 대운)과 이루는 합충 */
  relations: string[];
  /** 천간 기운 점수 (상반기) / 지지 기운 점수 (하반기) */
  stemScore: number;
  branchScore: number;
};

/** 간지(stem, branch)가 원국에 들어올 때의 십신 · 합충 · 점수. luck 은 함께 보는 대운(없으면 생략). */
export function pillarFact(
  chart: SajuChart,
  stem: number,
  branch: number,
  product: Product,
  luck?: { stem: number; branch: number } | null,
): PillarFact {
  const dm = idx(STEM_K, chart.day.stem);
  const base = chartSlots(chart);
  if (luck) base.push({ name: "대운", stem: luck.stem, branch: luck.branch });
  const sGod = tenGod(dm, stem);
  const bGod = tenGod(dm, BRANCH_MAIN_STEM[branch]);
  const sh = stemHits(stem, base);
  const bh = branchHits(branch, base);
  const w = GOD_WEIGHT[product];
  return {
    ganjiHanja: ganjiHanja(stem, branch),
    ganjiKorean: ganjiKorean(stem, branch),
    stemGod: sGod,
    branchGod: bGod,
    relations: [...sh, ...bh].map((h) => h.text),
    stemScore: clamp(50 + w[sGod] + sh.reduce((a, h) => a + h.weight, 0)),
    branchScore: clamp(50 + w[bGod] + bh.reduce((a, h) => a + h.weight, 0)),
  };
}

// ---- 세운 · 월운 · 대운 ----

const mod = (n: number, m: number) => ((n % m) + m) % m;

export type YearFact = PillarFact & { year: number; label: string };

/** 세운: 연도의 간지 (입춘 기준 연도) */
export function yearFact(chart: SajuChart, year: number, product: Product): YearFact {
  const stem = mod(year - 4, 10);
  const branch = mod(year - 4, 12);
  // 대운은 세는나이 기준이라 연도로 환산해 그해에 걸친 대운을 찾는다
  const age = chart.birthYear ? year - chart.birthYear + 1 : null;
  const lp = age === null ? undefined : chart.luck.pillars.find((p) => age >= p.startAge && age <= p.endAge);
  const luck = lp ? { stem: idx(STEM_K, lp.korean[0]), branch: idx(BRANCH_K, lp.korean[1]) } : null;
  return {
    ...pillarFact(chart, stem, branch, product, luck),
    year,
    label: `${ganjiHanja(stem, branch)}年(${ganjiKorean(stem, branch)}년)`,
  };
}

export type MonthFact = PillarFact & { label: string; ganjiLabel: string };

/**
 * 월운: 양력 달을 절기월로 근사한다 (2월=寅月 … 1월=丑月, 실제 절입일은 매달 4~8일경).
 * 1월은 입춘 전이라 전년도 간지에 속한다.
 */
export function monthFact(
  chart: SajuChart,
  year: number,
  month: number,
  product: Product,
  luck?: { stem: number; branch: number } | null,
): MonthFact {
  const ipchunYear = month === 1 ? year - 1 : year;
  const yearStem = mod(ipchunYear - 4, 10);
  const branch = month % 12; // 2→寅(2) … 12→子(0), 1→丑(1)
  const stem = mod(mod(yearStem, 5) * 2 + 2 + mod(branch - 2, 12), 10);
  return {
    ...pillarFact(chart, stem, branch, product, luck),
    label: `${year}년 ${month}월`,
    ganjiLabel: `${ganjiHanja(stem, branch)}月(${ganjiKorean(stem, branch)}월)`,
  };
}

export type LuckFact = PillarFact & {
  startAge: number;
  endAge: number;
  hanja: string;
  korean: string;
  tenGods: string;
  now: boolean;
};

/** 대운 목록(현재 대운 앞뒤로 6개)의 십신과 점수. 대운 자체는 원국만과 비교한다. */
export function luckFacts(chart: SajuChart, product: Product): LuckFact[] {
  const all = chart.luck.pillars;
  const cur = chart.luck.current ? all.findIndex((p) => p.startAge === chart.luck.current!.startAge) : 0;
  const start = Math.max(0, Math.min(cur - 2, all.length - 6));
  return all.slice(start, start + 6).map((p) => {
    const stem = idx(STEM_K, p.korean[0]);
    const branch = idx(BRANCH_K, p.korean[1]);
    const f = pillarFact(chart, stem, branch, product);
    return {
      ...f,
      startAge: p.startAge,
      endAge: p.endAge,
      hanja: p.hanja,
      korean: p.korean,
      tenGods: `${f.stemGod} · ${f.branchGod}`,
      now: chart.luck.current?.startAge === p.startAge,
    };
  });
}

export type ScorePoint = { label: string; score: number; peak?: boolean };

const markPeak = (points: ScorePoint[]) => {
  const top = Math.max(...points.map((p) => p.score));
  return points.map((p) => (p.score === top ? { ...p, peak: true } : p));
};

/** 이직 그래프: 지금 반기부터 5개 구간 (천간=상반기, 지지=하반기) */
export function halfYearPoints(chart: SajuChart, today: Date, product: Product): ScorePoint[] {
  const out: ScorePoint[] = [];
  let year = today.getFullYear();
  let half: 0 | 1 = today.getMonth() < 6 ? 0 : 1;
  for (let i = 0; i < 5; i++) {
    const f = yearFact(chart, year, product);
    out.push({ label: `${String(year).slice(2)} ${half === 0 ? "상" : "하"}`, score: half === 0 ? f.stemScore : f.branchScore });
    if (half === 1) {
      half = 0;
      year += 1;
    } else half = 1;
  }
  return markPeak(out);
}

/** 재물 그래프: 올해부터 5년 (상 · 하반기 평균) */
export function yearPoints(chart: SajuChart, today: Date, product: Product): ScorePoint[] {
  const y = today.getFullYear();
  return markPeak(
    Array.from({ length: 5 }, (_, i) => {
      const f = yearFact(chart, y + i, product);
      return { label: String(y + i), score: Math.round((f.stemScore + f.branchScore) / 2) };
    }),
  );
}
