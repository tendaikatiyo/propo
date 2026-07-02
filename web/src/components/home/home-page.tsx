"use client";

import Link from "next/link";
import { Suspense, useRef, useState } from "react";

import { AffordabilityInsights } from "@/components/home/affordability-insights";
import { HomeLandingHero } from "@/components/home/home-landing-hero";
import { HomeMoversTeaser } from "@/components/home/home-movers-teaser";
import { BudgetListingsPreview } from "@/components/listings/budget-listings";
import { HomeBudgetBar } from "@/components/mobile/home-budget-bar";
import { PageHeader } from "@/components/layout/page-header";
import { SuburbCard } from "@/components/markets/suburb-card";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_CITY,
  DEFAULT_RENT_BUDGET,
  ROOM_BEDROOM_COUNT,
} from "@/lib/constants";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
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
  if (propertyType) {
    params.set("type", propertyType);
    if (propertyType === "room") params.set("bedroom", String(ROOM_BEDROOM_COUNT));
  }
  return `/explore?${params.toString()}`;
}

function HomeContent() {
  const budgetSectionRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<ExploreMode>("rent");
  const [budget, setBudget] = useState(DEFAULT_RENT_BUDGET);
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);
  const { data: markets = [], isLoading } = useMarketMetrics();

  const exploreHref = buildExploreHref(mode, budget, propertyType);

  const previewMarkets = rankExploreResults(
    filterMarkets(markets, {
      mode,
      budget,
      city: DEFAULT_CITY,
      propertyType,
      bedroom: propertyType === "room" ? ROOM_BEDROOM_COUNT : null,
      includeLowConfidence: false,
      hideSuburbMedianFallback: true,
    }).inBudget,
    mode,
    { propertyType, bedroom: propertyType === "room" ? ROOM_BEDROOM_COUNT : null }
  ).slice(0, 6);

  function handleModeChange(next: ExploreMode) {
    setMode(next);
    setBudget(next === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET);
    if (next === "buy" && propertyType === "room") {
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
        <AffordabilityInsights
          markets={markets}
          isLoading={isLoading}
          filters={{
            mode,
            budget,
            city: DEFAULT_CITY,
            propertyType,
            bedroom: propertyType === "room" ? ROOM_BEDROOM_COUNT : null,
            includeLowConfidence: false,
            hideSuburbMedianFallback: true,
          }}
        />

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <PageHeader title="Top matches in Harare" />
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
          ) : previewMarkets.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {previewMarkets.map((market) => (
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
              No suburbs in budget yet — try adjusting your budget or property type filters.
            </p>
          )}
        </section>

        <HomeMoversTeaser />

        <BudgetListingsPreview
          mode={mode}
          budget={budget}
          city={DEFAULT_CITY}
          propertyType={propertyType}
        />
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
