import type { Status } from "@/lib/ai/schemas";

export type Labels = {
  question: string;
  verdict: { MOVE: string; PREPARE: string; STAY: string };
  timing: string;
  boss: string;
  independence: string;
  money: string;
};

export const STATUS_NAMES: Record<Status, string> = {
  employed: "재직 중",
  seeking: "취업 준비 중",
  resting: "쉬는 중",
  freelance: "프리랜서 · 자영업",
};

export const STATUS_LABELS: Record<Status, Labels> = {
  employed: {
    question: "지금 움직여도 괜찮을까?",
    verdict: { MOVE: "움직일 때", PREPARE: "준비할 때", STAY: "머물 때" },
    timing: "이직 타이밍",
    boss: "상사 · 조직 궁합",
    independence: "독립 · 창업 기운",
    money: "재물운과 직업의 결",
  },
  seeking: {
    question: "언제쯤 길이 열릴까?",
    verdict: { MOVE: "열리는 때", PREPARE: "다지는 때", STAY: "넓히는 때" },
    timing: "취업 타이밍",
    boss: "잘 맞는 첫 직장 · 직무",
    independence: "나에게 맞는 일의 방향",
    money: "첫 연봉과 재물 흐름",
  },
  resting: {
    question: "언제 돌아가면 좋을까?",
    verdict: { MOVE: "복귀할 때", PREPARE: "쉬며 준비할 때", STAY: "더 쉴 때" },
    timing: "복귀 타이밍",
    boss: "잘 맞는 조직 · 직무",
    independence: "나에게 맞는 일의 방향",
    money: "재물운과 직업의 결",
  },
  freelance: {
    question: "지금 어떤 길이 맞을까?",
    verdict: { MOVE: "전환할 때", PREPARE: "준비할 때", STAY: "유지할 때" },
    timing: "정규직 전환 · 독립 타이밍",
    boss: "상사 · 조직 궁합",
    independence: "독립 유지 기운",
    money: "재물운과 직업의 결",
  },
};
