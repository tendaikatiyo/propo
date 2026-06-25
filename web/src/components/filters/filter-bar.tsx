"use client";

import { Filter } from "lucide-react";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCities } from "@/hooks/use-market-data";
import { useExploreFilters } from "@/hooks/use-explore-filters";
import { BEDROOM_OPTIONS, PROPERTY_TYPES } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import type { PropertyType } from "@/lib/types";

function FilterControls({ compact = false }: { compact?: boolean }) {
  const { filters, setFilters, resetFilters } = useExploreFilters();
  const { data: cities = [] } = useCities();

  const cityOptions = [...cities]
    .sort((a, b) => a.city.localeCompare(b.city))
    .map((c) => c.city);

  const hasBedroomData = true;

  return (
    <div className={compact ? "space-y-5" : "grid gap-4 lg:grid-cols-[auto_1fr_1fr_1.5fr_auto] lg:items-end"}>
      <div className="space-y-2">
        {!compact ? <Label className="caption-label">Mode</Label> : null}
        <div className="flex gap-2">
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
      </div>

      <div className="space-y-2">
        <Label className="caption-label">City</Label>
        <Select
          value={filters.city ?? "all"}
          onValueChange={(value) => setFilters({ city: value === "all" ? null : value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All cities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All cities</SelectItem>
            {cityOptions.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="caption-label">Property type</Label>
        <div className="flex flex-wrap gap-2">
          {PROPERTY_TYPES.map((type) => {
            const active = filters.propertyTypes.includes(type);
            return (
              <Button
                key={type}
                type="button"
                size="sm"
                variant={active ? "default" : "outline"}
                onClick={() => {
                  const next = active
                    ? filters.propertyTypes.filter((t) => t !== type)
                    : [...filters.propertyTypes, type];
                  setFilters({ propertyTypes: next as PropertyType[] });
                }}
              >
                {propertyTypeLabel(type)}
              </Button>
            );
          })}
        </div>
      </div>

      {hasBedroomData ? (
        <div className="space-y-2">
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
        </div>
      ) : null}

      <div className="space-y-2 lg:min-w-[240px]">
        <BudgetSlider
          mode={filters.mode}
          value={filters.budget}
          onChange={(budget) => setFilters({ budget })}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          size="sm"
          variant={filters.includeLowConfidence ? "default" : "outline"}
          onClick={() => setFilters({ includeLowConfidence: !filters.includeLowConfidence })}
        >
          Include thin markets
        </Button>
        <Button type="button" size="sm" variant="ghost" onClick={resetFilters}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export function FilterBar() {
  return (
    <>
      <div className="hidden border-b border-border/80 bg-card px-4 py-5 sm:px-6 lg:block lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FilterControls />
        </div>
      </div>

      <div className="border-b px-4 py-3 lg:hidden">
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "outline", className: "w-full" })}>
            <Filter className="mr-2 size-4" />
            Filters
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <FilterControls compact />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
