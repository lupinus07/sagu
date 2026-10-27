import type { Status } from "./ai/schemas";
import { STATUS_LABELS } from "./labels";

type Product = "career" | "money";

// 결제 후 열리는 챕터 제목. 샘플 풀이(data/samples/*.json)의 blocks 순서와 같다 (chapters.test.ts 가 확인).
// 무료 풀이 화면에서 잠긴 카드로 미리 보여 주는 용도라, 샘플 JSON 을 클라이언트 번들에 싣지 않으려고 따로 둔다.
export const CHAPTER_TITLES: Record<Product, string[]> = {
  career: [
    "한눈에 보는 나의 커리어",
    "내 일의 결",
    "동료가 보는 나",
    "잘 맞는 일과 업종",
    "상사 · 조직 궁합",
    "귀인과 조심할 사람",
    "이직 타이밍",
    "월별 흐름",
    "이런 제안은 피하세요",
    "면접 · 지원 전략",
    "연봉 협상 공략",
    "독립 · 창업 기운",
    "10년 커리어 로드맵",
    "행운 포인트",
    "자주 묻는 질문",
  ],
  money: [
    "한눈에 보는 나의 재물",
    "나의 재물 그릇",
    "돈과 나의 관계",
    "숨은 재물",
    "돈이 들어오는 길",
    "부업 · 부수입 운",
    "돈이 새는 구멍",
    "나에게 맞는 돈 습관",
    "나와 맞는 재테크",
    "부동산 · 문서운",
    "평생 재물 흐름",
    "연도별 재물 흐름",
    "월별 재물 흐름",
    "2028년 집중 분석",
    "함께 쓰는 돈",
    "자주 묻는 질문",
  ],
};

/** 잠긴 챕터 제목 목록 (마지막은 실천 카드). 이직은 상황(status)별 라벨로 바꾼다. */
export function lockedChapters(product: Product, status: Status): string[] {
  const titles = [...CHAPTER_TITLES[product], "지금 해볼 5가지"];
  if (product !== "career") return titles;
  const base = STATUS_LABELS.employed;
  const L = STATUS_LABELS[status];
  const swap: Record<string, string> = { [base.timing]: L.timing, [base.boss]: L.boss, [base.independence]: L.independence };
  return titles.map((t) => swap[t] ?? t);
}
