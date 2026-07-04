import { Suspense } from "react";

import { RankingsPageClient } from "@/components/rankings/rankings-page";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchLandMetrics,
  fetchMarketMetrics,
  fetchNationalTrendMovers,
  fetchRankings,
} from "@/lib/data-server";
import {
  filterLandRankingsByConfidence,
  filterMoversPayload,
  filterRankingsByConfidence,
} from "@/lib/rankings";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildPageMetadata({
  title: "Market rankings",
  description:
    "Top Zimbabwe suburbs by rental yield, investment opportunity, land $/sqm, and price movers — ranked from Propo's property market database.",
  path: "/rankings",
});

export default async function RankingsPage() {
  const [rankings, markets, landMarkets] = await Promise.all([
    fetchRankings(),
    fetchMarketMetrics(),
    fetchLandMetrics(),
  ]);
  const national = filterRankingsByConfidence(rankings?.national ?? {}, markets);
  const land = filterLandRankingsByConfidence(rankings?.land, landMarkets);
  const movers = filterMoversPayload(
    await fetchNationalTrendMovers(markets, "90d", 10),
    markets
  );

  return (
    <Suspense fallback={<Skeleton className="h-96 w-full rounded-2xl" />}>
      <RankingsPageClient national={national} land={land} movers={movers} />
    </Suspense>
  );
}
