import { NextResponse } from "next/server";

import { getDataUpdatedAt } from "@/lib/data-freshness-server";

export const revalidate = 3600;

export async function GET() {
  const updatedAt = await getDataUpdatedAt();
  return NextResponse.json({ updatedAt });
}
