import career from "@/data/samples/career.json";
import money from "@/data/samples/money.json";
import type { SajuChart } from "@/lib/saju/calculateSaju";
import {
  halfYearPoints,
  luckFacts,
  monthFact,
  yearFact,
  yearPoints,
  type LuckFact,
  type MonthFact,
  type Product,
  type ScorePoint,
  type YearFact,
} from "@/lib/saju/relations";
import type { Status } from "./schemas";

/** 시스템 프롬프트(고정, 프롬프트 캐싱 대상). 해석 톤 · 규칙 · 출력 형식, 그리고 모양 예시. */
const RULES = `당신은 사주명리 해석가입니다. 서비스 이름은 "결"이고, 사용자의 삶의 결을 따뜻하고 차분하게 읽어 줍니다.
이 서비스는 "계산은 코드, 해석은 AI"로 만들어집니다. 당신은 코드가 계산해 넘긴 사실(JSON)을 바탕으로 해석 문장만 씁니다.

## 절대 규칙
1. 사주팔자, 십신, 오행 개수, 대운, 세운, 월운, 합충, 점수는 사용자 메시지의 "사실" 에 있는 것만 씁니다. 간지·연도·월·나이·점수를 새로 만들거나 계산하지 마세요. 사실에 없는 합충을 지어내지 마세요.
2. 한자는 항상 한자(한글) 형태로 씁니다. 예) 己土(기토), 子午沖(자오충), 辛亥(신해) 대운.
3. 해석은 단정 대신 흐름 중심으로 씁니다. "~할 수 있어요", "~하기 쉬워요", "~하는 해예요" 같은 어조를 쓰고, 공포를 조장하거나 불행을 단정하는 표현은 금지입니다.
4. 의료, 법률, 투자에 대한 확정적 표현은 금지입니다. 재물·투자 이야기는 "참고용 흐름"으로만 말하고, 특정 종목이나 수익을 약속하지 마세요.
5. 문체는 "~예요/~해요" 체입니다. 일상 장면으로 공감하고(scene), 사주 근거(evidence)를 설명하고, 실천 조언(advice)으로 끝맺습니다.
6. 카드 한 장의 본문은 300~500자 안팎으로 씁니다. 같은 말을 카드마다 반복하지 말고, 카드마다 이 사람만의 구체적인 장면과 근거를 담으세요.
7. 모든 문장은 아래 "사실"의 사주에서 나와야 합니다. 아래 "모양 예시" 안의 이름, 사주, 연도, 점수, 문장은 다른 사람의 것이니 그대로 옮기지 마세요. 모양(블록 종류, 필드, 분량, 톤)만 참고합니다.
8. 태어난 시간을 모르면(시주 없음) 삼주로 풀이하고, 시주가 필요한 해석은 하지 않습니다. 그 사실을 첫 요약이나 원국 설명에 한 줄로 밝혀 주세요.

## 출력 형식
- 오직 JSON 객체 하나만 출력합니다. 설명, 머리말, 마크다운 코드펜스(\`\`\`)는 쓰지 않습니다.
- 객체의 최상위 필드와 blocks 배열의 순서·kind·필드 구성은 "모양 예시"와 같게 합니다. 블록 수와 순서를 바꾸지 마세요.
- 줄바꿈이 필요한 한 줄 결론 등은 문자열 안에 \\n 을 씁니다.
- 필드를 비워 두지 마세요. 값이 없는 선택 필드(slider, keywords, items, paths 등)는 예시에 있는 블록에서만 채우고, 예시에 없으면 생략합니다.
- timeline 블록: 사실의 "years" 개수와 순서에 맞춰 years 배열을 채웁니다. year, ganji, hot, points 는 코드가 덮어쓰므로 사실의 값을 그대로 적되, tag 와 text 는 당신이 씁니다. 점수가 가장 높은 구간이 해석의 중심이 되게 하세요.
- lifetime 블록: periods 는 사실의 "luck" 과 같은 개수·순서로, text 에는 그 시기를 한 줄로 요약해 씁니다. 나머지 필드는 사실의 값을 그대로 적습니다.
- timerows 의 월별 흐름: 사실의 "months" 에서 의미 있는 달을 골라 label 은 "10월", sub 는 사실의 ganjiLabel 을 그대로 씁니다. 강한 달에는 star: true 를 붙입니다. 사실에 없는 달은 쓰지 않습니다.
- verdict: 이직은 MOVE / PREPARE / STAY 중, 재물은 GATHER / GUARD / GROW 중 하나. 사실의 점수와 현재 시점에 맞게 고릅니다.
- verdictReason 은 두 줄(\\n 으로 구분), 각 줄 30자 안팎으로 씁니다.`;

const CAREER_LABELS = `## 상황(status)별 라벨 (이직·직업운)
status 에 따라 아래처럼 제목, 결론 질문, 3단 표시를 바꿉니다. 모양 예시는 재직 중(employed) 기준입니다.
- employed(재직 중): 결론 질문 "지금 움직여도 괜찮을까?", 3단 "움직일 때 / 준비할 때 / 머물 때", 타이밍 "이직 타이밍", 조직 "상사 · 조직 궁합", 독립 "독립 · 창업 기운", 재물 "재물운과 직업의 결"
- seeking(취업 준비 중): 결론 질문 "언제쯤 길이 열릴까?", 3단 "열리는 때 / 다지는 때 / 넓히는 때", 타이밍 "취업 타이밍", 조직 "잘 맞는 첫 직장 · 직무", 독립 "나에게 맞는 일의 방향", 재물 "첫 연봉과 재물 흐름"
- resting(쉬는 중): 복귀 타이밍을 중심으로 같은 방식으로 바꿉니다.
- freelance(프리랜서): 정규직 전환과 독립 유지 중심으로 같은 방식으로 바꿉니다.
verdict 는 MOVE / PREPARE / STAY 를 쓰되, 위 라벨의 의미에 맞게 해석합니다.`;

const exemplar = (p: Product) => {
  const reading = (p === "career" ? career : money).reading;
  return JSON.stringify(reading);
};

/** 모양 예시의 blocks 구성(kind 순서). 생성 결과도 정확히 이 순서와 개수여야 한다. */
const exampleBlocks = (p: Product) => (p === "career" ? career : money).reading.blocks;
export const blockKinds = (p: Product): string[] => exampleBlocks(p).map((b) => b.kind);

export function systemPrompt(product: Product): string {
  return [
    RULES,
    product === "career" ? CAREER_LABELS : "",
    `## 모양 예시 (${product === "career" ? "이직 · 직업운, 재직 중" : "금전 · 재물운"}) — 다른 사람의 사주이니 내용은 따라 하지 마세요\n${exemplar(product)}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

// ---- 사실(JSON) ----

const pillarText = (p: SajuChart["year"]) => `${p.hanja}(${p.korean}) 천간 ${p.tenGod.stem} · 지지 ${p.tenGod.branch}`;

export type Facts = {
  today: string;
  product: Product;
  status?: Status;
  who: { name: string; gender: string; birth: string };
  chart: Record<string, unknown>;
  years: YearFact[];
  months: MonthFact[];
  luck: LuckFact[];
  points: ScorePoint[];
};

export type FactsInput = {
  chart: SajuChart;
  product: Product;
  status?: Status;
  name: string;
  gender: "female" | "male";
  birth: string;
  today: Date;
};

export function buildFacts(i: FactsInput): Facts {
  const { chart, product, today } = i;
  const y = today.getFullYear();
  const yearCount = product === "career" ? 3 : 5;
  const years = Array.from({ length: yearCount }, (_, k) => yearFact(chart, y + k, product));

  const luckNow = chart.luck.current;
  const luck = luckNow
    ? {
        stem: "갑을병정무기경신임계".indexOf(luckNow.korean[0]),
        branch: "자축인묘진사오미신유술해".indexOf(luckNow.korean[1]),
      }
    : null;
  const months = Array.from({ length: 15 }, (_, k) => {
    const d = new Date(y, today.getMonth() + k, 1);
    return monthFact(chart, d.getFullYear(), d.getMonth() + 1, product, luck);
  });

  const points = product === "career" ? halfYearPoints(chart, today, product) : yearPoints(chart, today, product);

  return {
    today: `${y}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`,
    product,
    status: i.status,
    who: { name: i.name, gender: i.gender === "female" ? "여성" : "남성", birth: i.birth },
    chart: {
      일간: `${chart.day.hanja[0]}${chart.day.stemElement}(${chart.day.korean[0]})`,
      년주: pillarText(chart.year),
      월주: pillarText(chart.month),
      일주: pillarText(chart.day),
      시주: chart.hour ? pillarText(chart.hour) : "모름(삼주로 풀이)",
      오행개수: chart.elementCounts,
      공망: chart.voidBranches,
      대운: {
        방향: chart.luck.forward ? "순행" : "역행",
        시작나이: chart.luck.startAge,
        현재: chart.luck.current
          ? `${chart.luck.current.hanja}(${chart.luck.current.korean}) ${chart.luck.current.startAge}~${chart.luck.current.endAge}세`
          : "아직 대운 전",
      },
    },
    years,
    months,
    luck: luckFacts(chart, product),
    points,
  };
}

/** blocks 를 나눠 생성할 때 한 호출이 맡는 구간 (앞 파트는 최상위 필드도 쓴다) */
export type Part = { from: number; to: number; top: boolean };

export function splitParts(product: Product): Part[] {
  const n = exampleBlocks(product).length;
  const mid = Math.ceil(n / 2);
  return [
    { from: 0, to: mid, top: true },
    { from: mid, to: n, top: false },
  ];
}

export function userPrompt(f: Facts, part: Part): string {
  const head =
    f.product === "career"
      ? `이직 · 직업운 풀이를 써 주세요. 상황(status)은 ${f.status ?? "employed"} 입니다.`
      : "금전 · 재물운 풀이를 써 주세요.";
  const all = exampleBlocks(f.product);
  const mine = all.slice(part.from, part.to);
  const plan = mine
    .map((b, i) => `${part.from + i + 1}.${b.kind}("${b.title}")`)
    .join(" ");
  // 풀이는 여러 번에 나눠 쓰고 코드가 합친다. 이 호출은 정해진 구간의 카드만 쓴다.
  const scope = part.top
    ? `이번 호출에서는 모양 예시의 최상위 필드(verdict, verdictReason, keywords, chartNote, chartMarks, chartAside, actions, closingQuote)와 blocks 의 1~${part.to}번째 카드만 씁니다. blocks 에는 아래 ${mine.length}개 카드만 이 순서대로 넣으세요.`
    : `이번 호출에서는 최상위 필드 없이 {"blocks":[...]} 만 출력합니다. blocks 에는 전체 ${all.length}개 중 ${part.from + 1}~${part.to}번째 카드 아래 ${mine.length}개만 이 순서대로 넣으세요.`;
  return `${head}
아래 "사실"만 근거로 쓰고, 모양 예시와 같은 모양의 JSON 한 개만 출력하세요.
${scope}
카드: ${plan}
(제목은 상황과 사주에 맞게 바꿔도 되지만 카드 수와 kind 와 순서는 그대로, 예시의 카드를 하나도 빼거나 합치지 마세요.)

사실:
${JSON.stringify(f)}`;
}
