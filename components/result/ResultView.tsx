import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { ChevronIcon } from "@/components/ui/Icons";
import { STATUS_LABELS } from "@/lib/labels";
import type { Block, ResultDoc, Row } from "@/lib/ai/schemas";
import { ChartCard } from "./ChartCard";
import { ChartReadingCards } from "./ChartReadingCards";
import { ResultShell } from "./ResultShell";
import { TimingChart } from "./TimingChart";
import { VerdictCard } from "./VerdictCard";

const VERDICT_INDEX = { MOVE: 0, PREPARE: 1, STAY: 2, GATHER: 0, GUARD: 1, GROW: 2 } as const;

const ICONS = {
  people:
    "M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 2c-2.3 0-7 1.2-7 3.5V19h10v-2.5c0-1 .5-1.9 1.3-2.6A9 9 0 0 0 8 13Zm8 0c-2.3 0-7 1.2-7 3.5V19h14v-2.5c0-2.3-4.7-3.5-7-3.5Z",
  book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm2 12h11V5H6v12Z",
  bag: "M6 8h12l1 12H5L6 8Zm3-1a3 3 0 0 1 6 0h-2a1 1 0 0 0-2 0H9Z",
} as const;

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-caution-bg text-caution">
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d={ICONS[name]} />
      </svg>
    </span>
  );
}

function Bar({ value, tone = "gold" }: { value: number; tone?: "gold" | "dim" | "now" }) {
  const color = tone === "now" ? "bg-gold" : tone === "gold" ? "bg-bar-gold" : "bg-bar-dim";
  return (
    <div className="h-1.5 w-full rounded-full bg-line">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function Conclusion({ text }: { text: string }) {
  if (!text) return null;
  return <p className="conclusion">{text}</p>;
}

function AdviceBox({ text }: { text: string }) {
  if (!text) return null;
  return (
    <div className="advice-box mt-5">
      <svg viewBox="0 0 24 24" className="mt-0.5 size-6 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
      </svg>
      <div>
        <p className="text-small font-bold text-gold">이렇게 해보세요</p>
        <p className="mt-1 leading-[1.7]">{text}</p>
      </div>
    </div>
  );
}

function WhyBox({ text }: { text: string }) {
  if (!text) return null;
  return (
    <details open className="group mt-4 rounded-2xl border border-line">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 text-body">
        왜 그런가요? · 사주 근거
        <ChevronIcon className="size-5 rotate-90 text-sub group-open:-rotate-90" />
      </summary>
      <p className="border-t border-line px-4 py-3 text-small leading-[1.8] text-sub">{text}</p>
    </details>
  );
}

const TONE = { gold: "text-gold", caution: "text-caution", plain: "text-text" } as const;

function Rows({ rows, wide }: { rows: Row[]; wide?: boolean }) {
  const shown = rows.filter((r) => r.text);
  if (shown.length === 0) return null;
  return (
    <dl className="mt-4 divide-y divide-line border-t border-line">
      {shown.map((r) => (
        <div key={r.label} className={`flex py-2.5 ${wide ? "gap-4" : "gap-3"}`}>
          <dt className={`${wide ? "w-[60px]" : "w-[44px]"} shrink-0 text-body font-bold ${TONE[r.tone]}`}>{r.label}</dt>
          <dd className="text-body leading-[1.75]">{r.text}</dd>
        </div>
      ))}
    </dl>
  );
}

function Slider({ left, right, value }: { left: string; right: string; value: number }) {
  return (
    <div className="mt-5">
      <div className="relative h-2 rounded-full bg-gradient-to-r from-[#2a2a2a] to-[#4a3d1e]">
        <span
          className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
          style={{ left: `${value}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-caption text-dim">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.kind) {
    case "summary":
      return (
        <section className="rounded-card border border-gold/20 bg-gold-bg p-5">
          <h2 className="font-serif text-section text-heading">{b.title}</h2>
          <Rows rows={b.rows} />
        </section>
      );

    case "section": {
      const rows = <Rows rows={b.rows} wide />;
      return (
        <Card title={b.title} aside={b.aside}>
          <Conclusion text={b.conclusion} />
          {b.chips.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {b.chips.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          )}
          {b.scene && <p className="mt-4 text-body leading-[1.75]">{b.scene}</p>}
          {b.slider && <Slider {...b.slider} />}
          {b.rowsFirst && rows}
          {b.items.length > 0 && (
            <ul className="mt-4 space-y-3">
              {b.items.map((it) => (
                <li key={it.title} className="flex gap-4 rounded-2xl border border-line p-4">
                  <Icon name={it.icon} />
                  <div>
                    <p className="font-bold">{it.title}</p>
                    <p className="mt-1 text-body leading-[1.75] text-sub">{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {b.paths.length > 0 && (
            <ol className="mt-5 divide-y divide-line border-t border-line">
              {b.paths.map((p, i) => (
                <li key={p.title} className="py-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="flex items-center gap-3 font-bold">
                      <span
                        className={`flex size-7 items-center justify-center rounded-full text-small ${
                          i === 0 ? "bg-gold text-background" : "bg-raised text-text"
                        }`}
                      >
                        {i + 1}
                      </span>
                      {p.title}
                    </p>
                    <span className="text-caption text-dim">{p.tag}</span>
                  </div>
                  <div className="mt-3">
                    <Bar value={p.weight} tone={i === 0 ? "now" : "gold"} />
                  </div>
                  <p className="mt-3 text-body leading-[1.75] text-sub">{p.text}</p>
                </li>
              ))}
            </ol>
          )}
          <WhyBox text={b.evidence} />
          {!b.rowsFirst && rows}
          {b.keywords && b.keywords.items.length > 0 && (
            <div className="mt-5">
              <p className="text-small text-dim">{b.keywords.label}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {b.keywords.items.map((k) => (
                  <Chip key={k}>{k}</Chip>
                ))}
              </div>
            </div>
          )}
          <AdviceBox text={b.advice} />
          {b.footer && <p className="mt-4 text-caption text-dim">{b.footer}</p>}
        </Card>
      );
    }

    case "timeline": {
      const water = b.accent === "water";
      return (
        <Card title={b.title} aside={b.aside}>
          <Conclusion text={b.conclusion} />
          <div className="mt-3">
            <TimingChart
              points={b.points}
              accent={water ? "#6e9fe0" : "#f2b544"}
              highlight={water ? "#161d2a" : "#2a2416"}
            />
          </div>
          <ul className="divide-y divide-line border-t border-line">
            {b.years.map((y) => (
              <li key={y.year} className="py-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p>
                    <span className={`font-serif text-section ${y.hot ? "text-gold" : "text-heading"}`}>{y.year}</span>{" "}
                    <span className="text-small text-dim">{y.ganji}</span>
                  </p>
                  <span className={`text-body font-bold ${y.hot ? "text-gold" : "text-sub"}`}>{y.tag}</span>
                </div>
                <p className="mt-2 leading-[1.8]">{y.text}</p>
              </li>
            ))}
          </ul>
          <AdviceBox text={b.advice} />
        </Card>
      );
    }

    case "timerows":
      return (
        <Card title={b.title} aside={b.aside}>
          <Conclusion text={b.conclusion} />
          {b.groups.map((g, gi) => (
            <div key={gi} className="mt-5">
              {g.title && <h3 className="text-body font-bold text-text">{g.title}</h3>}
              <ul className={`${g.title ? "mt-3 " : ""}divide-y divide-line border-t border-line`}>
                {g.items.map((it) => (
                  <li key={it.label} className="flex gap-4 py-4">
                    <div className="w-[6.75rem] shrink-0">
                      <p className={`font-serif text-screen ${it.star ? "text-gold" : "text-heading"}`}>
                        {it.label}
                        {it.star && " ★"}
                      </p>
                      {it.sub && <p className="mt-0.5 text-caption text-dim">{it.sub}</p>}
                    </div>
                    <p className="leading-[1.75]">{it.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <AdviceBox text={b.advice} />
        </Card>
      );

    case "lifetime":
      return (
        <Card title={b.title} aside={b.aside}>
          <Conclusion text={b.conclusion} />
          <ul className="mt-4 space-y-3">
            {b.periods.map((p) => (
              <li
                key={p.startAge}
                className={`rounded-2xl border p-4 ${p.now ? "border-gold/50 bg-gold-bg" : "border-line bg-sunken"}`}
              >
                <div className="flex items-center justify-between gap-2 text-small text-sub">
                  <p>
                    {p.startAge}~{p.endAge}세{" "}
                    <span className={`ml-1 font-serif text-section ${p.now ? "text-gold" : "text-heading"}`}>
                      {p.hanja}
                    </span>{" "}
                    ({p.korean}) · {p.tenGods}
                  </p>
                  {p.now && (
                    <span className="rounded-lg bg-gold px-2.5 py-0.5 text-caption font-bold text-background">지금</span>
                  )}
                </div>
                <div className="mt-2.5">
                  <Bar value={p.score} tone={p.now ? "now" : "dim"} />
                </div>
                <p className="mt-2.5 text-body">{p.text}</p>
              </li>
            ))}
          </ul>
          {b.detail && <p className="mt-5 leading-[1.85]">{b.detail}</p>}
          <AdviceBox text={b.advice} />
        </Card>
      );

    case "faq":
      return (
        <Card title={b.title} aside={b.aside}>
          <ul className="divide-y divide-line border-t border-line">
            {b.qa.map((x) => (
              <li key={x.q} className="py-4">
                <p className="font-bold text-heading">
                  <span className="mr-2 font-serif text-gold">Q.</span>
                  {x.q}
                </p>
                <p className="mt-2 leading-[1.8] text-sub">{x.a}</p>
              </li>
            ))}
          </ul>
        </Card>
      );
  }
}

/** 실제 결과와 샘플이 함께 쓰는 렌더러. isSample이면 배지와 하단 버튼만 달라진다. */
export function ResultView({ doc }: { doc: ResultDoc }) {
  const { reading } = doc;
  const isMoney = doc.product === "money";
  const L = STATUS_LABELS[doc.status ?? "employed"];

  const question = isMoney ? "내 재물, 지금은 어떤 때일까?" : L.question;
  const options: [string, string, string] = isMoney
    ? ["모을 때", "지킬 때", "불릴 때"]
    : [L.verdict.MOVE, L.verdict.PREPARE, L.verdict.STAY];

  return (
    <ResultShell
      title={isMoney ? "금전 · 재물운" : "이직 · 직업운"}
      product={doc.product}
      isSample={doc.isSample}
      profile={doc.profile}
      closingQuote={reading.closingQuote}
      share={{
        product: doc.product,
        title: isMoney ? "금전 · 재물운" : "이직 · 직업운",
        verdictLabel: options[VERDICT_INDEX[reading.verdict]],
        reason: reading.verdictReason,
        keywords: reading.keywords,
      }}
    >
      <VerdictCard
        question={question}
        options={options}
        selected={VERDICT_INDEX[reading.verdict]}
        reason={reading.verdictReason}
        keywords={reading.keywords}
      />
      <ChartCard
        chart={doc.chart}
        aside={reading.chartAside || undefined}
        marks={reading.chartMarks}
        summary={reading.chartNote || undefined}
        elementNames
      />
      <ChartReadingCards chart={doc.chart} product={doc.product} />
      {reading.blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
      {reading.actions.length > 0 && (
        <Card title={`지금 해볼 ${reading.actions.length}가지`} aside="실천">
          <ol className="space-y-4">
            {reading.actions.map((a, i) => (
              <li key={a} className="flex gap-4 leading-[1.7]">
                <span className="font-serif text-section text-gold">{i + 1}</span>
                {a}
              </li>
            ))}
          </ol>
        </Card>
      )}
    </ResultShell>
  );
}
