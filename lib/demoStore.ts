// 흐름 확인용 임시 저장소 (localStorage). 5단계에서 Supabase orders/readings 로 교체한다.
import type { Status } from "@/lib/ai/schemas";

export type Product = "career" | "money";

export type InputValue = {
  status: Status;
  name: string;
  gender: "female" | "male";
  calendar: "solar" | "lunar";
  isLeapMonth: boolean;
  year: number;
  month: number;
  day: number;
  hour: number | null;
  minute: number;
  yaJasi: boolean;
};

export type DemoReading = {
  id: string;
  product: Product;
  input: InputValue;
  createdAt: number;
  /** 결제 완료 여부 (가짜 결제 화면에서 true) */
  paid: boolean;
  /** 로딩 연출을 이미 봤는지 */
  seen: boolean;
};

const KEY = "gyeol-demo-readings";

export function listReadings(): DemoReading[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]") as DemoReading[];
  } catch {
    return [];
  }
}

function write(all: DemoReading[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* 저장 불가 환경이면 흐름만 진행 */
  }
}

export function getReading(id: string): DemoReading | undefined {
  return listReadings().find((r) => r.id === id);
}

export function createReading(product: Product, input: InputValue): DemoReading {
  const r: DemoReading = {
    id: crypto.randomUUID(),
    product,
    input,
    createdAt: Date.now(),
    paid: false,
    seen: false,
  };
  write([r, ...listReadings()]);
  return r;
}

export function updateReading(id: string, patch: Partial<DemoReading>) {
  write(listReadings().map((r) => (r.id === id ? { ...r, ...patch } : r)));
}
