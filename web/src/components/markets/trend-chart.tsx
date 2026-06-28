"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { formatChartDate } from "@/lib/trends";
import { formatCurrency, formatNumber } from "@/lib/format";
import type { MarketTrendPoint } from "@/lib/types";

type TrendChartKind = "price" | "supply";

function chartColor(kind: TrendChartKind): string {
  return kind === "price" ? "var(--chart-1)" : "var(--chart-2)";
}

function formatYAxis(value: number, kind: TrendChartKind): string {
  if (kind === "price") {
    if (value >= 1000) return `$${Math.round(value / 1000)}k`;
    return `$${value}`;
  }
  return formatNumber(value);
}

function ChartTooltip({
  active,
  payload,
  kind,
}: {
  active?: boolean;
  payload?: { payload: MarketTrendPoint }[];
  kind: TrendChartKind;
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0]?.payload;
  if (!point) return null;

  return (
    <div className="rounded-lg border border-border/80 bg-background px-3 py-2 text-xs shadow-md">
      <p className="font-medium">{formatChartDate(point.date)}</p>
      <p className="mt-1 text-muted-foreground">
        {kind === "price"
          ? `Median ${formatCurrency(point.median_price)}`
          : `${formatNumber(point.listing_count)} listings`}
      </p>
    </div>
  );
}

export function TrendChart({
  points,
  kind,
  emptyLabel = "Not enough history yet",
}: {
  points: MarketTrendPoint[];
  kind: TrendChartKind;
  emptyLabel?: string;
}) {
  const data =
    kind === "price"
      ? points.filter((point) => point.median_price != null)
      : points.filter((point) => point.listing_count > 0);

  if (data.length < 2) {
    return (
      <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-border/80 bg-muted/20 text-sm text-muted-foreground">
        {emptyLabel}
      </div>
    );
  }

  const dataKey = kind === "price" ? "median_price" : "listing_count";
  const color = chartColor(kind);

  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`trend-fill-${kind}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={formatChartDate}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            axisLine={false}
            tickLine={false}
            minTickGap={24}
          />
          <YAxis
            tickFormatter={(value: number) => formatYAxis(value, kind)}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip content={<ChartTooltip kind={kind} />} />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            fill={`url(#trend-fill-${kind})`}
            dot={false}
            activeDot={{ r: 4, fill: color }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
