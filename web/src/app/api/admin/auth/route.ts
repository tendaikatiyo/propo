import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE,
  adminCookieValue,
  isAdminAuthenticated,
  isAdminConfigured,
  verifyAdminSecret,
} from "@/lib/admin-auth";

export async function GET() {
  return NextResponse.json({
    configured: isAdminConfigured(),
    authenticated: await isAdminAuthenticated(),
  });
}

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin access is not configured. Set ADMIN_SECRET in the web environment." },
      { status: 503 }
    );
  }

  let secret = "";
  try {
    const body = (await request.json()) as { secret?: string };
    secret = body.secret?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!secret || !verifyAdminSecret(secret)) {
    return NextResponse.json({ error: "Invalid admin secret." }, { status: 401 });
  }

  const token = adminCookieValue();
  if (!token) {
    return NextResponse.json({ error: "Admin secret is misconfigured." }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
