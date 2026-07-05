"use client";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { motionRow } from "@/lib/motion";
import { formatPctChange } from "@/lib/trends";
import { suburbPath, toSlug } from "@/lib/slug";
import type { CityTrendMoversPayload, ExploreMode } from "@/lib/types";
import { cn } from "@/lib/utils";

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
  lens,
}: {
  title: string;
  items: CityTrendMoversPayload["risers"];
  city: string;
  lens: ExploreMode;
}) {
  if (!items.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.market_id}>
            <Link
              href={suburbPath(city, item.suburb, { mode: lens })}
              className={cn(
                motionRow,
                "flex items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:bg-muted/50"
              )}
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

function moversDescription(lens: ExploreMode): string {
  if (lens === "rent") {
    return "Suburbs with the largest median rent changes from daily snapshots.";
  }
  if (lens === "buy") {
    return "Suburbs with the largest median sale price changes from daily snapshots.";
  }
  return "Suburbs with the largest median rent and sale price changes from daily snapshots.";
}

function MoversGrid({
  data,
  city,
  lens,
}: {
  data: CityTrendMoversPayload | undefined;
  city: string;
  lens: ExploreMode;
}) {
  if (!hasMovers(data)) {
    const label = lens === "buy" ? "sale" : "rent";
    return (
      <p className="text-sm text-muted-foreground">No {label} movers in this period.</p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <MoverList title="Rising" items={data!.risers} city={city} lens={lens} />
      <MoverList title="Falling" items={data!.fallers} city={city} lens={lens} />
    </div>
  );
}

export function CityTrendMovers({ city, lens }: { city: string; lens: ExploreMode }) {
  const citySlug = toSlug(city);
  const showRent = lens === "rent" || lens === "invest";
  const showSale = lens === "buy" || lens === "invest";

  const [rentResult, saleResult] = useQueries({
    queries: [
      {
        queryKey: ["city-trend-movers", citySlug, "rent"],
        queryFn: () => fetchCityMovers(citySlug, "rent"),
        enabled: showRent,
      },
      {
        queryKey: ["city-trend-movers", citySlug, "buy"],
        queryFn: () => fetchCityMovers(citySlug, "buy"),
        enabled: showSale,
      },
    ],
  });

  const isLoading =
    (showRent && rentResult.isLoading) || (showSale && saleResult.isLoading);
  const rentData = rentResult.data;
  const saleData = saleResult.data;

  const hasVisibleMovers =
    (showRent && hasMovers(rentData)) || (showSale && hasMovers(saleData));

  if (!isLoading && !hasVisibleMovers) {
    return null;
  }

  return (
    <Card className="hidden lg:block">
      <CardHeader className="space-y-4 pb-2">
        <div>
          <CardTitle className="text-base">90-day movers</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{moversDescription(lens)}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading movers…</p>
        ) : lens === "invest" ? (
          <>
            {showRent && hasMovers(rentData) ? (
              <div className="space-y-4">
                <p className="caption-label normal-case">Rent</p>
                <MoversGrid data={rentData} city={city} lens="rent" />
              </div>
            ) : null}
            {showSale && hasMovers(saleData) ? (
              <div className="space-y-4">
                <p className="caption-label normal-case">Sale</p>
                <MoversGrid data={saleData} city={city} lens="buy" />
              </div>
            ) : null}
          </>
        ) : (
          <MoversGrid
            data={lens === "buy" ? saleData : rentData}
            city={city}
            lens={lens}
          />
        )}
      </CardContent>
    </Card>
  );
}
