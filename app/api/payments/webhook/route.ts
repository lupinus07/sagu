import { NextResponse } from "next/server";
import { db, getOrder, getOrderByPaymentKey } from "@/lib/payments/orders";
import { getPayment } from "@/lib/payments/toss";

type WebhookBody = {
  eventType?: string;
  data?: { paymentKey?: string; orderId?: string; status?: string };
};

const TO_ORDER_STATUS: Record<string, "PAID" | "CANCELED" | "REFUNDED" | "FAILED"> = {
  DONE: "PAID",
  CANCELED: "REFUNDED",
  PARTIAL_CANCELED: "REFUNDED",
  ABORTED: "FAILED",
  EXPIRED: "FAILED",
};

// 토스 웹훅 (결제 상태 변경). 웹훅 본문은 믿지 않고, paymentKey 로 토스에 다시 조회한 값으로만 상태를 맞춘다.
// 개발자센터 > 웹훅에서 이 주소를 PAYMENT_STATUS_CHANGED 이벤트로 등록한다.
export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as WebhookBody | null;
  const paymentKey = body?.data?.paymentKey;
  if (!body || body.eventType !== "PAYMENT_STATUS_CHANGED" || !paymentKey) {
    return NextResponse.json({ ok: true }); // 처리 대상이 아니면 200 으로 끝낸다 (재전송 방지)
  }

  const lookup = await getPayment(paymentKey);
  if (!lookup.ok) {
    console.error("[webhook] payment lookup failed:", lookup.error.code, lookup.error.message);
    return NextResponse.json({ error: "lookup_failed" }, { status: 500 }); // 토스가 다시 보내 준다
  }
  const payment = lookup.data;

  const order = (await getOrderByPaymentKey(paymentKey)) ?? (await getOrder(payment.orderId));
  if (!order) return NextResponse.json({ ok: true });

  await db().from("payment_events").insert({
    order_id: order.id,
    payment_key: paymentKey,
    event_type: body.eventType,
    status: payment.status,
    payload: payment,
  });

  const next = TO_ORDER_STATUS[payment.status];
  // 승인 흐름(confirm)이 PAID 를 책임진다. 웹훅은 취소·환불·만료 같은 이후 변화만 반영한다.
  if (next && next !== "PAID" && order.status !== next && order.amount === payment.totalAmount) {
    await db().from("orders").update({ status: next }).eq("id", order.id);
  }
  return NextResponse.json({ ok: true });
}
