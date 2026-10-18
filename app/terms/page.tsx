import { Suspense } from "react";
import { TermsAgree } from "@/components/terms/TermsAgree";
import { PageHeader } from "@/components/ui/PageHeader";
import { safeNext } from "@/lib/safeNext";

type Search = Promise<{ next?: string }>;

export default function TermsPage({ searchParams }: { searchParams: Search }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col">
      <PageHeader title="약관 동의" back="/login" />
      <Suspense>
        <TermsBody searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function TermsBody({ searchParams }: { searchParams: Search }) {
  const { next } = await searchParams;
  return <TermsAgree next={safeNext(next)} />;
}
