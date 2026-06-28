import { formatCurrency } from "@/lib/format";
import {
  isUsingAggregateFallback,
  resolvePriceForFilters,
  segmentPriceCaption,
} from "@/lib/segments";
import type { ExploreFilters, ExploreMode, MarketMetric } from "@/lib/types";

export function SegmentPriceNote({
  market,
  mode,
  filters,
  className = "text-xs text-muted-foreground",
  fallbackOnly = false,
}: {
  market: MarketMetric;
  mode: ExploreMode;
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">;
  className?: string;
  /** When true, only show a note if the suburb-wide median is used instead of segment data. */
  fallbackOnly?: boolean;
}) {
  const fallback = isUsingAggregateFallback(market, mode, filters);
  if (fallbackOnly && !fallback) return null;
  const caption = segmentPriceCaption(market, mode, filters);
  if (!caption) return null;
  return <p className={className}>{caption}</p>;
}

export function SegmentPriceCell({
  market,
  mode,
  filters,
}: {
  market: MarketMetric;
  mode: ExploreMode;
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">;
}) {
  const { price } = resolvePriceForFilters(market, mode, filters);
  const fallback = isUsingAggregateFallback(market, mode, filters);

  return (
    <div className="space-y-0.5">
      <span className="font-mono">{formatCurrency(price)}</span>
      {fallback ? (
        <p className="text-[10px] leading-tight text-muted-foreground">Suburb median</p>
      ) : null}
    </div>
  );
}
