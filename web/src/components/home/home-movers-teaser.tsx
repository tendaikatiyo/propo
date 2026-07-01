"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { formatPctChange } from "@/lib/trends";
import { suburbPath } from "@/lib/slug";
import type { MarketMoversRankingsPayload } from "@/lib/types";

async function fetchMoversTeaser(): Promise<MarketMoversRankingsPayload> {
  const res = await fetch("/api/rankings/movers?limit=3");
  if (!res.ok) throw new Error("Failed to load movers");
  return res.json() as Promise<MarketMoversRankingsPayload>;
}

export function HomeMoversTeaser() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home-movers-teaser"],
    queryFn: fetchMoversTeaser,
    staleTime: 60 * 60 * 1000,
  });

  if (isLoading || isError || !data?.rent_risers.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Biggest rent movers this quarter
          </h2>
          <p className="mt-1 text-[15px] tracking-[0.15px] text-muted-foreground">
            Suburbs where median rent changed most over the last 90 days.
          </p>
        </div>
        <Link href="/rankings?tab=movers" className={buttonVariants({ variant: "outline", size: "sm" })}>
          All movers
        </Link>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Rent risers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {data.rent_risers.map((item) => (
            <Link
              key={item.market_id}
              href={suburbPath(item.city, item.suburb)}
              className="flex items-center justify-between rounded-xl px-2 py-2 text-sm hover:bg-muted/50"
            >
              <span>
                <span className="font-medium">{sanitizeLabel(item.suburb)}</span>
                <span className="text-muted-foreground"> · {item.city}</span>
              </span>
              <span className="font-mono text-muted-foreground">
                {formatPctChange(item.pct_change_median)} · {formatCurrency(item.median_price)}
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
