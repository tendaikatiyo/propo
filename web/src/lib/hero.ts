export type HeroImage = {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
};

/** Full-bleed home landing background (photograph). */
export const HOME_LANDING_PHOTO = {
  src: "/harare_skyline_bg_photo_small2.webp",
  alt: "Harare skyline at dusk",
  credit: "Erik Törner",
  creditUrl: "https://www.flickr.com/photos/eriktorner/50605941258/",
} as const satisfies HeroImage;

/** Default city/suburb hero when no city-specific image exists. */
export const DEFAULT_CITY_HERO: HeroImage = HOME_LANDING_PHOTO;

/** City-specific hero images keyed by city slug. */
export const CITY_HERO_BY_SLUG: Record<string, HeroImage> = {
  bulawayo: {
    src: "/joshua_nkomo_statue_byo.webp",
    alt: "Joshua Nkomo statue, Bulawayo",
    credit: "VoyagesAfriq",
    creditUrl: "https://www.flickr.com/photos/122304274@N05/44447638662/",
  },
};

/** @deprecated Prefer `heroImageForCitySlug` — kept for home hero rotation. */
export const HERO_IMAGES = {
  harare: DEFAULT_CITY_HERO,
  bulawayo: CITY_HERO_BY_SLUG.bulawayo,
} as const satisfies Record<string, HeroImage>;

export type HeroVariant = keyof typeof HERO_IMAGES;

export const DEFAULT_HERO_VARIANT: HeroVariant = "harare";

export const HERO_ROTATION: HeroVariant[] = ["harare", "bulawayo"];

export const HERO_LAST_VARIANT_KEY = "propo:heroLastVariant";

export function isHeroVariant(value: string): value is HeroVariant {
  return value in HERO_IMAGES;
}

export function heroImageForCitySlug(citySlug: string): HeroImage {
  return CITY_HERO_BY_SLUG[citySlug] ?? DEFAULT_CITY_HERO;
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
