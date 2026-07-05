"use client";

import { Button } from "@/components/ui/button";
import {
  defaultBudgetForMode,
  EXPLORE_MODES,
  modeIntentLabel,
  modeLabel,
  RESIDENTIAL_EXPLORE_MODES,
} from "@/lib/mode";
import { MODE_ACCENT } from "@/lib/mode-accent";
import type { ExploreMode } from "@/lib/types";
import { cn } from "@/lib/utils";

type ExploreModeToggleProps = {
  value: ExploreMode;
  onChange: (mode: ExploreMode, defaultBudget: number) => void;
  /** intent = home copy; short = separate pills; segmented = residential bar + land chip */
  variant?: "intent" | "short" | "segmented";
  className?: string;
};

function ExploreModeSegmented({
  value,
  onChange,
  className,
}: Pick<ExploreModeToggleProps, "value" | "onChange" | "className">) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <div
        role="group"
        aria-label="Residential focus"
        className="inline-flex w-full gap-1 overflow-visible rounded-xl bg-muted p-1 sm:w-auto sm:min-w-[min(100%,18rem)]"
      >
        {RESIDENTIAL_EXPLORE_MODES.map((mode) => {
          const active = value === mode;
          return (
            <button
              key={mode}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(mode, defaultBudgetForMode(mode))}
              className={cn(
                "flex-1 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
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
      <button
        type="button"
        aria-pressed={value === "land"}
        onClick={() => onChange("land", defaultBudgetForMode("land"))}
        className={cn(
          "shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
          value === "land"
            ? cn(MODE_ACCENT.land.chip, "shadow-sm")
            : "border border-border bg-card text-muted-foreground hover:border-foreground/20 hover:text-foreground"
        )}
      >
        {modeLabel("land")}
      </button>
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
