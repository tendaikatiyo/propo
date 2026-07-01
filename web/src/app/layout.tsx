import type { Metadata, Viewport } from "next";

import { AppShell } from "@/components/layout/app-shell";
import { OnboardingTourProvider } from "@/components/onboarding/onboarding-tour-context";
import { QueryProvider } from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fontClassNames } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = rootMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontClassNames}>
      <body className="min-h-screen">
        <QueryProvider>
          <TooltipProvider>
            <OnboardingTourProvider>
              <AppShell>{children}</AppShell>
            </OnboardingTourProvider>
            <Toaster />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
