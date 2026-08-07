"use client";

import { Button } from "@/components/ui/button";
import { SlidingTabs } from "@/components/ui/sliding-tabs";
import {
  defaultBudgetForMode,
  EXPLORE_MODES,
  modeIntentLabel,
  modeLabel,
} from "@/lib/mode";
import { MODE_ACCENT } from "@/lib/mode-accent";
import type { ExploreMode } from "@/lib/types";
import { cn } from "@/lib/utils";

type ExploreModeToggleProps = {
  value: ExploreMode;
  onChange: (mode: ExploreMode, defaultBudget: number) => void;
  /** intent = home copy; short = separate pills; segmented = unified 4-way control */
  variant?: "intent" | "short" | "segmented";
  /** Larger touch targets for mobile sheets */
  comfortable?: boolean;
  /** Subset of modes to show — defaults to all explore modes */
  modes?: readonly ExploreMode[];
  className?: string;
};

function ExploreModeSegmented({
  value,
  onChange,
  comfortable = false,
  modes = EXPLORE_MODES,
  className,
}: Pick<
  ExploreModeToggleProps,
  "value" | "onChange" | "comfortable" | "modes" | "className"
>) {
  return (
    <SlidingTabs
      aria-label="Browse mode"
      value={value}
      options={modes.map((mode) => ({
        value: mode,
        label: modeLabel(mode),
      }))}
      onChange={(mode) => onChange(mode, defaultBudgetForMode(mode))}
      pillColor={MODE_ACCENT[value].color}
      className={cn(comfortable && "gap-1.5 rounded-2xl p-1.5 [&_.t-tab]:min-h-11 [&_.t-tab]:px-2 [&_.t-tab]:text-sm [&_.t-tab]:tracking-normal", className)}
    />
  );
}

export function ExploreModeToggle({
  value,
  onChange,
  variant = "intent",
  comfortable = false,
  modes = EXPLORE_MODES,
  className,
}: ExploreModeToggleProps) {
  if (variant === "segmented") {
    return (
      <ExploreModeSegmented
        value={value}
        onChange={onChange}
        comfortable={comfortable}
        modes={modes}
        className={className}
      />
    );
  }

  const layoutClass =
    variant === "intent"
      ? "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
      : modes.length === 3
        ? "grid grid-cols-3 gap-2"
        : "grid grid-cols-2 gap-2 sm:grid-cols-4";

  return (
    <div className={cn(layoutClass, className)}>
      {modes.map((mode) => (
        <Button
          key={mode}
          type="button"
          size={comfortable ? "lg" : "sm"}
          variant={value === mode ? "default" : "outline"}
          className={comfortable ? "min-h-11" : undefined}
          onClick={() => onChange(mode, defaultBudgetForMode(mode))}
        >
          {variant === "intent" ? modeIntentLabel(mode) : modeLabel(mode)}
        </Button>
      ))}
    </div>
  );
}
