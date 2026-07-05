import type { AnalyticsEventName } from "@/lib/analytics/constants";
import type { ExploreFilters, ExploreMode } from "@/lib/types";

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
  mode?: ExploreMode;
};

export type ListingClickPayload = {
  listingUrl: string;
  marketId?: string | null;
  city?: string | null;
  suburb?: string | null;
  price?: number | null;
  listingType?: string | null;
};

export type LensChangePayload = {
  lens: ExploreMode;
  previousLens?: ExploreMode;
  source: "home" | "explore" | "cities" | "rankings" | "city" | "suburb_profile" | "compare";
};

export type SuburbViewPayload = {
  marketId: string;
  city: string;
  suburb: string;
  lens: ExploreMode;
};

export type ReportExportPayload = {
  marketId: string;
  city: string;
  suburb: string;
  scope: "full" | "rent";
  lens?: ExploreMode;
};

export type AnalyticsEventPayload = {
  explore_filter_change: ExploreFilterPayload;
  explore_zero_results: ExploreZeroResultsPayload;
  suburb_click: SuburbClickPayload;
  listing_click: ListingClickPayload;
  lens_change: LensChangePayload;
  suburb_view: SuburbViewPayload;
  report_export: ReportExportPayload;
};

export type AnalyticsTrackBody<T extends AnalyticsEventName = AnalyticsEventName> = {
  event: T;
  payload: AnalyticsEventPayload[T];
  path?: string;
};
