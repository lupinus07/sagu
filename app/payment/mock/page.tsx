import { Suspense } from "react";
import { MockPayment } from "@/components/payment/MockPayment";

export default function MockPaymentPage() {
  return (
    <Suspense>
      <MockPayment />
    </Suspense>
  );
}
