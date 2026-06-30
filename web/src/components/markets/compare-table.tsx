"use client";

import Link from "next/link";
import { Info } from "lucide-react";

import { PinButton } from "@/components/markets/pin-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buildCompareMetrics, getBestMarketId } from "@/lib/explore";
import { formatCurrency, formatNumber, formatPercent, sanitizeLabel } from "@/lib/format";
import { compareMetricTooltip } from "@/lib/metric-tooltips";
import { isUsingAggregateFallback } from "@/lib/segments";
import { suburbPath } from "@/lib/slug";
import type { CompareFilters, MarketMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

function formatCompareValue(
  value: number | null,
  format: "currency" | "percent" | "number" | "days"
): string {
  if (value == null) return "—";
  if (format === "currency") return formatCurrency(value);
  if (format === "percent") return formatPercent(value);
  if (format === "days") return `${formatNumber(value)}d`;
  return formatNumber(value);
}

function CompareValueCell({
  market,
  row,
  filters,
  value,
  isBest,
}: {
  market: MarketMetric;
  row: ReturnType<typeof buildCompareMetrics>[number];
  filters: CompareFilters;
  value: number | null;
  isBest: boolean;
}) {
  const showFallback =
    row.segmentMode != null &&
    isUsingAggregateFallback(market, row.segmentMode, filters);

  return (
    <TableCell
      className={cn("font-mono align-top", isBest && "bg-secondary font-semibold")}
    >
      <div className="space-y-0.5">
        <span>{formatCompareValue(value, row.format)}</span>
        {showFallback ? (
          <p className="text-[10px] font-sans font-normal leading-tight text-muted-foreground">
            Suburb median
          </p>
        ) : null}
      </div>
    </TableCell>
  );
}

export function CompareTable({
  markets,
  filters,
}: {
  markets: MarketMetric[];
  filters: CompareFilters;
}) {
  const metrics = buildCompareMetrics(filters);
  const specQuery = { type: filters.propertyType, bedroom: filters.bedroom };

  if (markets.length < 2) {
    return (
      <div className="rounded-2xl border border-dashed border-border/80 bg-card p-10 text-center text-muted-foreground">
        Pin at least 2 suburbs to compare them side by side.
      </div>
    );
  }

  return (
    <div className="feature-card overflow-hidden p-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-52">Metric</TableHead>
            {markets.map((market) => (
              <TableHead key={market.market_id}>
                <div className="space-y-2 py-1">
                  <Link
                    href={suburbPath(market.city, market.suburb, specQuery)}
                    className="font-heading text-sm font-medium normal-case tracking-normal hover:underline"
                  >
                    {sanitizeLabel(market.suburb)}
                  </Link>
                  <p className="font-heading text-xs font-normal normal-case tracking-normal text-muted-foreground">
                    {market.city}
                  </p>
                  <PinButton market={market} size="sm" />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((row) => {
            const bestId = getBestMarketId(markets, row);
            const tooltip = compareMetricTooltip(row.key, filters.propertyType, filters.bedroom);
            return (
              <TableRow key={row.key}>
                <TableCell className="align-top font-heading font-medium">
                  <div className="flex items-start gap-1.5">
                    <span>{row.label}</span>
                    {tooltip ? (
                      <Tooltip>
                        <TooltipTrigger className="mt-0.5 text-muted-foreground">
                          <Info className="size-3.5" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs font-sans text-sm normal-case tracking-normal">
                          {tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ) : null}
                  </div>
                </TableCell>
                {markets.map((market) => {
                  const value = row.getValue(market);
                  const isBest = bestId === market.market_id && value != null;
                  return (
                    <CompareValueCell
                      key={market.market_id}
                      market={market}
                      row={row}
                      filters={filters}
                      value={value}
                      isBest={isBest}
                    />
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
