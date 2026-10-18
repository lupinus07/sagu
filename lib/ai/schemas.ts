import { z } from "zod";

// 빈/이상한 필드는 기본 문구로 대체해 화면이 깨지지 않게 한다.
const text = (fallback: string) => z.string().min(1).catch(fallback);
const str = () => z.string().catch("");
const list = () => z.array(z.string()).catch([]);

export const RowSchema = z.object({
  label: z.string(),
  text: z.string(),
  tone: z.enum(["gold", "caution", "plain"]).catch("plain"),
});
export type Row = z.infer<typeof RowSchema>;
const rows = () => z.array(RowSchema).catch([]);

const SliderSchema = z.object({
  left: z.string(),
  right: z.string(),
  /** 0-100 */
  value: z.number().min(0).max(100).catch(50),
});

const ScorePoint = z.object({ label: z.string(), score: z.number(), peak: z.boolean().optional() });
export type ScorePoint = z.infer<typeof ScorePoint>;

/** 카드 한 장. 결과 화면은 이 블록을 순서대로 그리기만 한다. */
export const BlockSchema = z.discriminatedUnion("kind", [
  // 제목 + 행 목록만 있는 요약 카드 (예: 한눈에 보는 나의 커리어)
  z.object({
    kind: z.literal("summary"),
    title: z.string(),
    rows: rows(),
  }),
  // 해석 카드: 결론 → 근거 칩 → 장면 → (슬라이더/행/목록) → 왜 그런가요? → 조언
  z.object({
    kind: z.literal("section"),
    title: z.string(),
    aside: str(),
    conclusion: str(),
    chips: list(),
    scene: str(),
    slider: SliderSchema.optional(),
    rows: rows(),
    /** true면 행 목록을 "왜 그런가요?" 위에 둔다 */
    rowsFirst: z.boolean().optional(),
    keywords: z.object({ label: z.string(), items: list() }).optional(),
    items: z
      .array(z.object({ icon: z.enum(["people", "book", "bag"]).catch("bag"), title: z.string(), text: z.string() }))
      .catch([]),
    paths: z
      .array(z.object({ title: z.string(), tag: z.string(), weight: z.number().min(0).max(100), text: z.string() }))
      .catch([]),
    evidence: str(),
    advice: str(),
    footer: str(),
  }),
  // 점수 그래프 + 연도별 풀이
  z.object({
    kind: z.literal("timeline"),
    title: z.string(),
    aside: str(),
    conclusion: str(),
    accent: z.enum(["gold", "water"]).catch("gold"),
    /** 점수는 코드가 계산한 값 */
    points: z.array(ScorePoint).catch([]),
    years: z
      .array(z.object({ year: z.number(), ganji: z.string(), tag: z.string(), text: z.string(), hot: z.boolean().optional() }))
      .catch([]),
    advice: str(),
  }),
  // 월별 흐름 · 로드맵처럼 (라벨 / 부제 / 설명) 행이 묶음으로 이어지는 카드
  z.object({
    kind: z.literal("timerows"),
    title: z.string(),
    aside: str(),
    conclusion: str(),
    groups: z
      .array(
        z.object({
          title: z.string().optional(),
          items: z.array(
            z.object({ label: z.string(), sub: z.string().optional(), text: z.string(), star: z.boolean().optional() }),
          ),
        }),
      )
      .catch([]),
    advice: str(),
  }),
  // 대운 10년 단위 막대
  z.object({
    kind: z.literal("lifetime"),
    title: z.string(),
    aside: str(),
    conclusion: str(),
    periods: z
      .array(
        z.object({
          startAge: z.number(),
          endAge: z.number(),
          hanja: z.string(),
          korean: z.string(),
          tenGods: z.string(),
          score: z.number().min(0).max(100),
          text: z.string(),
          now: z.boolean().optional(),
        }),
      )
      .catch([]),
    detail: str(),
    advice: str(),
  }),
  z.object({
    kind: z.literal("faq"),
    title: z.string(),
    aside: str(),
    qa: z.array(z.object({ q: z.string(), a: z.string() })).catch([]),
  }),
]);
export type Block = z.infer<typeof BlockSchema>;

export const ReadingSchema = z.object({
  /** 이직: MOVE/PREPARE/STAY, 재물: GATHER/GUARD/GROW (결론 카드 3단 중 선택) */
  verdict: z.enum(["MOVE", "PREPARE", "STAY", "GATHER", "GUARD", "GROW"]).catch("PREPARE"),
  verdictReason: text("지금은 흐름을 살피는 때예요."),
  keywords: list(),
  /** 원국 카드 아래 설명 */
  chartNote: str(),
  /** 원국에서 강조할 자리 (슬롯별 라벨) */
  chartMarks: z
    .object({ hour: z.string(), day: z.string(), month: z.string(), year: z.string() })
    .partial()
    .catch({}),
  /** 원국 카드 오른쪽 위 문구 */
  chartAside: str(),
  blocks: z.array(BlockSchema).catch([]),
  actions: list(),
  closingQuote: text("계절이 오면 싹을 틔웁니다."),
});
export type Reading = z.infer<typeof ReadingSchema>;

export type Status = "employed" | "seeking" | "resting" | "freelance";

/** 결과 화면이 받는 문서. 실제 결과와 샘플이 같은 모양이다. */
export type ResultDoc = {
  isSample: boolean;
  product: "career" | "money";
  status?: Status;
  profile: { name: string; summary: string };
  /** calculateSaju() 결과 (코드 계산) */
  chart: import("@/lib/saju/calculateSaju").SajuChart;
  reading: Reading;
};
