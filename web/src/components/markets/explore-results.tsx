"use client";

import { useMemo, useEffect, useRef, useState } from "react";

import {
  filterMarketsBySuburbQuery,
  SuburbSearchInput,
} from "@/components/filters/suburb-search-input";
import { LandSuburbCard } from "@/components/markets/land-suburb-card";
import { LandSuburbTable } from "@/components/markets/land-suburb-table";
import { SuburbTable } from "@/components/markets/suburb-table";
import { LandSuburbList } from "@/components/mobile/land-suburb-list";
import { SuburbList } from "@/components/mobile/suburb-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLandMetrics, useMarketMetrics } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { trackExploreZeroResults } from "@/lib/analytics/track";
import {
  filterDirectoryMarkets,
  rankDirectoryResults,
} from "@/lib/explore";
import { formatPricePerSqm } from "@/lib/format";
import { filterLandMarkets, rankLandExploreResults } from "@/lib/land-explore";
import { DEFAULT_LENS, isLandMode } from "@/lib/mode";
import { exploreBudgetDescription, exploreScopeDescription } from "@/lib/metric-tooltips";

function ExploreResultsSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-24 w-full rounded-2xl" />
      ))}
    </div>
  );
}

function LandExploreResults({
  preview = false,
}: {
  preview?: boolean;
}) {
  const { filters } = useExploreFilters();
  const { data: markets = [], isLoading, isError } = useLandMetrics();
  const [suburbQuery, setSuburbQuery] = useState("");
  const hasSuburbSearch = suburbQuery.trim().length > 0;

  // While searching, ignore city so names outside the selected city still match.
  const resultFilters = useMemo(
    () => (hasSuburbSearch ? { ...filters, city: null } : filters),
    [filters, hasSuburbSearch]
  );

  const { inBudget, stretch } = useMemo(
    () => filterLandMarkets(markets, resultFilters),
    [markets, resultFilters]
  );

  const rankedInBudget = useMemo(
    () => rankLandExploreResults(inBudget),
    [inBudget]
  );
  const rankedStretch = useMemo(() => rankLandExploreResults(stretch), [stretch]);
  const filteredInBudget = useMemo(
    () => filterMarketsBySuburbQuery(rankedInBudget, suburbQuery),
    [rankedInBudget, suburbQuery]
  );
  const filteredStretch = useMemo(
    () => filterMarketsBySuburbQuery(rankedStretch, suburbQuery),
    [rankedStretch, suburbQuery]
  );
  const budgetLabel = formatPricePerSqm(filters.budget);
  const zeroResultsKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (preview || isLoading) return;
    const key = JSON.stringify({
      mode: filters.mode,
      budget: filters.budget,
      city: filters.city,
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
  }, [preview, isLoading, filters, rankedInBudget.length, rankedStretch.length]);

  if (isLoading) return <ExploreResultsSkeleton />;

  if (isError) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm">
        Could not load land market data. Check Supabase configuration or local data files.
      </div>
    );
  }

  if (preview) {
    const previewMarkets = rankedInBudget.slice(0, 6);
    if (!previewMarkets.length) {
      return (
        <p className="text-sm text-muted-foreground">
          No land markets match yet — try adjusting your filters.
        </p>
      );
    }
    return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {previewMarkets.map((market) => (
          <LandSuburbCard
            key={market.market_id}
            market={market}
            badge={filters.budgetFilterActive ? "In budget" : undefined}
          />
        ))}
      </div>
    );
  }

  const searchExpandsCity = hasSuburbSearch && Boolean(filters.city);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <SuburbSearchInput
          value={suburbQuery}
          onChange={setSuburbQuery}
          placeholder="Search suburbs or cities…"
          suggestions={markets}
        />
        {searchExpandsCity ? (
          <p className="text-xs text-muted-foreground">
            Searching all cities while you type — city filter pauses until you clear search.
          </p>
        ) : null}
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-xl font-medium tracking-[-0.01em]">
            {filters.budgetFilterActive ? "In budget" : "Land directory"}
          </h2>
          <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
            {filters.budgetFilterActive
              ? exploreBudgetDescription(filters.mode, budgetLabel, null, null)
              : "All priced land markets — open a suburb for $/sqm trends and listings."}
          </p>
          {filters.budgetFilterActive ? (
            <p className="text-xs text-muted-foreground">
              {exploreScopeDescription(filters.mode, null, null, filters.hideSuburbMedianFallback)}
            </p>
          ) : null}
        </div>
        {hasSuburbSearch && !filteredInBudget.length ? (
          <p className="text-sm text-muted-foreground">No suburbs match your search.</p>
        ) : (
          <>
            <div className="lg:hidden">
              <LandSuburbList markets={filteredInBudget} />
            </div>
            <div className="hidden lg:block">
              <LandSuburbTable markets={filteredInBudget} />
            </div>
          </>
        )}
      </section>

      {filters.budgetFilterActive &&
      (filteredStretch.length || (!hasSuburbSearch && rankedStretch.length)) ? (
        <section className="space-y-4">
          <div>
            <h2 className="font-heading text-xl font-medium tracking-[-0.01em]">Stretch</h2>
            <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
              Within 15% above your $/sqm budget — worth a look if you can flex slightly.
            </p>
          </div>
          {hasSuburbSearch && !filteredStretch.length ? (
            <p className="text-sm text-muted-foreground">No stretch suburbs match your search.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredStretch.map((market) => (
                <LandSuburbCard key={market.market_id} market={market} badge="Stretch" />
              ))}
            </div>
          )}
        </section>
      ) : null}

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm sm:grid-cols-2">
          <p>
            <span className="text-muted-foreground">
              {filters.budgetFilterActive ? "In budget: " : "Markets shown: "}
            </span>
            <span className="font-mono font-medium">{filteredInBudget.length}</span>
          </p>
          {filters.budgetFilterActive ? (
            <p>
              <span className="text-muted-foreground">Stretch: </span>
              <span className="font-mono font-medium">{filteredStretch.length}</span>
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}

/** Suburbs tab = directory (city + search + confidence). No budget / intent. */
function SuburbDirectoryResults() {
  const { filters, setFilters } = useExploreFilters();
  const { data: markets = [], isLoading, isError } = useMarketMetrics();
  const [suburbQuery, setSuburbQuery] = useState("");
  const hasSuburbSearch = suburbQuery.trim().length > 0;

  // Normalize leftover rent/buy/type URL state into the directory default.
  useEffect(() => {
    if (isLandMode(filters.mode)) return;
    if (
      filters.mode !== DEFAULT_LENS ||
      filters.propertyType != null ||
      filters.bedroom != null
    ) {
      setFilters({
        mode: DEFAULT_LENS,
        propertyType: null,
        bedroom: null,
      });
    }
  }, [filters.mode, filters.propertyType, filters.bedroom, setFilters]);

  const directoryFilters = useMemo(
    () => ({
      city: hasSuburbSearch ? null : filters.city,
      includeLowConfidence: filters.includeLowConfidence,
    }),
    [filters.city, filters.includeLowConfidence, hasSuburbSearch]
  );

  const ranked = useMemo(
    () => rankDirectoryResults(filterDirectoryMarkets(markets, directoryFilters)),
    [markets, directoryFilters]
  );

  const visible = useMemo(
    () => filterMarketsBySuburbQuery(ranked, suburbQuery),
    [ranked, suburbQuery]
  );

  const zeroResultsKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (isLoading) return;
    const key = JSON.stringify({
      mode: "directory",
      city: filters.city,
      includeLowConfidence: filters.includeLowConfidence,
      q: suburbQuery.trim(),
    });
    if (visible.length > 0) {
      zeroResultsKeyRef.current = null;
      return;
    }
    if (zeroResultsKeyRef.current === key) return;
    zeroResultsKeyRef.current = key;
    trackExploreZeroResults(
      { ...filters, mode: DEFAULT_LENS },
      { inBudgetCount: 0, stretchCount: 0 }
    );
  }, [isLoading, filters, suburbQuery, visible.length]);

  if (isLoading) return <ExploreResultsSkeleton />;

  if (isError) {
    return (
      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm">
        Could not load market data. Check Supabase configuration or local data files.
      </div>
    );
  }

  const searchExpandsCity = hasSuburbSearch && Boolean(filters.city);
  const cityLabel = filters.city ?? "All cities";

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <SuburbSearchInput
          value={suburbQuery}
          onChange={setSuburbQuery}
          placeholder="Search suburbs or cities…"
          suggestions={markets}
        />
        {searchExpandsCity ? (
          <p className="text-xs text-muted-foreground">
            Searching all cities while you type — city filter pauses until you clear search.
          </p>
        ) : null}
      </div>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-xl font-medium tracking-[-0.01em]">Suburb directory</h2>
          <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
            {cityLabel} — rent, sale, and yield at a glance. Open a suburb for the full profile.
          </p>
        </div>
        {hasSuburbSearch && !visible.length ? (
          <p className="text-sm text-muted-foreground">No suburbs match your search.</p>
        ) : (
          <>
            <div className="lg:hidden">
              <SuburbList markets={visible} mode={DEFAULT_LENS} />
            </div>
            <div className="hidden lg:block">
              <SuburbTable markets={visible} mode={DEFAULT_LENS} />
            </div>
          </>
        )}
      </section>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            <span className="text-muted-foreground">Suburbs shown: </span>
            <span className="font-mono font-medium">{visible.length}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function ExploreResults({ preview = false }: { preview?: boolean }) {
  const { filters } = useExploreFilters();

  if (isLandMode(filters.mode)) {
    return <LandExploreResults preview={preview} />;
  }

  return <SuburbDirectoryResults />;
}
