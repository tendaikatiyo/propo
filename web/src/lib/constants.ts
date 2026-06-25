import type { PropertyType } from "@/lib/types";

export const PROPERTY_TYPES: PropertyType[] = [
  "house",
  "apartment",
  "flat",
  "room",
  "townhouse",
];

export const PROPERTY_TYPE_COUNT_KEY: Record<PropertyType, keyof import("@/lib/types").MarketMetric> = {
  house: "house_count",
  apartment: "apartment_count",
  flat: "flat_count",
  room: "room_count",
  townhouse: "townhouse_count",
  commercial: "commercial_count",
};

export const BEDROOM_OPTIONS = [
  { value: 1, label: "1 bed" },
  { value: 2, label: "2 beds" },
  { value: 3, label: "3 beds" },
  { value: 4, label: "4+ beds" },
] as const;

export const BEDROOM_COUNT_KEY: Record<number, keyof import("@/lib/types").MarketMetric> = {
  1: "beds_1_count",
  2: "beds_2_count",
  3: "beds_3_count",
  4: "beds_4_plus_count",
};

export const MAX_PINNED_MARKETS = 3;
export const STRETCH_BUDGET_MULTIPLIER = 1.15;
export const MIN_CONFIDENCE_THRESHOLD = 20;
export const DEFAULT_RENT_BUDGET = 800;
export const DEFAULT_BUY_BUDGET = 250000;
export const RENT_BUDGET_RANGE = { min: 100, max: 10000, step: 50 };
export const BUY_BUDGET_RANGE = { min: 20000, max: 1000000, step: 5000 };

export const DEFAULT_CITY = "Harare";
export const SITE_NAME = "Propo";
export const SITE_DESCRIPTION =
  "Property data index for Zimbabwe — compare suburbs, find markets in your budget, and explore rental yields.";
