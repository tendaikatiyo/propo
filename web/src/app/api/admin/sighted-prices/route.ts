import { NextResponse } from "next/server";

import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { landMarketExists } from "@/lib/contribution-server";
import {
  computeLandPricePerSqm,
  resolveLandSizeSqm,
} from "@/lib/land-reports";
import { syncLandReportMetrics } from "@/lib/land-reports-server";
import { buildMarketId } from "@/lib/rent-reports";
import { marketExists, syncRentReportMetrics } from "@/lib/rent-reports-server";
import { syncSaleReportMetrics } from "@/lib/sale-reports-server";
import { parseSightedPricePayload } from "@/lib/sighted-prices";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured." },
      { status: 503 }
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = parseSightedPricePayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable." }, { status: 503 });
  }

  const marketId = buildMarketId(parsed.data.city, parsed.data.suburb);
  const data = parsed.data;
  const now = new Date().toISOString();

  if (data.mode === "land") {
    const marketOk = await landMarketExists(data.city, data.suburb, marketId);
    if (!marketOk) {
      return NextResponse.json(
        { error: "Select a suburb with land data — we could not match that location." },
        { status: 400 }
      );
    }

    const sizeResult = resolveLandSizeSqm(data.landSize, data.landSizeUnit);
    if (sizeResult.error) {
      return NextResponse.json({ error: sizeResult.error }, { status: 400 });
    }

    const pricePerSqm = computeLandPricePerSqm(
      data.totalPrice!,
      sizeResult.landSizeSqm
    );

    const { error } = await supabase.from("land_reports").insert({
      market_id: marketId,
      city: data.city,
      suburb: data.suburb,
      land_size: data.landSize ?? null,
      land_size_unit: data.landSizeUnit ?? null,
      land_size_sqm: sizeResult.landSizeSqm ?? null,
      total_price: data.totalPrice,
      price_per_sqm: pricePerSqm,
      currency: "USD",
      is_serviced: data.isServiced ?? null,
      is_completed_purchase: true,
      purchase_date: data.eventMonth ? `${data.eventMonth}-01` : null,
      notes: data.notes ?? null,
      listing_url: data.listingUrl ?? null,
      source: "admin_sighted",
      status: "approved",
      reviewed_at: now,
      reviewed_by: "admin",
    });

    if (error) {
      console.error("[admin/sighted-prices] land insert:", error.message);
      return NextResponse.json(
        {
          error:
            "Could not save sighted land price. Apply migration 017 if columns are missing.",
        },
        { status: 500 }
      );
    }

    await syncLandReportMetrics(marketId);
    return NextResponse.json({ ok: true, mode: "land", marketId });
  }

  const marketOk = await marketExists(data.city, data.suburb, marketId);
  if (!marketOk) {
    return NextResponse.json(
      { error: "Select a suburb from the list — we could not match that location." },
      { status: 400 }
    );
  }

  if (data.mode === "rent") {
    const { error } = await supabase.from("rent_reports").insert({
      market_id: marketId,
      city: data.city,
      suburb: data.suburb,
      property_type: data.propertyType,
      bedrooms: data.bedrooms,
      monthly_rent: data.monthlyRent,
      currency: "USD",
      is_current_lease: true,
      lease_started_at: data.eventMonth ? `${data.eventMonth}-01` : null,
      notes: data.notes ?? null,
      listing_url: data.listingUrl ?? null,
      source: "admin_sighted",
      status: "approved",
      reviewed_at: now,
      reviewed_by: "admin",
    });

    if (error) {
      console.error("[admin/sighted-prices] rent insert:", error.message);
      return NextResponse.json(
        {
          error:
            "Could not save sighted rent. Apply migration 017 if columns are missing.",
        },
        { status: 500 }
      );
    }

    await syncRentReportMetrics(marketId);
    return NextResponse.json({ ok: true, mode: "rent", marketId });
  }

  const { error } = await supabase.from("sale_reports").insert({
    market_id: marketId,
    city: data.city,
    suburb: data.suburb,
    property_type: data.propertyType,
    bedrooms: data.bedrooms,
    sale_price: data.salePrice,
    currency: "USD",
    is_completed_sale: true,
    sale_date: data.eventMonth ? `${data.eventMonth}-01` : null,
    notes: data.notes ?? null,
    listing_url: data.listingUrl ?? null,
    source: "admin_sighted",
    status: "approved",
    reviewed_at: now,
    reviewed_by: "admin",
  });

  if (error) {
    console.error("[admin/sighted-prices] sale insert:", error.message);
    return NextResponse.json(
      {
        error:
          "Could not save sighted sale price. Apply migration 017 if columns are missing.",
      },
      { status: 500 }
    );
  }

  await syncSaleReportMetrics(marketId);
  return NextResponse.json({ ok: true, mode: "buy", marketId });
}
