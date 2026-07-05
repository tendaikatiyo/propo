"use client";

import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { LensProvider } from "@/components/providers/lens-provider";
import { AnalyticsConsentBanner } from "@/components/analytics/consent-banner";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { AppFooter, SiteHero } from "@/components/layout/site-chrome";
import { OnboardingTour } from "@/components/onboarding/onboarding-tour";
import { MobileTabBar } from "@/components/mobile/mobile-tab-bar";
import { MobileTopBar } from "@/components/mobile/mobile-top-bar";
import { heroImageForCitySlug } from "@/lib/hero";
import { cn } from "@/lib/utils";

function citySlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/cities\/([^/]+)/);
  return match?.[1] ?? null;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const citySlug = citySlugFromPath(pathname);
  const showCompactHero = citySlug != null;

  return (
    <LensProvider>
    <div className="flex min-h-screen">
      <div className="print:hidden">
        <AppSidebar />
      </div>
      <div className="flex min-h-screen flex-1 flex-col lg:pl-60 print:pl-0">
        <MobileTopBar />
        {showCompactHero ? (
          <div className="print:hidden">
            <SiteHero compact image={heroImageForCitySlug(citySlug)} />
          </div>
        ) : null}
        <main
          className={cn(
            "mx-auto w-full flex-1 print:max-w-none print:px-0 print:py-0 print:pb-0",
            isHome
              ? "max-w-none px-0 py-0 pb-0"
              : "max-w-6xl px-4 py-8 pb-24 sm:px-6 lg:px-8 lg:pb-10"
          )}
        >
          {children}
        </main>
        <div className="print:hidden">
          <AppFooter />
        </div>
        <div className="print:hidden">
          <MobileTabBar />
        </div>
        <div className="print:hidden">
          <OnboardingTour />
        </div>
        <div className="print:hidden">
          <AnalyticsConsentBanner />
          <GoogleAnalytics />
        </div>
      </div>
    </div>
    </LensProvider>
  );
}
