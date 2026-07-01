"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { BackLink } from "@/components/layout/back-nav";
import { PinButton } from "@/components/markets/pin-button";
import { MoversRankings } from "@/components/rankings/movers-rankings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import { LEADERBOARD_MIN_CONFIDENCE, RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import { daysOnMarketRent, daysOnMarketSale } from "@/lib/rankings";
import { suburbPath } from "@/lib/slug";
import type { MarketMoversRankingsPayload, RankingEntry } from "@/lib/types";

function RankingList({
  title,
  items,
  value,
  emptyLabel = "Not enough data for this leaderboard yet.",
}: {
  title: string;
  items: RankingEntry[];
  value: (item: RankingEntry) => string;
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
          ))
        ) : (
          <p className="px-2 py-2 text-sm text-muted-foreground">{emptyLabel}</p>
        )}
      </CardContent>
    </Card>
  );
}

function ClassicRankings({
  national,
}: {
  national: Record<string, RankingEntry[]>;
}) {
  return (
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
        value={(item) => {
          const days = daysOnMarketRent(item);
          return days != null ? `${days}d` : "—";
        }}
      />
      <RankingList
        title="Longest on market (sales)"
        items={national.longest_on_market_sales ?? []}
        value={(item) => {
          const days = daysOnMarketSale(item);
          return days != null ? `${days}d` : "—";
        }}
      />
    </div>
  );
}

export function RankingsPageClient({
  national,
  movers,
}: {
  national: Record<string, RankingEntry[]>;
  movers: MarketMoversRankingsPayload;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") === "movers" ? "movers" : "classic";

  const setTab = (next: "classic" | "movers") => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "movers") {
      params.set("tab", "movers");
    } else {
      params.delete("tab");
    }
    const query = params.toString();
    router.replace(query ? `/rankings?${query}` : "/rankings", { scroll: false });
  };

  return (
    <div className="space-y-10">
      <BackLink href="/" label="Back to home" />
      <PageHeader
        title="Market rankings"
        description={`National leaderboards from aggregated listing data. Leaderboards prefer suburbs with at least ${LEADERBOARD_MIN_CONFIDENCE}% confidence; movers require ${RANKINGS_MIN_CONFIDENCE}%.`}
      />

      <Tabs value={tab} onValueChange={(value) => setTab(value === "movers" ? "movers" : "classic")}>
        <TabsList>
          <TabsTrigger value="classic">Leaderboards</TabsTrigger>
          <TabsTrigger value="movers">Movers</TabsTrigger>
        </TabsList>
        <TabsContent value="classic" className="mt-6">
          <ClassicRankings national={national} />
        </TabsContent>
        <TabsContent value="movers" className="mt-6">
          <MoversRankings movers={movers} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
