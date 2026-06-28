export type PropertyType =
  | "house"
  | "apartment"
  | "flat"
  | "room"
  | "townhouse"
  | "commercial";

export type ExploreMode = "rent" | "buy";

export interface MarketSegmentStats {
  median_rent?: number | null;
  average_rent?: number | null;
  minimum_rent?: number | null;
  maximum_rent?: number | null;
  rental_count?: number;
  median_sale_price?: number | null;
  average_sale_price?: number | null;
  minimum_sale_price?: number | null;
  maximum_sale_price?: number | null;
  sale_count?: number;
  median_days_on_market_rent?: number | null;
  median_days_on_market_sale?: number | null;
}

export interface MarketMetric {
  market_id: string;
  city: string;
  suburb: string;
  rental_count: number;
  sale_count: number;
  median_rent: number | null;
  average_rent: number | null;
  minimum_rent: number | null;
  maximum_rent: number | null;
  median_sale_price: number | null;
  average_sale_price: number | null;
  minimum_sale_price: number | null;
  maximum_sale_price: number | null;
  house_count: number;
  apartment_count: number;
  flat_count: number;
  room_count: number;
  townhouse_count: number;
  commercial_count: number;
  beds_1_count?: number;
  beds_2_count?: number;
  beds_3_count?: number;
  beds_4_plus_count?: number;
  median_days_on_market_rent: number | null;
  average_days_on_market_rent: number | null;
  median_days_on_market_sale: number | null;
  average_days_on_market_sale: number | null;
  yield_percent: number | null;
  price_to_rent_ratio: number | null;
  affordability_ratio: number | null;
  confidence_score: number;
  opportunity_score: number;
  updated_at?: string;
  segments?: Record<string, MarketSegmentStats>;
}

export interface CityMetric {
  city: string;
  suburb_count: number;
  rental_count: number;
  sale_count: number;
  median_rent: number | null;
  median_sale_price: number | null;
  average_yield: number | null;
  average_opportunity_score: number;
  average_days_on_market_rent: number | null;
  average_days_on_market_sale: number | null;
  updated_at?: string;
}

export interface RankingEntry {
  market_id: string;
  city: string;
  suburb: string;
  yield_percent?: number;
  opportunity_score?: number;
  median_rent?: number;
  median_sale_price?: number;
  median_days_on_market_rent?: number;
  median_days_on_market_sale?: number;
}

export interface RankingsPayload {
  national: Record<string, RankingEntry[]>;
  per_city: Record<string, Record<string, RankingEntry[]>>;
}

export interface Listing {
  listing_url: string;
  title?: string | null;
  price: number | null;
  price_raw?: string | null;
  city: string | null;
  suburb: string | null;
  location?: string | null;
  property_type: string | null;
  listing_type: string;
  bedrooms?: number | null;
  days_on_market?: number | null;
  image_url?: string | null;
  agency_logo?: string | null;
  description?: string | null;
}

export interface PinnedMarket {
  market_id: string;
  city: string;
  suburb: string;
  pinnedAt: string;
}

export interface ExploreFilters {
  mode: ExploreMode;
  budget: number;
  city: string | null;
  propertyType: PropertyType | null;
  bedroom: number | null;
  includeLowConfidence: boolean;
}

export type SortKey =
  | "suburb"
  | "city"
  | "median_rent"
  | "median_sale_price"
  | "yield_percent"
  | "confidence_score"
  | "opportunity_score";

export type SortDirection = "asc" | "desc";
