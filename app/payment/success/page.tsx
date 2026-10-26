import { Suspense } from "react";
import { PaymentSuccess } from "@/components/payment/PaymentSuccess";

export default function PaymentSuccessPage() {
  return (
    <Suspense>
      <PaymentSuccess />
    </Suspense>
  );
}
