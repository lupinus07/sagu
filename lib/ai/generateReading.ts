import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { ReadingSchema, type Block, type Reading } from "./schemas";
import { blockKinds, buildFacts, splitParts, systemPrompt, userPrompt, type Facts, type FactsInput, type Part } from "./prompt";

// 모델은 환경변수로 관리한다 (공식 문서에서 최신 확인 후 교체)
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5";
// 한 파트는 약 8K 토큰의 JSON 이다. 여유를 두고, 긴 응답이라 스트리밍으로 받는다.
const MAX_TOKENS = 16000;
// 해석 문장 생성에는 깊은 추론이 필요 없어 속도와 비용을 위해 낮춘다 (카드 누락이 잦으면 medium 으로)
const EFFORT = (process.env.AI_EFFORT as "low" | "medium" | "high" | undefined) ?? "low";

let client: Anthropic | null = null;
function anthropic() {
  // API 키는 서버 환경변수에만 둔다 (ANTHROPIC_API_KEY). 429 · 5xx 는 SDK 가 백오프로 재시도한다.
  client ??= new Anthropic({ maxRetries: 4, timeout: 8 * 60_000 });
  return client;
}

// ---- 동시성 제한: Claude 동시 호출 수를 넘으면 순서대로 기다린다 ----
const LIMIT = Math.max(1, Number(process.env.AI_CONCURRENCY) || 4);
let active = 0;
const waiting: (() => void)[] = [];
async function withSlot<T>(fn: () => Promise<T>): Promise<T> {
  if (active >= LIMIT) await new Promise<void>((resolve) => waiting.push(resolve));
  active++;
  try {
    return await fn();
  } finally {
    active--;
    waiting.shift()?.();
  }
}

export class GenerationError extends Error {}

/** 응답 텍스트에서 JSON 객체를 꺼낸다 (혹시 코드펜스가 붙어도 처리) */
function extractJson(text: string): unknown {
  const s = text.indexOf("{");
  const e = text.lastIndexOf("}");
  if (s < 0 || e <= s) throw new GenerationError("응답에 JSON 이 없어요");
  try {
    return JSON.parse(text.slice(s, e + 1));
  } catch {
    throw new GenerationError("응답 JSON 을 읽지 못했어요");
  }
}

const VERDICTS = {
  career: ["MOVE", "PREPARE", "STAY"],
  money: ["GATHER", "GUARD", "GROW"],
} as const;

type Raw = Record<string, unknown>;
const isObj = (v: unknown): v is Raw => !!v && typeof v === "object" && !Array.isArray(v);
const nonEmpty = (v: unknown) => typeof v === "string" && v.trim().length > 0;

/** 최상위 필드 검사 (앞 파트). zod 는 빈 값을 기본 문구로 메우지만, 생성 결과는 얼버무리지 않고 다시 쓰게 한다. */
function checkTop(raw: Raw, facts: Facts) {
  if (!(VERDICTS[facts.product] as readonly string[]).includes(String(raw.verdict))) throw new GenerationError("verdict 가 올바르지 않아요");
  for (const k of ["verdictReason", "closingQuote", "chartNote"]) if (!nonEmpty(raw[k])) throw new GenerationError(`${k} 가 비었어요`);
  if (!Array.isArray(raw.keywords) || raw.keywords.length < 2) throw new GenerationError("keywords 가 부족해요");
  if (!Array.isArray(raw.actions) || raw.actions.length < 3) throw new GenerationError("actions 가 부족해요");
}

/** 한 파트의 blocks 가 예시의 해당 구간과 같은 구성인지, 핵심 필드가 차 있는지 검사 */
function checkBlocks(raw: Raw, part: Part, facts: Facts) {
  if (!Array.isArray(raw.blocks)) throw new GenerationError("blocks 가 없어요");
  const want = blockKinds(facts.product).slice(part.from, part.to);
  const got = raw.blocks.map((b) => (isObj(b) ? String(b.kind) : ""));
  if (got.length !== want.length || got.some((k, i) => k !== want[i]))
    throw new GenerationError(`blocks 구성이 예시와 달라요 (${got.length}/${want.length}개: ${got.join(",")})`);

  for (const b of raw.blocks) {
    if (!isObj(b) || !nonEmpty(b.title)) throw new GenerationError("블록 제목이 비었어요");
    if (b.kind === "section" && !nonEmpty(b.conclusion)) throw new GenerationError(`'${String(b.title)}' 결론이 비었어요`);
    if (b.kind === "timeline" && (!Array.isArray(b.years) || b.years.length !== facts.years.length))
      throw new GenerationError(`'${String(b.title)}' 연도 수가 맞지 않아요`);
    if (b.kind === "lifetime" && (!Array.isArray(b.periods) || b.periods.length !== facts.luck.length))
      throw new GenerationError(`'${String(b.title)}' 대운 수가 맞지 않아요`);
  }
}

/** 코드가 계산한 값(그래프 점수, 연도 간지, 대운)으로 AI 응답의 해당 필드를 덮어쓴다 */
function applyFacts(reading: Reading, facts: Facts): Reading {
  const peak = facts.points.find((p) => p.peak);
  const peakYear = peak ? (facts.product === "career" ? 2000 + Number(peak.label.slice(0, 2)) : Number(peak.label)) : null;

  const blocks = reading.blocks.map<Block>((b) => {
    if (b.kind === "timeline") {
      return {
        ...b,
        points: facts.points,
        years: facts.years.map((y, i) => ({
          year: y.year,
          ganji: y.label,
          tag: b.years[i]?.tag ?? "",
          text: b.years[i]?.text ?? "",
          ...(y.year === peakYear ? { hot: true } : {}),
        })),
      };
    }
    if (b.kind === "lifetime") {
      return {
        ...b,
        periods: facts.luck.map((l, i) => ({
          startAge: l.startAge,
          endAge: l.endAge,
          hanja: l.hanja,
          korean: l.korean,
          tenGods: l.tenGods,
          score: Math.round((l.stemScore + l.branchScore) / 2),
          text: b.periods[i]?.text ?? "",
          ...(l.now ? { now: true } : {}),
        })),
      };
    }
    return b;
  });
  return { ...reading, blocks };
}

const PART_TRIES = 2;

/** 한 파트를 호출해 검증한다. 구성이 어긋나면 그 파트만 다시 쓴다. */
async function callPart(input: FactsInput, facts: Facts, part: Part): Promise<Raw> {
  let last: unknown;
  for (let t = 0; t < PART_TRIES; t++) {
    try {
      const message = await withSlot(async () => {
        const stream = anthropic().messages.stream({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          // 시스템 프롬프트(규칙 + 모양 예시)는 고정이라 캐싱한다. 사람마다 달라지는 사실은 user 메시지에 둔다.
          system: [{ type: "text", text: systemPrompt(input.product), cache_control: { type: "ephemeral" } }],
          messages: [{ role: "user", content: userPrompt(facts, part) }],
          output_config: { effort: EFFORT },
        });
        return stream.finalMessage();
      });
      if (message.stop_reason === "refusal") throw new GenerationError("모델이 응답을 거절했어요");
      if (message.stop_reason === "max_tokens") throw new GenerationError("응답이 길이 제한에서 잘렸어요");

      const raw = extractJson(message.content.map((b) => (b.type === "text" ? b.text : "")).join(""));
      if (!isObj(raw)) throw new GenerationError("최상위가 객체가 아니에요");
      if (part.top) checkTop(raw, facts);
      checkBlocks(raw, part, facts);
      return raw;
    } catch (e) {
      last = e;
      console.error(`[ai] part ${part.from}-${part.to} try ${t + 1} failed:`, e instanceof Error ? e.message : e);
      if (e instanceof Anthropic.APIError && e.status && e.status < 500 && e.status !== 429) break; // 재시도해도 소용없는 요청 오류
    }
  }
  throw last;
}

/**
 * 사주 계산 결과(사실)를 바탕으로 풀이 한 편을 생성한다. 카드를 두 파트로 나눠 병렬로 쓰고 합친다
 * (한 번에 쓰면 카드를 빼먹는 일이 잦다). 실패하면 GenerationError 또는 SDK 오류를 던진다.
 */
export async function generateReading(input: FactsInput): Promise<Reading> {
  const facts = buildFacts(input);
  const [first, second] = splitParts(input.product);
  const [a, b] = await Promise.all([callPart(input, facts, first), callPart(input, facts, second)]);

  const merged = { ...a, blocks: [...(a.blocks as unknown[]), ...(b.blocks as unknown[])] };
  const parsed = ReadingSchema.safeParse(merged);
  if (!parsed.success) throw new GenerationError("스키마 검증에 실패했어요");
  return applyFacts(parsed.data, facts);
}
