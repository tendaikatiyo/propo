import { NextRequest, NextResponse } from "next/server";

import { fetchListings } from "@/lib/data-server";
import { budgetForMode } from "@/lib/explore";
import { PROPERTY_TYPES } from "@/lib/constants";
import type { ExploreMode, PropertyType } from "@/lib/types";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const mode: ExploreMode = params.get("mode") === "buy" ? "buy" : "rent";
  const budgetParam = Number(params.get("budget"));
  const budget = budgetForMode(
    mode,
    Number.isFinite(budgetParam) && budgetParam > 0 ? budgetParam : mode === "rent" ? 800 : 250000
  );
  const city = params.get("city") || null;
  const typeParam = params.get("type");
  const propertyType =
    typeParam && PROPERTY_TYPES.includes(typeParam as PropertyType)
      ? (typeParam as PropertyType)
      : null;
  const limitParam = Number(params.get("limit"));
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, 12) : 4;

  const listings = await fetchListings({ mode, budget, city, propertyType, limit });
  return NextResponse.json(listings);
}
