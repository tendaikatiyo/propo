import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/constants";
import {
  checkContributionRateLimits,
  getContributionHashes,
} from "@/lib/contribution-server";
import { parseSaleReportPayload } from "@/lib/sale-reports";
import {
  findDuplicateSaleReport,
  resolveSaleMarketId,
} from "@/lib/sale-reports-server";
import { marketExists } from "@/lib/rent-reports-server";
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

  const parsed = parseSaleReportPayload(body);
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

  const marketId = resolveSaleMarketId(parsed.data.city, parsed.data.suburb);
  const marketOk = await marketExists(parsed.data.city, parsed.data.suburb, marketId);
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

  const isDuplicate = await findDuplicateSaleReport({
    ipHash,
    marketId,
    salePrice: parsed.data.salePrice,
    bedrooms: parsed.data.bedrooms,
  });
  if (isDuplicate) {
    return NextResponse.json(
      { error: "You already submitted a similar report for this suburb recently." },
      { status: 409 }
    );
  }

  const { error } = await supabase.from("sale_reports").insert({
    market_id: marketId,
    city: parsed.data.city,
    suburb: parsed.data.suburb,
    property_type: parsed.data.propertyType,
    bedrooms: parsed.data.bedrooms,
    sale_price: parsed.data.salePrice,
    currency: "USD",
    is_completed_sale: parsed.data.isCompletedSale,
    sale_date: parsed.data.saleDate ? `${parsed.data.saleDate}-01` : null,
    ip_hash: ipHash,
    session_hash: sessionHash,
    status: "pending",
  });

  if (error) {
    console.error("[sale-reports] insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your report. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
