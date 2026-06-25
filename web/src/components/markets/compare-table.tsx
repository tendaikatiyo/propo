"use client";

import Link from "next/link";

import { PinButton } from "@/components/markets/pin-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { COMPARE_METRICS, getBestMarketId } from "@/lib/explore";
import { formatCurrency, formatNumber, formatPercent, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { MarketMetric } from "@/lib/types";
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

export function CompareTable({ markets }: { markets: MarketMetric[] }) {
  if (markets.length < 2) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
        Pin at least 2 suburbs to compare them side by side.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Metric</TableHead>
            {markets.map((market) => (
              <TableHead key={market.market_id}>
                <div className="space-y-2">
                  <Link
                    href={suburbPath(market.city, market.suburb)}
                    className="font-medium hover:underline"
                  >
                    {sanitizeLabel(market.suburb)}
                  </Link>
                  <p className="text-xs font-normal text-muted-foreground">{market.city}</p>
                  <PinButton market={market} size="sm" />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {COMPARE_METRICS.map((row) => {
            const bestId = getBestMarketId(markets, row);
            return (
              <TableRow key={row.key}>
                <TableCell className="font-medium">{row.label}</TableCell>
                {markets.map((market) => {
                  const value = row.getValue(market);
                  const isBest = bestId === market.market_id && value != null;
                  return (
                    <TableCell
                      key={market.market_id}
                      className={cn(
                        "tabular-nums",
                        isBest && "bg-emerald-50 font-semibold dark:bg-emerald-950/40"
                      )}
                    >
                      {formatCompareValue(value, row.format)}
                    </TableCell>
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
