"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/** 직전 화면으로 돌아가는 뒤로가기. 이전 기록이 없으면(주소로 바로 들어온 경우) fallback 으로 간다. */
export function BackLink({
  fallback,
  className,
  children,
}: {
  fallback: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Link
      href={fallback}
      aria-label="뒤로"
      className={className}
      onClick={(e) => {
        if (window.history.length > 1) {
          e.preventDefault();
          router.back();
        }
      }}
    >
      {children}
    </Link>
  );
}
