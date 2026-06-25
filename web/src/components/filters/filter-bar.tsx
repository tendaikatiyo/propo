"use client";

import { Filter } from "lucide-react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { CitySearchCombobox } from "@/components/filters/city-search-combobox";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { BEDROOM_OPTIONS, DEFAULT_BUY_BUDGET, DEFAULT_RENT_BUDGET, PROPERTY_TYPES } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";

function FilterPanelContent() {
  const { filters, setFilters, resetFilters } = useExploreFilters();
  const { data: cities = [] } = useCities();

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
                setFilters({
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
          onChange={(city) => setFilters({ city })}
        />
      </section>

      <section className="space-y-3">
        <BudgetSlider
          mode={filters.mode}
          value={filters.budget}
          onChange={(budget) => setFilters({ budget })}
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
            onClick={() => setFilters({ propertyType: null })}
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
                setFilters({
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
            onClick={() => setFilters({ bedroom: null })}
          >
            Any
          </Button>
          {BEDROOM_OPTIONS.map((opt) => (
            <Button
              key={opt.value}
              type="button"
              size="sm"
              variant={filters.bedroom === opt.value ? "default" : "outline"}
              onClick={() => setFilters({ bedroom: opt.value })}
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
          onClick={() => setFilters({ includeLowConfidence: !filters.includeLowConfidence })}
        >
          Include thin markets
        </Button>
        <Button type="button" size="sm" variant="ghost" className="w-full" onClick={resetFilters}>
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
        <FilterPanelContent />
      </CardContent>
    </Card>
  );
}

export function ExploreFilterMobile() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          className={buttonVariants({ variant: "outline", className: "w-full" })}
        >
          <Filter className="mr-2 size-4" />
          Filters
        </SheetTrigger>
        <SheetContent side="left" className="w-[min(100%,320px)] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterPanelContent />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

/** @deprecated Use ExploreFilterSidebar + ExploreFilterMobile */
export function FilterBar() {
  return (
    <>
      <ExploreFilterSidebar />
      <ExploreFilterMobile />
    </>
  );
}
