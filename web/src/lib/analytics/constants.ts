export const ANALYTICS_CONSENT_COOKIE = "propo_analytics_consent";
export const ANALYTICS_SESSION_COOKIE = "propo_analytics_sid";
export const GA_MEASUREMENT_ID = "G-2QCXMVBDH1";

export const ANALYTICS_EVENT_NAMES = [
  "explore_filter_change",
  "explore_zero_results",
  "suburb_click",
  "listing_click",
  "lens_change",
  "suburb_view",
  "report_export",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENT_NAMES)[number];

export type AnalyticsConsent = "granted" | "denied";
