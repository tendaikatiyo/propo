import {
  ANALYTICS_CONSENT_COOKIE,
  type AnalyticsConsent,
} from "@/lib/analytics/constants";

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  const value = readCookie(ANALYTICS_CONSENT_COOKIE);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function setAnalyticsConsent(consent: AnalyticsConsent): void {
  if (typeof document === "undefined") return;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${ANALYTICS_CONSENT_COOKIE}=${consent}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function hasAnalyticsConsent(): boolean {
  return getAnalyticsConsent() === "granted";
}
