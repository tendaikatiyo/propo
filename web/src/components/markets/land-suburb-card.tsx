import { TrackedSuburbLink } from "@/components/analytics/tracked-suburb-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SuburbClickPayload } from "@/lib/analytics/types";
import { Badge } from "@/components/ui/badge";
import { formatNumber, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { LandMetric } from "@/lib/types";

import { ConfidenceBadge } from "./confidence-badge";
import { PinButton } from "./pin-button";

export function LandSuburbCard({
  market,
  badge,
  clickSource = "explore_card",
}: {
  market: LandMetric;
  badge?: string;
  clickSource?: SuburbClickPayload["source"];
}) {
  const href = suburbPath(market.city, market.suburb);

  return (
    <Card className="relative h-full transition-colors hover:bg-muted/30">
      <TrackedSuburbLink
        href={href}
        tracking={{
          marketId: market.market_id,
          city: market.city,
          suburb: market.suburb,
          source: clickSource,
          mode: "land",
        }}
        className="absolute inset-0 z-0 rounded-[inherit]"
        aria-label={`View ${sanitizeLabel(market.suburb)} land market`}
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
          <span className="font-stat text-2xl font-medium">
            {formatPricePerSqm(market.median_price_per_sqm)}
          </span>
          <ConfidenceBadge score={market.confidence_score} />
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span>{formatNumber(market.land_count)} stands listed</span>
          {market.median_days_on_market_land != null ? (
            <span className="font-mono text-xs tracking-wide">
              {formatNumber(market.median_days_on_market_land)}d median DOM
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
