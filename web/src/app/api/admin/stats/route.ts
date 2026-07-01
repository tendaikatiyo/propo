import { NextResponse } from "next/server";

import { isAdminAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import { fetchAdminDashboardStats } from "@/lib/admin-stats";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured. Set ADMIN_SECRET in the web environment." },
      { status: 503 }
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const stats = await fetchAdminDashboardStats();
  return NextResponse.json(stats);
}
