import { NextResponse } from "next/server";

import {
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

  const markets = await fetchMarketMetrics();
  const market = markets.find((item) => item.market_id === marketId);
  if (!market) {
    return NextResponse.json({ error: "Market not found" }, { status: 404 });
  }

  const trends = await fetchMarketTrends(market, range, mode);
  return NextResponse.json(trends);
}
