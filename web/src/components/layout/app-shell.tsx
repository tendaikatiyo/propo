"use client";

import { usePathname } from "next/navigation";

import { AppFooter, SiteHero } from "@/components/layout/site-chrome";
import { AppSidebar, MobileNav, MobileTopBar } from "@/components/layout/app-sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hero =
    pathname === "/" ? "home" : pathname.startsWith("/cities") ? "compact" : "none";

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex min-h-screen flex-1 flex-col lg:pl-60">
        <MobileTopBar />
        {hero === "home" ? <SiteHero /> : null}
        {hero === "compact" ? <SiteHero compact /> : null}
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 pb-24 sm:px-6 lg:px-8 lg:pb-10">
          {children}
        </main>
        <AppFooter />
        <MobileNav />
      </div>
    </div>
  );
}
