import { connection } from "next/server";
import { Suspense } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { requireAdmin } from "@/lib/admin";

// 관리자가 아니면 메뉴도 화면도 보이지 않는다 (404 / 로그인으로 이동)
async function Gate({ children }: { children: React.ReactNode }) {
  await connection();
  await requireAdmin();
  return (
    <div className="flex min-h-screen bg-[#faf8f4] text-[#26221b]">
      <AdminSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <Gate>{children}</Gate>
    </Suspense>
  );
}
