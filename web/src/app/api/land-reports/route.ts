import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/constants";
import {
  checkContributionRateLimits,
  getContributionHashes,
  landMarketExists,
} from "@/lib/contribution-server";
import { computeLandPricePerSqm, parseLandReportPayload } from "@/lib/land-reports";
import {
  findDuplicateLandReport,
  resolveLandMarketId,
} from "@/lib/land-reports-server";
import {
  createAdminSupabaseClient,
  isSupabaseAdminConfigured,
} from "@/lib/supabase-admin";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = parseLandReportPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json(
      {
        error: `Submissions are temporarily unavailable. Email ${CONTACT_EMAIL} and we can add your report manually.`,
      },
      { status: 503 }
    );
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Submissions are temporarily unavailable. Try again later." },
      { status: 503 }
    );
  }

  const marketId = resolveLandMarketId(parsed.data.city, parsed.data.suburb);
  const marketOk = await landMarketExists(
    parsed.data.city,
    parsed.data.suburb,
    marketId
  );
  if (!marketOk) {
    return NextResponse.json(
      { error: "Select a suburb from the list — we could not match that location." },
      { status: 400 }
    );
  }

  const { ipHash, sessionHash } = await getContributionHashes();
  const rateLimitError = await checkContributionRateLimits(ipHash, sessionHash);
  if (rateLimitError) {
    return NextResponse.json({ error: rateLimitError }, { status: 429 });
  }

  const isDuplicate = await findDuplicateLandReport({
    ipHash,
    marketId,
    totalPrice: parsed.data.totalPrice,
    landSizeSqm: parsed.data.landSizeSqm,
  });
  if (isDuplicate) {
    return NextResponse.json(
      { error: "You already submitted a similar report for this suburb recently." },
      { status: 409 }
    );
  }

  const pricePerSqm = computeLandPricePerSqm(
    parsed.data.totalPrice,
    parsed.data.landSizeSqm
  );

  const { error } = await supabase.from("land_reports").insert({
    market_id: marketId,
    city: parsed.data.city,
    suburb: parsed.data.suburb,
    land_size: parsed.data.landSize ?? null,
    land_size_unit: parsed.data.landSizeUnit ?? null,
    land_size_sqm: parsed.data.landSizeSqm ?? null,
    total_price: parsed.data.totalPrice,
    price_per_sqm: pricePerSqm,
    currency: "USD",
    is_serviced: parsed.data.isServiced ?? null,
    is_completed_purchase: parsed.data.isCompletedPurchase,
    purchase_date: parsed.data.purchaseDate
      ? `${parsed.data.purchaseDate}-01`
      : null,
    ip_hash: ipHash,
    session_hash: sessionHash,
    status: "pending",
  });

  if (error) {
    console.error("[land-reports] insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your report. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
