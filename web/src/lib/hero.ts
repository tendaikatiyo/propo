export const HERO_IMAGES = {
  harare: { src: "/harare_skyline_bg2.png", alt: "Harare skyline illustration" },
  bulawayo: { src: "/byo_skyline_bg.png", alt: "Bulawayo skyline illustration" },
  vicfalls: { src: "/vf_skyline_bg.png", alt: "Victoria Falls illustration" },
} as const;

export type HeroVariant = keyof typeof HERO_IMAGES;

export const HERO_ROTATION: HeroVariant[] = ["harare", "bulawayo", "vicfalls"];

export const HERO_LAST_VARIANT_KEY = "propo:heroLastVariant";

export function isHeroVariant(value: string): value is HeroVariant {
  return value in HERO_IMAGES;
}

export function heroForCitySlug(citySlug: string): HeroVariant {
  if (citySlug === "bulawayo") return "bulawayo";
  if (citySlug === "victoria-falls") return "vicfalls";
  return "harare";
}

export function nextHeroVariant(last: HeroVariant | null): HeroVariant {
  if (!last) return HERO_ROTATION[0];
  const index = HERO_ROTATION.indexOf(last);
  if (index === -1) return HERO_ROTATION[0];
  return HERO_ROTATION[(index + 1) % HERO_ROTATION.length];
}
