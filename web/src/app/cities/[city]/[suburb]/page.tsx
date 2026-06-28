import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbProfile } from "@/components/markets/suburb-profile";
import { normalizePropertyType } from "@/lib/constants";
import { fetchMarketMetrics } from "@/lib/data-server";
import { findMarketBySlugs } from "@/lib/markets";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { priceForFilters } from "@/lib/segments";
import type { PropertyType } from "@/lib/types";
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
  const propertyType = parseSegmentPropertyType(sp.type);
  const bedroom = parseSegmentBedroom(sp.bedroom);
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) return { title: "Suburb not found" };

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  return {
    title: `${sanitizeLabel(market.suburb)}, ${market.city}`,
    description: `Median rent ${formatCurrency(medianRent)}, median sale ${formatCurrency(medianSale)}. Property market data for ${market.suburb}, ${market.city}.`,
  };
}

function parseSegmentPropertyType(value?: string): PropertyType | null {
  if (!value) return null;
  return normalizePropertyType(value);
}

function parseSegmentBedroom(value?: string): number | null {
  if (!value) return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
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
  const propertyType = parseSegmentPropertyType(sp.type);
  const bedroom = parseSegmentBedroom(sp.bedroom);
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
