"use client";

import Link from "next/link";
import { Suspense, useState } from "react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { SuburbCard } from "@/components/markets/suburb-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketMetrics } from "@/hooks/use-market-data";
import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_RENT_BUDGET,
  PROPERTY_TYPES,
} from "@/lib/constants";
import { filterMarkets, rankExploreResults } from "@/lib/explore";
import { propertyTypeLabel } from "@/lib/format";
import type { ExploreMode, PropertyType } from "@/lib/types";

function buildExploreHref(
  mode: ExploreMode,
  budget: number,
  propertyTypes: PropertyType[]
): string {
  const params = new URLSearchParams();
  params.set("mode", mode);
  params.set("budget", String(budget));
  if (propertyTypes.length) params.set("types", propertyTypes.join(","));
  return `/explore?${params.toString()}`;
}

function HomeContent() {
  const [mode, setMode] = useState<ExploreMode>("rent");
  const [budget, setBudget] = useState(DEFAULT_RENT_BUDGET);
  const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([]);
  const { data: markets = [], isLoading } = useMarketMetrics();

  const previewMarkets = rankExploreResults(
    filterMarkets(markets, {
      mode,
      budget,
      city: null,
      propertyTypes,
      bedroom: null,
      includeLowConfidence: false,
    }).inBudget
  ).slice(0, 6);

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Where can you afford in Zimbabwe?
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A property data index — compare suburbs, filter by budget and property type, and pin
          up to three markets to compare side by side.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>My budget</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2">
            {(["rent", "buy"] as const).map((option) => (
              <Button
                key={option}
                type="button"
                size="sm"
                variant={mode === option ? "default" : "outline"}
                onClick={() => {
                  setMode(option);
                  setBudget(option === "rent" ? DEFAULT_RENT_BUDGET : DEFAULT_BUY_BUDGET);
                }}
              >
                {option === "rent" ? "I'm renting" : "I'm buying"}
              </Button>
            ))}
          </div>

          <BudgetSlider mode={mode} value={budget} onChange={setBudget} />

          <div className="space-y-2">
            <p className="text-sm font-medium">Property type</p>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((type) => {
                const active = propertyTypes.includes(type);
                return (
                  <Button
                    key={type}
                    type="button"
                    size="sm"
                    variant={active ? "default" : "outline"}
                    onClick={() => {
                      setPropertyTypes((prev) =>
                        active ? prev.filter((t) => t !== type) : [...prev, type]
                      );
                    }}
                  >
                    {propertyTypeLabel(type)}
                  </Button>
                );
              })}
            </div>
          </div>

          <Link
            href={buildExploreHref(mode, budget, propertyTypes)}
            className={buttonVariants()}
          >
            See matching suburbs
          </Link>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Top matches in your budget</h2>
          <Link
            href={buildExploreHref(mode, budget, propertyTypes)}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            View all
          </Link>
        </div>
        {isLoading ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        ) : previewMarkets.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {previewMarkets.map((market) => (
              <SuburbCard key={market.market_id} market={market} mode={mode} badge="In budget" />
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No suburbs in budget yet — try adjusting your budget or property type filters.
          </p>
        )}
      </section>
    </div>
  );
}

export function HomePageClient() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <HomeContent />
    </Suspense>
  );
}
