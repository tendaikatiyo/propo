import { NextResponse } from "next/server";

import {
  fetchCityTrendMovers,
  fetchMarketMetrics,
  parseTrendQuery,
} from "@/lib/data-server";
import { findCityMarkets } from "@/lib/markets";
import { matchesSlug } from "@/lib/slug";

export const revalidate = 3600;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ city: string }> }
) {
  const { city: citySlug } = await params;
  const { searchParams } = new URL(request.url);
  const { range, mode } = parseTrendQuery(
    searchParams.get("range"),
    searchParams.get("mode")
  );

  const markets = await fetchMarketMetrics();
  const cityMarkets = findCityMarkets(markets, citySlug);
  const city = cityMarkets[0]?.city;
  if (!city) {
    return NextResponse.json({ error: "City not found" }, { status: 404 });
  }

  if (!markets.some((market) => matchesSlug(market.city, citySlug))) {
    return NextResponse.json({ error: "City not found" }, { status: 404 });
  }

  const movers = await fetchCityTrendMovers(city, cityMarkets, range, mode);
  return NextResponse.json(movers);
}
