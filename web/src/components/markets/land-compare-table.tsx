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
import {
  buildLandCompareMetrics,
  getBestLandMarketId,
} from "@/lib/land-compare";
import { formatNumber, formatPricePerSqm, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { LandMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

function formatLandCompareValue(
  value: number | null,
  format: "pricePerSqm" | "number" | "days"
): string {
  if (value == null) return "—";
  if (format === "pricePerSqm") return formatPricePerSqm(value);
  if (format === "days") return `${formatNumber(value)}d`;
  return formatNumber(value);
}

export function LandCompareTable({ markets }: { markets: LandMetric[] }) {
  const metrics = buildLandCompareMetrics();

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
                    href={suburbPath(market.city, market.suburb)}
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
            const bestId = getBestLandMarketId(markets, row);
            return (
              <TableRow key={row.key}>
                <TableCell className="align-top font-heading font-medium">{row.label}</TableCell>
                {markets.map((market) => {
                  const value = row.getValue(market);
                  const isBest = bestId === market.market_id && value != null;
                  return (
                    <TableCell
                      key={market.market_id}
                      className={cn("font-mono align-top", isBest && "bg-secondary font-semibold")}
                    >
                      {formatLandCompareValue(value, row.format)}
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
