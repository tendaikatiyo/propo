import { readFile } from "fs/promises";
import path from "path";

import { filterRankingsPayload, filterZimbabweCities, filterZimbabweMarkets, isZimbabweCity } from "@/lib/geo";
import { createServerSupabaseClient } from "@/lib/supabase";
import type {
  CityMetric,
  ExploreMode,
  Listing,
  MarketMetric,
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
    if (!error && data) return filterZimbabweMarkets(data as MarketMetric[]);
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
    if (!error && data) return filterZimbabweCities(data as CityMetric[]);
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
    if (!error && data?.payload) {
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
  propertyType?: PropertyType | null;
  limit?: number;
}

function matchesListingQuery(listing: Listing, query: ListingQuery): boolean {
  if (!listing.price || listing.price <= 0 || listing.price > query.budget) return false;
  if (listing.city && !isZimbabweCity(listing.city)) return false;
  if (query.city && listing.city?.toLowerCase() !== query.city.toLowerCase()) return false;
  if (query.propertyType && listing.property_type !== query.propertyType) return false;
  return true;
}

function rankListings(listings: Listing[], limit: number): Listing[] {
  return [...listings]
    .sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
    .slice(0, limit);
}

const listingImageCache = new Map<string, Map<string, string>>();

async function loadListingImageMap(listingType: "rent" | "sale"): Promise<Map<string, string>> {
  const cached = listingImageCache.get(listingType);
  if (cached) return cached;

  const filename = listingType === "rent" ? "rentals.json" : "sales.json";
  try {
    const raw = await readLocalJson<{ listing_url: string; agency_logo?: string }[]>(filename);
    const map = new Map<string, string>();
    for (const row of raw) {
      if (row.agency_logo) map.set(row.listing_url, row.agency_logo);
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
  const image_url = listing.image_url ?? listing.agency_logo ?? null;
  return image_url ? { ...listing, image_url } : listing;
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
    let request = client
      .from("listings")
      .select(
        "listing_url, title, price, price_raw, city, suburb, location, property_type, listing_type, bedrooms, days_on_market, agency_logo"
      )
      .eq("listing_type", listingType)
      .eq("is_active", true)
      .lte("price", query.budget)
      .not("price", "is", null)
      .order("price", { ascending: false })
      .limit(80);

    if (query.city) request = request.ilike("city", query.city);
    if (query.propertyType) request = request.eq("property_type", query.propertyType);

    const { data, error } = await request;
    if (!error && data) {
      const matched = (data as Listing[])
        .map(withImageUrl)
        .filter((row) => matchesListingQuery(row, query));
      return rankListings(matched, limit);
    }
  }

  try {
    const filename = listingType === "rent" ? "clean_rentals.json" : "clean_sales.json";
    const all = await readLocalJson<Listing[]>(filename);
    const matched = all.filter((row) => matchesListingQuery(row, query));
    const ranked = rankListings(matched, limit);
    return enrichLocalListingImages(ranked, listingType);
  } catch {
    return [];
  }
}

export const dashboardRevalidate = REVALIDATE_SECONDS;
