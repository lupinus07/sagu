"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChartCard } from "@/components/result/ChartCard";
import { CheckIcon } from "@/components/ui/Icons";
import type { SajuChart } from "@/lib/saju/calculateSaju";
import type { InputValue, Product } from "@/lib/demoStore";
import { ReadingSchema, type ResultDoc } from "@/lib/ai/schemas";
import { ResultView } from "./ResultView";

const STEPS: Record<Product, string[]> = {
  career: ["사주 원국 계산", "내 일의 결", "상사 · 조직 궁합", "이직 타이밍과 월별 흐름", "면접 · 연봉 전략", "10년 로드맵"],
  money: ["사주 원국 계산", "나의 재물 그릇", "돈이 들어오는 길", "돈이 새는 구멍", "재테크 · 부동산", "평생 · 연도별 재물 흐름"],
};
const TIPS: Record<Product, string> = {
  career: "사주에서 나를 다스리는 기운을 관성(官星)이라고 해요. 직장과 조직의 기운이에요.",
  money: "사주에서 내가 다스리는 기운을 재성(財星)이라고 해요. 재물과 돈의 기운이에요.",
};
const STEP_MS = 9_000; // 단계 하나가 채워지는 간격 (실제 생성 시간에 맞춘 연출)

/** 서버에서 읽어 온 결제 완료 주문과 풀이 */
type PaidOrder = {
  id: string;
  product: Product;
  input: InputValue;
  reading: { status: "GENERATING" | "DONE" | "FAILED"; chart: SajuChart; content: unknown } | null;
};

function buildDoc(r: PaidOrder): ResultDoc | null {
  if (r.reading?.status !== "DONE") return null;
  const i = r.input;
  const cal = i.calendar === "lunar" ? (i.isLeapMonth ? "음력 윤달 " : "음력 ") : "";
  // 입력은 시진의 대표 시각이라 시각 대신 시진 이름으로 보여 준다 (경계가 :30)
  const SHIJIN = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  const time =
    i.hour === null ? "시간 모름" : `${SHIJIN[Math.floor(((i.hour * 60 + i.minute + 30) % 1440) / 120)]}시`;
  const profile = {
    name: i.name.trim() || "나",
    summary: `${cal}${i.year}년 ${i.month}월 ${i.day}일 · ${time} · ${i.gender === "female" ? "여성" : "남성"}`,
  };
  const doc: ResultDoc = {
    isSample: false,
    product: r.product,
    profile,
    chart: r.reading.chart,
    reading: ReadingSchema.parse(r.reading.content),
  };
  if (doc.product === "career") doc.status = i.status;
  return doc;
}

function Ring({ progress }: { progress: number }) {
  const r = 63;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto size-[136px]">
      <svg viewBox="0 0 136 136" className="size-full -rotate-90">
        <circle cx="68" cy="68" r={r} fill="none" stroke="#222" strokeWidth="5" />
        <circle
          cx="68"
          cy="68"
          r={r}
          fill="none"
          stroke="#f2b544"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-500"
        />
      </svg>
      <span className="absolute inset-[17px] flex items-center justify-center rounded-full bg-gold-bg font-serif text-hero text-gold">
        결
      </span>
    </div>
  );
}

export function ResultLoader({ id }: { id: string }) {
  const router = useRouter();
  const [order, setOrder] = useState<PaidOrder | null | undefined>(undefined);
  const [refunded, setRefunded] = useState(false);
  const [step, setStep] = useState(0);

  // 풀이가 완성될 때까지 3초마다 상태를 확인한다 (생성은 서버에서 계속 진행된다)
  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const load = async () => {
      try {
        const res = await fetch(`/api/orders/${encodeURIComponent(id)}`, { cache: "no-store" });
        const o = res.ok
          ? ((await res.json()) as { status: string; product?: Product; input?: InputValue; reading?: PaidOrder["reading"] })
          : null;
        if (!alive) return;
        if (o?.status === "PAID" && o.product && o.input) {
          setOrder({ id, product: o.product, input: o.input, reading: o.reading ?? null });
          if (!o.reading || o.reading.status === "GENERATING") timer = setTimeout(load, 3000);
        } else if (o?.status === "READY") {
          router.replace("/checkout?guest=1"); // 결제가 끝나지 않은 주문
        } else {
          setRefunded(o?.status === "REFUNDED");
          setOrder(null);
        }
      } catch {
        if (alive) timer = setTimeout(load, 5000); // 네트워크가 잠깐 끊겨도 계속 확인한다
      }
    };
    load();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [id, router]);

  const total = order ? STEPS[order.product].length : 0;
  const generating = !!order && (!order.reading || order.reading.status === "GENERATING");

  // 연출: 단계가 순서대로 채워지되, 마지막 단계에서 완성을 기다린다
  useEffect(() => {
    if (!generating) return;
    const t = setInterval(() => setStep((n) => Math.min(n + 1, total - 1)), STEP_MS);
    return () => clearInterval(t);
  }, [generating, total]);

  const doc = useMemo(() => (order ? buildDoc(order) : null), [order]);

  if (order === undefined) return null;
  if (order === null) {
    return (
      <main className="mx-auto max-w-[430px] px-4 pt-20 text-center">
        <p className="text-sub">
          {refunded
            ? "풀이를 만드는 중 문제가 생겨 결제가 자동으로 환불됐어요. 결제 수단으로 3~5영업일 안에 돌아가요."
            : "풀이를 찾을 수 없어요. 결제한 계정으로 로그인했는지 확인해 주세요."}
        </p>
        <Link href="/" className="mt-4 inline-block min-h-11 text-gold underline underline-offset-4">
          홈으로
        </Link>
      </main>
    );
  }

  if (doc) return <ResultView doc={doc} />;

  if (order.reading?.status === "FAILED") {
    return (
      <main className="mx-auto max-w-[430px] px-4 pt-20 text-center">
        <p className="text-sub">풀이를 만들지 못했어요. 결제는 곧 자동으로 환불돼요.</p>
        <Link href="/" className="mt-4 inline-block min-h-11 text-gold underline underline-offset-4">
          홈으로
        </Link>
      </main>
    );
  }

  const steps = STEPS[order.product];
  const who = order.input.name.trim() ? `${order.input.name.trim()}님의` : "나의";
  const progress = Math.min(0.95, (step + 0.5) / (total + 1));
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pb-8 pt-14">
      <Ring progress={progress} />
      <h1 className="mt-10 text-center font-serif text-h2 text-heading">{who} 결을 읽고 있어요</h1>
      <p className="mt-3 text-center text-body text-sub">보통 1분쯤 걸려요</p>

      <div
        role="progressbar"
        aria-label="풀이 생성 진행"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        className="mt-6"
      >
        <div className="h-2 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gold transition-[width] duration-700"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <p className="mt-2 text-right text-caption text-dim">{Math.round(progress * 100)}%</p>
      </div>

      {order.reading?.chart && (
        <div className="mt-4">
          <ChartCard chart={order.reading.chart} />
        </div>
      )}

      <ul className="mt-6 space-y-[18px] card px-6 py-6">
        {steps.map((label, i) => {
          const state = i < step ? "done" : i === step ? "now" : "wait";
          return (
            <li
              key={label}
              className={`flex items-center gap-4 text-lead transition-opacity duration-500 ${
                state === "wait" ? "text-dim opacity-60" : ""
              }`}
            >
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                  state === "done"
                    ? "bg-gold text-background"
                    : state === "now"
                      ? "animate-pulse border-2 border-gold border-r-transparent"
                      : "border border-line"
                }`}
              >
                {state === "done" && <CheckIcon className="size-4" />}
              </span>
              <span className={state === "now" ? "font-bold text-gold" : ""}>
                {label}
                {state === "now" && " 쓰는 중…"}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex gap-4 rounded-card bg-gold-bg2 p-5 text-body leading-[1.7]">
        <span className="shrink-0 font-bold text-gold">알고 계셨나요?</span>
        <p>{TIPS[order.product]}</p>
      </div>

      <p className="mt-7 text-center text-small leading-[1.7] text-dim">
        창을 닫아도 풀이는 계속 만들어져요.
        <br />
        완성되면 내 풀이에서 볼 수 있어요. (비회원은 이 주소를 저장해 두세요)
      </p>
    </main>
  );
}
