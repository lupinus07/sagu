import "server-only";

// 토스페이먼츠 서버 API 래퍼. 시크릿 키(TOSS_SECRET_KEY)는 서버에서만 쓴다.
const BASE = "https://api.tosspayments.com/v1/payments";

export type TossPayment = {
  paymentKey: string;
  orderId: string;
  status: string; // READY / IN_PROGRESS / DONE / CANCELED / PARTIAL_CANCELED / ABORTED / EXPIRED ...
  totalAmount: number;
  method?: string | null;
  approvedAt?: string | null;
  [key: string]: unknown;
};

export type TossError = { code: string; message: string; status: number };

function authHeader() {
  const secret = process.env.TOSS_SECRET_KEY;
  if (!secret) throw new Error("TOSS_SECRET_KEY is not set");
  return `Basic ${Buffer.from(`${secret}:`).toString("base64")}`;
}

async function call<T>(
  path: string,
  init: { method: "GET" | "POST"; body?: unknown; idempotencyKey?: string },
): Promise<{ ok: true; data: T } | { ok: false; error: TossError }> {
  const res = await fetch(`${BASE}${path}`, {
    method: init.method,
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
      // 같은 키로 다시 보내면 토스가 첫 응답을 그대로 돌려준다 (중복 승인 · 취소 방지)
      ...(init.idempotencyKey ? { "Idempotency-Key": init.idempotencyKey } : {}),
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (res.ok) return { ok: true, data: json as T };
  return {
    ok: false,
    error: {
      code: String(json.code ?? "UNKNOWN"),
      message: String(json.message ?? "결제 서버 응답을 읽지 못했어요."),
      status: res.status,
    },
  };
}

/** 결제 승인. orderId 를 멱등 키로 써서 같은 주문의 중복 승인을 막는다. */
export function confirmPayment(input: { paymentKey: string; orderId: string; amount: number }) {
  return call<TossPayment>("/confirm", { method: "POST", body: input, idempotencyKey: input.orderId });
}

/** 결제 조회 (웹훅이 보낸 값을 믿지 않고 토스에 다시 물어볼 때) */
export function getPayment(paymentKey: string) {
  return call<TossPayment>(`/${encodeURIComponent(paymentKey)}`, { method: "GET" });
}

/** 전액 취소(환불) */
export function cancelPayment(paymentKey: string, cancelReason: string, idempotencyKey: string) {
  return call<TossPayment>(`/${encodeURIComponent(paymentKey)}/cancel`, {
    method: "POST",
    body: { cancelReason },
    idempotencyKey,
  });
}
