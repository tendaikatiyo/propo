"use client";

import { Button } from "@/components/ui/button";
import {
  defaultBudgetForMode,
  EXPLORE_MODES,
  modeIntentLabel,
  modeLabel,
} from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";

export function ExploreModeToggle({
  value,
  onChange,
  variant = "intent",
}: {
  value: ExploreMode;
  onChange: (mode: ExploreMode, defaultBudget: number) => void;
  /** intent = home copy ("I'm renting"); short = filter sidebar ("Rent") */
  variant?: "intent" | "short";
}) {
  const layoutClass = variant === "intent" ? "flex flex-wrap gap-2" : "grid grid-cols-3 gap-2";

  return (
    <div className={layoutClass}>
      {EXPLORE_MODES.map((mode) => (
        <Button
          key={mode}
          type="button"
          size="sm"
          variant={value === mode ? "default" : "outline"}
          onClick={() => onChange(mode, defaultBudgetForMode(mode))}
        >
          {variant === "intent" ? modeIntentLabel(mode) : modeLabel(mode)}
        </Button>
      ))}
    </div>
  );
}
