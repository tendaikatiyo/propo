"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCompareFilters } from "@/hooks/use-compare-filters";
import { propertyTypesForMode } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import { hasActiveSegmentFilters, segmentFilterLabel } from "@/lib/segments";
import type { PropertyType } from "@/lib/types";

export function CompareFilterBar() {
  const { filters, setFilters, resetFilters } = useCompareFilters();
  const propertyTypes = propertyTypesForMode(filters.mode);
  const isRoom = filters.propertyType === "room";
  const specLabel = segmentFilterLabel(filters.propertyType, filters.bedroom);

  const selectPropertyType = (type: PropertyType | null) => {
    if (type === null) {
      setFilters({ propertyType: null });
      return;
    }
    if (filters.propertyType === type) {
      setFilters({ propertyType: null });
      return;
    }
    setFilters({ propertyType: type });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Compare by spec</CardTitle>
        {specLabel ? (
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
          <div className="flex flex-wrap gap-2">
            {(["rent", "buy"] as const).map((mode) => (
              <Button
                key={mode}
                type="button"
                size="sm"
                variant={filters.mode === mode ? "default" : "outline"}
                onClick={() => setFilters({ mode })}
              >
                {mode === "rent" ? "Rent" : "Buy"}
              </Button>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-2">
          <Label className="caption-label">Property type</Label>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              size="sm"
              variant={filters.propertyType == null ? "default" : "outline"}
              onClick={() => selectPropertyType(null)}
            >
              Any
            </Button>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                type="button"
                size="sm"
                variant={filters.propertyType === type ? "default" : "outline"}
                onClick={() => selectPropertyType(type)}
              >
                {propertyTypeLabel(type)}
              </Button>
            ))}
          </div>
        </section>

        {isRoom ? (
          <p className="text-xs text-muted-foreground">Rooms are listed as single occupancy (1 bed).</p>
        ) : null}

        {hasActiveSegmentFilters(filters) ? (
          <Button type="button" size="sm" variant="ghost" onClick={resetFilters}>
            Clear spec filters
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
