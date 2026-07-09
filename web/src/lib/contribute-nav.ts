import type { ExploreMode } from "@/lib/types";
import { cityPath, fromSlug, suburbPath } from "@/lib/slug";

export function contributeBackNav({
  citySlug,
  suburbSlug,
  mode = "rent",
}: {
  citySlug?: string;
  suburbSlug?: string;
  mode?: ExploreMode;
}): { href: string; label: string } {
  if (citySlug && suburbSlug) {
    return {
      href: suburbPath(fromSlug(citySlug), fromSlug(suburbSlug), { mode }),
      label: `Back to ${fromSlug(suburbSlug)}`,
    };
  }

  if (citySlug) {
    return {
      href: cityPath(fromSlug(citySlug), { mode }),
      label: `Back to ${fromSlug(citySlug)}`,
    };
  }

  return {
    href: "/explore",
    label: "Back to explore",
  };
}
