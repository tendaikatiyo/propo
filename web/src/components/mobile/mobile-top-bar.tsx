"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, Menu, X } from "lucide-react";

import { MobileMenuDrawer } from "@/components/mobile/mobile-menu-drawer";
import { usePinnedMarkets } from "@/hooks/use-pinned-markets";
import { SITE_NAME } from "@/lib/constants";
import { getMobileBackHref } from "@/lib/mobile-nav";
import { cn } from "@/lib/utils";

export function MobileTopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const backHref = getMobileBackHref(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pins } = usePinnedMarkets();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[70] flex h-[52px] shrink-0 items-center gap-0.5 px-2 backdrop-blur-xl backdrop-saturate-150 print:hidden lg:hidden",
          isHome
            ? "border-b border-white/15 bg-black/25 text-white"
            : "border-b border-border/60 bg-background/80 text-foreground"
        )}
      >
        {backHref ? (
          <Link
            href={backHref}
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full transition-transform active:scale-95 active:opacity-70",
              isHome ? "text-white" : "text-foreground"
            )}
            aria-label="Go back"
          >
            <ChevronLeft className="size-[22px] stroke-[2px]" />
          </Link>
        ) : (
          <span className="size-11 shrink-0" aria-hidden />
        )}

        <Link
          href="/"
          className="font-display shrink-0 text-[17px] font-semibold tracking-[-0.02em]"
        >
          {SITE_NAME.toLowerCase()}
        </Link>

        <div className="flex-1" />

        <button
          type="button"
          data-tour="menu-button"
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "relative flex size-11 shrink-0 items-center justify-center rounded-full transition-transform active:scale-95 active:opacity-70",
            isHome ? "text-white" : "text-foreground"
          )}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="size-[22px] stroke-[2px]" />
          ) : (
            <Menu className="size-[22px] stroke-[2px]" />
          )}
          {!menuOpen && pins.length > 0 ? (
            <span className="absolute top-1 right-1 flex size-[18px] items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-white">
              {pins.length}
            </span>
          ) : null}
        </button>
      </header>

      <MobileMenuDrawer open={menuOpen} onOpenChange={setMenuOpen} />
    </>
  );
}
