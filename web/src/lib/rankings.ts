import { LEADERBOARD_MIN_CONFIDENCE, RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import type { MarketMetric, MarketMoversRankingsPayload, RankingEntry, TrendMover } from "@/lib/types";

const LEADERBOARD_MIN_ITEMS = 5;

function confidenceFor(
  marketId: string,
  confidenceByMarket: Map<string, number>
): number {
  return confidenceByMarket.get(marketId) ?? 0;
}

/**
 * Prefer suburbs at or above LEADERBOARD_MIN_CONFIDENCE. If too few pass,
 * backfill from the pre-ranked list so leaderboards stay useful.
 */
export function filterRankingsByConfidence(
  national: Record<string, RankingEntry[]>,
  markets: MarketMetric[],
  minConfidence = LEADERBOARD_MIN_CONFIDENCE
): Record<string, RankingEntry[]> {
  const confidenceByMarket = new Map(markets.map((m) => [m.market_id, m.confidence_score]));
  const filtered: Record<string, RankingEntry[]> = {};

  for (const [key, items] of Object.entries(national)) {
    const confident = items.filter(
      (item) => confidenceFor(item.market_id, confidenceByMarket) >= minConfidence
    );
    filtered[key] =
      confident.length >= LEADERBOARD_MIN_ITEMS
        ? confident
        : items.slice(0, Math.min(items.length, 10));
  }

  return filtered;
}

export function buildMoverMarketLookup(
  markets: MarketMetric[],
  minConfidence = RANKINGS_MIN_CONFIDENCE
): Map<string, { market_id: string; city: string; suburb: string }> {
  const lookup = new Map<string, { market_id: string; city: string; suburb: string }>();

  for (const market of markets) {
    if (market.confidence_score < minConfidence) continue;
    lookup.set(`${market.city}|${market.suburb}`, {
      market_id: market.market_id,
      city: market.city,
      suburb: market.suburb,
    });
  }

  return lookup;
}

export function filterMoversPayload(
  payload: MarketMoversRankingsPayload,
  markets: MarketMetric[]
): MarketMoversRankingsPayload {
  const eligible = new Set(
    markets
      .filter((market) => market.confidence_score >= RANKINGS_MIN_CONFIDENCE)
      .map((market) => market.market_id)
  );

  const filterList = (items: TrendMover[]) =>
    items.filter((item) => eligible.has(item.market_id));

  return {
    range: payload.range,
    rent_risers: filterList(payload.rent_risers),
    rent_fallers: filterList(payload.rent_fallers),
    sale_risers: filterList(payload.sale_risers),
    sale_fallers: filterList(payload.sale_fallers),
    supply_surge: filterList(payload.supply_surge),
    dom_shift: filterList(payload.dom_shift),
  };
}

export function daysOnMarketRent(entry: RankingEntry): number | null {
  return entry.median_days_on_market_rent ?? entry.average_days_on_market_rent ?? null;
}

export function daysOnMarketSale(entry: RankingEntry): number | null {
  return entry.median_days_on_market_sale ?? entry.average_days_on_market_sale ?? null;
}
