"use client";

import { useQuery } from "@tanstack/react-query";

import { ListingCard } from "@/components/listings/listing-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLandMarketById } from "@/hooks/use-market-data";
import { dedupeListingsByThumbnail } from "@/lib/listings";
import { fetchListingsFromApi } from "@/lib/listings-client";
import { formatPricePerSqm } from "@/lib/format";

export function SuburbLandListings({ marketId }: { marketId: string }) {
  const { data: landMarket } = useLandMarketById(marketId);
  const medianPps = landMarket?.median_price_per_sqm;

  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["suburb-listings-land", marketId, medianPps],
    queryFn: () =>
      fetchListingsFromApi({
        mode: "land",
        budget: medianPps ?? 0,
        marketId: landMarket!.market_id,
        city: landMarket!.city,
        suburb: landMarket!.suburb,
        tier: "value",
        medianPrice: medianPps,
        limit: 4,
      }),
    enabled: landMarket != null && medianPps != null && medianPps > 0,
    staleTime: 60_000,
  });

  if (!landMarket || medianPps == null || medianPps <= 0) return null;

  if (isLoading) {
    return (
      <section className="space-y-4">
        <Skeleton className="skeleton-stagger h-6 w-64" />
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="skeleton-stagger h-28 rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!listings.length) return null;

  return (
    <section className="space-y-3">
      <div>
        <h3 className="font-heading text-sm font-medium">Land for sale</h3>
        <p className="text-xs text-muted-foreground">
          Stands at or below the suburb median of {formatPricePerSqm(medianPps)} — sorted
          cheapest per sqm first.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {dedupeListingsByThumbnail(listings).map((listing) => (
          <ListingCard
            key={listing.listing_url}
            listing={listing}
            landMarket={landMarket}
          />
        ))}
      </div>
    </section>
  );
}
