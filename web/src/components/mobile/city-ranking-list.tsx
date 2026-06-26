import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";

export function CityRankingList({
  title,
  items,
}: {
  title: string;
  items: { city: string; suburb: string; label: string }[];
}) {
  if (!items.length) return null;

  return (
    <section className="space-y-2 lg:hidden">
      <h3 className="px-1 text-[13px] font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <div className="overflow-hidden rounded-2xl bg-muted/50 divide-y divide-border/40">
        {items.map((item, i) => (
          <Link
            key={`${item.city}-${item.suburb}`}
            href={suburbPath(item.city, item.suburb)}
            className="flex min-h-[44px] items-center gap-3 px-4 py-3 active:bg-muted/80"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-background text-xs font-semibold text-muted-foreground">
              {i + 1}
            </span>
            <span className="min-w-0 flex-1 truncate font-heading text-[15px] font-medium">
              {sanitizeLabel(item.suburb)}
            </span>
            <span className="shrink-0 font-mono text-sm text-muted-foreground">
              {item.label}
            </span>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground/60" />
          </Link>
        ))}
      </div>
    </section>
  );
}
