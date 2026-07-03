import { NextResponse } from "next/server";

import {
  fetchLandMarketTrends,
  fetchLandMetrics,
  fetchMarketMetrics,
  fetchMarketTrends,
  parseTrendQuery,
} from "@/lib/data-server";

export const revalidate = 3600;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ marketId: string }> }
) {
  const { marketId } = await params;
  const { searchParams } = new URL(request.url);
  const { range, mode } = parseTrendQuery(
    searchParams.get("range"),
    searchParams.get("mode")
  );

  if (mode === "land") {
    const landMarkets = await fetchLandMetrics();
    const landMarket = landMarkets.find((item) => item.market_id === marketId);
    if (!landMarket) {
      return NextResponse.json({ error: "Land market not found" }, { status: 404 });
    }
    const trends = await fetchLandMarketTrends(landMarket, range);
    return NextResponse.json(trends);
  }

  const markets = await fetchMarketMetrics();
  const market = markets.find((item) => item.market_id === marketId);
  if (!market) {
    return NextResponse.json({ error: "Market not found" }, { status: 404 });
  }

  const trends = await fetchMarketTrends(market, range, mode);
  return NextResponse.json(trends);
}
