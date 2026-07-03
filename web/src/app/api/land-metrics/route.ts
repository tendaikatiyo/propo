import { NextResponse } from "next/server";

import { fetchLandMetrics } from "@/lib/data-server";

export const revalidate = 3600;

export async function GET() {
  const metrics = await fetchLandMetrics();
  return NextResponse.json(metrics);
}
