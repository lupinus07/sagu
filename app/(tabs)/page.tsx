import Link from "next/link";
import { HeroEmblem } from "@/components/home/HeroEmblem";
import { DONATION_PER_READING } from "@/lib/donation";

type Product = {
  id: string;
  title: string;
  desc: string;
  tags: string;
  open: boolean;
};

const PRODUCTS: Product[] = [
  { id: "career", title: "이직 · 직업운", desc: "지금 움직여도 괜찮을까?", tags: "진로 · 직장", open: true },
  { id: "money", title: "금전 · 재물운", desc: "내 재물의 흐름은 어떨까?", tags: "재성 · 자산 운용", open: true },
  { id: "newyear", title: "2027 신년운세", desc: "다가올 한 해를 미리 읽다", tags: "세운 분석 · 사계절", open: false },
  { id: "self", title: "나의 결", desc: "나라는 사람을 깊이 이해하는 사주 북", tags: "사주원국표 · 십신", open: false },
];

function ProductCard({ p }: { p: Product }) {
  const cls = "relative block min-h-[132px] rounded-2xl border border-line bg-card p-4";
  const head = (
    <>
      <h3 className="font-serif text-conclusion text-heading">{p.title}</h3>
      <p className="mt-1.5 min-h-10 text-small leading-snug text-sub">{p.desc}</p>
    </>
  );
  if (!p.open) {
    return (
      <div className={cls} aria-disabled="true">
        {head}
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="text-caption text-dim">{p.tags}</span>
          <span className="text-micro text-dim">준비 중</span>
        </div>
      </div>
    );
  }
  // 카드 전체는 입력 화면 링크(after 로 덮음), 샘플 보기만 위에 따로 눌린다
  return (
    <div className={`${cls} active:border-gold/40`}>
      <Link href={`/input/${p.id}`} className="block after:absolute after:inset-0 after:rounded-2xl">
        {head}
      </Link>
      <div className="mt-4 flex items-center border-t border-line pt-3 text-caption text-dim">
        <span>{p.tags}</span>
        <span aria-hidden="true" className="mx-2">
          |
        </span>
        <Link
          href={`/sample/${p.id}`}
          className="relative z-10 flex min-h-11 items-center text-gold underline underline-offset-4"
        >
          샘플 보기
        </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="flex h-14 items-center border-b border-[#1c1c1c] px-5">
        <span className="font-serif text-h2 text-heading">결</span>
      </header>

      <main>
        <section className="px-6 pb-10 pt-8 text-center">
          <HeroEmblem />
          <h1 className="mt-7 font-serif text-h2 text-heading">내 삶의 결을 읽다</h1>
          <p className="mt-3 text-body text-gold">나를 이해하고, 삶의 흐름을 읽는 시간</p>
          <div className="mx-auto my-5 h-px w-8 bg-gold/50" />
          <p className="text-small leading-[1.9] text-sub">
            사주는 정해진 운명이 아니라, 내가 타고난 고유한 결입니다. 거스르지 않고 내 흐름을 바르게 마주할 때
            비로소 삶은 깊어집니다.
          </p>
          <Link
            href="/notices"
            className="mx-auto mt-6 block max-w-[330px] rounded-2xl border border-gold/25 bg-gold-bg px-4 py-3.5 text-small leading-[1.7] text-gold"
          >
            내 운을 보면서, 누군가의 운도 조금 밝혀요
            <span className="block text-caption text-sub">
              풀이 1건마다 {DONATION_PER_READING}원을 기부해요 · 자세히 보기 →
            </span>
          </Link>
        </section>

        <section className="px-5 pb-8">
          <p className="text-caption font-bold tracking-[0.14em] text-gold">DEEP EXPLORATION</p>
          <h2 className="mt-2 font-serif text-section text-heading">삶의 흐름을 짚어보는 깊은 탐색</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
          <Link
            href="/sample/career"
            className="mt-4 flex min-h-11 items-center justify-center text-small text-gold underline underline-offset-4"
          >
            어떤 풀이를 받나요? 샘플 보기 →
          </Link>
        </section>

        <section className="px-5 pb-10">
          <figure className="rounded-xl border-l-2 border-gold bg-card px-5 py-5">
            <figcaption className="flex items-center gap-2 text-small font-bold text-gold">
              <span className="size-1.5 rounded-full bg-gold" />
              안내의 말
            </figcaption>
            <blockquote className="mt-3 text-body leading-[1.9] text-heading">
              &ldquo;마음이 흔들릴 때는 바람을 보지 말고, 나무의 밑동을 보아야 합니다. 당신이 태어난 날의 하늘과 땅의
              온도는 이미 당신 안에 든든한 밑동이 되어 서 있습니다.&rdquo;
            </blockquote>
            <p className="mt-3 text-right text-caption text-dim">— 결, 사주 명상록 중</p>
          </figure>
        </section>
      </main>
    </>
  );
}
