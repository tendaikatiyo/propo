"use client";

import Image from "next/image";
import Link from "next/link";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { buttonVariants } from "@/components/ui/button";
import { HOME_LANDING_PHOTO } from "@/lib/hero";
import {
  liquidGlassPanelClass,
  liquidGlassPillClass,
  liquidGlassPillShadow,
} from "@/lib/liquid-glass";
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
  onModeChange: (mode: ExploreMode) => void;
  onBudgetChange: (budget: number) => void;
  onPropertyTypeChange: (type: PropertyType | null) => void;
}) {
  return (
    <section
      ref={sectionRef}
      data-tour="hero"
      className="relative min-h-[calc(100dvh-3.5rem)] w-full overflow-hidden lg:min-h-[calc(100dvh-0px)]"
    >
      <Image
        src={HOME_LANDING_PHOTO.src}
        alt={HOME_LANDING_PHOTO.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Light scrim — legibility without hiding the skyline */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-black/30"
        aria-hidden
      />

      <div className="relative flex min-h-[inherit] flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:justify-center lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl space-y-4 lg:space-y-5">
            <span
              className={cn(
                liquidGlassPillClass,
                liquidGlassPillShadow,
                "inline-flex items-center px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] text-white uppercase"
              )}
            >
              Zimbabwe property index
            </span>
            <h1 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Where can you afford in Zimbabwe?
            </h1>
            <p className="max-w-md text-[15px] leading-relaxed tracking-[0.15px] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
              Set your rent or buy budget and property type to find suburbs that match — backed by
              live listing data across Harare and beyond.
            </p>
          </div>

          <div className={cn(liquidGlassPanelClass, "w-full max-w-md shrink-0 p-6 sm:p-8")}>
            <div className="space-y-6">
              <div>
                <p className="caption-label text-foreground/80">My budget</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Adjust filters — results update as you scroll.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(["rent", "buy"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={buttonVariants({
                      size: "sm",
                      variant: mode === option ? "default" : "outline",
                    })}
                    onClick={() => onModeChange(option)}
                  >
                    {option === "rent" ? "I'm renting" : "I'm buying"}
                  </button>
                ))}
              </div>

              <BudgetSlider mode={mode} value={budget} onChange={onBudgetChange} />

              <div className="space-y-3">
                <p className="caption-label">Property type</p>
                <PropertyTypeButtons
                  mode={mode}
                  value={propertyType}
                  onChange={onPropertyTypeChange}
                />
              </div>

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
          className={cn(
            "absolute bottom-3 right-4 text-[10px] text-white/70 hover:text-white sm:bottom-4 sm:right-6",
            "drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          )}
        >
          Photo: {HOME_LANDING_PHOTO.credit}
        </a>
      </div>
    </section>
  );
}
