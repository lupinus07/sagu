import { chartReading, type ReadingProduct } from "@/lib/saju/reading";
import type { SajuChart } from "@/lib/saju/calculateSaju";

/** 사주 원국 아래 규칙 풀이 카드. 무료 풀이와 결과 · 샘플 화면이 같은 카드를 쓴다. */
export function ChartReadingCards({ chart, product }: { chart: SajuChart; product: ReadingProduct }) {
  return (
    <>
      {chartReading(chart, product).map((c) => (
        <section key={c.title} className="card space-y-2 p-5">
          <h2 className="text-body font-bold text-gold">{c.title}</h2>
          <p className="text-body leading-[1.8] text-text">{c.body}</p>
        </section>
      ))}
    </>
  );
}
