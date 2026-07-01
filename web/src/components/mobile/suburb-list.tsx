"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";

import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { PinButton } from "@/components/markets/pin-button";
import { SegmentPriceNote } from "@/components/markets/segment-price-note";
import { Button } from "@/components/ui/button";
import { sortMarkets } from "@/lib/explore";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { priceForFilters } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters, ExploreMode, MarketMetric, SortDirection, SortKey } from "@/lib/types";

const SORT_OPTIONS: { key: SortKey; label: string; modes?: ExploreMode[] }[] = [
  { key: "median_rent", label: "Rent", modes: ["rent"] },
  { key: "median_sale_price", label: "Sale", modes: ["buy"] },
  { key: "yield_percent", label: "Yield", modes: ["buy"] },
  { key: "confidence_score", label: "Confidence" },
];

export function SuburbList({
  markets,
  mode,
  filters,
}: {
  markets: MarketMetric[];
  mode: ExploreMode;
  filters?: Pick<ExploreFilters, "propertyType" | "bedroom">;
}) {
  const [sortKey, setSortKey] = useState<SortKey>(
    mode === "rent" ? "median_rent" : "median_sale_price"
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    mode === "rent" ? "asc" : "desc"
  );

  const sortOptions = SORT_OPTIONS.filter(
    (opt) => !opt.modes || opt.modes.includes(mode)
  );

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection(key === "median_rent" ? "asc" : "desc");
    }
  }

  const sorted = useMemo(
    () => sortMarkets(markets, sortKey, sortDirection, filters),
    [markets, sortKey, sortDirection, filters]
  );

  if (!markets.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No suburbs match your filters.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((opt) => (
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
        {sorted.map((market) => {
          const segmentFilters = filters ?? { propertyType: null, bedroom: null };
          const price = priceForFilters(market, mode, segmentFilters);

          return (
            <div
              key={market.market_id}
              className="flex min-h-[68px] items-center gap-2 px-3 py-3"
            >
              <Link
                href={suburbPath(market.city, market.suburb, {
                  type: filters?.propertyType,
                  bedroom: filters?.bedroom,
                })}
                className="flex min-w-0 flex-1 items-center gap-2 active:opacity-70"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-heading font-medium">
                    {sanitizeLabel(market.suburb)}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {market.city}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="font-stat text-sm font-medium">
                      {formatCurrency(price)}
                    </span>
                    {mode === "buy" && market.yield_percent != null ? (
                      <span className="text-xs text-muted-foreground">
                        {formatPercent(market.yield_percent)} yield
                      </span>
                    ) : null}
                  </div>
                  <SegmentPriceNote
                    market={market}
                    mode={mode}
                    filters={segmentFilters}
                    fallbackOnly
                    className="mt-1 text-[10px] leading-tight text-muted-foreground"
                  />
                </div>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </Link>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <ConfidenceBadge score={market.confidence_score} />
                <PinButton market={market} size="icon-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
