"use client";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { formatPctChange } from "@/lib/trends";
import { suburbPath, toSlug } from "@/lib/slug";
import type { CityTrendMoversPayload, ExploreMode } from "@/lib/types";

async function fetchCityMovers(
  citySlug: string,
  mode: ExploreMode
): Promise<CityTrendMoversPayload> {
  const params = new URLSearchParams({ range: "90d", mode });
  const res = await fetch(`/api/cities/${encodeURIComponent(citySlug)}/trend-movers?${params}`);
  if (!res.ok) throw new Error("Failed to load movers");
  return res.json() as Promise<CityTrendMoversPayload>;
}

function hasMovers(data: CityTrendMoversPayload | undefined): boolean {
  return Boolean(data?.risers.length || data?.fallers.length);
}

function MoverList({
  title,
  items,
  city,
}: {
  title: string;
  items: CityTrendMoversPayload["risers"];
  city: string;
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.market_id}>
            <Link
              href={suburbPath(city, item.suburb)}
              className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:bg-muted/50"
            >
              <span>{sanitizeLabel(item.suburb)}</span>
              <span className="font-mono text-muted-foreground">
                {formatPctChange(item.pct_change_median)} · {formatCurrency(item.median_price)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function moversDescription(mode: ExploreMode): string {
  return mode === "rent"
    ? "Suburbs with the largest median rent changes from daily snapshots."
    : "Suburbs with the largest median sale price changes from daily snapshots.";
}

export function CityTrendMovers({ city }: { city: string }) {
  const citySlug = toSlug(city);
  const [mode, setMode] = useState<ExploreMode>("rent");

  const [rentResult, saleResult] = useQueries({
    queries: [
      {
        queryKey: ["city-trend-movers", citySlug, "rent"],
        queryFn: () => fetchCityMovers(citySlug, "rent"),
      },
      {
        queryKey: ["city-trend-movers", citySlug, "buy"],
        queryFn: () => fetchCityMovers(citySlug, "buy"),
      },
    ],
  });

  const isLoading = rentResult.isLoading || saleResult.isLoading;
  const isError = rentResult.isError && saleResult.isError;
  const rentData = rentResult.data;
  const saleData = saleResult.data;
  const data = mode === "rent" ? rentData : saleData;

  if (!isLoading && (isError || (!hasMovers(rentData) && !hasMovers(saleData)))) {
    return null;
  }

  return (
    <Card className="hidden lg:block">
      <CardHeader className="space-y-4 pb-2">
        <div>
          <CardTitle className="text-base">90-day movers</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{moversDescription(mode)}</p>
        </div>
        <Tabs value={mode} onValueChange={(value) => setMode(value === "buy" ? "buy" : "rent")}>
          <TabsList>
            <TabsTrigger value="rent">Rent</TabsTrigger>
            <TabsTrigger value="buy">Sale</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading movers…</p>
        ) : !hasMovers(data) ? (
          <p className="text-sm text-muted-foreground">
            No {mode === "rent" ? "rent" : "sale"} movers in this period.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            <MoverList title="Rising" items={data!.risers} city={city} />
            <MoverList title="Falling" items={data!.fallers} city={city} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
