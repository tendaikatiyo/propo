import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { getContributionHashes } from "@/lib/rent-reports-server";

export { getContributionHashes };

const CONTRIBUTION_TABLES = ["rent_reports", "sale_reports", "land_reports"] as const;

const UNAVAILABLE =
  "Submissions are temporarily unavailable. Try again later.";

export type ContributionRateLimitResult =
  | { ok: true }
  | { ok: false; status: 429 | 503; error: string };

export async function checkContributionRateLimits(
  ipHash: string,
  sessionHash: string
): Promise<ContributionRateLimitResult> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return { ok: false, status: 503, error: UNAVAILABLE };
  }

  const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  let sessionTotal = 0;
  for (const table of CONTRIBUTION_TABLES) {
    const { count, error } = await supabase
      .from(table)
      .select("id", { count: "exact", head: true })
      .eq("session_hash", sessionHash)
      .gte("created_at", dayAgo);

    if (error) {
      console.error(`[contributions] session rate limit (${table}):`, error.message);
      return { ok: false, status: 503, error: UNAVAILABLE };
    }
    sessionTotal += count ?? 0;
  }

  if (sessionTotal >= 1) {
    return {
      ok: false,
      status: 429,
      error: "You can submit one price report per day. Try again tomorrow.",
    };
  }

  let ipTotal = 0;
  for (const table of CONTRIBUTION_TABLES) {
    const { count, error } = await supabase
      .from(table)
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", weekAgo);

    if (error) {
      console.error(`[contributions] ip rate limit (${table}):`, error.message);
      return { ok: false, status: 503, error: UNAVAILABLE };
    }
    ipTotal += count ?? 0;
  }

  if (ipTotal >= 3) {
    return {
      ok: false,
      status: 429,
      error: "Too many submissions from your network this week. Try again later.",
    };
  }

  return { ok: true };
}

export async function landMarketExists(
  city: string,
  suburb: string,
  marketId: string
): Promise<boolean> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return false;

  const { data, error } = await supabase
    .from("land_metrics")
    .select("market_id")
    .eq("market_id", marketId)
    .eq("city", city)
    .eq("suburb", suburb)
    .maybeSingle();

  if (error) {
    console.error("[land-reports] market lookup:", error.message);
    return false;
  }

  return Boolean(data);
}
