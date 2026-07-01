import {
  DEFAULT_CITY,
  normalizeExploreFilters,
  ROOM_BEDROOM_COUNT,
} from "@/lib/constants";
import {
  applySuburbMedianVisibility,
  filterMarkets,
  rankExploreResults,
} from "@/lib/explore";
import { formatPercent } from "@/lib/format";
import { priceForFilters, segmentFilterLabel } from "@/lib/segments";
import type { ExploreFilters, ExploreMode, MarketMetric } from "@/lib/types";

export type AffordabilityInsightKind = "in_budget" | "stretch";

export interface AffordabilityInsight {
  kind: AffordabilityInsightKind;
  market: MarketMetric;
  price: number;
  badgeLabel: string;
  detailCopy: string;
}

const MAX_IN_BUDGET_CARDS = 2;

function stretchTradeoffCopy(
  market: MarketMetric,
  mode: ExploreMode,
  budget: number,
  price: number
): string {
  const pctOver = Math.max(1, Math.round(((price - budget) / budget) * 100));

  if (mode === "buy" && market.yield_percent != null) {
    return `Higher yield, ${pctOver}% over budget`;
  }
  if (mode === "buy" && (market.opportunity_score ?? 0) >= 50) {
    return `${pctOver}% over budget · Strong opportunity`;
  }
  if ((market.confidence_score ?? 0) >= 40) {
    return `${pctOver}% over budget · Higher confidence`;
  }
  return `${pctOver}% over budget · Stronger amenities`;
}

function inBudgetDetailCopy(market: MarketMetric, mode: ExploreMode): string {
  if (mode === "buy" && market.yield_percent != null) {
    return `Yield ${formatPercent(market.yield_percent)}`;
  }
  const dom =
    mode === "rent"
      ? market.average_days_on_market_rent
      : market.average_days_on_market_sale;
  if (dom != null) {
    return `Avg DOM ${dom}d`;
  }
  return mode === "rent" ? "Competitive rent" : "Strong value";
}

function medianLabel(
  mode: ExploreMode,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): string {
  const spec = segmentFilterLabel(filters.propertyType, filters.bedroom);
  if (!spec) return mode === "rent" ? "median rent" : "median sale";
  return mode === "rent" ? `median rent (${spec})` : `median sale (${spec})`;
}

export function insightHeadline(
  mode: ExploreMode,
  budget: number,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): string {
  const spec = segmentFilterLabel(filters.propertyType, filters.bedroom);
  const budgetLabel = new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(budget);
  const modeLabel = mode === "rent" ? "rent" : "buy";
  if (spec) {
    return `At ${budgetLabel} ${modeLabel} · ${spec}`;
  }
  return `At ${budgetLabel} ${modeLabel}`;
}

export function buildAffordabilityInsights(
  markets: MarketMetric[],
  rawFilters: ExploreFilters
): AffordabilityInsight[] {
  const filters = normalizeExploreFilters(rawFilters);
  const segmentFilters = {
    propertyType: filters.propertyType,
    bedroom: filters.bedroom,
  };

  const { inBudget, stretch } = filterMarkets(markets, filters);
  const rankedInBudget = applySuburbMedianVisibility(
    rankExploreResults(inBudget, filters.mode, segmentFilters),
    filters
  );
  const rankedStretch = applySuburbMedianVisibility(
    rankExploreResults(stretch, filters.mode, segmentFilters),
    filters
  );

  const insights: AffordabilityInsight[] = [];

  for (const market of rankedInBudget.slice(0, MAX_IN_BUDGET_CARDS)) {
    const price = priceForFilters(market, filters.mode, segmentFilters);
    if (price == null) continue;
    insights.push({
      kind: "in_budget",
      market,
      price,
      badgeLabel: "In budget",
      detailCopy: inBudgetDetailCopy(market, filters.mode),
    });
  }

  const stretchMarket = rankedStretch[0];
  if (stretchMarket) {
    const price = priceForFilters(stretchMarket, filters.mode, segmentFilters);
    if (price != null) {
      insights.push({
        kind: "stretch",
        market: stretchMarket,
        price,
        badgeLabel: "Stretch",
        detailCopy: stretchTradeoffCopy(
          stretchMarket,
          filters.mode,
          filters.budget,
          price
        ),
      });
    }
  }

  return insights;
}

export function exploreHrefForFilters(
  filters: Pick<
    ExploreFilters,
    "mode" | "budget" | "city" | "propertyType" | "bedroom"
  >
): string {
  const next = normalizeExploreFilters({
    mode: filters.mode,
    budget: filters.budget,
    city: filters.city ?? DEFAULT_CITY,
    propertyType: filters.propertyType,
    bedroom: filters.bedroom,
    includeLowConfidence: false,
    hideSuburbMedianFallback: true,
  });
  const params = new URLSearchParams();
  params.set("mode", next.mode);
  params.set("budget", String(next.budget));
  if (next.city) params.set("city", next.city);
  if (next.propertyType) {
    params.set("type", next.propertyType);
    if (next.propertyType === "room") {
      params.set("bedroom", String(ROOM_BEDROOM_COUNT));
    }
  }
  if (next.bedroom != null && next.propertyType !== "room") {
    params.set("bedroom", String(next.bedroom));
  }
  return `/explore?${params.toString()}`;
}

export function insightPriceCaption(
  mode: ExploreMode,
  filters: Pick<ExploreFilters, "propertyType" | "bedroom">
): string {
  return medianLabel(mode, filters);
}
