"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import { kakaoAvailable, loadKakao } from "@/lib/kakao";

export type ShareInfo = {
  product: string;
  /** 결과 제목 (예: 이직 · 직업운) */
  title: string;
  /** 결론 한 단어 (예: 준비할 때) */
  verdictLabel: string;
  /** 결론 한 줄 이유 */
  reason: string;
  keywords: string[];
};

/**
 * 결과 하단의 저장 · 공유 버튼.
 * - 저장: 브라우저 인쇄 기능으로 PDF 저장 (서버 · 토큰 비용 없음, 인쇄 전용 스타일은 globals.css)
 * - 공유: 카카오톡 / 링크 복사 / 기기 공유. 풀이 링크가 아니라 요약 카드와 샘플 보기 링크를 보낸다
 *   (풀이 주소에는 생년월일 등 개인 정보가 열리므로 공유하지 않는다).
 */
export function ResultActions({ share }: { share: ShareInfo }) {
  const [open, setOpen] = useState(false);

  function savePdf() {
    // 브라우저는 문서 제목을 PDF 기본 파일명으로 쓴다
    const prev = document.title;
    document.title = `결 · ${share.title} 풀이`;
    const restore = () => {
      document.title = prev;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  }

  return (
    <>
      <div className="mt-6 flex justify-center gap-3 text-body print:hidden">
        <button type="button" onClick={savePdf} className="min-h-11 rounded-btn border border-line px-5">
          PDF로 저장
        </button>
        <button type="button" onClick={() => setOpen(true)} className="min-h-11 rounded-btn border border-line px-5">
          친구에게 공유
        </button>
      </div>
      <p className="mt-2 text-caption text-dim print:hidden">PDF는 인쇄 창에서 &lsquo;PDF로 저장&rsquo;을 골라 주세요</p>
      {open && <ShareSheet share={share} onClose={() => setOpen(false)} />}
    </>
  );
}

function ShareSheet({ share, onClose }: { share: ShareInfo; onClose: () => void }) {
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const origin = typeof window === "undefined" ? "" : window.location.origin;
  const sampleUrl = `${origin}/sample/${share.product}`;
  const startUrl = `${origin}/input/${share.product}`;
  const text = share.reason.replace(/\n/g, " ");
  const title = `결 · ${share.title}: ${share.verdictLabel}`;
  const imageUrl = `${origin}/api/og?${new URLSearchParams({
    p: share.product,
    v: share.verdictLabel,
    r: share.reason,
    k: share.keywords.slice(0, 3).join("|"),
  })}`;
  const canNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  async function copy() {
    try {
      await navigator.clipboard.writeText(sampleUrl);
      setNotice("링크를 복사했어요");
    } catch {
      window.prompt("이 링크를 복사해서 친구에게 보내 주세요", sampleUrl);
    }
  }

  async function native() {
    try {
      await navigator.share({ title, text, url: sampleUrl });
    } catch {
      /* 사용자가 닫은 경우 */
    }
  }

  async function kakao() {
    const k = await loadKakao();
    // SDK 를 쓸 수 없으면(키 없음 · 도메인 미등록 · 차단) 다른 공유 방법으로 넘어간다
    if (!k) return canNativeShare ? native() : copy();
    try {
      const link = { mobileWebUrl: sampleUrl, webUrl: sampleUrl };
      const cta = { mobileWebUrl: startUrl, webUrl: startUrl };
      k.Share.sendDefault({
        objectType: "feed",
        content: { title, description: text, imageUrl, imageWidth: 1200, imageHeight: 630, link },
        buttons: [
          { title: "샘플 풀이 보기", link },
          { title: "내 사주로 풀이 받기", link: cta },
        ],
      });
    } catch {
      return canNativeShare ? native() : copy();
    }
  }

  const options: { key: string; label: string; onClick: () => void; show: boolean }[] = [
    { key: "kakao", label: "카카오톡", onClick: kakao, show: true },
    { key: "copy", label: "링크 복사", onClick: copy, show: true },
    { key: "native", label: "다른 앱", onClick: native, show: canNativeShare },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 print:hidden" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="친구에게 공유"
        className="w-full max-w-[430px] rounded-t-[24px] border-t border-line bg-card px-5 pb-8 pt-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-conclusion text-heading">친구에게 공유하기</h2>
          <button type="button" onClick={onClose} aria-label="닫기" className="flex size-11 items-center justify-center">
            <CloseIcon className="size-5" />
          </button>
        </div>
        <p className="mt-1 text-small leading-[1.6] text-sub">
          결론 한 줄과 샘플 풀이 링크만 보내요. 내 이름과 생년월일은 전해지지 않아요.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {options
            .filter((o) => o.show)
            .map((o) => (
              <button
                key={o.key}
                type="button"
                onClick={o.onClick}
                className="flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-card border border-line text-body text-heading"
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-full text-lead font-bold ${
                    o.key === "kakao" ? "bg-[#fee500] text-[#191919]" : "bg-raised text-gold"
                  }`}
                  aria-hidden="true"
                >
                  {o.key === "kakao" ? "K" : o.key === "copy" ? "🔗" : "⋯"}
                </span>
                {o.label}
              </button>
            ))}
        </div>
        {!kakaoAvailable && (
          <p className="mt-3 text-caption text-dim">카카오톡 공유를 준비 중이라 링크 복사로 보내져요.</p>
        )}
        {notice && (
          <p role="status" className="mt-3 text-center text-small text-gold">
            {notice}
          </p>
        )}
      </div>
    </div>
  );
}
