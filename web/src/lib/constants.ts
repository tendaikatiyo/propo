import type { CompareFilters, ExploreFilters, PropertyType } from "@/lib/types";
import type { ExploreMode } from "@/lib/types";

/** Filter UI types — apartment is grouped under flat in Zimbabwe. */
export const PROPERTY_TYPES_RENT: PropertyType[] = [
  "house",
  "flat",
  "room",
  "townhouse",
];

export const PROPERTY_TYPES_BUY: PropertyType[] = ["house", "flat", "townhouse"];

/** @deprecated Prefer propertyTypesForMode */
export const PROPERTY_TYPES = PROPERTY_TYPES_RENT;

export function propertyTypesForMode(mode: ExploreMode): PropertyType[] {
  if (mode === "land") return [];
  if (mode === "buy" || mode === "invest") return PROPERTY_TYPES_BUY;
  return PROPERTY_TYPES_RENT;
}

export const ROOM_BEDROOM_COUNT = 1;

export function normalizeExploreFilters(filters: ExploreFilters): ExploreFilters {
  let { propertyType, bedroom } = filters;
  if (filters.mode === "land") {
    return { ...filters, propertyType: null, bedroom: null };
  }
  if (filters.mode === "buy" && propertyType === "room") {
    propertyType = null;
  }
  if (filters.mode === "invest" && propertyType === "room") {
    propertyType = null;
  }
  if (propertyType && !propertyTypesForMode(filters.mode).includes(propertyType)) {
    propertyType = null;
  }
  if (propertyType === "room") {
    bedroom = ROOM_BEDROOM_COUNT;
  } else {
    bedroom = null;
  }
  return { ...filters, propertyType, bedroom };
}

export function normalizeCompareFilters(filters: CompareFilters): CompareFilters {
  let { propertyType, bedroom, mode } = filters;
  if (mode === "land") {
    return { mode, propertyType: null, bedroom: null };
  }
  if (mode === "buy" && propertyType === "room") {
    propertyType = null;
  }
  if (mode === "invest" && propertyType === "room") {
    propertyType = null;
  }
  if (propertyType && !propertyTypesForMode(mode).includes(propertyType)) {
    propertyType = null;
  }
  if (propertyType === "room") {
    bedroom = ROOM_BEDROOM_COUNT;
  } else {
    bedroom = null;
  }
  return { mode, propertyType, bedroom };
}

export function normalizePropertyType(value: string): PropertyType | null {
  const normalized = value === "apartment" ? "flat" : value;
  return PROPERTY_TYPES.includes(normalized as PropertyType)
    ? (normalized as PropertyType)
    : null;
}

export const PROPERTY_TYPE_COUNT_KEY: Record<PropertyType, keyof import("@/lib/types").MarketMetric> = {
  house: "house_count",
  apartment: "apartment_count",
  flat: "flat_count",
  room: "room_count",
  townhouse: "townhouse_count",
  commercial: "commercial_count",
};

export const BEDROOM_OPTIONS = [
  { value: 1, label: "1 bed" },
  { value: 2, label: "2 beds" },
  { value: 3, label: "3 beds" },
  { value: 4, label: "4+ beds" },
] as const;

export const BEDROOM_COUNT_KEY: Record<number, keyof import("@/lib/types").MarketMetric> = {
  1: "beds_1_count",
  2: "beds_2_count",
  3: "beds_3_count",
  4: "beds_4_plus_count",
};

export const MAX_PINNED_MARKETS = 3;
export const STRETCH_BUDGET_MULTIPLIER = 1.15;
export const MIN_CONFIDENCE_THRESHOLD = 20;
export const MIN_SEGMENT_LISTINGS = 3;
/** Classic leaderboard lists — prefer this threshold; backfill if too few pass. */
export const LEADERBOARD_MIN_CONFIDENCE = MIN_CONFIDENCE_THRESHOLD;
/** Trend movers — stricter because % changes need reliable snapshot history. */
export const RANKINGS_MIN_CONFIDENCE = 40;
export const DEFAULT_RENT_BUDGET = 800;
export const DEFAULT_BUY_BUDGET = 250000;
export const DEFAULT_LAND_BUDGET_PER_SQM = 50;
export const RENT_BUDGET_RANGE = { min: 100, max: 10000, step: 50 };
export const BUY_BUDGET_RANGE = { min: 20000, max: 1000000, step: 5000 };
export const LAND_BUDGET_RANGE = { min: 10, max: 200, step: 5 };

export function budgetRangeForMode(mode: ExploreMode) {
  if (mode === "land") return LAND_BUDGET_RANGE;
  if (mode === "buy" || mode === "invest") return BUY_BUDGET_RANGE;
  return RENT_BUDGET_RANGE;
}

export const DEFAULT_CITY = "Harare";
export const SITE_NAME = "Propo";
export const CONTACT_EMAIL = "carteayo@gmail.com";

/** Approximate dataset scale — keep aligned with admin dashboard / pipeline runs. */
export const DATASET_SCALE = {
  activeListings: "~14,000",
  historicalObservations: "400k+",
  cities: 65,
  citiesLabel: "65 towns and cities",
  suburbMarkets: 378,
  suburbMarketsLabel: "378 suburb markets",
  landSuburbMarkets: 310,
  landSuburbMarketsLabel: "310 land markets",
} as const;

export const DATASET_UPDATE_CADENCE = "every 24 hours";

export const DATASET_SOURCE_LINE =
  "Aggregates listings from Zimbabwe's three largest online property portals";

export const SITE_FOOTER_LINE =
  "Continuously updated property market database for Zimbabwe";

export const SITE_DESCRIPTION =
  "Where can you afford in Zimbabwe? Explore 378 suburb markets from a property database updated every 24 hours — median rents, sale prices, and land per sqm.";
