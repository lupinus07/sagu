"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronIcon } from "@/components/ui/Icons";
import { listReadings, type Product } from "@/lib/demoStore";
import { loadSample } from "@/lib/samples";

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
  progress?: boolean;
  key: string;
  href: string;
  product: Product;
  who: string;
  date: string;
  fresh?: boolean;
};

const fmt = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;

// 저장된 풀이가 없을 때 보여 주는 화면용 예시 (샘플 풀이로 연결)
const EXAMPLES: Item[] = [
  { key: "ex-wait", href: "#", product: "career", who: "정민준 · 2001.08.21", date: "방금 전", progress: true },
  { key: "ex-money", href: "/sample/money", product: "money", who: "정유리 · 1988.03.15", date: "2026.10.12", fresh: true },
  { key: "ex-career", href: "/sample/career", product: "career", who: "정유리 · 1988.03.15", date: "2026.10.10" },
];

type Tab = "all" | Product;

export default function ReadingsPage() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [tab, setTab] = useState<Tab>("all");

  useEffect(() => {
    const real = listReadings()
      .filter((r) => r.paid)
      .map<Item>((r) => ({
        key: r.id,
        href: `/result/${r.id}`,
        product: r.product,
        who: `${r.input.name.trim() || "나"} · ${r.input.year}.${String(r.input.month).padStart(2, "0")}.${String(r.input.day).padStart(2, "0")}`,
        date: fmt(new Date(r.createdAt)),
      }));
    setItems(real.length > 0 ? real : EXAMPLES);
  }, []);

  const shown = (items ?? []).filter((x) => tab === "all" || x.product === tab);
  const count = (p: Tab) => (items ?? []).filter((x) => p === "all" || x.product === p).length;

  const tabs: [Tab, string][] = [
    ["all", "전체"],
    ["career", "커리어"],
    ["money", "재물"],
  ];

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

        {shown.map((x) => {
          if (x.progress) {
            return (
              <div key={x.key} className="rounded-card border border-dashed border-gold/40 bg-gold-bg p-[18px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-lead font-bold text-heading">취업운</h2>
                  <span className="text-small text-dim">{x.date}</span>
                </div>
                <p className="mt-2 text-small text-sub">{x.who}</p>
                <p className="mt-2.5 flex items-center gap-2.5 text-body font-bold text-gold">
                  <span className="size-5 animate-spin rounded-full border-2 border-gold border-r-transparent" />
                  풀이를 만드는 중이에요
                </p>
                <div className="mt-2.5 h-1.5 rounded-full bg-line">
                  <div className="h-full w-[60%] rounded-full bg-gold" />
                </div>
              </div>
            );
          }
          const s = loadSample(x.product)!;
          return (
            <Link
              key={x.key}
              href={x.href}
              className="block card p-[18px]"
            >
              <div className="flex items-center gap-2.5">
                <h2 className="text-lead font-bold text-heading">{NAME[x.product]}</h2>
                {x.fresh && (
                  <span className="rounded-md bg-gold px-2 py-0.5 text-caption font-bold text-background">NEW</span>
                )}
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

        <Link
          href="/"
          className="block rounded-card border border-gold/20 bg-gradient-to-br from-card to-[#221e15] p-5"
        >
          <p className="text-body text-gold">아직 읽지 않은 결</p>
          <p className="mt-3 text-screen font-bold leading-snug text-heading">나라는 사람을 깊이 읽는, 나의 결</p>
          <p className="mt-5 text-body font-bold text-gold">둘러보기 →</p>
        </Link>
      </div>
    </main>
  );
}
