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
import { PRICE_TREND_TOOLTIP, SUPPLY_TREND_TOOLTIP } from "@/lib/metric-tooltips";
import type { ExploreMode, MarketMetric, MarketTrendsPayload, TrendRange } from "@/lib/types";

async function fetchTrends(
  marketId: string,
  range: TrendRange,
  mode: ExploreMode
): Promise<MarketTrendsPayload> {
  const params = new URLSearchParams({ range, mode });
  const res = await fetch(`/api/markets/${encodeURIComponent(marketId)}/trends?${params}`);
  if (!res.ok) throw new Error("Failed to load trends");
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

function TrendPanel({
  marketId,
  range,
  mode,
}: {
  marketId: string;
  range: TrendRange;
  mode: ExploreMode;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["market-trends", marketId, range, mode],
    queryFn: () => fetchTrends(marketId, range, mode),
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading trend data…</p>;
  }

  if (isError || !data) {
    return <p className="text-sm text-muted-foreground">Trend data unavailable.</p>;
  }

  const priceLabel = mode === "rent" ? "Median rent" : "Median sale price";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <ChangeBadge label="Price" value={data.pct_change_median} />
        <ChangeBadge label="Supply" value={data.pct_change_listings} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">{priceLabel}</p>
          <Tooltip>
            <TooltipTrigger className="text-muted-foreground">
              <Info className="size-3.5" />
            </TooltipTrigger>
            <TooltipContent>{PRICE_TREND_TOOLTIP}</TooltipContent>
          </Tooltip>
        </div>
        <TrendChart points={data.points} kind="price" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">Active listings</p>
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

export function SuburbTrendsSection({ market }: { market: MarketMetric }) {
  const [range, setRange] = useState<TrendRange>("90d");
  const [mode, setMode] = useState<ExploreMode>("rent");

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle>Market trends</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Daily snapshot medians over the last {trendRangeLabel(range)}.
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

        <Tabs value={mode} onValueChange={(value) => setMode(value === "buy" ? "buy" : "rent")}>
          <TabsList>
            <TabsTrigger value="rent">Rent</TabsTrigger>
            <TabsTrigger value="buy">Sale</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <TrendPanel marketId={market.market_id} range={range} mode={mode} />
      </CardContent>
    </Card>
  );
}
