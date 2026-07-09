import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

function getSupabaseUrl(): string | null {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    process.env.SUPABASE_URL?.trim();
  if (!url || url.includes("YOUR_PROJECT_REF")) return null;
  return url;
}

function getAnonKey(): string | null {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!key || key === "your_anon_key_here") return null;
  return key;
}

function getServiceRoleKey(): string | null {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!key || key === "your_service_role_key_here") return null;
  return key;
}

/** True when the browser can talk to Supabase (public anon key). */
export function isSupabaseBrowserConfigured(): boolean {
  return Boolean(getSupabaseUrl() && getAnonKey());
}

/** True when server API routes can read from Supabase (anon or service role). */
export function isSupabaseConfigured(): boolean {
  return Boolean(getSupabaseUrl() && (getAnonKey() || getServiceRoleKey()));
}

export function createBrowserSupabaseClient(): SupabaseClient | null {
  const url = getSupabaseUrl();
  const key = getAnonKey();
  if (!url || !key) return null;
  if (!browserClient) {
    browserClient = createClient(url, key);
  }
  return browserClient;
}

export function createServerSupabaseClient(): SupabaseClient | null {
  const url = getSupabaseUrl();
  if (!url) return null;

  const key = getAnonKey() ?? getServiceRoleKey();
  if (!key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
