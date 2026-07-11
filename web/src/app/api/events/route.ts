import { NextResponse } from "next/server";

import {
  ANALYTICS_CONSENT_COOKIE,
  ANALYTICS_SESSION_COOKIE,
} from "@/lib/analytics/constants";
import {
  insertAnalyticsEvent,
  isAllowedAnalyticsEvent,
  sanitizeAnalyticsPayload,
} from "@/lib/analytics/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const consentMatch = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${ANALYTICS_CONSENT_COOKIE}=([^;]*)`)
  );
  const consentValue = consentMatch ? decodeURIComponent(consentMatch[1]) : null;
  if (consentValue !== "granted") {
    return new NextResponse(null, { status: 204 });
  }

  const sessionMatch = request.headers
    .get("cookie")
    ?.match(new RegExp(`${ANALYTICS_SESSION_COOKIE}=([^;]+)`));
  const sessionId = sessionMatch?.[1];
  if (!sessionId) {
    return new NextResponse(null, { status: 204 });
  }

  let body: { event?: string; payload?: unknown; path?: string };
  try {
    body = (await request.json()) as { event?: string; payload?: unknown; path?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const eventName = body.event ?? "";
  if (!isAllowedAnalyticsEvent(eventName)) {
    return NextResponse.json({ error: "Unknown event." }, { status: 400 });
  }

  const payload = sanitizeAnalyticsPayload(body.payload);
  if (payload === null) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const path =
    typeof body.path === "string" && body.path.length <= 256 ? body.path : null;

  const result = await insertAnalyticsEvent({
    sessionId,
    eventName,
    path,
    payload,
  });

  if (!result.ok) {
    // Missing table or Supabase misconfig — don't break the client.
    if (result.reason.includes("analytics_events")) {
      return new NextResponse(null, { status: 204 });
    }
    return NextResponse.json({ error: result.reason }, { status: 500 });
  }

  return new NextResponse(null, { status: 204 });
}
