"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { clearDraft } from "@/lib/draft";

/** 토스 결제 성공 리다이렉트: 서버에 승인을 요청하고, 끝나면 결과(로딩) 화면으로 보낸다. */
export function PaymentSuccess() {
  const params = useSearchParams();
  const router = useRouter();
  const [failure, setError] = useState<string | null>(null);
  const started = useRef(false);

  const paymentKey = params.get("paymentKey");
  const orderId = params.get("orderId");
  const amount = Number(params.get("amount"));
  const invalid = !paymentKey || !orderId || !Number.isInteger(amount);
  const error = invalid ? "결제 정보를 확인하지 못했어요." : failure;

  useEffect(() => {
    if (invalid || started.current) return; // StrictMode 중복 실행 방지 (서버도 멱등이지만 요청을 아낀다)
    started.current = true;

    (async () => {
      try {
        const res = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentKey, orderId, amount }),
        });
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as { message?: string };
          throw new Error(body.message ?? `confirm ${res.status}`);
        }

        clearDraft();
        router.replace(`/result/${orderId}`);
      } catch (e) {
        console.error("[payment/success] confirm failed:", e);
        setError(e instanceof Error && e.message ? e.message : "결제를 확인하지 못했어요.");
      }
    })();
  }, [invalid, paymentKey, orderId, amount, router]);

  if (error) {
    return (
      <main className="mx-auto max-w-[430px] px-6 pt-24 text-center">
        <h1 className="font-serif text-h2 text-heading">결제를 확인하지 못했어요</h1>
        <p role="alert" className="mt-3 text-body leading-[1.7] text-sub">
          {error}
        </p>
        <p className="mt-2 text-small leading-[1.7] text-dim">
          결제가 됐는데 이 화면이 보인다면 새로고침해 주세요. 중복으로 결제되지 않아요.
        </p>
        <Link href="/checkout?guest=1" className="btn-primary mt-8 inline-flex h-14 w-full items-center justify-center text-lead">
          다시 시도하기
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[430px] px-6 pt-32 text-center" aria-busy="true">
      <p className="font-serif text-h2 text-heading">결제를 확인하고 있어요</p>
      <p className="mt-3 text-body text-sub">잠시만 기다려 주세요. 창을 닫지 마세요.</p>
    </main>
  );
}
