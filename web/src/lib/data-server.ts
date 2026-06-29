import { readFile } from "fs/promises";
import path from "path";
import { execFileSync } from "child_process";

import { STRETCH_BUDGET_MULTIPLIER } from "@/lib/constants";
import { filterRankingsPayload, filterZimbabweCities, filterZimbabweMarkets, isZimbabweCity } from "@/lib/geo";
import { isLandPropertyType, resolveListingThumbnailUrl } from "@/lib/listings";
import { createServerSupabaseClient } from "@/lib/supabase";
import {
  aggregateSnapshotsByDate,
  buildTrendsPayload,
  computeMoversFromSeries,
  listingTypeForMode,
  parseTrendRange,
  startDateForRange,
  topMovers,
  type TrendRange,
} from "@/lib/trends";
import type {
  CityMetric,
  CityTrendMoversPayload,
  ExploreMode,
  Listing,
  MarketMetric,
  MarketTrendsPayload,
  PropertyType,
  RankingsPayload,
} from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "..", "data");
const REVALIDATE_SECONDS = 3600;

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

export async function fetchCities(): Promise<CityMetric[]> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("cities").select("*");
    if (error) {
      console.error("[data-server] cities:", error.message);
    } else if (data?.length) {
      return filterZimbabweCities(data as CityMetric[]);
    }
  }
  try {
    return filterZimbabweCities(await readLocalJson<CityMetric[]>("cities.json"));
  } catch {
    return [];
  }
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
  propertyType?: PropertyType | null;
  limit?: number;
  tier?: "in" | "stretch" | "value";
  medianPrice?: number | null;
}

function matchesListingQuery(listing: Listing, query: ListingQuery): boolean {
  if (isLandPropertyType(listing.property_type)) return false;

  const price = listing.price;
  if (!price || price <= 0) return false;

  const tier = query.tier ?? "in";
  if (tier === "in") {
    if (price > query.budget) return false;
  } else if (tier === "stretch") {
    const max = Math.round(query.budget * STRETCH_BUDGET_MULTIPLIER);
    if (price <= query.budget || price > max) return false;
  } else if (tier === "value") {
    const median = query.medianPrice;
    if (!median || median <= 0 || price > median) return false;
  }

  if (listing.city && !isZimbabweCity(listing.city)) return false;
  if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
  if (query.suburb && listing.suburb?.toLowerCase() !== query.suburb.toLowerCase()) return false;
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
      ? [...listings].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
      : [...listings].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
  return sorted.slice(0, limit);
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
  const listingType = query.mode === "rent" ? "rent" : "sale";
  const limit = query.limit ?? 4;

  const client = createServerSupabaseClient();
  if (client) {
    const tier = query.tier ?? "in";
    const stretchMax = Math.round(query.budget * STRETCH_BUDGET_MULTIPLIER);
    const priceCap =
      tier === "stretch"
        ? stretchMax
        : tier === "value"
          ? (query.medianPrice ?? query.budget)
          : query.budget;

    let request = client
      .from("listings")
      .select(
        "listing_url, title, price, price_raw, city, suburb, location, property_type, listing_type, bedrooms, days_on_market, agency_logo, image_url"
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

    if (query.city) request = request.ilike("city", query.city);
    if (query.suburb) request = request.ilike("suburb", query.suburb);
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
  suburb?: string;
  median_price: number | null;
  listing_count: number;
  min_price?: number | null;
  max_price?: number | null;
  listing_type?: "rent" | "sale";
}

function fetchTrendsFromLocalPython(
  command: "market" | "city-movers",
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

export async function fetchCityTrendMovers(
  city: string,
  markets: MarketMetric[],
  range: TrendRange,
  mode: ExploreMode
): Promise<CityTrendMoversPayload> {
  const listingType = listingTypeForMode(mode);
  const startDate = startDateForRange(range);
  const marketIds = new Map(markets.map((market) => [market.suburb, market.market_id]));

  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("market_snapshots_daily")
      .select("snapshot_date, suburb, median_price, listing_count, min_price, max_price, listing_type")
      .eq("city", city)
      .eq("listing_type", listingType)
      .gte("snapshot_date", startDate)
      .order("snapshot_date", { ascending: true });

    if (!error && data?.length) {
      const seriesBySuburb = new Map<string, ReturnType<typeof aggregateSnapshotsByDate>>();
      const grouped = new Map<string, SnapshotRow[]>();

      for (const row of data as SnapshotRow[]) {
        const suburb = row.suburb ?? "";
        if (!grouped.has(suburb)) grouped.set(suburb, []);
        grouped.get(suburb)!.push(row);
      }

      for (const [suburb, suburbRows] of grouped) {
        seriesBySuburb.set(
          suburb,
          aggregateSnapshotsByDate(
            suburbRows.map((row) => ({
              snapshot_date: row.snapshot_date,
              median_price: row.median_price,
              listing_count: row.listing_count,
              min_price: row.min_price,
              max_price: row.max_price,
              listing_type: listingType,
            }))
          )
        );
      }

      const movers = computeMoversFromSeries(seriesBySuburb, marketIds, listingType);
      return {
        risers: topMovers(movers, "up"),
        fallers: topMovers(movers, "down"),
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
    "market-ids-json": JSON.stringify(Object.fromEntries(marketIds)),
    limit: "3",
  }) as CityTrendMoversPayload | null;

  return payload ?? { risers: [], fallers: [] };
}

export function parseTrendQuery(rangeParam: string | null, modeParam: string | null): {
  range: TrendRange;
  mode: ExploreMode;
} {
  return {
    range: parseTrendRange(rangeParam),
    mode: modeParam === "buy" ? "buy" : "rent",
  };
}
