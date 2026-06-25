"use client";

import Image from "next/image";
import { ExternalLink, Home } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency, propertyTypeLabel, sanitizeLabel } from "@/lib/format";
import type { ExploreMode, Listing, PropertyType } from "@/lib/types";

async function fetchBudgetListings(params: {
  mode: ExploreMode;
  budget: number;
  city: string | null;
  propertyType: PropertyType | null;
}) {
  const qs = new URLSearchParams();
  qs.set("mode", params.mode);
  qs.set("budget", String(params.budget));
  if (params.city) qs.set("city", params.city);
  if (params.propertyType) qs.set("type", params.propertyType);
  qs.set("limit", "4");

  const res = await fetch(`/api/listings?${qs.toString()}`);
  if (!res.ok) throw new Error("Failed to load listings");
  return res.json() as Promise<Listing[]>;
}

function ListingThumbnail({ listing }: { listing: Listing }) {
  const imageUrl = listing.image_url ?? listing.agency_logo;

  if (imageUrl) {
    return (
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="96px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-muted to-muted/40">
      <Home className="size-5 text-muted-foreground/70" aria-hidden />
    </div>
  );
}

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
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["budget-listings", mode, budget, city, propertyType],
    queryFn: () => fetchBudgetListings({ mode, budget, city, propertyType }),
    staleTime: 60_000,
  });

  if (isLoading) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-2xl" />
        ))}
      </div>
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
          <Card key={listing.listing_url} className="h-full overflow-hidden">
            <CardContent className="flex gap-3 p-4">
              <ListingThumbnail listing={listing} />
              <div className="min-w-0 flex-1 space-y-1.5">
                <p className="line-clamp-2 text-sm font-medium leading-snug">
                  {listing.title ? sanitizeLabel(listing.title) : "Listing"}
                </p>
                <p className="font-stat text-base font-medium">{formatCurrency(listing.price)}</p>
                <p className="line-clamp-1 text-xs text-muted-foreground">
                  {[listing.suburb, listing.city].filter(Boolean).join(", ")}
                  {listing.property_type
                    ? ` · ${propertyTypeLabel(listing.property_type)}`
                    : null}
                  {listing.bedrooms != null ? ` · ${listing.bedrooms} bed` : null}
                </p>
                <a
                  href={listing.listing_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline"
                >
                  View listing
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
