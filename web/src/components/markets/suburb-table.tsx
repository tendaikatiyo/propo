"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";

import { TrackedSuburbLink } from "@/components/analytics/tracked-suburb-link";
import { PinButton } from "@/components/markets/pin-button";
import { SegmentPriceCell } from "@/components/markets/segment-price-note";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { budgetPriceMode } from "@/lib/lens";
import {
  COLUMN_TOOLTIPS,
  columnLabelForMode,
  columnsForLens,
  columnsForMode,
} from "@/lib/metric-tooltips";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import {
  DEFAULT_TABLE_SORT_KEY,
  defaultTableSortDirection,
  sortMarkets,
} from "@/lib/explore";
import { priceForFilters } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters, ExploreMode, MarketMetric, SortDirection, SortKey } from "@/lib/types";

const COLUMN_LABELS: Record<SortKey, string> = {
  suburb: "Suburb",
  city: "City",
  median_rent: "Median rent",
  median_sale_price: "Median sale",
  median_price_per_sqm: "Median $/sqm",
  land_count: "Land listings",
  yield_percent: "Yield",
  opportunity_score: "Opportunity",
  confidence_score: "Confidence",
};

function defaultSortForMode(_mode: ExploreMode, _isCityLayout: boolean): SortKey {
  return DEFAULT_TABLE_SORT_KEY;
}

function defaultDirectionForSort(key: SortKey): SortDirection {
  return defaultTableSortDirection(key);
}

function SortableHeader({
  label,
  tooltip,
  sortKey,
  activeKey,
  direction,
  onSort,
}: {
  label: string;
  tooltip: string;
  sortKey: SortKey;
  activeKey: SortKey;
  direction: SortDirection;
  onSort: (key: SortKey) => void;
}) {
  return (
    <TableHead>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="-ml-2 h-8 font-mono text-[11px] tracking-[0.08em] uppercase"
          onClick={() => onSort(sortKey)}
        >
          {label}
          {activeKey === sortKey ? (
            direction === "asc" ? (
              <ArrowUp className="ml-1 size-3" />
            ) : (
              <ArrowDown className="ml-1 size-3" />
            )
          ) : null}
        </Button>
        <Tooltip>
          <TooltipTrigger className="text-muted-foreground">
            <HelpCircle className="size-3.5" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs font-sans text-sm normal-case tracking-normal">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </div>
    </TableHead>
  );
}

function MetricCell({
  column,
  market,
  filters,
}: {
  column: SortKey;
  market: MarketMetric;
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">;
}) {
  if (column === "median_rent") {
    return <SegmentPriceCell market={market} mode="rent" filters={filters} />;
  }
  if (column === "median_sale_price") {
    return <SegmentPriceCell market={market} mode="buy" filters={filters} />;
  }
  if (column === "yield_percent") {
    return <span className="font-stat">{formatPercent(market.yield_percent)}</span>;
  }
  if (column === "opportunity_score") {
    return <span className="font-mono">{market.opportunity_score ?? "—"}</span>;
  }
  if (column === "confidence_score") {
    return <ConfidenceBadge score={market.confidence_score} />;
  }
  return null;
}

export function SuburbTable({
  markets,
  mode,
  layout = "explore",
  filters,
}: {
  markets: MarketMetric[];
  mode: ExploreMode;
  layout?: "explore" | "city";
  filters?: Pick<ExploreFilters, "propertyType" | "bedroom">;
}) {
  const isCityLayout = layout === "city";
  const columns = isCityLayout ? columnsForLens(mode) : columnsForMode(mode);
  const defaultSort = defaultSortForMode(mode, isCityLayout);
  const [sortKey, setSortKey] = useState<SortKey>(defaultSort);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    defaultDirectionForSort(defaultSort)
  );

  const sorted = useMemo(
    () => sortMarkets(markets, sortKey, sortDirection, filters),
    [markets, sortKey, sortDirection, filters]
  );

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection(defaultDirectionForSort(key));
    }
  }

  if (!sorted.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 bg-card p-10 text-center text-muted-foreground">
        No suburbs match your filters.
      </div>
    );
  }

  const segmentFilters = filters ?? { propertyType: null, bedroom: null };
  const priceMode = mode === "land" ? "buy" : budgetPriceMode(mode);

  return (
    <div className="feature-card overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <SortableHeader
                key={col}
                label={
                  !isCityLayout && filters && col !== "suburb" && col !== "city"
                    ? columnLabelForMode(col, mode, filters.propertyType, filters.bedroom)
                    : COLUMN_LABELS[col]
                }
                tooltip={COLUMN_TOOLTIPS[col]}
                sortKey={col}
                activeKey={sortKey}
                direction={sortDirection}
                onSort={toggleSort}
              />
            ))}
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((market) => {
            const price = priceForFilters(market, priceMode, segmentFilters);

            return (
              <TableRow key={market.market_id}>
                {columns.map((col) => {
                  if (col === "suburb") {
                    return (
                      <TableCell key={col} className="font-heading font-medium">
                        <TrackedSuburbLink
                          href={suburbPath(market.city, market.suburb, {
                            type: filters?.propertyType,
                            bedroom: filters?.bedroom,
                            mode,
                          })}
                          tracking={{
                            marketId: market.market_id,
                            city: market.city,
                            suburb: market.suburb,
                            source: "explore_table",
                            mode,
                          }}
                          className="hover:underline"
                        >
                          {sanitizeLabel(market.suburb)}
                        </TrackedSuburbLink>
                      </TableCell>
                    );
                  }
                  if (col === "city") {
                    return (
                      <TableCell
                        key={col}
                        className="font-heading text-muted-foreground"
                      >
                        {market.city}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={col}>
                      <MetricCell column={col} market={market} filters={segmentFilters} />
                    </TableCell>
                  );
                })}
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {!isCityLayout ? (
                      <span className="font-stat hidden text-sm text-muted-foreground sm:inline">
                        {formatCurrency(price)}
                      </span>
                    ) : null}
                    <PinButton market={market} size="icon-sm" fromMode={mode} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
