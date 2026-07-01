"use client";

import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

import type { MarketMetric } from "@/lib/types";

function marketKey(city: string, suburb: string): string {
  return `${city.toLowerCase()}|${suburb.toLowerCase()}`;
}

async function fetchMarkets(): Promise<MarketMetric[]> {
  const res = await fetch("/api/markets");
  if (!res.ok) throw new Error("Failed to load markets");
  return res.json() as Promise<MarketMetric[]>;
}

export function useMarketLookup() {
  const { data: markets = [], isLoading } = useQuery({
    queryKey: ["markets"],
    queryFn: fetchMarkets,
    staleTime: 3_600_000,
  });

  const lookup = useMemo(() => {
    const byLocation = new Map<string, MarketMetric>();
    const byId = new Map<string, MarketMetric>();
    for (const market of markets) {
      byLocation.set(marketKey(market.city, market.suburb), market);
      byId.set(market.market_id, market);
    }
    return { byLocation, byId };
  }, [markets]);

  const getMarket = useCallback(
    (
      city: string | null | undefined,
      suburb: string | null | undefined,
      marketId?: string | null
    ) => {
      if (city && suburb) {
        const hit = lookup.byLocation.get(marketKey(city, suburb));
        if (hit) return hit;
      }
      if (marketId) {
        return lookup.byId.get(marketId) ?? null;
      }
      return null;
    },
    [lookup]
  );

  return { markets, getMarket, isLoading };
}
