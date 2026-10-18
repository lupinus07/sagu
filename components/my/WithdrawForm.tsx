"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@/components/ui/Icons";

const REASONS = ["원하는 풀이가 없어요", "가격이 부담돼요", "풀이가 잘 맞지 않았어요", "자주 사용하지 않아요", "기타"];

export function WithdrawForm() {
  const [reason, setReason] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <main className="px-5 pt-7">
      <h2 className="font-serif text-h2 text-heading">정말 떠나시나요?</h2>
      <p className="mt-2.5 text-body text-sub">탈퇴하기 전에 아래 내용을 꼭 확인해 주세요.</p>

      <section className="mt-6 rounded-card border border-caution-line bg-caution-card p-4">
        <h3 className="text-body font-bold text-caution">탈퇴하면 사라져요</h3>
        <ul className="mt-3 space-y-2.5 text-body leading-[1.55] text-heading">
          {["결제한 풀이 2건을 더 이상 볼 수 없어요", "저장된 사주 정보가 모두 삭제돼요", "카카오 계정 연결이 해제돼요"].map(
            (t) => (
              <li key={t} className="flex gap-3">
                <span className="text-caution">·</span>
                {t}
              </li>
            ),
          )}
        </ul>
        <p className="mt-4 border-t border-caution-line pt-3 text-small leading-[1.6] text-sub">
          결제 기록은 전자상거래법에 따라 5년간 보관한 뒤 파기돼요.
        </p>
      </section>

      <h3 className="mt-7 text-body font-bold text-heading">
        떠나시는 이유를 알려주세요 <span className="text-small font-normal text-dim">(선택)</span>
      </h3>
      <ul className="mt-3">
        {REASONS.map((r) => (
          <li key={r}>
            <button
              type="button"
              onClick={() => setReason(r)}
              className="flex min-h-[48px] w-full items-center gap-3.5 text-left text-body text-heading"
            >
              <span
                className={`flex size-[22px] shrink-0 items-center justify-center rounded-full border-2 ${
                  reason === r ? "border-gold" : "border-line"
                }`}
              >
                {reason === r && <span className="size-2.5 rounded-full bg-gold" />}
              </span>
              {r}
            </button>
          </li>
        ))}
      </ul>
      <textarea
        placeholder="더 좋은 결이 되도록 의견을 남겨 주세요"
        className="mt-2 h-[88px] w-full resize-none card p-3.5 text-body outline-none placeholder:text-dim focus:border-gold"
      />

      <button
        type="button"
        onClick={() => setConfirmed((v) => !v)}
        className="mt-6 flex min-h-12 items-center gap-3 text-body text-heading"
      >
        <span
          className={`flex size-[26px] shrink-0 items-center justify-center rounded-lg ${
            confirmed ? "bg-gold text-background" : "border border-line bg-card"
          }`}
        >
          {confirmed && <CheckIcon className="size-[18px]" />}
        </span>
        위 내용을 모두 확인했어요
      </button>

      <div className="mt-8 grid grid-cols-2 gap-3 pb-8">
        <button
          type="button"
          aria-disabled={!confirmed}
          className="btn-outline h-[48px] text-body !text-caution"
        >
          탈퇴하기
        </button>
        <Link href="/my" className="btn-primary h-[48px] text-body">
          더 써볼게요
        </Link>
      </div>
    </main>
  );
}
