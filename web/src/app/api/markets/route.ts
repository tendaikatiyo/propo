import { NextResponse } from "next/server";

import { fetchCities, fetchMarketMetrics, fetchRankings } from "@/lib/data-server";

export const revalidate = 3600;

export async function GET() {
  const markets = await fetchMarketMetrics();
  return NextResponse.json(markets);
}
