import { buildMarketId, slugifyMarketPart } from "@/lib/rent-reports";
import {
  isSaneLandSizeSqm,
  normalizeLandSizeSqm,
} from "@/lib/land-listings";
import type { LandMetric } from "@/lib/types";

export const LAND_REPORT_MIN_USD = 500;
export const LAND_REPORT_MAX_USD = 500_000;
export const LAND_REPORT_MIN_SQM = 50;
export const LAND_REPORT_MAX_SQM = 50_000;
export const LAND_REPORT_DISPLAY_MIN_COUNT = 3;
export const LAND_REPORT_GAP_LAND_COUNT = 5;
export const LAND_REPORT_OUTLIER_MULTIPLIER = 3;
export const LAND_REPORT_MAX_AGE_MONTHS = 36;

export const LAND_REPORT_SIZE_UNITS = [
  { value: "sqm", label: "sqm" },
  { value: "acres", label: "acres" },
  { value: "ha", label: "hectares" },
] as const;

export type LandReportSizeUnit = (typeof LAND_REPORT_SIZE_UNITS)[number]["value"];

export type LandReportStatus = "pending" | "approved" | "rejected";

export interface LandReportPayload {
  city: string;
  suburb: string;
  landSize?: number;
  landSizeUnit?: LandReportSizeUnit;
  landSizeSqm?: number;
  totalPrice: number;
  isServiced?: boolean;
  isCompletedPurchase: boolean;
  purchaseDate?: string;
  consent: boolean;
  website?: string;
}

export interface LandReportRow {
  id: string;
  market_id: string;
  city: string;
  suburb: string;
  land_size: number | null;
  land_size_unit: LandReportSizeUnit | string | null;
  land_size_sqm: number | null;
  total_price: number;
  price_per_sqm: number | null;
  currency: string;
  is_serviced: boolean | null;
  is_completed_purchase: boolean;
  purchase_date: string | null;
  notes: string | null;
  status: LandReportStatus;
  rejection_reason: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  created_at: string;
}

export interface LandReportMetrics {
  market_id: string;
  city: string;
  suburb: string;
  report_count: number;
  median_price_per_sqm: number | null;
  min_price_per_sqm: number | null;
  max_price_per_sqm: number | null;
  updated_at?: string;
}

export { buildMarketId, slugifyMarketPart };

export function computeLandPricePerSqm(
  totalPrice: number,
  landSizeSqm: number | null | undefined
): number | null {
  if (!landSizeSqm || landSizeSqm <= 0) return null;
  return Math.round((totalPrice / landSizeSqm) * 100) / 100;
}

function parseOptionalNumber(value: unknown): number | undefined {
  if (value == null || value === "") return undefined;
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function isLandReportSizeUnit(value: string): value is LandReportSizeUnit {
  return value === "sqm" || value === "acres" || value === "ha";
}

export function resolveLandSizeSqm(
  landSize: number | undefined,
  landSizeUnit: LandReportSizeUnit | undefined
): { landSizeSqm?: number; error?: string } {
  if (landSize == null) return {};

  if (landSize <= 0) {
    return { error: "Enter a valid stand size." };
  }

  const unit = landSizeUnit ?? "sqm";
  const converted = normalizeLandSizeSqm(landSize, unit);
  if (converted == null) {
    return {
      error: "Select a supported stand size unit (sqm, acres, or hectares).",
    };
  }

  const landSizeSqm = Math.round(converted);
  if (!isSaneLandSizeSqm(landSizeSqm)) {
    return {
      error: `Stand size converts to ${landSizeSqm.toLocaleString()} sqm — must be between ${LAND_REPORT_MIN_SQM.toLocaleString()} and ${LAND_REPORT_MAX_SQM.toLocaleString()} sqm.`,
    };
  }

  return { landSizeSqm };
}

export function formatLandReportStandSize(report: {
  land_size: number | null;
  land_size_unit: string | null;
  land_size_sqm: number | null;
}): string {
  if (report.land_size != null && report.land_size_unit) {
    const unitLabel =
      report.land_size_unit === "ha"
        ? "ha"
        : report.land_size_unit === "acres"
          ? "acres"
          : "sqm";
    const original = `${report.land_size} ${unitLabel}`;
    if (
      report.land_size_sqm != null &&
      report.land_size_unit !== "sqm" &&
      report.land_size_unit !== "m2"
    ) {
      return `${original} (${report.land_size_sqm.toLocaleString()} sqm)`;
    }
    return original;
  }
  if (report.land_size_sqm != null) {
    return `${report.land_size_sqm.toLocaleString()} sqm`;
  }
  return "—";
}

export function parseLandReportPayload(
  body: unknown
): { ok: true; data: LandReportPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const city = typeof input.city === "string" ? input.city.trim() : "";
  const suburb = typeof input.suburb === "string" ? input.suburb.trim() : "";
  const landSize =
    parseOptionalNumber(input.landSize) ?? parseOptionalNumber(input.landSizeSqm);
  const landSizeUnitRaw =
    typeof input.landSizeUnit === "string" ? input.landSizeUnit.trim() : "";
  const landSizeUnit = isLandReportSizeUnit(landSizeUnitRaw)
    ? landSizeUnitRaw
    : landSize != null
      ? "sqm"
      : undefined;
  const totalPrice =
    typeof input.totalPrice === "number"
      ? input.totalPrice
      : typeof input.totalPrice === "string"
        ? Number(input.totalPrice)
        : NaN;
  const isServiced =
    input.isServiced === true ? true : input.isServiced === false ? false : undefined;
  const isCompletedPurchase = input.isCompletedPurchase !== false;
  const purchaseDate =
    typeof input.purchaseDate === "string" && input.purchaseDate.trim()
      ? input.purchaseDate.trim()
      : undefined;
  const consent = input.consent === true;
  const website = typeof input.website === "string" ? input.website.trim() : "";

  if (!city || !suburb) {
    return { ok: false, error: "Select a city and suburb." };
  }
  if (!Number.isInteger(totalPrice) || totalPrice < LAND_REPORT_MIN_USD) {
    return {
      ok: false,
      error: `Total price must be at least $${LAND_REPORT_MIN_USD.toLocaleString()}.`,
    };
  }
  if (totalPrice > LAND_REPORT_MAX_USD) {
    return {
      ok: false,
      error: `Total price must be $${LAND_REPORT_MAX_USD.toLocaleString()} or less.`,
    };
  }

  const sizeResult = resolveLandSizeSqm(landSize, landSizeUnit);
  if (sizeResult.error) {
    return { ok: false, error: sizeResult.error };
  }

  if (!consent) {
    return {
      ok: false,
      error: "Confirm this land price is accurate and you agree to anonymous use.",
    };
  }

  return {
    ok: true,
    data: {
      city,
      suburb,
      landSize,
      landSizeUnit,
      landSizeSqm: sizeResult.landSizeSqm,
      totalPrice,
      isServiced,
      isCompletedPurchase,
      purchaseDate,
      consent,
      website: website || undefined,
    },
  };
}

export function computeLandRollup(pricePerSqmValues: number[]): {
  report_count: number;
  median_price_per_sqm: number | null;
  min_price_per_sqm: number | null;
  max_price_per_sqm: number | null;
} {
  const sorted = [...pricePerSqmValues].sort((a, b) => a - b);
  const report_count = sorted.length;
  if (!report_count) {
    return {
      report_count: 0,
      median_price_per_sqm: null,
      min_price_per_sqm: null,
      max_price_per_sqm: null,
    };
  }

  const mid = Math.floor(report_count / 2);
  const median_price_per_sqm =
    report_count % 2 === 0
      ? Math.round(((sorted[mid - 1] + sorted[mid]) / 2) * 100) / 100
      : sorted[mid];

  let trimmed = sorted;
  if (report_count >= 5) {
    const drop = Math.max(1, Math.floor(report_count * 0.1));
    trimmed = sorted.slice(drop, sorted.length - drop);
  }

  return {
    report_count,
    median_price_per_sqm,
    min_price_per_sqm: trimmed[0] ?? null,
    max_price_per_sqm: trimmed[trimmed.length - 1] ?? null,
  };
}

export function isLandPurchaseRecentEnough(
  purchaseDate: string | null | undefined
): boolean {
  if (!purchaseDate) return false;
  const purchased = new Date(purchaseDate);
  if (Number.isNaN(purchased.getTime())) return false;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - LAND_REPORT_MAX_AGE_MONTHS);
  return purchased >= cutoff;
}

export function shouldShowCommunityLandRange(
  landMarket: LandMetric | null | undefined,
  metrics: LandReportMetrics | null | undefined,
  _lens?: string
): boolean {
  if (!metrics || metrics.report_count < LAND_REPORT_DISPLAY_MIN_COUNT) return false;
  const thinListings = (landMarket?.land_count ?? 0) < LAND_REPORT_GAP_LAND_COUNT;
  const lowConfidence = (landMarket?.confidence_score ?? 0) < 40;
  return thinListings || lowConfidence;
}

export function isLandReportOutlier(
  pricePerSqm: number,
  scrapedMedian: number | null | undefined
): boolean {
  if (!scrapedMedian || scrapedMedian <= 0) return false;
  return pricePerSqm > scrapedMedian * LAND_REPORT_OUTLIER_MULTIPLIER;
}
