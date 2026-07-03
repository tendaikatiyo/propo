"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";

import { TrackedSuburbLink } from "@/components/analytics/tracked-suburb-link";
import { PinButton } from "@/components/markets/pin-button";
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
import { COLUMN_TOOLTIPS } from "@/lib/metric-tooltips";
import { formatNumber, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { sortLandMarkets } from "@/lib/land-explore";
import { suburbPath } from "@/lib/slug";
import type { LandMetric, SortDirection, SortKey } from "@/lib/types";

const LAND_COLUMNS: SortKey[] = [
  "suburb",
  "city",
  "median_price_per_sqm",
  "land_count",
  "confidence_score",
];

const LAND_COLUMN_LABELS: Record<string, string> = {
  suburb: "Suburb",
  city: "City",
  median_price_per_sqm: "Median $/sqm",
  land_count: "Land listings",
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

export function LandSuburbTable({ markets }: { markets: LandMetric[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("median_price_per_sqm");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sorted = useMemo(
    () => sortLandMarkets(markets, sortKey, sortDirection),
    [markets, sortKey, sortDirection]
  );

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection(key === "median_price_per_sqm" ? "asc" : "desc");
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
            {LAND_COLUMNS.map((col) => (
              <SortableHeader
                key={col}
                label={LAND_COLUMN_LABELS[col]}
                tooltip={COLUMN_TOOLTIPS[col]}
                sortKey={col}
                activeKey={sortKey}
                direction={sortDirection}
                onSort={toggleSort}
              />
            ))}
            <TableHead>
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">
                DOM
              </span>
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((market) => (
            <TableRow key={market.market_id}>
              <TableCell className="font-heading font-medium">
                <TrackedSuburbLink
                  href={suburbPath(market.city, market.suburb)}
                  tracking={{
                    marketId: market.market_id,
                    city: market.city,
                    suburb: market.suburb,
                    source: "explore_table",
                    mode: "land",
                  }}
                  className="hover:underline"
                >
                  {sanitizeLabel(market.suburb)}
                </TrackedSuburbLink>
              </TableCell>
              <TableCell className="font-heading text-muted-foreground">{market.city}</TableCell>
              <TableCell className="font-stat">
                {formatPricePerSqm(market.median_price_per_sqm)}
              </TableCell>
              <TableCell className="font-mono">{formatNumber(market.land_count)}</TableCell>
              <TableCell>
                <ConfidenceBadge score={market.confidence_score} />
              </TableCell>
              <TableCell className="font-mono text-muted-foreground">
                {market.median_days_on_market_land != null
                  ? `${formatNumber(market.median_days_on_market_land)}d`
                  : "—"}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="font-stat hidden text-sm text-muted-foreground sm:inline">
                    {formatPricePerSqm(market.median_price_per_sqm)}
                  </span>
                  <PinButton market={market} size="icon-sm" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
