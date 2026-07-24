"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { CityTrendMovers } from "@/components/cities/city-trend-movers";
import {
  filterMarketsBySuburbQuery,
  SuburbSearchInput,
} from "@/components/filters/suburb-search-input";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
import { CityRankingList } from "@/components/mobile/city-ranking-list";
import { CityStatsGrid } from "@/components/mobile/city-stats-grid";
import { LandSuburbList } from "@/components/mobile/land-suburb-list";
import { SuburbList } from "@/components/mobile/suburb-list";
import { LandSuburbTable } from "@/components/markets/land-suburb-table";
import { SuburbTable } from "@/components/markets/suburb-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { useLandMetrics } from "@/hooks/use-market-data";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/format";
import {
  showsInvestSideRankings,
  showsRentSideRankings,
} from "@/lib/lens";
import { citiesIndexPath, matchesSlug, suburbPath, toSlug } from "@/lib/slug";
import type { CityMetric, MarketMetric, RankingsPayload } from "@/lib/types";

function TopList({
  title,
  items,
  lens,
}: {
  title: string;
  items: { city: string; suburb: string; label: string }[];
  lens: string;
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
            href={suburbPath(item.city, item.suburb, { mode: lens })}
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

function cityDescription(city: CityMetric, lens: string): string {
  const base = `${city.suburb_count} suburbs`;
  if (lens === "land") {
    return `${base} · ${city.land_count ?? 0} land listings`;
  }
  if (lens === "buy") {
    return `${base} · ${city.sale_count} sales`;
  }
  if (lens === "invest") {
    return `${base} · ${city.rental_count} rentals · ${city.sale_count} sales`;
  }
  return `${base} · ${city.rental_count} rentals`;
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
  const { lens } = useGlobalLens();
  const [query, setQuery] = useState("");
  const cityRankings = rankings?.per_city?.[city.city];
  const isLand = lens === "land";
  const { data: allLandMarkets = [], isLoading: landLoading } = useLandMetrics({
    enabled: isLand,
  });

  const filteredMarkets = useMemo(
    () => filterMarketsBySuburbQuery(markets, query),
    [markets, query]
  );

  const filteredLandMarkets = useMemo(() => {
    if (!isLand) return [];
    const cityLand = allLandMarkets.filter((m) =>
      matchesSlug(m.city, toSlug(city.city))
    );
    return filterMarketsBySuburbQuery(cityLand, query);
  }, [isLand, allLandMarkets, city.city, query]);

  const searchSuggestions = useMemo(() => {
    if (!isLand) return markets;
    return allLandMarkets.filter((m) => matchesSlug(m.city, toSlug(city.city)));
  }, [isLand, markets, allLandMarkets, city.city]);

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

  const cheapestRentItems =
    [...markets]
      .filter((m) => m.median_rent != null && m.median_rent > 0)
      .sort((a, b) => (a.median_rent ?? Infinity) - (b.median_rent ?? Infinity))
      .slice(0, 5)
      .map((r) => ({
        city: r.city,
        suburb: r.suburb,
        label: formatCurrency(r.median_rent),
      })) ?? [];

  return (
    <div className="space-y-6 lg:space-y-8">
      <BackLink href={citiesIndexPath(lens)} label="All cities" />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <PageHeader title={city.city} description={cityDescription(city, lens)} />
      </div>

      <CityStatsGrid city={city} lens={lens} />

      <div className="hidden gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {(lens === "rent" || lens === "invest") && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="caption-label normal-case">Median rent</CardTitle>
            </CardHeader>
            <CardContent className="font-stat text-2xl font-medium">
              {formatCurrency(city.median_rent)}
            </CardContent>
          </Card>
        )}
        {(lens === "buy" || lens === "invest") && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="caption-label normal-case">Median sale</CardTitle>
            </CardHeader>
            <CardContent className="font-stat text-2xl font-medium">
              {formatCurrency(city.median_sale_price)}
            </CardContent>
          </Card>
        )}
        {lens === "invest" && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="caption-label normal-case">Average yield</CardTitle>
            </CardHeader>
            <CardContent className="font-stat text-2xl font-medium">
              {formatPercent(city.average_yield)}
            </CardContent>
          </Card>
        )}
        {lens === "land" && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="caption-label normal-case">Land listings</CardTitle>
            </CardHeader>
            <CardContent className="font-stat text-2xl font-medium">
              {formatNumber(city.land_count)}
            </CardContent>
          </Card>
        )}
      </div>

      {lens !== "land" ? <CityTrendMovers city={city.city} lens={lens} /> : null}

      {showsInvestSideRankings(lens) && cityRankings ? (
        <>
          <div className="space-y-4 lg:hidden">
            <CityRankingList title="Highest yield" items={yieldItems} lens={lens} />
            <CityRankingList title="Top opportunity" items={opportunityItems} lens={lens} />
          </div>
          <div className="hidden gap-4 lg:grid lg:grid-cols-2">
            <TopList title="Highest yield suburbs" items={yieldItems} lens={lens} />
            <TopList title="Top opportunity suburbs" items={opportunityItems} lens={lens} />
          </div>
        </>
      ) : null}

      {showsRentSideRankings(lens) && cheapestRentItems.length ? (
        <div className="lg:hidden">
          <CityRankingList title="Cheapest rent" items={cheapestRentItems} lens={lens} />
        </div>
      ) : null}

      <section className="space-y-3 lg:space-y-4">
        <div className="space-y-3">
          <h2 className="font-heading text-lg font-semibold tracking-tight lg:text-lg lg:font-medium">
            All suburbs
          </h2>
          <SuburbSearchInput
            value={query}
            onChange={setQuery}
            suggestions={searchSuggestions}
          />
        </div>

        {isLand ? (
          landLoading ? (
            <p className="text-muted-foreground">Loading land suburbs…</p>
          ) : !filteredLandMarkets.length ? (
            <p className="text-muted-foreground">No suburbs match your search.</p>
          ) : (
            <>
              <div className="lg:hidden">
                <LandSuburbList markets={filteredLandMarkets} />
              </div>
              <div className="hidden lg:block">
                <LandSuburbTable markets={filteredLandMarkets} layout="city" />
              </div>
            </>
          )
        ) : !filteredMarkets.length ? (
          <p className="text-muted-foreground">No suburbs match your search.</p>
        ) : (
          <>
            <div className="lg:hidden">
              <SuburbList markets={filteredMarkets} mode={lens} />
            </div>
            <div className="hidden lg:block">
              <SuburbTable markets={filteredMarkets} mode={lens} layout="city" />
            </div>
          </>
        )}
      </section>
    </div>
  );
}
