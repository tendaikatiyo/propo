import { ComparePageClient } from "@/components/compare/compare-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Compare suburbs",
  description:
    "Pin up to three Zimbabwe suburbs and compare median rents, sale prices, yields, and market confidence side by side.",
  path: "/compare",
});

export default function ComparePage() {
  return <ComparePageClient />;
}
