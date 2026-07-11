import { readFile } from "fs/promises";
import path from "path";
import { execFileSync } from "child_process";

import { STRETCH_BUDGET_MULTIPLIER, RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import { filterRankingsPayload, filterZimbabweCities, filterZimbabweLandMarkets, filterZimbabweMarkets, isZimbabweCity } from "@/lib/geo";
import { enrichLandListingFields, validPricePerSqm } from "@/lib/land-listings";
import { isLandPropertyType, resolveListingThumbnailUrl } from "@/lib/listings";
import { createServerSupabaseClient } from "@/lib/supabase";
import {
  aggregateSnapshotsByDate,
  buildTrendsPayload,
  computeDomMoversFromSeries,
  computeMoversFromSeries,
  computeSupplyMoversFromSeries,
  listingTypeForMode,
  marketSeriesKey,
  parseTrendRange,
  startDateForRange,
  topMovers,
  topMoversByMagnitude,
  type TrendRange,
} from "@/lib/trends";
import { buildMoverMarketLookup } from "@/lib/rankings";
import { parseExploreMode } from "@/lib/mode";
import type {
  CityMetric,
  CityTrendMoversPayload,
  ExploreMode,
  LandMetric,
  Listing,
  MarketMetric,
  MarketMoversRankingsPayload,
  MarketTrendsPayload,
  PropertyType,
  RankingsPayload,
} from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "..", "data");
const REVALIDATE_SECONDS = 3600;
const NATIONAL_SNAPSHOT_PAGE_SIZE = 1000;

function stretchPriceCap(budget: number): number {
  return Math.round(budget * STRETCH_BUDGET_MULTIPLIER);
}

async function readLocalJson<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function fetchMarketMetrics(): Promise<MarketMetric[]> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("market_metrics").select("*");
    if (error) {
      console.error("[data-server] market_metrics:", error.message);
    } else if (data?.length) {
      return filterZimbabweMarkets(data as MarketMetric[]);
    }
  }
  try {
    return filterZimbabweMarkets(await readLocalJson<MarketMetric[]>("market_metrics.json"));
  } catch {
    return [];
  }
}

export async function fetchLandMetrics(): Promise<LandMetric[]> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("land_metrics").select("*");
    if (error) {
      console.error("[data-server] land_metrics:", error.message);
    } else if (data?.length) {
      return filterZimbabweLandMarkets(data as LandMetric[]);
    }
  }
  try {
    return filterZimbabweLandMarkets(await readLocalJson<LandMetric[]>("land_metrics.json"));
  } catch {
    return [];
  }
}

export async function fetchCities(): Promise<CityMetric[]> {
  let cities: CityMetric[] = [];
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("cities").select("*");
    if (error) {
      console.error("[data-server] cities:", error.message);
    } else if (data?.length) {
      cities = filterZimbabweCities(data as CityMetric[]);
    }
  }
  if (!cities.length) {
    try {
      cities = filterZimbabweCities(await readLocalJson<CityMetric[]>("cities.json"));
    } catch {
      return [];
    }
  }
  return enrichCitiesWithLandCounts(cities);
}

async function enrichCitiesWithLandCounts(cities: CityMetric[]): Promise<CityMetric[]> {
  const landMarkets = await fetchLandMetrics();
  if (!landMarkets.length) {
    return cities.map((city) => ({ ...city, land_count: city.land_count ?? 0 }));
  }

  const landByCity = new Map<string, number>();
  for (const market of landMarkets) {
    landByCity.set(market.city, (landByCity.get(market.city) ?? 0) + market.land_count);
  }

  return cities.map((city) => ({
    ...city,
    land_count: landByCity.get(city.city) ?? city.land_count ?? 0,
  }));
}

export async function fetchRankings(): Promise<RankingsPayload | null> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("rankings")
      .select("payload")
      .eq("id", "current")
      .maybeSingle();
    if (error) {
      console.error("[data-server] rankings:", error.message);
    } else if (data?.payload) {
      return filterRankingsPayload(data.payload as RankingsPayload);
    }
  }
  try {
    const payload = await readLocalJson<RankingsPayload>("rankings.json");
    return filterRankingsPayload(payload);
  } catch {
    return null;
  }
}

export interface ListingQuery {
  mode: ExploreMode;
  budget: number;
  city?: string | null;
  suburb?: string | null;
  marketId?: string | null;
  propertyType?: PropertyType | null;
  limit?: number;
  tier?: "in" | "stretch" | "value";
  medianPrice?: number | null;
}

function matchesLandListingQuery(listing: Listing, query: ListingQuery): boolean {
  const pps = validPricePerSqm(listing);
  if (pps == null) return false;

  const tier = query.tier ?? "in";
  if (tier === "in") {
    if (pps > query.budget) return false;
  } else if (tier === "stretch") {
    const max = stretchPriceCap(query.budget);
    if (pps <= query.budget || pps > max) return false;
  } else if (tier === "value") {
    const median = query.medianPrice;
    if (!median || median <= 0 || pps > median) return false;
  }

  if (listing.city && !isZimbabweCity(listing.city)) return false;

  if (query.marketId) {
    if (listing.market_id) {
      if (listing.market_id !== query.marketId) return false;
    } else {
      if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
      if (query.suburb && listing.suburb?.toLowerCase() !== query.suburb.toLowerCase()) {
        return false;
      }
    }
  } else {
    if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
    if (query.suburb && listing.suburb?.toLowerCase() !== query.suburb.toLowerCase()) {
      return false;
    }
  }

  return true;
}

function matchesListingQuery(listing: Listing, query: ListingQuery): boolean {
  if (query.mode === "land") {
    return matchesLandListingQuery(listing, query);
  }
  if (isLandPropertyType(listing.property_type)) return false;

  const price = listing.price;
  if (!price || price <= 0) return false;

  const tier = query.tier ?? "in";
  if (tier === "in") {
    if (price > query.budget) return false;
  } else if (tier === "stretch") {
    const max = stretchPriceCap(query.budget);
    if (price <= query.budget || price > max) return false;
  } else if (tier === "value") {
    const median = query.medianPrice;
    if (!median || median <= 0 || price > median) return false;
  }

  if (listing.city && !isZimbabweCity(listing.city)) return false;

  if (query.marketId) {
    if (listing.market_id) {
      if (listing.market_id !== query.marketId) return false;
    } else {
      if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
      if (query.suburb && listing.suburb?.toLowerCase() !== query.suburb.toLowerCase()) {
        return false;
      }
    }
  } else {
    if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
    if (query.suburb && listing.suburb?.toLowerCase() !== query.suburb.toLowerCase()) {
      return false;
    }
  }
  if (query.propertyType) {
    if (query.propertyType === "flat") {
      if (listing.property_type !== "flat" && listing.property_type !== "apartment") {
        return false;
      }
    } else if (listing.property_type !== query.propertyType) {
      return false;
    }
  }
  return true;
}

function rankListings(listings: Listing[], limit: number, tier: ListingQuery["tier"] = "in"): Listing[] {
  const sorted =
    tier === "value"
      ? [...listings].sort((a, b) => {
          const aVal = a.price_per_sqm ?? a.price ?? Infinity;
          const bVal = b.price_per_sqm ?? b.price ?? Infinity;
          return aVal - bVal;
        })
      : [...listings].sort((a, b) => {
          const aVal = a.price_per_sqm ?? a.price ?? 0;
          const bVal = b.price_per_sqm ?? b.price ?? 0;
          return bVal - aVal;
        });
  return sorted.slice(0, limit);
}

interface CleanLandRow {
  market_id?: string;
  city?: string | null;
  suburb?: string | null;
  title?: string | null;
  listing_url: string;
  price?: number | null;
  price_raw?: string | null;
  location?: string | null;
  property_type?: string | null;
  listing_type?: string;
  land_size?: number | null;
  land_size_unit?: string | null;
  agency_name?: string | null;
  agency_logo?: string | null;
  days_on_market?: number | null;
}

function mapCleanLandRow(row: CleanLandRow): Listing {
  const enriched = enrichLandListingFields({
    land_size: row.land_size,
    land_size_unit: row.land_size_unit,
    price: row.price,
  });

  const listing: Listing = {
    listing_url: row.listing_url,
    title: row.title ?? null,
    price: row.price ?? null,
    price_raw: row.price_raw ?? null,
    city: row.city ?? null,
    suburb: row.suburb ?? null,
    location: row.location ?? null,
    property_type: row.property_type ?? "residential_land",
    listing_type: row.listing_type ?? "sale",
    market_id: row.market_id ?? null,
    land_size: row.land_size ?? null,
    land_size_unit: row.land_size_unit ?? null,
    land_size_sqm: enriched.land_size_sqm ?? null,
    price_per_sqm: enriched.price_per_sqm ?? null,
    days_on_market: row.days_on_market ?? null,
    agency_logo: row.agency_logo ?? null,
    image_url: null,
  };

  return withImageUrl(listing);
}

async function fetchLandListings(query: ListingQuery): Promise<Listing[]> {
  const limit = query.limit ?? 4;
  const client = createServerSupabaseClient();

  if (client) {
    let request = client
      .from("listings")
      .select(
        "listing_url, title, price, price_raw, city, suburb, location, property_type, listing_type, days_on_market, agency_logo, image_url, market_id, land_size, land_size_unit"
      )
      .eq("listing_type", "sale")
      .eq("is_active", true)
      .eq("property_type", "residential_land")
      .not("price", "is", null)
      .limit(300);

    if (query.marketId) {
      request = request.eq("market_id", query.marketId);
    } else {
      if (query.city) request = request.ilike("city", query.city);
      if (query.suburb) request = request.ilike("suburb", query.suburb);
    }

    const { data, error } = await request;
    if (!error && data) {
      const matched = (data as Listing[])
        .map((row) => {
          const enriched = enrichLandListingFields({
            land_size: row.land_size,
            land_size_unit: row.land_size_unit,
            price: row.price,
          });
          return withImageUrl({
            ...row,
            land_size_sqm: enriched.land_size_sqm ?? null,
            price_per_sqm: enriched.price_per_sqm ?? null,
          });
        })
        .filter((row) => matchesLandListingQuery(row, query));
      return rankListings(matched, limit, query.tier);
    }
  }

  try {
    const all = await readLocalJson<CleanLandRow[]>("clean_land.json");
    const matched = all.map(mapCleanLandRow).filter((row) => matchesLandListingQuery(row, query));
    return rankListings(matched, limit, query.tier);
  } catch {
    return [];
  }
}

const listingImageCache = new Map<string, Map<string, string>>();

async function loadListingImageMap(listingType: "rent" | "sale"): Promise<Map<string, string>> {
  const cached = listingImageCache.get(listingType);
  if (cached) return cached;

  const filename = listingType === "rent" ? "rentals.json" : "sales.json";
  try {
    const raw = await readLocalJson<
      { listing_url: string; agency_logo?: string; image_url?: string }[]
    >(filename);
    const map = new Map<string, string>();
    for (const row of raw) {
      const url = resolveListingThumbnailUrl(row);
      if (url) map.set(row.listing_url, url);
    }
    listingImageCache.set(listingType, map);
    return map;
  } catch {
    const empty = new Map<string, string>();
    listingImageCache.set(listingType, empty);
    return empty;
  }
}

function withImageUrl(listing: Listing): Listing {
  const image_url = resolveListingThumbnailUrl(listing);
  return image_url ? { ...listing, image_url } : { ...listing, image_url: null };
}

async function enrichLocalListingImages(
  listings: Listing[],
  listingType: "rent" | "sale"
): Promise<Listing[]> {
  const imageMap = await loadListingImageMap(listingType);
  return listings.map((listing) =>
    withImageUrl({
      ...listing,
      image_url: listing.image_url ?? imageMap.get(listing.listing_url) ?? null,
    })
  );
}

export async function fetchListings(query: ListingQuery): Promise<Listing[]> {
  if (query.mode === "land") {
    return fetchLandListings(query);
  }

  const listingType = query.mode === "rent" ? "rent" : "sale";
  const limit = query.limit ?? 4;

  const client = createServerSupabaseClient();
  if (client) {
    const tier = query.tier ?? "in";
    const stretchMax = stretchPriceCap(query.budget);
    const priceCap =
      tier === "stretch"
        ? stretchMax
        : tier === "value"
          ? (query.medianPrice ?? query.budget)
          : query.budget;

    let request = client
      .from("listings")
      .select(
        "listing_url, title, price, price_raw, city, suburb, location, property_type, listing_type, bedrooms, days_on_market, agency_logo, image_url, market_id"
      )
      .eq("listing_type", listingType)
      .eq("is_active", true)
      .lte("price", priceCap)
      .not("price", "is", null)
      .order("price", { ascending: tier === "value" })
      .limit(120);

    if (tier === "stretch") {
      request = request.gt("price", query.budget);
    }

    if (query.marketId) {
      request = request.eq("market_id", query.marketId);
    } else {
      if (query.city) request = request.ilike("city", query.city);
      if (query.suburb) request = request.ilike("suburb", query.suburb);
    }
    if (query.propertyType === "flat") {
      request = request.in("property_type", ["flat", "apartment"]);
    } else if (query.propertyType) {
      request = request.eq("property_type", query.propertyType);
    }

    const { data, error } = await request;
    if (!error && data) {
      const matched = (data as Listing[])
        .map(withImageUrl)
        .filter((row) => matchesListingQuery(row, query));
      return rankListings(matched, limit, query.tier);
    }
  }

  try {
    const filename = listingType === "rent" ? "clean_rentals.json" : "clean_sales.json";
    const all = await readLocalJson<Listing[]>(filename);
    const matched = all.filter((row) => matchesListingQuery(row, query));
    const ranked = rankListings(matched, limit, query.tier);
    return enrichLocalListingImages(ranked, listingType);
  } catch {
    return [];
  }
}

export const dashboardRevalidate = REVALIDATE_SECONDS;

const REPO_ROOT = path.join(process.cwd(), "..");

interface SnapshotRow {
  snapshot_date: string;
  city?: string;
  suburb?: string;
  median_price: number | null;
  listing_count: number;
  min_price?: number | null;
  max_price?: number | null;
  listing_type?: "rent" | "sale";
  median_days_on_market?: number | null;
}

function fetchTrendsFromLocalPython(
  command: "market" | "land-market" | "city-movers" | "national-movers",
  args: Record<string, string>
): unknown | null {
  try {
    const cliArgs = ["-m", "analytics.trends_fetch", command];
    for (const [key, value] of Object.entries(args)) {
      cliArgs.push(`--${key}`, value);
    }
    const output = execFileSync("python", cliArgs, {
      cwd: REPO_ROOT,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return JSON.parse(output.trim());
  } catch (error) {
    console.error("[data-server] local trends fallback:", error);
    return null;
  }
}

async function fetchSnapshotRows(params: {
  city: string;
  suburb?: string;
  listingType: "rent" | "sale";
  startDate: string;
}): Promise<SnapshotRow[]> {
  const client = createServerSupabaseClient();
  if (client) {
    let request = client
      .from("market_snapshots_daily")
      .select("snapshot_date, suburb, median_price, listing_count, min_price, max_price, listing_type")
      .eq("city", params.city)
      .eq("listing_type", params.listingType)
      .gte("snapshot_date", params.startDate)
      .order("snapshot_date", { ascending: true });

    if (params.suburb) {
      request = request.eq("suburb", params.suburb);
    }

    const { data, error } = await request;
    if (!error && data?.length) {
      return data as SnapshotRow[];
    }
    if (error) {
      console.error("[data-server] market_snapshots_daily:", error.message);
    }
  }

  if (params.suburb) {
    const payload = fetchTrendsFromLocalPython("market", {
      city: params.city,
      suburb: params.suburb,
      "listing-type": params.listingType,
      "start-date": params.startDate,
    }) as MarketTrendsPayload | null;

    if (payload?.points?.length) {
      return payload.points.map((point) => ({
        snapshot_date: point.date,
        median_price: point.median_price,
        listing_count: point.listing_count,
        listing_type: params.listingType,
      }));
    }
  }

  return [];
}

export async function fetchMarketTrends(
  market: Pick<MarketMetric, "city" | "suburb">,
  range: TrendRange,
  mode: ExploreMode
): Promise<MarketTrendsPayload> {
  const listingType = listingTypeForMode(mode);
  const startDate = startDateForRange(range);
  const rows = await fetchSnapshotRows({
    city: market.city,
    suburb: market.suburb,
    listingType,
    startDate,
  });

  const points = aggregateSnapshotsByDate(
    rows.map((row) => ({
      snapshot_date: row.snapshot_date,
      median_price: row.median_price,
      listing_count: row.listing_count,
      min_price: row.min_price,
      max_price: row.max_price,
      listing_type: listingType,
    }))
  );

  return buildTrendsPayload(points);
}

interface LandSnapshotRow {
  snapshot_date: string;
  city?: string;
  suburb?: string;
  median_price_per_sqm: number | null;
  priced_land_count: number;
  median_days_on_market?: number | null;
}

async function fetchLandSnapshotRows(params: {
  city: string;
  suburb?: string;
  startDate: string;
}): Promise<LandSnapshotRow[]> {
  const client = createServerSupabaseClient();
  if (client) {
    let request = client
      .from("land_snapshots_daily")
      .select(
        "snapshot_date, suburb, median_price_per_sqm, priced_land_count, median_days_on_market"
      )
      .eq("city", params.city)
      .gte("snapshot_date", params.startDate)
      .order("snapshot_date", { ascending: true });

    if (params.suburb) {
      request = request.eq("suburb", params.suburb);
    }

    const { data, error } = await request;
    if (!error && data?.length) {
      return data as LandSnapshotRow[];
    }
    if (error) {
      console.error("[data-server] land_snapshots_daily:", error.message);
    }
  }

  if (params.suburb) {
    const payload = fetchTrendsFromLocalPython("land-market", {
      city: params.city,
      suburb: params.suburb,
      "start-date": params.startDate,
    }) as MarketTrendsPayload | null;

    if (payload?.points?.length) {
      return payload.points.map((point) => ({
        snapshot_date: point.date,
        median_price_per_sqm: point.median_price,
        priced_land_count: point.listing_count,
        median_days_on_market: point.median_days_on_market,
      }));
    }
  }

  return [];
}

export async function fetchLandMarketTrends(
  market: Pick<LandMetric, "city" | "suburb">,
  range: TrendRange
): Promise<MarketTrendsPayload> {
  const startDate = startDateForRange(range);
  const rows = await fetchLandSnapshotRows({
    city: market.city,
    suburb: market.suburb,
    startDate,
  });

  const points = rows.map((row) => ({
    date: row.snapshot_date,
    median_price: row.median_price_per_sqm,
    listing_count: row.priced_land_count,
    median_days_on_market: row.median_days_on_market ?? null,
  }));

  return buildTrendsPayload(points);
}

function rowsToSeriesMap(
  rows: SnapshotRow[],
  listingType: "rent" | "sale"
): Map<string, ReturnType<typeof aggregateSnapshotsByDate>> {
  const grouped = new Map<string, SnapshotRow[]>();

  for (const row of rows) {
    const city = row.city ?? "";
    const suburb = row.suburb ?? "";
    if (!city || !suburb) continue;
    const key = marketSeriesKey(city, suburb);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(row);
  }

  const seriesByKey = new Map<string, ReturnType<typeof aggregateSnapshotsByDate>>();
  for (const [key, suburbRows] of grouped) {
    seriesByKey.set(
      key,
      aggregateSnapshotsByDate(
        suburbRows.map((row) => ({
          snapshot_date: row.snapshot_date,
          median_price: row.median_price,
          listing_count: row.listing_count,
          min_price: row.min_price,
          max_price: row.max_price,
          listing_type: listingType,
          median_days_on_market: row.median_days_on_market,
        }))
      )
    );
  }

  return seriesByKey;
}

function emptyMoversPayload(range: TrendRange): MarketMoversRankingsPayload {
  return {
    range,
    rent_risers: [],
    rent_fallers: [],
    sale_risers: [],
    sale_fallers: [],
    supply_surge: [],
    dom_shift: [],
  };
}

function buildMoversRankingsPayload(
  seriesByKeyRent: Map<string, ReturnType<typeof aggregateSnapshotsByDate>>,
  seriesByKeySale: Map<string, ReturnType<typeof aggregateSnapshotsByDate>>,
  marketLookup: ReturnType<typeof buildMoverMarketLookup>,
  range: TrendRange,
  limit: number
): MarketMoversRankingsPayload {
  const rentMovers = computeMoversFromSeries(seriesByKeyRent, marketLookup, "rent");
  const saleMovers = computeMoversFromSeries(seriesByKeySale, marketLookup, "sale");
  const supplySeries = new Map<string, ReturnType<typeof aggregateSnapshotsByDate>>();

  for (const [key, points] of seriesByKeyRent) {
    supplySeries.set(key, points);
  }
  for (const [key, points] of seriesByKeySale) {
    const existing = supplySeries.get(key) ?? [];
    const merged = [...existing];
    for (const point of points) {
      const match = merged.find((item) => item.date === point.date);
      if (match) {
        match.listing_count += point.listing_count;
      } else {
        merged.push({ ...point });
      }
    }
    supplySeries.set(
      key,
      merged.sort((a, b) => a.date.localeCompare(b.date))
    );
  }

  const supplyMovers = computeSupplyMoversFromSeries(supplySeries, marketLookup);
  const domMovers = computeDomMoversFromSeries(seriesByKeyRent, marketLookup);

  return {
    range,
    rent_risers: topMovers(rentMovers, "up", limit),
    rent_fallers: topMovers(rentMovers, "down", limit),
    sale_risers: topMovers(saleMovers, "up", limit),
    sale_fallers: topMovers(saleMovers, "down", limit),
    supply_surge: topMovers(supplyMovers, "up", limit),
    dom_shift: topMoversByMagnitude(domMovers, limit),
  };
}

export async function fetchCityTrendMovers(
  city: string,
  markets: MarketMetric[],
  range: TrendRange,
  mode: ExploreMode,
  limit = 3
): Promise<CityTrendMoversPayload> {
  const listingType = listingTypeForMode(mode);
  const startDate = startDateForRange(range);
  const eligibleMarkets = markets.filter(
    (market) =>
      market.city === city && market.confidence_score >= RANKINGS_MIN_CONFIDENCE
  );
  const marketLookup = buildMoverMarketLookup(eligibleMarkets, RANKINGS_MIN_CONFIDENCE);

  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("market_snapshots_daily")
      .select(
        "snapshot_date, suburb, median_price, listing_count, min_price, max_price, listing_type"
      )
      .eq("city", city)
      .eq("listing_type", listingType)
      .gte("snapshot_date", startDate)
      .order("snapshot_date", { ascending: true });

    if (!error && data?.length) {
      const rows = (data as SnapshotRow[]).map((row) => ({ ...row, city }));
      const seriesByKey = rowsToSeriesMap(rows, listingType);
      const movers = computeMoversFromSeries(seriesByKey, marketLookup, listingType);
      return {
        risers: topMovers(movers, "up", limit),
        fallers: topMovers(movers, "down", limit),
      };
    }

    if (error) {
      console.error("[data-server] city trend movers:", error.message);
    }
  }

  const payload = fetchTrendsFromLocalPython("city-movers", {
    city,
    "listing-type": listingType,
    "start-date": startDate,
    "market-ids-json": JSON.stringify(
      Object.fromEntries(
        [...marketLookup.entries()].map(([key, value]) => [value.suburb, value.market_id])
      )
    ),
    limit: String(limit),
  }) as CityTrendMoversPayload | null;

  return payload ?? { risers: [], fallers: [] };
}

export async function fetchNationalTrendMovers(
  markets: MarketMetric[],
  range: TrendRange = "90d",
  limit = 10
): Promise<MarketMoversRankingsPayload> {
  const startDate = startDateForRange(range);
  const marketLookup = buildMoverMarketLookup(markets, RANKINGS_MIN_CONFIDENCE);

  const client = createServerSupabaseClient();
  if (client) {
    const lookupKeys = new Set(marketLookup.keys());
    const cities = [
      ...new Set([...marketLookup.values()].map((entry) => entry.city)),
    ];
    const rows: SnapshotRow[] = [];
    let fetchError: string | null = null;

    if (cities.length > 0) {
      for (let from = 0; ; from += NATIONAL_SNAPSHOT_PAGE_SIZE) {
        const to = from + NATIONAL_SNAPSHOT_PAGE_SIZE - 1;
        const { data, error } = await client
          .from("market_snapshots_daily")
          .select(
            "snapshot_date, city, suburb, median_price, listing_count, min_price, max_price, listing_type, median_days_on_market"
          )
          .gte("snapshot_date", startDate)
          .in("city", cities)
          .order("snapshot_date", { ascending: true })
          .range(from, to);

        if (error) {
          fetchError = error.message;
          break;
        }

        const page = (data ?? []) as SnapshotRow[];
        for (const row of page) {
          const key = marketSeriesKey(row.city ?? "", row.suburb ?? "");
          if (lookupKeys.has(key)) rows.push(row);
        }

        if (page.length < NATIONAL_SNAPSHOT_PAGE_SIZE) break;
      }
    }

    if (!fetchError && rows.length) {
      const rentRows = rows.filter((row) => row.listing_type === "rent");
      const saleRows = rows.filter((row) => row.listing_type === "sale");
      return buildMoversRankingsPayload(
        rowsToSeriesMap(rentRows, "rent"),
        rowsToSeriesMap(saleRows, "sale"),
        marketLookup,
        range,
        limit
      );
    }

    if (fetchError) {
      console.error("[data-server] national trend movers:", fetchError);
    }
  }

  const payload = fetchTrendsFromLocalPython("national-movers", {
    "start-date": startDate,
    "market-lookup-json": JSON.stringify(Object.fromEntries(marketLookup)),
    limit: String(limit),
    range,
  }) as MarketMoversRankingsPayload | null;

  return payload ?? emptyMoversPayload(range);
}

export function parseTrendQuery(rangeParam: string | null, modeParam: string | null): {
  range: TrendRange;
  mode: ExploreMode;
} {
  return {
    range: parseTrendRange(rangeParam),
    mode: parseExploreMode(modeParam),
  };
}
