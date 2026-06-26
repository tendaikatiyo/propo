"use client";

import Image from "next/image";
import { ExternalLink, Home } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency, propertyTypeLabel, sanitizeLabel } from "@/lib/format";
import type { Listing, PropertyType } from "@/lib/types";

export function ListingThumbnail({ listing }: { listing: Listing }) {
  const imageUrl = listing.image_url ?? listing.agency_logo;

  if (imageUrl) {
    return (
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-muted">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="80px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-gradient-to-br from-muted to-muted/40">
      <Home className="size-4 text-muted-foreground/70" aria-hidden />
    </div>
  );
}

export function ListingCard({
  listing,
  compact = false,
}: {
  listing: Listing;
  compact?: boolean;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className={compact ? "flex gap-2.5 p-3" : "flex gap-3 p-4"}>
        <ListingThumbnail listing={listing} />
        <div className="min-w-0 flex-1 space-y-1">
          <p
            className={
              compact
                ? "line-clamp-2 text-xs font-medium leading-snug"
                : "line-clamp-2 text-sm font-medium leading-snug"
            }
          >
            {listing.title ? sanitizeLabel(listing.title) : "Listing"}
          </p>
          <p className={compact ? "font-stat text-sm font-medium" : "font-stat text-base font-medium"}>
            {formatCurrency(listing.price)}
          </p>
          <p className="line-clamp-2 text-[11px] text-muted-foreground">
            {[listing.suburb, listing.city].filter(Boolean).join(", ")}
            {listing.property_type
              ? ` · ${propertyTypeLabel(listing.property_type as PropertyType)}`
              : null}
            {listing.bedrooms != null ? ` · ${listing.bedrooms} bed` : null}
            {listing.days_on_market != null ? ` · ${listing.days_on_market}d` : null}
          </p>
          <a
            href={listing.listing_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground hover:underline"
          >
            View
            <ExternalLink className="size-3" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
