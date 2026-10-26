import { NextResponse } from "next/server";
import { z } from "zod";
import { InputValueSchema } from "@/lib/draft";
import { db, ORDER_NAME, PRICE } from "@/lib/payments/orders";
import { createClient } from "@/lib/supabase/server";

const BodySchema = z.object({ product: z.enum(["career", "money"]), input: InputValueSchema });

// 결제 버튼을 눌렀을 때 주문을 만든다. 금액은 서버가 정한다 (클라이언트 값은 받지 않는다).
export async function POST(request: Request) {
  const parsed = BodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  const { product, input } = parsed.data;

  // 로그인 상태면 회원 주문, 아니면 비회원 주문(user_id null)
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const orderId = crypto.randomUUID();
  const { error } = await db().from("orders").insert({
    id: orderId,
    user_id: user?.id ?? null,
    product,
    order_name: ORDER_NAME[product],
    amount: PRICE,
    status: "READY",
    birth_input: input,
  });
  if (error) {
    console.error("[orders] insert failed:", error.code, error.message);
    return NextResponse.json({ error: "order_failed" }, { status: 500 });
  }
  return NextResponse.json({
    orderId,
    amount: PRICE,
    orderName: ORDER_NAME[product],
    customerKey: user?.id ?? null,
  });
}
