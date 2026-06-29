"use client";

import Image from "next/image";
import { ExternalLink, Home } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { resolveListingThumbnailUrl } from "@/lib/listings";
import {
  resolveFairValueForListing,
  type FairValueBadge,
} from "@/lib/fair-value";
import { formatCurrency, propertyTypeLabel, sanitizeLabel } from "@/lib/format";
import { fairValueTooltipDetail } from "@/lib/metric-tooltips";
import { cn } from "@/lib/utils";
import type { Listing, MarketMetric, PropertyType } from "@/lib/types";

export function ListingThumbnail({ listing }: { listing: Listing }) {
  const imageUrl = resolveListingThumbnailUrl(listing);

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

function FairValueBadgeDisplay({ fairValue }: { fairValue: FairValueBadge }) {
  const tooltip = fairValueTooltipDetail(
    formatCurrency(fairValue.median),
    fairValue.usedAggregate,
    fairValue.sampleCount
  );

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge
          variant="outline"
          className={cn(
            "normal-case tracking-normal",
            fairValue.variant === "below"
              ? "border-[#bbf7d0] bg-[#dcfce7] text-[#166534]"
              : "border-[#fef08a] bg-[#fef9c3] text-[#854d0e]"
          )}
        >
          {fairValue.label}
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs font-sans text-sm normal-case tracking-normal">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

export function ListingCard({
  listing,
  compact = false,
  market,
}: {
  listing: Listing;
  compact?: boolean;
  market?: MarketMetric | null;
}) {
  const fairValue = market ? resolveFairValueForListing(market, listing) : null;

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
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={
                compact
                  ? "font-stat text-sm font-medium"
                  : "font-stat text-base font-medium"
              }
            >
              {formatCurrency(listing.price)}
            </p>
            {fairValue ? <FairValueBadgeDisplay fairValue={fairValue} /> : null}
          </div>
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
