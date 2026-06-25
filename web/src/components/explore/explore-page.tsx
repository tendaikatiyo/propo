"use client";

import { Suspense } from "react";

import { FilterBar } from "@/components/filters/filter-bar";
import { ExploreResults } from "@/components/markets/explore-results";
import { Skeleton } from "@/components/ui/skeleton";

function ExploreContent() {
  return (
    <>
      <FilterBar />
      <div className="space-y-6 px-4 sm:px-6 lg:px-8">
        <ExploreResults />
      </div>
    </>
  );
}

export function ExplorePageClient() {
  return (
    <div className="-mx-4 space-y-6 sm:-mx-6 lg:-mx-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight">Explore suburbs</h1>
        <p className="text-muted-foreground">
          Filter by rent or buy budget, city, and property type to find markets that fit.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="space-y-4 px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
    </div>
  );
}
