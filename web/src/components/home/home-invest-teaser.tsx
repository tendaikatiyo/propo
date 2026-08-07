"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPercent, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { RankingEntry } from "@/lib/types";

interface RankingsResponse {
  national: Record<string, RankingEntry[]>;
}

async function fetchInvestRankings(): Promise<RankingsResponse> {
  const res = await fetch("/api/rankings");
  if (!res.ok) throw new Error("Failed to load rankings");
  return res.json() as Promise<RankingsResponse>;
}

export function HomeInvestTeaser() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["home-invest-teaser"],
    queryFn: fetchInvestRankings,
    staleTime: 60 * 60 * 1000,
  });

  const yieldMarkets = data?.national?.top_yield_markets?.slice(0, 3) ?? [];

  if (isLoading) {
    return (
      <section className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-44 w-full rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (isError || !yieldMarkets.length) return null;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Top yield markets
          </h2>
          <p className="mt-1 text-[15px] tracking-[0.15px] text-muted-foreground">
            National yield leaders — another way into suburb profiles.
          </p>
        </div>
        <Link
          href="/rankings"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          All rankings
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {yieldMarkets.map((item) => (
          <Link
            key={item.market_id}
            href={suburbPath(item.city, item.suburb)}
            className="rounded-2xl border border-border/80 bg-card p-4 transition-shadow hover:shadow-[var(--shadow-card)]"
          >
            <p className="font-heading font-medium">{sanitizeLabel(item.suburb)}</p>
            <p className="text-sm text-muted-foreground">{item.city}</p>
            <p className="font-stat mt-2 text-lg font-medium">
              {formatPercent(item.yield_percent ?? null)} yield
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
