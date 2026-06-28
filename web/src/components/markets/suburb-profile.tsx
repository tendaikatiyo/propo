import Link from "next/link";

import { BackLink } from "@/components/layout/back-nav";
import { SuburbActionBar } from "@/components/mobile/suburb-action-bar";
import { PinButton } from "@/components/markets/pin-button";
import { SuburbValueListings } from "@/components/listings/suburb-value-listings";
import { PropertyMixBar } from "@/components/markets/property-mix-bar";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import {
  isUsingAggregateFallback,
  priceForFilters,
  resolveSegmentStats,
  segmentFilterLabel,
  segmentMedianLabel,
} from "@/lib/segments";
import type { MarketMetric, PropertyType } from "@/lib/types";
import { cityPath, suburbPath } from "@/lib/slug";

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
}: {
  market: MarketMetric;
  related: MarketMetric[];
  propertyType?: PropertyType | null;
  bedroom?: number | null;
}) {
  const segment = resolveSegmentStats(market, propertyType, bedroom);
  const specLabel = segmentFilterLabel(propertyType, bedroom);
  const rentFallback = isUsingAggregateFallback(market, "rent", { propertyType, bedroom });
  const saleFallback = isUsingAggregateFallback(market, "buy", { propertyType, bedroom });

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  const rentMin = segment?.minimum_rent ?? market.minimum_rent;
  const rentMax = segment?.maximum_rent ?? market.maximum_rent;
  const saleMin = segment?.minimum_sale_price ?? market.minimum_sale_price;
  const saleMax = segment?.maximum_sale_price ?? market.maximum_sale_price;

  return (
    <div className="space-y-8 pb-20 lg:pb-0">
      <BackLink href={cityPath(market.city)} label={`Back to ${market.city}`} />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            <Link href={cityPath(market.city)} className="hover:underline">
              {market.city}
            </Link>
          </p>
          <h1 className="font-heading text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            {sanitizeLabel(market.suburb)}
          </h1>
          {specLabel ? (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing medians for {specLabel}
              {rentFallback || saleFallback
                ? " (suburb-wide median shown where spec data is limited or missing)"
                : ""}
            </p>
          ) : null}
        </div>
        <div className="lg:hidden">
          <ConfidenceBadge score={market.confidence_score} />
        </div>
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          <ConfidenceBadge score={market.confidence_score} />
          <PinButton market={market} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          label={segmentMedianLabel("rent", propertyType, bedroom)}
          value={formatCurrency(medianRent)}
        />
        <MetricCard
          label={segmentMedianLabel("buy", propertyType, bedroom)}
          value={formatCurrency(medianSale)}
        />
        <MetricCard label="Gross yield" value={formatPercent(market.yield_percent)} />
        <MetricCard
          label="Days on market (rent)"
          value={
            (segment?.median_days_on_market_rent ?? market.average_days_on_market_rent) != null
              ? `${segment?.median_days_on_market_rent ?? market.average_days_on_market_rent}d`
              : "—"
          }
        />
        <MetricCard
          label="Days on market (sale)"
          value={
            (segment?.median_days_on_market_sale ?? market.average_days_on_market_sale) != null
              ? `${segment?.median_days_on_market_sale ?? market.average_days_on_market_sale}d`
              : "—"
          }
        />
        <MetricCard label="Opportunity score" value={String(market.opportunity_score ?? "—")} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Property mix</CardTitle>
        </CardHeader>
        <CardContent>
          <PropertyMixBar market={market} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Price context</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium">Rent</p>
            <p className="text-sm text-muted-foreground">
              Min {formatCurrency(rentMin)} · Median {formatCurrency(medianRent)} · Max{" "}
              {formatCurrency(rentMax)}
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Sale</p>
            <p className="text-sm text-muted-foreground">
              Min {formatCurrency(saleMin)} · Median {formatCurrency(medianSale)} · Max{" "}
              {formatCurrency(saleMax)}
            </p>
          </div>
        </CardContent>
      </Card>

      <div id="suburb-listings">
        <SuburbValueListings market={market} />
      </div>

      {related.length ? (
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-medium">Similar suburbs in {market.city}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.market_id}
                href={suburbPath(item.city, item.suburb, { type: propertyType, bedroom })}
                className="rounded-2xl border border-border/80 bg-card p-4 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <p className="font-medium">{sanitizeLabel(item.suburb)}</p>
                <p className="text-sm text-muted-foreground">
                  Yield {formatPercent(item.yield_percent)} · Opp {item.opportunity_score}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <SuburbActionBar market={market} />
    </div>
  );
}
