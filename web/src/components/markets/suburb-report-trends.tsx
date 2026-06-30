"use client";

import { TrendChart } from "@/components/markets/trend-chart";
import { formatPctChange } from "@/lib/trends";
import type { MarketTrendsPayload } from "@/lib/types";

function TrendBlock({
  title,
  trends,
  chartId,
}: {
  title: string;
  trends: MarketTrendsPayload;
  chartId: string;
}) {
  const priceChange = formatPctChange(trends.pct_change_median);
  const supplyChange = formatPctChange(trends.pct_change_listings);

  return (
    <div className="suburb-report-section space-y-3 rounded-xl border border-border/80 bg-card p-4">
      <div>
        <h3 className="font-heading text-sm font-medium">{title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          90-day change: price {priceChange} · supply {supplyChange}
        </p>
      </div>
      <div className="space-y-3">
        <div>
          <p className="mb-1 text-xs font-medium text-muted-foreground">Median price</p>
          <TrendChart
            points={trends.points}
            kind="price"
            chartId={`${chartId}-price`}
            emptyLabel="Not enough history yet"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-medium text-muted-foreground">Active listings</p>
          <TrendChart
            points={trends.points}
            kind="supply"
            chartId={`${chartId}-supply`}
            emptyLabel="Not enough history yet"
          />
        </div>
      </div>
    </div>
  );
}

export function SuburbReportTrends({
  rentTrends,
  saleTrends,
}: {
  rentTrends: MarketTrendsPayload;
  saleTrends: MarketTrendsPayload;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-lg font-medium">90-day market trends</h2>
      <p className="text-sm text-muted-foreground">
        Daily snapshot medians across all property types in this suburb.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <TrendBlock title="Rent" trends={rentTrends} chartId="report-rent" />
        <TrendBlock title="Sale" trends={saleTrends} chartId="report-sale" />
      </div>
    </section>
  );
}
