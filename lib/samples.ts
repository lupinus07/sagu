import career from "@/data/samples/career.json";
import money from "@/data/samples/money.json";
import chart from "@/data/samples/career.chart.json";
import { ReadingSchema, type ResultDoc, type Status } from "@/lib/ai/schemas";

export const SAMPLE_PRODUCTS = ["career", "money"] as const;

// 같은 만든이의 사주라 원국 차트는 두 샘플이 공유한다.
const sampleChart = chart as ResultDoc["chart"];

function build(raw: typeof career | typeof money): ResultDoc {
  return {
    isSample: true,
    product: raw.product as ResultDoc["product"],
    status: "status" in raw ? (raw.status as Status) : undefined,
    profile: raw.profile,
    chart: sampleChart,
    reading: ReadingSchema.parse(raw.reading),
  };
}

export function loadSample(product: string): ResultDoc | null {
  if (product === "career") return build(career);
  if (product === "money") return build(money);
  return null;
}
