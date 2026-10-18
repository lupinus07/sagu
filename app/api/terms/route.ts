import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// 약관 동의 저장 (필수 항목 확인은 화면에서, 기록은 서버에서)
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as { marketing?: unknown };
  const { data, error } = await supabase
    .from("profiles")
    .update({
      terms_agreed_at: new Date().toISOString(),
      marketing_agreed: body.marketing === true,
    })
    .eq("id", user.id)
    .select("id");
  // profiles 행이 없으면 0건 수정되므로 성공으로 치지 않는다 (동의 화면 무한 반복 방지)
  if (error) console.error("[terms] profiles update failed:", error.code, error.message);
  else if (!data?.length) console.error("[terms] profiles row not found for user", user.id);
  if (error || !data?.length) return NextResponse.json({ error: "save_failed" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
