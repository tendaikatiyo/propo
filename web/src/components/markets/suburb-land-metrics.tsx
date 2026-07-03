import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEFAULT_LAND_BUDGET_PER_SQM } from "@/lib/constants";
import { formatNumber, formatPricePerSqm } from "@/lib/format";
import type { LandMetric } from "@/lib/types";

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

export function SuburbLandMetrics({
  landMarket,
  landMode = false,
}: {
  landMarket: LandMetric;
  landMode?: boolean;
}) {
  if ((landMarket.priced_land_count ?? 0) <= 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-lg font-medium">Land market</h2>
          <p className="text-sm text-muted-foreground">
            {landMarket.priced_land_count} stands with size data · {landMarket.land_count} total
            listings
          </p>
        </div>
        {!landMode ? (
          <Link
            href={`/explore?mode=land&city=${encodeURIComponent(landMarket.city)}&budget=${DEFAULT_LAND_BUDGET_PER_SQM}`}
            className="text-sm font-medium hover:underline"
          >
            Explore land in {landMarket.city}
          </Link>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          label="Median $/sqm"
          value={formatPricePerSqm(landMarket.median_price_per_sqm)}
        />
        <MetricCard label="Land listings" value={formatNumber(landMarket.land_count)} />
        <MetricCard label="Confidence" value={String(landMarket.confidence_score ?? "—")} />
      </div>
    </section>
  );
}
