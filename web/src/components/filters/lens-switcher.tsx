"use client";

import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { defaultBudgetForMode } from "@/lib/mode";
import type { ExploreMode } from "@/lib/types";

export function LensSwitcher({
  value,
  onChange,
  variant = "segmented",
  label = "Viewing as",
}: {
  value: ExploreMode;
  onChange: (lens: ExploreMode) => void;
  variant?: "intent" | "short" | "segmented";
  label?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="caption-label">{label}</p>
      <ExploreModeToggle
        variant={variant}
        value={value}
        onChange={(mode) => onChange(mode)}
      />
    </div>
  );
}

export function useLensModeChange(
  setLens: (lens: ExploreMode) => void,
  onBudgetReset?: (budget: number) => void
) {
  return (mode: ExploreMode) => {
    setLens(mode);
    onBudgetReset?.(defaultBudgetForMode(mode));
  };
}
