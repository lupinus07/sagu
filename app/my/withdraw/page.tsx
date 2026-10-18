import { WithdrawForm } from "@/components/my/WithdrawForm";
import { PageHeader } from "@/components/ui/PageHeader";

export default function WithdrawPage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px]">
      <PageHeader title="회원 탈퇴" back="/my" />
      <WithdrawForm />
    </div>
  );
}
