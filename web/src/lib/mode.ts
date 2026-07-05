import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_LAND_BUDGET_PER_SQM,
  DEFAULT_RENT_BUDGET,
} from "@/lib/constants";
import type { ExploreMode } from "@/lib/types";

export const EXPLORE_MODES = ["rent", "buy", "land", "invest"] as const;

export const RESIDENTIAL_EXPLORE_MODES = ["rent", "buy", "invest"] as const;

export function parseExploreMode(value: string | null): ExploreMode {
  if (value === "buy") return "buy";
  if (value === "land") return "land";
  if (value === "invest") return "invest";
  return "rent";
}

export function isLandMode(mode: ExploreMode): boolean {
  return mode === "land";
}

export function isInvestMode(mode: ExploreMode): boolean {
  return mode === "invest";
}

export function isResidentialExploreMode(mode: ExploreMode): mode is "rent" | "buy" | "invest" {
  return mode !== "land";
}

export function defaultBudgetForMode(mode: ExploreMode): number {
  if (mode === "land") return DEFAULT_LAND_BUDGET_PER_SQM;
  if (mode === "buy" || mode === "invest") return DEFAULT_BUY_BUDGET;
  return DEFAULT_RENT_BUDGET;
}

export function modeLabel(mode: ExploreMode): string {
  if (mode === "land") return "Land";
  if (mode === "buy") return "Buy";
  if (mode === "invest") return "Invest";
  return "Rent";
}

export function modeIntentLabel(mode: ExploreMode): string {
  if (mode === "land") return "I'm buying land";
  if (mode === "buy") return "I'm buying";
  if (mode === "invest") return "I'm investing";
  return "I'm renting";
}
