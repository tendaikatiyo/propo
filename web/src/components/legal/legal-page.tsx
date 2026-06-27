import { PageHeader } from "@/components/layout/page-header";

export function LegalPage({
  title,
  description,
  lastUpdated,
  children,
}: {
  title: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-10">
      <PageHeader title={title} description={description} />
      <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      <div className="max-w-3xl space-y-8">{children}</div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-medium tracking-[-0.01em]">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
