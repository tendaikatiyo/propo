import {
  computeLandRollup,
  isLandPurchaseRecentEnough,
  type LandReportMetrics,
  type LandReportRow,
} from "@/lib/land-reports";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { buildMarketId } from "@/lib/rent-reports";

/** `null` = lookup failed (fail closed); do not treat as unique. */
export async function findDuplicateLandReport(input: {
  ipHash: string;
  marketId: string;
  totalPrice: number;
  landSizeSqm?: number;
}): Promise<boolean | null> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return null;

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  let query = supabase
    .from("land_reports")
    .select("id")
    .eq("ip_hash", input.ipHash)
    .eq("market_id", input.marketId)
    .eq("total_price", input.totalPrice)
    .gte("created_at", weekAgo);

  if (input.landSizeSqm != null) {
    query = query.eq("land_size_sqm", input.landSizeSqm);
  }

  const { data, error } = await query.limit(1);

  if (error) {
    console.error("[land-reports] duplicate check:", error.message);
    return null;
  }

  return Boolean(data?.length);
}

export async function syncLandReportMetrics(marketId: string): Promise<void> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return;

  const { data: reports, error } = await supabase
    .from("land_reports")
    .select(
      "price_per_sqm, city, suburb, is_completed_purchase, purchase_date, land_size_sqm"
    )
    .eq("market_id", marketId)
    .eq("status", "approved");

  if (error) {
    console.error("[land-reports] sync fetch:", error.message);
    return;
  }

  const eligible = (reports ?? []).filter((row) => {
    if (!row.is_completed_purchase) return false;
    if (!isLandPurchaseRecentEnough(row.purchase_date as string | null)) return false;
    return row.price_per_sqm != null && Number(row.price_per_sqm) > 0;
  });

  if (!eligible.length) {
    await supabase.from("land_report_metrics").delete().eq("market_id", marketId);
    return;
  }

  const rollup = computeLandRollup(
    eligible.map((row) => Number(row.price_per_sqm))
  );
  const sample = eligible[0];

  await supabase.from("land_report_metrics").upsert({
    market_id: marketId,
    city: sample.city as string,
    suburb: sample.suburb as string,
    report_count: rollup.report_count,
    median_price_per_sqm: rollup.median_price_per_sqm,
    min_price_per_sqm: rollup.min_price_per_sqm,
    max_price_per_sqm: rollup.max_price_per_sqm,
    updated_at: new Date().toISOString(),
  });
}

export async function fetchLandReportMetricsForMarket(
  marketId: string
): Promise<LandReportMetrics | null> {
  const supabase = createAdminSupabaseClient();
  const { createServerSupabaseClient } = await import("@/lib/supabase");
  const client = createServerSupabaseClient() ?? supabase;
  if (!client) return null;

  const { data, error } = await client
    .from("land_report_metrics")
    .select("*")
    .eq("market_id", marketId)
    .maybeSingle();

  if (error) {
    console.error("[land-reports] fetch metrics:", error.message);
    return null;
  }

  return (data as LandReportMetrics | null) ?? null;
}

export async function fetchAdminLandReports(
  status: "pending" | "approved" | "rejected" | "all" = "pending"
): Promise<LandReportRow[]> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return [];

  let query = supabase
    .from("land_reports")
    .select(
      "id, market_id, city, suburb, land_size, land_size_unit, land_size_sqm, total_price, price_per_sqm, currency, is_serviced, is_completed_purchase, purchase_date, notes, status, rejection_reason, reviewed_at, reviewed_by, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(100);

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    console.error("[land-reports] admin list:", error.message);
    return [];
  }

  return (data ?? []) as LandReportRow[];
}

export function resolveLandMarketId(city: string, suburb: string): string {
  return buildMarketId(city, suburb);
}
