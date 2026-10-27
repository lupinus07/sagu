"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { LoginSheet } from "@/components/login/LoginSheet";
import { ChartCard } from "@/components/result/ChartCard";
import { ChartReadingCards } from "@/components/result/ChartReadingCards";
import { LockedChapters } from "@/components/chart/LockedChapters";
import { PageHeader } from "@/components/ui/PageHeader";
import { clearDraft, FROM_LOGIN_KEY, isExpired, parseDraft, readDraftRaw } from "@/lib/draft";
import type { SajuChart } from "@/lib/saju/calculateSaju";
import { createClient } from "@/lib/supabase/client";

const PRODUCT_NAME = { career: "이직 · 직업운", money: "금전 · 재물운" } as const;

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

async function isLoggedIn() {
  try {
    const { data } = await createClient().auth.getUser();
    return !!data.user;
  } catch {
    return false;
  }
}

/** 무료 풀이: 입력한 사주로 원국을 API에서 계산해 보여주고, 그 아래에서 결제 · 회원가입 · 비회원 결제로 나뉜다. */
export function FreeChart() {
  const router = useRouter();
  const raw = useSyncExternalStore(subscribe, readDraftRaw, () => undefined);
  const draft = useMemo(() => (raw ? parseDraft(raw) : null), [raw]);
  const [chart, setChart] = useState<SajuChart | null>(null);
  const [failed, setFailed] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (raw === undefined) return;
    if (!draft || isExpired(draft)) {
      clearDraft();
      router.replace(`/input/${draft?.product ?? "career"}?notice=draft`);
      return;
    }
    const { gender, calendar, isLeapMonth, year, month, day, hour, minute, yaJasi } = draft.input;
    const body = { gender, calendar, isLeapMonth, year, month, day, hour, minute, yaJasi };
    let alive = true;
    fetch("/api/saju/chart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: { chart: SajuChart }) => alive && setChart(d.chart))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [raw, draft, router]);

  if (!draft) return null;
  const product = draft.product;
  const edit = `/input/${product}`;

  async function pay() {
    if (busy) return;
    setBusy(true);
    const loggedIn = await isLoggedIn();
    setBusy(false);
    if (loggedIn) router.push("/checkout");
    else {
      // 로그인(카카오 · 약관)을 거쳐 결제 화면에 돌아오면 뒤로가기를 이 화면으로 되돌리기 위한 표시
      try {
        sessionStorage.setItem(FROM_LOGIN_KEY, "1");
      } catch {
        /* 저장 불가 환경이면 뒤로가기가 로그인 화면을 거칠 뿐이다 */
      }
      setSheet(true);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col">
      <PageHeader title="무료 풀이" back={edit} history />
      <main className="space-y-5 px-5 pb-10 pt-5">
        <p className="text-body leading-[1.7] text-sub">
          입력하신 생년월일시로 만세력을 계산했어요. 사주 원국은 무료예요.
        </p>

        {chart ? (
          <>
            <p className="px-1 text-caption tracking-[0.08em] text-gold">CHAPTER 1 · 무료로 열린 사주 원국</p>
            <ChartCard chart={chart} />
            <ChartReadingCards chart={chart} product={product} />
            <LockedChapters product={product} status={draft.input.status} onUnlock={pay} />
          </>
        ) : failed ? (
          <p role="alert" className="card p-5 text-body leading-[1.7] text-sub">
            사주 원국을 계산하지 못했어요. 입력한 날짜를 확인하고{" "}
            <Link href={edit} className="text-gold underline underline-offset-4">
              다시 입력
            </Link>
            해 주세요.
          </p>
        ) : (
          <div className="card p-5 text-body text-dim" aria-busy="true">
            사주 원국을 계산하고 있어요…
          </div>
        )}

        <section className="card space-y-4 p-5">
          <div>
            <h2 className="text-lead font-bold text-heading">{PRODUCT_NAME[product]}, 나머지 풀이가 남았어요</h2>
            <p className="mt-2 text-small leading-[1.7] text-sub">
              원국을 바탕으로 한 줄 결론, 일의 결, 타이밍까지 자세한 풀이를 받아요. 결제 후 내 풀이에서 언제든 다시 볼 수 있어요.
            </p>
          </div>
          <button
            type="button"
            disabled={!chart || busy}
            onClick={pay}
            className="btn-primary h-[52px] w-full text-lead"
          >
            나머지 풀이보기 990원
          </button>
          <p className="text-center text-caption text-dim">
            로그인하면 내 풀이에 저장돼요. 로그인 없이 결제하면 이 기기에서만 다시 볼 수 있어요.
          </p>
        </section>

        <p className="text-center text-caption text-dim">사주 풀이는 삶을 돌아보는 참고용이에요</p>
      </main>

      {sheet && (
        <LoginSheet
          next="/checkout"
          onClose={() => setSheet(false)}
          onGuest={() => router.push("/checkout?guest=1")}
          title="나머지 풀이를 열어볼까요?"
          description="입력하신 정보는 그대로 두었어요. 카카오로 시작하면 내 풀이에 저장돼요."
        />
      )}
    </div>
  );
}
