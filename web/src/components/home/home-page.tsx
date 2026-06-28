"use client";

import Link from "next/link";
import { Suspense, useRef, useState } from "react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { PageHeader } from "@/components/layout/page-header";
import { BudgetListingsPreview } from "@/components/listings/budget-listings";
import { HomeBudgetBar } from "@/components/mobile/home-budget-bar";
import { SuburbCard } from "@/components/markets/suburb-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_CITY,
  DEFAULT_RENT_BUDGET,
  propertyTypesForMode,
  ROOM_BEDROOM_COUNT,
} from "@/lib/constants";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
import { propertyTypeLabel } from "@/lib/format";
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

  return (
    <div className="space-y-16">
      <section ref={budgetSectionRef} className="space-y-6">
        <PageHeader
          title="My budget"
          description="Set your rent or buy budget and property preferences to surface matching suburbs in Harare and beyond."
        />

        <Card>
          <CardContent className="space-y-8 pt-6">
            <div className="flex flex-wrap gap-2">
              {(["rent", "buy"] as const).map((option) => (
                <Button
                  key={option}
                  type="button"
                  size="sm"
                  variant={mode === option ? "default" : "outline"}
                  onClick={() => {
                    setMode(option);
                    setBudget(option === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET);
                    if (option === "buy" && propertyType === "room") {
                      setPropertyType(null);
                    }
                  }}
                >
                  {option === "rent" ? "I'm renting" : "I'm buying"}
                </Button>
              ))}
            </div>

            <BudgetSlider mode={mode} value={budget} onChange={setBudget} />

            <div className="space-y-3">
              <p className="caption-label">Property type</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={propertyType == null ? "default" : "outline"}
                  onClick={() => setPropertyType(null)}
                >
                  Any
                </Button>
                {propertyTypesForMode(mode).map((type) => (
                  <Button
                    key={type}
                    type="button"
                    size="sm"
                    variant={propertyType === type ? "default" : "outline"}
                    onClick={() =>
                      setPropertyType(
                        propertyType === type ? null : type === "room" ? "room" : type
                      )
                    }
                  >
                    {propertyTypeLabel(type)}
                  </Button>
                ))}
              </div>
            </div>

            <Link
              href={buildExploreHref(mode, budget, propertyType)}
              className={buttonVariants({ size: "lg" })}
            >
              See matching suburbs
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PageHeader title="Top matches in Harare" />
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
        ) : previewMarkets.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {previewMarkets.map((market) => (
              <SuburbCard
                key={market.market_id}
                market={market}
                mode={mode}
                badge="In budget"
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

      <BudgetListingsPreview
        mode={mode}
        budget={budget}
        city={DEFAULT_CITY}
        propertyType={propertyType}
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
