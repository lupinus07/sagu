import { connection } from "next/server";
import { Suspense } from "react";
import { requireAdmin } from "@/lib/admin";

// 관리자 대시보드 화면 (예시 데이터). 실제 집계는 5~6단계에서 연결한다.
// 레이아웃의 관리자 확인과 별개로, 화면 내용 자체도 관리자 확인 뒤에만 만들어진다.
const DAILY = [11, 14, 8, 16, 13, 22, 17, 25, 24, 18, 21, 23, 26, 20];
const SHARES = [
  { name: "이직운", pct: 48, color: "#c99d3f" },
  { name: "금전 · 재물운", pct: 34, color: "#c99d3f" },
  { name: "취업운", pct: 18, color: "#b8ad9c" },
];

type Row = { no: string; at: string; who: string; product: string; pay: string; gen: string; tone: string };
const ORDERS: Row[] = [
  { no: "GY-8F3A21", at: "10.13 21:42", who: "김*연", product: "이직운", pay: "결제 완료", gen: "생성 중", tone: "wait" },
  { no: "GY-8F3A1C", at: "10.13 21:30", who: "박*준", product: "취업운", pay: "결제 완료", gen: "실패 · 재시도 2회", tone: "fail" },
  { no: "GY-8F3A0E", at: "10.13 20:58", who: "이*은", product: "금전 · 재물운", pay: "결제 완료", gen: "완료", tone: "ok" },
  { no: "GY-8F39F7", at: "10.13 20:11", who: "최*희", product: "이직운", pay: "환불 완료", gen: "실패 → 자동 환불", tone: "refund" },
  { no: "GY-8F39D2", at: "10.13 19:47", who: "정*수", product: "이직운", pay: "결제 완료", gen: "완료", tone: "ok" },
];

const PILL: Record<string, string> = {
  ok: "bg-[#e3f1e6] text-[#2f7a45]",
  wait: "bg-[#fbefd3] text-[#a8761a]",
  fail: "bg-[#fbe3df] text-[#b8392a]",
  refund: "bg-[#ebe8e1] text-[#5d574b]",
};

function Stat({ label, value, sub, subCls = "text-[#7a7365]" }: { label: string; value: string; sub: string; subCls?: string }) {
  return (
    <div className="rounded-2xl border border-[#ece6d9] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <p className="text-[14px] text-[#7a7365]">{label}</p>
      <p className="mt-3 text-[34px] font-bold leading-none text-[#26221b]">{value}</p>
      <p className={`mt-3 text-[13.5px] ${subCls}`}>{sub}</p>
    </div>
  );
}

async function Dashboard() {
  await connection();
  await requireAdmin();
  const max = 30;
  return (
    <>
        <header className="flex items-center justify-between border-b border-[#ece6d9] px-9 py-6">
          <div>
            <h1 className="text-[26px] font-bold">대시보드</h1>
            <p className="mt-1 text-[14px] text-[#7a7365]">2026년 10월 13일 화요일 · 예시 데이터</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex rounded-xl bg-[#f0ece3] p-1 text-[14px]">
              {["오늘", "14일", "이번 달"].map((t) => (
                <span key={t} className={`rounded-lg px-4 py-2 ${t === "14일" ? "bg-white font-bold shadow-sm" : "text-[#7a7365]"}`}>
                  {t}
                </span>
              ))}
            </div>
            <span className="flex size-12 items-center justify-center rounded-full bg-[#2a2416] font-serif text-[18px] text-gold">
              정
            </span>
          </div>
        </header>

        <main className="space-y-6 p-9">
          <div className="grid grid-cols-4 gap-5">
            <Stat label="오늘 매출" value="19,800원" sub="20건 · 어제보다 +4건" subCls="text-[#2f7a45]" />
            <Stat label="14일 매출" value="247,500원" sub="250건 · 하루 평균 17.9건" />
            <Stat label="건당 평균 순이익" value="641원" sub="매출 900 − 결제 37 − 토큰 222" />
            <Stat label="생성 실패 · 환불" value="3건" sub="확인이 필요해요 →" subCls="text-[#b8392a]" />
          </div>

          <div className="grid grid-cols-[1fr_340px] gap-5">
            <section className="rounded-2xl border border-[#ece6d9] bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-bold">일별 결제 건수</h2>
                <span className="text-[13.5px] text-[#7a7365]">최근 14일</span>
              </div>
              <div className="relative mt-6 h-[260px] pl-10">
                {[0, 10, 20].map((g) => (
                  <div key={g} className="absolute inset-x-0 flex items-center" style={{ bottom: `${40 + (g / max) * 190}px` }}>
                    <span className="w-10 text-[12.5px] text-[#9a9384]">{g}건</span>
                    <span className="h-px flex-1 bg-[#ece6d9]" />
                  </div>
                ))}
                <div className="absolute inset-x-0 bottom-0 left-10 flex h-full items-end gap-3 pb-10">
                  {DAILY.map((v, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center justify-end" style={{ height: "100%" }}>
                      <div
                        className={`w-full rounded-t-md ${i === DAILY.length - 1 ? "bg-[#c99d3f]" : "bg-[#d9c9a1]"}`}
                        style={{ height: `${(v / max) * 190}px` }}
                      />
                      <span className="absolute bottom-0 text-[12.5px] text-[#9a9384]" style={{ display: "none" }} />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-2 left-10 flex gap-3">
                  {DAILY.map((_, i) => (
                    <span key={i} className="flex-1 text-center text-[12.5px] text-[#9a9384]">
                      {i % 2 === 0 ? `10.${String(i + 1).padStart(2, "0")}` : ""}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#ece6d9] bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-bold">상품별 비중</h2>
                <span className="text-[13.5px] text-[#7a7365]">매출 기준</span>
              </div>
              <ul className="mt-6 space-y-5">
                {SHARES.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-[15px]">
                      <span>{s.name}</span>
                      <span className="text-[#7a7365]">{s.pct}%</span>
                    </div>
                    <div className="mt-2 h-2.5 rounded-full bg-[#f0ece3]">
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#ece6d9] pt-5">
                {[
                  ["생성 중", "2"],
                  ["평균 생성", "42초"],
                  ["오늘 토큰", "4,440원"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[13px] text-[#7a7365]">{k}</p>
                    <p className="mt-2 text-[20px] font-bold">{v}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="overflow-hidden rounded-2xl border border-[#ece6d9] bg-white">
            <div className="flex items-center justify-between p-6">
              <h2 className="text-[18px] font-bold">최근 결제</h2>
              <div className="flex items-center gap-5">
                <input
                  readOnly
                  placeholder="주문번호 · 회원 검색"
                  className="h-11 w-[360px] rounded-xl border border-[#e3dccb] bg-[#faf8f4] px-4 text-[14px] outline-none placeholder:text-[#9a9384]"
                />
                <span className="text-[14px] underline underline-offset-4">전체 보기 →</span>
              </div>
            </div>
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[#faf8f4] text-[14px] text-[#7a7365]">
                <tr>
                  {["주문번호", "일시", "회원", "상품", "금액", "결제", "풀이", ""].map((h) => (
                    <th key={h} className={`px-6 py-4 font-normal ${h === "금액" ? "text-right" : ""}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((o) => (
                  <tr key={o.no} className="border-t border-[#ece6d9]">
                    <td className="px-6 py-5 font-mono text-[14px] text-[#7a7365]">{o.no}</td>
                    <td className="px-6 py-5">{o.at}</td>
                    <td className="px-6 py-5">{o.who}</td>
                    <td className="px-6 py-5">{o.product}</td>
                    <td className="px-6 py-5 text-right">990원</td>
                    <td className="px-6 py-5">
                      <span className={`rounded-md px-2.5 py-1 text-[13.5px] font-bold ${o.pay === "환불 완료" ? PILL.refund : PILL.ok}`}>
                        {o.pay}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`rounded-md px-2.5 py-1 text-[13.5px] font-bold ${PILL[o.tone]}`}>{o.gen}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      {o.tone === "fail" ? (
                        <span className="inline-flex gap-2">
                          <span className="rounded-lg border border-[#e3dccb] px-4 py-2 text-[14px]">재생성</span>
                          <span className="rounded-lg border border-[#f0c9c2] bg-[#fdf1ef] px-4 py-2 text-[14px] text-[#b8392a]">환불</span>
                        </span>
                      ) : (
                        <span className="underline underline-offset-4">상세</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
    </>
  );
}

export default function AdminPage() {
  return (
    <Suspense>
      <Dashboard />
    </Suspense>
  );
}
