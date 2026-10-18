"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CheckIcon } from "@/components/ui/Icons";
import { calculateSaju } from "@/lib/saju/calculateSaju";
import { getReading, updateReading, type DemoReading, type Product } from "@/lib/demoStore";
import { loadSample } from "@/lib/samples";
import type { ResultDoc } from "@/lib/ai/schemas";
import { ResultView } from "./ResultView";

const STEPS: Record<Product, string[]> = {
  career: ["사주 원국 계산", "내 일의 결", "상사 · 조직 궁합", "이직 타이밍과 월별 흐름", "면접 · 연봉 전략", "10년 로드맵"],
  money: ["사주 원국 계산", "나의 재물 그릇", "돈이 들어오는 길", "돈이 새는 구멍", "재테크 · 부동산", "평생 · 연도별 재물 흐름"],
};
const TIPS: Record<Product, string> = {
  career: "사주에서 나를 다스리는 기운을 관성(官星)이라고 해요. 직장과 조직의 기운이에요.",
  money: "사주에서 내가 다스리는 기운을 재성(財星)이라고 해요. 재물과 돈의 기운이에요.",
};
const STEP_MS = 600;

function buildDoc(r: DemoReading): ResultDoc | null {
  const base = loadSample(r.product);
  if (!base) return null;
  const i = r.input;
  const chart = calculateSaju({
    year: i.year,
    month: i.month,
    day: i.day,
    hour: i.hour,
    minute: i.minute,
    gender: i.gender,
    calendar: i.calendar,
    isLeapMonth: i.isLeapMonth,
    yaJasi: i.yaJasi,
  });
  const cal = i.calendar === "lunar" ? (i.isLeapMonth ? "음력 윤달 " : "음력 ") : "";
  // 입력은 시진의 대표 시각이라 시각 대신 시진 이름으로 보여 준다 (경계가 :30)
  const SHIJIN = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  const time =
    i.hour === null ? "시간 모름" : `${SHIJIN[Math.floor(((i.hour * 60 + i.minute + 30) % 1440) / 120)]}시`;
  const profile = {
    name: i.name.trim() || "나",
    summary: `${cal}${i.year}년 ${i.month}월 ${i.day}일 · ${time} · ${i.gender === "female" ? "여성" : "남성"}`,
  };
  // 풀이 문장은 아직 AI가 아니라 샘플 문구 (5단계에서 Claude 응답으로 교체)
  const doc: ResultDoc = { ...base, isSample: false, profile, chart };
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
  const [reading, setReading] = useState<DemoReading | null | undefined>(undefined);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const r = getReading(id) ?? null;
    setReading(r);
    if (r && !r.paid) router.replace(`/payment/mock?id=${id}`);
    if (r?.paid && r.seen) setDone(true);
  }, [id, router]);

  const playing = !!reading && reading.paid && !reading.seen && !done;
  const total = reading ? STEPS[reading.product].length : 0;

  function finish() {
    updateReading(id, { seen: true });
    setDone(true);
  }

  useEffect(() => {
    if (!playing) return;
    let n = 0;
    const t = setInterval(() => {
      n += 1;
      setStep(n);
      if (n >= total + 1) {
        clearInterval(t);
        updateReading(id, { seen: true });
        setDone(true);
      }
    }, STEP_MS);
    return () => clearInterval(t);
  }, [playing, total, id]);

  const doc = useMemo(() => (reading && done ? buildDoc(reading) : null), [reading, done]);

  if (reading === undefined) return null;
  if (reading === null) {
    return (
      <main className="mx-auto max-w-[430px] px-4 pt-20 text-center">
        <p className="text-sub">풀이를 찾을 수 없어요. (이 기기에서 만든 풀이만 볼 수 있어요)</p>
        <Link href="/" className="mt-4 inline-block min-h-11 text-gold underline underline-offset-4">
          홈으로
        </Link>
      </main>
    );
  }

  if (doc) {
    return (
      <>
        <p className="bg-gold-bg2 py-1.5 text-center text-caption text-gold">
          흐름 확인용 · 원국은 실제 계산, 풀이 문장은 샘플이에요
        </p>
        <ResultView doc={doc} />
      </>
    );
  }

  if (!playing) return null;

  const steps = STEPS[reading.product];
  const who = reading.input.name.trim() ? `${reading.input.name.trim()}님의` : "나의";
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-6 pb-8 pt-14">
      <Ring progress={Math.min(1, (step + 0.5) / (total + 1))} />
      <h1 className="mt-10 text-center font-serif text-h2 text-heading">{who} 결을 읽고 있어요</h1>
      <p className="mt-3 text-center text-body text-sub">보통 30초에서 1분쯤 걸려요</p>

      <ul className="mt-8 space-y-[18px] card px-6 py-6">
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
        <p>{TIPS[reading.product]}</p>
      </div>

      <button
        type="button"
        onClick={finish}
        className="mt-7 h-[54px] w-full rounded-btn border border-gold/25 bg-card text-lead font-bold text-gold"
      >
        완성된 부분 먼저 보기
      </button>
      <p className="mt-4 text-center text-small leading-[1.7] text-dim">
        창을 닫아도 풀이는 계속 만들어져요.
        <br />
        완성되면 내 풀이에서 볼 수 있어요.
      </p>
    </main>
  );
}
