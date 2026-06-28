"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { CityTrendMovers } from "@/components/cities/city-trend-movers";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
import { CityRankingList } from "@/components/mobile/city-ranking-list";
import { CityStatsGrid } from "@/components/mobile/city-stats-grid";
import { SuburbList } from "@/components/mobile/suburb-list";
import { SuburbTable } from "@/components/markets/suburb-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatCurrency, formatPercent } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { CityMetric, MarketMetric, RankingsPayload } from "@/lib/types";

function TopList({
  title,
  items,
}: {
  title: string;
  items: { city: string; suburb: string; label: string }[];
}) {
  if (!items.length) return null;
  return (
    <Card className="hidden lg:block">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <Link
            key={`${item.city}-${item.suburb}`}
            href={suburbPath(item.city, item.suburb)}
            className="flex items-center justify-between rounded-xl px-2 py-2 text-sm hover:bg-muted/50"
          >
            <span className="font-heading">
              {item.suburb}, {item.city}
            </span>
            <span className="font-mono text-muted-foreground">{item.label}</span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export function CityDashboard({
  city,
  markets,
  rankings,
}: {
  city: CityMetric;
  markets: MarketMetric[];
  rankings: RankingsPayload | null;
}) {
  const [query, setQuery] = useState("");
  const cityRankings = rankings?.per_city?.[city.city];

  const filteredMarkets = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return markets;
    return markets.filter((m) => m.suburb.toLowerCase().includes(q));
  }, [markets, query]);

  const yieldItems =
    cityRankings?.highest_yield_suburbs?.slice(0, 5).map((r) => ({
      city: r.city,
      suburb: r.suburb,
      label: formatPercent(r.yield_percent ?? null),
    })) ?? [];

  const opportunityItems =
    cityRankings?.best_opportunity_suburbs?.slice(0, 5).map((r) => ({
      city: r.city,
      suburb: r.suburb,
      label: String(r.opportunity_score ?? "—"),
    })) ?? [];

  return (
    <div className="space-y-6 lg:space-y-8">
      <BackLink href="/cities" label="All cities" />

      <PageHeader
        title={city.city}
        description={`${city.suburb_count} suburbs · ${city.rental_count} rentals · ${city.sale_count} sales`}
      />

      <CityStatsGrid city={city} />

      <div className="hidden gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="caption-label normal-case">Median rent</CardTitle>
          </CardHeader>
          <CardContent className="font-stat text-2xl font-medium">
            {formatCurrency(city.median_rent)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="caption-label normal-case">Median sale</CardTitle>
          </CardHeader>
          <CardContent className="font-stat text-2xl font-medium">
            {formatCurrency(city.median_sale_price)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="caption-label normal-case">Average yield</CardTitle>
          </CardHeader>
          <CardContent className="font-stat text-2xl font-medium">
            {formatPercent(city.average_yield)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="caption-label normal-case">Avg DOM (rent)</CardTitle>
          </CardHeader>
          <CardContent className="font-mono text-2xl font-medium">
            {city.average_days_on_market_rent != null
              ? `${city.average_days_on_market_rent}d`
              : "—"}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="caption-label normal-case">Avg DOM (sale)</CardTitle>
          </CardHeader>
          <CardContent className="font-mono text-2xl font-medium">
            {city.average_days_on_market_sale != null
              ? `${city.average_days_on_market_sale}d`
              : "—"}
          </CardContent>
        </Card>
      </div>

      <CityTrendMovers city={city.city} />

      {cityRankings ? (
        <>
          <div className="space-y-4 lg:hidden">
            <CityRankingList title="Highest yield" items={yieldItems} />
            <CityRankingList title="Top opportunity" items={opportunityItems} />
          </div>
          <div className="hidden gap-4 lg:grid lg:grid-cols-2">
            <TopList title="Highest yield suburbs" items={yieldItems} />
            <TopList title="Top opportunity suburbs" items={opportunityItems} />
          </div>
        </>
      ) : null}

      <section className="space-y-3 lg:space-y-4">
        <div className="space-y-3">
          <h2 className="font-heading text-lg font-semibold tracking-tight lg:text-lg lg:font-medium">
            All suburbs
          </h2>
          <div className="relative">
            <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search suburbs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 rounded-xl border-0 bg-muted/50 pl-10 text-[15px] shadow-none focus-visible:ring-1"
            />
          </div>
        </div>

        {!filteredMarkets.length ? (
          <p className="text-muted-foreground">No suburbs match your search.</p>
        ) : (
          <>
            <div className="lg:hidden">
              <SuburbList markets={filteredMarkets} mode="buy" />
            </div>
            <div className="hidden lg:block">
              <SuburbTable markets={filteredMarkets} mode="buy" layout="city" />
            </div>
          </>
        )}
      </section>
    </div>
  );
}
