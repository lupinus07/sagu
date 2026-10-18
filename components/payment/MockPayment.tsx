"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getReading, updateReading, type DemoReading } from "@/lib/demoStore";
import { PaymentView } from "./PaymentView";

/** 이미 만들어진 주문(id)을 결제하는 화면. 로딩 화면에서 미결제 주문을 되돌릴 때 쓴다. 6단계에서 실제 결제로 교체. */
export function MockPayment() {
  const id = useSearchParams().get("id") ?? "";
  const router = useRouter();
  const [reading, setReading] = useState<DemoReading | null | undefined>(undefined);

  useEffect(() => {
    setReading(getReading(id) ?? null);
  }, [id]);

  if (reading === undefined) return null;
  if (reading === null) {
    return (
      <main className="mx-auto max-w-[430px] px-4 pt-20 text-center">
        <p className="text-sub">주문 정보를 찾을 수 없어요.</p>
        <Link href="/" className="mt-4 inline-block min-h-11 text-gold underline underline-offset-4">
          홈으로
        </Link>
      </main>
    );
  }

  return (
    <PaymentView
      product={reading.product}
      input={reading.input}
      onPay={() => {
        updateReading(id, { paid: true });
        router.replace(`/result/${id}`);
      }}
    />
  );
}
