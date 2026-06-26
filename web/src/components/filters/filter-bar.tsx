"use client";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { CitySearchCombobox } from "@/components/filters/city-search-combobox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { BEDROOM_OPTIONS, DEFAULT_BUY_BUDGET, DEFAULT_RENT_BUDGET, PROPERTY_TYPES } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";

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
            onClick={() => apply({ propertyType: null })}
          >
            Any
          </Button>
          {PROPERTY_TYPES.map((type) => (
            <Button
              key={type}
              type="button"
              size="sm"
              variant={filters.propertyType === type ? "default" : "outline"}
              onClick={() =>
                apply({
                  propertyType: filters.propertyType === type ? null : type,
                })
              }
            >
              {propertyTypeLabel(type)}
            </Button>
          ))}
        </div>
      </section>

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

      <Separator />

      <section className="space-y-3">
        <Button
          type="button"
          size="sm"
          variant={filters.includeLowConfidence ? "default" : "outline"}
          className="w-full"
          onClick={() => apply({ includeLowConfidence: !filters.includeLowConfidence })}
        >
          Include thin markets
        </Button>
        <Button type="button" size="sm" variant="ghost" className="w-full" onClick={reset}>
          Reset filters
        </Button>
      </section>
    </div>
  );
}

export function ExploreFilterSidebar() {
  return (
    <Card className="sticky top-24 hidden lg:block">
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
