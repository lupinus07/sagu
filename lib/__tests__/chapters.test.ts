import { describe, expect, it } from "vitest";
import career from "../../data/samples/career.json";
import money from "../../data/samples/money.json";
import { CHAPTER_TITLES, lockedChapters } from "../chapters";

describe("잠긴 챕터 제목", () => {
  it("샘플 풀이 blocks 와 순서 · 제목이 같다", () => {
    expect(CHAPTER_TITLES.career).toEqual(career.reading.blocks.map((b) => b.title));
    expect(CHAPTER_TITLES.money).toEqual(money.reading.blocks.map((b) => b.title));
  });

  it("이직은 상황별 라벨로 바뀐다", () => {
    const t = lockedChapters("career", "seeking");
    expect(t).toContain("취업 타이밍");
    expect(t).toContain("잘 맞는 첫 직장 · 직무");
    expect(t).not.toContain("이직 타이밍");
    expect(t.at(-1)).toBe("지금 해볼 5가지");
  });
});
