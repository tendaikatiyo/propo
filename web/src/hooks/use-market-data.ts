"use client";

import { useQuery } from "@tanstack/react-query";

import type { CityMetric, MarketMetric, RankingsPayload } from "@/lib/types";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json() as Promise<T>;
}

export function useMarketMetrics() {
  return useQuery({
    queryKey: ["market-metrics"],
    queryFn: () => fetchJson<MarketMetric[]>("/api/markets"),
  });
}

export function useCities() {
  return useQuery({
    queryKey: ["cities"],
    queryFn: () => fetchJson<CityMetric[]>("/api/cities"),
  });
}

export function useRankings() {
  return useQuery({
    queryKey: ["rankings"],
    queryFn: () => fetchJson<RankingsPayload | null>("/api/rankings"),
  });
}

export function useMarketById(marketId: string | undefined) {
  const { data, ...rest } = useMarketMetrics();
  return {
    ...rest,
    data: data?.find((m) => m.market_id === marketId) ?? null,
  };
}
