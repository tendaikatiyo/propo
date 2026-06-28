import { MIN_SEGMENT_LISTINGS } from "@/lib/constants";
import type {
  ExploreFilters,
  ExploreMode,
  MarketMetric,
  MarketSegmentStats,
  PropertyType,
} from "@/lib/types";

export function bedroomBucket(bedroom: number): string {
  if (bedroom >= 4) return "4_plus";
  return String(bedroom);
}

export function segmentTypeKey(propertyType: PropertyType): string {
  return propertyType === "apartment" ? "flat" : propertyType;
}

export function segmentKey(
  propertyType: PropertyType | null,
  bedroom: number | null
): string | null {
  if (!propertyType && bedroom == null) return null;
  if (propertyType && bedroom != null) {
    return `${segmentTypeKey(propertyType)}:${bedroomBucket(bedroom)}`;
  }
  if (propertyType) return `${segmentTypeKey(propertyType)}:*`;
  if (bedroom != null) return `*:${bedroomBucket(bedroom)}`;
  return null;
}

export function resolveSegmentStats(
  market: MarketMetric,
  propertyType: PropertyType | null,
  bedroom: number | null
): MarketSegmentStats | null {
  if (!market.segments || (!propertyType && bedroom == null)) return null;

  const candidates: string[] = [];
  const typePart = propertyType ? segmentTypeKey(propertyType) : null;
  const bedPart = bedroom != null ? bedroomBucket(bedroom) : null;

  if (typePart && bedPart) candidates.push(`${typePart}:${bedPart}`);
  if (typePart) candidates.push(`${typePart}:*`);
  if (bedPart) candidates.push(`*:${bedPart}`);

  for (const key of candidates) {
    const segment = market.segments[key];
    if (segment) return segment;
  }
  return null;
}

export function segmentMedianForMode(
  segment: MarketSegmentStats | null,
  mode: ExploreMode
): number | null {
  if (!segment) return null;
  return mode === "rent"
    ? (segment.median_rent ?? null)
    : (segment.median_sale_price ?? null);
}

export function segmentCountForMode(
  segment: MarketSegmentStats | null,
  mode: ExploreMode
): number {
  if (!segment) return 0;
  return mode === "rent" ? (segment.rental_count ?? 0) : (segment.sale_count ?? 0);
}

export function hasActiveSegmentFilters(
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): boolean {
  return filters.propertyType != null || filters.bedroom != null;
}

export function priceForFilters(
  market: MarketMetric,
  mode: ExploreMode,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): number | null {
  const aggregate = mode === "rent" ? market.median_rent : market.median_sale_price;
  if (!hasActiveSegmentFilters(filters)) return aggregate;

  const segment = resolveSegmentStats(market, filters.propertyType, filters.bedroom);
  const segmentPrice = segmentMedianForMode(segment, mode);
  if (segmentPrice != null && segmentPrice > 0) {
    const count = segmentCountForMode(segment, mode);
    if (count >= MIN_SEGMENT_LISTINGS) return segmentPrice;
  }
  return aggregate;
}

export function isSegmentLimitedData(
  market: MarketMetric,
  mode: ExploreMode,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): boolean {
  if (!hasActiveSegmentFilters(filters)) return false;
  const segment = resolveSegmentStats(market, filters.propertyType, filters.bedroom);
  const count = segmentCountForMode(segment, mode);
  return count > 0 && count < MIN_SEGMENT_LISTINGS;
}

const TYPE_LABELS: Record<PropertyType, string> = {
  house: "house",
  flat: "flat",
  apartment: "flat",
  room: "room",
  townhouse: "townhouse",
  commercial: "commercial",
};

export function segmentFilterLabel(
  propertyType: PropertyType | null,
  bedroom: number | null
): string | null {
  if (!propertyType && bedroom == null) return null;
  const parts: string[] = [];
  if (propertyType) parts.push(TYPE_LABELS[propertyType]);
  if (bedroom != null) {
    parts.push(bedroom >= 4 ? "4+ bed" : `${bedroom}-bed`);
  }
  return parts.join(" · ");
}

export function segmentMedianLabel(
  mode: ExploreMode,
  propertyType: PropertyType | null,
  bedroom: number | null
): string {
  const spec = segmentFilterLabel(propertyType, bedroom);
  if (!spec) return mode === "rent" ? "Median rent" : "Median sale";
  return mode === "rent" ? `Median rent (${spec})` : `Median sale (${spec})`;
}
