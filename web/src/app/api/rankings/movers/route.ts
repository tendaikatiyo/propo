import { NextResponse } from "next/server";

import {
  fetchMarketMetrics,
  fetchNationalTrendMovers,
  parseTrendQuery,
} from "@/lib/data-server";
import { filterMoversPayload } from "@/lib/rankings";

export const revalidate = 3600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { range } = parseTrendQuery(searchParams.get("range"), "rent");
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Math.min(Math.max(Number(limitParam) || 10, 1), 25) : 10;

  const markets = await fetchMarketMetrics();
  const movers = await fetchNationalTrendMovers(markets, range, limit);
  const filtered = filterMoversPayload(movers, markets);

  return NextResponse.json(filtered);
}
