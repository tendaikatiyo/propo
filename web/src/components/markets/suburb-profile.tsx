import Link from "next/link";
import { FileDown } from "lucide-react";

import { BackLink } from "@/components/layout/back-nav";
import { DataFreshnessPill } from "@/components/layout/data-freshness-pill";
import { SuburbActionBar } from "@/components/mobile/suburb-action-bar";
import { PinButton } from "@/components/markets/pin-button";
import { SampleSizeBadge, ScopeLabel } from "@/components/markets/sample-size-badge";
import { SuburbValueListings } from "@/components/listings/suburb-value-listings";
import { SuburbLandListings } from "@/components/listings/suburb-land-listings";
import { SuburbLandMetrics } from "@/components/markets/suburb-land-metrics";
import { PropertyMixBar } from "@/components/markets/property-mix-bar";
import { SuburbTrendsSection } from "@/components/markets/suburb-trends-section";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import {
  CommunityLandReports,
  CommunityRentReports,
  CommunitySaleReports,
  ContributePriceButton,
  RentReportCta,
} from "@/components/rent-reports/community-rent-reports";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MIN_SEGMENT_LISTINGS } from "@/lib/constants";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import {
  relatedSuburbCaption,
  relatedSuburbDetail,
  showsLandOnProfile,
  showsPropertyMix,
  showsRentMetrics,
  showsRentReportExport,
  showsReportExport,
  showsResidentialOnProfile,
  showsSaleMetrics,
  showsYieldMetrics,
  sortRelatedSuburbs,
  suburbProfileDescription,
} from "@/lib/lens";
import {
  hasActiveSegmentFilters,
  isUsingAggregateFallback,
  priceForFilters,
  resolveSegmentStats,
  segmentCountForMode,
  segmentFilterLabel,
  segmentMedianLabel,
} from "@/lib/segments";
import type { ExploreMode, LandMetric, MarketMetric, PropertyType } from "@/lib/types";
import type { RentReportMetrics } from "@/lib/rent-reports";
import type { SaleReportMetrics } from "@/lib/sale-reports";
import type { LandReportMetrics } from "@/lib/land-reports";
import { cityPath, suburbPath, suburbReportPath } from "@/lib/slug";
import { cn } from "@/lib/utils";

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="caption-label normal-case">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-stat text-2xl font-medium">{value}</p>
      </CardContent>
    </Card>
  );
}

export function SuburbProfile({
  market,
  related,
  propertyType = null,
  bedroom = null,
  landMarket = null,
  lens,
  rentReportMetrics = null,
  saleReportMetrics = null,
  landReportMetrics = null,
}: {
  market: MarketMetric;
  related: MarketMetric[];
  propertyType?: PropertyType | null;
  bedroom?: number | null;
  landMarket?: LandMetric | null;
  lens: ExploreMode;
  rentReportMetrics?: RentReportMetrics | null;
  saleReportMetrics?: SaleReportMetrics | null;
  landReportMetrics?: LandReportMetrics | null;
}) {
  const landMode = lens === "land";
  const segment = resolveSegmentStats(market, propertyType, bedroom);
  const specLabel = segmentFilterLabel(propertyType, bedroom);
  const hasSpecFilters = hasActiveSegmentFilters({ propertyType, bedroom });
  const rentFallback = isUsingAggregateFallback(market, "rent", { propertyType, bedroom });
  const saleFallback = isUsingAggregateFallback(market, "buy", { propertyType, bedroom });

  const rentSample = segment ? segmentCountForMode(segment, "rent") : market.rental_count;
  const saleSample = segment ? segmentCountForMode(segment, "buy") : market.sale_count;
  const rentLimited = hasSpecFilters && rentSample < MIN_SEGMENT_LISTINGS;
  const saleLimited = hasSpecFilters && saleSample < MIN_SEGMENT_LISTINGS;

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  const rentMin = segment?.minimum_rent ?? market.minimum_rent;
  const rentMax = segment?.maximum_rent ?? market.maximum_rent;
  const saleMin = segment?.minimum_sale_price ?? market.minimum_sale_price;
  const saleMax = segment?.maximum_sale_price ?? market.maximum_sale_price;

  const segmentQuery = { type: propertyType, bedroom, mode: lens };
  const sortedRelated = sortRelatedSuburbs(related, lens, { propertyType, bedroom });

  const confidenceScore =
    landMode && landMarket ? landMarket.confidence_score : market.confidence_score;
  const confidenceSample =
    landMode && landMarket
      ? landMarket.land_count
      : lens === "buy"
        ? saleSample
        : lens === "rent"
          ? rentSample
          : rentSample + saleSample;
  const confidenceMode: "rent" | "buy" | "land" =
    landMode && landMarket ? "land" : lens === "buy" ? "buy" : "rent";

  return (
    <div className="space-y-8 pb-28 lg:pb-0">
      <BackLink href={cityPath(market.city, { mode: lens })} label={`Back to ${market.city}`} />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              <Link href={cityPath(market.city, { mode: lens })} className="hover:underline">
                {market.city}
              </Link>
            </p>
            <h1 className="font-heading text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
              {sanitizeLabel(market.suburb)}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {suburbProfileDescription(lens, specLabel, rentFallback, saleFallback)}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {showsResidentialOnProfile(lens) ? (
                <ScopeLabel propertyType={propertyType} bedroom={bedroom} />
              ) : null}
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                {showsRentMetrics(lens) ? (
                  <SampleSizeBadge count={rentSample} mode="rent" limited={rentLimited} />
                ) : null}
                {showsSaleMetrics(lens) ? (
                  <SampleSizeBadge count={saleSample} mode="buy" limited={saleLimited} />
                ) : null}
              </div>
              <DataFreshnessPill prefix="Market data" />
            </div>
            {showsRentReportExport(lens) ? (
              <p className="mt-3 print:hidden lg:hidden">
                <Link
                  href={suburbReportPath(market.city, market.suburb, {
                    type: propertyType,
                    bedroom,
                    scope: "rent",
                  })}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  <FileDown className="size-4" />
                  Export rent summary
                </Link>
              </p>
            ) : null}
            {showsReportExport(lens) ? (
              <p className="mt-3 print:hidden lg:hidden">
                <Link
                  href={suburbReportPath(market.city, market.suburb, {
                    type: propertyType,
                    bedroom,
                  })}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  <FileDown className="size-4" />
                  Export full report
                </Link>
              </p>
            ) : null}
            <p className="mt-3 print:hidden lg:hidden">
              <ContributePriceButton market={market} lens={lens} className="w-full sm:w-auto" />
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <ConfidenceBadge
            score={confidenceScore}
            sampleCount={confidenceSample}
            sampleMode={confidenceMode}
          />
        </div>
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          {showsRentReportExport(lens) ? (
            <Link
              href={suburbReportPath(market.city, market.suburb, {
                type: propertyType,
                bedroom,
                scope: "rent",
              })}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "print:hidden")}
            >
              <FileDown className="size-4" />
              Export rent summary
            </Link>
          ) : null}
          {showsReportExport(lens) ? (
            <Link
              href={suburbReportPath(market.city, market.suburb, {
                type: propertyType,
                bedroom,
              })}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }), "print:hidden")}
            >
              <FileDown className="size-4" />
              Export full report
            </Link>
          ) : null}
          <ContributePriceButton market={market} lens={lens} />
          <ConfidenceBadge
            score={confidenceScore}
            sampleCount={confidenceSample}
            sampleMode={confidenceMode}
          />
          <PinButton market={market} fromMode={lens} />
        </div>
      </div>

      <RentReportCta market={market} lens={lens} />

      {showsResidentialOnProfile(lens) ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {showsRentMetrics(lens) ? (
              <MetricCard
                label={segmentMedianLabel("rent", propertyType, bedroom)}
                value={formatCurrency(medianRent)}
              />
            ) : null}
            {showsSaleMetrics(lens) ? (
              <MetricCard
                label={segmentMedianLabel("buy", propertyType, bedroom)}
                value={formatCurrency(medianSale)}
              />
            ) : null}
            {showsYieldMetrics(lens) ? (
              <>
                <MetricCard label="Gross yield" value={formatPercent(market.yield_percent)} />
                <MetricCard
                  label="Opportunity score"
                  value={String(market.opportunity_score ?? "—")}
                />
              </>
            ) : null}
          </div>

          <CommunityRentReports
            market={market}
            metrics={rentReportMetrics}
            lens={lens}
          />

          <CommunitySaleReports
            market={market}
            metrics={saleReportMetrics}
            lens={lens}
          />

          <SuburbTrendsSection market={market} lens={lens} />

          {showsPropertyMix(lens) ? (
            <Card>
              <CardHeader>
                <CardTitle>Property mix</CardTitle>
              </CardHeader>
              <CardContent>
                <PropertyMixBar market={market} />
              </CardContent>
            </Card>
          ) : null}

          {(showsRentMetrics(lens) || showsSaleMetrics(lens)) && (
            <Card>
              <CardHeader>
                <CardTitle>Price context</CardTitle>
              </CardHeader>
              <CardContent
                className={cn(
                  "grid gap-4",
                  showsRentMetrics(lens) && showsSaleMetrics(lens)
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-1"
                )}
              >
                {showsRentMetrics(lens) ? (
                  <div>
                    <p className="mb-2 text-sm font-medium">Rent</p>
                    <p className="text-sm text-muted-foreground">
                      Min {formatCurrency(rentMin)} · Median {formatCurrency(medianRent)} · Max{" "}
                      {formatCurrency(rentMax)}
                    </p>
                  </div>
                ) : null}
                {showsSaleMetrics(lens) ? (
                  <div>
                    <p className="mb-2 text-sm font-medium">Sale</p>
                    <p className="text-sm text-muted-foreground">
                      Min {formatCurrency(saleMin)} · Median {formatCurrency(medianSale)} · Max{" "}
                      {formatCurrency(saleMax)}
                    </p>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          )}
        </>
      ) : null}

      {showsLandOnProfile(lens) && landMarket ? (
        <>
          <CommunityLandReports
            landMarket={landMarket}
            metrics={landReportMetrics}
            lens={lens}
          />
          <SuburbLandMetrics landMarket={landMarket} landMode={landMode} />
        </>
      ) : null}

      <div id="suburb-listings" className="space-y-8">
        {showsResidentialOnProfile(lens) ? (
          <SuburbValueListings market={market} lens={lens} />
        ) : null}
        {showsLandOnProfile(lens) ? (
          <SuburbLandListings marketId={market.market_id} />
        ) : null}
      </div>

      {sortedRelated.length ? (
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-medium">
            {relatedSuburbCaption(lens)} in {market.city}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortedRelated.map((item) => (
              <Link
                key={item.market_id}
                href={suburbPath(item.city, item.suburb, segmentQuery)}
                className="rounded-2xl border border-border/80 bg-card p-4 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <p className="font-medium">{sanitizeLabel(item.suburb)}</p>
                <p className="text-sm text-muted-foreground">
                  {relatedSuburbDetail(item, lens)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <SuburbActionBar market={market} lens={lens} />
    </div>
  );
}
