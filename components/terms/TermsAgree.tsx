"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckIcon, ChevronIcon, LockIcon } from "@/components/ui/Icons";

const ITEMS = [
  { id: "age", required: true, label: "만 14세 이상입니다", link: false },
  { id: "terms", required: true, label: "서비스 이용약관", link: true },
  { id: "privacy", required: true, label: "개인정보 수집 · 이용 동의", link: true },
  { id: "marketing", required: false, label: "새 풀이 소식 · 할인 알림 받기", link: true },
] as const;

function Box({ on }: { on: boolean }) {
  return (
    <span
      className={`flex size-[26px] shrink-0 items-center justify-center rounded-lg ${
        on ? "bg-gold text-background" : "border border-line bg-card"
      }`}
    >
      {on && <CheckIcon className="size-4" />}
    </span>
  );
}

export function TermsAgree({ next }: { next: string }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [failed, setFailed] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({
    age: true,
    terms: true,
    privacy: true,
    marketing: true,
  });
  const all = ITEMS.every((i) => checked[i.id]);
  const requiredOk = ITEMS.filter((i) => i.required).every((i) => checked[i.id]);

  async function submit() {
    setSaving(true);
    setFailed(false);
    const res = await fetch("/api/terms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ marketing: checked.marketing }),
    });
    if (res.status === 401) return router.replace("/login");
    if (!res.ok) {
      setSaving(false);
      setFailed(true);
      return;
    }
    router.replace(next);
  }

  return (
    <>
      <main className="flex-1 px-5 pt-8">
        <h2 className="font-serif text-h2 text-heading">반가워요, 유리님</h2>
        <p className="mt-2.5 text-body text-sub">결을 시작하기 전에 약관을 확인해 주세요.</p>

        <button
          type="button"
          onClick={() => setChecked(Object.fromEntries(ITEMS.map((i) => [i.id, !all])))}
          className="mt-6 flex min-h-[60px] w-full items-center gap-3.5 card px-4 text-lead font-bold text-heading"
        >
          <Box on={all} />
          전체 동의하기
        </button>

        <ul className="mt-4 px-1">
          {ITEMS.map((i) => (
            <li key={i.id} className="flex items-center">
              <button
                type="button"
                onClick={() => setChecked((c) => ({ ...c, [i.id]: !c[i.id] }))}
                className="flex min-h-[48px] flex-1 items-center gap-3.5 text-left text-body text-heading"
              >
                <Box on={checked[i.id]} />
                <span>
                  <b className={`mr-1.5 text-small ${i.required ? "text-gold" : "text-dim"}`}>
                    [{i.required ? "필수" : "선택"}]
                  </b>
                  {i.label}
                </span>
              </button>
              {i.link && <ChevronIcon className="size-5 text-sub" />}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex gap-3 rounded-card bg-card p-4 text-small leading-[1.65] text-sub">
          <LockIcon className="mt-0.5 size-5 shrink-0 text-gold" />
          입력하신 생년월일과 태어난 시간은 풀이를 만드는 데에만 사용되고, 다른 곳에 제공되지 않아요.
        </p>
      </main>

      <div className="px-5 pb-8 pt-4">
        {failed && (
          <p role="alert" className="mb-3 text-center text-small text-caution">
            저장하지 못했어요. 다시 시도해 주세요.
          </p>
        )}
        <button
          type="button"
          onClick={submit}
          disabled={!requiredOk || saving}
          className="btn-primary h-[54px] w-full text-lead"
        >
          동의하고 시작하기
        </button>
      </div>
    </>
  );
}
