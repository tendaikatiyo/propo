import type { CityMetric, MarketMetric, RankingEntry, RankingsPayload } from "@/lib/types";

/** Cities outside Zimbabwe that appear in scraped data. */
export const EXCLUDED_CITIES = new Set([
  "Johannesburg",
  "Port Shepston",
  "Pretoria",
  "Ongwediva",
  "Vilanculos",
]);

export const DEFAULT_CITY = "Harare";

export function isZimbabweCity(city: string): boolean {
  return !EXCLUDED_CITIES.has(city);
}

export function cityListingTotal(city: CityMetric): number {
  return (city.rental_count ?? 0) + (city.sale_count ?? 0);
}

export function filterZimbabweCities(cities: CityMetric[]): CityMetric[] {
  return cities.filter((c) => isZimbabweCity(c.city));
}

export function filterZimbabweMarkets(markets: MarketMetric[]): MarketMetric[] {
  return markets.filter((m) => isZimbabweCity(m.city));
}

export function sortCitiesByMarketSize(cities: CityMetric[]): CityMetric[] {
  return [...filterZimbabweCities(cities)].sort((a, b) => {
    const diff = cityListingTotal(b) - cityListingTotal(a);
    if (diff !== 0) return diff;
    return a.city.localeCompare(b.city);
  });
}

function filterRankingList(items: RankingEntry[]): RankingEntry[] {
  return items.filter((item) => isZimbabweCity(item.city));
}

export function filterRankingsPayload(payload: RankingsPayload): RankingsPayload {
  const national: Record<string, RankingEntry[]> = {};
  for (const [key, items] of Object.entries(payload.national)) {
    national[key] = filterRankingList(items);
  }

  const per_city: RankingsPayload["per_city"] = {};
  for (const [city, cityRankings] of Object.entries(payload.per_city)) {
    if (!isZimbabweCity(city)) continue;
    per_city[city] = {};
    for (const [key, items] of Object.entries(cityRankings)) {
      per_city[city][key] = filterRankingList(items);
    }
  }

  return { national, per_city };
}
