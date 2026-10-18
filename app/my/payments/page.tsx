import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

type Order = {
  at: string;
  product: string;
  amount: number;
  status: "paid" | "refunded";
  href: string;
};

// 결제 연동 전이라 화면용 예시 값이다 (6단계에서 orders 테이블로 교체)
const ORDERS: Order[] = [
  { at: "2026.10.12 21:40", product: "금전 · 재물운", amount: 990, status: "paid", href: "/sample/money" },
  { at: "2026.10.10 08:15", product: "이직 · 직업운", amount: 990, status: "paid", href: "/sample/career" },
  { at: "2026.10.09 23:02", product: "이직 · 직업운", amount: 990, status: "refunded", href: "" },
];

export default function PaymentsPage() {
  const paid = ORDERS.filter((o) => o.status === "paid");
  const total = paid.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] pb-12">
      <PageHeader title="결제 내역" back="/my" />
      <main className="px-4 pt-5">
        <div className="flex items-center justify-between px-1">
          <p className="text-body text-sub">총 {paid.length}건</p>
          <p className="text-lead font-bold text-heading">{total.toLocaleString()}원</p>
        </div>

        <ul className="mt-4 space-y-3.5">
          {ORDERS.map((o) => {
            const refunded = o.status === "refunded";
            return (
              <li key={o.at} className="card p-4">
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
                <p className="mt-1.5 text-small text-sub">정유리 · 1988.03.15</p>
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
                    <button className="h-11 rounded-btn border border-line text-body text-heading">영수증</button>
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
    </div>
  );
}
