import { MIN_SEGMENT_LISTINGS } from "@/lib/constants";
import {
  resolveSegmentStats,
  segmentCountForMode,
  segmentMedianForMode,
} from "@/lib/segments";
import type { ExploreMode, Listing, MarketMetric, PropertyType } from "@/lib/types";

export const FAIR_VALUE_THRESHOLD_PCT = 5;

export interface FairValueBadge {
  label: string;
  pctDiff: number;
  variant: "below" | "above" | "neutral";
  median: number;
  usedAggregate: boolean;
  sampleCount: number;
}

export function listingMode(listing: Listing): ExploreMode {
  return listing.listing_type === "sale" ? "buy" : "rent";
}

export function listingPropertyType(listing: Listing): PropertyType | null {
  if (!listing.property_type) return null;
  const normalized = listing.property_type.toLowerCase();
  if (normalized === "apartment") return "flat";
  const allowed: PropertyType[] = [
    "house",
    "flat",
    "room",
    "townhouse",
    "commercial",
    "apartment",
  ];
  return allowed.includes(normalized as PropertyType)
    ? normalized === "apartment"
      ? "flat"
      : (normalized as PropertyType)
    : null;
}

export function resolveListingMedian(
  market: MarketMetric,
  listing: Listing,
  mode?: ExploreMode
): { median: number | null; sampleCount: number; usedAggregate: boolean } {
  const resolvedMode = mode ?? listingMode(listing);
  const propertyType = listingPropertyType(listing);
  const bedroom = listing.bedrooms ?? null;

  if (propertyType || bedroom != null) {
    const segment = resolveSegmentStats(market, propertyType, bedroom);
    const segmentMedian = segmentMedianForMode(segment, resolvedMode);
    const count = segmentCountForMode(segment, resolvedMode);
    if (segmentMedian != null && segmentMedian > 0 && count >= MIN_SEGMENT_LISTINGS) {
      return { median: segmentMedian, sampleCount: count, usedAggregate: false };
    }
  }

  const aggregate =
    resolvedMode === "rent" ? market.median_rent : market.median_sale_price;
  const sampleCount =
    resolvedMode === "rent" ? market.rental_count : market.sale_count;
  return { median: aggregate, sampleCount, usedAggregate: true };
}

export function fairValueLabel(
  listingPrice: number,
  median: number | null,
  mode: ExploreMode,
  sampleCount: number
): Omit<FairValueBadge, "usedAggregate"> | null {
  if (!median || median <= 0 || !listingPrice || listingPrice <= 0) return null;
  if (sampleCount < MIN_SEGMENT_LISTINGS) return null;

  const pctDiff = ((listingPrice - median) / median) * 100;
  const absPct = Math.abs(pctDiff);

  if (absPct < FAIR_VALUE_THRESHOLD_PCT) return null;

  const priceWord = mode === "rent" ? "rent" : "sale price";
  const rounded = Math.round(absPct);

  if (pctDiff < 0) {
    return {
      label: `${rounded}% below typical ${priceWord}`,
      pctDiff,
      variant: "below",
      median,
      sampleCount,
    };
  }

  return {
    label: `${rounded}% above typical ${priceWord}`,
    pctDiff,
    variant: "above",
    median,
    sampleCount,
  };
}

export function resolveFairValueForListing(
  market: MarketMetric | null | undefined,
  listing: Listing
): FairValueBadge | null {
  if (!market || listing.price == null || listing.price <= 0) return null;

  const mode = listingMode(listing);
  const { median, sampleCount, usedAggregate } = resolveListingMedian(
    market,
    listing,
    mode
  );
  const badge = fairValueLabel(listing.price, median, mode, sampleCount);
  if (!badge) return null;

  return { ...badge, usedAggregate };
}
