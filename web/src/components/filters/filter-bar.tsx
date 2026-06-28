"use client";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { CitySearchCombobox } from "@/components/filters/city-search-combobox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import {
  BEDROOM_OPTIONS,
  DEFAULT_BUY_BUDGET,
  DEFAULT_RENT_BUDGET,
  propertyTypesForMode,
  ROOM_BEDROOM_COUNT,
} from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import { hasActiveSegmentFilters } from "@/lib/segments";
import type { PropertyType } from "@/lib/types";

function FilterSwitchRow({
  id,
  label,
  description,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 space-y-1">
        <Label htmlFor={id} className="cursor-pointer text-sm leading-snug font-medium">
          {label}
        </Label>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5 shrink-0"
      />
    </div>
  );
}

export function ExploreFilterPanel({
  targetPath,
  onNavigate,
}: {
  targetPath?: string;
  onNavigate?: () => void;
}) {
  const { filters, setFilters, resetFilters } = useExploreFilters();
  const { data: cities = [] } = useCities();

  const filterOptions = targetPath ? { targetPath } : undefined;
  const propertyTypes = propertyTypesForMode(filters.mode);
  const isRoom = filters.propertyType === "room";

  const apply = (patch: Parameters<typeof setFilters>[0]) => {
    setFilters(patch, filterOptions);
    onNavigate?.();
  };

  const reset = () => {
    resetFilters(filterOptions);
    onNavigate?.();
  };

  const selectPropertyType = (type: PropertyType | null) => {
    const wasRoom = filters.propertyType === "room";
    if (type === null) {
      apply({
        propertyType: null,
        bedroom: wasRoom ? null : filters.bedroom,
      });
      return;
    }
    if (type === "room") {
      apply({ propertyType: "room", bedroom: ROOM_BEDROOM_COUNT });
      return;
    }
    if (filters.propertyType === type) {
      apply({ propertyType: null, bedroom: wasRoom ? null : filters.bedroom });
      return;
    }
    apply({
      propertyType: type,
      bedroom: wasRoom ? null : filters.bedroom,
    });
  };

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Label className="caption-label">I want to</Label>
        <div className="grid grid-cols-2 gap-2">
          {(["rent", "buy"] as const).map((mode) => (
            <Button
              key={mode}
              type="button"
              variant={filters.mode === mode ? "default" : "outline"}
              onClick={() =>
                apply({
                  mode,
                  budget:
                    mode === filters.mode
                      ? filters.budget
                      : mode === "rent"
                        ? DEFAULT_RENT_BUDGET
                        : DEFAULT_BUY_BUDGET,
                })
              }
            >
              {mode === "rent" ? "Rent" : "Buy"}
            </Button>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-3">
        <Label className="caption-label">City</Label>
        <CitySearchCombobox
          cities={cities}
          value={filters.city}
          onChange={(city) => apply({ city })}
        />
      </section>

      <section className="space-y-3">
        <BudgetSlider
          mode={filters.mode}
          value={filters.budget}
          onChange={(budget) => apply({ budget })}
        />
      </section>

      <Separator />

      <section className="space-y-3">
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

      {!isRoom ? (
        <section className="space-y-3">
          <Label className="caption-label">Bedrooms</Label>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              size="sm"
              variant={filters.bedroom == null ? "default" : "outline"}
              onClick={() => apply({ bedroom: null })}
            >
              Any
            </Button>
            {BEDROOM_OPTIONS.map((opt) => (
              <Button
                key={opt.value}
                type="button"
                size="sm"
                variant={filters.bedroom === opt.value ? "default" : "outline"}
                onClick={() => apply({ bedroom: opt.value })}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-xs text-muted-foreground">Rooms are listed as single occupancy (1 bed).</p>
      )}

      {hasActiveSegmentFilters(filters) ? (
        <FilterSwitchRow
          id="hide-suburb-estimates"
          label="Hide rough suburb averages"
          description="When on, we skip suburbs where we don't have enough listings for your home type and bedrooms — only suburbs with a reliable match stay in the list."
          checked={filters.hideSuburbMedianFallback}
          onCheckedChange={(checked) => apply({ hideSuburbMedianFallback: checked })}
        />
      ) : null}

      <Separator />

      <section className="space-y-4">
        <FilterSwitchRow
          id="include-thin-markets"
          label="Show suburbs with less data"
          description="When on, we also include suburbs where we have fewer listings to work with. Helpful if you want more options, but prices may be less reliable."
          checked={filters.includeLowConfidence}
          onCheckedChange={(checked) => apply({ includeLowConfidence: checked })}
        />
        <Button type="button" size="sm" variant="ghost" className="w-full" onClick={reset}>
          Reset filters
        </Button>
      </section>
    </div>
  );
}

export function ExploreFilterSidebar() {
  return (
    <Card data-tour="filters" className="sticky top-24 hidden lg:block">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <ExploreFilterPanel />
      </CardContent>
    </Card>
  );
}

/** @deprecated Use ExploreFilterSidebar */
export function FilterBar() {
  return <ExploreFilterSidebar />;
}
