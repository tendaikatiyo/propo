"use client";

import { BUY_BUDGET_RANGE, RENT_BUDGET_RANGE } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";
import type { ExploreMode } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function BudgetSlider({
  mode,
  value,
  onChange,
}: {
  mode: ExploreMode;
  value: number;
  onChange: (value: number) => void;
}) {
  const range = mode === "rent" ? RENT_BUDGET_RANGE : BUY_BUDGET_RANGE;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="budget-input">Budget</Label>
        <Input
          id="budget-input"
          type="number"
          className="w-32 tabular-nums"
          min={range.min}
          max={range.max}
          step={range.step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value) || range.min)}
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
      <p className="text-sm text-muted-foreground tabular-nums">{formatCurrency(value)}</p>
    </div>
  );
}
