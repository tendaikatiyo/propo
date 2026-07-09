import { NextResponse } from "next/server";

import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { syncLandReportMetrics } from "@/lib/land-reports-server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured." },
      { status: 503 }
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: "Missing report id." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = body as { status?: string; rejectionReason?: string };
  const status = input.status?.trim();
  if (status !== "approved" && status !== "rejected") {
    return NextResponse.json({ error: "Status must be approved or rejected." }, { status: 400 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: "Database unavailable." }, { status: 503 });
  }

  const { data: existing, error: fetchError } = await supabase
    .from("land_reports")
    .select("market_id, status")
    .eq("id", id)
    .maybeSingle();

  if (fetchError) {
    console.error("[admin/land-reports] fetch:", fetchError.message);
    return NextResponse.json({ error: "Could not load report." }, { status: 500 });
  }

  if (!existing) {
    return NextResponse.json({ error: "Report not found." }, { status: 404 });
  }

  const { error: updateError } = await supabase
    .from("land_reports")
    .update({
      status,
      rejection_reason:
        status === "rejected"
          ? (input.rejectionReason?.trim().slice(0, 500) ?? "Rejected by admin")
          : null,
      reviewed_at: new Date().toISOString(),
      reviewed_by: "admin",
    })
    .eq("id", id);

  if (updateError) {
    console.error("[admin/land-reports] update:", updateError.message);
    return NextResponse.json({ error: "Could not update report." }, { status: 500 });
  }

  await syncLandReportMetrics(existing.market_id as string);

  return NextResponse.json({ ok: true });
}
