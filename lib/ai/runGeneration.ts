import "server-only";
import { db, getOrder } from "@/lib/payments/orders";
import { cancelPayment } from "@/lib/payments/toss";
import type { SajuChart } from "@/lib/saju/calculateSaju";
import { generateReading } from "./generateReading";

const MAX_ATTEMPTS = 2; // 최초 1회 + 자동 재시도 1회
/** 이 시간 안에 갱신된 GENERATING 행은 다른 곳에서 만드는 중이라고 본다 */
export const STALE_MS = 8 * 60_000;

type ReadingRow = { id: string; status: string; attempts: number; saju_chart: SajuChart; updated_at: string };

async function loadRow(orderId: string): Promise<ReadingRow | null> {
  const { data } = await db()
    .from("readings")
    .select("id, status, attempts, saju_chart, updated_at")
    .eq("order_id", orderId)
    .maybeSingle();
  return (data as ReadingRow | null) ?? null;
}

/**
 * 주문의 풀이를 생성해 DB 에 저장한다. 여러 곳에서 동시에 불려도 한 번만 생성한다
 * (attempts 를 낙관적 락으로 써서 먼저 올린 쪽만 진행). 실패하면 1회 재시도하고,
 * 그래도 실패하면 결제를 취소(환불)한다.
 */
export async function runGeneration(orderId: string): Promise<void> {
  let own = false; // 이 호출이 이미 시도를 시작했는가 (재시도 때는 신선도 검사를 건너뛴다)
  for (;;) {
    const row = await loadRow(orderId);
    if (!row || row.status !== "GENERATING") return;

    if (row.attempts >= MAX_ATTEMPTS) {
      await failAndRefund(orderId, "생성 시도 횟수를 넘었어요");
      return;
    }
    // 다른 호출이 만드는 중이면 건드리지 않는다
    if (!own && row.attempts > 0 && Date.now() - new Date(row.updated_at).getTime() < STALE_MS) return;

    const { data: claimed } = await db()
      .from("readings")
      .update({ attempts: row.attempts + 1, error: null })
      .eq("id", row.id)
      .eq("status", "GENERATING")
      .eq("attempts", row.attempts)
      .select("id");
    if (!claimed?.length) return; // 다른 호출이 먼저 가져갔다
    own = true;

    try {
      const order = await getOrder(orderId);
      if (!order) return;
      const i = order.birth_input;
      const cal = i.calendar === "lunar" ? (i.isLeapMonth ? "음력 윤달 " : "음력 ") : "";
      const content = await generateReading({
        chart: row.saju_chart,
        product: order.product,
        status: order.product === "career" ? i.status : undefined,
        name: i.name.trim() || "나",
        gender: i.gender,
        birth: `${cal}${i.year}년 ${i.month}월 ${i.day}일 ${i.hour === null ? "시간 모름" : `${i.hour}시 ${i.minute}분`}`,
        today: new Date(),
      });
      const { error } = await db()
        .from("readings")
        .update({ status: "DONE", content, error: null })
        .eq("id", row.id)
        .eq("status", "GENERATING");
      if (error) throw new Error(`save failed: ${error.message}`);
      return;
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      console.error(`[generation] order ${orderId} attempt ${row.attempts + 1} failed:`, message);
      await db().from("readings").update({ error: message.slice(0, 500) }).eq("id", row.id);
      // 루프를 돌아 재시도하거나, 횟수를 넘었으면 환불한다
    }
  }
}

async function failAndRefund(orderId: string, reason: string) {
  await db().from("readings").update({ status: "FAILED" }).eq("order_id", orderId).eq("status", "GENERATING");

  const order = await getOrder(orderId);
  if (!order || order.status !== "PAID" || !order.payment_key) return;
  // 취소 API 도 주문 단위 멱등 키로 보내 중복 환불을 막는다
  const res = await cancelPayment(order.payment_key, `풀이 생성 실패: ${reason}`, `refund-${orderId}`);
  if (!res.ok) {
    console.error(`[generation] refund failed for ${orderId}:`, res.error.code, res.error.message);
    return;
  }
  await db().from("orders").update({ status: "REFUNDED" }).eq("id", orderId).eq("status", "PAID");
  await db().from("payment_events").insert({
    order_id: orderId,
    payment_key: order.payment_key,
    event_type: "AUTO_REFUND",
    status: res.data.status,
    payload: res.data,
  });
}
