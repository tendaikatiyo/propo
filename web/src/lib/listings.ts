import type { Listing } from "@/lib/types";

/** Matches analytics `clean_data.py` land normalisation (residential_land, land, stand, etc.). */
export function isLandPropertyType(propertyType: string | null | undefined): boolean {
  if (!propertyType) return false;
  const value = propertyType.toLowerCase();
  if (value === "land") return true;
  return value.endsWith("_land") || value.includes("residential_land");
}

const AGENCY_LOGO_MARKERS = [
  "/agency-logos/",
  "/thumb/",
  "logo",
  "private-lister-logo",
] as const;

/** True when URL is an agency brand mark, not a listing photo. */
export function isAgencyBrandingUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  const lowered = url.toLowerCase();
  if (lowered.includes("classifieds.co.zw") && lowered.includes("/medium/")) return false;
  if (lowered.includes("propertybook.co.zw") && !lowered.includes("/agency-logos/")) {
    return false;
  }
  return AGENCY_LOGO_MARKERS.some((marker) => lowered.includes(marker));
}

export function resolveListingThumbnailUrl(listing: {
  image_url?: string | null;
  agency_logo?: string | null;
}): string | null {
  const imageUrl = listing.image_url;
  if (imageUrl && !isAgencyBrandingUrl(imageUrl)) return imageUrl;
  const agencyLogo = listing.agency_logo;
  if (agencyLogo && !isAgencyBrandingUrl(agencyLogo)) return agencyLogo;
  return null;
}

export function dedupeListingsByThumbnail(listings: Listing[]): Listing[] {
  const seen = new Set<string>();
  const unique: Listing[] = [];

  for (const listing of listings) {
    const thumbnail = resolveListingThumbnailUrl(listing);
    if (thumbnail) {
      if (seen.has(thumbnail)) continue;
      seen.add(thumbnail);
    }
    unique.push(listing);
  }

  return unique;
}
