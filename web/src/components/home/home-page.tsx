"use client";

import Link from "next/link";
import { Suspense, useState } from "react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { PageHeader } from "@/components/layout/page-header";
import { SuburbCard } from "@/components/markets/suburb-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientOrbs } from "@/components/ui/gradient-orbs";
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
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border bg-card px-6 py-12 sm:px-10 sm:py-16">
        <GradientOrbs variants={["mint", "lavender", "peach"]} />
        <div className="relative z-10 mx-auto max-w-3xl space-y-5 text-center">
          <p className="caption-label">Zimbabwe property index</p>
          <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            Where can you afford in Zimbabwe?
          </h1>
          <p className="mx-auto max-w-xl text-[16px] leading-relaxed tracking-[0.16px] text-muted-foreground">
            Compare suburbs, filter by budget and property type, and pin up to three markets
            to compare side by side.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <PageHeader
          title="My budget"
          description="Set your rent or buy budget and property preferences to surface matching suburbs."
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
              className={buttonVariants({ size: "lg" })}
            >
              See matching suburbs
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PageHeader title="Top matches in your budget" />
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
              <Skeleton key={i} className="h-44 w-full rounded-2xl" />
            ))}
          </div>
        ) : previewMarkets.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {previewMarkets.map((market) => (
              <SuburbCard key={market.market_id} market={market} mode={mode} badge="In budget" />
            ))}
          </div>
        ) : (
          <p className="text-[15px] tracking-[0.15px] text-muted-foreground">
            No suburbs in budget yet — try adjusting your budget or property type filters.
          </p>
        )}
      </section>
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
