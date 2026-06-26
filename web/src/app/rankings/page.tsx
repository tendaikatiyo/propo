import { RankingsPageClient } from "@/components/rankings/rankings-page";
import { fetchMarketMetrics, fetchRankings } from "@/lib/data-server";
import { filterRankingsByConfidence } from "@/lib/rankings";

export const revalidate = 3600;

export default async function RankingsPage() {
  const [rankings, markets] = await Promise.all([fetchRankings(), fetchMarketMetrics()]);
  const national = filterRankingsByConfidence(rankings?.national ?? {}, markets);

  return <RankingsPageClient national={national} />;
}
