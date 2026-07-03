"use client";

import { useQuery } from "@tanstack/react-query";
import { Info } from "lucide-react";
import { useState } from "react";

import { TrendChart } from "@/components/markets/trend-chart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { formatPctChange, parseTrendRange, trendRangeLabel } from "@/lib/trends";
import { SUPPLY_TREND_TOOLTIP } from "@/lib/metric-tooltips";
import type { LandMetric, MarketTrendsPayload, TrendRange } from "@/lib/types";

async function fetchLandTrends(
  marketId: string,
  range: TrendRange
): Promise<MarketTrendsPayload> {
  const params = new URLSearchParams({ range, mode: "land" });
  const res = await fetch(`/api/markets/${encodeURIComponent(marketId)}/trends?${params}`);
  if (!res.ok) throw new Error("Failed to load land trends");
  return res.json() as Promise<MarketTrendsPayload>;
}

function ChangeBadge({
  label,
  value,
}: {
  label: string;
  value: number | null;
}) {
  if (value == null) return null;
  const variant = value > 0 ? "default" : value < 0 ? "secondary" : "outline";
  return (
    <Badge variant={variant} className="font-mono text-[11px]">
      {label} {formatPctChange(value)}
    </Badge>
  );
}

function LandTrendPanel({
  marketId,
  range,
}: {
  marketId: string;
  range: TrendRange;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["land-market-trends", marketId, range],
    queryFn: () => fetchLandTrends(marketId, range),
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading land trend data…</p>;
  }

  if (isError || !data) {
    return (
      <p className="text-sm text-muted-foreground">
        Land trend data unavailable. Snapshots build up after daily pipeline runs.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <ChangeBadge label="$/sqm" value={data.pct_change_median} />
        <ChangeBadge label="Supply" value={data.pct_change_listings} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">Median $/sqm</p>
          <Tooltip>
            <TooltipTrigger className="text-muted-foreground">
              <Info className="size-3.5" />
            </TooltipTrigger>
            <TooltipContent>
              Daily median asking price per square metre from active land listings with valid
              stand size.
            </TooltipContent>
          </Tooltip>
        </div>
        <TrendChart points={data.points} kind="price" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">Priced land listings</p>
          <Tooltip>
            <TooltipTrigger className="text-muted-foreground">
              <Info className="size-3.5" />
            </TooltipTrigger>
            <TooltipContent>{SUPPLY_TREND_TOOLTIP}</TooltipContent>
          </Tooltip>
        </div>
        <TrendChart points={data.points} kind="supply" />
      </div>
    </div>
  );
}

export function SuburbLandTrendsSection({ landMarket }: { landMarket: LandMetric }) {
  const [range, setRange] = useState<TrendRange>("90d");

  if ((landMarket.priced_land_count ?? 0) <= 0) return null;

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle>Land trends</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Median $/sqm over the last {trendRangeLabel(range)}.
            </p>
          </div>
          <Tabs value={range} onValueChange={(value) => setRange(parseTrendRange(value))}>
            <TabsList>
              <TabsTrigger value="30d">30d</TabsTrigger>
              <TabsTrigger value="90d">90d</TabsTrigger>
              <TabsTrigger value="180d">180d</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <LandTrendPanel marketId={landMarket.market_id} range={range} />
      </CardContent>
    </Card>
  );
}
