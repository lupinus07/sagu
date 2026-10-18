export function Card({
  title,
  aside,
  children,
}: {
  title?: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card p-5">
      {title && (
        <header className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-section text-heading">{title}</h2>
          {aside && <span className="text-caption text-dim">{aside}</span>}
        </header>
      )}
      {children}
    </section>
  );
}
