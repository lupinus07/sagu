import { BUSINESS } from "@/lib/business";
import { ChevronIcon } from "./Icons";

/** 하단 사업자 정보. 눌러서 펼친다. */
export function BusinessInfo() {
  return (
    <footer className="border-t border-line px-5 pb-6 pt-2">
      <details className="group">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-caption text-dim">
          사업자 정보
          <ChevronIcon className="size-4 transition-transform group-open:rotate-90" />
        </summary>
        <dl className="space-y-1.5 pb-2 pt-1 text-caption leading-[1.6] text-dim">
          {BUSINESS.map(({ label, value, href }) => (
            <div key={label} className="flex gap-3">
              <dt className="w-[92px] shrink-0">{label}</dt>
              <dd className="min-w-0 break-words text-sub">
                {href ? (
                  <a href={href} className="underline underline-offset-2">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </details>
    </footer>
  );
}
