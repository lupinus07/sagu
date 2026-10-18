/** 로그인 후 돌아갈 경로. 같은 사이트의 상대 경로만 허용한다 (오픈 리다이렉트 방지). */
export function safeNext(next: string | null | undefined, fallback = "/"): string {
  if (!next || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return fallback;
  return next;
}
