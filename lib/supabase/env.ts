// 브라우저에 공개해도 되는 키. 새 이름(PUBLISHABLE)을 우선 쓰고, 예전 이름(ANON)도 받는다.
// NEXT_PUBLIC_* 는 정적 참조여야 번들에 치환되므로 process.env.X 를 그대로 적는다.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
