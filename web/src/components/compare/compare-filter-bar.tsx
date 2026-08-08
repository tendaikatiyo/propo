"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { useCompareFilters } from "@/hooks/use-compare-filters";
import { hasActiveSegmentFilters, segmentFilterLabel } from "@/lib/segments";

export function CompareFilterBar() {
  const { filters, setFilters, resetFilters } = useCompareFilters();
  const isLand = filters.mode === "land";
  const isRoom = filters.propertyType === "room";
  const specLabel = segmentFilterLabel(filters.propertyType, filters.bedroom);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Compare filters</CardTitle>
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
            Optional: filter compared medians by property type where enough listings exist.
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-5">
        {!isLand ? (
          <>
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
