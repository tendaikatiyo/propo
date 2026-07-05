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

export function showsRentMetrics(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "invest";
}

export function showsSaleMetrics(lens: ExploreMode): boolean {
  return lens === "buy" || lens === "invest";
}

export function showsYieldMetrics(lens: ExploreMode): boolean {
  return lens === "invest";
}

export function showsLandOnProfile(lens: ExploreMode): boolean {
  return lens === "land";
}

export function showsResidentialOnProfile(lens: ExploreMode): boolean {
  return lens !== "land";
}

export function showsPropertyMix(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "buy" || lens === "invest";
}

export function showsReportExport(lens: ExploreMode): boolean {
  return lens === "invest";
}

export function showsRentReportExport(lens: ExploreMode): boolean {
  return lens === "rent";
}

export function showsRentListings(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "invest";
}

export function showsSaleListings(lens: ExploreMode): boolean {
  return lens === "buy" || lens === "invest";
}

export function showsRentTrends(lens: ExploreMode): boolean {
  return lens === "rent" || lens === "invest";
}

export function showsSaleTrends(lens: ExploreMode): boolean {
  return lens === "buy" || lens === "invest";
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

export function relatedSuburbCaption(lens: ExploreMode): string {
  if (lens === "rent") return "Similar affordable suburbs";
  if (lens === "buy") return "Similar suburbs by sale price";
  if (lens === "invest") return "Similar suburbs by yield";
  return "Similar suburbs";
}

export function relatedSuburbDetail(market: MarketMetric, lens: ExploreMode): string {
  if (lens === "rent") {
    return `Median rent ${formatCurrency(market.median_rent)}`;
  }
  if (lens === "buy") {
    return `Median sale ${formatCurrency(market.median_sale_price)}`;
  }
  return `Yield ${market.yield_percent != null ? `${market.yield_percent.toFixed(1)}%` : "—"} · Opp ${market.opportunity_score ?? "—"}`;
}

export function suburbProfileDescription(
  lens: ExploreMode,
  specLabel: string | null,
  rentFallback: boolean,
  saleFallback: boolean
): string {
  if (lens === "land") {
    return "Land stands for sale — prices per sqm, trends, and active listings.";
  }
  if (lens === "rent") {
    return specLabel
      ? `Rental market for ${specLabel}${
          rentFallback ? " (suburb-wide median where spec data is limited)" : ""
        }.`
      : "Median rent, trends, and active rental listings in this suburb.";
  }
  if (lens === "buy") {
    return specLabel
      ? `Homes for sale — ${specLabel} medians${
          saleFallback ? " (suburb-wide median where spec data is limited)" : ""
        }.`
      : "Median sale prices, trends, and active listings in this suburb.";
  }
  if (specLabel) {
    return `Full market snapshot for ${specLabel} — rent, sale, yield, and trends.`;
  }
  return "Rent, sale, yield, opportunity, trends, and active listings — full market intelligence.";
}
