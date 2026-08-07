"use client";

import { Suspense } from "react";

import { ExploreSurfaceTabs } from "@/components/explore/explore-surface-tabs";
import { ExploreFilterSidebar } from "@/components/filters/filter-bar";
import { BackLink } from "@/components/layout/back-nav";
import { TableSkeleton } from "@/components/layout/page-loading";
import { PageHeader } from "@/components/layout/page-header";
import { ExploreResults } from "@/components/markets/explore-results";
import { Skeleton } from "@/components/ui/skeleton";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { isLandMode } from "@/lib/mode";

function ExploreHeader() {
  const { filters } = useExploreFilters();
  const land = isLandMode(filters.mode);

  return (
    <div className="space-y-5">
      <PageHeader
        title={land ? "Explore land" : "Explore suburbs"}
        description={
          land
            ? "Optional $/sqm budget and city filters. Open a suburb for the full land market snapshot."
            : "Browse the suburb directory. Filters are optional — open a profile for rent, sale, land, and yield."
        }
      />
      <ExploreSurfaceTabs />
    </div>
  );
}

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
      <Suspense fallback={<Skeleton className="h-28 w-full max-w-xl" />}>
        <ExploreHeader />
      </Suspense>
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
