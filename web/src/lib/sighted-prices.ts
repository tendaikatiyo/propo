import type { ContributionMode } from "@/lib/rent-reports";
import {
  LAND_REPORT_SIZE_UNITS,
  type LandReportSizeUnit,
  parseLandReportPayload,
} from "@/lib/land-reports";
import { parseRentReportPayload } from "@/lib/rent-reports";
import { parseSaleReportPayload } from "@/lib/sale-reports";

export type SightedPriceMode = ContributionMode;

export interface SightedPricePayload {
  mode: SightedPriceMode;
  city: string;
  suburb: string;
  propertyType?: string;
  bedrooms?: number;
  monthlyRent?: number;
  salePrice?: number;
  landSize?: number;
  landSizeUnit?: LandReportSizeUnit;
  totalPrice?: number;
  isServiced?: boolean;
  eventMonth?: string;
  listingUrl?: string;
  notes?: string;
  consent: boolean;
}

export function parseSightedPricePayload(
  body: unknown
): { ok: true; data: SightedPricePayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const input = body as Record<string, unknown>;
  const mode = input.mode;
  if (mode !== "rent" && mode !== "buy" && mode !== "land") {
    return { ok: false, error: "Select rent, buy, or land." };
  }

  const listingUrl =
    typeof input.listingUrl === "string" && input.listingUrl.trim()
      ? input.listingUrl.trim().slice(0, 500)
      : undefined;
  const notes =
    typeof input.notes === "string" && input.notes.trim()
      ? input.notes.trim().slice(0, 1000)
      : undefined;

  if (mode === "rent") {
    const parsed = parseRentReportPayload({
      ...input,
      isCurrentLease: true,
      leaseStartedAt: input.eventMonth,
      consent: true,
    });
    if (!parsed.ok) return parsed;
    return {
      ok: true,
      data: {
        mode,
        city: parsed.data.city,
        suburb: parsed.data.suburb,
        propertyType: parsed.data.propertyType,
        bedrooms: parsed.data.bedrooms,
        monthlyRent: parsed.data.monthlyRent,
        eventMonth: parsed.data.leaseStartedAt,
        listingUrl,
        notes,
        consent: true,
      },
    };
  }

  if (mode === "buy") {
    const parsed = parseSaleReportPayload({
      ...input,
      isCompletedSale: true,
      saleDate: input.eventMonth,
      consent: true,
    });
    if (!parsed.ok) return parsed;
    return {
      ok: true,
      data: {
        mode,
        city: parsed.data.city,
        suburb: parsed.data.suburb,
        propertyType: parsed.data.propertyType,
        bedrooms: parsed.data.bedrooms,
        salePrice: parsed.data.salePrice,
        eventMonth: parsed.data.saleDate,
        listingUrl,
        notes,
        consent: true,
      },
    };
  }

  const parsed = parseLandReportPayload({
    ...input,
    isCompletedPurchase: true,
    purchaseDate: input.eventMonth,
    consent: true,
  });
  if (!parsed.ok) return parsed;
  return {
    ok: true,
    data: {
      mode,
      city: parsed.data.city,
      suburb: parsed.data.suburb,
      landSize: parsed.data.landSize,
      landSizeUnit: parsed.data.landSizeUnit,
      totalPrice: parsed.data.totalPrice,
      isServiced: parsed.data.isServiced,
      eventMonth: parsed.data.purchaseDate,
      listingUrl,
      notes,
      consent: true,
    },
  };
}

export { LAND_REPORT_SIZE_UNITS };
