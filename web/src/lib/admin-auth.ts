import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "propo_admin";

function digestSecret(secret: string): string {
  return createHash("sha256").update(secret).digest("hex");
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_SECRET?.trim());
}

export function getAdminSecret(): string | null {
  const secret = process.env.ADMIN_SECRET?.trim();
  return secret || null;
}

export function verifyAdminSecret(candidate: string): boolean {
  const secret = getAdminSecret();
  if (!secret) return false;

  const expected = Buffer.from(digestSecret(secret));
  const actual = Buffer.from(digestSecret(candidate));
  if (expected.length !== actual.length) return false;
  return timingSafeEqual(expected, actual);
}

export function adminCookieValue(): string | null {
  const secret = getAdminSecret();
  if (!secret) return null;
  return digestSecret(secret);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  if (!isAdminConfigured()) return false;
  const expected = adminCookieValue();
  if (!expected) return false;

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return false;

  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(token);
  if (expectedBuf.length !== actualBuf.length) return false;
  return timingSafeEqual(expectedBuf, actualBuf);
}
