import { notFound } from "next/navigation";

import { CityDashboard } from "@/components/cities/city-dashboard";
import { fetchCities, fetchMarketMetrics, fetchRankings } from "@/lib/data-server";
import { findCityMarkets } from "@/lib/markets";
import { matchesSlug, toSlug } from "@/lib/slug";

export const revalidate = 3600;

export async function generateStaticParams() {
  const cities = await fetchCities();
  return cities.map((city) => ({
    city: toSlug(city.city),
  }));
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
