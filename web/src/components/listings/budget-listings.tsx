"use client";

import { useQuery } from "@tanstack/react-query";

import { ListingCard } from "@/components/listings/listing-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useMarketLookup } from "@/hooks/use-market-lookup";
import { fetchListingsFromApi } from "@/lib/listings-client";
import type { ExploreMode, PropertyType } from "@/lib/types";

export function BudgetListingsPreview({
  mode,
  budget,
  city,
  propertyType,
}: {
  mode: ExploreMode;
  budget: number;
  city: string | null;
  propertyType: PropertyType | null;
}) {
  const { getMarket } = useMarketLookup();

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["budget-listings", mode, budget, city, propertyType],
    queryFn: () =>
      fetchListingsFromApi({
        mode,
        budget,
        city,
        propertyType,
        tier: "in",
        limit: 4,
      }),
    staleTime: 60_000,
  });

  if (isLoading) {
    return (
      <section className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="skeleton-stagger h-6 w-56" />
          <Skeleton className="skeleton-stagger h-4 w-72" style={{ animationDelay: "80ms" }} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="skeleton-stagger h-24 w-full rounded-2xl"
              style={{ animationDelay: `${160 + i * 120}ms` }}
            />
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <h2 className="font-heading text-lg font-medium">Active listings in budget</h2>
        <p className="text-sm text-muted-foreground">
          Sample properties from our scrape that match your criteria.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.map((listing) => (
          <ListingCard
            key={listing.listing_url}
            listing={listing}
            market={getMarket(listing.city, listing.suburb)}
          />
        ))}
      </div>
    </section>
  );
}
