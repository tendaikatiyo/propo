import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import {
  isSegmentLimitedData,
  priceForFilters,
  resolveSegmentStats,
  segmentFilterLabel,
  segmentMedianForMode,
} from "@/lib/segments";
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
  const segment = resolveSegmentStats(
    market,
    segmentFilters.propertyType,
    segmentFilters.bedroom
  );
  const segmentDom =
    mode === "rent"
      ? segment?.median_days_on_market_rent
      : segment?.median_days_on_market_sale;
  const dom =
    segmentDom ??
    (mode === "rent"
      ? market.average_days_on_market_rent
      : market.average_days_on_market_sale);
  const specLabel = segmentFilterLabel(
    segmentFilters.propertyType,
    segmentFilters.bedroom
  );
  const limitedData = isSegmentLimitedData(market, mode, segmentFilters);
  const segmentPrice = segmentMedianForMode(segment, mode);

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between gap-3 space-y-0">
        <div>
          <CardTitle>{sanitizeLabel(market.suburb)}</CardTitle>
          <p className="font-heading text-sm text-muted-foreground">{market.city}</p>
        </div>
        {badge ? <Badge variant="success">{badge}</Badge> : null}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-stat text-2xl font-medium">{formatCurrency(price)}</span>
          <ConfidenceBadge score={market.confidence_score} />
        </div>
        {specLabel ? (
          <p className="text-xs text-muted-foreground">
            {limitedData && segmentPrice != null
              ? `Limited data for ${specLabel} — showing suburb-wide median`
              : `Median for ${specLabel}`}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {mode === "buy" && market.yield_percent != null ? (
            <span className="font-stat">Yield {formatPercent(market.yield_percent)}</span>
          ) : null}
          {mode === "buy" && market.opportunity_score != null ? (
            <span className="font-mono text-xs tracking-wide">
              Opp {market.opportunity_score}
            </span>
          ) : null}
          {dom != null ? (
            <span className="font-mono text-xs tracking-wide">DOM {dom}d</span>
          ) : null}
        </div>
        <PinButton market={market} />
      </CardContent>
    </Card>
  );
}
