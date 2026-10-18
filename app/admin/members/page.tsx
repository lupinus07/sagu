import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { requireAdmin } from "@/lib/admin";
import { createAdminClient } from "@/lib/supabase/admin";

// 관리자 회원 화면: Supabase profiles 의 실제 데이터를 읽는다.
// 결제 정보는 orders 테이블이 생기는 5~6단계 이후에 붙인다 (지금은 보여주지 않는다).
// 개인정보 최소화: 닉네임은 일부를 가리고, 생년월일시 같은 사주 입력 정보는 읽지 않는다.

const PAGE_SIZE = 20;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type Search = Promise<{ tab?: string; q?: string; page?: string; id?: string }>;

type Member = {
  id: string;
  display_name: string | null;
  created_at: string;
  terms_agreed_at: string | null;
  marketing_agreed: boolean;
};

function mask(name: string | null) {
  if (!name) return "(이름 없음)";
  const c = [...name];
  if (c.length === 1) return name;
  if (c.length === 2) return `${c[0]}*`;
  return `${c[0]}${"*".repeat(c.length - 2)}${c[c.length - 1]}`;
}

/** 한국 시간 "10.13 21:05" (full 이면 연도 포함) */
function fmt(iso: string, full = false) {
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
  return full ? `${p.year}.${p.month}.${p.day} ${p.hour}:${p.minute}` : `${p.month}.${p.day} ${p.hour}:${p.minute}`;
}

function Stat({ label, value, sub, subCls = "text-[#7a7365]" }: { label: string; value: string; sub: string; subCls?: string }) {
  return (
    <div className="rounded-2xl border border-[#ece6d9] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <p className="text-[14px] text-[#7a7365]">{label}</p>
      <p className="mt-3 text-[34px] font-bold leading-none text-[#26221b]">{value}</p>
      <p className={`mt-3 text-[13.5px] ${subCls}`}>{sub}</p>
    </div>
  );
}

function Info({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 py-2.5 text-[14.5px]">
      <dt className="text-[#7a7365]">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}

function href(q: { tab?: string; q?: string; page?: number; id?: string }) {
  const sp = new URLSearchParams();
  if (q.tab && q.tab !== "all") sp.set("tab", q.tab);
  if (q.q) sp.set("q", q.q);
  if (q.page && q.page > 1) sp.set("page", String(q.page));
  if (q.id) sp.set("id", q.id);
  const s = sp.toString();
  return `/admin/members${s ? `?${s}` : ""}`;
}

const code = "rounded bg-[#f0ece3] px-1.5";

const sevenDaysAgo = () => new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();

function Notice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="p-9">
      <div className="rounded-2xl border border-[#ece6d9] bg-white p-8">
        <h2 className="text-[18px] font-bold">{title}</h2>
        <div className="mt-3 space-y-2 text-[15px] leading-[1.8] text-[#5d574b]">{children}</div>
      </div>
    </main>
  );
}

async function MembersBody({ searchParams }: { searchParams: Search }) {
  await connection();
  await requireAdmin();
  const sp = await searchParams;

  const db = createAdminClient();
  if (!db) {
    return (
      <Notice title="서비스 키가 필요해요">
        <p>
          회원 목록을 읽으려면 서버 환경변수 <code className={code}>SUPABASE_SERVICE_ROLE_KEY</code>가 필요해요.
        </p>
        <p>
          Supabase → Project Settings → API Keys의 <b>secret key</b>를 <code className={code}>.env.local</code>에 넣고 개발
          서버를 다시 시작해 주세요. 이 키는 서버에서만 쓰이고 브라우저로 나가지 않아요.
        </p>
      </Notice>
    );
  }

  const tab = sp.tab === "pending" ? "pending" : "all";
  const q = (sp.q ?? "").trim().slice(0, 40);
  const page = Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1);

  // 통계: 전체 · 최근 7일 가입 · 약관 미완료
  const weekAgo = sevenDaysAgo();
  const count = () => db.from("profiles").select("id", { count: "exact", head: true });
  const [total, week, pending] = await Promise.all([
    count(),
    count().gte("created_at", weekAgo),
    count().is("terms_agreed_at", null),
  ]);

  // 목록
  let list = db
    .from("profiles")
    .select("id, display_name, created_at, terms_agreed_at, marketing_agreed", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (tab === "pending") list = list.is("terms_agreed_at", null);
  if (q) list = UUID.test(q) ? list.eq("id", q) : list.ilike("display_name", `%${q.replace(/[%_,()]/g, "")}%`);
  const { data, count: matched, error } = await list;

  const err = total.error ?? week.error ?? pending.error ?? error;
  if (err) {
    return (
      <Notice title="회원 정보를 읽지 못했어요">
        <p>{err.message}</p>
        <p>
          <code className={code}>profiles</code> 표나 <code className={code}>display_name</code> 컬럼이 없다면
          supabase/migrations의 0001, 0002 SQL을 Supabase SQL Editor에서 실행해 주세요.
        </p>
      </Notice>
    );
  }

  const rows = (data ?? []) as Member[];
  const sel = rows.find((m) => m.id === sp.id) ?? rows[0];
  const all = total.count ?? 0;
  const pend = pending.count ?? 0;
  const shown = matched ?? 0;
  const pages = Math.max(1, Math.ceil(shown / PAGE_SIZE));

  const TABS = [
    { id: "all", label: "전체", n: all },
    { id: "pending", label: "약관 미완료", n: pend },
  ];

  return (
    <main className="space-y-6 p-9">
      <div className="grid grid-cols-4 gap-5">
        <Stat label="전체 회원" value={`${all.toLocaleString()}명`} sub="카카오로 가입한 회원" />
        <Stat label="최근 7일 가입" value={`${(week.count ?? 0).toLocaleString()}명`} sub="가입일 기준" subCls="text-[#2f7a45]" />
        <Stat
          label="약관 동의 완료"
          value={`${(all - pend).toLocaleString()}명`}
          sub={all ? `전체의 ${Math.round(((all - pend) / all) * 100)}%` : "-"}
        />
        <Stat label="약관 미완료" value={`${pend.toLocaleString()}명`} sub="가입만 하고 동의 없이 나간 회원" subCls="text-[#a8761a]" />
      </div>

      <div className="grid grid-cols-[1fr_360px] items-start gap-5">
        <section className="overflow-hidden rounded-2xl border border-[#ece6d9] bg-white">
          <div className="flex items-center justify-between gap-5 p-6">
            <div className="flex rounded-xl bg-[#f0ece3] p-1 text-[14px]">
              {TABS.map((t) => (
                <Link
                  key={t.id}
                  href={href({ tab: t.id, q })}
                  className={`whitespace-nowrap rounded-lg px-3.5 py-2 ${t.id === tab ? "bg-white font-bold shadow-sm" : "text-[#7a7365]"}`}
                >
                  {t.label} <span className="ml-1 text-[13px]">{t.n.toLocaleString()}</span>
                </Link>
              ))}
            </div>
            <form action="/admin/members">
              {tab !== "all" && <input type="hidden" name="tab" value={tab} />}
              <input
                name="q"
                defaultValue={q}
                placeholder="닉네임 · 전체 ID 검색"
                className="h-11 w-[190px] rounded-xl border border-[#e3dccb] bg-[#faf8f4] px-4 text-[14px] outline-none placeholder:text-[#9a9384]"
              />
            </form>
          </div>

          {rows.length === 0 ? (
            <p className="border-t border-[#ece6d9] px-6 py-16 text-center text-[15px] text-[#7a7365]">
              {q ? "검색 결과가 없어요." : "아직 가입한 회원이 없어요."}
            </p>
          ) : (
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[#faf8f4] text-[14px] text-[#7a7365]">
                <tr>
                  {["회원", "가입일", "약관 동의", "마케팅 수신"].map((h) => (
                    <th key={h} className="px-6 py-4 font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((m) => (
                  <tr key={m.id} className={`border-t border-[#ece6d9] ${m.id === sel?.id ? "bg-[#fdf9ee]" : ""}`}>
                    <td className="px-6 py-4">
                      <Link href={href({ tab, q, page, id: m.id })} className="block">
                        <span className="block font-bold">{mask(m.display_name)}</span>
                        <span className="font-mono text-[13px] text-[#9a9384]">{m.id.slice(0, 8)}…</span>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-[#5d574b]">{fmt(m.created_at)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-md px-2.5 py-1 text-[13.5px] font-bold ${
                          m.terms_agreed_at ? "bg-[#e3f1e6] text-[#2f7a45]" : "bg-[#fbefd3] text-[#a8761a]"
                        }`}
                      >
                        {m.terms_agreed_at ? "동의 완료" : "미완료"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#5d574b]">
                      {m.terms_agreed_at ? (m.marketing_agreed ? "동의" : "미동의") : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="flex items-center justify-between border-t border-[#ece6d9] px-6 py-4 text-[14px] text-[#7a7365]">
            <span>
              {shown === 0
                ? "0명"
                : `${(page - 1) * PAGE_SIZE + 1}–${(page - 1) * PAGE_SIZE + rows.length} / ${shown.toLocaleString()}명`}
            </span>
            <div className="flex gap-2">
              {page > 1 && (
                <Link href={href({ tab, q, page: page - 1 })} className="flex h-9 items-center rounded-lg border border-[#e3dccb] px-3">
                  ‹ 이전
                </Link>
              )}
              <span className="flex h-9 items-center rounded-lg bg-[#26221b] px-3 font-bold text-white">
                {page} / {pages}
              </span>
              {page < pages && (
                <Link href={href({ tab, q, page: page + 1 })} className="flex h-9 items-center rounded-lg border border-[#e3dccb] px-3">
                  다음 ›
                </Link>
              )}
            </div>
          </div>
        </section>

        <aside className="space-y-5">
          {sel && (
            <section className="rounded-2xl border border-[#ece6d9] bg-white p-6">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#2a2416] font-serif text-[22px] text-gold">
                  {[...mask(sel.display_name)][0]}
                </span>
                <div className="min-w-0">
                  <p className="text-[18px] font-bold">{mask(sel.display_name)}</p>
                  <p className="mt-0.5 break-all font-mono text-[12.5px] text-[#9a9384]">{sel.id}</p>
                </div>
              </div>
              <dl className="mt-5 divide-y divide-[#f0ece3] border-t border-[#ece6d9]">
                <Info k="가입 경로" v="카카오 로그인" />
                <Info k="가입일" v={fmt(sel.created_at, true)} />
                <Info k="약관 동의" v={sel.terms_agreed_at ? fmt(sel.terms_agreed_at, true) : "아직 동의 전"} />
                <Info k="마케팅 수신" v={sel.terms_agreed_at ? (sel.marketing_agreed ? "동의" : "미동의") : "-"} />
              </dl>
            </section>
          )}

          <p className="rounded-xl bg-[#f0ece3] p-4 text-[13px] leading-[1.7] text-[#5d574b]">
            결제 · 풀이 정보는 결제 기능을 연결한 뒤에 이 화면에 나와요. 생년월일시 등 사주 입력 정보는 관리자 화면에 표시하지
            않고, 닉네임은 일부를 가려서 보여요.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default function AdminMembersPage({ searchParams }: { searchParams: Search }) {
  return (
    <>
      <header className="flex items-center justify-between border-b border-[#ece6d9] px-9 py-6">
        <div>
          <h1 className="text-[26px] font-bold">회원</h1>
          <p className="mt-1 text-[14px] text-[#7a7365]">카카오로 가입한 회원 · 실제 데이터</p>
        </div>
      </header>
      <Suspense>
        <MembersBody searchParams={searchParams} />
      </Suspense>
    </>
  );
}
