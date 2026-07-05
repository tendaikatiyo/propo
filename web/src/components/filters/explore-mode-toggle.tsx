"use client";

import { Button } from "@/components/ui/button";
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
  className?: string;
};

function ExploreModeSegmented({
  value,
  onChange,
  className,
}: Pick<ExploreModeToggleProps, "value" | "onChange" | "className">) {
  return (
    <div
      role="group"
      aria-label="Focus"
      className={cn("grid grid-cols-4 gap-1 rounded-xl bg-muted p-1", className)}
    >
      {EXPLORE_MODES.map((mode) => {
        const active = value === mode;
        return (
          <button
            key={mode}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(mode, defaultBudgetForMode(mode))}
            className={cn(
              "rounded-lg px-1.5 py-2 text-center text-xs font-medium transition-colors sm:px-2.5 sm:text-sm",
              active
                ? cn(MODE_ACCENT[mode].chip, "shadow-sm")
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {modeLabel(mode)}
          </button>
        );
      })}
    </div>
  );
}

export function ExploreModeToggle({
  value,
  onChange,
  variant = "intent",
  className,
}: ExploreModeToggleProps) {
  if (variant === "segmented") {
    return <ExploreModeSegmented value={value} onChange={onChange} className={className} />;
  }

  const layoutClass =
    variant === "intent"
      ? "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
      : "grid grid-cols-2 gap-2 sm:grid-cols-4";

  return (
    <div className={cn(layoutClass, className)}>
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
