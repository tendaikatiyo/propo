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
    const map = new Map<string, MarketMetric>();
    for (const market of markets) {
      map.set(marketKey(market.city, market.suburb), market);
    }
    return map;
  }, [markets]);

  const getMarket = useCallback(
    (city: string | null | undefined, suburb: string | null | undefined) => {
      if (!city || !suburb) return null;
      return lookup.get(marketKey(city, suburb)) ?? null;
    },
    [lookup]
  );

  return { markets, getMarket, isLoading };
}
