import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SegmentPriceNote } from "@/components/markets/segment-price-note";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { priceForFilters } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters, ExploreMode, MarketMetric } from "@/lib/types";

import { ConfidenceBadge } from "./confidence-badge";
import { PinButton } from "./pin-button";

export function SuburbCard({
  market,
  mode,
  badge,
  filters,
}: {
  market: MarketMetric;
  mode: ExploreMode;
  badge?: string;
  filters?: Pick<ExploreFilters, "propertyType" | "bedroom">;
}) {
  const segmentFilters = filters ?? { propertyType: null, bedroom: null };
  const price = priceForFilters(market, mode, segmentFilters);
  const href = suburbPath(market.city, market.suburb, {
    type: segmentFilters.propertyType,
    bedroom: segmentFilters.bedroom,
  });

  return (
    <Card className="relative h-full transition-colors hover:bg-muted/30">
      <Link
        href={href}
        className="absolute inset-0 z-0 rounded-[inherit]"
        aria-label={`View ${sanitizeLabel(market.suburb)} market profile`}
      />
      <CardHeader className="pointer-events-none relative z-10 flex flex-row items-start justify-between gap-3 space-y-0">
        <div>
          <CardTitle>{sanitizeLabel(market.suburb)}</CardTitle>
          <p className="font-heading text-sm text-muted-foreground">{market.city}</p>
        </div>
        {badge ? <Badge variant="success">{badge}</Badge> : null}
      </CardHeader>
      <CardContent className="pointer-events-none relative z-10 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-stat text-2xl font-medium">{formatCurrency(price)}</span>
          <ConfidenceBadge score={market.confidence_score} />
        </div>
        <SegmentPriceNote market={market} mode={mode} filters={segmentFilters} />
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {mode === "buy" && market.yield_percent != null ? (
            <span className="font-stat">Yield {formatPercent(market.yield_percent)}</span>
          ) : null}
          {mode === "buy" && market.opportunity_score != null ? (
            <span className="font-mono text-xs tracking-wide">
              Opp {market.opportunity_score}
            </span>
          ) : null}
        </div>
      </CardContent>
      <div className="relative z-10 px-6 pb-6">
        <PinButton market={market} />
      </div>
    </Card>
  );
}
