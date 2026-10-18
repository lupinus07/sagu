"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function KakaoLoginButton({ next }: { next: string }) {
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  async function login() {
    setBusy(true);
    setFailed(false);
    try {
      const { error } = await createClient().auth.signInWithOAuth({
        provider: "kakao",
        options: { redirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
      });
      if (error) throw error;
    } catch {
      setBusy(false);
      setFailed(true);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={login}
        disabled={busy}
        className="h-[54px] w-full rounded-btn bg-[#fee500] text-lead font-bold text-[#191919] disabled:opacity-60"
      >
        카카오로 3초 만에 시작하기
      </button>
      {failed && (
        <p role="alert" className="mt-3 text-center text-small text-caution">
          로그인을 시작하지 못했어요. 잠시 뒤 다시 시도해 주세요.
        </p>
      )}
    </>
  );
}
