import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/constants";
import { parseDeveloperInterestPayload } from "@/lib/developers-interest";
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

  const parsed = parseDeveloperInterestPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { email, role, useCase, dataInterests, company } = parsed.data;

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          `Signups are temporarily unavailable. Email ${CONTACT_EMAIL} and we will add you manually.`,
      },
      { status: 503 }
    );
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Signups are temporarily unavailable. Try again later." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("api_interest_signups").insert({
    email,
    role,
    use_case: useCase ?? null,
    data_interests: dataInterests,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the list. We will be in touch." },
        { status: 409 }
      );
    }

    console.error("[developers/interest] insert failed:", error.message);
    return NextResponse.json(
      { error: "Could not save your signup. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
