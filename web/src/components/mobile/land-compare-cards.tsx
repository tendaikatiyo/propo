"use client";

import Link from "next/link";

import { PinButton } from "@/components/markets/pin-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  buildLandCompareMetrics,
  getBestLandMarketId,
} from "@/lib/land-compare";
import { formatNumber, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { LandMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

function formatLandCompareValue(
  value: number | null,
  format: "pricePerSqm" | "number" | "days"
): string {
  if (value == null) return "—";
  if (format === "pricePerSqm") return formatPricePerSqm(value);
  if (format === "days") return `${formatNumber(value)}d`;
  return formatNumber(value);
}

const MOBILE_LAND_METRIC_KEYS = [
  "median_price_per_sqm",
  "land_count",
  "confidence_score",
];

export function LandCompareCards({ markets }: { markets: LandMetric[] }) {
  const all = buildLandCompareMetrics();
  const metrics = MOBILE_LAND_METRIC_KEYS.map((key) => all.find((row) => row.key === key)).filter(
    (row): row is (typeof all)[number] => row != null
  );

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
                  href={suburbPath(market.city, market.suburb, { mode: "land" })}
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
              const bestId = getBestLandMarketId(markets, row);
              const isBest = bestId === market.market_id && value != null;

              return (
                <div
                  key={row.key}
                  className={cn(
                    "flex items-center justify-between gap-4 py-3 text-sm",
                    isBest && "-mx-2 rounded-lg bg-secondary/60 px-2"
                  )}
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className={cn("font-mono font-medium", isBest && "font-semibold")}>
                    {formatLandCompareValue(value, row.format)}
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
