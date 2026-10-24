import { NextResponse } from "next/server";
import { ChartInputSchema } from "@/lib/draft";
import { calculateSaju } from "@/lib/saju/calculateSaju";

// 사주 원국은 AI 없이 코드로만 계산한다 (결제 전 무료 공개). 입력값은 저장하지 않는다.
export async function POST(request: Request) {
  const parsed = ChartInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  const v = parsed.data;

  try {
    const chart = calculateSaju({
      year: v.year,
      month: v.month,
      day: v.day,
      hour: v.hour,
      minute: v.minute,
      gender: v.gender,
      calendar: v.calendar,
      isLeapMonth: v.isLeapMonth,
      yaJasi: v.yaJasi,
    });
    return NextResponse.json({ chart });
  } catch (e) {
    // 존재하지 않는 음력 날짜 등
    console.error("[saju-chart] calculate failed:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "calculate_failed" }, { status: 422 });
  }
}
