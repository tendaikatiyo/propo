"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

import { MAX_PINNED_MARKETS } from "@/lib/constants";
import type { MarketMetric, PinnedMarket } from "@/lib/types";

interface PinnedMarketsState {
  pins: PinnedMarket[];
  togglePin: (market: Pick<MarketMetric, "market_id" | "city" | "suburb">) => void;
  removePin: (marketId: string) => void;
  clearPins: () => void;
  isPinned: (marketId: string) => boolean;
}

export const usePinnedMarkets = create<PinnedMarketsState>()(
  persist(
    (set, get) => ({
      pins: [],
      togglePin: (market) => {
        const existing = get().pins.find((p) => p.market_id === market.market_id);
        if (existing) {
          set({ pins: get().pins.filter((p) => p.market_id !== market.market_id) });
          return;
        }
        if (get().pins.length >= MAX_PINNED_MARKETS) {
          toast.error(`Remove a suburb to add another (max ${MAX_PINNED_MARKETS})`);
          return;
        }
        set({
          pins: [
            ...get().pins,
            {
              market_id: market.market_id,
              city: market.city,
              suburb: market.suburb,
              pinnedAt: new Date().toISOString(),
            },
          ],
        });
      },
      removePin: (marketId) => {
        set({ pins: get().pins.filter((p) => p.market_id !== marketId) });
      },
      clearPins: () => set({ pins: [] }),
      isPinned: (marketId) => get().pins.some((p) => p.market_id === marketId),
    }),
    { name: "propo:pinnedMarkets" }
  )
);
