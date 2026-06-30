import { Suspense } from "react";

import { ComparePageClient } from "@/components/compare/compare-page";
import { Skeleton } from "@/components/ui/skeleton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Compare suburbs",
  description:
    "Pin up to three Zimbabwe suburbs and compare median rents, sale prices, yields, and market confidence — filter by property type and bedrooms for segment-accurate medians.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <Suspense fallback={<Skeleton className="h-96 w-full" />}>
      <ComparePageClient />
    </Suspense>
  );
}
