"use client";

import { useMemo } from "react";

import { CompareTable } from "@/components/markets/compare-table";
import { Button } from "@/components/ui/button";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";

export function ComparePageClient() {
  const { pins, clearPins } = usePinnedMarkets();
  const { data: markets = [] } = useMarketMetrics();

  const pinnedMarkets = useMemo(() => {
    const ids = new Set(pins.map((p) => p.market_id));
    return markets.filter((m) => ids.has(m.market_id));
  }, [pins, markets]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Compare suburbs</h1>
          <p className="text-muted-foreground">
            Side-by-side metrics for your pinned suburbs (max 3).
          </p>
        </div>
        {pins.length ? (
          <Button type="button" variant="outline" onClick={clearPins}>
            Clear all pins
          </Button>
        ) : null}
      </div>
      <CompareTable markets={pinnedMarkets} />
    </div>
  );
}
