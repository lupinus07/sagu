"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LoginSheet } from "@/components/login/LoginSheet";
import { CheckIcon, CloseIcon } from "@/components/ui/Icons";
import type { Status } from "@/lib/ai/schemas";
import type { InputValue, Product } from "@/lib/demoStore";
import { saveDraft } from "@/lib/draft";
import { deleteSavedInput, listSavedInputs, savedLabel, type SavedInput } from "@/lib/sajuInputs";
import { createClient } from "@/lib/supabase/client";

const STATUSES: { id: Status; label: string }[] = [
  { id: "employed", label: "재직 중" },
  { id: "seeking", label: "취업 준비 중" },
  { id: "resting", label: "쉬는 중" },
  { id: "freelance", label: "프리랜서 · 자영업" },
];

const CALENDARS = [
  { id: "solar", label: "양력" },
  { id: "lunar", label: "음력" },
  { id: "leap", label: "음력 윤달" },
] as const;

const CHECKLIST: Record<Product, string[]> = {
  career: [
    "지금 움직여도 될지, 한 줄 결론",
    "내 일의 결 · 상사와 조직 궁합",
    "3년 이직 타이밍 그래프",
    "독립 기운 · 재물 흐름",
    "지금 해볼 3가지",
  ],
  money: [
    "내 재물 그릇과 돈의 성격",
    "돈이 들어오는 길 · 새는 구멍",
    "나와 맞는 재테크",
    "평생 재물 흐름(대운)과 5년 그래프",
    "지금 해볼 3가지",
  ],
};

/** 12시진. 경계가 :30이라 시진의 한가운데 시각(자시는 00:30)을 계산용 대표 시각으로 쓴다. */
const SHIJIN = [
  ["자시", "子", "23:30~01:29"],
  ["축시", "丑", "01:30~03:29"],
  ["인시", "寅", "03:30~05:29"],
  ["묘시", "卯", "05:30~07:29"],
  ["진시", "辰", "07:30~09:29"],
  ["사시", "巳", "09:30~11:29"],
  ["오시", "午", "11:30~13:29"],
  ["미시", "未", "13:30~15:29"],
  ["신시", "申", "15:30~17:29"],
  ["유시", "酉", "17:30~19:29"],
  ["술시", "戌", "19:30~21:29"],
  ["해시", "亥", "21:30~23:29"],
].map(([name, hanja, range], i) => ({
  value: String(i),
  label: `${name}(${hanja}時) ${range}`,
  hour: i * 2,
  minute: 30,
}));

const THIS_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: THIS_YEAR - 1930 + 1 }, (_, i) => THIS_YEAR - i);

const selectCls =
  "h-11 w-full rounded-btn border border-line bg-card px-3 text-body text-text outline-none focus:border-gold";

async function isLoggedIn() {
  try {
    const { data } = await createClient().auth.getUser();
    return !!data.user;
  } catch {
    return false;
  }
}

export function InputForm({ product }: { product: Product }) {
  const router = useRouter();
  const draftNotice = useSearchParams().get("notice") === "draft";
  const [sheet, setSheet] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<Status | null>("employed");
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"female" | "male" | null>(null);
  const [cal, setCal] = useState<(typeof CALENDARS)[number]["id"]>("solar");
  const [year, setYear] = useState(1990);
  const [month, setMonth] = useState(5);
  const [day, setDay] = useState(15);
  const [time, setTime] = useState("unknown");
  const [yaJasi, setYaJasi] = useState(false);

  // 이전에 입력한 사주 (로그인했고 한 번이라도 결제했을 때만 있다)
  const [saved, setSaved] = useState<SavedInput[]>([]);
  const [pickedId, setPickedId] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    listSavedInputs().then((rows) => alive && setSaved(rows));
    return () => {
      alive = false;
    };
  }, []);

  function pick(s: SavedInput) {
    setPickedId(s.id);
    setName(s.name);
    setGender(s.gender);
    setCal(s.is_leap_month ? "leap" : s.calendar);
    setYear(s.year);
    setMonth(s.month);
    setDay(s.day);
    // 시진 값: 모름 → unknown, 자시(23시 · 0시) → "0", 나머지는 시각 ÷ 2
    setTime(s.hour === null ? "unknown" : String(s.hour === 23 ? 0 : Math.floor(s.hour / 2)));
    setYaJasi(s.ya_jasi);
  }

  async function removeSaved(id: string) {
    if (await deleteSavedInput(id)) {
      setSaved((all) => all.filter((x) => x.id !== id));
      if (pickedId === id) setPickedId(null);
    }
  }

  const maxDay = cal === "solar" ? new Date(year, month, 0).getDate() : 30;
  const safeDay = Math.min(day, maxDay);
  // 상황 선택은 이직 · 직업운에서만 필요
  const needStatus = product === "career";
  const valid = (!needStatus || status !== null) && gender !== null;

  async function submit() {
    if (!valid || busy) return;
    const sj = SHIJIN.find((s) => s.value === time);
    // 야자시 적용 시 자시는 23:30~24:00 쪽(당일 일간 기준)으로 계산
    const [h, m] = !sj ? [null, 0] : sj.value === "0" && yaJasi ? [23, 45] : [sj.hour, sj.minute];
    const value: InputValue = {
      status: status ?? "employed",
      name,
      gender,
      calendar: cal === "solar" ? "solar" : "lunar",
      isLeapMonth: cal === "leap",
      year,
      month,
      day: safeDay,
      hour: h,
      minute: m ?? 0,
      yaJasi,
    };
    // 로그인 · 약관 동의를 거쳐 돌아와도 이어지도록 입력값을 먼저 보관한다 (1시간)
    saveDraft(product, value);
    setBusy(true);
    const loggedIn = await isLoggedIn();
    setBusy(false);
    if (loggedIn) router.push("/checkout");
    else setSheet(true);
  }

  return (
    <div className="space-y-6 px-5 pb-6 pt-5">
      {draftNotice && (
        <p role="status" className="rounded-btn bg-gold-bg2 px-4 py-3 text-small leading-[1.6] text-gold">
          저장해 둔 입력 정보가 없거나 1시간이 지나 지워졌어요. 다시 입력해 주세요.
        </p>
      )}
      {needStatus && (
        <fieldset>
          <legend className="mb-2.5 text-body font-bold">
            지금 상황 <span className="text-gold">*</span>
            <span className="ml-2 rounded-md bg-gold px-2 py-0.5 text-caption font-bold text-background">NEW</span>
          </legend>
          <div className="grid grid-cols-2 gap-2.5">
            {STATUSES.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={status === s.id}
                onClick={() => setStatus(s.id)}
                className={`h-12 rounded-btn border text-body ${
                  status === s.id
                    ? "border-gold bg-gold-bg font-bold text-gold"
                    : "border-line bg-card text-sub"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {saved.length > 0 && (
        <div>
          <p className="mb-2.5 text-body font-bold">이전에 입력한 사주</p>
          <ul className="flex flex-wrap gap-2">
            {saved.map((s) => (
              <li
                key={s.id}
                className={`flex items-center rounded-full border ${
                  pickedId === s.id ? "border-gold bg-gold-bg text-gold" : "border-line bg-card text-sub"
                }`}
              >
                <button type="button" onClick={() => pick(s)} className="min-h-11 pl-4 pr-1 text-body">
                  {savedLabel(s)}
                </button>
                <button
                  type="button"
                  aria-label={`${savedLabel(s)} 삭제`}
                  onClick={() => removeSaved(s.id)}
                  className="flex size-11 items-center justify-center text-dim"
                >
                  <CloseIcon className="size-4" />
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-caption text-dim">누르면 아래 칸이 채워져요</p>
        </div>
      )}

      <label className="block">
        <span className="mb-2.5 block text-body font-bold">
          성명 <span className="text-small font-normal text-sub">(선택 · 닉네임 가능)</span>
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          placeholder="성함을 입력해 주세요"
          className="h-[50px] w-full rounded-btn border border-line bg-card px-4 text-body outline-none placeholder:text-dim focus:border-gold"
        />
      </label>

      <fieldset>
        <legend className="mb-2.5 text-body font-bold">
          성별 <span className="text-gold">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2.5">
          {(
            [
              ["female", "여성"],
              ["male", "남성"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={gender === id}
              onClick={() => setGender(id)}
              className={`h-11 rounded-btn border text-body ${
                gender === id ? "border-gold bg-gold-bg font-bold text-gold" : "border-line bg-card text-sub"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2.5 text-body font-bold">
          생년월일 <span className="text-gold">*</span>
        </legend>
        <div className="grid grid-cols-3 rounded-btn bg-card p-1">
          {CALENDARS.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={cal === c.id}
              onClick={() => setCal(c.id)}
              className={`min-h-11 rounded-xl text-body ${
                cal === c.id ? "bg-raised font-bold text-heading" : "text-sub"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1.3fr_1fr_1fr] gap-2.5">
          <select aria-label="년" value={year} onChange={(e) => setYear(+e.target.value)} className={selectCls}>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}년
              </option>
            ))}
          </select>
          <select aria-label="월" value={month} onChange={(e) => setMonth(+e.target.value)} className={selectCls}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}월
              </option>
            ))}
          </select>
          <select aria-label="일" value={safeDay} onChange={(e) => setDay(+e.target.value)} className={selectCls}>
            {Array.from({ length: maxDay }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}일
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <div>
        <label className="mb-2.5 block text-body font-bold" htmlFor="birth-time">
          태어난 시간
        </label>
        <select id="birth-time" value={time} onChange={(e) => setTime(e.target.value)} className={`${selectCls} h-[50px]`}>
          <option value="unknown">모름 (삼주로 풀이해요)</option>
          {SHIJIN.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {time === "0" && (
          <label className="mt-3 flex min-h-11 items-center justify-between gap-3 rounded-btn border border-line bg-card px-4">
            <span>
              <span className="block text-body">야자시 적용</span>
              <span className="block text-caption text-dim">
                23:30~24:00 출생을 당일로 봐요. 끄면 다음 날 子시(통자시)예요
              </span>
            </span>
            <input
              type="checkbox"
              role="switch"
              checked={yaJasi}
              onChange={(e) => setYaJasi(e.target.checked)}
              className="size-5 accent-[#f2b544]"
            />
          </label>
        )}
      </div>

      <section className="card p-5">
        <h2 className="text-body font-bold">이런 풀이를 받아요</h2>
        <ul className="mt-4 space-y-3">
          {CHECKLIST[product].map((c) => (
            <li key={c} className="flex gap-3 text-body">
              <CheckIcon className="mt-0.5 size-5 shrink-0 text-gold" />
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-line pt-4 text-caption text-sub">
          결제 후 내 풀이에서 언제든 다시 볼 수 있어요
        </p>
      </section>

      <div>
        <button
          type="button"
          disabled={!valid || busy}
          onClick={submit}
          className="btn-primary h-[52px] w-full text-lead"
        >
          990원 결제하고 풀이 받기
        </button>
        <p className="mt-4 text-center text-body text-sub">
          어떤 풀이를 받나요?{" "}
          <Link href={`/sample/${product}`} className="text-gold underline underline-offset-4">
            샘플 보기 →
          </Link>
        </p>
      </div>
      {sheet && <LoginSheet next="/checkout" onClose={() => setSheet(false)} />}
    </div>
  );
}
