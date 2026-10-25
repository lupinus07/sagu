import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { KakaoLoginButton } from "@/components/login/KakaoLoginButton";
import { PageHeader } from "@/components/ui/PageHeader";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

// 결제 내역: Supabase orders 에서 로그인한 본인 주문만 읽는다 (RLS orders_select_own).
// 결제 대기(READY) · 실패(FAILED) 주문은 결제가 일어나지 않았으므로 보여주지 않는다.

const PRODUCT_NAME: Record<string, string> = { career: "이직 · 직업운", money: "금전 · 재물운" };
const SHOWN_STATUS = ["PAID", "REFUNDED", "CANCELED"];

type OrderRow = {
  id: string;
  product: string;
  amount: number;
  status: "PAID" | "REFUNDED" | "CANCELED";
  birth_input: { name?: string; year?: number; month?: number; day?: number } | null;
  approved_at: string | null;
  created_at: string;
  readings: { id: string; status: string } | null;
};

/** 한국 시간 "2026.10.12 21:40" */
function fmt(iso: string) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(new Date(iso))
      .map((x) => [x.type, x.value]),
  );
  return `${p.year}.${p.month}.${p.day} ${p.hour}:${p.minute}`;
}

function who(b: OrderRow["birth_input"]) {
  if (!b?.year || !b.month || !b.day) return "";
  const date = `${b.year}.${String(b.month).padStart(2, "0")}.${String(b.day).padStart(2, "0")}`;
  return `${b.name?.trim() || "나"} · ${date}`;
}

function OrderCard({ o }: { o: OrderRow }) {
  const refunded = o.status !== "PAID";
  const reading = o.readings;
  return (
    <li className="card p-4">
      <div className="flex items-center justify-between">
        <span className="text-small text-dim">{fmt(o.approved_at ?? o.created_at)}</span>
        <span
          className={`rounded-lg px-2.5 py-1 text-caption font-bold ${
            refunded ? "bg-caution-bg text-caution" : "bg-success-bg text-wood"
          }`}
        >
          {o.status === "REFUNDED" ? "환불 완료" : o.status === "CANCELED" ? "결제 취소" : "결제 완료"}
        </span>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <h2 className="font-serif text-screen text-heading">{PRODUCT_NAME[o.product] ?? o.product}</h2>
        <span className={`text-conclusion font-bold ${refunded ? "text-dim line-through" : "text-heading"}`}>
          {o.amount.toLocaleString()}원
        </span>
      </div>
      <p className="mt-1.5 text-small text-sub">{who(o.birth_input)}</p>
      {refunded ? (
        <p className="mt-3 rounded-xl bg-sunken p-3 text-small leading-[1.6] text-sub">
          {o.status === "REFUNDED"
            ? "풀이를 만드는 중 문제가 생겨 환불됐어요. 결제 수단으로 3~5영업일 안에 돌아가요."
            : "결제가 취소됐어요."}
        </p>
      ) : reading ? (
        <Link
          href={`/result/${reading.id}`}
          className="mt-3 flex h-11 items-center justify-center rounded-btn bg-gold-bg2 text-body font-bold text-gold"
        >
          {reading.status === "GENERATING" ? "풀이 만드는 중 · 보러 가기" : "풀이 보기"}
        </Link>
      ) : (
        <p className="mt-3 rounded-xl bg-sunken p-3 text-small leading-[1.6] text-sub">
          풀이를 준비하고 있어요. 잠시 후 다시 확인해 주세요.
        </p>
      )}
    </li>
  );
}

async function PaymentsBody() {
  await connection();
  if (!SUPABASE_URL || !SUPABASE_KEY) return <LoginPrompt />;

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getClaims();
  if (!auth?.claims) return <LoginPrompt />;

  const { data, error } = await supabase
    .from("orders")
    .select("id, product, amount, status, birth_input, approved_at, created_at, readings(id, status)")
    .in("status", SHOWN_STATUS)
    .order("created_at", { ascending: false })
    .returns<OrderRow[]>();

  if (error) {
    return <p className="px-1 pt-10 text-center text-body text-sub">결제 내역을 불러오지 못했어요. 잠시 후 다시 시도해 주세요.</p>;
  }

  const orders = data ?? [];
  const paid = orders.filter((o) => o.status === "PAID");
  const total = paid.reduce((s, o) => s + o.amount, 0);

  return (
    <>
      <div className="flex items-center justify-between px-1">
        <p className="text-body text-sub">총 {paid.length}건</p>
        <p className="text-lead font-bold text-heading">{total.toLocaleString()}원</p>
      </div>

      {orders.length === 0 ? (
        <p className="card mt-4 p-6 text-center text-body text-sub">아직 결제한 풀이가 없어요.</p>
      ) : (
        <ul className="mt-4 space-y-3.5">
          {orders.map((o) => (
            <OrderCard key={o.id} o={o} />
          ))}
        </ul>
      )}
    </>
  );
}

function LoginPrompt() {
  return (
    <section className="card p-5 text-center">
      <p className="font-serif text-conclusion text-heading">로그인하고 결제 내역을 확인하세요</p>
      <p className="mb-5 mt-2 text-small leading-[1.7] text-sub">카카오 계정으로 결제한 내역을 볼 수 있어요</p>
      <KakaoLoginButton next="/my/payments" />
    </section>
  );
}

export default function PaymentsPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] pb-12">
      <PageHeader title="결제 내역" back="/my" />
      <main className="px-4 pt-5">
        <Suspense>
          <PaymentsBody />
        </Suspense>

        <ul className="mt-6 space-y-2 px-1 text-caption leading-[1.6] tracking-tight text-sub">
          <li>· 풀이가 만들어진 뒤에는 디지털 콘텐츠 특성상 환불이 어려워요.</li>
          <li>· 풀이 생성에 실패하면 자동으로 전액 환불돼요.</li>
        </ul>
        <button className="mt-4 min-h-11 px-1 text-body text-gold">결제 문의하기 →</button>
      </main>
    </div>
  );
}
