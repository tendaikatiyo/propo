"use client";

import { useMemo } from "react";

import { SuburbCard } from "@/components/markets/suburb-card";
import { SuburbTable } from "@/components/markets/suburb-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { averageYield, filterMarkets, rankExploreResults } from "@/lib/explore";
import { formatCurrency, formatPercent } from "@/lib/format";

export function ExploreResults({ preview = false }: { preview?: boolean }) {
  const { filters } = useExploreFilters();
  const { data: markets = [], isLoading, isError } = useMarketMetrics();

  const { inBudget, stretch } = useMemo(
    () => filterMarkets(markets, filters),
    [markets, filters]
  );

  const rankedInBudget = useMemo(() => rankExploreResults(inBudget), [inBudget]);
  const rankedStretch = useMemo(() => rankExploreResults(stretch), [stretch]);
  const avgYield = averageYield(inBudget);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-sm">
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
          <SuburbCard key={market.market_id} market={market} mode={filters.mode} badge="In budget" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div className="space-y-8">
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">In budget</h2>
            <p className="text-sm text-muted-foreground">
              Suburbs with median {filters.mode === "rent" ? "rent" : "sale price"} at or below{" "}
              {formatCurrency(filters.budget)}.
            </p>
          </div>
          <SuburbTable markets={rankedInBudget} mode={filters.mode} />
        </section>

        {rankedStretch.length ? (
          <section className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Stretch</h2>
              <p className="text-sm text-muted-foreground">
                Within 15% above your budget — worth a look if you can flex slightly.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {rankedStretch.map((market) => (
                <SuburbCard key={market.market_id} market={market} mode={filters.mode} badge="Stretch" />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <aside className="space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">In budget:</span>{" "}
              <span className="font-medium tabular-nums">{rankedInBudget.length}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Stretch:</span>{" "}
              <span className="font-medium tabular-nums">{rankedStretch.length}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Avg yield (matches):</span>{" "}
              <span className="font-medium tabular-nums">{formatPercent(avgYield)}</span>
            </p>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
