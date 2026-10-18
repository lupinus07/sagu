import { Card } from "@/components/ui/Card";
import type { Element, PillarInfo, SajuChart } from "@/lib/saju/calculateSaju";

const EL_COLOR: Record<Element, string> = {
  木: "text-wood",
  火: "text-fire",
  土: "text-earth",
  金: "text-metal",
  水: "text-water",
};
const EL_BG: Record<Element, string> = {
  木: "bg-wood",
  火: "bg-fire",
  土: "bg-earth",
  金: "bg-metal",
  水: "bg-water",
};

const EL_NAME: Record<Element, string> = { 木: "목", 火: "화", 土: "토", 金: "금", 水: "수" };

function Column({
  label,
  p,
  me,
  mark,
}: {
  label: string;
  p: PillarInfo | null;
  me?: boolean;
  mark?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center rounded-2xl border py-3 ${
        me
          ? "border-gold bg-gold-bg"
          : mark
            ? "border-water/40 bg-[#161b24]"
            : "border-line bg-card"
      }`}
    >
      <span className="text-caption text-dim">{label}</span>
      {p ? (
        <>
          <span className={`mt-1 text-caption font-bold ${me ? "text-gold" : ""}`}>
            {me ? "나 · 일간" : p.tenGod.stem}
          </span>
          <span className={`mt-1 font-serif text-hero leading-tight ${EL_COLOR[p.stemElement]}`}>
            {p.hanja[0]}
          </span>
          <span className={`font-serif text-hero leading-tight ${EL_COLOR[p.branchElement]}`}>
            {p.hanja[1]}
          </span>
          <span className={`mt-1 text-caption ${mark ? "text-water" : ""}`}>{mark ?? p.tenGod.branch}</span>
        </>
      ) : (
        <span className="my-10 text-small text-dim">모름</span>
      )}
    </div>
  );
}

export function ChartCard({
  chart,
  summary,
  aside = "만세력 계산",
  marks,
  elementNames,
}: {
  chart: SajuChart;
  summary?: string;
  aside?: string;
  /** 슬롯별 강조 라벨 (예: 재물 자리) */
  marks?: Partial<Record<"hour" | "day" | "month" | "year", string>>;
  /** 오행 옆에 한글 이름도 표시: 木(목) */
  elementNames?: boolean;
}) {
  const els: Element[] = ["木", "火", "土", "金", "水"];
  return (
    <Card title="사주 원국" aside={aside}>
      <div className="grid grid-cols-4 gap-2">
        <Column label="시주" p={chart.hour} mark={marks?.hour} />
        <Column label="일주" p={chart.day} mark={marks?.day} me />
        <Column label="월주" p={chart.month} mark={marks?.month} />
        <Column label="년주" p={chart.year} mark={marks?.year} />
      </div>
      {!chart.hasHourPillar && (
        <p className="mt-3 text-caption text-dim">
          태어난 시간을 몰라 삼주(년·월·일)로 풀이했어요.
        </p>
      )}
      <ul className="mt-5 space-y-2.5">
        {els.map((e) => (
          <li key={e} className="flex items-center gap-3">
            <span className={`${elementNames ? "w-11" : "w-5"} text-body ${EL_COLOR[e]}`}>{e}{elementNames && <span className="text-caption">({EL_NAME[e]})</span>}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-[#222]">
              <span
                className={`block h-full rounded-full ${EL_BG[e]}`}
                style={{ width: `${(chart.elementCounts[e] / 8) * 100}%` }}
              />
            </span>
            <span className="w-4 text-right text-body text-sub">{chart.elementCounts[e]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-small leading-[1.8] text-sub">
        {summary ?? (
          <>
            {chart.month.hanja[1]}월에 태어난 {chart.day.hanja[0]} 일간이에요.
            {chart.luck.current &&
              ` 현재 ${chart.luck.current.hanja} 대운(${chart.luck.current.startAge}~${chart.luck.current.endAge}세)을 지나고 있어요.`}
          </>
        )}
      </p>
    </Card>
  );
}
