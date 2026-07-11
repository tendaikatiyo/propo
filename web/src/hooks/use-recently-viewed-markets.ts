"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { MAX_RECENTLY_VIEWED_MARKETS } from "@/lib/constants";
import type { ExploreMode, MarketMetric, RecentlyViewedMarket } from "@/lib/types";

interface RecentlyViewedMarketsState {
  recent: RecentlyViewedMarket[];
  recordView: (
    market: Pick<MarketMetric, "market_id" | "city" | "suburb">,
    options?: { fromMode?: ExploreMode }
  ) => void;
  clearRecent: () => void;
}

export const useRecentlyViewedMarkets = create<RecentlyViewedMarketsState>()(
  persist(
    (set, get) => ({
      recent: [],
      recordView: (market, options) => {
        const next: RecentlyViewedMarket = {
          market_id: market.market_id,
          city: market.city,
          suburb: market.suburb,
          viewedAt: new Date().toISOString(),
          ...(options?.fromMode ? { viewedFromMode: options.fromMode } : {}),
        };
        const rest = get().recent.filter((item) => item.market_id !== market.market_id);
        set({ recent: [next, ...rest].slice(0, MAX_RECENTLY_VIEWED_MARKETS) });
      },
      clearRecent: () => set({ recent: [] }),
    }),
    { name: "propo:recentlyViewedMarkets" }
  )
);
