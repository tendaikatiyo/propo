"use client";

import Link from "next/link";

import { SuburbTable } from "@/components/markets/suburb-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <Link
            key={`${item.city}-${item.suburb}`}
            href={suburbPath(item.city, item.suburb)}
            className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted"
          >
            <span>
              {item.suburb}, {item.city}
            </span>
            <span className="text-muted-foreground tabular-nums">{item.label}</span>
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
  const cityRankings = rankings?.per_city?.[city.city];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{city.city}</h1>
        <p className="text-muted-foreground">
          {city.suburb_count} suburbs · {city.rental_count} rentals · {city.sale_count} sales
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Median rent</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold tabular-nums">
            {formatCurrency(city.median_rent)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Median sale</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold tabular-nums">
            {formatCurrency(city.median_sale_price)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Average yield</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold tabular-nums">
            {formatPercent(city.average_yield)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Avg DOM (rent)</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold tabular-nums">
            {city.average_days_on_market_rent != null
              ? `${city.average_days_on_market_rent}d`
              : "—"}
          </CardContent>
        </Card>
      </div>

      {cityRankings ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <TopList
            title="Highest yield suburbs"
            items={(cityRankings.highest_yield_suburbs ?? []).slice(0, 5).map((r) => ({
              city: r.city,
              suburb: r.suburb,
              label: formatPercent(r.yield_percent ?? null),
            }))}
          />
          <TopList
            title="Top opportunity suburbs"
            items={(cityRankings.best_opportunity_suburbs ?? []).slice(0, 5).map((r) => ({
              city: r.city,
              suburb: r.suburb,
              label: String(r.opportunity_score ?? "—"),
            }))}
          />
        </div>
      ) : null}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">All suburbs</h2>
        <SuburbTable markets={markets} mode="rent" />
      </section>
    </div>
  );
}
