/** Land size normalization — mirrors analytics/land_utils.py */

const ACRE_TO_SQM = 4046.8564224;
const HA_TO_SQM = 10_000;

export const MIN_LAND_SIZE_SQM = 50;
export const MAX_LAND_SIZE_SQM = 50_000;
export const MIN_PRICE_PER_SQM = 1;
export const MAX_PRICE_PER_SQM = 500;

export interface LandListingFields {
  price?: number | null;
  land_size?: number | null;
  land_size_unit?: string | null;
  land_size_sqm?: number | null;
  price_per_sqm?: number | null;
}

export function normalizeLandUnit(unit: unknown): string {
  if (unit == null) return "sqm";
  const text = String(unit).trim().toLowerCase();
  return text || "sqm";
}

export function normalizeLandSizeSqm(size: unknown, unit?: unknown): number | null {
  const value = Number(size);
  if (!Number.isFinite(value) || value <= 0) return null;

  const unitNorm = normalizeLandUnit(unit);
  if (
    unitNorm === "sqm" ||
    unitNorm === "m2" ||
    unitNorm === "m²" ||
    unitNorm.includes("square met")
  ) {
    return value;
  }
  if (unitNorm === "acre" || unitNorm === "acres") return value * ACRE_TO_SQM;
  if (unitNorm === "ha" || unitNorm === "hectare" || unitNorm === "hectares") {
    return value * HA_TO_SQM;
  }
  return null;
}

export function computePricePerSqm(
  price: unknown,
  landSizeSqm: number | null
): number | null {
  if (landSizeSqm == null || landSizeSqm <= 0) return null;
  const amount = Number(price);
  if (!Number.isFinite(amount) || amount <= 0) return null;
  return amount / landSizeSqm;
}

export function isSaneLandSizeSqm(landSizeSqm: number | null): boolean {
  if (landSizeSqm == null) return false;
  return landSizeSqm >= MIN_LAND_SIZE_SQM && landSizeSqm <= MAX_LAND_SIZE_SQM;
}

export function isSanePricePerSqm(value: number | null): boolean {
  if (value == null) return false;
  return value >= MIN_PRICE_PER_SQM && value <= MAX_PRICE_PER_SQM;
}

export function enrichLandListingFields<T extends LandListingFields>(
  record: T
): T & {
  land_size_sqm: number | null;
  price_per_sqm: number | null;
  has_valid_price_per_sqm: boolean;
} {
  const land_size_sqm = normalizeLandSizeSqm(record.land_size, record.land_size_unit);
  const rawPps = computePricePerSqm(record.price ?? null, land_size_sqm);
  const price_per_sqm = rawPps != null ? Math.round(rawPps * 100) / 100 : null;
  const has_valid_price_per_sqm =
    isSaneLandSizeSqm(land_size_sqm) &&
    price_per_sqm != null &&
    isSanePricePerSqm(price_per_sqm);

  return {
    ...record,
    land_size_sqm: land_size_sqm != null ? Math.round(land_size_sqm * 100) / 100 : null,
    price_per_sqm,
    has_valid_price_per_sqm,
  };
}

export function validPricePerSqm(
  record: LandListingFields & { price?: number | null }
): number | null {
  const enriched = enrichLandListingFields(record);
  return enriched.has_valid_price_per_sqm ? enriched.price_per_sqm! : null;
}
