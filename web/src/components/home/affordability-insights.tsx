"use client";

import Link from "next/link";
import { useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  buildAffordabilityInsights,
  exploreHrefForFilters,
  insightHeadline,
  insightPriceCaption,
} from "@/lib/affordability-insights";
import { formatCurrency, sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import type { ExploreFilters } from "@/lib/types";
import type { MarketMetric } from "@/lib/types";

export function AffordabilityInsights({
  markets,
  filters,
  isLoading,
}: {
  markets: MarketMetric[];
  filters: ExploreFilters;
  isLoading?: boolean;
}) {
  const insights = useMemo(
    () => buildAffordabilityInsights(markets, filters),
    [markets, filters]
  );
  const exploreHref = exploreHrefForFilters(filters);
  const priceCaption = insightPriceCaption(filters.mode, filters);

  if (isLoading) {
    return (
      <section className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!insights.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Budget insights
          </h2>
          <p className="mt-1 text-[15px] tracking-[0.15px] text-muted-foreground">
            {insightHeadline(filters.mode, filters.budget, filters)}
          </p>
        </div>
        <Link href={exploreHref} className={buttonVariants({ variant: "outline", size: "sm" })}>
          Explore matches
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((insight) => {
          const segmentQuery = {
            type: filters.propertyType,
            bedroom: filters.bedroom,
          };
          const href = suburbPath(insight.market.city, insight.market.suburb, segmentQuery);

          return (
            <Link key={`${insight.kind}-${insight.market.market_id}`} href={href}>
              <Card className="h-full transition-colors hover:bg-muted/30">
                <CardContent className="space-y-3 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-heading text-lg font-medium">
                      {sanitizeLabel(insight.market.suburb)}
                    </p>
                    <Badge variant={insight.kind === "in_budget" ? "success" : "outline"}>
                      {insight.badgeLabel}
                    </Badge>
                  </div>
                  <p className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
                    <span className="font-stat font-medium text-foreground">
                      {formatCurrency(insight.price)}
                    </span>{" "}
                    {priceCaption}
                    <span aria-hidden="true"> · </span>
                    {insight.detailCopy}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
