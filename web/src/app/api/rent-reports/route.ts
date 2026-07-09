import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/constants";
import { parseRentReportPayload } from "@/lib/rent-reports";
import {
  checkRentReportRateLimits,
  findDuplicateRentReport,
  getContributionHashes,
  marketExists,
  resolveMarketId,
} from "@/lib/rent-reports-server";
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

  const parsed = parseRentReportPayload(body);
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

  const marketId = resolveMarketId(parsed.data.city, parsed.data.suburb);
  const marketOk = await marketExists(parsed.data.city, parsed.data.suburb, marketId);
  if (!marketOk) {
    return NextResponse.json(
      { error: "Select a suburb from the list — we could not match that location." },
      { status: 400 }
    );
  }

  const { ipHash, sessionHash } = await getContributionHashes();
  const rateLimitError = await checkRentReportRateLimits(ipHash, sessionHash);
  if (rateLimitError) {
    return NextResponse.json({ error: rateLimitError }, { status: 429 });
  }

  const isDuplicate = await findDuplicateRentReport({
    ipHash,
    marketId,
    monthlyRent: parsed.data.monthlyRent,
    bedrooms: parsed.data.bedrooms,
  });
  if (isDuplicate) {
    return NextResponse.json(
      { error: "You already submitted a similar report for this suburb recently." },
      { status: 409 }
    );
  }

  const { error } = await supabase.from("rent_reports").insert({
    market_id: marketId,
    city: parsed.data.city,
    suburb: parsed.data.suburb,
    property_type: parsed.data.propertyType,
    bedrooms: parsed.data.bedrooms,
    monthly_rent: parsed.data.monthlyRent,
    currency: "USD",
    is_current_lease: parsed.data.isCurrentLease,
    lease_started_at: parsed.data.leaseStartedAt
      ? `${parsed.data.leaseStartedAt}-01`
      : null,
    furnished: parsed.data.furnished ?? null,
    ip_hash: ipHash,
    session_hash: sessionHash,
    status: "pending",
  });

  if (error) {
    console.error("[rent-reports] insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your report. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
