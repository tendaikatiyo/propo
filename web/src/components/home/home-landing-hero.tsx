"use client";

import Image from "next/image";
import Link from "next/link";

import { BudgetSlider } from "@/components/filters/budget-slider";
import { PropertyTypeButtons } from "@/components/filters/property-type-buttons";
import { buttonVariants } from "@/components/ui/button";
import { HOME_LANDING_PHOTO } from "@/lib/hero";
import {
  liquidGlassHeroPanelClass,
  liquidGlassPillClass,
  liquidGlassPillShadow,
} from "@/lib/liquid-glass";
import {
  DATASET_SCALE,
  DATASET_UPDATE_CADENCE,
} from "@/lib/constants";
import type { ExploreMode, PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

const INVEST_MODE: ExploreMode = "invest";

export function HomeLandingHero({
  sectionRef,
  budget,
  propertyType,
  exploreHref,
  onBudgetChange,
  onPropertyTypeChange,
}: {
  sectionRef?: React.RefObject<HTMLElement | null>;
  budget: number;
  propertyType: PropertyType | null;
  exploreHref: string;
  onBudgetChange: (budget: number) => void;
  onPropertyTypeChange: (type: PropertyType | null) => void;
}) {
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
              Zimbabwe property market intelligence
            </span>
            <h1 className="font-display text-[1.75rem] font-medium leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-[4rem] lg:leading-[1.02]">
              Find yield and fair value in Zimbabwe
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed tracking-[0.15px] text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-base lg:mx-0 lg:text-lg">
              Suburb medians, rental yield, and opportunity scores across{" "}
              {DATASET_SCALE.suburbMarketsLabel} — updated {DATASET_UPDATE_CADENCE}.
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
                <p className="caption-label">Purchase budget</p>
                <p className="mt-1.5 hidden text-sm text-muted-foreground sm:block">
                  Filter suburbs by buy budget — results update as you scroll.
                </p>
              </div>

              <BudgetSlider
                mode={INVEST_MODE}
                value={budget}
                onChange={onBudgetChange}
              />

              <div className="space-y-3">
                <p className="caption-label">Property type</p>
                <PropertyTypeButtons
                  mode={INVEST_MODE}
                  value={propertyType}
                  onChange={onPropertyTypeChange}
                />
              </div>

              <Link href={exploreHref} className={cn(buttonVariants({ size: "lg" }), "w-full")}>
                <span className="t-shimmer t-shimmer-on-dark" data-text="Explore yield markets">
                  Explore yield markets
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
