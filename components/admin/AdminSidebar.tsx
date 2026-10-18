"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// href 가 없는 메뉴는 아직 화면이 없다
const NAV: { label: string; href?: string; badge?: string }[] = [
  { label: "대시보드", href: "/admin" },
  { label: "결제 내역" },
  { label: "풀이 현황", badge: "3" },
  { label: "회원", href: "/admin/members" },
  { label: "문의 대응" },
  { label: "문장 사전" },
  { label: "설정" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex w-[268px] shrink-0 flex-col bg-[#161412] p-4 text-[#d6d1c6]">
      <p className="px-3 pb-6 pt-4 font-serif text-[30px] text-gold">
        결 <span className="ml-1 align-middle font-sans text-[13px] tracking-widest text-[#8e897f]">ADMIN</span>
      </p>
      <nav className="space-y-1">
        {NAV.map(({ label, href, badge }) => {
          const on = href === "/admin" ? pathname === "/admin" : !!href && pathname.startsWith(href);
          const cls = `flex h-12 items-center justify-between rounded-xl px-4 text-[15.5px] ${
            on ? "bg-gold-bg font-bold text-gold" : ""
          }`;
          const inner = (
            <>
              {label}
              {badge && (
                <span className="flex size-6 items-center justify-center rounded-full bg-[#e89a7a] text-[12px] font-bold text-[#161412]">
                  {badge}
                </span>
              )}
            </>
          );
          return href ? (
            <Link key={label} href={href} className={cls}>
              {inner}
            </Link>
          ) : (
            <div key={label} className={cls}>
              {inner}
            </div>
          );
        })}
      </nav>
      <p className="mt-auto rounded-xl bg-[#1d1a17] p-4 text-[13px] leading-[1.7] text-[#8e897f]">
        운영 환경 · Production
        <br />
        토스 라이브 키 사용 중
      </p>
    </aside>
  );
}
