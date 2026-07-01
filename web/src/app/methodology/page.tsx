import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Methodology",
  description:
    "How Propo calculates rental yields, opportunity scores, segment medians, and price trends from public listing data.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Methodology"
        description="How Propo calculates market signals and what each score means."
      />

      <div className="grid gap-4 lg:grid-cols-2">
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
            Higher scores mean more data supports the suburb medians shown.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Opportunity score</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Opportunity combines yield, listing volume, and market balance (rent + sale coverage)
            to highlight suburbs that may be attractive for investment research.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget matching</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            In-budget suburbs have a median rent or sale price at or below your budget. Stretch
            suburbs are within 15% above your budget. Matching uses suburb medians, not
            individual listings.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property type filters</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Explore filters suburbs by property type (house, flat, room, and so on). Medians prefer
            type-matched listings in each suburb. Bedroom-level detail remains available on suburb
            profiles when opened with a bedroom filter in the URL.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price & supply trends</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Trend charts use daily snapshots of active listings. Each point is the median price and
            listing count for that suburb on that date, aggregated across property types. Percent
            change compares the first and last available snapshot in the selected window (30, 90,
            or 180 days). Trends reflect what was on the market each day, not closed transactions.
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Data limits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            <p>
              Propo derives medians, yields, and fair-value badges from publicly available listing
              text and prices. We do not verify title deeds, plot sizes, or off-market
              transactions.
            </p>
            <p>
              Listing descriptions are not structured for amenities. We do not capture or score
              borehole water, swimming pools, backup power, security estates, paved roads, or
              similar features — even when agents mention them in ad copy.
            </p>
            <p>
              Type-level segment medians require at least three matching active listings. Below that
              threshold we show suburb-wide medians with a limited-data warning, or hide the suburb
              from filtered Explore results.
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
