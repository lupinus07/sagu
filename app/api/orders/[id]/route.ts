import { after, NextResponse } from "next/server";
import { z } from "zod";
import { runGeneration, STALE_MS } from "@/lib/ai/runGeneration";
import { db, getOrder } from "@/lib/payments/orders";
import { createClient } from "@/lib/supabase/server";

export const maxDuration = 300;

// 결과 화면이 결제한 주문의 입력값을 읽어 간다. 결제가 끝난(PAID) 주문만 내용을 돌려준다.
export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!z.uuid().safeParse(id).success) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const order = await getOrder(id);
  if (!order) return NextResponse.json({ error: "not_found" }, { status: 404 });

  // 회원 주문은 본인만. 비회원 주문(user_id null)은 주문번호를 아는 사람(= 결제한 기기)만 열 수 있다.
  if (order.user_id) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user?.id !== order.user_id) return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  if (order.status !== "PAID") return NextResponse.json({ status: order.status });

  const { data: reading } = await db()
    .from("readings")
    .select("status, content, saju_chart, attempts, updated_at")
    .eq("order_id", id)
    .maybeSingle();

  // 생성 중인데 오래 멈춰 있으면(서버가 끊긴 경우) 이어서 생성한다
  if (reading?.status === "GENERATING" && Date.now() - new Date(reading.updated_at).getTime() > STALE_MS) {
    after(() => runGeneration(id));
  }

  return NextResponse.json({
    status: order.status,
    product: order.product,
    input: order.birth_input,
    reading: reading
      ? {
          status: reading.status as "GENERATING" | "DONE" | "FAILED",
          chart: reading.saju_chart,
          content: reading.status === "DONE" ? reading.content : null,
        }
      : null,
  });
}

// 결제창에서 실패 · 취소하고 돌아온 주문을 FAILED 로 표시한다 (READY 일 때만)
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!z.uuid().safeParse(id).success) return NextResponse.json({ ok: true });
  const body = (await request.json().catch(() => ({}))) as { code?: unknown; message?: unknown };
  await db()
    .from("orders")
    .update({
      status: "FAILED",
      failure_code: typeof body.code === "string" ? body.code.slice(0, 100) : null,
      failure_message: typeof body.message === "string" ? body.message.slice(0, 300) : null,
    })
    .eq("id", id)
    .eq("status", "READY");
  return NextResponse.json({ ok: true });
}
