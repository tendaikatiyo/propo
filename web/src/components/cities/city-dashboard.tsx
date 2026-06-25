"use client";

import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
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
  const cityRankings = rankings?.per_city?.[city.city];

  return (
    <div className="space-y-8">
      <PageHeader
        title={city.city}
        description={`${city.suburb_count} suburbs · ${city.rental_count} rentals · ${city.sale_count} sales`}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        <h2 className="font-heading text-lg font-medium">All suburbs</h2>
        <SuburbTable markets={markets} mode="rent" />
      </section>
    </div>
  );
}
