import { describe, expect, it } from "vitest";
import { calculateSaju } from "../calculateSaju";
import { halfYearPoints, luckFacts, monthFact, tenGod, yearFact, yearPoints } from "../relations";

// 1988-03-15 00:25 여 → 戊辰 · 乙卯 · 己巳 · 甲子, 현재 대운 辛亥(33~42세)
const chart = calculateSaju({
  year: 1988, month: 3, day: 15, hour: 0, minute: 25, gender: "female",
  referenceDate: new Date(2026, 9, 26),
});
const today = new Date(2026, 9, 26);

describe("세운 · 월운 · 대운", () => {
  it("십신: 己 일간 기준", () => {
    const dm = 5; // 己
    expect(tenGod(dm, 0)).toBe("정관"); // 甲
    expect(tenGod(dm, 1)).toBe("편관"); // 乙
    expect(tenGod(dm, 8)).toBe("정재"); // 壬
    expect(tenGod(dm, 9)).toBe("편재"); // 癸
  });

  it("2026 丙午年: 일지 子를 치는 子午沖", () => {
    const f = yearFact(chart, 2026, "career");
    expect(f.ganjiHanja).toBe("丙午");
    expect(f.relations.some((r) => r.includes("子午沖"))).toBe(true);
  });

  it("2027 丁未年: 대운 亥 · 월지 卯와 亥卯未 木局", () => {
    const f = yearFact(chart, 2027, "career");
    expect(f.ganjiHanja).toBe("丁未");
    expect(f.relations.some((r) => r.includes("亥卯未"))).toBe(true);
  });

  it("월운: 2027년 4월은 甲辰月, 2026년 10월은 戊戌月", () => {
    expect(monthFact(chart, 2027, 4, "money").ganjiLabel).toContain("甲辰月");
    expect(monthFact(chart, 2026, 10, "money").ganjiLabel).toContain("戊戌月");
    expect(monthFact(chart, 2027, 2, "money").ganjiLabel).toContain("壬寅月");
  });

  it("그래프 점수: 이직은 반기 5개, 재물은 연도 5개, 정점은 하나 이상", () => {
    const c = halfYearPoints(chart, today, "career");
    expect(c.map((p) => p.label)).toEqual(["26 하", "27 상", "27 하", "28 상", "28 하"]);
    const m = yearPoints(chart, today, "money");
    expect(m.map((p) => p.label)).toEqual(["2026", "2027", "2028", "2029", "2030"]);
    for (const p of [...c, ...m]) expect(p.score).toBeGreaterThanOrEqual(15);
    expect(c.some((p) => p.peak)).toBe(true);
  });

  it("대운 6개 중 현재 대운이 표시된다", () => {
    const l = luckFacts(chart, "money");
    expect(l).toHaveLength(6);
    expect(l.find((x) => x.now)?.hanja).toBe("辛亥");
  });
});
