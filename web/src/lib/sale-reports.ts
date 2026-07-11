import { buildMarketId, slugifyMarketPart } from "@/lib/rent-reports";
import type { MarketMetric } from "@/lib/types";

export const SALE_REPORT_MIN_USD = 3_000;
export const SALE_REPORT_MAX_USD = 2_000_000;
export const SALE_REPORT_DISPLAY_MIN_COUNT = 3;
export const SALE_REPORT_GAP_SALE_COUNT = 5;
export const SALE_REPORT_OUTLIER_MULTIPLIER = 3;
export const SALE_REPORT_MAX_AGE_MONTHS = 36;

export const SALE_REPORT_PROPERTY_TYPES = [
  { value: "house", label: "House" },
  { value: "flat", label: "Flat / apartment" },
  { value: "townhouse", label: "Townhouse" },
  { value: "room", label: "Room" },
] as const;

export type SaleReportPropertyType = (typeof SALE_REPORT_PROPERTY_TYPES)[number]["value"];
export type SaleReportStatus = "pending" | "approved" | "rejected";

export interface SaleReportPayload {
  city: string;
  suburb: string;
  propertyType: SaleReportPropertyType;
  bedrooms: number;
  salePrice: number;
  isCompletedSale: boolean;
  saleDate?: string;
  consent: boolean;
  website?: string;
}

export interface SaleReportRow {
  id: string;
  market_id: string;
  city: string;
  suburb: string;
  property_type: SaleReportPropertyType;
  bedrooms: number;
  sale_price: number;
  currency: string;
  is_completed_sale: boolean;
  sale_date: string | null;
  notes: string | null;
  status: SaleReportStatus;
  rejection_reason: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  created_at: string;
}

export interface SaleReportMetrics {
  market_id: string;
  city: string;
  suburb: string;
  report_count: number;
  median_sale_price: number | null;
  min_sale_price: number | null;
  max_sale_price: number | null;
  updated_at?: string;
}

export { buildMarketId, slugifyMarketPart };

export function parseSaleReportPayload(
  body: unknown
): { ok: true; data: SaleReportPayload } | { ok: false; error: string } {
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
  const salePrice =
    typeof input.salePrice === "number"
      ? input.salePrice
      : typeof input.salePrice === "string"
        ? Number(input.salePrice)
        : NaN;
  const isCompletedSale = input.isCompletedSale !== false;
  const saleDate =
    typeof input.saleDate === "string" && input.saleDate.trim()
      ? input.saleDate.trim()
      : undefined;
  const consent = input.consent === true;
  const website = typeof input.website === "string" ? input.website.trim() : "";

  const validTypes = new Set<string>(SALE_REPORT_PROPERTY_TYPES.map((item) => item.value));
  if (!city || !suburb) {
    return { ok: false, error: "Select a city and suburb." };
  }
  if (!validTypes.has(propertyType)) {
    return { ok: false, error: "Select a property type." };
  }
  if (!Number.isInteger(bedrooms) || bedrooms < 0 || bedrooms > 10) {
    return { ok: false, error: "Enter a valid bedroom count." };
  }
  if (!Number.isInteger(salePrice) || salePrice < SALE_REPORT_MIN_USD) {
    return { ok: false, error: `Sale price must be at least $${SALE_REPORT_MIN_USD.toLocaleString()}.` };
  }
  if (salePrice > SALE_REPORT_MAX_USD) {
    return {
      ok: false,
      error: `Sale price must be $${SALE_REPORT_MAX_USD.toLocaleString()} or less.`,
    };
  }
  if (!consent) {
    return { ok: false, error: "Confirm this sale price is accurate and you agree to anonymous use." };
  }

  return {
    ok: true,
    data: {
      city,
      suburb,
      propertyType: propertyType as SaleReportPropertyType,
      bedrooms: propertyType === "room" ? 1 : bedrooms,
      salePrice,
      isCompletedSale,
      saleDate,
      consent,
      website: website || undefined,
    },
  };
}

export function computeSaleRollup(prices: number[]): {
  report_count: number;
  median_sale_price: number | null;
  min_sale_price: number | null;
  max_sale_price: number | null;
} {
  const sorted = [...prices].sort((a, b) => a - b);
  const report_count = sorted.length;
  if (!report_count) {
    return {
      report_count: 0,
      median_sale_price: null,
      min_sale_price: null,
      max_sale_price: null,
    };
  }

  const mid = Math.floor(report_count / 2);
  const median_sale_price =
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
    median_sale_price,
    min_sale_price: trimmed[0] ?? null,
    max_sale_price: trimmed[trimmed.length - 1] ?? null,
  };
}

export function isSaleRecentEnough(saleDate: string | null | undefined): boolean {
  if (!saleDate) return false;
  const sold = new Date(saleDate);
  if (Number.isNaN(sold.getTime())) return false;
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - SALE_REPORT_MAX_AGE_MONTHS);
  return sold >= cutoff;
}

export function shouldShowCommunitySaleRange(
  market: MarketMetric,
  metrics: SaleReportMetrics | null | undefined,
  lens: string
): boolean {
  if (lens !== "buy" && lens !== "invest") return false;
  if (!metrics || metrics.report_count < SALE_REPORT_DISPLAY_MIN_COUNT) return false;
  const thinListings = (market.sale_count ?? 0) < SALE_REPORT_GAP_SALE_COUNT;
  const lowConfidence = (market.confidence_score ?? 0) < 40;
  return thinListings || lowConfidence;
}

export function isSaleReportOutlier(
  salePrice: number,
  scrapedMedian: number | null | undefined
): boolean {
  if (!scrapedMedian || scrapedMedian <= 0) return false;
  return salePrice > scrapedMedian * SALE_REPORT_OUTLIER_MULTIPLIER;
}
