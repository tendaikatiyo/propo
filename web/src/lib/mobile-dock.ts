/** Mobile tab bar is min-h 52px (3.25rem). */
export const MOBILE_TAB_BAR_HEIGHT = "3.25rem";

/** Gap between tab bar and floating dock items. */
export const MOBILE_DOCK_GAP = "0.5rem";

/** First floating dock row above the tab bar. */
export function mobileDockBottom(): string {
  return `calc(${MOBILE_TAB_BAR_HEIGHT} + ${MOBILE_DOCK_GAP} + env(safe-area-inset-bottom))`;
}

/** True on `/cities/:city/:suburb` (not report). */
export function isSuburbProfilePath(pathname: string): boolean {
  return /^\/cities\/[^/]+\/[^/]+$/.test(pathname);
}
