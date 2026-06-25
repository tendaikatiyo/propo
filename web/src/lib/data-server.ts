import { readFile } from "fs/promises";
import path from "path";

import { createServerSupabaseClient } from "@/lib/supabase";
import type { CityMetric, MarketMetric, RankingsPayload } from "@/lib/types";

const DATA_DIR = path.join(process.cwd(), "..", "data");
const REVALIDATE_SECONDS = 3600;

async function readLocalJson<T>(filename: string): Promise<T> {
  const filePath = path.join(DATA_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function fetchMarketMetrics(): Promise<MarketMetric[]> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("market_metrics").select("*");
    if (!error && data) return data as MarketMetric[];
  }
  try {
    return await readLocalJson<MarketMetric[]>("market_metrics.json");
  } catch {
    return [];
  }
}

export async function fetchCities(): Promise<CityMetric[]> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client.from("cities").select("*");
    if (!error && data) return data as CityMetric[];
  }
  try {
    return await readLocalJson<CityMetric[]>("cities.json");
  } catch {
    return [];
  }
}

export async function fetchRankings(): Promise<RankingsPayload | null> {
  const client = createServerSupabaseClient();
  if (client) {
    const { data, error } = await client
      .from("rankings")
      .select("payload")
      .eq("id", "current")
      .maybeSingle();
    if (!error && data?.payload) return data.payload as RankingsPayload;
  }
  try {
    return await readLocalJson<RankingsPayload>("rankings.json");
  } catch {
    return null;
  }
}

export const dashboardRevalidate = REVALIDATE_SECONDS;
