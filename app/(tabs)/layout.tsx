import { BottomNav } from "@/components/ui/BottomNav";
import { BusinessInfo } from "@/components/ui/BusinessInfo";

export default function TabsLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="mx-auto w-full max-w-[430px] pb-24">
      {children}
      <BusinessInfo />
      <BottomNav />
    </div>
  );
}
