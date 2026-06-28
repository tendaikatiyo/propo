"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";

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
import { COLUMN_TOOLTIPS, columnLabelForMode, columnsForCityDashboard, columnsForMode, DOM_RENT_TOOLTIP, DOM_SALE_TOOLTIP, DOM_TOOLTIP } from "@/lib/metric-tooltips";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { sortMarkets } from "@/lib/explore";
import { priceForFilters } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters, ExploreMode, MarketMetric, SortDirection, SortKey } from "@/lib/types";

const COLUMN_LABELS: Record<SortKey, string> = {
  suburb: "Suburb",
  city: "City",
  median_rent: "Median rent",
  median_sale_price: "Median sale",
  yield_percent: "Yield",
  opportunity_score: "Opportunity",
  confidence_score: "Confidence",
};

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
  const columns = isCityLayout ? columnsForCityDashboard() : columnsForMode(mode);
  const defaultSort: SortKey = isCityLayout
    ? "opportunity_score"
    : mode === "rent"
      ? "median_rent"
      : "opportunity_score";
  const [sortKey, setSortKey] = useState<SortKey>(defaultSort);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    isCityLayout ? "desc" : mode === "rent" ? "asc" : "desc"
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
      setSortDirection(key === "median_rent" ? "asc" : "desc");
    }
  }

  if (!sorted.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 bg-card p-10 text-center text-muted-foreground">
        No suburbs match your filters.
      </div>
    );
  }

  return (
    <div className="feature-card overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <SortableHeader
                key={col}
                label={
                  !isCityLayout && filters
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
            {isCityLayout ? (
              <>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase">DOM rent</span>
                    <Tooltip>
                      <TooltipTrigger className="text-muted-foreground">
                        <HelpCircle className="size-3.5" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs font-sans text-sm normal-case">
                        {DOM_RENT_TOOLTIP}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase">DOM sale</span>
                    <Tooltip>
                      <TooltipTrigger className="text-muted-foreground">
                        <HelpCircle className="size-3.5" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs font-sans text-sm normal-case">
                        {DOM_SALE_TOOLTIP}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableHead>
              </>
            ) : (
              <TableHead>
                <div className="flex items-center gap-1">
                  <span>DOM</span>
                  <Tooltip>
                    <TooltipTrigger className="text-muted-foreground">
                      <HelpCircle className="size-3.5" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs font-sans text-sm normal-case">
                      {DOM_TOOLTIP}
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableHead>
            )}
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((market) => {
            const segmentFilters = filters ?? { propertyType: null, bedroom: null };
            const price = priceForFilters(market, mode, segmentFilters);
            const dom =
              mode === "rent"
                ? market.average_days_on_market_rent
                : market.average_days_on_market_sale;

            return (
              <TableRow key={market.market_id}>
                <TableCell className="font-heading font-medium">
                  <Link
                    href={suburbPath(market.city, market.suburb, {
                      type: filters?.propertyType,
                      bedroom: filters?.bedroom,
                    })}
                    className="hover:underline"
                  >
                    {sanitizeLabel(market.suburb)}
                  </Link>
                </TableCell>
                {!isCityLayout ? (
                  <TableCell className="font-heading text-muted-foreground">{market.city}</TableCell>
                ) : null}
                <TableCell>
                  <SegmentPriceCell market={market} mode="rent" filters={segmentFilters} />
                </TableCell>
                {isCityLayout || mode === "buy" ? (
                  <>
                    <TableCell>
                      <SegmentPriceCell market={market} mode="buy" filters={segmentFilters} />
                    </TableCell>
                    <TableCell className="font-stat">
                      {formatPercent(market.yield_percent)}
                    </TableCell>
                    <TableCell className="font-mono">
                      {market.opportunity_score ?? "—"}
                    </TableCell>
                  </>
                ) : null}
                <TableCell>
                  <ConfidenceBadge score={market.confidence_score} />
                </TableCell>
                {isCityLayout ? (
                  <>
                    <TableCell className="font-mono text-muted-foreground">
                      {market.average_days_on_market_rent != null
                        ? `${market.average_days_on_market_rent}d`
                        : "—"}
                    </TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      {market.average_days_on_market_sale != null
                        ? `${market.average_days_on_market_sale}d`
                        : "—"}
                    </TableCell>
                  </>
                ) : (
                  <TableCell className="font-mono text-muted-foreground">
                    {dom != null ? `${dom}d` : "—"}
                  </TableCell>
                )}
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {!isCityLayout ? (
                      <span className="font-stat hidden text-sm text-muted-foreground sm:inline">
                        {formatCurrency(price)}
                      </span>
                    ) : null}
                    <PinButton market={market} size="icon-sm" />
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
