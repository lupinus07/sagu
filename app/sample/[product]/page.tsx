import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ResultView } from "@/components/result/ResultView";
import { SAMPLE_PRODUCTS, loadSample } from "@/lib/samples";

export function generateStaticParams() {
  return SAMPLE_PRODUCTS.map((product) => ({ product }));
}

async function Sample({ params }: Pick<PageProps<"/sample/[product]">, "params">) {
  const { product } = await params;
  const doc = loadSample(product);
  if (!doc) notFound();
  return <ResultView doc={doc} />;
}

export default function SamplePage({ params }: PageProps<"/sample/[product]">) {
  return (
    <Suspense>
      <Sample params={params} />
    </Suspense>
  );
}
