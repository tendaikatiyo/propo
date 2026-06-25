import type { MarketMetric } from "@/lib/types";
import { matchesSlug } from "@/lib/slug";

export function findMarketBySlugs(
  markets: MarketMetric[],
  citySlug: string,
  suburbSlug: string
): MarketMetric | undefined {
  return markets.find(
    (m) => matchesSlug(m.city, citySlug) && matchesSlug(m.suburb, suburbSlug)
  );
}

export function findCityMarkets(
  markets: MarketMetric[],
  citySlug: string
): MarketMetric[] {
  return markets.filter((m) => matchesSlug(m.city, citySlug));
}
