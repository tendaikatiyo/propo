"use client";

import { useMemo, useState } from "react";
import { format, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const triggerClassName =
  "flex h-11 min-h-11 w-full items-center justify-between gap-2 rounded-xl border border-border/80 bg-background px-3 text-base font-normal shadow-none outline-none transition-colors hover:bg-background focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-placeholder:text-muted-foreground md:text-sm";

function parseMonthValue(value: string): Date | undefined {
  if (!value) return undefined;
  const parsed = parse(value, "yyyy-MM", new Date());
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed;
}

export function MonthPickerField({
  id,
  label,
  value,
  onChange,
  placeholder = "Pick a month",
  fromYear = 1995,
  toYear = new Date().getFullYear(),
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  fromYear?: number;
  toYear?: number;
}) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(() => parseMonthValue(value), [value]);

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          id={id}
          className={cn(triggerClassName, !value && "text-muted-foreground")}
        >
          <span className="truncate">
            {selected ? format(selected, "MMMM yyyy") : placeholder}
          </span>
          <CalendarIcon className="size-4 shrink-0 opacity-50" />
        </PopoverTrigger>
        <PopoverContent
          className="w-auto max-w-[calc(100vw-1.5rem)] p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (!date) return;
              onChange(format(date, "yyyy-MM"));
              setOpen(false);
            }}
            defaultMonth={selected ?? new Date()}
            captionLayout="dropdown"
            startMonth={new Date(fromYear, 0)}
            endMonth={new Date(toYear, 11)}
            disabled={{ after: new Date() }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
