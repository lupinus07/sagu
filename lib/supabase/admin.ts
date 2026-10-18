import "server-only";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./env";

/**
 * 서비스 키 클라이언트: RLS 를 건너뛰고 모든 행을 읽고 쓴다. 서버(관리자 확인 뒤)에서만 쓴다.
 * 키(SUPABASE_SERVICE_ROLE_KEY)가 없으면 null.
 */
export function createAdminClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !key) return null;
  return createClient(SUPABASE_URL, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
