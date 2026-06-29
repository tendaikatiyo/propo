import { RankingsPageClient } from "@/components/rankings/rankings-page";
import { fetchMarketMetrics, fetchRankings } from "@/lib/data-server";
import { filterRankingsByConfidence } from "@/lib/rankings";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildPageMetadata({
  title: "Market rankings",
  description:
    "Top Zimbabwe suburbs by rental yield, investment opportunity, and days on market — ranked from active listing data.",
  path: "/rankings",
});

export default async function RankingsPage() {
  const [rankings, markets] = await Promise.all([fetchRankings(), fetchMarketMetrics()]);
  const national = filterRankingsByConfidence(rankings?.national ?? {}, markets);

  return <RankingsPageClient national={national} />;
}
