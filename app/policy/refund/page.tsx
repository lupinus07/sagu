import { PageHeader } from "@/components/ui/PageHeader";

// 환불 정책 (초안). 정식 오픈 전에 법률 검토를 받고, 문의처 등 [대괄호] 값을 채운다.
const ARTICLES: { title: string; body: string[] }[] = [
  {
    title: "1. 풀이의 성격",
    body: [
      "풀이는 결제 직후 입력하신 정보로 만들어지는 디지털 콘텐츠예요. 풀이를 만들기 시작하면 되돌릴 수 없어서, 결제 전에 입력한 정보를 꼭 확인해 주세요.",
      "결제 전에 샘플 풀이를 전체 공개하고 있으니, 풀이의 구성과 내용을 먼저 확인하실 수 있어요.",
    ],
  },
  {
    title: "2. 전액 환불해 드리는 경우",
    body: [
      "결제는 되었는데 서비스 오류로 풀이가 만들어지지 않은 경우: 자동으로 결제를 취소해 드려요.",
      "풀이가 만들어졌지만 서비스 오류로 내용이 정상적으로 보이지 않는 경우: 풀이를 다시 만들어 드리거나 전액 환불해 드려요.",
      "같은 풀이가 중복으로 결제된 경우: 중복 결제분을 전액 환불해 드려요.",
    ],
  },
  {
    title: "3. 환불이 어려운 경우",
    body: [
      "풀이를 정상적으로 받은 뒤의 단순 변심은 환불이 어려워요.",
      "생년월일 등 입력 정보를 잘못 적었거나, 다른 사람의 정보로 풀이를 만든 경우도 환불과 재생성이 어려워요.",
    ],
  },
  {
    title: "4. 환불 신청 방법",
    body: [
      "'내정보'의 1:1 문의 또는 [문의 채널]로 주문 내용(결제 일시, 상품)과 사유를 보내 주세요.",
      "접수 후 영업일 기준 [3]일 안에 확인해서 안내해 드려요.",
    ],
  },
  {
    title: "5. 환불 처리 기간",
    body: [
      "결제 취소는 접수가 확인된 뒤 바로 진행돼요. 카드사나 결제 수단에 따라 실제로 돈이 돌아오는 데는 영업일 기준 3~7일이 걸릴 수 있어요.",
    ],
  },
  {
    title: "6. 환불된 풀이",
    body: ["환불이 완료되면 해당 풀이는 '내 풀이'에서 볼 수 없게 돼요."],
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col">
      <PageHeader title="환불 정책" back="/my" history />
      <main className="space-y-6 px-5 pb-12 pt-6">
        <p className="caption-text">시행일 2026년 10월 14일 · 초안</p>
        {ARTICLES.map((a) => (
          <section key={a.title}>
            <h2 className="label-text text-heading">{a.title}</h2>
            <div className="mt-2 space-y-2">
              {a.body.map((t) => (
                <p key={t} className="body-text text-sub">
                  {t}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
