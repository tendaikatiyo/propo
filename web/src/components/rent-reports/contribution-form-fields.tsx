"use client";

import { useState } from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/** 16px on mobile avoids iOS zoom; 44px min height for touch. */
export const contributionFieldClassName =
  "h-11 min-h-11 rounded-xl border-border/80 bg-background px-3 text-base shadow-none md:text-sm";

export const contributionSelectTriggerClassName = cn(
  contributionFieldClassName,
  "w-full border data-placeholder:text-muted-foreground"
);

type ContributionSelectOption = { value: string; label: string };

function ContributionSearchableSelect({
  id,
  label,
  value,
  onValueChange,
  placeholder,
  disabled,
  options,
  searchPlaceholder,
}: {
  id: string;
  label: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder: string;
  disabled?: boolean;
  options: ContributionSelectOption[];
  searchPlaceholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value) ?? null;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          id={id}
          disabled={disabled}
          className={cn(
            contributionSelectTriggerClassName,
            "flex items-center justify-between gap-2 text-left font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          <span className={cn("truncate", !selected && "text-muted-foreground")}>
            {selected?.label ?? placeholder}
          </span>
          <ChevronsUpDownIcon className="size-4 shrink-0 text-muted-foreground opacity-60" />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={4}
          className="w-[var(--anchor-width)] max-w-[calc(100vw-1.5rem)] min-w-[min(100%,var(--anchor-width))] p-0"
        >
          <Command>
            <CommandInput
              placeholder={searchPlaceholder ?? `Search ${label.toLowerCase()}…`}
              className="h-11 text-base md:text-sm"
            />
            <CommandList className="max-h-[min(50dvh,18rem)]">
              <CommandEmpty>No match.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const checked = option.value === value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={`${option.label} ${option.value}`}
                      data-checked={checked ? "true" : undefined}
                      className="min-h-11 py-2.5 text-base md:min-h-9 md:py-1.5 md:text-sm"
                      onSelect={() => {
                        onValueChange(option.value);
                        setOpen(false);
                      }}
                    >
                      <span className="truncate">{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function ContributionFormSelect({
  id,
  label,
  value,
  onValueChange,
  placeholder,
  disabled,
  required,
  options,
  searchable = false,
  searchPlaceholder,
}: {
  id: string;
  label: string;
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  options: ContributionSelectOption[];
  searchable?: boolean;
  searchPlaceholder?: string;
}) {
  if (searchable) {
    return (
      <ContributionSearchableSelect
        id={id}
        label={label}
        value={value}
        onValueChange={onValueChange}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        searchPlaceholder={searchPlaceholder}
      />
    );
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value}
        onValueChange={(next) => onValueChange(next)}
        disabled={disabled}
        required={required}
        items={options.map((option) => ({
          value: option.value,
          label: option.label,
        }))}
      >
        <SelectTrigger id={id} className={contributionSelectTriggerClassName}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="max-h-[min(50dvh,18rem)]">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="min-h-11 py-2.5 text-base md:min-h-9 md:py-1.5 md:text-sm"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
