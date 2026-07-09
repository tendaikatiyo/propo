import type { CityMetric, ExploreMode, LandMetric, MarketMetric, RankingEntry, RankingsPayload } from "@/lib/types";

/** Cities outside Zimbabwe that appear in scraped data. */
export const EXCLUDED_CITIES = new Set([
  "Johannesburg",
  "Port Shepston",
  "Pretoria",
  "Ongwediva",
  "Vilanculos",
]);

/** Cities shown across the site (all modes). */
export const PUBLISHED_CITIES = ["Harare", "Bulawayo", "Ruwa"] as const;
export const PUBLISHED_CITY_SET = new Set<string>(PUBLISHED_CITIES);

export const DEFAULT_CITY = "Harare";

export function isPublishedCity(city: string): boolean {
  return PUBLISHED_CITY_SET.has(city);
}

/** @deprecated Prefer isPublishedCity — kept for existing call sites. */
export function isZimbabweCity(city: string): boolean {
  return isPublishedCity(city) && !EXCLUDED_CITIES.has(city);
}

export function cityListingTotal(city: CityMetric, mode?: ExploreMode): number {
  if (mode === "rent") return city.rental_count ?? 0;
  if (mode === "buy") return city.sale_count ?? 0;
  if (mode === "land") return city.land_count ?? 0;
  return (city.rental_count ?? 0) + (city.sale_count ?? 0) + (city.land_count ?? 0);
}

export function filterZimbabweCities(cities: CityMetric[]): CityMetric[] {
  return cities.filter((c) => isZimbabweCity(c.city));
}

export function filterZimbabweMarkets(markets: MarketMetric[]): MarketMetric[] {
  return markets.filter((m) => isZimbabweCity(m.city));
}

export function filterZimbabweLandMarkets(markets: LandMetric[]): LandMetric[] {
  return markets.filter((m) => isZimbabweCity(m.city));
}

export function sortCitiesByMarketSize(
  cities: CityMetric[],
  mode?: ExploreMode
): CityMetric[] {
  return [...filterZimbabweCities(cities)].sort((a, b) => {
    const diff = cityListingTotal(b, mode) - cityListingTotal(a, mode);
    if (diff !== 0) return diff;
    return a.city.localeCompare(b.city);
  });
}

export function marketActivityTotal(market: MarketMetric, mode?: ExploreMode): number {
  if (mode === "rent") return market.rental_count ?? 0;
  if (mode === "buy") return market.sale_count ?? 0;
  return (market.rental_count ?? 0) + (market.sale_count ?? 0);
}

export function sortMarketsByActivity(
  markets: MarketMetric[],
  mode?: ExploreMode
): MarketMetric[] {
  return [...markets].sort((a, b) => {
    const diff = marketActivityTotal(b, mode) - marketActivityTotal(a, mode);
    if (diff !== 0) return diff;
    return a.suburb.localeCompare(b.suburb);
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

  const land: RankingsPayload["land"] = {};
  if (payload.land) {
    for (const [key, items] of Object.entries(payload.land)) {
      land[key] = filterRankingList(items);
    }
  }

  return {
    national,
    per_city,
    ...(Object.keys(land).length ? { land } : {}),
  };
}
