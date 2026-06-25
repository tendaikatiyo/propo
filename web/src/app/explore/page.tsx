import { Suspense } from "react";

import { ExplorePageClient } from "@/components/explore/explore-page";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExplorePage() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <ExplorePageClient />
    </Suspense>
  );
}
