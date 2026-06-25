import { NextResponse } from "next/server";

import { fetchCities } from "@/lib/data-server";

export const revalidate = 3600;

export async function GET() {
  const cities = await fetchCities();
  return NextResponse.json(cities);
}
