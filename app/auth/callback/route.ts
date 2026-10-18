import { NextResponse, type NextRequest } from "next/server";
import { safeNext } from "@/lib/safeNext";
import { createClient } from "@/lib/supabase/server";

// 카카오 로그인 후 돌아오는 곳: code → 세션 교환 → 약관 동의 여부에 따라 이동
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const next = safeNext(searchParams.get("next"));
  const fail = () => NextResponse.redirect(`${origin}/login?error=auth`);

  const code = searchParams.get("code");
  if (!code) return fail();

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return fail();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return fail();

  const { data: profile } = await supabase
    .from("profiles")
    .select("terms_agreed_at")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.terms_agreed_at) {
    return NextResponse.redirect(`${origin}/terms?next=${encodeURIComponent(next)}`);
  }
  return NextResponse.redirect(`${origin}${next}`);
}
