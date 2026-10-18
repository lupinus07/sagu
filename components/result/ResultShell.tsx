import Link from "next/link";
import { InfoIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { DONATION_PER_READING } from "@/lib/donation";

/** 결과 공통 틀: 헤더 · 샘플 배지 · 프로필 · 마무리 인용 · (샘플) 하단 고정 버튼 */
export function ResultShell({
  title,
  product,
  isSample,
  profile,
  closingQuote,
  children,
}: {
  title: string;
  product: string;
  isSample: boolean;
  profile: { name: string; summary: string };
  closingQuote: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[430px] pb-32">
      <PageHeader title={title} right="close" />

      <main className="space-y-[18px] px-5 pt-5">
        {isSample && (
          <p className="mx-auto flex w-fit items-center gap-2 rounded-full border border-dashed border-gold/50 px-4 py-2 text-small font-bold text-gold">
            <InfoIcon className="size-4" />
            샘플 풀이 · 만든이의 실제 사주예요
          </p>
        )}

        <div className="flex items-center gap-4 card p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-bg font-serif text-xl text-gold">
            {profile.name[0]}
          </span>
          <div>
            <p className="text-lead font-bold text-heading">{profile.name}</p>
            <p className="text-small text-sub">{profile.summary}</p>
          </div>
        </div>

        {children}

        <figure className="px-6 py-8 text-center">
          <span className="font-serif text-3xl text-gold">“</span>
          <blockquote className="mt-3 font-serif text-conclusion leading-[1.9] text-heading">
            {closingQuote}
          </blockquote>
          <div className="mx-auto my-5 h-px w-8 bg-gold/40" />
          <figcaption className="text-caption text-dim">결, {title} 중</figcaption>
          {!isSample && (
            <div className="mt-6 flex justify-center gap-3 text-body">
              <button className="min-h-11 rounded-btn border border-line px-5">저장</button>
              <button className="min-h-11 rounded-btn border border-line px-5">공유</button>
            </div>
          )}
          {!isSample && (
            <p className="mt-6 text-small leading-[1.7] text-sub">
              이 풀이와 함께 <b className="text-gold">{DONATION_PER_READING}원</b>이 기부돼요.
              <br />
              내 운을 보며, 누군가의 운도 조금 밝혀졌어요.
            </p>
          )}
          <Link href="/" className="mt-5 inline-block min-h-11 text-body text-gold underline underline-offset-4">
            다른 결도 읽어보기
          </Link>
          <p className="mt-6 text-caption text-dim">사주 풀이는 삶을 돌아보는 참고용이에요</p>
        </figure>
      </main>

      {isSample && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-background/95 px-4 pb-5 pt-3 backdrop-blur">
          <div className="mx-auto max-w-[430px]">
            <Link
              href={`/input/${product}`}
              className="btn-primary h-14 text-lead"
            >
              내 사주로 풀이 받기 · 990원
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
