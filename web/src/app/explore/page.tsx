import { Suspense } from "react";

import { ExplorePageClient } from "@/components/explore/explore-page";
import { Skeleton } from "@/components/ui/skeleton";
import {
  buildPageMetadata,
  EXPLORE_PAGE_DESCRIPTION,
  EXPLORE_PAGE_TITLE,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: EXPLORE_PAGE_TITLE,
  description: EXPLORE_PAGE_DESCRIPTION,
  path: "/explore",
});

export default function ExplorePage() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <ExplorePageClient />
    </Suspense>
  );
}
