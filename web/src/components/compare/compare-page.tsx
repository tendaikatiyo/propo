"use client";

import { useMemo } from "react";

import { CompareFilterBar } from "@/components/compare/compare-filter-bar";
import { CompareTable } from "@/components/markets/compare-table";
import { CompareCards } from "@/components/mobile/compare-cards";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { useCompareFilters } from "@/hooks/use-compare-filters";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { hasActiveSegmentFilters, segmentFilterLabel } from "@/lib/segments";

export function ComparePageClient() {
  const { pins, clearPins } = usePinnedMarkets();
  const { data: markets = [] } = useMarketMetrics();
  const { filters } = useCompareFilters();

  const pinnedMarkets = useMemo(() => {
    const ids = new Set(pins.map((p) => p.market_id));
    return markets.filter((m) => ids.has(m.market_id));
  }, [pins, markets]);

  const specLabel = segmentFilterLabel(filters.propertyType, filters.bedroom);
  const description = hasActiveSegmentFilters(filters)
    ? `Side-by-side metrics for pinned suburbs — ${specLabel} segment medians where data allows. Best value per row is highlighted.`
    : "Side-by-side metrics for your pinned suburbs (max 3). Best value per row is highlighted.";

  return (
    <div className="space-y-8">
      <BackLink href="/explore" label="Back to explore" />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <PageHeader title="Compare suburbs" description={description} />
        {pins.length ? (
          <Button type="button" variant="outline" onClick={clearPins}>
            Clear all pins
          </Button>
        ) : null}
      </div>

      <CompareFilterBar />

      <div className="lg:hidden">
        <CompareCards markets={pinnedMarkets} filters={filters} />
      </div>
      <div className="hidden lg:block">
        <CompareTable markets={pinnedMarkets} filters={filters} />
      </div>
    </div>
  );
}
