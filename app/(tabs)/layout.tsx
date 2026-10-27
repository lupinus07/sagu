import { BottomNav } from "@/components/ui/BottomNav";

export default function TabsLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="mx-auto w-full max-w-[430px] pb-24">
      {children}
      <BottomNav />
    </div>
  );
}
