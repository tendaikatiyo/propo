"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { BackLink } from "@/components/layout/back-nav";
import { PinButton } from "@/components/markets/pin-button";
import { MoversRankings } from "@/components/rankings/movers-rankings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGlobalLens } from "@/components/providers/lens-provider";
import {
  formatCurrency,
  formatNumber,
  formatPercent,
  formatPricePerSqm,
  sanitizeLabel,
} from "@/lib/format";
import { LEADERBOARD_MIN_CONFIDENCE, RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import { suburbPath } from "@/lib/slug";
import type { ExploreMode, MarketMoversRankingsPayload, RankingEntry } from "@/lib/types";

function RankingList({
  title,
  items,
  value,
  suburbQuery,
  pinFromMode,
  emptyLabel = "Not enough data for this leaderboard yet.",
}: {
  title: string;
  items: RankingEntry[];
  value: (item: RankingEntry) => string;
  suburbQuery?: { mode?: string };
  pinFromMode?: ExploreMode;
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
              <Link
                href={suburbPath(item.city, item.suburb, suburbQuery)}
                className="min-w-0 flex-1"
              >
                <p className="truncate font-heading font-medium">{sanitizeLabel(item.suburb)}</p>
                <p className="truncate text-xs text-muted-foreground">{item.city}</p>
              </Link>
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {value(item)}
              </span>
              <PinButton market={item} size="icon-sm" fromMode={pinFromMode} />
            </div>
          ))
        ) : (
          <p className="px-2 py-2 text-sm text-muted-foreground">{emptyLabel}</p>
        )}
      </CardContent>
    </Card>
  );
}

function LensRankings({
  lens,
  national,
  land,
}: {
  lens: ExploreMode;
  national: Record<string, RankingEntry[]>;
  land: Record<string, RankingEntry[]>;
}) {
  if (lens === "land") {
    return <LandRankings land={land} />;
  }

  const suburbQuery = { mode: lens };

  if (lens === "rent") {
    return (
      <RankingList
        title="Cheapest markets (rent)"
        items={national.cheapest_markets ?? []}
        value={(item) => formatCurrency(item.median_rent ?? null)}
        suburbQuery={suburbQuery}
        pinFromMode={lens}
      />
    );
  }

  if (lens === "buy") {
    return (
      <RankingList
        title="Most expensive markets (sale)"
        items={national.most_expensive_markets ?? []}
        value={(item) => formatCurrency(item.median_sale_price ?? null)}
        suburbQuery={suburbQuery}
        pinFromMode={lens}
      />
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <RankingList
        title="Top yield markets"
        items={national.top_yield_markets ?? []}
        value={(item) => formatPercent(item.yield_percent ?? null)}
        suburbQuery={suburbQuery}
        pinFromMode={lens}
      />
      <RankingList
        title="Top opportunity markets"
        items={national.top_opportunity_markets ?? []}
        value={(item) => String(item.opportunity_score ?? "—")}
        suburbQuery={suburbQuery}
        pinFromMode={lens}
      />
    </div>
  );
}

function LandRankings({ land }: { land: Record<string, RankingEntry[]> }) {
  const landQuery = { mode: "land" };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <RankingList
        title="Cheapest land per sqm"
        items={land.cheapest_land_per_sqm ?? []}
        value={(item) => formatPricePerSqm(item.median_price_per_sqm ?? null)}
        suburbQuery={landQuery}
        pinFromMode="land"
      />
      <RankingList
        title="Most expensive land per sqm"
        items={land.most_expensive_land_per_sqm ?? []}
        value={(item) => formatPricePerSqm(item.median_price_per_sqm ?? null)}
        suburbQuery={landQuery}
        pinFromMode="land"
      />
      <RankingList
        title="Most land listings"
        items={land.most_land_listings ?? []}
        value={(item) => formatNumber(item.land_count ?? null)}
        suburbQuery={landQuery}
        pinFromMode="land"
      />
    </div>
  );
}

type RankingsTab = "leaderboards" | "movers";

export function RankingsPageClient({
  national,
  land,
  movers,
}: {
  national: Record<string, RankingEntry[]>;
  land: Record<string, RankingEntry[]>;
  movers: MarketMoversRankingsPayload;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lens } = useGlobalLens();
  const tabParam = searchParams.get("tab");
  const tab: RankingsTab = tabParam === "movers" ? "movers" : "leaderboards";

  const setTab = (next: RankingsTab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tab");
    if (next === "movers") {
      params.set("tab", "movers");
    }
    const query = params.toString();
    router.replace(query ? `/rankings?${query}` : "/rankings", { scroll: false });
  };

  // Redirect legacy ?tab=land to leaderboards with land lens
  useEffect(() => {
    if (tabParam !== "land") return;
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tab");
    params.set("mode", "land");
    router.replace(`/rankings?${params.toString()}`, { scroll: false });
  }, [tabParam, searchParams, router]);

  return (
    <div className="space-y-10">
      <BackLink href="/" label="Back to home" />
      <PageHeader
        title="Market rankings"
        description={`National leaderboards from Propo's property market database. Leaderboards prefer suburbs with at least ${LEADERBOARD_MIN_CONFIDENCE}% confidence; movers require ${RANKINGS_MIN_CONFIDENCE}%.`}
      />

      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value === "movers" ? "movers" : "leaderboards")}
      >
        <TabsList>
          <TabsTrigger value="leaderboards">Leaderboards</TabsTrigger>
          <TabsTrigger value="movers">Movers</TabsTrigger>
        </TabsList>
        <TabsContent value="leaderboards" className="mt-6">
          <LensRankings lens={lens} national={national} land={land} />
        </TabsContent>
        <TabsContent value="movers" className="mt-6">
          {lens === "land" ? (
            <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
              Land price movers aren&apos;t available yet — we need more daily land snapshot history.
              Use Leaderboards with the Land lens for $/sqm rankings.
            </p>
          ) : (
            <MoversRankings movers={movers} lens={lens} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
