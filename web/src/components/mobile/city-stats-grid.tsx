import { formatCurrency, formatPercent } from "@/lib/format";
import type { CityMetric } from "@/lib/types";

export function CityStatsGrid({ city }: { city: CityMetric }) {
  const stats = [
    { label: "Median rent", value: formatCurrency(city.median_rent) },
    { label: "Median sale", value: formatCurrency(city.median_sale_price) },
    { label: "Avg yield", value: formatPercent(city.average_yield) },
    {
      label: "DOM rent",
      value:
        city.average_days_on_market_rent != null
          ? `${city.average_days_on_market_rent}d`
          : "—",
    },
    {
      label: "DOM sale",
      value:
        city.average_days_on_market_sale != null
          ? `${city.average_days_on_market_sale}d`
          : "—",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl bg-muted/50 px-3.5 py-3"
        >
          <p className="text-[11px] font-medium text-muted-foreground">{stat.label}</p>
          <p className="font-stat mt-0.5 text-lg font-medium tracking-tight">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
