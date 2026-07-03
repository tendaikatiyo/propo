export type HeroImage = {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
};

export const HERO_IMAGES = {
  harare: { src: "/harare_skyline_bg2.png", alt: "Harare skyline illustration" },
  bulawayo: {
    src: "/joshua_nkomo_statue_byo.webp",
    alt: "Joshua Nkomo statue, Bulawayo",
    credit: "VoyagesAfriq",
    creditUrl: "https://www.flickr.com/photos/122304274@N05/44447638662/",
  },
} as const satisfies Record<string, HeroImage>;

export type HeroVariant = keyof typeof HERO_IMAGES;

/** City pages without a dedicated hero image use this variant. */
export const DEFAULT_HERO_VARIANT: HeroVariant = "harare";

/** Full-bleed home landing background (photograph). */
export const HOME_LANDING_PHOTO = {
  src: "/harare_skyline_bg_photo_small2.webp",
  alt: "Harare skyline at dusk",
  credit: "Erik Törner",
  creditUrl: "https://www.flickr.com/photos/eriktorner/50605941258/",
} as const;

export const HERO_ROTATION: HeroVariant[] = ["harare", "bulawayo"];

export const HERO_LAST_VARIANT_KEY = "propo:heroLastVariant";

export function isHeroVariant(value: string): value is HeroVariant {
  return value in HERO_IMAGES;
}

export function heroForCitySlug(citySlug: string): HeroVariant {
  if (citySlug === "bulawayo") return "bulawayo";
  return DEFAULT_HERO_VARIANT;
}

export function nextHeroVariant(last: HeroVariant | null): HeroVariant {
  if (!last) return HERO_ROTATION[0];
  const index = HERO_ROTATION.indexOf(last);
  if (index === -1) return HERO_ROTATION[0];
  return HERO_ROTATION[(index + 1) % HERO_ROTATION.length];
}
