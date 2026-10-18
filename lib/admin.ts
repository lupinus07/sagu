import "server-only";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// 관리자 = 서버 환경변수 ADMIN_USER_IDS(쉼표로 구분한 Supabase 사용자 ID)에 있는 사람.
// 값이 비어 있으면 아무도 관리자가 아니다 (기본은 막힘).
function adminIds() {
  return (process.env.ADMIN_USER_IDS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** 관리자만 통과. 비로그인은 로그인으로, 로그인했지만 관리자가 아니면 404 (관리자 화면이 있다는 것도 숨긴다). */
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/admin");
  if (!adminIds().includes(user.id)) notFound();
  return user;
}
