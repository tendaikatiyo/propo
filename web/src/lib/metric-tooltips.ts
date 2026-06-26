import type { ExploreMode, SortKey } from "@/lib/types";

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
