export const HERO_IMAGES = {
  harare: { src: "/harare_skyline_bg2.png", alt: "Harare skyline illustration" },
  bulawayo: { src: "/byo_skyline_bg.png", alt: "Bulawayo skyline illustration" },
} as const;

export type HeroVariant = keyof typeof HERO_IMAGES;

export const HERO_LAST_VARIANT_KEY = "propo:heroLastVariant";

export function heroForCitySlug(citySlug: string): HeroVariant {
  return citySlug === "bulawayo" ? "bulawayo" : "harare";
}

export function nextHeroVariant(last: HeroVariant | null): HeroVariant {
  if (last === "harare") return "bulawayo";
  if (last === "bulawayo") return "harare";
  return "harare";
}
