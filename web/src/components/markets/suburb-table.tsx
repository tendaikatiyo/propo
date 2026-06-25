"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { PinButton } from "@/components/markets/pin-button";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { sortMarkets } from "@/lib/explore";
import { suburbPath } from "@/lib/slug";
import type { ExploreMode, MarketMetric, SortDirection, SortKey } from "@/lib/types";

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "suburb", label: "Suburb" },
  { key: "city", label: "City" },
  { key: "median_rent", label: "Median rent" },
  { key: "median_sale_price", label: "Median sale" },
  { key: "yield_percent", label: "Yield" },
  { key: "opportunity_score", label: "Opportunity" },
  { key: "confidence_score", label: "Confidence" },
];

export function SuburbTable({
  markets,
  mode,
}: {
  markets: MarketMetric[];
  mode: ExploreMode;
}) {
  const [sortKey, setSortKey] = useState<SortKey>("opportunity_score");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sorted = useMemo(
    () => sortMarkets(markets, sortKey, sortDirection),
    [markets, sortKey, sortDirection]
  );

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("desc");
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
            {COLUMNS.map((col) => (
              <TableHead key={col.key}>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="-ml-2 h-8"
                  onClick={() => toggleSort(col.key)}
                >
                  {col.label}
                  {sortKey === col.key ? (
                    sortDirection === "asc" ? (
                      <ArrowUp className="ml-1 size-3" />
                    ) : (
                      <ArrowDown className="ml-1 size-3" />
                    )
                  ) : null}
                </Button>
              </TableHead>
            ))}
            <TableHead>DOM</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((market) => {
            const price = mode === "rent" ? market.median_rent : market.median_sale_price;
            const dom =
              mode === "rent"
                ? market.average_days_on_market_rent
                : market.average_days_on_market_sale;

            return (
              <TableRow key={market.market_id}>
                <TableCell className="font-heading font-medium">
                  <Link
                    href={suburbPath(market.city, market.suburb)}
                    className="hover:underline"
                  >
                    {sanitizeLabel(market.suburb)}
                  </Link>
                </TableCell>
                <TableCell className="font-heading text-muted-foreground">{market.city}</TableCell>
                <TableCell className="font-mono">{formatCurrency(market.median_rent)}</TableCell>
                <TableCell className="font-mono">
                  {formatCurrency(market.median_sale_price)}
                </TableCell>
                <TableCell className="font-stat">{formatPercent(market.yield_percent)}</TableCell>
                <TableCell className="font-mono">{market.opportunity_score ?? "—"}</TableCell>
                <TableCell>
                  <ConfidenceBadge score={market.confidence_score} />
                </TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  {dom != null ? `${dom}d` : "—"}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="font-stat hidden text-sm text-muted-foreground sm:inline">
                      {formatCurrency(price)}
                    </span>
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
