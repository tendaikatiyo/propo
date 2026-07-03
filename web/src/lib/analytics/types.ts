import type { AnalyticsEventName } from "@/lib/analytics/constants";
import type { ExploreFilters } from "@/lib/types";

export type ExploreFilterPayload = Pick<
  ExploreFilters,
  "mode" | "budget" | "city" | "propertyType" | "bedroom"
>;

export type ExploreZeroResultsPayload = ExploreFilterPayload & {
  inBudgetCount: number;
  stretchCount: number;
};

export type SuburbClickPayload = {
  marketId: string;
  city: string;
  suburb: string;
  source: "explore_card" | "explore_table" | "explore_list" | "home_card";
  mode?: "rent" | "buy" | "land";
};

export type ListingClickPayload = {
  listingUrl: string;
  marketId?: string | null;
  city?: string | null;
  suburb?: string | null;
  price?: number | null;
  listingType?: string | null;
};

export type AnalyticsEventPayload = {
  explore_filter_change: ExploreFilterPayload;
  explore_zero_results: ExploreZeroResultsPayload;
  suburb_click: SuburbClickPayload;
  listing_click: ListingClickPayload;
};

export type AnalyticsTrackBody<T extends AnalyticsEventName = AnalyticsEventName> = {
  event: T;
  payload: AnalyticsEventPayload[T];
  path?: string;
};
