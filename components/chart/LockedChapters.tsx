import type { Status } from "@/lib/ai/schemas";
import { lockedChapters } from "@/lib/chapters";
import { LockIcon } from "@/components/ui/Icons";

// 흐림 처리할 자리 채움 문장. 실제 풀이가 아니라 모양만 보여 준다.
const FILLER =
  "타고난 기운이 일과 돈을 대하는 방식에 그대로 드러나요. 지금 흐름에서 어떤 선택이 나에게 맞는지 사주 근거와 함께 차근차근 풀어 드려요.";

/** 무료 풀이 아래: 결제 후 열리는 챕터(2~끝)를 제목만 보이고 본문은 흐리게 잠가 보여 준다. 누르면 결제로 이어진다. */
export function LockedChapters({
  product,
  status,
  onUnlock,
}: {
  product: "career" | "money";
  status: Status;
  onUnlock: () => void;
}) {
  return (
    <>
      {lockedChapters(product, status).map((title, i) => (
        <button
          key={title}
          type="button"
          onClick={onUnlock}
          aria-label={`${title}, 결제 후 열려요`}
          className="card block w-full p-5 text-left"
        >
          <div className="flex items-center justify-between">
            <span className="text-caption tracking-[0.08em] text-gold">CHAPTER {i + 2}</span>
            <span className="chip-gold flex items-center gap-1 !text-caption">
              <LockIcon className="size-3.5" />
              결제 후 열려요
            </span>
          </div>
          <h2 className="mt-3 font-serif text-section text-heading">{title}</h2>
          <p aria-hidden className="mt-3 select-none text-body leading-[1.8] text-sub blur-[5px]">
            {FILLER}
          </p>
        </button>
      ))}
    </>
  );
}
