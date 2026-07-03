import {
  DEFAULT_BUY_BUDGET,
  DEFAULT_LAND_BUDGET_PER_SQM,
  DEFAULT_RENT_BUDGET,
} from "@/lib/constants";
import type { ExploreMode } from "@/lib/types";

export const EXPLORE_MODES = ["rent", "buy", "land"] as const;

export function parseExploreMode(value: string | null): ExploreMode {
  if (value === "buy") return "buy";
  if (value === "land") return "land";
  return "rent";
}

export function isLandMode(mode: ExploreMode): boolean {
  return mode === "land";
}

export function isResidentialExploreMode(mode: ExploreMode): mode is "rent" | "buy" {
  return mode !== "land";
}

export function defaultBudgetForMode(mode: ExploreMode): number {
  if (mode === "land") return DEFAULT_LAND_BUDGET_PER_SQM;
  if (mode === "buy") return DEFAULT_BUY_BUDGET;
  return DEFAULT_RENT_BUDGET;
}

export function modeLabel(mode: ExploreMode): string {
  if (mode === "land") return "Land";
  if (mode === "buy") return "Buy";
  return "Rent";
}

export function modeIntentLabel(mode: ExploreMode): string {
  if (mode === "land") return "I'm buying land";
  if (mode === "buy") return "I'm buying";
  return "I'm renting";
}
