import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { SUPABASE_KEY, SUPABASE_URL } from "@/lib/supabase/env";

// 로그인해야 볼 수 있는 화면 (내 풀이, 내정보 하위: 결제 내역·탈퇴 등). /my 자체는 비로그인도 볼 수 있다.
const PROTECTED = ["/my/", "/readings", "/checkout"];
const isProtected = (path: string, search: string) =>
  // 비회원 결제(/checkout?guest=1)는 로그인 없이 진입한다
  !(path === "/checkout" && new URLSearchParams(search).get("guest") === "1") &&
  PROTECTED.some((p) => path.startsWith(p));

// 요청마다 Supabase 세션 쿠키(토큰)를 갱신하고, 로그인이 필요한 화면은 로그인 페이지로 보낸다.
export async function proxy(request: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return NextResponse.next();

  let response = NextResponse.next({ request });
  const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  // getClaims는 JWT 서명을 로컬에서 검증하므로 요청마다 Supabase 서버를 왕복하지 않는다 (만료되면 갱신).
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims ?? null;

  const { pathname, search } = request.nextUrl;
  if (!user && isProtected(pathname, search)) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", pathname + search);
    return NextResponse.redirect(login);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|webp|ico)$).*)"],
};
