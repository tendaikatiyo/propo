import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbReport } from "@/components/markets/suburb-report";
import {
  DEFAULT_RENT_BUDGET,
  normalizeExploreFilters,
  normalizePropertyType,
} from "@/lib/constants";
import { getDataUpdatedAt } from "@/lib/data-freshness-server";
import { fetchListings, fetchMarketMetrics, fetchMarketTrends } from "@/lib/data-server";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { findMarketBySlugs } from "@/lib/markets";
import { priceForFilters } from "@/lib/segments";
import { buildPageMetadata } from "@/lib/seo";
import { suburbPath, suburbReportPath, toSlug } from "@/lib/slug";

export const revalidate = 3600;
export const dynamicParams = true;

function parseSegmentFilters(sp: { type?: string; bedroom?: string }) {
  return normalizeExploreFilters({
    mode: "rent",
    budget: DEFAULT_RENT_BUDGET,
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
  searchParams: Promise<{ type?: string; bedroom?: string }>;
}): Promise<Metadata> {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const sp = await searchParams;
  const { propertyType, bedroom } = parseSegmentFilters(sp);
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) return { title: "Report not found" };

  const suburbLabel = sanitizeLabel(market.suburb);
  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  return buildPageMetadata({
    title: `Market report — ${suburbLabel}, ${market.city}`,
    description: `Printable suburb market report for ${suburbLabel}: median rent ${formatCurrency(medianRent)}, median sale ${formatCurrency(medianSale)}, 90-day trends, and value listings.`,
    path: suburbReportPath(market.city, market.suburb, { type: propertyType, bedroom }),
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
  searchParams: Promise<{ type?: string; bedroom?: string }>;
}) {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const sp = await searchParams;
  const { propertyType, bedroom } = parseSegmentFilters(sp);
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) notFound();

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  const [updatedAt, rentTrends, saleTrends, rentListings, saleListings] = await Promise.all([
    getDataUpdatedAt(),
    fetchMarketTrends(market, "90d", "rent"),
    fetchMarketTrends(market, "90d", "buy"),
    medianRent != null && medianRent > 0
      ? fetchListings({
          mode: "rent",
          budget: medianRent,
          city: market.city,
          suburb: market.suburb,
          tier: "value",
          medianPrice: medianRent,
          limit: 4,
        })
      : Promise.resolve([]),
    medianSale != null && medianSale > 0
      ? fetchListings({
          mode: "buy",
          budget: medianSale,
          city: market.city,
          suburb: market.suburb,
          tier: "value",
          medianPrice: medianSale,
          limit: 4,
        })
      : Promise.resolve([]),
  ]);

  const profilePath = suburbPath(market.city, market.suburb, { type: propertyType, bedroom });

  return (
    <SuburbReport
      market={market}
      propertyType={propertyType}
      bedroom={bedroom}
      updatedAt={updatedAt}
      rentTrends={rentTrends}
      saleTrends={saleTrends}
      rentListings={rentListings}
      saleListings={saleListings}
      profilePath={profilePath}
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
