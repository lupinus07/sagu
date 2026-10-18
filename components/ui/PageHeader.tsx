import Link from "next/link";
import { BackLink } from "./BackLink";
import { BackIcon, CloseIcon, HomeIcon } from "./Icons";

const circle = "absolute flex size-11 items-center justify-center rounded-full bg-card";

/** 상단 바: 왼쪽 뒤로가기, 가운데 제목, 오른쪽 선택 버튼(홈/닫기) */
export function PageHeader({
  title,
  back = "/",
  history = false,
  right,
  border = true,
}: {
  title: string;
  back?: string;
  /** true면 뒤로가기가 직전 화면으로 간다 (back 은 기록이 없을 때의 대체 경로) */
  history?: boolean;
  right?: "home" | "close";
  border?: boolean;
}) {
  return (
    <header
      className={`sticky top-0 z-10 flex h-[76px] items-center justify-center bg-background/95 backdrop-blur ${
        border ? "border-b border-line" : ""
      }`}
    >
      {history ? (
        <BackLink fallback={back} className={`${circle} left-4`}>
          <BackIcon className="size-5" />
        </BackLink>
      ) : (
        <Link href={back} aria-label="뒤로" className={`${circle} left-4`}>
          <BackIcon className="size-5" />
        </Link>
      )}
      <h1 className="font-serif text-screen text-heading">{title}</h1>
      {right && (
        <Link href="/" aria-label={right === "home" ? "홈" : "닫기"} className={`${circle} right-4`}>
          {right === "home" ? <HomeIcon className="size-5 text-gold" /> : <CloseIcon className="size-5" />}
        </Link>
      )}
    </header>
  );
}
