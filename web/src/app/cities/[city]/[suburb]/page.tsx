import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SuburbProfile } from "@/components/markets/suburb-profile";
import { fetchMarketMetrics } from "@/lib/data-server";
import { findMarketBySlugs } from "@/lib/markets";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { matchesSlug } from "@/lib/slug";

export const revalidate = 3600;

export async function generateStaticParams() {
  const markets = await fetchMarketMetrics();
  return markets.slice(0, 200).map((market) => ({
    city: market.city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
    suburb: market.suburb.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; suburb: string }>;
}): Promise<Metadata> {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) return { title: "Suburb not found" };

  return {
    title: `${sanitizeLabel(market.suburb)}, ${market.city}`,
    description: `Median rent ${formatCurrency(market.median_rent)}, median sale ${formatCurrency(market.median_sale_price)}. Property market data for ${market.suburb}, ${market.city}.`,
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ city: string; suburb: string }>;
}) {
  const { city: citySlug, suburb: suburbSlug } = await params;
  const markets = await fetchMarketMetrics();
  const market = findMarketBySlugs(markets, citySlug, suburbSlug);
  if (!market) notFound();

  const related = markets
    .filter((m) => matchesSlug(m.city, citySlug) && m.market_id !== market.market_id)
    .sort((a, b) => (b.opportunity_score ?? 0) - (a.opportunity_score ?? 0))
    .slice(0, 6);

  return <SuburbProfile market={market} related={related} />;
}
