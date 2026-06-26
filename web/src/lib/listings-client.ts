import type { ExploreMode, PropertyType } from "@/lib/types";

export type ListingTier = "in" | "stretch" | "value";

export function buildListingsQuery(params: {
  mode: ExploreMode;
  budget: number;
  city?: string | null;
  suburb?: string | null;
  propertyType?: PropertyType | null;
  tier?: ListingTier;
  medianPrice?: number | null;
  limit?: number;
}) {
  const qs = new URLSearchParams();
  qs.set("mode", params.mode);
  qs.set("budget", String(params.budget));
  if (params.city) qs.set("city", params.city);
  if (params.suburb) qs.set("suburb", params.suburb);
  if (params.propertyType) qs.set("type", params.propertyType);
  if (params.tier) qs.set("tier", params.tier);
  if (params.medianPrice != null) qs.set("median", String(params.medianPrice));
  qs.set("limit", String(params.limit ?? 4));
  return qs;
}

export async function fetchListingsFromApi(
  params: Parameters<typeof buildListingsQuery>[0]
) {
  const qs = buildListingsQuery(params);
  const res = await fetch(`/api/listings?${qs.toString()}`);
  if (!res.ok) throw new Error("Failed to load listings");
  return res.json() as Promise<import("@/lib/types").Listing[]>;
}
