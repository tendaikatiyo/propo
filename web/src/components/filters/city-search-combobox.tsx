"use client";

import { useMemo, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { sortCitiesByMarketSize, cityListingTotal } from "@/lib/geo";
import type { CityMetric } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CitySearchCombobox({
  cities,
  value,
  onChange,
  allowAll = true,
  placeholder = "Select city",
}: {
  cities: CityMetric[];
  value: string | null;
  onChange: (city: string | null) => void;
  allowAll?: boolean;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const sorted = useMemo(() => sortCitiesByMarketSize(cities), [cities]);

  const label =
    value === null && allowAll
      ? "All cities"
      : value ?? placeholder;

  return (
    <div className="relative w-full">
      <Button
        type="button"
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-full justify-between font-normal"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="truncate">{label}</span>
        <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
      </Button>
      {open ? (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full z-50 mt-1 w-full rounded-xl border bg-popover shadow-lg">
            <Command>
              <CommandInput placeholder="Search cities..." />
              <CommandList>
                <CommandEmpty>No city found.</CommandEmpty>
                <CommandGroup>
                  {allowAll ? (
                    <CommandItem
                      value="all-cities"
                      onSelect={() => {
                        onChange(null);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 size-4",
                          value === null ? "opacity-100" : "opacity-0"
                        )}
                      />
                      All cities
                    </CommandItem>
                  ) : null}
                  {sorted.map((city) => (
                    <CommandItem
                      key={city.city}
                      value={city.city}
                      onSelect={() => {
                        onChange(city.city);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 size-4",
                          value === city.city ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <span className="flex-1">{city.city}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {cityListingTotal(city)}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </>
      ) : null}
    </div>
  );
}
