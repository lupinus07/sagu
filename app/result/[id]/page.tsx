import { Suspense } from "react";
import { ResultLoader } from "@/components/result/ResultLoader";

async function Result({ params }: Pick<PageProps<"/result/[id]">, "params">) {
  const { id } = await params;
  return <ResultLoader id={id} />;
}

export default function ResultPage({ params }: PageProps<"/result/[id]">) {
  return (
    <Suspense>
      <Result params={params} />
    </Suspense>
  );
}
