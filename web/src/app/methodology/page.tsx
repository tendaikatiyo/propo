import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";

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
            <CardTitle>Days on market</CardTitle>
          </CardHeader>
          <CardContent className="text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            Days on market is measured from first seen to last seen in our scrape history. It
            indicates how long listings typically remain active in a suburb.
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
            Property type filters use listing counts by type in each suburb. Bedroom filters use
            bedroom bucket counts when available in the analytics pipeline.
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
      </div>
    </div>
  );
}
