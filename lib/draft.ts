// 결제 전 입력값 임시 보관 (localStorage). 비로그인 상태에서 로그인 · 약관 동의를 거쳐 돌아와도 이어가기 위함.
// 민감 정보(생년월일시)라 1시간 뒤 만료되고, 결제가 끝나면 지운다.
import { z } from "zod";
import type { InputValue, Product } from "@/lib/demoStore";

export const DRAFT_KEY = "gyeol:draft";
export const DRAFT_TTL_MS = 60 * 60 * 1000;

/** 입력 화면의 값. 임시 보관(draft)과 이전 입력 저장(API)이 같은 검증을 쓴다. */
export const InputValueSchema = z.object({
  status: z.enum(["employed", "seeking", "resting", "freelance"]),
  name: z.string().max(30),
  gender: z.enum(["female", "male"]),
  calendar: z.enum(["solar", "lunar"]),
  isLeapMonth: z.boolean(),
  year: z.number().int().min(1900).max(2100),
  month: z.number().int().min(1).max(12),
  day: z.number().int().min(1).max(31),
  hour: z.number().int().min(0).max(23).nullable(),
  minute: z.number().int().min(0).max(59),
  yaJasi: z.boolean(),
});

/** 사주 원국 계산에 필요한 값만 (상황·이름은 제외) */
export const ChartInputSchema = InputValueSchema.omit({ status: true, name: true });

const DraftSchema = z.object({
  product: z.enum(["career", "money"]),
  input: InputValueSchema,
  savedAt: z.number(),
});

export type Draft = { product: Product; input: InputValue; savedAt: number };

export function saveDraft(product: Product, input: InputValue) {
  try {
    const draft: Draft = { product, input, savedAt: Date.now() };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* 저장 불가 환경이면 로그인 후 다시 입력하게 된다 */
  }
}

export function readDraftRaw(): string | null {
  try {
    return localStorage.getItem(DRAFT_KEY);
  } catch {
    return null;
  }
}

/** 저장된 문자열을 draft로. 형식이 맞지 않으면 null (만료 여부는 isExpired로 따로 본다) */
export function parseDraft(raw: string | null): Draft | null {
  if (!raw) return null;
  try {
    const r = DraftSchema.safeParse(JSON.parse(raw));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}

export function isExpired(d: Draft, now = Date.now()) {
  return now - d.savedAt > DRAFT_TTL_MS;
}

export function clearDraft() {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* 무시 */
  }
}
