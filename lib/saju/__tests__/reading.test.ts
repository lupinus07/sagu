import { describe, expect, it } from "vitest";
import { calculateSaju } from "../calculateSaju";
import { chartReading } from "../reading";

describe("chartReading", () => {
  const chart = calculateSaju({ year: 1988, month: 3, day: 15, hour: 0, minute: 30, gender: "female" });
  const cards = chartReading(chart);

  it("일간 · 월지 · 십신 · 오행 4장을 만든다", () => {
    expect(cards.map((c) => c.title)).toEqual([
      "己土(기토) 일간, 나의 일하는 성향",
      "일터에서 받는 기운",
      "십신으로 보는 일의 방식",
      "오행으로 보는 일의 균형",
    ]);
  });

  it("월지 편관, 金 없음이 문장에 반영된다", () => {
    expect(cards[1].body).toContain("편관");
    expect(cards[3].body).toContain("쇠 기운이 적어");
  });

  it("같은 입력이면 같은 문장이다", () => {
    expect(chartReading(chart)).toEqual(cards);
  });
});
