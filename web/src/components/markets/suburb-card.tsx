import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import type { ExploreMode, MarketMetric } from "@/lib/types";

import { ConfidenceBadge } from "./confidence-badge";
import { PinButton } from "./pin-button";

export function SuburbCard({
  market,
  mode,
  badge,
}: {
  market: MarketMetric;
  mode: ExploreMode;
  badge?: string;
}) {
  const price = mode === "rent" ? market.median_rent : market.median_sale_price;

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0 pb-2">
        <div>
          <CardTitle className="text-base">{sanitizeLabel(market.suburb)}</CardTitle>
          <p className="text-sm text-muted-foreground">{market.city}</p>
        </div>
        {badge ? (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
            {badge}
          </span>
        ) : null}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-semibold tabular-nums">{formatCurrency(price)}</span>
          <ConfidenceBadge score={market.confidence_score} />
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          {market.yield_percent != null ? (
            <span>Yield {formatPercent(market.yield_percent)}</span>
          ) : null}
          {market.opportunity_score != null ? (
            <span>Opportunity {market.opportunity_score}</span>
          ) : null}
          {market.average_days_on_market_rent != null ? (
            <span>DOM rent {market.average_days_on_market_rent}d</span>
          ) : null}
        </div>
        <PinButton market={market} />
      </CardContent>
    </Card>
  );
}
