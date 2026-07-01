import { MIN_SEGMENT_LISTINGS } from "@/lib/constants";
import type { ExploreMode, PropertyType, SortKey } from "@/lib/types";
import {
  dataScopeLabel,
  hasActiveSegmentFilters,
  segmentFilterLabel,
  segmentMedianLabel,
} from "@/lib/segments";

export const COLUMN_TOOLTIPS: Record<SortKey, string> = {
  suburb: "Suburb or neighbourhood name within the city.",
  city: "City where this market is located.",
  median_rent: "Median monthly rent from active rental listings in this suburb.",
  median_sale_price: "Median asking sale price from active sale listings in this suburb.",
  yield_percent:
    "Gross rental yield: (median rent × 12) ÷ median sale price. Useful for investors comparing buy-to-rent potential.",
  confidence_score:
    "How much listing data supports these medians. Higher scores mean more rentals and sales were observed.",
  opportunity_score:
    "Combined signal from yield, listing volume, and rent/sale balance. Higher may indicate stronger investment interest.",
};

export const DOM_TOOLTIP =
  "Average days listings stayed active in our data history for the selected mode (rent or buy).";

export const DOM_RENT_TOOLTIP =
  "Average days rental listings stayed active in our data history for this suburb.";

export const DOM_SALE_TOOLTIP =
  "Average days sale listings stayed active in our data history for this suburb.";

export const PRICE_TREND_TOOLTIP =
  "Daily median price from active listings, rolled up across property types in the suburb. Percent change compares the first and last snapshot in the selected range.";

export const SUPPLY_TREND_TOOLTIP =
  "Count of active listings captured in each daily snapshot. Rising supply can mean more choice; falling supply can mean tighter inventory.";

export const FAIR_VALUE_TOOLTIP =
  "Compares this listing's price to the suburb median for the same property type and bedroom count when enough listings exist; otherwise uses the suburb-wide median. Badges appear only when the difference is at least 5%.";

export function fairValueTooltipDetail(
  medianLabel: string,
  usedAggregate: boolean,
  sampleCount: number
): string {
  const basis = usedAggregate
    ? `Suburb-wide median: ${medianLabel} (n=${sampleCount}).`
    : `Segment median: ${medianLabel} (n=${sampleCount}).`;
  return `${basis} ${FAIR_VALUE_TOOLTIP}`;
}

export function columnsForMode(mode: ExploreMode): SortKey[] {
  const base: SortKey[] = ["suburb", "city", "median_rent"];
  if (mode === "buy") {
    base.push("median_sale_price", "yield_percent", "opportunity_score");
  }
  base.push("confidence_score");
  return base;
}

export function columnsForCityDashboard(): SortKey[] {
  return [
    "suburb",
    "median_rent",
    "median_sale_price",
    "yield_percent",
    "opportunity_score",
    "confidence_score",
  ];
}

export function sampleSizeLabel(count: number, mode: "rent" | "buy"): string {
  const noun = mode === "rent" ? "rental listing" : "sale listing";
  const plural = count === 1 ? "" : "s";
  return `Based on ${count} active ${noun}${plural}`;
}

export function sampleSizeTooltip(mode: "rent" | "buy"): string {
  if (mode === "rent") {
    return "Count of active rental listings in our latest data for this suburb or segment.";
  }
  return "Count of active sale listings in our latest data for this suburb or segment.";
}

export function segmentLimitedDataTooltip(count: number): string {
  return `Limited data (n=${count}). We need at least ${MIN_SEGMENT_LISTINGS} matching listings for a reliable segment median; suburb-wide medians may be shown instead.`;
}

export function exploreScopeDescription(
  mode: ExploreMode,
  propertyType: PropertyType | null,
  bedroom: number | null,
  hideSuburbMedianFallback: boolean
): string {
  if (!hasActiveSegmentFilters({ propertyType, bedroom })) {
    return "Prices use suburb-wide medians across all property types in each suburb.";
  }

  const scope = dataScopeLabel(propertyType, bedroom);
  const priceLabel = mode === "rent" ? "rent" : "sale price";

  if (hideSuburbMedianFallback) {
    return `Showing ${scope}. Medians use listings for that property type when at least ${MIN_SEGMENT_LISTINGS} exist; suburbs without enough data are hidden.`;
  }

  return `Showing ${scope}. Medians prefer type-matched listings (n≥${MIN_SEGMENT_LISTINGS}); otherwise suburb-wide ${priceLabel} is shown — look for “Suburb median” under prices.`;
}

export function exploreBudgetDescription(
  mode: ExploreMode,
  budgetLabel: string,
  propertyType: PropertyType | null,
  bedroom: number | null
): string {
  const priceLabel = mode === "rent" ? "rent" : "sale price";
  const spec = segmentFilterLabel(propertyType, bedroom);
  if (spec) {
    return `Suburbs with median ${priceLabel} (${spec}) at or below ${budgetLabel}.`;
  }
  return `Suburbs with median ${priceLabel} at or below ${budgetLabel}.`;
}

export function columnLabelForMode(
  key: SortKey,
  mode: ExploreMode,
  propertyType: PropertyType | null,
  bedroom: number | null
): string {
  if (key === "median_rent") return segmentMedianLabel("rent", propertyType, bedroom);
  if (key === "median_sale_price") return segmentMedianLabel("buy", propertyType, bedroom);
  const labels: Record<SortKey, string> = {
    suburb: "Suburb",
    city: "City",
    median_rent: "Median rent",
    median_sale_price: "Median sale",
    yield_percent: "Yield",
    opportunity_score: "Opportunity",
    confidence_score: "Confidence",
  };
  return labels[key];
}

const COMPARE_METRIC_TOOLTIPS: Record<string, string> = {
  median_rent: COLUMN_TOOLTIPS.median_rent,
  median_sale_price: COLUMN_TOOLTIPS.median_sale_price,
  yield_percent: COLUMN_TOOLTIPS.yield_percent,
  opportunity_score: COLUMN_TOOLTIPS.opportunity_score,
  confidence_score: COLUMN_TOOLTIPS.confidence_score,
  rental_count: "Count of active rental listings in the suburb or segment.",
  sale_count: "Count of active sale listings in the suburb or segment.",
};

export function compareMetricTooltip(
  key: string,
  propertyType: PropertyType | null,
  bedroom: number | null
): string | undefined {
  if (key === "median_rent" || key === "median_sale_price") {
    const mode = key === "median_rent" ? "rent" : "buy";
    const spec = segmentFilterLabel(propertyType, bedroom);
    const base = COMPARE_METRIC_TOOLTIPS[key] ?? "";
    if (spec) {
      return `${base} With spec filters active, uses ${spec} segment median when n≥3; otherwise suburb-wide median.`;
    }
    return base;
  }
  return COMPARE_METRIC_TOOLTIPS[key];
}
