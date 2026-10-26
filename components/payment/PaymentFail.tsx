"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

/** 토스 결제 실패 · 취소 리다이렉트: 주문을 FAILED 로 표시하고 다시 시도할 수 있게 한다. (draft 는 남겨 둔다) */
export function PaymentFail() {
  const params = useSearchParams();
  const code = params.get("code");
  const message = params.get("message");
  const orderId = params.get("orderId");
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current || !orderId) return;
    sent.current = true;
    fetch(`/api/orders/${encodeURIComponent(orderId)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, message }),
    }).catch(() => {});
  }, [orderId, code, message]);

  const canceled = code === "PAY_PROCESS_CANCELED" || code === "USER_CANCEL";
  return (
    <main className="mx-auto max-w-[430px] px-6 pt-24 text-center">
      <h1 className="font-serif text-h2 text-heading">
        {canceled ? "결제를 취소했어요" : "결제하지 못했어요"}
      </h1>
      <p className="mt-3 text-body leading-[1.7] text-sub">
        {canceled ? "결제는 진행되지 않았고, 청구된 금액도 없어요." : (message ?? "결제 중 문제가 생겼어요.")}
      </p>
      <Link href="/checkout?guest=1" className="btn-primary mt-8 inline-flex h-14 w-full items-center justify-center text-lead">
        다시 결제하기
      </Link>
      <Link href="/" className="mt-3 inline-flex min-h-11 items-center justify-center text-body text-gold">
        홈으로
      </Link>
    </main>
  );
}
