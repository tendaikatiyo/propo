import { Suspense } from "react";

import { RankingsPageClient } from "@/components/rankings/rankings-page";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchMarketMetrics, fetchNationalTrendMovers, fetchRankings } from "@/lib/data-server";
import { filterMoversPayload, filterRankingsByConfidence } from "@/lib/rankings";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildPageMetadata({
  title: "Market rankings",
  description:
    "Top Zimbabwe suburbs by rental yield, investment opportunity, price movers, and days on market — ranked from active listing data.",
  path: "/rankings",
});

export default async function RankingsPage() {
  const [rankings, markets] = await Promise.all([fetchRankings(), fetchMarketMetrics()]);
  const national = filterRankingsByConfidence(rankings?.national ?? {}, markets);
  const movers = filterMoversPayload(
    await fetchNationalTrendMovers(markets, "90d", 10),
    markets
  );

  return (
    <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
      <RankingsPageClient national={national} movers={movers} />
    </Suspense>
  );
}
