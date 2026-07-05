import {
  ANALYTICS_EVENT_NAMES,
  type AnalyticsEventName,
} from "@/lib/analytics/constants";
import { hasAnalyticsConsent } from "@/lib/analytics/consent";
import type {
  AnalyticsTrackBody,
  ExploreFilterPayload,
  ExploreZeroResultsPayload,
  LensChangePayload,
  ListingClickPayload,
  ReportExportPayload,
  SuburbClickPayload,
  SuburbViewPayload,
} from "@/lib/analytics/types";
import type { ExploreFilters } from "@/lib/types";

function sendEvent<T extends AnalyticsEventName>(body: AnalyticsTrackBody<T>): void {
  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      path: typeof window !== "undefined" ? window.location.pathname : undefined,
    }),
    keepalive: true,
  }).catch(() => {
    // Graceful no-op — analytics must never break UX.
  });
}

export function trackEvent<T extends AnalyticsEventName>(
  event: T,
  payload: AnalyticsTrackBody<T>["payload"]
): void {
  if (!hasAnalyticsConsent()) return;
  if (!ANALYTICS_EVENT_NAMES.includes(event)) return;
  sendEvent({ event, payload });
}

export function exploreFilterPayload(filters: ExploreFilters): ExploreFilterPayload {
  return {
    mode: filters.mode,
    budget: filters.budget,
    city: filters.city,
    propertyType: filters.propertyType,
    bedroom: filters.bedroom,
  };
}

export function trackExploreFilterChange(filters: ExploreFilters): void {
  trackEvent("explore_filter_change", exploreFilterPayload(filters));
}

export function trackExploreZeroResults(
  filters: ExploreFilters,
  counts: { inBudgetCount: number; stretchCount: number }
): void {
  trackEvent("explore_zero_results", {
    ...exploreFilterPayload(filters),
    inBudgetCount: counts.inBudgetCount,
    stretchCount: counts.stretchCount,
  });
}

export function trackSuburbClick(payload: SuburbClickPayload): void {
  trackEvent("suburb_click", payload);
}

export function trackListingClick(payload: ListingClickPayload): void {
  trackEvent("listing_click", payload);
}

export function trackLensChange(payload: LensChangePayload): void {
  trackEvent("lens_change", payload);
}

export function trackSuburbView(payload: SuburbViewPayload): void {
  trackEvent("suburb_view", payload);
}

export function trackReportExport(payload: ReportExportPayload): void {
  trackEvent("report_export", payload);
}
