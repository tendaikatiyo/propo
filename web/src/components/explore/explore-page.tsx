"use client";

import { Suspense } from "react";

import {
  ExploreFilterMobile,
  ExploreFilterSidebar,
} from "@/components/filters/filter-bar";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
import { ExploreResults } from "@/components/markets/explore-results";
import { Skeleton } from "@/components/ui/skeleton";

function ExploreContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <ExploreFilterSidebar />
      <div className="min-w-0 space-y-6">
        <ExploreFilterMobile />
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
          <div className="space-y-4">
            <Skeleton className="h-24 w-full rounded-2xl" />
            <Skeleton className="h-64 w-full rounded-2xl" />
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
    </div>
  );
}
