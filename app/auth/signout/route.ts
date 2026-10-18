import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// 로그아웃: 서버에서 세션 쿠키를 지우고 메인으로 보낸다
export async function POST(request: NextRequest) {
  const supabase = await createClient();
  await supabase.auth.signOut();
  // 303: POST 뒤에 메인 페이지를 GET으로 열게 한다
  return NextResponse.redirect(new URL("/", request.nextUrl.origin), 303);
}
