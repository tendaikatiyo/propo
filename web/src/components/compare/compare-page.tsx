"use client";

import { useMemo } from "react";

import { CompareTable } from "@/components/markets/compare-table";
import { CompareCards } from "@/components/mobile/compare-cards";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
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
    <div className="space-y-8">
      <BackLink href="/explore" label="Back to explore" />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <PageHeader
          title="Compare suburbs"
          description="Side-by-side metrics for your pinned suburbs (max 3)."
        />
        {pins.length ? (
          <Button type="button" variant="outline" onClick={clearPins}>
            Clear all pins
          </Button>
        ) : null}
      </div>
      <div className="lg:hidden">
        <CompareCards markets={pinnedMarkets} />
      </div>
      <div className="hidden lg:block">
        <CompareTable markets={pinnedMarkets} />
      </div>
    </div>
  );
}
