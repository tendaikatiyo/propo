"use client";

import { useEffect, useState } from "react";

import { SiteHero } from "@/components/layout/site-chrome";
import {
  HERO_LAST_VARIANT_KEY,
  isHeroVariant,
  nextHeroVariant,
  type HeroVariant,
} from "@/lib/hero";

function readLastVariant(): HeroVariant | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(HERO_LAST_VARIANT_KEY);
  return stored && isHeroVariant(stored) ? stored : null;
}

export function HomeHero() {
  const [variant, setVariant] = useState<HeroVariant | null>(null);

  useEffect(() => {
    const last = readLastVariant();
    const next = nextHeroVariant(last);
    setVariant(next);
    localStorage.setItem(HERO_LAST_VARIANT_KEY, next);
  }, []);

  if (!variant) {
    return (
      <div className="relative h-40 w-full border-b border-border/80 bg-muted/30 sm:h-72 md:h-96" />
    );
  }

  return <SiteHero variant={variant} tourAnchor />;
}
