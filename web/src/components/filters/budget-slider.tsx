"use client";

import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { budgetRangeForMode } from "@/lib/constants";
import { formatCurrency, formatPricePerSqm } from "@/lib/format";
import { isLandMode } from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

function clampBudget(value: number, min: number, max: number, step: number) {
  const stepped = Math.round(value / step) * step;
  return Math.min(max, Math.max(min, stepped));
}

export function BudgetSlider({
  mode,
  value,
  onChange,
}: {
  mode: ExploreMode;
  value: number;
  onChange: (value: number) => void;
}) {
  const range = budgetRangeForMode(mode);
  const land = isLandMode(mode);
  const formatted = land ? formatPricePerSqm(value) : formatCurrency(value);
  const atMin = value <= range.min;
  const atMax = value >= range.max;

  function stepBudget(delta: number) {
    onChange(clampBudget(value + delta, range.min, range.max, range.step));
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3">
        <Label htmlFor="budget-input" className="caption-label normal-case">
          {land ? "Budget (per sqm)" : "Budget"}
        </Label>

        <div className="flex w-full items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={atMin}
            aria-label="Decrease budget"
            onClick={() => stepBudget(-range.step)}
          >
            <Minus />
          </Button>
          <span
            className={cn(
              "font-stat min-w-0 flex-1 text-center text-base font-medium tabular-nums",
              "text-foreground"
            )}
            aria-live="polite"
          >
            {formatted}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            disabled={atMax}
            aria-label="Increase budget"
            onClick={() => stepBudget(range.step)}
          >
            <Plus />
          </Button>
        </div>

        <Input
          id="budget-input"
          type="number"
          className="hidden w-32 tabular-nums md:block"
          min={range.min}
          max={range.max}
          step={range.step}
          value={value}
          onChange={(e) =>
            onChange(clampBudget(Number(e.target.value) || range.min, range.min, range.max, range.step))
          }
        />
      </div>

      <Slider
        min={range.min}
        max={range.max}
        step={range.step}
        value={[value]}
        onValueChange={(values) => {
          const next = Array.isArray(values) ? values[0] : values;
          if (typeof next === "number") onChange(next);
        }}
      />

      <p className="font-stat hidden text-sm text-muted-foreground md:block">{formatted}</p>
    </div>
  );
}
