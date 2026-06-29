import { HomePageClient } from "@/components/home/home-page";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({ path: "/" });

export default function HomePage() {
  return <HomePageClient />;
}
