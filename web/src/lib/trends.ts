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
  min_price?: number | null;
  max_price?: number | null;
  listing_type?: "rent" | "sale";
}

const ZIG_USD_RATE = 27.5;
const ZIG_SCRAPE_MIN = 8_000;
const ZIG_RENT_MAX = 6_000;
const MAX_RENT_USD = 20_000;
const MAX_MOVER_PCT = 200;
const MIN_MOVER_SNAPSHOTS = 4;
const MIN_MOVER_LISTINGS = 5;
const MOVER_WINDOW = 3;

function inferUsdFromZig(price: number): number | null {
  if (price < ZIG_SCRAPE_MIN) return null;
  const usd = Math.round(price / ZIG_USD_RATE);
  if (usd <= 0) return null;
  if (Math.abs(usd * ZIG_USD_RATE - price) > 1) return null;
  if (usd >= 150 && usd <= ZIG_RENT_MAX) return usd;
  return null;
}

export function sanitizeSnapshotRentPrice(
  medianPrice: number | null | undefined,
  minPrice?: number | null,
  maxPrice?: number | null
): number | null {
  if (medianPrice == null) return null;
  if (medianPrice <= ZIG_RENT_MAX) return medianPrice;

  const zigMedian = inferUsdFromZig(medianPrice);
  if (zigMedian != null) return zigMedian;

  if (minPrice && maxPrice && minPrice > 0 && maxPrice > minPrice && maxPrice / minPrice >= 5) {
    const zigMax = inferUsdFromZig(maxPrice);
    const tolerance = Math.max(Math.round(minPrice * 0.5), 200);
    if (zigMax != null && Math.abs(zigMax - minPrice) <= tolerance) {
      return minPrice;
    }
  }

  if (medianPrice > MAX_RENT_USD) return null;
  return null;
}

function medianOf(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[mid] ?? null;
  return Math.round(((sorted[mid - 1] ?? 0) + (sorted[mid] ?? 0)) / 2);
}

function sanitizeRowPrice(row: RawSnapshotRow): number | null {
  if (row.listing_type === "sale") {
    return row.median_price;
  }
  return sanitizeSnapshotRentPrice(row.median_price, row.min_price, row.max_price);
}

export function aggregateSnapshotsByDate(rows: RawSnapshotRow[]): MarketTrendPoint[] {
  const byDate = new Map<
    string,
    { weightedSum: number; totalWeight: number; listing_count: number }
  >();

  for (const row of rows) {
    if (!byDate.has(row.snapshot_date)) {
      byDate.set(row.snapshot_date, { weightedSum: 0, totalWeight: 0, listing_count: 0 });
    }
    const bucket = byDate.get(row.snapshot_date)!;
    bucket.listing_count += row.listing_count;
    const price = sanitizeRowPrice(row);
    if (price != null && row.listing_count > 0) {
      bucket.weightedSum += price * row.listing_count;
      bucket.totalWeight += row.listing_count;
    }
  }

  return [...byDate.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, { weightedSum, totalWeight, listing_count }]) => ({
      date,
      median_price:
        totalWeight > 0 ? Math.round(weightedSum / totalWeight) : null,
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

function windowStats(
  points: MarketTrendPoint[],
  fromStart: boolean
): { price: number | null; listing_count: number } {
  const slice = fromStart ? points.slice(0, MOVER_WINDOW) : points.slice(-MOVER_WINDOW);
  const prices = slice
    .map((point) => point.median_price)
    .filter((price): price is number => price != null);
  const listing_count = slice.reduce((sum, point) => sum + point.listing_count, 0);
  return { price: medianOf(prices), listing_count };
}

function isPlausibleMover(
  change: number,
  points: MarketTrendPoint[],
  listingType: "rent" | "sale"
): boolean {
  if (points.length < MIN_MOVER_SNAPSHOTS) return false;
  if (Math.abs(change) > MAX_MOVER_PCT) return false;
  if (listingType === "rent") {
    const last = points[points.length - 1];
    if (last?.median_price != null && last.median_price > ZIG_RENT_MAX) return false;
  }
  return true;
}

export function computeMoversFromSeries(
  seriesBySuburb: Map<string, MarketTrendPoint[]>,
  marketIds: Map<string, string>,
  listingType: "rent" | "sale" = "rent"
): TrendMover[] {
  const movers: TrendMover[] = [];

  for (const [suburb, points] of seriesBySuburb) {
    const medianPoints = points.filter((point) => point.median_price != null);
    if (medianPoints.length < MIN_MOVER_SNAPSHOTS) continue;

    const start = windowStats(medianPoints, true);
    const end = windowStats(medianPoints, false);
    if (
      start.listing_count < MIN_MOVER_LISTINGS ||
      end.listing_count < MIN_MOVER_LISTINGS
    ) {
      continue;
    }

    const change = pctChange(start.price, end.price);
    if (change == null || !isPlausibleMover(change, medianPoints, listingType)) continue;

    movers.push({
      market_id: marketIds.get(suburb) ?? "",
      suburb,
      pct_change_median: change,
      median_price: end.price ?? null,
    });
  }

  return movers.filter((mover) => mover.market_id && mover.median_price != null);
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
