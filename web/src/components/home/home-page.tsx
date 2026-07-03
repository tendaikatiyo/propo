"use client";

import Link from "next/link";
import { Suspense, useRef, useState } from "react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { PageHeader } from "@/components/layout/page-header";
import { AffordabilityInsights } from "@/components/home/affordability-insights";
import { BudgetListingsPreview } from "@/components/listings/budget-listings";
import { HomeMoversTeaser } from "@/components/home/home-movers-teaser";
import { HomeBudgetBar } from "@/components/mobile/home-budget-bar";
import { LandSuburbCard } from "@/components/markets/land-suburb-card";
import { SuburbCard } from "@/components/markets/suburb-card";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLandMetrics, useMarketMetrics } from "@/hooks/use-market-data";
import { DEFAULT_CITY, ROOM_BEDROOM_COUNT } from "@/lib/constants";
import { budgetForMode } from "@/lib/explore";
import { filterLandMarkets, rankLandExploreResults } from "@/lib/land-explore";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
import { defaultBudgetForMode, isLandMode } from "@/lib/mode";
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
  const budgetSectionRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<ExploreMode>("rent");
  const [budget, setBudget] = useState(defaultBudgetForMode("rent"));
  const [propertyType, setPropertyType] = useState<PropertyType | null>(null);
  const land = isLandMode(mode);
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

  return (
    <div className="space-y-16">
      <section ref={budgetSectionRef} className="space-y-6">
        <PageHeader
          title="My budget"
          description={
            land
              ? "Set your land budget per square metre to surface matching suburbs in Harare and beyond."
              : "Set your rent or buy budget and property preferences to surface matching suburbs in Harare and beyond."
          }
        />

        <Card>
          <CardContent className="space-y-8 pt-6">
            <ExploreModeToggle
              value={mode}
              onChange={(nextMode, defaultBudget) => {
                setMode(nextMode);
                setBudget(budgetForMode(nextMode, defaultBudget));
                if (nextMode === "buy" && propertyType === "room") {
                  setPropertyType(null);
                }
                if (isLandMode(nextMode)) {
                  setPropertyType(null);
                }
              }}
            />

            <BudgetSlider mode={mode} value={budget} onChange={setBudget} />

            {!land ? (
              <div className="space-y-3">
                <p className="caption-label">Property type</p>
                <PropertyTypeButtons
                  mode={mode}
                  value={propertyType}
                  onChange={setPropertyType}
                />
              </div>
            ) : null}

            <Link
              href={buildExploreHref(mode, budget, propertyType)}
              className={buttonVariants({ size: "lg" })}
            >
              See matching suburbs
            </Link>
          </CardContent>
        </Card>
      </section>

      {!land ? (
        <AffordabilityInsights
          markets={markets}
          isLoading={isLoading}
          filters={exploreFilters}
        />
      ) : null}

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PageHeader
            title={land ? "Top land matches in Harare" : "Top matches in Harare"}
          />
          <Link
            href={buildExploreHref(mode, budget, propertyType)}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
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

      {!land ? <HomeMoversTeaser /> : null}

      <BudgetListingsPreview
        mode={mode}
        budget={budget}
        city={DEFAULT_CITY}
        propertyType={land ? null : propertyType}
      />

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
    <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
      <HomeContent />
    </Suspense>
  );
}
