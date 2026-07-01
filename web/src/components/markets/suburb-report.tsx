import Link from "next/link";

import { ListingCard } from "@/components/listings/listing-card";
import { ConfidenceBadge } from "@/components/markets/confidence-badge";
import { PropertyMixBar } from "@/components/markets/property-mix-bar";
import { SuburbReportActions } from "@/components/markets/suburb-report-actions";
import { SuburbReportTrends } from "@/components/markets/suburb-report-trends";
import { MIN_SEGMENT_LISTINGS, SITE_NAME } from "@/lib/constants";
import { formatDataFreshness } from "@/lib/data-freshness";
import { dedupeListingsByThumbnail } from "@/lib/listings";
import { formatCurrency, formatPercent, sanitizeLabel } from "@/lib/format";
import {
  isUsingAggregateFallback,
  priceForFilters,
  resolveSegmentStats,
  segmentCountForMode,
  segmentFilterLabel,
  segmentMedianLabel,
} from "@/lib/segments";
import type { Listing, MarketMetric, MarketTrendsPayload, PropertyType } from "@/lib/types";

function ReportMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border/80 bg-card px-4 py-3">
      <p className="caption-label">{label}</p>
      <p className="font-stat mt-1 text-xl font-medium">{value}</p>
    </div>
  );
}

function ReportListings({
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
    <div className="suburb-report-section space-y-3">
      <div>
        <h3 className="font-heading text-sm font-medium">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {dedupeListingsByThumbnail(listings).map((listing) => (
          <ListingCard key={listing.listing_url} listing={listing} market={market} compact />
        ))}
      </div>
    </div>
  );
}

export function SuburbReport({
  market,
  propertyType = null,
  bedroom = null,
  updatedAt,
  rentTrends,
  saleTrends,
  rentListings,
  saleListings,
  profilePath,
}: {
  market: MarketMetric;
  propertyType?: PropertyType | null;
  bedroom?: number | null;
  updatedAt: string | null;
  rentTrends: MarketTrendsPayload;
  saleTrends: MarketTrendsPayload;
  rentListings: Listing[];
  saleListings: Listing[];
  profilePath: string;
}) {
  const segment = resolveSegmentStats(market, propertyType, bedroom);
  const specLabel = segmentFilterLabel(propertyType, bedroom);
  const rentFallback = isUsingAggregateFallback(market, "rent", { propertyType, bedroom });
  const saleFallback = isUsingAggregateFallback(market, "buy", { propertyType, bedroom });

  const medianRent = priceForFilters(market, "rent", { propertyType, bedroom });
  const medianSale = priceForFilters(market, "buy", { propertyType, bedroom });

  const rentSample = segment ? segmentCountForMode(segment, "rent") : market.rental_count;
  const saleSample = segment ? segmentCountForMode(segment, "buy") : market.sale_count;

  const rentMin = segment?.minimum_rent ?? market.minimum_rent;
  const rentMax = segment?.maximum_rent ?? market.maximum_rent;
  const saleMin = segment?.minimum_sale_price ?? market.minimum_sale_price;
  const saleMax = segment?.maximum_sale_price ?? market.maximum_sale_price;

  const freshnessLabel = updatedAt ? formatDataFreshness(updatedAt) : "Data freshness unknown";

  return (
    <article className="suburb-report mx-auto max-w-4xl space-y-8 pb-8">
      <header className="suburb-report-section space-y-4 border-b border-border/80 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="caption-label">Market report</p>
            <h1 className="font-heading text-3xl font-medium tracking-[-0.02em]">
              {sanitizeLabel(market.suburb)}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{market.city}, Zimbabwe</p>
            {specLabel ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Spec filter: {specLabel}
                {rentFallback || saleFallback
                  ? " (suburb-wide median where segment data is limited)"
                  : ""}
              </p>
            ) : null}
          </div>
          <ConfidenceBadge score={market.confidence_score} />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>{freshnessLabel}</span>
          <span>·</span>
          <span>
            {rentSample} rental
            {rentSample === 1 ? "" : "s"}
            {specLabel && rentSample < MIN_SEGMENT_LISTINGS ? " (limited segment data)" : ""}
          </span>
          <span>·</span>
          <span>
            {saleSample} sale listing{saleSample === 1 ? "" : "s"}
            {specLabel && saleSample < MIN_SEGMENT_LISTINGS ? " (limited segment data)" : ""}
          </span>
        </div>

        <SuburbReportActions profilePath={profilePath} />
      </header>

      <section className="suburb-report-section space-y-3">
        <h2 className="font-heading text-lg font-medium">Current market snapshot</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ReportMetric
            label={segmentMedianLabel("rent", propertyType, bedroom)}
            value={formatCurrency(medianRent)}
          />
          <ReportMetric
            label={segmentMedianLabel("buy", propertyType, bedroom)}
            value={formatCurrency(medianSale)}
          />
          <ReportMetric label="Gross yield" value={formatPercent(market.yield_percent)} />
          <ReportMetric
            label="Opportunity score"
            value={String(market.opportunity_score ?? "—")}
          />
        </div>
      </section>

      <SuburbReportTrends rentTrends={rentTrends} saleTrends={saleTrends} />

      <section className="suburb-report-section space-y-3">
        <h2 className="font-heading text-lg font-medium">Property mix</h2>
        <div className="rounded-xl border border-border/80 bg-card p-4">
          <PropertyMixBar market={market} />
        </div>
      </section>

      <section className="suburb-report-section space-y-3">
        <h2 className="font-heading text-lg font-medium">Price range</h2>
        <div className="grid gap-4 rounded-xl border border-border/80 bg-card p-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium">Rent</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Min {formatCurrency(rentMin)} · Median {formatCurrency(medianRent)} · Max{" "}
              {formatCurrency(rentMax)}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Sale</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Min {formatCurrency(saleMin)} · Median {formatCurrency(medianSale)} · Max{" "}
              {formatCurrency(saleMax)}
            </p>
          </div>
        </div>
      </section>

      {rentListings.length || saleListings.length ? (
        <section className="suburb-report-section space-y-6">
          <div>
            <h2 className="font-heading text-lg font-medium">Good value listings</h2>
            <p className="text-sm text-muted-foreground">
              Active properties at or below the suburb median — sorted cheapest first.
            </p>
          </div>

          <ReportListings
            title="Rentals"
            description={
              medianRent != null
                ? `At or below median rent of ${formatCurrency(medianRent)}.`
                : "Below suburb median rent."
            }
            listings={rentListings}
            market={market}
          />

          <ReportListings
            title="For sale"
            description={
              medianSale != null
                ? `At or below median sale of ${formatCurrency(medianSale)}.`
                : "Below suburb median sale price."
            }
            listings={saleListings}
            market={market}
          />
        </section>
      ) : null}

      <footer className="suburb-report-section space-y-2 border-t border-border/80 pt-6 text-xs text-muted-foreground">
        <p>
          <strong className="font-medium text-foreground">Data confidence:</strong>{" "}
          {market.confidence_score}% — based on rental and sale listing volume in this suburb.
          Green = strong coverage; lower scores indicate thinner markets.
        </p>
        <p>
          <strong className="font-medium text-foreground">Methodology:</strong> Medians, yields, and
          trends are computed from active listings on public property portals — not closed
          transaction data. Fair-value badges compare listing price to segment or suburb medians.
          Attributes like borehole, pool, or security are not in our listing data and are not reflected
          in these figures.
        </p>
        <p>
          Full methodology:{" "}
          <Link href="/methodology" className="text-foreground underline">
            {SITE_NAME.toLowerCase()}.fyi/methodology
          </Link>
        </p>
        <p className="pt-2 font-mono text-[10px] tracking-wide uppercase">
          Generated by {SITE_NAME} · {new Date().toLocaleDateString("en-ZW", { dateStyle: "long" })}
        </p>
      </footer>
    </article>
  );
}
