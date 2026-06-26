"use client";

import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { BackLink } from "@/components/layout/back-nav";
import { PinButton } from "@/components/markets/pin-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import { suburbPath } from "@/lib/slug";
import type { RankingEntry } from "@/lib/types";

function RankingList({
  title,
  items,
  value,
}: {
  title: string;
  items: RankingEntry[];
  value: (item: RankingEntry) => string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {items.map((item) => (
          <div
            key={item.market_id}
            className="flex items-center justify-between gap-2 rounded-xl px-2 py-2 hover:bg-muted/50"
          >
            <Link href={suburbPath(item.city, item.suburb)} className="min-w-0 flex-1">
              <p className="truncate font-heading font-medium">{sanitizeLabel(item.suburb)}</p>
              <p className="truncate text-xs text-muted-foreground">{item.city}</p>
            </Link>
            <span className="shrink-0 font-mono text-sm text-muted-foreground">
              {value(item)}
            </span>
            <PinButton market={item} size="icon-sm" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function RankingsPageClient({
  national,
}: {
  national: Record<string, RankingEntry[]>;
}) {
  return (
    <div className="space-y-10">
      <BackLink href="/" label="Back to home" />
      <PageHeader
        title="Market rankings"
        description={`National leaderboards from aggregated listing data. Only suburbs with at least ${RANKINGS_MIN_CONFIDENCE}% data confidence are shown.`}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <RankingList
          title="Top yield markets"
          items={national.top_yield_markets ?? []}
          value={(item) => formatPercent(item.yield_percent ?? null)}
        />
        <RankingList
          title="Top opportunity markets"
          items={national.top_opportunity_markets ?? []}
          value={(item) => String(item.opportunity_score ?? "—")}
        />
        <RankingList
          title="Cheapest markets (rent)"
          items={national.cheapest_markets ?? []}
          value={(item) => formatCurrency(item.median_rent ?? null)}
        />
        <RankingList
          title="Most expensive markets (sale)"
          items={national.most_expensive_markets ?? []}
          value={(item) => formatCurrency(item.median_sale_price ?? null)}
        />
        <RankingList
          title="Longest on market (rentals)"
          items={national.longest_on_market_rentals ?? []}
          value={(item) =>
            item.median_days_on_market_rent != null
              ? `${item.median_days_on_market_rent}d`
              : "—"
          }
        />
        <RankingList
          title="Longest on market (sales)"
          items={national.longest_on_market_sales ?? []}
          value={(item) =>
            item.median_days_on_market_sale != null
              ? `${item.median_days_on_market_sale}d`
              : "—"
          }
        />
      </div>
    </div>
  );
}
