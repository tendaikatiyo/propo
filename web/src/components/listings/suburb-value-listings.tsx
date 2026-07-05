"use client";

import { useQuery } from "@tanstack/react-query";

import { ListingCard } from "@/components/listings/listing-card";
import { Skeleton } from "@/components/ui/skeleton";
import { dedupeListingsByThumbnail } from "@/lib/listings";
import { fetchListingsFromApi } from "@/lib/listings-client";
import { formatCurrency } from "@/lib/format";
import {
  showsRentListings,
  showsSaleListings,
} from "@/lib/lens";
import type { ExploreMode, Listing, MarketMetric } from "@/lib/types";

function ListingsBlock({
  title,
  description,
  listings,
  market,
}: {
  title: string;
  description: string;
  listings: Listing[];
  market: MarketMetric;
}) {
  if (!listings.length) return null;

  return (
    <section className="space-y-3">
      <div>
        <h3 className="font-heading text-sm font-medium">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {dedupeListingsByThumbnail(listings).map((listing) => (
          <ListingCard key={listing.listing_url} listing={listing} market={market} />
        ))}
      </div>
    </section>
  );
}

export function SuburbValueListings({
  market,
  lens,
}: {
  market: MarketMetric;
  lens: ExploreMode;
}) {
  const showRent = showsRentListings(lens);
  const showSale = showsSaleListings(lens);
  const rentMedian = market.median_rent;
  const saleMedian = market.median_sale_price;

  const { data: rentListings = [], isLoading: loadingRent } = useQuery({
    queryKey: ["suburb-listings-rent", market.market_id, rentMedian],
    queryFn: () =>
      fetchListingsFromApi({
        mode: "rent",
        budget: rentMedian ?? 0,
        marketId: market.market_id,
        city: market.city,
        suburb: market.suburb,
        tier: "value",
        medianPrice: rentMedian,
        limit: 4,
      }),
    enabled: showRent && rentMedian != null && rentMedian > 0,
    staleTime: 60_000,
  });

  const { data: saleListings = [], isLoading: loadingSale } = useQuery({
    queryKey: ["suburb-listings-sale", market.market_id, saleMedian],
    queryFn: () =>
      fetchListingsFromApi({
        mode: "buy",
        budget: saleMedian ?? 0,
        marketId: market.market_id,
        city: market.city,
        suburb: market.suburb,
        tier: "value",
        medianPrice: saleMedian,
        limit: 4,
      }),
    enabled: showSale && saleMedian != null && saleMedian > 0,
    staleTime: 60_000,
  });

  const isLoading = (showRent && loadingRent) || (showSale && loadingSale);
  const hasAny =
    (showRent && rentListings.length > 0) || (showSale && saleListings.length > 0);

  if (!showRent && !showSale) return null;

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

  if (!hasAny) return null;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-heading text-lg font-medium">Good value listings</h2>
        <p className="text-sm text-muted-foreground">
          Active properties in {market.suburb} at or below the suburb median — sorted
          cheapest first.
        </p>
      </div>

      {showRent ? (
        <ListingsBlock
          title="Rentals"
          description={
            rentMedian != null
              ? `At or below median rent of ${formatCurrency(rentMedian)}.`
              : "Below suburb median rent."
          }
          listings={rentListings}
          market={market}
        />
      ) : null}

      {showSale ? (
        <ListingsBlock
          title="For sale"
          description={
            saleMedian != null
              ? `At or below median sale of ${formatCurrency(saleMedian)}.`
              : "Below suburb median sale price."
          }
          listings={saleListings}
          market={market}
        />
      ) : null}
    </section>
  );
}
