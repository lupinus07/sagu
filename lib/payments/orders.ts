import "server-only";
import { calculateSaju } from "@/lib/saju/calculateSaju";
import { createAdminClient } from "@/lib/supabase/admin";
import type { InputValue, Product } from "@/lib/demoStore";

export const PRICE = 990;
export const ORDER_NAME: Record<Product, string> = {
  career: "결 · 이직 직업운 풀이",
  money: "결 · 금전 재물운 풀이",
};

export type OrderRow = {
  id: string;
  user_id: string | null;
  product: Product;
  order_name: string;
  amount: number;
  status: "READY" | "PAID" | "FAILED" | "CANCELED" | "REFUNDED";
  payment_key: string | null;
  birth_input: InputValue;
};

const COLUMNS = "id, user_id, product, order_name, amount, status, payment_key, birth_input";

export function db() {
  const client = createAdminClient();
  if (!client) throw new Error("Supabase service role is not configured");
  return client;
}

export async function getOrder(id: string): Promise<OrderRow | null> {
  const { data } = await db().from("orders").select(COLUMNS).eq("id", id).maybeSingle();
  return (data as OrderRow | null) ?? null;
}

export async function getOrderByPaymentKey(paymentKey: string): Promise<OrderRow | null> {
  const { data } = await db().from("orders").select(COLUMNS).eq("payment_key", paymentKey).maybeSingle();
  return (data as OrderRow | null) ?? null;
}

/** 풀이 행을 만든다. order_id unique 라 이미 있으면 그대로 둔다 (멱등). */
export async function ensureReading(order: OrderRow) {
  const i = order.birth_input;
  const chart = calculateSaju({
    year: i.year,
    month: i.month,
    day: i.day,
    hour: i.hour,
    minute: i.minute,
    gender: i.gender,
    calendar: i.calendar,
    isLeapMonth: i.isLeapMonth,
    yaJasi: i.yaJasi,
  });
  const cacheKey = [
    i.year, i.month, i.day, i.hour ?? "x", i.minute, i.gender, i.calendar, i.isLeapMonth ? "L" : "N",
    i.yaJasi ? "ya" : "tong", order.product === "career" ? i.status : "-", order.product,
  ].join("|");
  const { error } = await db()
    .from("readings")
    .upsert(
      { order_id: order.id, user_id: order.user_id, product: order.product, cache_key: cacheKey, saju_chart: chart },
      { onConflict: "order_id", ignoreDuplicates: true },
    );
  if (error) throw new Error(`readings upsert failed: ${error.message}`);
}
