import { notFound } from "next/navigation";
import { Suspense } from "react";
import { InputForm } from "@/components/input/InputForm";
import { BottomNav } from "@/components/ui/BottomNav";
import { PageHeader } from "@/components/ui/PageHeader";

export function generateStaticParams() {
  return [{ product: "career" }, { product: "money" }];
}

async function Form({ params }: Pick<PageProps<"/input/[product]">, "params">) {
  const { product } = await params;
  if (product !== "career" && product !== "money") notFound();
  return <InputForm product={product} />;
}

export default function InputPage({ params }: PageProps<"/input/[product]">) {
  return (
    <div className="mx-auto w-full max-w-[430px] pb-24">
      <PageHeader title="사주 정보 입력" right="home" />
      <Suspense>
        <Form params={params} />
      </Suspense>
      <BottomNav active="/" />
    </div>
  );
}
