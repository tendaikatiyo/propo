import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbViewTracker } from "@/components/analytics/suburb-view-tracker";
import { SuburbProfile } from "@/components/markets/suburb-profile";
import { JsonLd } from "@/components/seo/json-ld";
import {
  DEFAULT_RENT_BUDGET,
  normalizeExploreFilters,
  normalizePropertyType,
} from "@/lib/constants";
import { fetchLandMetrics, fetchMarketMetrics } from "@/lib/data-server";
import { parseExploreMode } from "@/lib/mode";
import { sortRelatedSuburbs } from "@/lib/lens";
import { findMarketBySlugs } from "@/lib/markets";
import { sanitizeLabel } from "@/lib/format";
import { suburbPageJsonLd } from "@/lib/json-ld";
import { priceForFilters } from "@/lib/segments";
import {
  buildPageMetadata,
  suburbPageDescription,
  suburbPageTitle,
} from "@/lib/seo";
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

  const landMetrics = await fetchLandMetrics();
  const landMarket = landMetrics.find((m) => m.market_id === market.market_id) ?? null;

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });
  const suburbLabel = sanitizeLabel(market.suburb);
  const description = suburbPageDescription(
    market,
    suburbLabel,
    medianRent,
    medianSale,
    landMarket
  );

  return buildPageMetadata({
    title: suburbPageTitle(suburbLabel, market.city),
    description,
    path: `/cities/${citySlug}/${suburbSlug}`,
    ogImage: {
      alt: `${suburbLabel}, ${market.city} — houses to rent, property for sale & land on Propo`,
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
  searchParams: Promise<{ type?: string; bedroom?: string; mode?: string }>;
}) {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const sp = await searchParams;
  const lens = parseExploreMode(sp.mode ?? null);
  const { propertyType, bedroom } = parseSegmentFilters(sp);
  const [markets, landMetrics] = await Promise.all([
    fetchMarketMetrics(),
    fetchLandMetrics(),
  ]);
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) notFound();

  const landMarket = landMetrics.find((m) => m.market_id === market.market_id) ?? null;

  const related = sortRelatedSuburbs(
    markets.filter((m) => matchesSlug(m.city, citySlug) && m.market_id !== market.market_id),
    lens,
    { propertyType, bedroom }
  ).slice(0, 6);

  const suburbLabel = sanitizeLabel(market.suburb);
  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });
  const description = suburbPageDescription(
    market,
    suburbLabel,
    medianRent,
    medianSale,
    landMarket
  );

  return (
    <>
      <JsonLd
        data={suburbPageJsonLd({
          city: market.city,
          suburb: suburbLabel,
          citySlug,
          suburbSlug,
          description,
        })}
      />
      <SuburbViewTracker
        marketId={market.market_id}
        city={market.city}
        suburb={suburbLabel}
        lens={lens}
      />
      <SuburbProfile
        market={market}
        related={related}
        propertyType={propertyType}
        bedroom={bedroom}
        landMarket={landMarket}
        lens={lens}
      />
    </>
  );
}
