import { formatCurrency, formatPercent } from "@/lib/format";
import type { CityMetric, ExploreMode } from "@/lib/types";

export function CityStatsGrid({
  city,
  lens,
}: {
  city: CityMetric;
  lens: ExploreMode;
}) {
  const stats =
    lens === "rent"
      ? [{ label: "Median rent", value: formatCurrency(city.median_rent) }]
      : lens === "buy"
        ? [{ label: "Median sale", value: formatCurrency(city.median_sale_price) }]
        : lens === "invest"
          ? [
              { label: "Median rent", value: formatCurrency(city.median_rent) },
              { label: "Median sale", value: formatCurrency(city.median_sale_price) },
              { label: "Avg yield", value: formatPercent(city.average_yield) },
            ]
          : [{ label: "Land listings", value: String(city.land_count ?? 0) }];

  return (
    <div
      className={`grid gap-2 sm:grid-cols-3 lg:hidden ${
        stats.length === 1 ? "grid-cols-1" : stats.length === 2 ? "grid-cols-2" : "grid-cols-2"
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl bg-muted/50 px-3.5 py-3">
          <p className="text-[11px] font-medium text-muted-foreground">{stat.label}</p>
          <p className="font-stat mt-0.5 text-lg font-medium tracking-tight">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export function cityCardSubtitle(city: CityMetric, lens: ExploreMode): string[] {
  if (lens === "rent") {
    return [`Median rent ${formatCurrency(city.median_rent)}`];
  }
  if (lens === "buy") {
    return [`Median sale ${formatCurrency(city.median_sale_price)}`];
  }
  if (lens === "invest") {
    return [`Avg yield ${formatPercent(city.average_yield)}`];
  }
  return [`${city.land_count ?? 0} land listings`];
}
