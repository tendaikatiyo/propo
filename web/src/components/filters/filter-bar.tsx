"use client";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { CitySearchCombobox } from "@/components/filters/city-search-combobox";
import { Disclosure } from "@/components/ui/disclosure";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { defaultBudgetForMode, isLandMode } from "@/lib/mode";

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
      {land ? (
        <p className="text-sm text-muted-foreground">
          Optional filters — by default every priced land market is listed.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          Optional filters — by default every suburb is listed. Open a profile for full stats.
        </p>
      )}

      <section className="space-y-3">
        <Label className="caption-label">City</Label>
        <CitySearchCombobox
          cities={cities}
          value={filters.city}
          onChange={(city) => apply({ city })}
          mode={filters.mode}
        />
      </section>

      {land ? (
        <section className="space-y-3">
          <div className="flex items-end justify-between gap-2">
            <Label className="caption-label">$/sqm budget</Label>
            {filters.budgetFilterActive ? (
              <button
                type="button"
                className="text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                onClick={() =>
                  apply({
                    budgetFilterActive: false,
                    budget: defaultBudgetForMode("land"),
                  })
                }
              >
                Clear
              </button>
            ) : null}
          </div>
          {!filters.budgetFilterActive ? (
            <p className="text-xs text-muted-foreground">
              Off — move the slider to filter by budget.
            </p>
          ) : null}
          <BudgetSlider
            mode={filters.mode}
            value={filters.budget}
            onChange={(budget) => apply({ budget, budgetFilterActive: true })}
          />
        </section>
      ) : null}

      <Separator />

      <section className="space-y-4">
        <FilterSwitchRow
          id="include-thin-markets"
          label="Show suburbs with less data"
          description="On by default. Turn off to hide low-confidence suburbs."
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
    <div data-tour="filters" className="sticky top-24 hidden lg:block">
      <Disclosure
        title="Filters"
        description="Optional — off by default"
        defaultOpen={false}
      >
        <ExploreFilterPanel />
      </Disclosure>
    </div>
  );
}

/** @deprecated Use ExploreFilterSidebar */
export function FilterBar() {
  return <ExploreFilterSidebar />;
}
