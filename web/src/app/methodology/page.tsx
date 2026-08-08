import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import {
  DATASET_SCALE,
  DATASET_SOURCE_LINE,
  DATASET_UPDATE_CADENCE,
} from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Methodology",
  description:
    "How Propo builds suburb market dossiers — rent, sale, and land medians, yields, trends, and confidence from a continuously updated property database.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Methodology"
        description="How Propo turns listing history into suburb market intelligence."
      />

      <Card>
        <CardHeader>
          <CardTitle>How to use Propo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
          <p>
            Propo is a suburb-first market intelligence site — not a listings portal. Look up a
            suburb to see rent, sale, land, yield, and trends together. Explore is a directory of
            suburbs and land markets; optional filters refine the list when you want them.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>The dataset</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
          <p>
            Propo maintains a continuously updated property market database for Zimbabwe — not a
            static export. {DATASET_SOURCE_LINE}. The pipeline refreshes{" "}
            {DATASET_UPDATE_CADENCE}, compounding historical observations over time.
          </p>
          <p>
            At current scale: {DATASET_SCALE.activeListings} active listings,{" "}
            {DATASET_SCALE.historicalObservations} historical observations,{" "}
            {DATASET_SCALE.suburbMarketsLabel}, {DATASET_SCALE.landSuburbMarketsLabel}, and{" "}
            {DATASET_SCALE.citiesLabel}.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Suburb medians</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Each suburb profile shows median asking rent and median asking sale price from active
            portal listings in that market. Figures are statistical summaries of what is advertised
            — not closed transaction prices or valuations of individual homes.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Land metrics</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Land uses a separate table from residential medians. Where stand size is available, we
            report median asking price per square metre and listing counts. Land trends use daily
            land snapshots the same way residential trends use daily suburb snapshots.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yield calculation</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Gross yield uses median rental income and median sale price for each suburb. It
            helps compare cash-flow potential across markets, not individual properties.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Confidence score</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Confidence reflects listing volume — rental and sale counts contribute separately.
            Higher scores mean more data supports the suburb medians shown. Explore can optionally
            hide low-confidence suburbs; by default the directory includes them.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Opportunity score</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Opportunity combines yield, listing volume, and market balance (rent + sale coverage)
            to highlight suburbs that may be useful for investment research alongside other
            signals on the profile.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Explore directories</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Explore has two tabs. <strong className="font-medium text-foreground">Suburbs</strong>{" "}
            lists residential markets with rent, sale, and yield at a glance.{" "}
            <strong className="font-medium text-foreground">Land</strong> lists priced stand markets
            by $/sqm. Filters (city, data coverage, optional land budget) start off — open them
            when you want to narrow the list.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price & supply trends</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Trend charts use daily snapshots of active listings. Each point is the median price and
            listing count for that suburb on that date. Percent change compares the first and last
            available snapshot in the selected window (30, 90, or 180 days). Trends reflect what was
            on the market each day, not closed transactions. Land trends use the same approach on
            median $/sqm.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community price reports</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Anonymous community rent, sale, or land price reports may appear as a separate range on
            suburbs with thin portal coverage or low confidence — they do not change headline portal
            medians or confidence scores. A minimum number of approved reports is required before a
            range is shown. Contribution entry points may be limited while the feature is in beta.
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Data limits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            <p>
              Propo derives medians, yields, and fair-value badges from its property market
              database — normalized listing text and prices from major online portals. We do not
              verify title deeds, plot sizes, or off-market transactions.
            </p>
            <p>
              Listing descriptions are not structured for amenities. We do not capture or score
              borehole water, swimming pools, backup power, security estates, paved roads, or
              similar features — even when agents mention them in ad copy.
            </p>
            <p>
              Type-level segment medians (when opened with a property-type URL filter) require at
              least three matching active listings. Below that threshold we show suburb-wide
              medians with a limited-data warning.
            </p>
            <p>
              Fair-value badges compare a listing to the best available median and appear only when
              the price differs by at least 5% and enough comparable listings exist.
            </p>
            <p>
              We track how long listings stay in our listing history, but do not show days-on-market
              in the product yet — it undercounts listings that were already live before we started
              tracking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
