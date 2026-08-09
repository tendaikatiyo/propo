import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbReport } from "@/components/markets/suburb-report";
import {
  DEFAULT_RENT_BUDGET,
  normalizeExploreFilters,
  normalizePropertyType,
} from "@/lib/constants";
import { getDataUpdatedAt } from "@/lib/data-freshness-server";
import {
  // fetchLandMarketTrends,
  fetchLandMetrics,
  fetchListings,
  fetchMarketMetrics,
  fetchMarketTrends,
} from "@/lib/data-server";
import { formatCurrency, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { findMarketBySlugs } from "@/lib/markets";
import { priceForFilters } from "@/lib/segments";
import { buildPageMetadata } from "@/lib/seo";
import { suburbPath, suburbReportPath, toSlug } from "@/lib/slug";
import type { ReportScope } from "@/lib/types";

function parseReportScope(value: string | undefined): ReportScope {
  return value === "rent" ? "rent" : "full";
}

export const revalidate = 3600;
export const dynamicParams = true;

function parseSegmentFilters(sp: { type?: string; bedroom?: string }) {
  return normalizeExploreFilters({
    mode: "rent",
    budget: DEFAULT_RENT_BUDGET,
    budgetFilterActive: false,
    city: null,
    propertyType: sp.type ? normalizePropertyType(sp.type) : null,
    bedroom: sp.bedroom ? Number(sp.bedroom) : null,
    includeLowConfidence: false,
    hideSuburbMedianFallback: true,
  });
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ city: string; suburb: string }>;
  searchParams: Promise<{ type?: string; bedroom?: string; scope?: string }>;
}): Promise<Metadata> {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const sp = await searchParams;
  const scope = parseReportScope(sp.scope);
  const { propertyType, bedroom } = parseSegmentFilters(sp);
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) notFound();

  const landMetrics = await fetchLandMetrics();
  const landMarket = landMetrics.find((m) => m.market_id === market.market_id) ?? null;

  const suburbLabel = sanitizeLabel(market.suburb);
  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });
  const landLine =
    scope === "full" && landMarket?.median_price_per_sqm != null
      ? ` Land from ${formatPricePerSqm(landMarket.median_price_per_sqm)}/sqm.`
      : "";

  const titlePrefix = scope === "rent" ? "Rental summary" : "Market report";

  return buildPageMetadata({
    title: `${titlePrefix} — ${suburbLabel}, ${market.city}`,
    description:
      scope === "rent"
        ? `Printable rental summary for ${suburbLabel}: median rent ${formatCurrency(medianRent)}, 90-day rent trends, and value listings.`
        : `Printable suburb market report for ${suburbLabel}: median rent ${formatCurrency(medianRent)}, median sale ${formatCurrency(medianSale)}.${landLine} 90-day trends, and value listings.`,
    path: suburbReportPath(market.city, market.suburb, {
      type: propertyType,
      bedroom,
      scope,
    }),
    ogImage: {
      alt: `${suburbLabel}, ${market.city} — market report on Propo`,
    },
  });
}

export default async function SuburbReportPage({
  params,
  searchParams,
}: {
  params: Promise<{ city: string; suburb: string }>;
  searchParams: Promise<{ type?: string; bedroom?: string; scope?: string }>;
}) {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const sp = await searchParams;
  const scope = parseReportScope(sp.scope);
  const { propertyType, bedroom } = parseSegmentFilters(sp);
  const [markets, landMetrics] = await Promise.all([
    fetchMarketMetrics(),
    fetchLandMetrics(),
  ]);
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) notFound();

  const landMarket = landMetrics.find((m) => m.market_id === market.market_id) ?? null;
  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });
  const medianLandPps = landMarket?.median_price_per_sqm ?? null;
  const hasLandData = landMarket != null && (landMarket.priced_land_count ?? 0) > 0;

  const rentOnly = scope === "rent";

  const [
    updatedAt,
    rentTrends,
    saleTrends,
    rentListings,
    saleListings,
    landListings,
  ] = await Promise.all([
    getDataUpdatedAt(),
    fetchMarketTrends(market, "90d", "rent"),
    rentOnly
      ? Promise.resolve({ points: [], pct_change_median: null, pct_change_listings: null })
      : fetchMarketTrends(market, "90d", "buy"),
    medianRent != null && medianRent > 0
      ? fetchListings({
          mode: "rent",
          budget: medianRent,
          marketId: market.market_id,
          city: market.city,
          suburb: market.suburb,
          tier: "value",
          medianPrice: medianRent,
          limit: 4,
        })
      : Promise.resolve([]),
    !rentOnly && medianSale != null && medianSale > 0
      ? fetchListings({
          mode: "buy",
          budget: medianSale,
          marketId: market.market_id,
          city: market.city,
          suburb: market.suburb,
          tier: "value",
          medianPrice: medianSale,
          limit: 4,
        })
      : Promise.resolve([]),
    !rentOnly && hasLandData && medianLandPps != null && medianLandPps > 0
      ? fetchListings({
          mode: "land",
          budget: medianLandPps,
          marketId: market.market_id,
          city: market.city,
          suburb: market.suburb,
          tier: "value",
          medianPrice: medianLandPps,
          limit: 4,
        })
      : Promise.resolve([]),
  ]);

  const profilePath = suburbPath(market.city, market.suburb, {
    type: propertyType,
    bedroom,
  });
  const investProfilePath = suburbPath(market.city, market.suburb, {
    type: propertyType,
    bedroom,
  });

  return (
    <SuburbReport
      market={market}
      propertyType={propertyType}
      bedroom={bedroom}
      updatedAt={updatedAt}
      rentTrends={rentTrends}
      saleTrends={saleTrends}
      landMarket={rentOnly ? null : landMarket}
      rentListings={rentListings}
      saleListings={saleListings}
      landListings={landListings}
      profilePath={profilePath}
      investProfilePath={investProfilePath}
      scope={scope}
    />
  );
}

export async function generateStaticParams() {
  const markets = await fetchMarketMetrics();
  return markets.map((market) => ({
    city: toSlug(market.city),
    suburb: toSlug(market.suburb),
  }));
}
