// 사주 원국 규칙 풀이. 계산된 SajuChart를 일 · 직업 중심 문장으로 옮긴다.
// AI는 쓰지 않고, 같은 입력이면 항상 같은 문장이 나온다 (무료 풀이용).
import type { Element, SajuChart } from "./calculateSaju";
import {
  MONEY_DAY_MASTER,
  MONEY_EXCESS,
  MONEY_GROUP_LABEL,
  MONEY_GROUP_MANY,
  MONEY_GROUP_NONE,
  MONEY_LACK,
  MONEY_MONTH_GOD,
} from "./readingMoney";

export type ReadingCard = { title: string; body: string };

const DAY_MASTER: Record<string, { name: string; body: string }> = {
  갑: { name: "甲木(갑목)", body: "곧게 뻗은 큰 나무 같은 사람이에요. 방향이 정해지면 밀고 나가는 힘이 있고, 맡은 일에 책임을 지려는 편이에요. 다만 굽히는 데 서툴러서, 의견이 부딪힐 때 한 걸음 물러서는 연습이 도움이 돼요." },
  을: { name: "乙木(을목)", body: "바람에 휘어도 꺾이지 않는 풀꽃 같은 사람이에요. 사람 사이를 부드럽게 잇고 상황에 맞춰 길을 찾아내는 편이에요. 맞추다 보면 내 몫을 놓칠 수 있어서, 내가 한 일은 분명히 드러내는 게 좋아요." },
  병: { name: "丙火(병화)", body: "하늘의 태양처럼 밝고 환한 사람이에요. 사람들 앞에 서면 분위기를 살리고 일의 시작에 에너지를 불어넣어요. 열정이 빨리 달아오르는 만큼, 꾸준히 이어 갈 장치를 함께 두면 좋아요." },
  정: { name: "丁火(정화)", body: "어둠을 밝히는 촛불 같은 사람이에요. 한 가지에 깊이 집중하고 섬세하게 다듬는 데 강해요. 속으로 오래 품는 편이라, 고민은 혼자 안고 있지 말고 믿을 만한 사람과 나누면 가벼워져요." },
  무: { name: "戊土(무토)", body: "듬직한 큰 산 같은 사람이에요. 흔들리지 않고 중심을 잡아 주어서 조직에서 믿고 맡기는 역할을 자주 맡아요. 변화에는 신중한 편이라, 움직일 때는 근거를 충분히 쌓아야 마음이 편해요." },
  기: { name: "己土(기토)", body: "곡식을 키우는 논밭 같은 사람이에요. 사람과 일을 살뜰하게 챙기고 꼼꼼하게 길러 내는 데 재능이 있어요. 남을 먼저 챙기다 내 일이 밀릴 수 있으니, 나를 위한 시간과 기준도 함께 지켜 주세요." },
  경: { name: "庚金(경금)", body: "단단한 바위나 쇠 같은 사람이에요. 결단이 빠르고 맺고 끊음이 분명해서 위기에 강해요. 말이 직선적이라 차갑게 들릴 수 있으니, 같은 말도 한 번 부드럽게 바꿔 보면 좋아요." },
  신: { name: "辛金(신금)", body: "잘 다듬어진 보석 같은 사람이에요. 감각이 섬세하고 완성도에 대한 기준이 높아요. 인정받고 싶은 마음이 커서 평가에 예민할 수 있으니, 과정에서 얻은 것도 함께 봐 주세요." },
  임: { name: "壬水(임수)", body: "넓게 흐르는 강이나 바다 같은 사람이에요. 시야가 넓고 변화에 잘 적응해서 새로운 환경에서도 길을 찾아요. 한곳에 묶이는 느낌이 들면 답답할 수 있어서, 자율이 주어지는 일이 잘 맞아요." },
  계: { name: "癸水(계수)", body: "촉촉하게 내리는 이슬비 같은 사람이에요. 눈치가 빠르고 흐름을 읽는 감각이 좋아요. 생각이 많아 시작이 늦어질 수 있으니, 작게라도 먼저 해 보는 쪽이 마음을 가볍게 해요." },
};

// 월지의 십신: 사회 · 일터에서 받는 기운
const MONTH_GOD: Record<string, string> = {
  비견: "일터에서는 대등한 동료와 함께할 때 힘이 나요. 내 방식을 지키며 일하는 걸 좋아해서, 협업에서는 역할을 분명히 나누면 편해요.",
  겁재: "일터에서는 경쟁과 자극이 있을 때 에너지가 올라요. 승부욕이 일을 밀어 주지만, 사소한 비교에 마음을 쓰지 않도록 기준을 내 안에 두면 좋아요.",
  식신: "일터에서는 내 손으로 결과물을 만들어 내는 일이 잘 맞아요. 여유 있게 꾸준히 쌓는 편이라, 급하게 몰아치는 환경보다 내 리듬이 허락되는 곳이 좋아요.",
  상관: "일터에서는 새로운 아이디어와 표현이 빛나요. 틀에 박힌 방식이 답답할 수 있어서, 내 의견을 낼 수 있는 자리에서 가장 편하게 일해요.",
  편재: "일터에서는 사람과 기회를 넓게 다루는 일이 잘 맞아요. 움직임이 많고 변화가 있는 환경에서 감각이 살아나요.",
  정재: "일터에서는 안정적으로 쌓아 가는 일이 잘 맞아요. 성실하게 신뢰를 얻는 편이라 체계가 잡힌 조직에서 힘을 발휘해요.",
  편관: "일터에서는 책임이 무겁거나 긴장이 있는 자리에 놓이기 쉬워요. 압박 속에서 성장하지만, 쉬는 시간을 따로 지켜야 오래 갈 수 있어요.",
  정관: "일터에서는 규칙과 역할이 분명한 곳에서 인정받기 쉬워요. 반듯하고 책임감 있게 일해서 조직의 믿음을 얻는 편이에요.",
  편인: "일터에서는 남다른 관점으로 파고드는 일이 잘 맞아요. 한 분야를 깊게 연구하거나 독특한 전문성을 쌓을 때 빛나요.",
  정인: "일터에서는 배우고 익힌 것을 바탕으로 인정받기 쉬워요. 좋은 선배나 멘토를 만나면 크게 성장하는 편이에요.",
};

type Group = "비겁" | "식상" | "재성" | "관성" | "인성";
const GROUP_OF: Record<string, Group> = {
  비견: "비겁", 겁재: "비겁", 식신: "식상", 상관: "식상",
  편재: "재성", 정재: "재성", 편관: "관성", 정관: "관성", 편인: "인성", 정인: "인성",
};
const GROUP_LABEL: Record<Group, string> = {
  비겁: "비겁(比劫, 나와 같은 기운)",
  식상: "식상(食傷, 표현하고 만드는 기운)",
  재성: "재성(財星, 현실과 성과의 기운)",
  관성: "관성(官星, 책임과 규율의 기운)",
  인성: "인성(印星, 배움과 보호의 기운)",
};
const GROUP_MANY: Record<Group, string> = {
  비겁: "주관이 뚜렷하고 독립심이 강해요. 혼자 해내려는 마음이 커서, 도움을 청하는 연습이 일을 훨씬 수월하게 해요.",
  식상: "표현력과 아이디어가 풍부해요. 생각을 밖으로 꺼내 결과물로 만들 때 힘이 나고, 갇혀 있으면 답답해지기 쉬워요.",
  재성: "현실 감각과 성과에 대한 관심이 커요. 눈에 보이는 결과가 동기가 되지만, 숫자에만 끌려가지 않도록 일의 의미도 함께 챙겨 주세요.",
  관성: "책임감과 압박을 함께 느끼기 쉬워요. 맡은 일을 해내는 힘이 크지만, 스스로를 몰아붙이지 않도록 쉬어 가는 규칙이 필요해요.",
  인성: "배움과 준비에 마음이 많이 가요. 충분히 알아야 움직이는 편이라, 어느 정도 준비되면 먼저 해 보는 용기가 길을 열어 줘요.",
};
const GROUP_NONE: Record<Group, string> = {
  비겁: "사주에 나를 지탱하는 비겁이 겉으로 보이지 않아요. 내 기준이 흔들릴 수 있으니, 지켜야 할 원칙을 몇 가지 적어 두면 든든해요.",
  식상: "사주에 식상이 겉으로 뚜렷하지 않아요. 표현이 담담한 편이라, 내가 한 일과 생각을 말로 드러내는 습관이 도움이 돼요.",
  재성: "사주에 재성이 겉으로 뚜렷하지 않아요. 성과를 챙기는 데 느긋한 편이라, 목표와 숫자를 작게라도 정해 두면 좋아요.",
  관성: "사주에 관성이 겉으로 뚜렷하지 않아요. 조직의 틀보다 자율이 편한 편이라, 규칙이 느슨한 환경에서 더 편하게 일할 수 있어요.",
  인성: "사주에 인성이 겉으로 뚜렷하지 않아요. 배움을 챙기는 시간을 따로 만들어 두면, 흔들릴 때 중심이 되어 줘요.",
};

const ELEMENT_KO: Record<Element, string> = { 木: "나무", 火: "불", 土: "흙", 金: "쇠", 水: "물" };
const EXCESS: Record<Element, string> = {
  木: "나무 기운이 많아 성장하고 확장하려는 마음이 커요. 벌여 놓은 일이 늘어나지 않게 우선순위를 정해 보세요.",
  火: "불 기운이 많아 열정이 빨리 붙어요. 시작의 힘이 큰 만큼, 중간에 쉬어 가며 오래 가는 리듬을 만들어 보세요.",
  土: "흙 기운이 많아 신중하고 안정을 중요하게 여겨요. 움직임이 느려 보일 수 있으니 작은 시도부터 먼저 해 보면 좋아요.",
  金: "쇠 기운이 많아 기준이 분명하고 결단이 빨라요. 판단이 칼 같을 때가 있어서, 다른 의견을 한 번 더 들어 보면 좋아요.",
  水: "물 기운이 많아 생각이 깊고 유연해요. 생각이 길어지면 실행이 늦어지니, 기한을 정해 두면 도움이 돼요.",
};
const LACK: Record<Element, string> = {
  木: "나무 기운이 적어 새로 시작하는 힘이 약할 수 있어요. 아주 작은 도전을 일정에 넣어 보세요.",
  火: "불 기운이 적어 표현이 담담한 편이에요. 내 성과를 드러내는 일을 의식해서 해 보세요.",
  土: "흙 기운이 적어 한곳에 뿌리내리는 데 시간이 걸릴 수 있어요. 안정감을 주는 루틴이 도움이 돼요.",
  金: "쇠 기운이 적어 맺고 끊는 힘이 약할 수 있어요. 일의 기준과 마감을 정해 두면 좋아요.",
  水: "물 기운이 적어 쉬어 가며 유연하게 흘려보내는 게 서툴 수 있어요. 충분히 쉬는 시간을 일정에 넣어 주세요.",
};

function groupCounts(chart: SajuChart) {
  const counts: Record<Group, number> = { 비겁: 0, 식상: 0, 재성: 0, 관성: 0, 인성: 0 };
  for (const p of [chart.year, chart.month, chart.day, chart.hour]) {
    if (!p) continue;
    for (const god of [p.tenGod.stem, p.tenGod.branch]) {
      const g = GROUP_OF[god];
      if (g) counts[g] += 1;
    }
  }
  return counts;
}

export type ReadingProduct = "career" | "money";

type Texts = {
  dayTitle: (name: string) => string;
  day: Record<string, string>;
  monthTitle: string;
  monthLead: string;
  month: Record<string, string>;
  groupTitle: string;
  groupLabel: Record<Group, string>;
  groupMany: Record<Group, string>;
  groupNone: Record<Group, string>;
  elementTitle: string;
  excess: Record<Element, string>;
  lack: Record<Element, string>;
  balanced: string;
};

const TEXTS: Record<ReadingProduct, Texts> = {
  career: {
    dayTitle: (n) => `${n} 일간, 나의 일하는 성향`,
    day: Object.fromEntries(Object.entries(DAY_MASTER).map(([k, v]) => [k, v.body])),
    monthTitle: "일터에서 받는 기운",
    monthLead: "사회생활을 뜻하는 월지의 기운은",
    month: MONTH_GOD,
    groupTitle: "십신으로 보는 일의 방식",
    groupLabel: GROUP_LABEL,
    groupMany: GROUP_MANY,
    groupNone: GROUP_NONE,
    elementTitle: "오행으로 보는 일의 균형",
    excess: EXCESS,
    lack: LACK,
    balanced: "상황에 따라 유연하게 힘을 쓸 수 있어요.",
  },
  money: {
    dayTitle: (n) => `${n} 일간, 나의 돈 성향`,
    day: MONEY_DAY_MASTER,
    monthTitle: "돈이 오가는 환경",
    monthLead: "사회적 환경을 뜻하는 월지의 기운은",
    month: MONEY_MONTH_GOD,
    groupTitle: "십신으로 보는 돈의 방식",
    groupLabel: MONEY_GROUP_LABEL,
    groupMany: MONEY_GROUP_MANY,
    groupNone: MONEY_GROUP_NONE,
    elementTitle: "오행으로 보는 돈의 균형",
    excess: MONEY_EXCESS,
    lack: MONEY_LACK,
    balanced: "상황에 따라 돈을 유연하게 다룰 수 있어요.",
  },
};

/** 사주 원국을 상품(이직 · 직업운 / 금전 · 재물운)에 맞는 카드로 풀어 쓴다. */
export function chartReading(chart: SajuChart, product: ReadingProduct = "career"): ReadingCard[] {
  const t = TEXTS[product];
  const cards: ReadingCard[] = [];
  const dm = DAY_MASTER[chart.day.stem];
  if (dm && t.day[chart.day.stem]) cards.push({ title: t.dayTitle(dm.name), body: t.day[chart.day.stem] });

  const monthGod = chart.month.tenGod.branch;
  if (t.month[monthGod]) {
    cards.push({ title: t.monthTitle, body: `${t.monthLead} ${monthGod}이에요. ${t.month[monthGod]}` });
  }

  const counts = groupCounts(chart);
  const groups = Object.keys(counts) as Group[];
  const top = groups.reduce((a, b) => (counts[b] > counts[a] ? b : a));
  const none = groups.filter((g) => counts[g] === 0);
  const parts: string[] = [];
  if (counts[top] >= 3) parts.push(`${t.groupLabel[top]}이 ${counts[top]}개로 많은 편이에요. ${t.groupMany[top]}`);
  for (const g of none) parts.push(t.groupNone[g]);
  cards.push({
    title: t.groupTitle,
    body: parts.length
      ? parts.join(" ")
      : "다섯 가지 기운이 한쪽으로 크게 치우치지 않고 고루 있는 편이에요. 상황에 따라 유연하게 바꿔 가며 쓸 수 있어요.",
  });

  const els = Object.keys(chart.elementCounts) as Element[];
  const topEl = els.reduce((a, b) => (chart.elementCounts[b] > chart.elementCounts[a] ? b : a));
  const lacking = els.filter((e) => chart.elementCounts[e] === 0);
  const elParts: string[] = [];
  if (chart.elementCounts[topEl] >= 3) elParts.push(t.excess[topEl]);
  for (const e of lacking) elParts.push(t.lack[e]);
  cards.push({
    title: t.elementTitle,
    body: elParts.length
      ? elParts.join(" ")
      : `${ELEMENT_KO[topEl]} 기운이 조금 더 도드라지지만 다섯 기운이 고르게 있는 편이에요. ${t.balanced}`,
  });
  return cards;
}
