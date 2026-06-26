import { NextResponse } from "next/server";

import { getDataUpdatedAt } from "@/lib/data-freshness-server";
import { fetchMarketMetrics } from "@/lib/data-server";
import { createServerSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export const revalidate = 3600;

export async function GET() {
  const supabaseConfigured = isSupabaseConfigured();
  let supabaseError: string | null = null;
  let supabaseMarketCount: number | null = null;

  if (supabaseConfigured) {
    const client = createServerSupabaseClient();
    if (client) {
      const { count, error } = await client
        .from("market_metrics")
        .select("*", { count: "exact", head: true });
      if (error) supabaseError = error.message;
      else supabaseMarketCount = count;
    }
  }

  const markets = await fetchMarketMetrics();
  const updatedAt = await getDataUpdatedAt();

  return NextResponse.json({
    updatedAt,
    supabaseConfigured,
    supabaseMarketCount,
    supabaseError,
    marketCount: markets.length,
  });
}
