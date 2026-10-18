import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { KakaoLoginButton } from "@/components/login/KakaoLoginButton";
import { ChevronIcon } from "@/components/ui/Icons";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";

function Group({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section>
      {title && <h2 className="mb-2 px-1 text-caption text-dim">{title}</h2>}
      <ul className="divide-y divide-line overflow-hidden card">{children}</ul>
    </section>
  );
}

function Row({ href = "#", label, value }: { href?: string; label: string; value?: string }) {
  return (
    <li>
      <Link href={href} className="flex min-h-[52px] items-center justify-between px-4 text-body text-heading">
        {label}
        <span className="flex items-center gap-2 text-sub">
          {value && <span className="font-bold text-gold">{value}</span>}
          <ChevronIcon className="size-4" />
        </span>
      </Link>
    </li>
  );
}

function SignOutRow() {
  return (
    <li>
      <form action="/auth/signout" method="post">
        <button
          type="submit"
          className="flex min-h-[52px] w-full items-center justify-between px-4 text-body text-heading"
        >
          로그아웃
          <ChevronIcon className="size-4 text-sub" />
        </button>
      </form>
    </li>
  );
}

// 계정 · 결제 연동 전이라 화면용 예시 값이다 (5~6단계에서 실제 데이터로 교체)
function MemberView() {
  return (
    <div className="space-y-5 px-4 pt-5">
      <div className="flex items-center gap-4 px-1">
        <span className="flex size-[58px] items-center justify-center rounded-full border border-gold/30 bg-gold-bg font-serif text-h2 text-gold">
          정
        </span>
        <div>
          <p className="text-conclusion font-bold text-heading">정유리님</p>
          <p className="mt-1 flex items-center gap-2 text-small text-sub">
            <span className="size-2.5 rounded-full bg-[#fee500]" />
            카카오 계정으로 로그인 중
          </p>
        </div>
      </div>

      <Group>
        <Row href="/my/payments" label="결제 내역" value="2건" />
      </Group>

      <Group title="고객 지원">
        <Row href="/notices" label="공지사항" />
        <Row label="자주 묻는 질문" />
        <Row label="1:1 문의 · 카카오톡 채널" />
      </Group>

      <Group title="약관 및 정책">
        <Row href="/policy/terms" label="서비스 이용약관" />
        <Row href="/policy/privacy" label="개인정보처리방침" />
        <Row href="/policy/refund" label="환불 정책" />
      </Group>

      <Group>
        <SignOutRow />
      </Group>

      <div className="flex items-center justify-between px-1 pb-4 text-small text-dim">
        <span>버전 1.0.0</span>
        <Link href="/my/withdraw" className="min-h-11 content-center text-sub underline underline-offset-4">
          회원 탈퇴
        </Link>
      </div>
    </div>
  );
}

function GuestView() {
  return (
    <div className="space-y-5 px-4 pt-5">
      <section className="card p-5 text-center">
        <p className="font-serif text-conclusion text-heading">로그인하고 시작해 보세요</p>
        <p className="mb-5 mt-2 text-small leading-[1.7] text-sub">
          결제한 풀이를 언제든 다시 볼 수 있어요
        </p>
        <KakaoLoginButton next="/my" />
      </section>

      <Group title="고객 지원">
        <Row href="/notices" label="공지사항" />
        <Row label="자주 묻는 질문" />
        <Row label="1:1 문의 · 카카오톡 채널" />
      </Group>

      <Group title="약관 및 정책">
        <Row href="/policy/terms" label="서비스 이용약관" />
        <Row href="/policy/privacy" label="개인정보처리방침" />
        <Row href="/policy/refund" label="환불 정책" />
      </Group>

      <p className="px-1 pb-4 text-small text-dim">버전 1.0.0</p>
    </div>
  );
}

// 로그인 여부는 서버에서 확인한다 (세션 쿠키). 환경변수가 없으면 비로그인으로 본다.
async function MyBody() {
  // 요청 시점에 렌더링한다. 세션 확인 중 쓰이는 현재 시각(Date.now)이 미리 렌더링에 섞이지 않게 먼저 막는다.
  await connection();
  let loggedIn = false;
  if (SUPABASE_URL && SUPABASE_KEY) {
    const {
      data: { user },
    } = await (await createClient()).auth.getUser();
    loggedIn = !!user;
  }
  return loggedIn ? <MemberView /> : <GuestView />;
}

export default function MyPage() {
  return (
    <main>
      <h1 className="flex h-14 items-center justify-center border-b border-line font-serif text-screen text-heading">
        내정보
      </h1>
      <Suspense>
        <MyBody />
      </Suspense>
    </main>
  );
}
