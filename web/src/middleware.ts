import { NextResponse, type NextRequest } from "next/server";

import {
  ANALYTICS_CONSENT_COOKIE,
  ANALYTICS_SESSION_COOKIE,
} from "@/lib/analytics/constants";
import { CONTRIBUTE_SESSION_COOKIE } from "@/lib/rent-reports";

const SESSION_MAX_AGE = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get(CONTRIBUTE_SESSION_COOKIE)?.value) {
    response.cookies.set(CONTRIBUTE_SESSION_COOKIE, crypto.randomUUID(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
  }

  const consent = request.cookies.get(ANALYTICS_CONSENT_COOKIE)?.value;

  if (consent !== "granted") {
    return response;
  }

  if (!request.cookies.get(ANALYTICS_SESSION_COOKIE)?.value) {
    response.cookies.set(ANALYTICS_SESSION_COOKIE, crypto.randomUUID(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
