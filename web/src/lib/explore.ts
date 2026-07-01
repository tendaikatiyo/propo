import {
  BEDROOM_COUNT_KEY,
  BUY_BUDGET_RANGE,
  DEFAULT_BUY_BUDGET,
  DEFAULT_RENT_BUDGET,
  MIN_CONFIDENCE_THRESHOLD,
  PROPERTY_TYPE_COUNT_KEY,
  STRETCH_BUDGET_MULTIPLIER,
} from "@/lib/constants";
import { priceForFilters, hasActiveSegmentFilters, isUsingAggregateFallback, resolveSegmentStats, segmentCountForMode, segmentMedianLabel } from "@/lib/segments";
import type {
  CompareFilters,
  ExploreFilters,
  ExploreMode,
  MarketMetric,
  SortDirection,
  SortKey,
} from "@/lib/types";

export interface ExploreResult {
  inBudget: MarketMetric[];
  stretch: MarketMetric[];
  filtered: MarketMetric[];
}

function getPriceForMode(
  market: MarketMetric,
  mode: ExploreMode,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): number | null {
  return priceForFilters(market, mode, filters);
}

/** Snap budget to the correct default when mode and amount disagree (e.g. $800 left on buy). */
export function budgetForMode(mode: ExploreMode, current: number): number {
  if (mode === "buy" && current < BUY_BUDGET_RANGE.min) return DEFAULT_BUY_BUDGET;
  if (mode === "rent" && current >= BUY_BUDGET_RANGE.min) return DEFAULT_RENT_BUDGET;
  return current;
}

export function hasPropertyType(
  market: MarketMetric,
  propertyType: ExploreFilters["propertyType"]
): boolean {
  if (!propertyType) return true;
  if (propertyType === "flat") {
    return market.flat_count + market.apartment_count > 0;
  }
  const key = PROPERTY_TYPE_COUNT_KEY[propertyType];
  const count = market[key];
  return typeof count === "number" && count > 0;
}

export function hasBedroomCount(market: MarketMetric, bedroom: number | null): boolean {
  if (bedroom == null) return true;
  const key = BEDROOM_COUNT_KEY[bedroom];
  if (!key) return true;
  const count = market[key];
  if (count === undefined) return true;
  return typeof count === "number" && count > 0;
}

export function passesConfidence(market: MarketMetric, includeLowConfidence: boolean): boolean {
  if (includeLowConfidence) return true;
  return (market.confidence_score ?? 0) >= MIN_CONFIDENCE_THRESHOLD;
}

export function filterMarkets(markets: MarketMetric[], filters: ExploreFilters): ExploreResult {
  const filtered = markets.filter((market) => {
    if (filters.city && market.city !== filters.city) return false;
    if (!hasPropertyType(market, filters.propertyType)) return false;
    if (!hasBedroomCount(market, filters.bedroom)) return false;
    if (!passesConfidence(market, filters.includeLowConfidence)) return false;
    const price = getPriceForMode(market, filters.mode, filters);
    if (price == null || price <= 0) return false;
    return true;
  });

  const inBudget: MarketMetric[] = [];
  const stretch: MarketMetric[] = [];

  for (const market of filtered) {
    const price = getPriceForMode(market, filters.mode, filters)!;
    if (price <= filters.budget) {
      inBudget.push(market);
    } else if (price <= filters.budget * STRETCH_BUDGET_MULTIPLIER) {
      stretch.push(market);
    }
  }

  return { inBudget, stretch, filtered };
}

export function isSuburbMedianFallbackRow(
  market: MarketMetric,
  filters: ExploreFilters
): boolean {
  if (!hasActiveSegmentFilters(filters)) return false;
  return isUsingAggregateFallback(market, filters.mode, filters);
}

export function applySuburbMedianVisibility(
  markets: MarketMetric[],
  filters: ExploreFilters
): MarketMetric[] {
  if (!filters.hideSuburbMedianFallback || !hasActiveSegmentFilters(filters)) {
    return markets;
  }
  return markets.filter((market) => !isSuburbMedianFallbackRow(market, filters));
}

export function sortMarkets(
  markets: MarketMetric[],
  key: SortKey,
  direction: SortDirection,
  filters?: Pick<ExploreFilters, "propertyType" | "bedroom">
): MarketMetric[] {
  const sorted = [...markets].sort((a, b) => {
    if (key === "suburb") return a.suburb.localeCompare(b.suburb);
    if (key === "city") return a.city.localeCompare(b.city);
    if (
      filters &&
      (key === "median_rent" || key === "median_sale_price")
    ) {
      const priceMode = key === "median_rent" ? "rent" : "buy";
      const aVal = priceForFilters(a, priceMode, filters) ?? (direction === "asc" ? Infinity : -Infinity);
      const bVal = priceForFilters(b, priceMode, filters) ?? (direction === "asc" ? Infinity : -Infinity);
      return aVal - bVal;
    }
    const aVal = a[key] ?? (direction === "asc" ? Infinity : -Infinity);
    const bVal = b[key] ?? (direction === "asc" ? Infinity : -Infinity);
    if (typeof aVal === "string" || typeof bVal === "string") return 0;
    return (aVal as number) - (bVal as number);
  });
  return direction === "desc" ? sorted.reverse() : sorted;
}

export function rankExploreResults(
  markets: MarketMetric[],
  mode: ExploreMode = "buy",
  filters?: Pick<ExploreFilters, "propertyType" | "bedroom">
): MarketMetric[] {
  if (mode === "rent") {
    return [...markets].sort((a, b) => {
      const conf = (b.confidence_score ?? 0) - (a.confidence_score ?? 0);
      if (conf !== 0) return conf;
      const rentA = priceForFilters(a, "rent", filters ?? { propertyType: null, bedroom: null }) ?? Infinity;
      const rentB = priceForFilters(b, "rent", filters ?? { propertyType: null, bedroom: null }) ?? Infinity;
      return rentA - rentB;
    });
  }
  return sortMarkets(markets, "opportunity_score", "desc").sort((a, b) => {
    const opp = (b.opportunity_score ?? 0) - (a.opportunity_score ?? 0);
    if (opp !== 0) return opp;
    const yieldDiff = (b.yield_percent ?? 0) - (a.yield_percent ?? 0);
    if (yieldDiff !== 0) return yieldDiff;
    return (b.confidence_score ?? 0) - (a.confidence_score ?? 0);
  });
}

export function averageYield(markets: MarketMetric[]): number | null {
  const values = markets
    .map((m) => m.yield_percent)
    .filter((v): v is number => v != null && !Number.isNaN(v));
  if (!values.length) return null;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export function totalListings(market: MarketMetric): number {
  return (market.rental_count ?? 0) + (market.sale_count ?? 0);
}

export function propertyMixTotal(market: MarketMetric): number {
  return (
    market.house_count +
    market.apartment_count +
    market.flat_count +
    market.room_count +
    market.townhouse_count +
    market.commercial_count
  );
}

export interface CompareMetricRow {
  key: string;
  label: string;
  format: "currency" | "percent" | "number" | "days";
  higherIsBetter: boolean;
  getValue: (market: MarketMetric) => number | null;
  /** When set, cell may show a suburb-median fallback sublabel */
  segmentMode?: ExploreMode;
}

function segmentSpec(filters: Pick<CompareFilters, "propertyType" | "bedroom">) {
  return { propertyType: filters.propertyType, bedroom: filters.bedroom };
}

function segmentListingCount(
  market: MarketMetric,
  filters: Pick<CompareFilters, "propertyType" | "bedroom">,
  mode: ExploreMode
): number | null {
  if (!hasActiveSegmentFilters(filters)) {
    return mode === "rent" ? market.rental_count : market.sale_count;
  }
  const segment = resolveSegmentStats(market, filters.propertyType, filters.bedroom);
  if (!segment) {
    return mode === "rent" ? market.rental_count : market.sale_count;
  }
  return segmentCountForMode(segment, mode);
}

export function buildCompareMetrics(
  filters: Pick<CompareFilters, "propertyType" | "bedroom">
): CompareMetricRow[] {
  const spec = segmentSpec(filters);

  return [
    {
      key: "median_rent",
      label: segmentMedianLabel("rent", filters.propertyType, filters.bedroom),
      format: "currency",
      higherIsBetter: false,
      segmentMode: "rent",
      getValue: (m) => priceForFilters(m, "rent", spec),
    },
    {
      key: "median_sale_price",
      label: segmentMedianLabel("buy", filters.propertyType, filters.bedroom),
      format: "currency",
      higherIsBetter: false,
      segmentMode: "buy",
      getValue: (m) => priceForFilters(m, "buy", spec),
    },
    {
      key: "minimum_rent",
      label: hasActiveSegmentFilters(filters) ? "Min rent (spec)" : "Min rent",
      format: "currency",
      higherIsBetter: false,
      getValue: (m) => {
        const segment = resolveSegmentStats(m, filters.propertyType, filters.bedroom);
        return segment?.minimum_rent ?? m.minimum_rent;
      },
    },
    {
      key: "maximum_rent",
      label: hasActiveSegmentFilters(filters) ? "Max rent (spec)" : "Max rent",
      format: "currency",
      higherIsBetter: false,
      getValue: (m) => {
        const segment = resolveSegmentStats(m, filters.propertyType, filters.bedroom);
        return segment?.maximum_rent ?? m.maximum_rent;
      },
    },
    {
      key: "yield_percent",
      label: "Gross yield",
      format: "percent",
      higherIsBetter: true,
      getValue: (m) => m.yield_percent,
    },
    {
      key: "opportunity_score",
      label: "Opportunity score",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => m.opportunity_score,
    },
    {
      key: "confidence_score",
      label: "Confidence",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => m.confidence_score,
    },
    {
      key: "rental_count",
      label: hasActiveSegmentFilters(filters) ? "Rental listings (spec)" : "Rental listings",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => segmentListingCount(m, filters, "rent"),
    },
    {
      key: "sale_count",
      label: hasActiveSegmentFilters(filters) ? "Sale listings (spec)" : "Sale listings",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => segmentListingCount(m, filters, "buy"),
    },
  ];
}

/** @deprecated Use buildCompareMetrics(filters) for spec-aware compare */
export const COMPARE_METRICS: CompareMetricRow[] = buildCompareMetrics({
  propertyType: null,
  bedroom: null,
});

export function getBestMarketId(
  markets: MarketMetric[],
  row: CompareMetricRow
): string | null {
  const withValues = markets
    .map((m) => ({ market_id: m.market_id, value: row.getValue(m) }))
    .filter((item): item is { market_id: string; value: number } => item.value != null);

  if (!withValues.length) return null;

  withValues.sort((a, b) => (row.higherIsBetter ? b.value - a.value : a.value - b.value));
  return withValues[0]?.market_id ?? null;
}
