import { Suspense } from "react";
import { PaymentFail } from "@/components/payment/PaymentFail";

export default function PaymentFailPage() {
  return (
    <Suspense>
      <PaymentFail />
    </Suspense>
  );
}
