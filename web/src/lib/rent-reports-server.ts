import { createHash } from "crypto";
import { cookies, headers } from "next/headers";

import {
  CONTRIBUTE_SESSION_COOKIE,
  buildMarketId,
  computeRentRollup,
  isLeaseRecentEnough,
  type RentReportMetrics,
  type RentReportRow,
} from "@/lib/rent-reports";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";

const HASH_SALT = process.env.CONTRIBUTION_HASH_SALT?.trim() || "propo-contribute";

export function hashContributionValue(value: string): string {
  return createHash("sha256").update(`${value}|${HASH_SALT}`).digest("hex");
}

export async function getContributionHashes(): Promise<{
  ipHash: string;
  sessionHash: string;
}> {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "unknown";
  const cookieStore = await cookies();
  const sessionId =
    cookieStore.get(CONTRIBUTE_SESSION_COOKIE)?.value ||
    cookieStore.get("propo_analytics_sid")?.value ||
    "anonymous";
  return {
    ipHash: hashContributionValue(ip),
    sessionHash: hashContributionValue(sessionId),
  };
}

export async function checkRentReportRateLimits(
  ipHash: string,
  sessionHash: string
): Promise<string | null> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return null;

  const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const { count: sessionCount, error: sessionError } = await supabase
    .from("rent_reports")
    .select("id", { count: "exact", head: true })
    .eq("session_hash", sessionHash)
    .gte("created_at", dayAgo);

  if (sessionError) {
    console.error("[rent-reports] session rate limit:", sessionError.message);
  } else if ((sessionCount ?? 0) >= 1) {
    return "You can submit one rent report per day. Try again tomorrow.";
  }

  const { count: ipCount, error: ipError } = await supabase
    .from("rent_reports")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", weekAgo);

  if (ipError) {
    console.error("[rent-reports] ip rate limit:", ipError.message);
  } else if ((ipCount ?? 0) >= 3) {
    return "Too many submissions from your network this week. Try again later.";
  }

  return null;
}

export async function findDuplicateRentReport(input: {
  ipHash: string;
  marketId: string;
  monthlyRent: number;
  bedrooms: number;
}): Promise<boolean> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return false;

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("rent_reports")
    .select("id")
    .eq("ip_hash", input.ipHash)
    .eq("market_id", input.marketId)
    .eq("monthly_rent", input.monthlyRent)
    .eq("bedrooms", input.bedrooms)
    .gte("created_at", weekAgo)
    .limit(1);

  if (error) {
    console.error("[rent-reports] duplicate check:", error.message);
    return false;
  }

  return Boolean(data?.length);
}

export async function marketExists(
  city: string,
  suburb: string,
  marketId: string
): Promise<boolean> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return true;

  const { data, error } = await supabase
    .from("market_metrics")
    .select("market_id")
    .eq("market_id", marketId)
    .eq("city", city)
    .eq("suburb", suburb)
    .maybeSingle();

  if (error) {
    console.error("[rent-reports] market lookup:", error.message);
    return true;
  }

  return Boolean(data);
}

export async function syncRentReportMetrics(marketId: string): Promise<void> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return;

  const { data: reports, error } = await supabase
    .from("rent_reports")
    .select("monthly_rent, city, suburb, is_current_lease, lease_started_at")
    .eq("market_id", marketId)
    .eq("status", "approved");

  if (error) {
    console.error("[rent-reports] sync fetch:", error.message);
    return;
  }

  const eligible = (reports ?? []).filter((row) => {
    if (!row.is_current_lease) return false;
    return isLeaseRecentEnough(row.lease_started_at);
  });

  if (!eligible.length) {
    await supabase.from("rent_report_metrics").delete().eq("market_id", marketId);
    return;
  }

  const rollup = computeRentRollup(eligible.map((row) => row.monthly_rent as number));
  const sample = eligible[0];

  await supabase.from("rent_report_metrics").upsert({
    market_id: marketId,
    city: sample.city as string,
    suburb: sample.suburb as string,
    report_count: rollup.report_count,
    median_rent: rollup.median_rent,
    min_rent: rollup.min_rent,
    max_rent: rollup.max_rent,
    updated_at: new Date().toISOString(),
  });
}

export async function fetchRentReportMetrics(
  marketId?: string
): Promise<RentReportMetrics[]> {
  const supabase = createAdminSupabaseClient();
  const { createServerSupabaseClient } = await import("@/lib/supabase");
  const client = createServerSupabaseClient() ?? supabase;
  if (!client) return [];

  let query = client.from("rent_report_metrics").select("*");
  if (marketId) {
    query = query.eq("market_id", marketId);
  }

  const { data, error } = await query;
  if (error) {
    console.error("[rent-reports] fetch metrics:", error.message);
    return [];
  }

  return (data ?? []) as RentReportMetrics[];
}

export async function fetchRentReportMetricsForMarket(
  marketId: string
): Promise<RentReportMetrics | null> {
  const rows = await fetchRentReportMetrics(marketId);
  return rows[0] ?? null;
}

export async function fetchAdminRentReports(
  status: "pending" | "approved" | "rejected" | "all" = "pending"
): Promise<RentReportRow[]> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return [];

  let query = supabase
    .from("rent_reports")
    .select(
      "id, market_id, city, suburb, property_type, bedrooms, monthly_rent, currency, is_current_lease, lease_started_at, furnished, notes, status, rejection_reason, reviewed_at, reviewed_by, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(100);

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error } = await query;
  if (error) {
    console.error("[rent-reports] admin list:", error.message);
    return [];
  }

  return (data ?? []) as RentReportRow[];
}

export function resolveMarketId(city: string, suburb: string): string {
  return buildMarketId(city, suburb);
}
