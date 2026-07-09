import { NextResponse } from "next/server";

import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { fetchAdminSaleReports } from "@/lib/sale-reports-server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured. Set ADMIN_SECRET in the web environment." },
      { status: 503 }
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const statusParam = searchParams.get("status");
  const status =
    statusParam === "approved" || statusParam === "rejected" || statusParam === "all"
      ? statusParam
      : "pending";

  const reports = await fetchAdminSaleReports(status);
  return NextResponse.json({ reports });
}
