import { stat } from "fs/promises";
import path from "path";

import { createServerSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

const DATA_DIR = path.join(process.cwd(), "..", "data");

const DATA_FILES = [
  "market_metrics.json",
  "cities.json",
  "clean_rentals.json",
  "clean_sales.json",
  "rankings.json",
] as const;

function maxTimestamp(dates: (string | null | undefined)[]): string | null {
  let latestMs: number | null = null;
  let latestIso: string | null = null;

  for (const value of dates) {
    if (!value) continue;
    const ms = new Date(value).getTime();
    if (Number.isNaN(ms)) continue;
    if (latestMs === null || ms > latestMs) {
      latestMs = ms;
      latestIso = new Date(ms).toISOString();
    }
  }

  return latestIso;
}

async function getSupabaseDataUpdatedAt(): Promise<string | null> {
  const client = createServerSupabaseClient();
  if (!client) return null;

  const [metrics, cities, rankings, listings] = await Promise.all([
    client
      .from("market_metrics")
      .select("updated_at")
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    client
      .from("cities")
      .select("updated_at")
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    client.from("rankings").select("updated_at").eq("id", "current").maybeSingle(),
    client
      .from("listings")
      .select("last_seen_at")
      .order("last_seen_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const timestamps: (string | null | undefined)[] = [];

  if (!metrics.error) timestamps.push(metrics.data?.updated_at);
  if (!cities.error) timestamps.push(cities.data?.updated_at);
  if (!rankings.error) timestamps.push(rankings.data?.updated_at);
  if (!listings.error) timestamps.push(listings.data?.last_seen_at);

  return maxTimestamp(timestamps);
}

async function getLocalDataUpdatedAt(): Promise<string | null> {
  let latest = 0;

  for (const file of DATA_FILES) {
    try {
      const filePath = path.join(DATA_DIR, file);
      const { mtimeMs } = await stat(filePath);
      if (mtimeMs > latest) latest = mtimeMs;
    } catch {
      // skip missing files
    }
  }

  if (latest === 0) return null;
  return new Date(latest).toISOString();
}

export async function getDataUpdatedAt(): Promise<string | null> {
  if (isSupabaseConfigured()) {
    const supabaseUpdatedAt = await getSupabaseDataUpdatedAt();
    if (supabaseUpdatedAt) return supabaseUpdatedAt;
  }

  return getLocalDataUpdatedAt();
}
