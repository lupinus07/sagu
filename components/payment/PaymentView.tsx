"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import type { InputValue, Product } from "@/lib/demoStore";
import { DONATION_PER_READING, SHOW_DONATION } from "@/lib/donation";
import { STATUS_NAMES } from "@/lib/labels";

const PRODUCT = {
  career: {
    name: "이직운",
    chapters:
      "한 줄 결론 · 사주 원국 · 내 일의 결 · 동료가 보는 나 · 잘 맞는 업종 · 상사 궁합 · 귀인 · 이직 타이밍 · 월별 흐름 · 피할 제안 · 면접 전략 · 연봉 협상 · 10년 로드맵",
    count: 13,
  },
  money: {
    name: "금전 · 재물운",
    chapters:
      "한 줄 결론 · 사주 원국 · 나의 재물 그릇 · 돈과 나의 관계 · 숨은 재물 · 돈이 들어오는 길 · 부업 · 돈이 새는 구멍 · 재테크 · 평생 재물 흐름 · 연도별 · 월별 · 2028년 집중 분석",
    count: 13,
  },
} as const;

const SHIJIN = ["자시(子時)", "축시(丑時)", "인시(寅時)", "묘시(卯時)", "진시(辰時)", "사시(巳時)", "오시(午時)", "미시(未時)", "신시(申時)", "유시(酉時)", "술시(戌時)", "해시(亥時)"];

function birthTime({ hour, minute }: InputValue) {
  if (hour === null) return "모름";
  const mm = String(minute).padStart(2, "0");
  return `${SHIJIN[Math.floor(((hour * 60 + minute + 30) % 1440) / 120)]} · ${String(hour).padStart(2, "0")}:${mm}`;
}

function Check({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="peer sr-only" />
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-background peer-checked:border-gold peer-checked:bg-gold">
        {checked && <CheckIcon className="size-5" />}
      </span>
      <span className="leading-[1.6]">{children}</span>
    </label>
  );
}

/** 결제 확인 화면 (주문 내용 · 결제 수단 · 동의). 토스 결제위젯이 이 안에 들어간다. */
export function PaymentView({
  product,
  input: i,
  onPay,
  ready = true,
  busy = false,
  error = null,
}: {
  product: Product;
  input: InputValue;
  onPay: () => void;
  /** 결제위젯이 준비되기 전에는 결제 버튼을 막는다 */
  ready?: boolean;
  busy?: boolean;
  error?: string | null;
}) {
  const [agree1, setAgree1] = useState(true);
  const [agree2, setAgree2] = useState(true);
  const p = PRODUCT[product];
  const cal = i.calendar === "lunar" ? (i.isLeapMonth ? "음력 윤달" : "음력") : "양력";
  const rows = [
    ["이름", i.name.trim() || "나"],
    ["생년월일", `${i.year}년 ${i.month}월 ${i.day}일 · ${cal}`],
    ["태어난 시간", birthTime(i)],
    ["성별", i.gender === "female" ? "여성" : "남성"],
  ];
  const ok = agree1 && agree2 && ready && !busy;

  return (
    <div className="mx-auto w-full max-w-[430px] pb-10">
      <PageHeader title="결제하기" back="/chart" history />
      <main className="space-y-4 px-4 pt-6">
        <section className="card p-5">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-h2 text-heading">{p.name}</h2>
            {product === "career" && (
              <span className="rounded-lg bg-gold-bg2 px-2.5 py-1 text-caption text-gold">
                {STATUS_NAMES[i.status]}
              </span>
            )}
            <Link href={`/input/${product}`} className="ml-auto min-h-11 content-center text-body text-gold">
              수정
            </Link>
          </div>
          <dl className="mt-2 space-y-3.5 text-body">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-sub">{k}</dt>
                <dd className="text-right text-heading">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="card p-5">
          <h2 className="text-body font-bold text-heading">받게 될 풀이 · {p.count}개 챕터</h2>
          <p className="mt-3 text-body leading-[1.9] text-sub">{p.chapters}</p>
        </section>

        <h2 className="pt-2 text-body font-bold text-heading">결제 수단</h2>
        {/* 토스 결제위젯이 이 자리에 그려진다 (Checkout 에서 렌더) */}
        <div id="payment-method" className="min-h-[150px] overflow-hidden rounded-card bg-white" />

        <section className="card p-5">
          <div className="flex justify-between text-body">
            <span className="text-sub">상품 금액</span>
            <span className="text-heading">990원</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <span className="text-lead font-bold text-heading">총 결제 금액</span>
            <span className="font-serif text-h1 text-gold">990원</span>
          </div>
          <p className="mt-1 text-right text-small text-dim">부가세 포함</p>
        </section>

        {SHOW_DONATION && (
        <p className="px-1 text-small leading-[1.7] text-sub">
          이 결제 중 <b className="text-gold">{DONATION_PER_READING}원</b>은 기부돼요. 환불되면 그 건의 기부는 빠져요.{" "}
          <Link href="/notices" className="text-gold underline underline-offset-2">
            기부 안내
          </Link>
        </p>
        )}

        <div className="space-y-5 px-1 pt-2 text-body">
          <Check checked={agree1} onChange={setAgree1}>
            <b className="text-gold">[필수]</b> 주문 내용과 사주 정보를 확인했어요
          </Check>
          <Check checked={agree2} onChange={setAgree2}>
            <b className="text-gold">[필수]</b> 풀이는 디지털 콘텐츠라, 만들어진 뒤에는 환불이 제한되는 것에 동의해요
            <span className="mt-1 block text-small text-dim">
              풀이 생성에 실패하면 자동으로 전액 환불돼요.{" "}
              <Link href="/policy/refund" className="text-gold underline underline-offset-2">
                환불 정책 보기
              </Link>
            </span>
          </Check>
        </div>

        {error && (
          <p role="alert" className="px-1 text-small leading-[1.6] text-caution">
            {error}
          </p>
        )}
        <button
          type="button"
          onClick={() => onPay()}
          disabled={!ok}
          className="btn-primary mt-4 h-14 w-full text-conclusion"
        >
          {busy ? "결제창을 여는 중…" : "990원 결제하기"}
        </button>
      </main>
    </div>
  );
}
