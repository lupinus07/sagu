import { NextResponse } from "next/server";
import { InputValueSchema } from "@/lib/draft";
import { createClient } from "@/lib/supabase/server";

const KEEP = 10;

// 결제를 마친 입력값을 "이전에 입력한 사주"로 저장한다 (같은 사주면 최근 사용 시각만 갱신, 최근 10건 유지)
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const parsed = InputValueSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  const v = parsed.data;

  const { error } = await supabase.from("saju_inputs").upsert(
    {
      user_id: user.id,
      name: v.name.trim(),
      gender: v.gender,
      calendar: v.calendar,
      is_leap_month: v.isLeapMonth,
      year: v.year,
      month: v.month,
      day: v.day,
      hour: v.hour,
      minute: v.minute,
      ya_jasi: v.yaJasi,
      last_used_at: new Date().toISOString(),
    },
    { onConflict: "user_id,name,gender,calendar,is_leap_month,year,month,day,hour,minute,ya_jasi" },
  );
  if (error) {
    console.error("[saju-inputs] upsert failed:", error.code, error.message);
    return NextResponse.json({ error: "save_failed" }, { status: 500 });
  }

  // 오래된 것은 정리 (RLS 로 내 행만 보인다)
  const { data: old } = await supabase
    .from("saju_inputs")
    .select("id")
    .order("last_used_at", { ascending: false })
    .range(KEEP, KEEP + 49);
  if (old?.length) {
    await supabase
      .from("saju_inputs")
      .delete()
      .in(
        "id",
        old.map((o) => o.id),
      );
  }
  return NextResponse.json({ ok: true });
}
