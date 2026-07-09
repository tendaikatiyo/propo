import {
  computeSaleRollup,
  isSaleRecentEnough,
  type SaleReportMetrics,
  type SaleReportRow,
} from "@/lib/sale-reports";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { buildMarketId } from "@/lib/rent-reports";

export async function findDuplicateSaleReport(input: {
  ipHash: string;
  marketId: string;
  salePrice: number;
  bedrooms: number;
}): Promise<boolean> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return false;

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("sale_reports")
    .select("id")
    .eq("ip_hash", input.ipHash)
    .eq("market_id", input.marketId)
    .eq("sale_price", input.salePrice)
    .eq("bedrooms", input.bedrooms)
    .gte("created_at", weekAgo)
    .limit(1);

  if (error) {
    console.error("[sale-reports] duplicate check:", error.message);
    return false;
  }

  return Boolean(data?.length);
}

export async function syncSaleReportMetrics(marketId: string): Promise<void> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return;

  const { data: reports, error } = await supabase
    .from("sale_reports")
    .select("sale_price, city, suburb, is_completed_sale, sale_date")
    .eq("market_id", marketId)
    .eq("status", "approved");

  if (error) {
    console.error("[sale-reports] sync fetch:", error.message);
    return;
  }

  const eligible = (reports ?? []).filter((row) => {
    if (!row.is_completed_sale) return false;
    return isSaleRecentEnough(row.sale_date as string | null);
  });

  if (!eligible.length) {
    await supabase.from("sale_report_metrics").delete().eq("market_id", marketId);
    return;
  }

  const rollup = computeSaleRollup(eligible.map((row) => row.sale_price as number));
  const sample = eligible[0];

  await supabase.from("sale_report_metrics").upsert({
    market_id: marketId,
    city: sample.city as string,
    suburb: sample.suburb as string,
    report_count: rollup.report_count,
    median_sale_price: rollup.median_sale_price,
    min_sale_price: rollup.min_sale_price,
    max_sale_price: rollup.max_sale_price,
    updated_at: new Date().toISOString(),
  });
}

export async function fetchSaleReportMetricsForMarket(
  marketId: string
): Promise<SaleReportMetrics | null> {
  const supabase = createAdminSupabaseClient();
  const { createServerSupabaseClient } = await import("@/lib/supabase");
  const client = createServerSupabaseClient() ?? supabase;
  if (!client) return null;

  const { data, error } = await client
    .from("sale_report_metrics")
    .select("*")
    .eq("market_id", marketId)
    .maybeSingle();

  if (error) {
    console.error("[sale-reports] fetch metrics:", error.message);
    return null;
  }

  return (data as SaleReportMetrics | null) ?? null;
}

export async function fetchAdminSaleReports(
  status: "pending" | "approved" | "rejected" | "all" = "pending"
): Promise<SaleReportRow[]> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return [];

  let query = supabase
    .from("sale_reports")
    .select(
      "id, market_id, city, suburb, property_type, bedrooms, sale_price, currency, is_completed_sale, sale_date, notes, status, rejection_reason, reviewed_at, reviewed_by, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(100);

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    console.error("[sale-reports] admin list:", error.message);
    return [];
  }

  return (data ?? []) as SaleReportRow[];
}

export function resolveSaleMarketId(city: string, suburb: string): string {
  return buildMarketId(city, suburb);
}
