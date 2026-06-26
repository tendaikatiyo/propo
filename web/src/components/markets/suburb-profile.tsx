import Link from "next/link";

import { BackLink } from "@/components/layout/back-nav";
import { PinButton } from "@/components/markets/pin-button";
import { SuburbValueListings } from "@/components/listings/suburb-value-listings";
import { PropertyMixBar } from "@/components/markets/property-mix-bar";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import type { MarketMetric } from "@/lib/types";
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

export function SuburbProfile({ market, related }: { market: MarketMetric; related: MarketMetric[] }) {
  return (
    <div className="space-y-8">
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
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ConfidenceBadge score={market.confidence_score} />
          <PinButton market={market} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard label="Median rent" value={formatCurrency(market.median_rent)} />
        <MetricCard label="Median sale" value={formatCurrency(market.median_sale_price)} />
        <MetricCard label="Gross yield" value={formatPercent(market.yield_percent)} />
        <MetricCard
          label="Days on market (rent)"
          value={market.average_days_on_market_rent != null ? `${market.average_days_on_market_rent}d` : "—"}
        />
        <MetricCard
          label="Days on market (sale)"
          value={market.average_days_on_market_sale != null ? `${market.average_days_on_market_sale}d` : "—"}
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
              Min {formatCurrency(market.minimum_rent)} · Median{" "}
              {formatCurrency(market.median_rent)} · Max {formatCurrency(market.maximum_rent)}
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Sale</p>
            <p className="text-sm text-muted-foreground">
              Min {formatCurrency(market.minimum_sale_price)} · Median{" "}
              {formatCurrency(market.median_sale_price)} · Max{" "}
              {formatCurrency(market.maximum_sale_price)}
            </p>
          </div>
        </CardContent>
      </Card>

      <SuburbValueListings market={market} />

      {related.length ? (
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-medium">Similar suburbs in {market.city}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.market_id}
                href={suburbPath(item.city, item.suburb)}
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
    </div>
  );
}
