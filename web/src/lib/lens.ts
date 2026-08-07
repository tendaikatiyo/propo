import { formatCurrency } from "@/lib/format";
import type { ExploreMode, ListingMode, MarketMetric, PropertyType } from "@/lib/types";
import { priceForFilters } from "@/lib/segments";

export const LENS_STORAGE_KEY = "propo_lens";

export function isLandLens(lens: ExploreMode): boolean {
  return lens === "land";
}

export function isInvestLens(lens: ExploreMode): boolean {
  return lens === "invest";
}

export function isResidentialLens(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "buy" || lens === "invest";
}

/** Map user lens to listing/trends API mode. */
export function toListingMode(lens: ExploreMode): ListingMode {
  if (lens === "land") return "land";
  if (lens === "rent") return "rent";
  return "buy";
}

/** Price field used for explore budget filtering. */
export function budgetPriceMode(lens: ExploreMode): "rent" | "buy" {
  return lens === "rent" ? "rent" : "buy";
}

export function showsRentMetrics(_lens?: ExploreMode): boolean {
  return true;
}

export function showsSaleMetrics(_lens?: ExploreMode): boolean {
  return true;
}

export function showsYieldMetrics(_lens?: ExploreMode): boolean {
  return true;
}

/** Focus parked — suburb profiles always include land alongside rent/sale. */
export function showsLandOnProfile(_lens?: ExploreMode): boolean {
  return true;
}

export function showsResidentialOnProfile(_lens?: ExploreMode): boolean {
  return true;
}

export function showsPropertyMix(_lens?: ExploreMode): boolean {
  return true;
}

export function showsReportExport(_lens?: ExploreMode): boolean {
  return true;
}

export function showsRentReportExport(_lens?: ExploreMode): boolean {
  return false;
}

export function showsRentListings(_lens?: ExploreMode): boolean {
  return true;
}

export function showsSaleListings(_lens?: ExploreMode): boolean {
  return true;
}

export function showsRentTrends(_lens?: ExploreMode): boolean {
  return true;
}

export function showsSaleTrends(_lens?: ExploreMode): boolean {
  return true;
}

export function showsInvestSideRankings(lens: ExploreMode): boolean {
  return lens === "invest";
}

export function showsRentSideRankings(lens: ExploreMode): boolean {
  return lens === "rent";
}

export function defaultTrendTab(lens: ExploreMode): "rent" | "buy" {
  return lens === "buy" ? "buy" : "rent";
}

export function sortRelatedSuburbs(
  markets: MarketMetric[],
  lens: ExploreMode,
  filters?: { propertyType: PropertyType | null; bedroom: number | null }
): MarketMetric[] {
  const spec = filters ?? { propertyType: null, bedroom: null };
  const sorted = [...markets];

  if (lens === "rent") {
    return sorted.sort((a, b) => {
      const rentA = priceForFilters(a, "rent", spec) ?? Infinity;
      const rentB = priceForFilters(b, "rent", spec) ?? Infinity;
      return rentA - rentB;
    });
  }

  if (lens === "buy") {
    return sorted.sort((a, b) => {
      const saleA = priceForFilters(a, "buy", spec) ?? Infinity;
      const saleB = priceForFilters(b, "buy", spec) ?? Infinity;
      return saleA - saleB;
    });
  }

  return sorted.sort((a, b) => {
    const opp = (b.opportunity_score ?? 0) - (a.opportunity_score ?? 0);
    if (opp !== 0) return opp;
    return (b.yield_percent ?? 0) - (a.yield_percent ?? 0);
  });
}

export function relatedSuburbCaption(_lens?: ExploreMode): string {
  return "Nearby suburbs";
}

export function relatedSuburbDetail(market: MarketMetric, _lens?: ExploreMode): string {
  const parts: string[] = [];
  if (market.median_rent != null) parts.push(`Rent ${formatCurrency(market.median_rent)}`);
  if (market.median_sale_price != null) {
    parts.push(`Sale ${formatCurrency(market.median_sale_price)}`);
  }
  if (market.yield_percent != null) parts.push(`Yield ${market.yield_percent.toFixed(1)}%`);
  return parts.length ? parts.join(" · ") : "Market snapshot";
}

export function suburbProfileDescription(
  _lens: ExploreMode,
  specLabel: string | null,
  rentFallback: boolean,
  saleFallback: boolean
): string {
  const fallbackNote =
    rentFallback || saleFallback
      ? " Spec-limited figures fall back to suburb-wide medians where sample is thin."
      : "";
  if (specLabel) {
    return `Rent, sale, land, and yield for ${specLabel}.${fallbackNote}`;
  }
  return `Rent, sale, land, yield, trends, and listings — full suburb market snapshot.${fallbackNote}`;
}
