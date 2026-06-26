"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CityListRow } from "@/components/mobile/city-list-row";
import { cityListingTotal, sortCitiesByMarketSize } from "@/lib/geo";
import { formatCurrency, formatPercent } from "@/lib/format";
import { cityPath } from "@/lib/slug";
import type { CityMetric } from "@/lib/types";

export function CitiesDirectoryClient({ cities }: { cities: CityMetric[] }) {
  const [query, setQuery] = useState("");

  const sorted = useMemo(() => sortCitiesByMarketSize(cities), [cities]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((c) => c.city.toLowerCase().includes(q));
  }, [sorted, query]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search cities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="lg:hidden overflow-hidden rounded-2xl border border-border/80 bg-card">
        {filtered.map((city) => (
          <CityListRow key={city.city} city={city} />
        ))}
      </div>

      <div className="hidden gap-4 sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {filtered.map((city) => {
          const total = cityListingTotal(city);
          const isLarge = total >= 100;
          return (
            <Link key={city.city} href={cityPath(city.city)} className="group">
              <Card
                className={
                  isLarge
                    ? "h-full transition-shadow group-hover:shadow-[var(--shadow-card)] lg:col-span-1"
                    : "h-full transition-shadow group-hover:shadow-[var(--shadow-card)]"
                }
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className={isLarge ? "text-xl" : "text-base"}>
                      {city.city}
                    </CardTitle>
                    <span className="font-mono text-xs text-muted-foreground">
                      {total} listings
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1.5 text-[15px] tracking-[0.15px] text-muted-foreground">
                  <p>
                    <span className="font-mono text-foreground">{city.suburb_count}</span>{" "}
                    suburbs
                  </p>
                  <p>
                    Median rent{" "}
                    <span className="font-stat text-foreground">
                      {formatCurrency(city.median_rent)}
                    </span>
                  </p>
                  <p>
                    Median sale{" "}
                    <span className="font-stat text-foreground">
                      {formatCurrency(city.median_sale_price)}
                    </span>
                  </p>
                  <p>
                    Avg yield{" "}
                    <span className="font-stat text-foreground">
                      {formatPercent(city.average_yield)}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {!filtered.length ? (
        <p className="text-muted-foreground">No cities match your search.</p>
      ) : null}
    </div>
  );
}
