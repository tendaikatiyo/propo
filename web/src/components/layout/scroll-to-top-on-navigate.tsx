"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Reset scroll when the route path changes (not query-only updates). */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
