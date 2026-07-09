import type { ExploreMode, MarketMetric } from "@/lib/types";

export const CONTRIBUTION_MODES = ["rent", "buy", "land"] as const;
export type ContributionMode = (typeof CONTRIBUTION_MODES)[number];

export const CONTRIBUTE_SESSION_COOKIE = "propo_contribute_sid";

export const RENT_REPORT_MIN_USD = 50;
export const RENT_REPORT_MAX_USD = 15_000;
export const RENT_REPORT_DISPLAY_MIN_COUNT = 3;
export const RENT_REPORT_CTA_CONFIDENCE = 40;
export const RENT_REPORT_GAP_RENTAL_COUNT = 5;
export const RENT_REPORT_OUTLIER_MULTIPLIER = 3;
export const RENT_REPORT_MAX_LEASE_AGE_MONTHS = 24;

export const RENT_REPORT_PROPERTY_TYPES = [
  { value: "house", label: "House" },
  { value: "flat", label: "Flat / apartment" },
  { value: "townhouse", label: "Townhouse" },
  { value: "room", label: "Room" },
] as const;

export type RentReportPropertyType = (typeof RENT_REPORT_PROPERTY_TYPES)[number]["value"];
export type RentReportStatus = "pending" | "approved" | "rejected";

export interface RentReportPayload {
  city: string;
  suburb: string;
  propertyType: RentReportPropertyType;
  bedrooms: number;
  monthlyRent: number;
  isCurrentLease: boolean;
  leaseStartedAt?: string;
  furnished?: boolean;
  consent: boolean;
  website?: string;
}

export interface RentReportRow {
  id: string;
  market_id: string;
  city: string;
  suburb: string;
  property_type: RentReportPropertyType;
  bedrooms: number;
  monthly_rent: number;
  currency: string;
  is_current_lease: boolean;
  lease_started_at: string | null;
  furnished: boolean | null;
  notes: string | null;
  status: RentReportStatus;
  rejection_reason: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  created_at: string;
}

export interface RentReportMetrics {
  market_id: string;
  city: string;
  suburb: string;
  report_count: number;
  median_rent: number | null;
  min_rent: number | null;
  max_rent: number | null;
  updated_at?: string;
}

export function slugifyMarketPart(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
}

export function buildMarketId(city: string, suburb: string): string {
  return `${slugifyMarketPart(city)}_${slugifyMarketPart(suburb)}`;
}

export function parseRentReportPayload(
  body: unknown
): { ok: true; data: RentReportPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const city = typeof input.city === "string" ? input.city.trim() : "";
  const suburb = typeof input.suburb === "string" ? input.suburb.trim() : "";
  const propertyType =
    typeof input.propertyType === "string" ? input.propertyType.trim() : "";
  const bedrooms =
    typeof input.bedrooms === "number"
      ? input.bedrooms
      : typeof input.bedrooms === "string"
        ? Number(input.bedrooms)
        : NaN;
  const monthlyRent =
    typeof input.monthlyRent === "number"
      ? input.monthlyRent
      : typeof input.monthlyRent === "string"
        ? Number(input.monthlyRent)
        : NaN;
  const isCurrentLease = input.isCurrentLease !== false;
  const leaseStartedAt =
    typeof input.leaseStartedAt === "string" && input.leaseStartedAt.trim()
      ? input.leaseStartedAt.trim()
      : undefined;
  const furnished =
    input.furnished === true ? true : input.furnished === false ? false : undefined;
  const consent = input.consent === true;
  const website = typeof input.website === "string" ? input.website.trim() : "";

  const validTypes = new Set<string>(RENT_REPORT_PROPERTY_TYPES.map((item) => item.value));
  if (!city || !suburb) {
    return { ok: false, error: "Select a city and suburb." };
  }
  if (!validTypes.has(propertyType)) {
    return { ok: false, error: "Select a property type." };
  }
  if (!Number.isInteger(bedrooms) || bedrooms < 0 || bedrooms > 10) {
    return { ok: false, error: "Enter a valid bedroom count." };
  }
  if (!Number.isInteger(monthlyRent) || monthlyRent < RENT_REPORT_MIN_USD) {
    return { ok: false, error: `Rent must be at least $${RENT_REPORT_MIN_USD}.` };
  }
  if (monthlyRent > RENT_REPORT_MAX_USD) {
    return { ok: false, error: `Rent must be $${RENT_REPORT_MAX_USD.toLocaleString()} or less.` };
  }
  if (!consent) {
    return { ok: false, error: "Confirm this is your current rent and you agree to anonymous use." };
  }

  const normalizedBedrooms = propertyType === "room" ? 1 : bedrooms;

  return {
    ok: true,
    data: {
      city,
      suburb,
      propertyType: propertyType as RentReportPropertyType,
      bedrooms: normalizedBedrooms,
      monthlyRent,
      isCurrentLease,
      leaseStartedAt,
      furnished,
      consent,
      website: website || undefined,
    },
  };
}

export function computeRentRollup(rents: number[]): {
  report_count: number;
  median_rent: number | null;
  min_rent: number | null;
  max_rent: number | null;
} {
  const sorted = [...rents].sort((a, b) => a - b);
  const report_count = sorted.length;
  if (!report_count) {
    return { report_count: 0, median_rent: null, min_rent: null, max_rent: null };
  }

  const mid = Math.floor(report_count / 2);
  const median_rent =
    report_count % 2 === 0
      ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
      : sorted[mid];

  let trimmed = sorted;
  if (report_count >= 5) {
    const drop = Math.max(1, Math.floor(report_count * 0.1));
    trimmed = sorted.slice(drop, sorted.length - drop);
  }

  return {
    report_count,
    median_rent,
    min_rent: trimmed[0] ?? null,
    max_rent: trimmed[trimmed.length - 1] ?? null,
  };
}

export function isLeaseRecentEnough(leaseStartedAt: string | null | undefined): boolean {
  if (!leaseStartedAt) return true;
  const started = new Date(leaseStartedAt);
  if (Number.isNaN(started.getTime())) return true;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - RENT_REPORT_MAX_LEASE_AGE_MONTHS);
  return started >= cutoff;
}

export function shouldShowContributeCta(lens: ExploreMode): boolean {
  return lens !== "invest";
}

export function parseContributionMode(value: string | null | undefined): ContributionMode {
  if (value === "buy") return "buy";
  if (value === "land") return "land";
  return "rent";
}

export function isContributionMode(mode: ExploreMode): mode is ContributionMode {
  return mode !== "invest";
}

export function contributeCtaCopy(lens: ExploreMode): {
  title: string;
  description: string;
  button: string;
} {
  if (lens === "buy") {
    return {
      title: "Contribute to this suburb",
      description:
        "Know what properties cost here? Share what you pay anonymously to help others searching.",
      button: "Share your price",
    };
  }
  if (lens === "land") {
    return {
      title: "Contribute to this suburb",
      description:
        "Know land or rental prices in this area? Share yours anonymously to help fill gaps.",
      button: "Share your price",
    };
  }
  return {
    title: "Contribute to this suburb",
    description:
      "Know what rent costs here? Share yours anonymously to help others searching.",
    button: "Share your rent",
  };
}

export function contributeFormAvailable(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "buy" || lens === "land";
}

export function contributePageCopy(lens: ExploreMode): {
  metadataTitle: string;
  metadataDescription: string;
  title: string;
  description: string;
  whyLead: string;
  whyDetail: string;
} {
  if (lens === "buy") {
    return {
      metadataTitle: "Share a sale price",
      metadataDescription:
        "Help fill gaps in Zimbabwe suburb sale data — anonymously share what you paid or agreed.",
      title: "Share a sale price",
      description:
        "Know what homes sell for in your suburb? Help others searching — share yours anonymously.",
      whyLead:
        "Propo tracks listings from major online portals, but many sales never appear there — especially in suburbs with thin coverage.",
      whyDetail:
        "Your report is reviewed before anything goes public. Approved submissions may show as a community sale range on suburb profiles — separate from portal medians.",
    };
  }
  if (lens === "land") {
    return {
      metadataTitle: "Share a land price",
      metadataDescription:
        "Help fill gaps in Zimbabwe land data — anonymously share stand prices from your area.",
      title: "Share a land price",
      description:
        "Know what stands cost in your area? Help others searching — share yours anonymously.",
      whyLead:
        "Propo tracks land listings from major portals, but many deals happen off-market — especially in fast-moving corridors.",
      whyDetail:
        "Your report is reviewed before anything goes public. Approved submissions with stand size may show as a community $/sqm range — separate from portal medians.",
    };
  }
  return {
    metadataTitle: "Share your rent",
    metadataDescription:
      "Help fill gaps in Zimbabwe suburb rent data — anonymously share what you currently pay so others searching can see community rent ranges.",
    title: "Share your rent",
    description:
      "Know what rent actually costs where you live? Help others searching — share yours anonymously.",
    whyLead:
      "Propo tracks listings from major online portals, but many occupied homes never appear there — especially in suburbs with thin coverage.",
    whyDetail:
      "Your report is reviewed before anything goes public. Approved submissions may show as a community rent range on suburb profiles — separate from portal medians.",
  };
}

/** @deprecated Use shouldShowContributeCta — kept for community range display logic. */
export function shouldShowRentReportCta(market: MarketMetric, lens: string): boolean {
  return (
    (lens === "rent" || lens === "invest") &&
    (market.confidence_score ?? 0) < RENT_REPORT_CTA_CONFIDENCE
  );
}

export function shouldShowCommunityRentRange(
  market: MarketMetric,
  metrics: RentReportMetrics | null | undefined,
  lens: string
): boolean {
  if (lens !== "rent" && lens !== "invest") return false;
  if (!metrics || metrics.report_count < RENT_REPORT_DISPLAY_MIN_COUNT) return false;
  const thinListings = (market.rental_count ?? 0) < RENT_REPORT_GAP_RENTAL_COUNT;
  const lowConfidence = (market.confidence_score ?? 0) < RENT_REPORT_CTA_CONFIDENCE;
  return thinListings || lowConfidence;
}

export function isRentReportOutlier(
  monthlyRent: number,
  scrapedMedian: number | null | undefined
): boolean {
  if (!scrapedMedian || scrapedMedian <= 0) return false;
  return monthlyRent > scrapedMedian * RENT_REPORT_OUTLIER_MULTIPLIER;
}
