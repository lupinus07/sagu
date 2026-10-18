import { Chip } from "@/components/ui/Chip";

/** 결론 카드: 질문 → 큰 결론 → 3단 표시 → 한 줄 이유 → 키워드 */
export function VerdictCard({
  question,
  options,
  selected,
  reason,
  keywords,
}: {
  question: string;
  options: [string, string, string];
  selected: 0 | 1 | 2;
  reason: string;
  keywords: string[];
}) {
  return (
    <section className="rounded-card border border-gold/20 bg-gradient-to-b from-[#221e15] to-card p-6 text-center">
      <p className="text-body text-sub">{question}</p>
      <p className="mt-4 font-serif text-hero leading-tight text-gold">{options[selected]}</p>
      <div className="mt-5 grid grid-cols-3 rounded-2xl bg-background p-[5px] text-body">
        {options.map((label, i) => (
          <span
            key={label}
            className={`flex h-[34px] items-center justify-center rounded-xl ${
              i === selected ? "bg-gold font-bold text-background" : "text-dim"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <p className="mt-5 whitespace-pre-line text-lead leading-[1.7] text-heading">{reason}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {keywords.map((k) => (
          <Chip key={k} gold>
            # {k}
          </Chip>
        ))}
      </div>
    </section>
  );
}
