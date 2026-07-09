import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { getContributionHashes } from "@/lib/rent-reports-server";

export { getContributionHashes };

const CONTRIBUTION_TABLES = ["rent_reports", "sale_reports", "land_reports"] as const;

export async function checkContributionRateLimits(
  ipHash: string,
  sessionHash: string
): Promise<string | null> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return null;

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
      continue;
    }
    sessionTotal += count ?? 0;
  }

  if (sessionTotal >= 1) {
    return "You can submit one price report per day. Try again tomorrow.";
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
      continue;
    }
    ipTotal += count ?? 0;
  }

  if (ipTotal >= 3) {
    return "Too many submissions from your network this week. Try again later.";
  }

  return null;
}

export async function landMarketExists(
  city: string,
  suburb: string,
  marketId: string
): Promise<boolean> {
  const supabase = createAdminSupabaseClient();
  if (!supabase) return true;

  const { data, error } = await supabase
    .from("land_metrics")
    .select("market_id")
    .eq("market_id", marketId)
    .eq("city", city)
    .eq("suburb", suburb)
    .maybeSingle();

  if (error) {
    console.error("[land-reports] market lookup:", error.message);
    return true;
  }

  return Boolean(data);
}
