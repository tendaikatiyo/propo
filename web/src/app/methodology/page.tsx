import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MethodologyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Methodology</h1>
        <p className="text-muted-foreground">
          How Propo calculates market signals and what each score means.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Yield calculation</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Gross yield uses median rental income and median sale price for each suburb. It
            helps compare cash-flow potential across markets, not individual properties.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Confidence score</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Confidence reflects listing volume — rental and sale counts contribute separately.
            Higher scores mean more data supports the suburb medians shown.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Opportunity score</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Opportunity combines yield, listing volume, and market balance (rent + sale coverage)
            to highlight suburbs that may be attractive for investment research.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Days on market</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Days on market is measured from first seen to last seen in our scrape history. It
            indicates how long listings typically remain active in a suburb.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Budget matching</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            In-budget suburbs have a median rent or sale price at or below your budget. Stretch
            suburbs are within 15% above your budget. Matching uses suburb medians, not
            individual listings.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Property type filters</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Property type filters use listing counts by type in each suburb. Bedroom filters use
            bedroom bucket counts when available in the analytics pipeline.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
