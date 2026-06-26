import { RANKINGS_MIN_CONFIDENCE } from "@/lib/constants";
import type { MarketMetric, RankingEntry } from "@/lib/types";

export function filterRankingsByConfidence(
  national: Record<string, RankingEntry[]>,
  markets: MarketMetric[]
): Record<string, RankingEntry[]> {
  const confidenceByMarket = new Map(markets.map((m) => [m.market_id, m.confidence_score]));
  const filtered: Record<string, RankingEntry[]> = {};

  for (const [key, items] of Object.entries(national)) {
    filtered[key] = items.filter(
      (item) => (confidenceByMarket.get(item.market_id) ?? 0) >= RANKINGS_MIN_CONFIDENCE
    );
  }

  return filtered;
}
