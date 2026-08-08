import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPricePerSqm } from "@/lib/format";
import {
  shouldShowCommunityLandRange,
  type LandReportMetrics,
} from "@/lib/land-reports";
import {
  shouldShowCommunityRentRange,
  type RentReportMetrics,
} from "@/lib/rent-reports";
import {
  shouldShowCommunitySaleRange,
  type SaleReportMetrics,
} from "@/lib/sale-reports";
import type { ExploreMode, LandMetric, MarketMetric } from "@/lib/types";
import { toSlug } from "@/lib/slug";

export function contributeProfileHref(
  market: MarketMetric,
  lens: ExploreMode
): string {
  const params = new URLSearchParams({
    city: toSlug(market.city),
    suburb: toSlug(market.suburb),
  });
  if (lens === "buy" || lens === "land") {
    params.set("mode", lens);
  }
  return `/contribute?${params.toString()}`;
}

export function ContributePriceButton({
  market: _market,
  lens: _lens,
  className: _className,
  size: _size = "sm",
}: {
  market: MarketMetric;
  lens: ExploreMode;
  className?: string;
  size?: "sm" | "default";
}) {
  // Temporarily hidden — re-enable when community contribute is pushed again
  return null;
}

export function RentReportCta({
  market: _market,
  lens: _lens,
  landMarket: _landMarket = null,
}: {
  market: MarketMetric;
  lens: ExploreMode;
  landMarket?: LandMetric | null;
}) {
  // Temporarily hidden — re-enable when community contribute is pushed again
  return null;
}

export function CommunitySaleReports({
  market,
  metrics,
  lens,
}: {
  market: MarketMetric;
  metrics: SaleReportMetrics | null | undefined;
  lens: ExploreMode;
}) {
  if (!shouldShowCommunitySaleRange(market, metrics, lens) || !metrics) return null;

  const rangeLabel =
    metrics.min_sale_price != null &&
    metrics.max_sale_price != null &&
    metrics.min_sale_price !== metrics.max_sale_price
      ? `${formatCurrency(metrics.min_sale_price)}–${formatCurrency(metrics.max_sale_price)}`
      : metrics.median_sale_price != null
        ? formatCurrency(metrics.median_sale_price)
        : "—";

  return (
    <Card className="border-primary/20 bg-muted/30">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Users className="size-4 text-primary" />
          Community sale reports
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">
            {metrics.report_count} contributor{metrics.report_count === 1 ? "" : "s"}
          </span>{" "}
          reported{" "}
          <span className="font-medium text-foreground">{rangeLabel}</span>
          {metrics.median_sale_price != null ? (
            <>
              {" "}
              (median{" "}
              <span className="font-medium text-foreground">
                {formatCurrency(metrics.median_sale_price)}
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

export function CommunityLandReports({
  landMarket,
  metrics,
  lens,
}: {
  landMarket: LandMetric | null | undefined;
  metrics: LandReportMetrics | null | undefined;
  lens: ExploreMode;
}) {
  if (!shouldShowCommunityLandRange(landMarket, metrics, lens) || !metrics) return null;

  const rangeLabel =
    metrics.min_price_per_sqm != null &&
    metrics.max_price_per_sqm != null &&
    metrics.min_price_per_sqm !== metrics.max_price_per_sqm
      ? `${formatPricePerSqm(metrics.min_price_per_sqm)}–${formatPricePerSqm(metrics.max_price_per_sqm)}`
      : metrics.median_price_per_sqm != null
        ? formatPricePerSqm(metrics.median_price_per_sqm)
        : "—";

  return (
    <Card className="border-primary/20 bg-muted/30">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Users className="size-4 text-primary" />
          Community land reports
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">
            {metrics.report_count} contributor{metrics.report_count === 1 ? "" : "s"}
          </span>{" "}
          reported{" "}
          <span className="font-medium text-foreground">{rangeLabel}</span>
          /sqm
          {metrics.median_price_per_sqm != null ? (
            <>
              {" "}
              (median{" "}
              <span className="font-medium text-foreground">
                {formatPricePerSqm(metrics.median_price_per_sqm)}
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
