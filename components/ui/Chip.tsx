export function Chip({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <span
      className={
        gold
          ? "chip-gold"
          : "chip"
      }
    >
      {children}
    </span>
  );
}
