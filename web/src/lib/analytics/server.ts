import {
  ANALYTICS_EVENT_NAMES,
  type AnalyticsEventName,
} from "@/lib/analytics/constants";
import { createAdminSupabaseClient, isSupabaseAdminConfigured } from "@/lib/supabase-admin";

export async function insertAnalyticsEvent(input: {
  sessionId: string;
  eventName: AnalyticsEventName;
  path: string | null;
  payload: Record<string, unknown>;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!isSupabaseAdminConfigured()) {
    return { ok: true };
  }

  const client = createAdminSupabaseClient();
  if (!client) {
    return { ok: true };
  }

  const { error } = await client.from("analytics_events").insert({
    session_id: input.sessionId,
    event_name: input.eventName,
    path: input.path,
    payload: input.payload,
  });

  if (error) {
    return { ok: false, reason: error.message };
  }

  return { ok: true };
}

export function isAllowedAnalyticsEvent(value: string): value is AnalyticsEventName {
  return (ANALYTICS_EVENT_NAMES as readonly string[]).includes(value);
}

export function sanitizeAnalyticsPayload(
  payload: unknown
): Record<string, unknown> | null {
  if (payload == null) return {};
  if (typeof payload !== "object" || Array.isArray(payload)) return null;

  const raw = JSON.stringify(payload);
  if (raw.length > 4_096) return null;

  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return null;
  }
}
