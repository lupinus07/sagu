"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { KakaoLoginButton } from "@/components/login/KakaoLoginButton";
import { ChevronIcon } from "@/components/ui/Icons";
import type { InputValue, Product } from "@/lib/demoStore";
import { loadSample } from "@/lib/samples";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/client";

const NAME = { career: "이직운", money: "금전 · 재물운" } as const;
const VERDICT_TEXT: Record<string, string> = {
  PREPARE: "준비할 때",
  MOVE: "움직일 때",
  STAY: "머물 때",
  GUARD: "지킬 때",
  GATHER: "모을 때",
  GROW: "불릴 때",
};

type Item = {
  key: string;
  href: string;
  product: Product;
  who: string;
  date: string;
};

const fmt = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;

type Tab = "all" | Product;

export default function ReadingsPage() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>("all");

  // 내 풀이는 로그인한 사람만 본다. 비회원은 조회할 수 없다.
  useEffect(() => {
    (async () => {
      let ok = false;
      if (SUPABASE_URL && SUPABASE_KEY) {
        try {
          const { data } = await createClient().auth.getClaims();
          ok = !!data?.claims;
        } catch {
          ok = false;
        }
      }
      setLoggedIn(ok);
      if (!ok) return;
      // RLS(orders_select_own)가 본인 주문만 돌려준다. 결제가 끝난 주문만 풀이로 보여 준다.
      const { data } = await createClient()
        .from("orders")
        .select("id, product, birth_input, approved_at, created_at")
        .eq("status", "PAID")
        .order("created_at", { ascending: false });
      setItems(
        (data ?? []).map<Item>((o) => {
          const i = o.birth_input as InputValue;
          return {
            key: o.id,
            href: `/result/${o.id}`,
            product: o.product as Product,
            who: `${i.name.trim() || "나"} · ${i.year}.${String(i.month).padStart(2, "0")}.${String(i.day).padStart(2, "0")}`,
            date: fmt(new Date(o.approved_at ?? o.created_at)),
          };
        }),
      );
    })();
  }, []);

  const shown = (items ?? []).filter((x) => tab === "all" || x.product === tab);
  const count = (p: Tab) => (items ?? []).filter((x) => p === "all" || x.product === p).length;

  const tabs: [Tab, string][] = [
    ["all", "전체"],
    ["career", "커리어"],
    ["money", "재물"],
  ];

  if (loggedIn === false) {
    return (
      <main>
        <h1 className="flex h-[60px] items-center justify-center border-b border-line font-serif text-screen text-heading">
          내 풀이
        </h1>
        <div className="px-5 pt-5">
          <section className="card p-5 text-center">
            <p className="font-serif text-conclusion text-heading">로그인하고 확인해 보세요</p>
            <p className="mb-5 mt-2 text-small leading-[1.7] text-sub">
              로그인한 상태로 결제한 풀이를 언제든 다시 볼 수 있어요
            </p>
            <KakaoLoginButton next="/readings" />
          </section>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1 className="flex h-[60px] items-center justify-center border-b border-line font-serif text-screen text-heading">
        내 풀이
      </h1>
      <div className="space-y-4 px-5 pt-4">
        <div className="grid grid-cols-3 rounded-card bg-card p-1.5">
          {tabs.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`min-h-10 rounded-xl text-body ${
                tab === id ? "bg-raised font-bold text-heading" : "text-sub"
              }`}
            >
              {label} {count(id)}
            </button>
          ))}
        </div>

        {items && items.length === 0 && (
          <p className="py-10 text-center text-body text-sub">아직 결제한 내역이 없어요</p>
        )}

        {shown.map((x) => {
          const s = loadSample(x.product)!;
          return (
            <Link
              key={x.key}
              href={x.href}
              className="block card p-[18px]"
            >
              <div className="flex items-center gap-2.5">
                <h2 className="text-lead font-bold text-heading">{NAME[x.product]}</h2>
                <span className="ml-auto text-small text-dim">{x.date}</span>
              </div>
              <p className="mt-2 text-small text-sub">{x.who}</p>
              <p className="mt-3 font-serif text-h1 leading-tight text-gold">{VERDICT_TEXT[s.reading.verdict]}</p>
              <p className="mt-2.5 text-body leading-[1.65] text-text">
                {s.reading.verdictReason.replace("\n", " ")}
              </p>
              <p className="mt-2 flex items-center justify-end gap-1 text-body font-bold text-gold">
                다시 읽기 <ChevronIcon className="size-4" />
              </p>
            </Link>
          );
        })}

      </div>
    </main>
  );
}
