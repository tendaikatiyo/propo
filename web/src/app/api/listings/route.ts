import { NextRequest, NextResponse } from "next/server";

import { fetchListings } from "@/lib/data-server";
import { budgetForMode } from "@/lib/explore";
import { normalizePropertyType } from "@/lib/constants";
import { defaultBudgetForMode, parseExploreMode } from "@/lib/mode";

export const revalidate = 3600;

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const mode = parseExploreMode(params.get("mode"));
  const budgetParam = Number(params.get("budget"));
  const budget = budgetForMode(
    mode,
    Number.isFinite(budgetParam) && budgetParam > 0
      ? budgetParam
      : defaultBudgetForMode(mode)
  );
  const city = params.get("city") || null;
  const suburb = params.get("suburb") || null;
  const marketId = params.get("market_id") || null;
  const typeParam = params.get("type");
  const propertyType =
    mode === "land" || !typeParam ? null : normalizePropertyType(typeParam);
  const limitParam = Number(params.get("limit"));
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, 12) : 4;
  const tierParam = params.get("tier");
  const tier =
    tierParam === "stretch" || tierParam === "value" ? tierParam : ("in" as const);
  const medianParam = Number(params.get("median"));
  const medianPrice = Number.isFinite(medianParam) && medianParam > 0 ? medianParam : null;

  const listings = await fetchListings({
    mode,
    budget,
    city,
    suburb,
    marketId,
    propertyType,
    limit,
    tier,
    medianPrice,
  });
  return NextResponse.json(listings);
}
