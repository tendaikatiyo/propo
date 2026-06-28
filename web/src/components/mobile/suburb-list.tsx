"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";

import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { PinButton } from "@/components/markets/pin-button";
import { Button } from "@/components/ui/button";
import { sortMarkets } from "@/lib/explore";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { priceForFilters } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters, ExploreMode, MarketMetric, SortKey } from "@/lib/types";

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

  const sortOptions = SORT_OPTIONS.filter(
    (opt) => !opt.modes || opt.modes.includes(mode)
  );

  const sorted = useMemo(
    () => sortMarkets(markets, sortKey, sortKey === "suburb" ? "asc" : "asc", filters),
    [markets, sortKey, filters]
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
            className="h-9 rounded-full px-3"
            onClick={() => setSortKey(opt.key)}
          >
            {opt.label}
          </Button>
        ))}
      </div>

      <div className="divide-y divide-border/80 overflow-hidden rounded-2xl border border-border/80 bg-card">
        {sorted.map((market) => {
          const price = priceForFilters(
            market,
            mode,
            filters ?? { propertyType: null, bedroom: null }
          );
          const dom =
            mode === "rent"
              ? market.average_days_on_market_rent
              : market.average_days_on_market_sale;

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
                    {dom != null ? (
                      <span className="font-mono text-xs text-muted-foreground">
                        {dom}d DOM
                      </span>
                    ) : null}
                  </div>
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
