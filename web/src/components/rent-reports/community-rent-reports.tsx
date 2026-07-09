import Link from "next/link";
import { Users } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format";
import {
  contributeCtaCopy,
  shouldShowCommunityRentRange,
  shouldShowContributeCta,
  type RentReportMetrics,
} from "@/lib/rent-reports";
import type { ExploreMode, MarketMetric } from "@/lib/types";
import { toSlug } from "@/lib/slug";
import { cn } from "@/lib/utils";

export function contributeProfileHref(
  market: MarketMetric,
  lens: ExploreMode
): string {
  const params = new URLSearchParams({
    city: toSlug(market.city),
    suburb: toSlug(market.suburb),
  });
  if (lens !== "rent") {
    params.set("mode", lens);
  }
  return `/contribute?${params.toString()}`;
}

export function ContributePriceButton({
  market,
  lens,
  className,
  size = "sm",
}: {
  market: MarketMetric;
  lens: ExploreMode;
  className?: string;
  size?: "sm" | "default";
}) {
  if (!shouldShowContributeCta(lens)) return null;

  const { button } = contributeCtaCopy(lens);

  return (
    <Link
      href={contributeProfileHref(market, lens)}
      className={cn(buttonVariants({ variant: "outline", size }), "print:hidden", className)}
    >
      {button}
    </Link>
  );
}

export function RentReportCta({
  market,
  lens,
}: {
  market: MarketMetric;
  lens: ExploreMode;
}) {
  if (!shouldShowContributeCta(lens)) return null;

  const { title, description, button } = contributeCtaCopy(lens);

  return (
    <Card className="border-dashed border-primary/25 bg-primary/5 print:hidden">
      <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Link
          href={contributeProfileHref(market, lens)}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "shrink-0 bg-background"
          )}
        >
          {button}
        </Link>
      </CardContent>
    </Card>
  );
}

export function CommunityRentReports({
  market,
  metrics,
  lens,
}: {
  market: MarketMetric;
  metrics: RentReportMetrics | null | undefined;
  lens: ExploreMode;
}) {
  if (!shouldShowCommunityRentRange(market, metrics, lens) || !metrics) return null;

  const rangeLabel =
    metrics.min_rent != null &&
    metrics.max_rent != null &&
    metrics.min_rent !== metrics.max_rent
      ? `${formatCurrency(metrics.min_rent)}–${formatCurrency(metrics.max_rent)}`
      : metrics.median_rent != null
        ? formatCurrency(metrics.median_rent)
        : "—";

  return (
    <Card className="border-primary/20 bg-muted/30">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Users className="size-4 text-primary" />
          Community rent reports
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">
            {metrics.report_count} resident{metrics.report_count === 1 ? "" : "s"}
          </span>{" "}
          reported{" "}
          <span className="font-medium text-foreground">{rangeLabel}</span>
          /mo
          {metrics.median_rent != null ? (
            <>
              {" "}
              (median{" "}
              <span className="font-medium text-foreground">
                {formatCurrency(metrics.median_rent)}
              </span>
              )
            </>
          ) : null}
          .
        </p>
        <p className="text-xs">
          Based on anonymous, admin-reviewed submissions — not portal listings.
        </p>
      </CardContent>
    </Card>
  );
}
