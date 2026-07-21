"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";

import { HomeInvestTeaser } from "@/components/home/home-invest-teaser";
import { HomeLandingHero } from "@/components/home/home-landing-hero";
import { HomeRecentlyViewed } from "@/components/home/home-recently-viewed";
import { HomeBudgetBar } from "@/components/mobile/home-budget-bar";
import { PageHeader } from "@/components/layout/page-header";
import { SuburbCard } from "@/components/markets/suburb-card";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { useMarketMetrics } from "@/hooks/use-market-data";
import { DEFAULT_CITY, ROOM_BEDROOM_COUNT } from "@/lib/constants";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
import { defaultBudgetForMode } from "@/lib/mode";
import type { ExploreMode, PropertyType } from "@/lib/types";

const INVEST_MODE: ExploreMode = "invest";

function buildExploreHref(budget: number, propertyType: PropertyType | null): string {
  const params = new URLSearchParams();
  params.set("mode", INVEST_MODE);
  params.set("budget", String(budget));
  params.set("city", DEFAULT_CITY);
  if (propertyType) {
    params.set("type", propertyType);
    if (propertyType === "room") params.set("bedroom", String(ROOM_BEDROOM_COUNT));
  }
  return `/explore?${params.toString()}`;
}

function HomeContent() {
  const { setLens } = useGlobalLens();
  const budgetSectionRef = useRef<HTMLElement>(null);
  const [budget, setBudget] = useState(() => defaultBudgetForMode(INVEST_MODE));
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);

  useEffect(() => {
    setLens(INVEST_MODE, { source: "home" });
  }, [setLens]);

  const { data: markets = [], isLoading } = useMarketMetrics();

  const exploreFilters = {
    mode: INVEST_MODE,
    budget,
    city: DEFAULT_CITY,
    propertyType,
    bedroom: propertyType === "room" ? ROOM_BEDROOM_COUNT : null,
    includeLowConfidence: false,
    hideSuburbMedianFallback: true,
  };

  const exploreHref = buildExploreHref(budget, propertyType);

  const residentialPreview = rankExploreResults(
    filterMarkets(markets, exploreFilters).inBudget,
    INVEST_MODE,
    exploreFilters
  ).slice(0, 6);

  return (
    <div className="flex flex-col">
      <HomeLandingHero
        sectionRef={budgetSectionRef}
        budget={budget}
        propertyType={propertyType}
        exploreHref={exploreHref}
        onBudgetChange={setBudget}
        onPropertyTypeChange={setPropertyType}
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 pb-24 sm:px-6 lg:px-8 lg:pb-10">
        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <PageHeader title="Top yield matches in Harare" />
            <Link href={exploreHref} className={buttonVariants({ variant: "outline", size: "sm" })}>
              View all
            </Link>
          </div>
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-44 w-full rounded-2xl" />
              ))}
            </div>
          ) : residentialPreview.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {residentialPreview.map((market) => (
                <SuburbCard
                  key={market.market_id}
                  market={market}
                  mode={INVEST_MODE}
                  badge="In budget"
                  clickSource="home_card"
                  filters={{
                    propertyType,
                    bedroom: propertyType === "room" ? ROOM_BEDROOM_COUNT : null,
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
              No suburbs in budget yet — try adjusting your budget or property type filters.
            </p>
          )}
        </section>

        <HomeRecentlyViewed />

        <HomeInvestTeaser />
      </div>

      <HomeBudgetBar
        mode={INVEST_MODE}
        budget={budget}
        propertyType={propertyType}
        observeRef={budgetSectionRef}
      />
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
