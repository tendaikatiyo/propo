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
  const columnClass =
    modes.length === 3
      ? "grid-cols-3"
      : modes.length === 2
        ? "grid-cols-2"
        : "grid-cols-4";

  return (
    <div
      role="group"
      aria-label="Focus"
      className={cn(
        "grid gap-1 rounded-xl bg-muted p-1",
        columnClass,
        comfortable && "gap-1.5 rounded-2xl p-1.5",
        className
      )}
    >
      {modes.map((mode) => {
        const active = value === mode;
        return (
          <button
            key={mode}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(mode, defaultBudgetForMode(mode))}
            className={cn(
              "rounded-lg px-1 py-2 text-center text-xs font-medium transition-colors sm:px-1.5 sm:text-sm",
              comfortable &&
                "min-h-11 rounded-xl px-2 py-3 text-sm font-semibold sm:min-h-12 sm:px-3 sm:text-[15px]",
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
