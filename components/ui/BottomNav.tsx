"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookmarkIcon, HomeIcon, UserIcon } from "./Icons";

const TABS = [
  { href: "/", label: "홈", Icon: HomeIcon },
  { href: "/readings", label: "내 풀이", Icon: BookmarkIcon },
  { href: "/my", label: "내정보", Icon: UserIcon },
] as const;

export function BottomNav({ active }: { active?: string }) {
  const pathname = usePathname();
  const current = active ?? pathname;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-background/95 backdrop-blur">
      <ul className="mx-auto grid h-16 max-w-[430px] grid-cols-3">
        {TABS.map(({ href, label, Icon }) => {
          const on = href === "/" ? current === "/" : current.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex h-full min-h-11 flex-col items-center justify-center gap-1 text-micro ${
                  on ? "font-bold text-gold" : "text-dim"
                }`}
              >
                <Icon className="size-6" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
