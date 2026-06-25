import { NextResponse } from "next/server";

import { fetchRankings } from "@/lib/data-server";

export const revalidate = 3600;

export async function GET() {
  const rankings = await fetchRankings();
  return NextResponse.json(rankings);
}
