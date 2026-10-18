import { describe, expect, it } from "vitest";
import { calculateSaju } from "../calculateSaju";

const REF = new Date(2026, 9, 11);
const hanjas = (c: ReturnType<typeof calculateSaju>) =>
  [c.year, c.month, c.day, c.hour].map((p) => p?.hanja);

describe("골든 테스트", () => {
  it("1988-03-15 00:25 여, 통자시", () => {
    const c = calculateSaju({
      year: 1988, month: 3, day: 15, hour: 0, minute: 25,
      gender: "female", referenceDate: REF,
    });
    expect(hanjas(c)).toEqual(["戊辰", "乙卯", "己巳", "甲子"]);
    expect(c.luck.forward).toBe(false);
    expect(c.luck.current).toMatchObject({ hanja: "辛亥", startAge: 33, endAge: 42 });
  });

  it("1988-03-15 00:25 여, 경도보정 + 야자시 → 일주 戊辰", () => {
    const c = calculateSaju({
      year: 1988, month: 3, day: 15, hour: 0, minute: 25,
      gender: "female", yaJasi: true, trueSolar: {}, referenceDate: REF,
    });
    expect(c.day.hanja).toBe("戊辰");
    expect(["甲子", "壬子"]).toContain(c.hour?.hanja);
  });

  it("1988-06-15 17:00 남", () => {
    const c = calculateSaju({
      year: 1988, month: 6, day: 15, hour: 17, minute: 0,
      gender: "male", referenceDate: REF,
    });
    expect(hanjas(c)).toEqual(["戊辰", "戊午", "辛丑", "丙申"]);
    expect(c.luck.forward).toBe(true);
    expect(c.luck.current).toMatchObject({ hanja: "壬戌", startAge: 37, endAge: 46 });
  });

  it("1988-06-15 17:30 남 → 시주만 丁酉", () => {
    const c = calculateSaju({
      year: 1988, month: 6, day: 15, hour: 17, minute: 30,
      gender: "male", referenceDate: REF,
    });
    expect(hanjas(c)).toEqual(["戊辰", "戊午", "辛丑", "丁酉"]);
  });

  it("시간 모름 → 삼주", () => {
    const c = calculateSaju({
      year: 1988, month: 6, day: 15, hour: null, gender: "male", referenceDate: REF,
    });
    expect(c.hour).toBeNull();
    expect(c.hasHourPillar).toBe(false);
    expect(c.day.hanja).toBe("辛丑");
  });
});
