"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import {
  SuburbSearchInput,
  type SuburbSearchSuggestion,
} from "@/components/filters/suburb-search-input";
import { RollingSuburbPlaceholder } from "@/components/home/rolling-suburb-placeholder";
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
import { sanitizeLabel } from "@/lib/format";
import { suburbPath } from "@/lib/slug";
import { cn } from "@/lib/utils";

/** Well-known suburbs for suggested searches + rolling placeholder. */
const SUGGESTED_SUBURB_NAMES = [
  "Borrowdale",
  "Mount Pleasant",
  "Avondale",
  "Highlands",
  "Chisipite",
  "Greendale",
  "Hillside",
  "Burnside",
  "Belvedere",
  "Waterfalls",
] as const;

const FALLBACK_SHUTTER_NAMES: string[] = [...SUGGESTED_SUBURB_NAMES];

function resolveSuggested(
  suggestions: SuburbSearchSuggestion[]
): SuburbSearchSuggestion[] {
  const bySuburb = new Map(
    suggestions.map((market) => [market.suburb.trim().toLowerCase(), market])
  );
  const resolved: SuburbSearchSuggestion[] = [];
  for (const name of SUGGESTED_SUBURB_NAMES) {
    const match = bySuburb.get(name.toLowerCase());
    if (match) resolved.push(match);
  }
  return resolved;
}

export function HomeLandingHero({
  suggestions = [],
}: {
  suggestions?: SuburbSearchSuggestion[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const suggested = useMemo(() => resolveSuggested(suggestions), [suggestions]);
  const shutterNames = useMemo(
    () =>
      suggested.length > 0
        ? suggested.map((market) => market.suburb)
        : FALLBACK_SHUTTER_NAMES,
    [suggested]
  );
  const chipMarkets = suggested.slice(0, 6);

  function goToSuburb(market: SuburbSearchSuggestion) {
    router.push(suburbPath(market.city, market.suburb));
  }

  return (
    <section
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
              Look up a suburb
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed tracking-[0.15px] text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] sm:text-base lg:mx-0 lg:text-lg">
              Rent, sale, and land medians across {DATASET_SCALE.suburbMarketsLabel} — updated{" "}
              {DATASET_UPDATE_CADENCE}.
            </p>
          </div>

          <div
            className={cn(
              liquidGlassHeroPanelClass,
              "hero-glass-panel w-full max-w-lg shrink-0 p-5 sm:p-6 lg:p-8"
            )}
          >
            <div className="space-y-5 lg:space-y-6">
              <div>
                <p className="caption-label">Search</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Type a suburb to open its market profile — rent, sales, and land.
                </p>
              </div>

              <div className="relative">
                <SuburbSearchInput
                  value={query}
                  onChange={setQuery}
                  suggestions={suggestions}
                  suggestionsDesktopOnly={false}
                  onSelectSuggestion={goToSuburb}
                  placeholder=""
                  inputClassName="h-12 bg-white/80 text-base"
                />
                <RollingSuburbPlaceholder
                  names={shutterNames}
                  visible={query.trim().length === 0}
                />
              </div>

              {chipMarkets.length > 0 ? (
                <div className="space-y-2">
                  <p className="caption-label">Suggested</p>
                  <div className="flex flex-wrap gap-2">
                    {chipMarkets.map((market) => (
                      <button
                        key={market.market_id}
                        type="button"
                        onClick={() => goToSuburb(market)}
                        className="rounded-full border border-border/70 bg-white/55 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-white/80"
                      >
                        {sanitizeLabel(market.suburb)}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <Link
                href="/explore?city=all"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
              >
                Browse all suburbs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
