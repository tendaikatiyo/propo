"use client";

import { useQuery } from "@tanstack/react-query";

import { filterZimbabweCities, filterZimbabweLandMarkets, filterZimbabweMarkets } from "@/lib/geo";
import type { CityMetric, LandMetric, MarketMetric, RankingsPayload } from "@/lib/types";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json() as Promise<T>;
}

export function useMarketMetrics(options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["market-metrics"],
    enabled: options?.enabled ?? true,
    queryFn: async () => {
      const data = await fetchJson<MarketMetric[]>("/api/markets");
      return filterZimbabweMarkets(data);
    },
  });
}

export function useCities() {
  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const data = await fetchJson<CityMetric[]>("/api/cities");
      return filterZimbabweCities(data);
    },
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

export function useLandMetrics(options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["land-metrics"],
    enabled: options?.enabled ?? true,
    queryFn: async () => {
      const data = await fetchJson<LandMetric[]>("/api/land-metrics");
      return filterZimbabweLandMarkets(data);
    },
  });
}

export function useLandMarketById(marketId: string | undefined) {
  const { data, ...rest } = useLandMetrics();
  return {
    ...rest,
    data: data?.find((m) => m.market_id === marketId) ?? null,
  };
}
