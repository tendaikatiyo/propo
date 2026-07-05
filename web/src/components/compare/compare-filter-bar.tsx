"use client";

import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { useCompareFilters } from "@/hooks/use-compare-filters";
import { trackLensChange } from "@/lib/analytics/track";
import { hasActiveSegmentFilters, segmentFilterLabel } from "@/lib/segments";

export function CompareFilterBar() {
  const { filters, setFilters, resetFilters } = useCompareFilters();
  const isLand = filters.mode === "land";
  const isRoom = filters.propertyType === "room";
  const specLabel = segmentFilterLabel(filters.propertyType, filters.bedroom);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Compare focus</CardTitle>
        {isLand ? (
          <p className="text-sm text-muted-foreground">
            Land mode compares median $/sqm, listing count, and days on market.
          </p>
        ) : specLabel ? (
          <p className="text-sm text-muted-foreground">
            Showing segment medians for {specLabel} where enough listings exist; otherwise
            suburb-wide median.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Optional: filter medians by property type (same as Explore).
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        <section className="space-y-2">
          <Label className="caption-label">Focus</Label>
          <ExploreModeToggle
            variant="segmented"
            value={filters.mode}
            onChange={(mode) => {
              if (filters.mode !== mode) {
                trackLensChange({
                  lens: mode,
                  previousLens: filters.mode,
                  source: "compare",
                });
              }
              setFilters({ mode });
            }}
          />
        </section>

        {!isLand ? (
          <>
            <Separator />

            <section className="space-y-2">
              <Label className="caption-label">Property type</Label>
              <PropertyTypeButtons
                mode={filters.mode}
                value={filters.propertyType}
                onChange={(propertyType) => setFilters({ propertyType })}
              />
            </section>

            {isRoom ? (
              <p className="text-xs text-muted-foreground">
                Rooms are listed as single occupancy (1 bed).
              </p>
            ) : null}

            {hasActiveSegmentFilters(filters) ? (
              <Button type="button" size="sm" variant="ghost" onClick={resetFilters}>
                Clear spec filters
              </Button>
            ) : null}
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
