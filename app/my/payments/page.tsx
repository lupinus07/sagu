import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { KakaoLoginButton } from "@/components/login/KakaoLoginButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

type Order = {
  at: string;
  product: string;
  amount: number;
  status: "paid" | "refunded";
  href: string;
  who: string;
};

const NAME: Record<string, string> = { career: "이직 · 직업운", money: "금전 · 재물운" };
const pad = (n: number) => String(n).padStart(2, "0");
// 서버(Vercel)는 UTC 라서 시간대를 한국으로 고정해야 결제 시각이 맞게 보인다
const KST = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});
const fmt = (iso: string) => {
  const p = Object.fromEntries(KST.formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return `${p.year}.${p.month}.${p.day} ${p.hour}:${p.minute}`;
};

function LoginPrompt() {
  return (
    <main className="px-4 pt-5">
      <section className="card p-5 text-center">
        <p className="font-serif text-conclusion text-heading">로그인하고 결제 내역을 확인하세요</p>
        <p className="mb-5 mt-2 text-small leading-[1.7] text-sub">카카오 계정으로 결제한 내역을 볼 수 있어요</p>
        <KakaoLoginButton next="/my/payments" />
      </section>
    </main>
  );
}

async function PaymentsBody() {
  await connection();
  // RLS(orders_select_own)가 본인 주문만 돌려준다. 실제로 승인된 주문(결제 완료 · 환불)만 보여 준다.
  if (!SUPABASE_URL || !SUPABASE_KEY) return <LoginPrompt />;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getClaims();
  if (!auth?.claims) return <LoginPrompt />;
  const { data } = await supabase
    .from("orders")
    .select("id, product, amount, status, birth_input, approved_at, created_at")
    .in("status", ["PAID", "REFUNDED"])
    .order("created_at", { ascending: false });
  const ORDERS: Order[] = (data ?? []).map((o) => {
    const i = o.birth_input as { name?: string; year: number; month: number; day: number };
    return {
      at: fmt(o.approved_at ?? o.created_at),
      product: NAME[o.product] ?? o.product,
      amount: o.amount,
      status: o.status === "REFUNDED" ? "refunded" : "paid",
      href: `/result/${o.id}`,
      who: `${i.name?.trim() || "나"} · ${i.year}.${pad(i.month)}.${pad(i.day)}`,
    };
  });
  const paid = ORDERS.filter((o) => o.status === "paid");
  const total = paid.reduce((s, o) => s + o.amount, 0);

  return (
    <>
      <main className="px-4 pt-5">
        <div className="flex items-center justify-between px-1">
          <p className="text-body text-sub">총 {paid.length}건</p>
          <p className="text-lead font-bold text-heading">{total.toLocaleString()}원</p>
        </div>

        <ul className="mt-4 space-y-3.5">
          {ORDERS.map((o) => {
            const refunded = o.status === "refunded";
            return (
              <li key={o.href} className="card p-4">
                <div className="flex items-center justify-between">
                  <span className="text-small text-dim">{o.at}</span>
                  <span
                    className={`rounded-lg px-2.5 py-1 text-caption font-bold ${
                      refunded ? "bg-caution-bg text-caution" : "bg-success-bg text-wood"
                    }`}
                  >
                    {refunded ? "환불 완료" : "결제 완료"}
                  </span>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <h2 className="font-serif text-screen text-heading">{o.product}</h2>
                  <span className={`text-conclusion font-bold ${refunded ? "text-dim line-through" : "text-heading"}`}>
                    {o.amount.toLocaleString()}원
                  </span>
                </div>
                <p className="mt-1.5 text-small text-sub">{o.who}</p>
                {refunded ? (
                  <p className="mt-3 rounded-xl bg-sunken p-3 text-small leading-[1.6] text-sub">
                    풀이를 만드는 중 문제가 생겨 자동으로 환불됐어요. 결제 수단으로 3~5영업일 안에 돌아가요.
                  </p>
                ) : (
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <Link
                      href={o.href}
                      className="flex h-11 items-center justify-center rounded-btn bg-gold-bg2 text-body font-bold text-gold"
                    >
                      풀이 보기
                    </Link>
                    <Link
                      href="/my/payments"
                      aria-disabled
                      className="pointer-events-none flex h-11 items-center justify-center rounded-btn border border-line text-body text-dim"
                    >
                      영수증 (카드사 앱에서 확인)
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <ul className="mt-6 space-y-2 px-1 text-caption leading-[1.6] tracking-tight text-sub">
          <li>· 풀이가 만들어진 뒤에는 디지털 콘텐츠 특성상 환불이 어려워요.</li>
          <li>· 풀이 생성에 실패하면 자동으로 전액 환불돼요.</li>
        </ul>
        <button className="mt-4 min-h-11 px-1 text-body text-gold">결제 문의하기 →</button>
      </main>
    </>
  );
}

export default function PaymentsPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] pb-12">
      <PageHeader title="결제 내역" back="/my" />
      <Suspense>
        <PaymentsBody />
      </Suspense>
    </div>
  );
}
