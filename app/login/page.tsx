import Link from "next/link";
import { Suspense } from "react";
import { KakaoLoginButton } from "@/components/login/KakaoLoginButton";
import { CloseIcon } from "@/components/ui/Icons";
import { safeNext } from "@/lib/safeNext";

type Search = Promise<{ next?: string; error?: string }>;

export default function LoginPage({ searchParams }: { searchParams: Search }) {
  return (
    <Suspense>
      <LoginContent searchParams={searchParams} />
    </Suspense>
  );
}

async function LoginContent({ searchParams }: { searchParams: Search }) {
  const { next, error } = await searchParams;
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col px-5 pb-8">
      <div className="flex h-[76px] items-center justify-end">
        <Link href="/" aria-label="닫기" className="flex size-11 items-center justify-center rounded-full bg-card">
          <CloseIcon className="size-5" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center pb-16 text-center">
        <div className="relative mb-6 flex size-[250px] items-center justify-center">
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(242,181,68,0.18)_0%,rgba(242,181,68,0.05)_45%,transparent_70%)]" />
          <span className="relative flex size-[137px] items-center justify-center rounded-full border border-gold/30 bg-[radial-gradient(circle,#3a2d17_0%,#1d1810_100%)] font-serif text-[56px] text-gold">
            결
          </span>
        </div>
        <h1 className="font-serif text-h1 text-heading">내 삶의 결을 읽다</h1>
        <p className="mt-4 text-lead leading-[1.75] text-sub">
          로그인하면 결제한 풀이를
          <br />
          언제든 다시 볼 수 있어요
        </p>
      </div>

      {error && (
        <p role="alert" className="mb-3 text-center text-small text-caution">
          로그인에 실패했어요. 다시 시도해 주세요.
        </p>
      )}
      <KakaoLoginButton next={safeNext(next)} />
      <p className="mt-4 text-center text-body text-sub">처음이시면 약관 동의 후 바로 가입돼요</p>
  
    </main>
  );
}
