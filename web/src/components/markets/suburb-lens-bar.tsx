"use client";

import { trackLensChange } from "@/lib/analytics/track";
import { LensSwitcher } from "@/components/filters/lens-switcher";
import { suburbPath } from "@/lib/slug";
import type { ExploreMode, PropertyType } from "@/lib/types";

export function SuburbLensBar({
  city,
  suburb,
  lens,
  propertyType,
  bedroom,
}: {
  city: string;
  suburb: string;
  lens: ExploreMode;
  propertyType: PropertyType | null;
  bedroom: number | null;
}) {
  return (
    <div className="max-w-xl print:hidden">
      <LensSwitcher
        value={lens}
        onChange={(next) => {
          if (next !== lens) {
            trackLensChange({
              lens: next,
              previousLens: lens,
              source: "suburb_profile",
            });
          }
          window.location.href = suburbPath(city, suburb, {
            type: propertyType,
            bedroom,
            mode: next,
          });
        }}
        label="Show"
      />
    </div>
  );
}
