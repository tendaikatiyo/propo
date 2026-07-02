"use client";

import { useMemo, useEffect, useRef, useState } from "react";

import {
  filterMarketsBySuburbQuery,
  SuburbSearchInput,
} from "@/components/filters/suburb-search-input";
import { SuburbCard } from "@/components/markets/suburb-card";
import { SuburbTable } from "@/components/markets/suburb-table";
import { SuburbList } from "@/components/mobile/suburb-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { trackExploreZeroResults } from "@/lib/analytics/track";
import { averageYield, applySuburbMedianVisibility, filterMarkets, rankExploreResults } from "@/lib/explore";
import { exploreBudgetDescription, exploreScopeDescription } from "@/lib/metric-tooltips";
import { hasActiveSegmentFilters } from "@/lib/segments";
import { formatCurrency, formatPercent } from "@/lib/format";

export function ExploreResults({ preview = false }: { preview?: boolean }) {
  const { filters } = useExploreFilters();
  const { data: markets = [], isLoading, isError } = useMarketMetrics();
  const [suburbQuery, setSuburbQuery] = useState("");

  const { inBudget, stretch } = useMemo(
    () => filterMarkets(markets, filters),
    [markets, filters]
  );

  const rankedInBudget = useMemo(
    () =>
      applySuburbMedianVisibility(
        rankExploreResults(inBudget, filters.mode, filters),
        filters
      ),
    [inBudget, filters]
  );
  const rankedStretch = useMemo(
    () =>
      applySuburbMedianVisibility(
        rankExploreResults(stretch, filters.mode, filters),
        filters
      ),
    [stretch, filters]
  );
  const filteredInBudget = useMemo(
    () => filterMarketsBySuburbQuery(rankedInBudget, suburbQuery),
    [rankedInBudget, suburbQuery]
  );
  const filteredStretch = useMemo(
    () => filterMarketsBySuburbQuery(rankedStretch, suburbQuery),
    [rankedStretch, suburbQuery]
  );
  const avgYield = filters.mode === "buy" ? averageYield(inBudget) : null;
  const zeroResultsKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (preview || isLoading) return;
    const key = JSON.stringify({
      mode: filters.mode,
      budget: filters.budget,
      city: filters.city,
      propertyType: filters.propertyType,
      bedroom: filters.bedroom,
    });
    if (rankedInBudget.length > 0) {
      zeroResultsKeyRef.current = null;
      return;
    }
    if (zeroResultsKeyRef.current === key) return;
    zeroResultsKeyRef.current = key;
    trackExploreZeroResults(filters, {
      inBudgetCount: rankedInBudget.length,
      stretchCount: rankedStretch.length,
    });
  }, [
    preview,
    isLoading,
    filters,
    rankedInBudget.length,
    rankedStretch.length,
  ]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-2xl" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm">
        Could not load market data. Check Supabase configuration or local data files.
      </div>
    );
  }

  if (preview) {
    const previewMarkets = rankedInBudget.slice(0, 6);
    if (!previewMarkets.length) {
      return (
        <p className="text-sm text-muted-foreground">
          No suburbs in budget yet — try adjusting your filters.
        </p>
      );
    }
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {previewMarkets.map((market) => (
          <SuburbCard
            key={market.market_id}
            market={market}
            mode={filters.mode}
            badge="In budget"
            filters={filters}
          />
        ))}
      </div>
    );
  }

  const hasSuburbSearch = suburbQuery.trim().length > 0;

  return (
    <div className="space-y-8">
      <div className="lg:hidden">
        <SuburbSearchInput value={suburbQuery} onChange={setSuburbQuery} />
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-xl font-medium tracking-[-0.01em]">In budget</h2>
          <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
            {exploreBudgetDescription(
              filters.mode,
              formatCurrency(filters.budget),
              filters.propertyType,
              filters.bedroom
            )}
          </p>
          <p className="text-xs text-muted-foreground">
            {exploreScopeDescription(
              filters.mode,
              filters.propertyType,
              filters.bedroom,
              filters.hideSuburbMedianFallback
            )}
          </p>
          {hasActiveSegmentFilters(filters) && !filters.hideSuburbMedianFallback ? (
            <p className="text-xs text-muted-foreground">
              Look for “Suburb median” under prices when property-type data is thin.
            </p>
          ) : null}
        </div>
        {hasSuburbSearch && !filteredInBudget.length ? (
          <p className="text-sm text-muted-foreground">No suburbs match your search.</p>
        ) : (
          <>
            <div className="lg:hidden">
              <SuburbList markets={filteredInBudget} mode={filters.mode} filters={filters} />
            </div>
            <div className="hidden lg:block">
              <SuburbTable markets={rankedInBudget} mode={filters.mode} filters={filters} />
            </div>
          </>
        )}
      </section>

      {rankedStretch.length ? (
        <section className="space-y-4">
          <div>
            <h2 className="font-heading text-xl font-medium tracking-[-0.01em]">Stretch</h2>
            <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
              Within 15% above your budget — worth a look if you can flex slightly.
            </p>
          </div>
          {hasSuburbSearch && !filteredStretch.length ? (
            <p className="text-sm text-muted-foreground">No stretch suburbs match your search.</p>
          ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredStretch.map((market) => (
              <SuburbCard
                key={market.market_id}
                market={market}
                mode={filters.mode}
                badge="Stretch"
                filters={filters}
              />
            ))}
          </div>
          )}
        </section>
      ) : null}

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm sm:grid-cols-3">
          <p>
            <span className="text-muted-foreground">In budget: </span>
            <span className="font-mono font-medium">
              {hasSuburbSearch ? filteredInBudget.length : rankedInBudget.length}
            </span>
          </p>
          <p>
            <span className="text-muted-foreground">Stretch: </span>
            <span className="font-mono font-medium">
              {hasSuburbSearch ? filteredStretch.length : rankedStretch.length}
            </span>
          </p>
          {avgYield != null ? (
            <p>
              <span className="text-muted-foreground">Avg yield: </span>
              <span className="font-stat font-medium">{formatPercent(avgYield)}</span>
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
