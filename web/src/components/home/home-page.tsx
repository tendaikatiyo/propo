"use client";

import Link from "next/link";
import { Suspense } from "react";

import { HomeInvestTeaser } from "@/components/home/home-invest-teaser";
import { HomeLandingHero } from "@/components/home/home-landing-hero";
import { HomeMoversTeaser } from "@/components/home/home-movers-teaser";
import { HomeRecentlyViewed } from "@/components/home/home-recently-viewed";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { cn } from "@/lib/utils";

function HomeContent() {
  const { data: markets = [] } = useMarketMetrics();

  const suggestions = markets.map((market) => ({
    market_id: market.market_id,
    city: market.city,
    suburb: market.suburb,
  }));

  return (
    <div className="flex flex-col">
      <HomeLandingHero suggestions={suggestions} />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 pb-24 sm:px-6 lg:px-8 lg:pb-10">
        <HomeRecentlyViewed />

        <HomeMoversTeaser />

        <HomeInvestTeaser />

        <section className="rounded-2xl border border-border/80 bg-card px-6 py-8 text-center sm:px-10">
          <h2 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
            Not sure which suburb?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] tracking-[0.15px] text-muted-foreground">
            Explore is a suburb directory (and a Land tab for $/sqm). Use it when you want to
            browse instead of look up.
          </p>
          <Link
            href="/explore?city=all"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Open Explore
          </Link>
        </section>
      </div>
    </div>
  );
}

export function HomePageClient() {
  return (
    <Suspense fallback={<Skeleton className="h-screen w-full" />}>
      <HomeContent />
    </Suspense>
  );
}
