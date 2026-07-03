import {
  MIN_CONFIDENCE_THRESHOLD,
  STRETCH_BUDGET_MULTIPLIER,
} from "@/lib/constants";
import type { ExploreFilters, LandMetric, SortDirection, SortKey } from "@/lib/types";

export interface LandExploreResult {
  inBudget: LandMetric[];
  stretch: LandMetric[];
  filtered: LandMetric[];
}

function landPrice(market: LandMetric): number | null {
  const price = market.median_price_per_sqm;
  if (price == null || price <= 0) return null;
  return price;
}

function passesConfidence(market: LandMetric, includeLowConfidence: boolean): boolean {
  if (includeLowConfidence) return true;
  return (market.confidence_score ?? 0) >= MIN_CONFIDENCE_THRESHOLD;
}

export function filterLandMarkets(
  markets: LandMetric[],
  filters: ExploreFilters
): LandExploreResult {
  const filtered = markets.filter((market) => {
    if (filters.city && market.city !== filters.city) return false;
    if ((market.priced_land_count ?? 0) <= 0) return false;
    if (!passesConfidence(market, filters.includeLowConfidence)) return false;
    const price = landPrice(market);
    if (price == null) return false;
    return true;
  });

  const inBudget: LandMetric[] = [];
  const stretch: LandMetric[] = [];

  for (const market of filtered) {
    const price = landPrice(market)!;
    if (price <= filters.budget) {
      inBudget.push(market);
    } else if (price <= filters.budget * STRETCH_BUDGET_MULTIPLIER) {
      stretch.push(market);
    }
  }

  return { inBudget, stretch, filtered };
}

export function rankLandExploreResults(markets: LandMetric[]): LandMetric[] {
  return [...markets].sort((a, b) => {
    const conf = (b.confidence_score ?? 0) - (a.confidence_score ?? 0);
    if (conf !== 0) return conf;
    const aPrice = a.median_price_per_sqm ?? Infinity;
    const bPrice = b.median_price_per_sqm ?? Infinity;
    return aPrice - bPrice;
  });
}

export function sortLandMarkets(
  markets: LandMetric[],
  key: SortKey,
  direction: SortDirection
): LandMetric[] {
  const sorted = [...markets].sort((a, b) => {
    if (key === "suburb") return a.suburb.localeCompare(b.suburb);
    if (key === "city") return a.city.localeCompare(b.city);
    if (key === "median_price_per_sqm") {
      const aVal = a.median_price_per_sqm ?? (direction === "asc" ? Infinity : -Infinity);
      const bVal = b.median_price_per_sqm ?? (direction === "asc" ? Infinity : -Infinity);
      return aVal - bVal;
    }
    if (key === "land_count") {
      return a.land_count - b.land_count;
    }
    if (key === "confidence_score") {
      return (a.confidence_score ?? 0) - (b.confidence_score ?? 0);
    }
    return 0;
  });
  return direction === "desc" ? sorted.reverse() : sorted;
}
