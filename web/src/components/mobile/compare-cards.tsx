"use client";

import Link from "next/link";

import { PinButton } from "@/components/markets/pin-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPARE_METRICS, getBestMarketId } from "@/lib/explore";
import { formatCurrency, formatNumber, formatPercent, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { MarketMetric } from "@/lib/types";
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

const MOBILE_COMPARE_METRICS = COMPARE_METRICS.filter((row) =>
  [
    "median_rent",
    "median_sale_price",
    "yield_percent",
    "opportunity_score",
    "avg_dom_rent",
    "avg_dom_sale",
  ].includes(row.key)
);

export function CompareCards({ markets }: { markets: MarketMetric[] }) {
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
                  href={suburbPath(market.city, market.suburb)}
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
            {MOBILE_COMPARE_METRICS.map((row) => {
              const value = row.getValue(market);
              const bestId = getBestMarketId(markets, row);
              const isBest = bestId === market.market_id && value != null;
              return (
                <div
                  key={row.key}
                  className={cn(
                    "flex items-center justify-between gap-4 py-3 text-sm",
                    isBest && "rounded-lg bg-secondary/60 -mx-2 px-2"
                  )}
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className={cn("font-mono font-medium", isBest && "font-semibold")}>
                    {formatCompareValue(value, row.format)}
                  </span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
