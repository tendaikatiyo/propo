import { HomePageClient } from "@/components/home/home-page";
import {
  buildPageMetadata,
  HOME_PAGE_DESCRIPTION,
  HOME_PAGE_TITLE,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/",
  title: HOME_PAGE_TITLE,
  description: HOME_PAGE_DESCRIPTION,
});

export default function HomePage() {
  return <HomePageClient />;
}
