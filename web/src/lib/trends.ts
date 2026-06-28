import type {
  ExploreMode,
  MarketTrendPoint,
  MarketTrendsPayload,
  TrendMover,
  TrendRange,
} from "@/lib/types";

export type { TrendRange };

const RANGE_DAYS: Record<TrendRange, number> = {
  "30d": 30,
  "90d": 90,
  "180d": 180,
};

export function parseTrendRange(value: string | null | undefined): TrendRange {
  if (value === "30d" || value === "180d") return value;
  return "90d";
}

export function trendRangeDays(range: TrendRange): number {
  return RANGE_DAYS[range];
}

export function startDateForRange(range: TrendRange, endDate = new Date()): string {
  const d = new Date(endDate);
  d.setUTCDate(d.getUTCDate() - trendRangeDays(range));
  return d.toISOString().slice(0, 10);
}

export function listingTypeForMode(mode: ExploreMode): "rent" | "sale" {
  return mode === "rent" ? "rent" : "sale";
}

export interface RawSnapshotRow {
  snapshot_date: string;
  median_price: number | null;
  listing_count: number;
}

function weightedMedianApprox(
  items: { price: number; count: number }[]
): number | null {
  if (!items.length) return null;
  const totalWeight = items.reduce((sum, item) => sum + item.count, 0);
  if (totalWeight <= 0) return null;
  const weighted = items.reduce((sum, item) => sum + item.price * item.count, 0);
  return Math.round(weighted / totalWeight);
}

export function aggregateSnapshotsByDate(rows: RawSnapshotRow[]): MarketTrendPoint[] {
  const byDate = new Map<string, { prices: { price: number; count: number }[]; listing_count: number }>();

  for (const row of rows) {
    if (!byDate.has(row.snapshot_date)) {
      byDate.set(row.snapshot_date, { prices: [], listing_count: 0 });
    }
    const bucket = byDate.get(row.snapshot_date)!;
    bucket.listing_count += row.listing_count;
    if (row.median_price != null && row.listing_count > 0) {
      bucket.prices.push({ price: row.median_price, count: row.listing_count });
    }
  }

  return [...byDate.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, { prices, listing_count }]) => ({
      date,
      median_price: weightedMedianApprox(prices),
      listing_count,
    }));
}

export function pctChange(
  first: number | null | undefined,
  last: number | null | undefined
): number | null {
  if (first == null || last == null || first === 0) return null;
  return Math.round(((last - first) / first) * 1000) / 10;
}

export function buildTrendsPayload(points: MarketTrendPoint[]): MarketTrendsPayload {
  const medianPoints = points.filter((point) => point.median_price != null);
  const firstMedian = medianPoints[0]?.median_price ?? null;
  const lastMedian = medianPoints[medianPoints.length - 1]?.median_price ?? null;
  const firstListings = points[0]?.listing_count ?? null;
  const lastListings = points[points.length - 1]?.listing_count ?? null;

  return {
    points,
    pct_change_median: pctChange(firstMedian, lastMedian),
    pct_change_listings: pctChange(firstListings, lastListings),
  };
}

export function formatPctChange(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${value.toFixed(1)}%`;
}

export function trendRangeLabel(range: TrendRange): string {
  return { "30d": "30 days", "90d": "90 days", "180d": "180 days" }[range];
}

const MIN_MOVER_POINTS = 2;

export function computeMoversFromSeries(
  seriesBySuburb: Map<string, MarketTrendPoint[]>,
  marketIds: Map<string, string>
): TrendMover[] {
  const movers: TrendMover[] = [];

  for (const [suburb, points] of seriesBySuburb) {
    const medianPoints = points.filter((point) => point.median_price != null);
    if (medianPoints.length < MIN_MOVER_POINTS) continue;

    const first = medianPoints[0]?.median_price ?? null;
    const last = medianPoints[medianPoints.length - 1]?.median_price ?? null;
    const change = pctChange(first, last);
    if (change == null) continue;

    movers.push({
      market_id: marketIds.get(suburb) ?? "",
      suburb,
      pct_change_median: change,
      median_price: last,
    });
  }

  return movers.filter((mover) => mover.market_id);
}

export function topMovers(movers: TrendMover[], direction: "up" | "down", limit = 3): TrendMover[] {
  const sorted =
    direction === "up"
      ? [...movers].sort((a, b) => b.pct_change_median - a.pct_change_median)
      : [...movers].sort((a, b) => a.pct_change_median - b.pct_change_median);
  return sorted.filter((mover) => (direction === "up" ? mover.pct_change_median > 0 : mover.pct_change_median < 0)).slice(0, limit);
}

export function formatChartDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-ZW", { month: "short", day: "numeric", timeZone: "UTC" });
}
