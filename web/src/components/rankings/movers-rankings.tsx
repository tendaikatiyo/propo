"use client";

import Link from "next/link";

import { PinButton } from "@/components/markets/pin-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { formatPctChange, trendRangeLabel } from "@/lib/trends";
import { suburbPath } from "@/lib/slug";
import type { MarketMoversRankingsPayload, TrendMover } from "@/lib/types";

function moverDetail(mover: TrendMover, kind: MoverListKind): string {
  if (kind === "supply") {
    const count = mover.listing_count;
    return count != null ? `${count} listings` : "—";
  }
  return formatCurrency(mover.median_price);
}

type MoverListKind = "price" | "supply";

function MoverList({
  title,
  items,
  kind = "price",
  emptyLabel,
}: {
  title: string;
  items: TrendMover[];
  kind?: MoverListKind;
  emptyLabel?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {items.length ? (
          items.map((item) => (
            <div
              key={`${item.market_id}-${title}`}
              className="flex items-center justify-between gap-2 rounded-xl px-2 py-2 hover:bg-muted/50"
            >
              <Link href={suburbPath(item.city, item.suburb)} className="min-w-0 flex-1">
                <p className="truncate font-heading font-medium">{sanitizeLabel(item.suburb)}</p>
                <p className="truncate text-xs text-muted-foreground">{item.city}</p>
              </Link>
              <span className="shrink-0 text-right font-mono text-sm text-muted-foreground">
                <span className="block">{formatPctChange(item.pct_change_median)}</span>
                <span className="block text-xs">{moverDetail(item, kind)}</span>
              </span>
              <PinButton
                market={{
                  market_id: item.market_id,
                  city: item.city,
                  suburb: item.suburb,
                }}
                size="icon-sm"
              />
            </div>
          ))
        ) : (
          <p className="px-2 py-2 text-sm text-muted-foreground">
            {emptyLabel ?? "Not enough snapshot data in this period."}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function MoversRankings({
  movers,
}: {
  movers: MarketMoversRankingsPayload;
}) {
  const rangeLabel = trendRangeLabel(movers.range);

  return (
    <div className="space-y-6">
      <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
        Suburbs with the largest changes in median rent, sale price, and listing supply over the
        last {rangeLabel}. Based on daily listing snapshots.
      </p>

      <div className="grid gap-4 lg:grid-cols-2">
        <MoverList title="Rent risers" items={movers.rent_risers} />
        <MoverList title="Rent fallers" items={movers.rent_fallers} />
        <MoverList title="Sale risers" items={movers.sale_risers} />
        <MoverList title="Sale fallers" items={movers.sale_fallers} />
        <MoverList
          title="Supply surge"
          items={movers.supply_surge}
          kind="supply"
          emptyLabel="No suburbs with rising listing counts in this period."
        />
      </div>
    </div>
  );
}
