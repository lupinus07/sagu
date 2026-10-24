import { PageHeader } from "@/components/ui/PageHeader";
import { DONATION_PER_READING, SHOW_DONATION } from "@/lib/donation";

type Notice = { id: string; title: string; date: string; body: string[] };

// 새 공지는 배열 맨 위에 추가한다. 기부 내역(분기별)도 여기에 올린다.
const ALL_NOTICES: Notice[] = [
  {
    id: "donation",
    title: `풀이 1건마다 ${DONATION_PER_READING}원을 기부해요`,
    date: "2026.10.14",
    body: [
      `결제된 풀이 1건마다 ${DONATION_PER_READING}원을 결이 기부해요. 내 운을 보면서, 누군가의 운도 조금 밝혀주고 싶어서 시작했어요.`,
      "기부금은 풀이 값 990원 안에서 결이 부담해요. 이용자가 따로 내는 금액은 없어요.",
      "환불된 결제는 기부에서 빠져요.",
      "기부 내역은 분기마다 이 공지사항에 올려요. 기간, 기부 건수, 기부 금액, 기부처를 함께 알려 드려요.",
      "이 기부는 결이 하는 기부라서 이용자에게 기부금 영수증은 발급되지 않아요.",
    ],
  },
];

const NOTICES = ALL_NOTICES.filter((n) => SHOW_DONATION || n.id !== "donation");

export default function NoticesPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col">
      <PageHeader title="공지사항" back="/my" history />
      <main className="space-y-3 px-4 pb-12 pt-5">
        {NOTICES.map((n, i) => (
          <details key={n.id} open={i === 0} className="card group">
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
              <span>
                <span className="block text-body font-bold text-heading">{n.title}</span>
                <span className="caption-text">{n.date}</span>
              </span>
              <span aria-hidden="true" className="text-dim transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <div className="space-y-2 border-t border-line px-4 py-4">
              {n.body.map((t) => (
                <p key={t} className="body-text text-sub">
                  {t}
                </p>
              ))}
            </div>
          </details>
        ))}
      </main>
    </div>
  );
}
