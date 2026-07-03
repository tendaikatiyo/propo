"use client";

import Image from "next/image";
import Link from "next/link";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { ExploreModeToggle } from "@/components/filters/explore-mode-toggle";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { buttonVariants } from "@/components/ui/button";
import { HOME_LANDING_PHOTO } from "@/lib/hero";
import {
  liquidGlassHeroPanelClass,
  liquidGlassPillClass,
  liquidGlassPillShadow,
} from "@/lib/liquid-glass";
import { budgetForMode } from "@/lib/explore";
import { isLandMode } from "@/lib/mode";
import type { ExploreMode, PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

export function HomeLandingHero({
  sectionRef,
  mode,
  budget,
  propertyType,
  exploreHref,
  onModeChange,
  onBudgetChange,
  onPropertyTypeChange,
}: {
  sectionRef?: React.RefObject<HTMLElement | null>;
  mode: ExploreMode;
  budget: number;
  propertyType: PropertyType | null;
  exploreHref: string;
  onModeChange: (mode: ExploreMode, defaultBudget: number) => void;
  onBudgetChange: (budget: number) => void;
  onPropertyTypeChange: (type: PropertyType | null) => void;
}) {
  const land = isLandMode(mode);

  return (
    <section
      ref={sectionRef}
      data-tour="hero"
      className="relative -mt-[52px] min-h-[100dvh] w-full overflow-hidden lg:mt-0 lg:min-h-[100dvh]"
    >
      <Image
        src={HOME_LANDING_PHOTO.src}
        alt={HOME_LANDING_PHOTO.alt}
        fill
        priority
        className="object-cover object-[center_42%] scale-105"
        sizes="100vw"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15 lg:from-black/40"
        aria-hidden
      />
      <div className="noise-grain" aria-hidden />

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-center px-4 pb-[calc(3.25rem+env(safe-area-inset-bottom,0px)+1rem)] pt-[calc(52px+1rem)] sm:px-8 lg:min-h-[100dvh] lg:justify-center lg:px-14 lg:pb-24 lg:pt-24 xl:px-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">
          <div className="max-w-2xl space-y-3 text-center lg:space-y-6 lg:text-left">
            <span
              className={cn(
                liquidGlassPillClass,
                liquidGlassPillShadow,
                "inline-flex items-center px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] text-white uppercase"
              )}
            >
              Zimbabwe property index
            </span>
            <h1 className="font-display text-[1.75rem] font-medium leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-[4rem] lg:leading-[1.02]">
              Where can you afford in Zimbabwe?
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed tracking-[0.15px] text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-base lg:mx-0 lg:text-lg">
              {land
                ? "Set your land budget per square metre to surface matching suburbs across Harare and beyond."
                : "Set your rent or buy budget and property type to find suburbs that match — backed by live listing data."}
            </p>
          </div>

          <div
            className={cn(
              liquidGlassHeroPanelClass,
              "hero-glass-panel w-full max-w-lg shrink-0 p-5 sm:p-6 lg:p-8"
            )}
          >
            <div className="space-y-5 lg:space-y-7">
              <div>
                <p className="caption-label">My budget</p>
                <p className="mt-1.5 hidden text-sm text-muted-foreground sm:block">
                  Adjust filters — results update as you scroll.
                </p>
              </div>

              <ExploreModeToggle
                value={mode}
                onChange={(nextMode, defaultBudget) => {
                  onModeChange(nextMode, budgetForMode(nextMode, defaultBudget));
                }}
              />

              <BudgetSlider mode={mode} value={budget} onChange={onBudgetChange} />

              {!land ? (
                <div className="space-y-3">
                  <p className="caption-label">Property type</p>
                  <PropertyTypeButtons
                    mode={mode}
                    value={propertyType}
                    onChange={onPropertyTypeChange}
                  />
                </div>
              ) : null}

              <Link href={exploreHref} className={cn(buttonVariants({ size: "lg" }), "w-full")}>
                See matching suburbs
              </Link>
            </div>
          </div>
        </div>

        <a
          href={HOME_LANDING_PHOTO.creditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 bottom-3 text-[10px] text-white/65 transition-colors hover:text-white lg:bottom-6 lg:right-8"
        >
          Photo: {HOME_LANDING_PHOTO.credit}
        </a>
      </div>
    </section>
  );
}
