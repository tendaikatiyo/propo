import { RankingsPageClient } from "@/components/rankings/rankings-page";
import { fetchRankings } from "@/lib/data-server";

export const revalidate = 3600;

export default async function RankingsPage() {
  const rankings = await fetchRankings();
  const national = rankings?.national ?? {};

  return <RankingsPageClient national={national} />;
}
