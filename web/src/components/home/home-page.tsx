"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";

import { AffordabilityInsights } from "@/components/home/affordability-insights";
import { HomeInvestTeaser } from "@/components/home/home-invest-teaser";
import { HomeLandingHero } from "@/components/home/home-landing-hero";
import { HomeMoversTeaser } from "@/components/home/home-movers-teaser";
import { HomeRecentlyViewed } from "@/components/home/home-recently-viewed";
import { BudgetListingsPreview } from "@/components/listings/budget-listings";
import { HomeBudgetBar } from "@/components/mobile/home-budget-bar";
import { PageHeader } from "@/components/layout/page-header";
import { LandSuburbCard } from "@/components/markets/land-suburb-card";
import { SuburbCard } from "@/components/markets/suburb-card";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlobalLens } from "@/components/providers/lens-provider";
import { useLandMetrics, useMarketMetrics } from "@/hooks/use-market-data";
import { DEFAULT_CITY, ROOM_BEDROOM_COUNT } from "@/lib/constants";
import { budgetForMode } from "@/lib/explore";
import { filterLandMarkets, rankLandExploreResults } from "@/lib/land-explore";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
import { defaultBudgetForMode, isInvestMode, isLandMode } from "@/lib/mode";
import type { ExploreMode, PropertyType } from "@/lib/types";

function buildExploreHref(
  mode: ExploreMode,
  budget: number,
  propertyType: PropertyType | null
): string {
  const params = new URLSearchParams();
  params.set("mode", mode);
  params.set("budget", String(budget));
  params.set("city", DEFAULT_CITY);
  if (propertyType && !isLandMode(mode)) {
    params.set("type", propertyType);
    if (propertyType === "room") params.set("bedroom", String(ROOM_BEDROOM_COUNT));
  }
  return `/explore?${params.toString()}`;
}

function HomeContent() {
  const { lens: mode, setLens } = useGlobalLens();
  const budgetSectionRef = useRef<HTMLElement>(null);
  const [budget, setBudget] = useState(() => defaultBudgetForMode(mode));
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);

  useEffect(() => {
    setBudget((current) => budgetForMode(mode, current));
    if (mode === "buy" || mode === "invest") {
      setPropertyType((current) =>
        current === "room" || current === "cottage" ? null : current
      );
    }
    if (isLandMode(mode)) {
      setPropertyType(null);
    }
  }, [mode]);
  const land = isLandMode(mode);
  const invest = isInvestMode(mode);
  const { data: markets = [], isLoading: residentialLoading } = useMarketMetrics({
    enabled: !land,
  });
  const { data: landMarkets = [], isLoading: landLoading } = useLandMetrics({
    enabled: land,
  });
  const isLoading = land ? landLoading : residentialLoading;

  const exploreFilters = {
    mode,
    budget,
    city: DEFAULT_CITY,
    propertyType: land ? null : propertyType,
    bedroom: !land && propertyType === "room" ? ROOM_BEDROOM_COUNT : null,
    includeLowConfidence: false,
    hideSuburbMedianFallback: true,
  };

  const exploreHref = buildExploreHref(mode, budget, propertyType);

  const residentialPreview = !land
    ? rankExploreResults(
        filterMarkets(markets, exploreFilters).inBudget,
        mode,
        exploreFilters
      ).slice(0, 6)
    : [];
  const landPreview = land
    ? rankLandExploreResults(filterLandMarkets(landMarkets, exploreFilters).inBudget).slice(0, 6)
    : [];
  const hasPreview = land ? landPreview.length > 0 : residentialPreview.length > 0;

  function handleModeChange(nextMode: ExploreMode, defaultBudget: number) {
    setLens(nextMode, { source: "home" });
    setBudget(budgetForMode(nextMode, defaultBudget));
    if (nextMode === "buy" && (propertyType === "room" || propertyType === "cottage")) {
      setPropertyType(null);
    }
    if (nextMode === "invest" && (propertyType === "room" || propertyType === "cottage")) {
      setPropertyType(null);
    }
    if (isLandMode(nextMode)) {
      setPropertyType(null);
    }
  }

  return (
    <div className="flex flex-col">
      <HomeLandingHero
        sectionRef={budgetSectionRef}
        mode={mode}
        budget={budget}
        propertyType={propertyType}
        exploreHref={exploreHref}
        onModeChange={handleModeChange}
        onBudgetChange={setBudget}
        onPropertyTypeChange={setPropertyType}
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 pb-24 sm:px-6 lg:px-8 lg:pb-10">
        {!land && !invest ? (
          <AffordabilityInsights
            markets={markets}
            isLoading={isLoading}
            filters={exploreFilters}
          />
        ) : null}

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <PageHeader
              title={
                land
                  ? "Top land matches in Harare"
                  : invest
                    ? "Top yield matches in Harare"
                    : "Top matches in Harare"
              }
            />
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
          ) : hasPreview ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {land
                ? landPreview.map((market) => (
                    <LandSuburbCard
                      key={market.market_id}
                      market={market}
                      badge="In budget"
                      clickSource="home_card"
                    />
                  ))
                : residentialPreview.map((market) => (
                    <SuburbCard
                      key={market.market_id}
                      market={market}
                      mode={mode}
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
              {land
                ? "No land suburbs in budget yet — try raising your $/sqm budget or pick another city on Explore."
                : "No suburbs in budget yet — try adjusting your budget or property type filters."}
            </p>
          )}
        </section>

        <HomeRecentlyViewed />

        {!land && !invest ? <HomeMoversTeaser /> : null}

        {!invest ? (
          <BudgetListingsPreview
            mode={mode}
            budget={budget}
            city={DEFAULT_CITY}
            propertyType={land ? null : propertyType}
          />
        ) : null}

        {invest ? <HomeInvestTeaser /> : null}
      </div>

      <HomeBudgetBar
        mode={mode}
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
