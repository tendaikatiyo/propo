import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cityListingTotal } from "@/lib/geo";
import { formatCurrency, formatPercent } from "@/lib/format";
import { cityPath } from "@/lib/slug";
import type { CityMetric } from "@/lib/types";

export function CityListRow({ city }: { city: CityMetric }) {
  const total = cityListingTotal(city);

  return (
    <Link
      href={cityPath(city.city)}
      className="flex min-h-[68px] items-center gap-3 border-b border-border/80 px-4 py-3 last:border-b-0 active:bg-muted/50"
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-heading font-medium">{city.city}</p>
        <p className="truncate text-xs text-muted-foreground">
          {city.suburb_count} suburbs · {total} listings
        </p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          Rent {formatCurrency(city.median_rent)} · Yield{" "}
          {formatPercent(city.average_yield)}
        </p>
      </div>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
    </Link>
  );
}
