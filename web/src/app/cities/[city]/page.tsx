import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CityDashboard } from "@/components/cities/city-dashboard";
import { fetchCities, fetchMarketMetrics, fetchRankings } from "@/lib/data-server";
import { formatCurrency } from "@/lib/format";
import { findCityMarkets } from "@/lib/markets";
import { buildPageMetadata } from "@/lib/seo";
import { matchesSlug, toSlug } from "@/lib/slug";

export const revalidate = 3600;

export async function generateStaticParams() {
  const cities = await fetchCities();
  return cities.map((city) => ({
    city: toSlug(city.city),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cities = await fetchCities();
  const city = cities.find((c) => matchesSlug(c.city, citySlug));
  if (!city) return { title: "City not found" };

  const rent = formatCurrency(city.median_rent);
  const sale = formatCurrency(city.median_sale_price);

  return buildPageMetadata({
    title: `${city.city} property markets`,
    description: `${city.suburb_count} suburbs tracked in ${city.city}. Median rent ${rent}, median sale ${sale}. Explore yields, trends, and suburb rankings.`,
    path: `/cities/${citySlug}`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const [cities, markets, rankings] = await Promise.all([
    fetchCities(),
    fetchMarketMetrics(),
    fetchRankings(),
  ]);

  const city = cities.find((c) => matchesSlug(c.city, citySlug));
  if (!city) notFound();

  const cityMarkets = findCityMarkets(markets, citySlug);

  return <CityDashboard city={city} markets={cityMarkets} rankings={rankings} />;
}
