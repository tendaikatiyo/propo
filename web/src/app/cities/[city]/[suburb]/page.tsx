import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbProfile } from "@/components/markets/suburb-profile";
import {
  DEFAULT_RENT_BUDGET,
  normalizeExploreFilters,
  normalizePropertyType,
} from "@/lib/constants";
import { fetchMarketMetrics } from "@/lib/data-server";
import { findMarketBySlugs } from "@/lib/markets";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { priceForFilters } from "@/lib/segments";
import { buildPageMetadata } from "@/lib/seo";
import { matchesSlug, toSlug } from "@/lib/slug";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const markets = await fetchMarketMetrics();
  return markets.map((market) => ({
    city: toSlug(market.city),
    suburb: toSlug(market.suburb),
  }));
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
  if (!market) return { title: "Suburb not found" };

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });
  const suburbLabel = sanitizeLabel(market.suburb);

  return buildPageMetadata({
    title: `${suburbLabel}, ${market.city}`,
    description: `Median rent ${formatCurrency(medianRent)}, median sale ${formatCurrency(medianSale)} in ${suburbLabel}, ${market.city}. Yields, price trends, and active listings.`,
    path: `/cities/${citySlug}/${suburbSlug}`,
    ogImage: {
      alt: `${suburbLabel}, ${market.city} — property market data on Propo`,
    },
  });
}

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

export default async function SuburbPage({
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

  const related = markets
    .filter((m) => matchesSlug(m.city, citySlug) && m.market_id !== market.market_id)
    .sort((a, b) => (b.opportunity_score ?? 0) - (a.opportunity_score ?? 0))
    .slice(0, 6);

  return (
    <SuburbProfile
      market={market}
      related={related}
      propertyType={propertyType}
      bedroom={bedroom}
    />
  );
}
