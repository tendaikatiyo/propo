"use client";

import { Suspense } from "react";

import {
  ExploreFilterSidebar,
} from "@/components/filters/filter-bar";
import { BackLink } from "@/components/layout/back-nav";
import { TableSkeleton } from "@/components/layout/page-loading";
import { PageHeader } from "@/components/layout/page-header";
import { ExploreResults } from "@/components/markets/explore-results";
import { Skeleton } from "@/components/ui/skeleton";

function ExploreContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <ExploreFilterSidebar />
      <div className="min-w-0 space-y-6">
        <ExploreResults />
      </div>
    </div>
  );
}

export function ExplorePageClient() {
  return (
    <div className="space-y-8">
      <BackLink href="/" label="Back to home" />
      <PageHeader
        title="Explore suburbs"
        description="Filter by rent or buy budget, city, and property type to find markets that fit."
      />
      <Suspense
        fallback={
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <Skeleton className="skeleton-stagger hidden h-96 rounded-2xl lg:block" />
            <div className="space-y-6">
              <TableSkeleton rows={5} delayMs={180} />
            </div>
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
    </div>
  );
}
