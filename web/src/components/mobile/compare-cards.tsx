"use client";

import Link from "next/link";

import { PinButton } from "@/components/markets/pin-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildCompareMetrics, getBestMarketId } from "@/lib/explore";
import { formatCurrency, formatNumber, formatPercent, sanitizeLabel } from "@/lib/format";
import { isUsingAggregateFallback } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { CompareFilters, MarketMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

function formatCompareValue(
  value: number | null,
  format: "currency" | "percent" | "number" | "days"
): string {
  if (value == null) return "—";
  if (format === "currency") return formatCurrency(value);
  if (format === "percent") return formatPercent(value);
  if (format === "days") return `${formatNumber(value)}d`;
  return formatNumber(value);
}

const MOBILE_METRIC_KEYS: Record<"rent" | "buy", string[]> = {
  rent: ["median_rent", "median_sale_price", "yield_percent", "opportunity_score"],
  buy: ["median_sale_price", "median_rent", "yield_percent", "opportunity_score"],
};

function mobileCompareMetrics(filters: CompareFilters) {
  const all = buildCompareMetrics(filters);
  const keys = MOBILE_METRIC_KEYS[filters.mode];
  return keys
    .map((key) => all.find((row) => row.key === key))
    .filter((row): row is (typeof all)[number] => row != null);
}

export function CompareCards({
  markets,
  filters,
}: {
  markets: MarketMetric[];
  filters: CompareFilters;
}) {
  const metrics = mobileCompareMetrics(filters);
  const specQuery = { type: filters.propertyType, bedroom: filters.bedroom };

  if (markets.length < 2) {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 bg-card p-10 text-center text-muted-foreground">
        Pin at least 2 suburbs to compare them side by side.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {markets.map((market) => (
        <Card key={market.market_id}>
          <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0 pb-3">
            <div className="min-w-0">
              <CardTitle className="text-base">
                <Link
                  href={suburbPath(market.city, market.suburb, specQuery)}
                  className="hover:underline"
                >
                  {sanitizeLabel(market.suburb)}
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{market.city}</p>
            </div>
            <PinButton market={market} size="icon-sm" />
          </CardHeader>
          <CardContent className="space-y-0 divide-y divide-border/60 p-0 px-6 pb-4">
            {metrics.map((row) => {
              const value = row.getValue(market);
              const bestId = getBestMarketId(markets, row);
              const isBest = bestId === market.market_id && value != null;
              const showFallback =
                row.segmentMode != null &&
                isUsingAggregateFallback(market, row.segmentMode, filters);

              return (
                <div
                  key={row.key}
                  className={cn(
                    "flex items-center justify-between gap-4 py-3 text-sm",
                    isBest && "-mx-2 rounded-lg bg-secondary/60 px-2"
                  )}
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <div className="text-right">
                    <span className={cn("font-mono font-medium", isBest && "font-semibold")}>
                      {formatCompareValue(value, row.format)}
                    </span>
                    {showFallback ? (
                      <p className="text-[10px] text-muted-foreground">Suburb median</p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
