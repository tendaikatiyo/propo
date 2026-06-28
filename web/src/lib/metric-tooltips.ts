import type { ExploreMode, PropertyType, SortKey } from "@/lib/types";
import { segmentFilterLabel, segmentMedianLabel } from "@/lib/segments";

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
  "Average days listings stayed active in our scrape history for the selected mode (rent or buy).";

export const DOM_RENT_TOOLTIP =
  "Average days rental listings stayed active in our scrape history for this suburb.";

export const DOM_SALE_TOOLTIP =
  "Average days sale listings stayed active in our scrape history for this suburb.";

export const PRICE_TREND_TOOLTIP =
  "Daily median price from active listings, rolled up across property types in the suburb. Percent change compares the first and last snapshot in the selected range.";

export const SUPPLY_TREND_TOOLTIP =
  "Count of active listings captured in each daily snapshot. Rising supply can mean more choice; falling supply can mean tighter inventory.";

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
