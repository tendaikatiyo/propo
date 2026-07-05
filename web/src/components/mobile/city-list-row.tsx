import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cityListingTotal } from "@/lib/geo";
import { cityCardSubtitle } from "@/components/mobile/city-stats-grid";
import { motionRow } from "@/lib/motion";
import { cityPath } from "@/lib/slug";
import type { CityMetric, ExploreMode } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CityListRow({
  city,
  lens = "rent",
}: {
  city: CityMetric;
  lens?: ExploreMode;
}) {
  const total = cityListingTotal(city);
  const subtitle = cityCardSubtitle(city, lens).join(" · ");

  return (
    <Link
      href={cityPath(city.city, { mode: lens })}
      className={cn(
        motionRow,
        "flex min-h-[68px] items-center gap-3 border-b border-border/80 px-4 py-3 last:border-b-0 active:bg-muted/50"
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-heading font-medium">{city.city}</p>
        <p className="truncate text-xs text-muted-foreground">
          {city.suburb_count} suburbs · {total} listings
        </p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
    </Link>
  );
}
