"use client";

import { ANONYMOUS, loadTossPayments, type TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { clearDraft, FROM_LOGIN_KEY, isExpired, parseDraft, readDraftRaw } from "@/lib/draft";
import { createClient } from "@/lib/supabase/client";
import { PaymentView } from "./PaymentView";

const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
const AMOUNT = 990; // 화면 표시용. 실제 결제 금액은 서버가 주문에 넣은 값이다.

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

/** 결제 확인 화면: 입력 화면에서 저장해 둔 draft를 꺼내 채우고, 토스 결제위젯으로 결제한다. */
export function Checkout() {
  const router = useRouter();
  // 서버에서는 undefined(아직 모름), 브라우저에서는 저장된 문자열 또는 null
  const raw = useSyncExternalStore(subscribe, readDraftRaw, () => undefined);
  const draft = useMemo(() => (raw ? parseDraft(raw) : null), [raw]);
  const valid = !!draft && !isExpired(draft);

  const widgets = useRef<TossPaymentsWidgets | null>(null);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (raw === undefined) return;
    if (!valid) {
      clearDraft();
      router.replace(`/input/${draft?.product ?? "career"}?notice=draft`);
    }
  }, [raw, valid, draft, router]);

  // 로그인을 거쳐 온 경우 브라우저 기록에는 카카오 · 약관 화면이 끼어 있다.
  // 뒤로가기를 한 번 가로채 무료 풀이로 보낸다.
  useEffect(() => {
    if (!valid) return;
    let fromLogin = false;
    try {
      fromLogin = sessionStorage.getItem(FROM_LOGIN_KEY) === "1";
      sessionStorage.removeItem(FROM_LOGIN_KEY);
    } catch {
      /* 무시 */
    }
    if (!fromLogin) return;
    window.history.pushState(window.history.state, "");
    const onPop = () => router.replace("/chart");
    window.addEventListener("popstate", onPop, { once: true });
    return () => window.removeEventListener("popstate", onPop);
  }, [valid, router]);

  // 결제위젯 준비: 회원은 user.id, 비회원은 ANONYMOUS 를 customerKey 로 쓴다
  useEffect(() => {
    if (!valid) return;
    let cancelled = false;
    (async () => {
      try {
        if (!CLIENT_KEY) throw new Error("NEXT_PUBLIC_TOSS_CLIENT_KEY is not set");
        const {
          data: { user },
        } = await createClient().auth.getUser();
        const toss = await loadTossPayments(CLIENT_KEY);
        if (cancelled) return;
        const w = toss.widgets({ customerKey: user?.id ?? ANONYMOUS });
        await w.setAmount({ currency: "KRW", value: AMOUNT });
        if (cancelled) return;
        await w.renderPaymentMethods({ selector: "#payment-method", variantKey: "DEFAULT" });
        if (cancelled) return;
        widgets.current = w;
        setReady(true);
      } catch (e) {
        console.error("[checkout] widget init failed:", e);
        if (!cancelled) setError("결제창을 불러오지 못했어요. 새로고침하거나 잠시 뒤 다시 시도해 주세요.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [valid]);

  if (!draft || !valid) return null;

  async function pay() {
    if (!draft || !widgets.current || busy) return;
    setBusy(true);
    setError(null);
    try {
      // 1) 서버에서 주문 생성 (금액은 서버가 정한다)
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: draft.product, input: draft.input }),
      });
      if (!res.ok) throw new Error(`order ${res.status}`);
      const order = (await res.json()) as { orderId: string; orderName: string };

      // 2) 결제창 (성공 시 successUrl 로 이동 → 서버 승인)
      const origin = window.location.origin;
      await widgets.current.requestPayment({
        orderId: order.orderId,
        orderName: order.orderName,
        successUrl: `${origin}/payment/success`,
        failUrl: `${origin}/payment/fail`,
        customerName: draft.input.name.trim() || undefined,
      });
    } catch (e) {
      // 사용자가 결제창을 닫은 경우도 여기로 온다 (USER_CANCEL)
      const code = (e as { code?: string } | null)?.code;
      if (code !== "USER_CANCEL") {
        console.error("[checkout] pay failed:", e);
        setError("결제를 시작하지 못했어요. 잠시 뒤 다시 시도해 주세요.");
      }
      setBusy(false);
    }
  }

  return <PaymentView product={draft.product} input={draft.input} onPay={pay} ready={ready} busy={busy} error={error} />;
}
