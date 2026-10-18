"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import { KakaoLoginButton } from "./KakaoLoginButton";

/** 아래에서 올라오는 로그인 시트. 로그인 뒤 돌아갈 곳은 next 로 넘긴다. */
export function LoginSheet({ next, onClose }: { next: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-sheet-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[430px] rounded-t-card border-t border-line bg-card px-5 pb-8 pt-7"
      >
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full"
        >
          <CloseIcon className="size-5" />
        </button>
        <h2 id="login-sheet-title" className="sheet-title">
          로그인하고 결제를 이어가세요
        </h2>
        <p className="mb-6 mt-2 text-body leading-[1.7] text-sub">
          입력하신 정보는 그대로 두었어요. 로그인하면 결제 화면으로 바로 이어져요.
        </p>
        <KakaoLoginButton next={next} />
        <p className="mt-3 text-center text-caption text-dim">처음이시면 약관 동의 후 바로 가입돼요</p>
      </div>
    </div>
  );
}
