export function getMobileBackHref(pathname: string): string | null {
  if (pathname === "/") return null;
  if (pathname === "/explore") return "/";
  if (pathname === "/cities") return "/";
  if (pathname === "/rankings") return "/";
  if (pathname === "/compare") return "/explore";
  if (pathname === "/methodology") return "/";

  const cityMatch = pathname.match(/^\/cities\/([^/]+)$/);
  if (cityMatch) return "/cities";

  const suburbMatch = pathname.match(/^\/cities\/([^/]+)\/([^/]+)$/);
  if (suburbMatch) return `/cities/${suburbMatch[1]}`;

  return null;
}
