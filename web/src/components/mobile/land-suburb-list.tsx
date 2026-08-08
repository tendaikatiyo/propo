"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";

import { TrackedSuburbLink } from "@/components/analytics/tracked-suburb-link";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { PinButton } from "@/components/markets/pin-button";
import { Button } from "@/components/ui/button";
import { DEFAULT_TABLE_SORT_KEY, defaultTableSortDirection } from "@/lib/explore";
import { formatNumber, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { sortLandMarkets } from "@/lib/land-explore";
import { suburbPath } from "@/lib/slug";
import type { LandMetric, SortDirection, SortKey } from "@/lib/types";
import { motionRow } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "median_price_per_sqm", label: "$/sqm" },
  { key: "land_count", label: "Listings" },
  { key: "confidence_score", label: "Confidence" },
];

export function LandSuburbList({ markets }: { markets: LandMetric[] }) {
  const [sortKey, setSortKey] = useState<SortKey>(DEFAULT_TABLE_SORT_KEY);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    defaultTableSortDirection(DEFAULT_TABLE_SORT_KEY)
  );

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection(defaultTableSortDirection(key));
    }
  }

  const sorted = useMemo(
    () => sortLandMarkets(markets, sortKey, sortDirection),
    [markets, sortKey, sortDirection]
  );

  if (!markets.length) {
    return (
      <p className="text-sm text-muted-foreground">No suburbs match your filters.</p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {SORT_OPTIONS.map((opt) => (
          <Button
            key={opt.key}
            type="button"
            size="sm"
            variant={sortKey === opt.key ? "default" : "outline"}
            className="h-9 gap-1 rounded-full px-3"
            onClick={() => toggleSort(opt.key)}
          >
            {opt.label}
            {sortKey === opt.key ? (
              sortDirection === "asc" ? (
                <ArrowUp className="size-3" />
              ) : (
                <ArrowDown className="size-3" />
              )
            ) : null}
          </Button>
        ))}
      </div>

      <div className="divide-y divide-border/80 overflow-hidden rounded-2xl border border-border/80 bg-card">
        {sorted.map((market) => (
          <div
            key={market.market_id}
            className="flex min-h-[68px] items-center gap-2 px-3 py-3"
          >
            <TrackedSuburbLink
              href={suburbPath(market.city, market.suburb)}
              tracking={{
                marketId: market.market_id,
                city: market.city,
                suburb: market.suburb,
                source: "explore_list",
                mode: "land",
              }}
              className={cn(motionRow, "flex min-w-0 flex-1 items-center gap-2")}
            >
              <div className="min-w-0 flex-1">
                <p className="truncate font-heading font-medium">
                  {sanitizeLabel(market.suburb)}
                </p>
                <p className="truncate text-xs text-muted-foreground">{market.city}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="font-stat text-sm font-medium">
                    {formatPricePerSqm(market.median_price_per_sqm)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatNumber(market.land_count)} stands
                  </span>
                </div>
              </div>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
            </TrackedSuburbLink>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <ConfidenceBadge score={market.confidence_score} />
              <PinButton market={market} size="icon-sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
