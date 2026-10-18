"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useSyncExternalStore } from "react";
import { createReading, updateReading } from "@/lib/demoStore";
import { clearDraft, isExpired, parseDraft, readDraftRaw } from "@/lib/draft";
import { PaymentView } from "./PaymentView";

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

/** 결제 확인 화면: 입력 화면에서 저장해 둔 draft를 꺼내 채운다. 없거나 1시간이 지났으면 입력 화면으로 보낸다. */
export function Checkout() {
  const router = useRouter();
  // 서버에서는 undefined(아직 모름), 브라우저에서는 저장된 문자열 또는 null
  const raw = useSyncExternalStore(subscribe, readDraftRaw, () => undefined);
  const draft = useMemo(() => (raw ? parseDraft(raw) : null), [raw]);

  useEffect(() => {
    if (raw === undefined) return;
    if (!draft || isExpired(draft)) {
      clearDraft();
      router.replace(`/input/${draft?.product ?? "career"}?notice=draft`);
    }
  }, [raw, draft, router]);

  if (!draft) return null;

  function pay() {
    if (!draft) return;
    if (isExpired(draft)) {
      clearDraft();
      router.replace(`/input/${draft.product}?notice=draft`);
      return;
    }
    // TODO(6단계): 서버에서 주문 생성 → 토스 결제 → 승인 검증 뒤에 draft 삭제
    const r = createReading(draft.product, draft.input);
    updateReading(r.id, { paid: true });
    // 다음 입력 때 이름 버튼으로 불러올 수 있게 저장 (실패해도 결제 흐름은 계속)
    fetch("/api/saju-inputs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft.input),
      keepalive: true,
    }).catch(() => {});
    clearDraft();
    router.replace(`/result/${r.id}`);
  }

  return <PaymentView product={draft.product} input={draft.input} onPay={pay} />;
}
