"use client";

import { ChevronRight, PlayCircle } from "lucide-react";

import { useOnboardingTour } from "@/components/onboarding/onboarding-tour-context";
import { cn } from "@/lib/utils";

export function HowItWorksButton({
  variant = "footer",
  onNavigate,
  className,
}: {
  variant?: "footer" | "menu";
  onNavigate?: () => void;
  className?: string;
}) {
  const { startTour } = useOnboardingTour();

  const handleClick = () => {
    onNavigate?.();
    startTour();
  };

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "flex min-h-[44px] w-full items-center gap-3 px-4 py-3 text-left active:bg-muted/80",
          className
        )}
      >
        <PlayCircle className="size-[18px] shrink-0 text-muted-foreground" />
        <span className="flex-1 font-heading text-[15px] font-medium">How it works</span>
        <ChevronRight className="size-4 shrink-0 text-muted-foreground/60" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn("text-sm text-muted-foreground hover:text-foreground", className)}
    >
      How it works
    </button>
  );
}
