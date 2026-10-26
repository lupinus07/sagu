import { after, NextResponse } from "next/server";
import { z } from "zod";
import { runGeneration } from "@/lib/ai/runGeneration";
import { db, ensureReading, getOrder } from "@/lib/payments/orders";
import { confirmPayment } from "@/lib/payments/toss";
import { createClient } from "@/lib/supabase/server";

// 풀이 생성(Claude 호출)은 응답을 보낸 뒤 after() 로 이어서 돌린다. 생성에 걸리는 시간만큼 함수 실행 시간을 허용한다.
export const maxDuration = 300;

const BodySchema = z.object({
  paymentKey: z.string().min(1).max(200),
  orderId: z.uuid(),
  amount: z.number().int().positive(),
});

// 결제 성공 리다이렉트 뒤 호출. 금액 검증 → 토스 승인 → PAID 저장 → 풀이 행 생성.
// 새로고침 · 중복 호출에도 안전하다 (이미 PAID 면 그대로 성공을 돌려주고, 토스에는 orderId 멱등 키를 쓴다).
export async function POST(request: Request) {
  const parsed = BodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  const { paymentKey, orderId, amount } = parsed.data;

  const order = await getOrder(orderId);
  if (!order) return NextResponse.json({ error: "order_not_found" }, { status: 404 });

  // 회원 주문은 본인만 승인 요청할 수 있다. 비회원 주문(user_id null)은 주문번호(UUID)가 곧 열쇠다.
  if (order.user_id) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.id !== order.user_id) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  if (order.status === "PAID") {
    if (order.payment_key !== paymentKey) return NextResponse.json({ error: "payment_key_mismatch" }, { status: 409 });
    await ensureReading(order);
    after(() => runGeneration(orderId)); // 처음 시작이 끊겼어도 이어서 (이미 만들었거나 진행 중이면 바로 끝난다)
    return NextResponse.json({ ok: true, orderId });
  }
  if (order.status !== "READY") return NextResponse.json({ error: "order_not_payable" }, { status: 409 });

  // 금액 위조 방지: 쿼리의 amount 가 DB 주문 금액과 같을 때만 승인한다
  if (amount !== order.amount) {
    await db()
      .from("orders")
      .update({ status: "FAILED", failure_code: "AMOUNT_MISMATCH", failure_message: `요청 ${amount} / 주문 ${order.amount}` })
      .eq("id", orderId)
      .eq("status", "READY");
    return NextResponse.json({ error: "amount_mismatch" }, { status: 400 });
  }

  const result = await confirmPayment({ paymentKey, orderId, amount });
  if (!result.ok) {
    console.error("[payments/confirm] toss rejected:", result.error.code, result.error.message);
    await db()
      .from("orders")
      .update({ status: "FAILED", failure_code: result.error.code, failure_message: result.error.message })
      .eq("id", orderId)
      .eq("status", "READY");
    return NextResponse.json({ error: "confirm_failed", message: result.error.message }, { status: 402 });
  }
  const payment = result.data;

  // 토스가 돌려준 금액도 한 번 더 확인한다
  if (payment.totalAmount !== order.amount) {
    console.error("[payments/confirm] approved amount differs:", orderId, payment.totalAmount, order.amount);
    return NextResponse.json({ error: "amount_mismatch" }, { status: 500 });
  }

  const { error } = await db()
    .from("orders")
    .update({
      status: "PAID",
      payment_key: payment.paymentKey,
      method: payment.method ?? null,
      approved_at: payment.approvedAt ?? new Date().toISOString(),
    })
    .eq("id", orderId)
    .eq("status", "READY");
  if (error) {
    // 토스에서는 승인됐지만 저장에 실패한 경우. 같은 요청을 다시 보내면 멱등 키 덕분에 안전하게 이어서 처리된다.
    console.error("[payments/confirm] order update failed:", error.code, error.message);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  await db().from("payment_events").insert({
    order_id: orderId,
    payment_key: payment.paymentKey,
    event_type: "CONFIRM",
    status: payment.status,
    payload: payment,
  });

  await ensureReading({ ...order, status: "PAID", payment_key: payment.paymentKey });
  // 승인 응답은 바로 돌려주고, 풀이는 뒤에서 생성한다 (결과 화면이 상태를 폴링)
  after(() => runGeneration(orderId));
  return NextResponse.json({ ok: true, orderId });
}
