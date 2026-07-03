"use client";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { CitySearchCombobox } from "@/components/filters/city-search-combobox";
import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { budgetForMode } from "@/lib/explore";
import { isLandMode } from "@/lib/mode";
import { hasActiveSegmentFilters } from "@/lib/segments";

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
  const isRoom = filters.propertyType === "room";
  const land = isLandMode(filters.mode);

  const apply = (patch: Parameters<typeof setFilters>[0]) => {
    setFilters(patch, filterOptions);
    onNavigate?.();
  };

  const reset = () => {
    resetFilters(filterOptions);
    onNavigate?.();
  };

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <Label className="caption-label">I want to</Label>
        <ExploreModeToggle
          variant="short"
          value={filters.mode}
          onChange={(mode, defaultBudget) =>
            apply({
              mode,
              budget:
                mode === filters.mode
                  ? filters.budget
                  : budgetForMode(mode, defaultBudget),
              ...(mode === "land" ? { propertyType: null, bedroom: null } : {}),
              ...(mode === "buy" && filters.propertyType === "room"
                ? { propertyType: null }
                : {}),
            })
          }
        />
      </section>

      <Separator />

      <section className="space-y-3">
        <Label className="caption-label">City</Label>
        <CitySearchCombobox
          cities={cities}
          value={filters.city}
          onChange={(city) => apply({ city })}
          mode={filters.mode}
        />
      </section>

      <section className="space-y-3">
        <BudgetSlider
          mode={filters.mode}
          value={filters.budget}
          onChange={(budget) => apply({ budget })}
        />
      </section>

      {!land ? (
        <>
          <Separator />

          <section className="space-y-3">
            <Label className="caption-label">Property type</Label>
            <PropertyTypeButtons
              mode={filters.mode}
              value={filters.propertyType}
              onChange={(propertyType) => apply({ propertyType })}
            />
          </section>

          {isRoom ? (
            <p className="text-xs text-muted-foreground">
              Rooms are listed as single occupancy (1 bed).
            </p>
          ) : null}

          {hasActiveSegmentFilters(filters) ? (
            <FilterSwitchRow
              id="include-suburb-medians"
              label="Include suburb medians"
              description="When on, we also show suburbs where we only have a suburb-wide average — not enough listings for your property type."
              checked={!filters.hideSuburbMedianFallback}
              onCheckedChange={(checked) => apply({ hideSuburbMedianFallback: !checked })}
            />
          ) : null}
        </>
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
