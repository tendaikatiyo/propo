import { Suspense } from "react";

import { ExplorePageClient } from "@/components/explore/explore-page";
import { Skeleton } from "@/components/ui/skeleton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Explore suburbs",
  description:
    "Filter Zimbabwe suburbs by budget, property type, and bedrooms. Compare median rents, sale prices, and yields.",
  path: "/explore",
});

export default function ExplorePage() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <ExplorePageClient />
    </Suspense>
  );
}
