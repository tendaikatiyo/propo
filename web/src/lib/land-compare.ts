import type { LandMetric } from "@/lib/types";

export interface LandCompareMetricRow {
  key: string;
  label: string;
  format: "pricePerSqm" | "number" | "days";
  higherIsBetter: boolean;
  getValue: (market: LandMetric) => number | null;
}

export function buildLandCompareMetrics(): LandCompareMetricRow[] {
  return [
    {
      key: "median_price_per_sqm",
      label: "Median $/sqm",
      format: "pricePerSqm",
      higherIsBetter: false,
      getValue: (m) => m.median_price_per_sqm,
    },
    {
      key: "land_count",
      label: "Land listings",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => m.land_count,
    },
    {
      key: "confidence_score",
      label: "Confidence",
      format: "number",
      higherIsBetter: true,
      getValue: (m) => m.confidence_score,
    },
    {
      key: "minimum_price_per_sqm",
      label: "Min $/sqm",
      format: "pricePerSqm",
      higherIsBetter: false,
      getValue: (m) => m.minimum_price_per_sqm,
    },
    {
      key: "maximum_price_per_sqm",
      label: "Max $/sqm",
      format: "pricePerSqm",
      higherIsBetter: false,
      getValue: (m) => m.maximum_price_per_sqm,
    },
  ];
}

export function getBestLandMarketId(
  markets: LandMetric[],
  row: LandCompareMetricRow
): string | null {
  const withValues = markets
    .map((m) => ({ market_id: m.market_id, value: row.getValue(m) }))
    .filter((item): item is { market_id: string; value: number } => item.value != null);

  if (!withValues.length) return null;

  withValues.sort((a, b) => (row.higherIsBetter ? b.value - a.value : a.value - b.value));
  return withValues[0]?.market_id ?? null;
}
