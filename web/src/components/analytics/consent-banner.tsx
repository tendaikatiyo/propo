"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
} from "@/lib/analytics/consent";

export function AnalyticsConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getAnalyticsConsent() === null);
  }, []);

  if (!visible) return null;

  function accept() {
    setAnalyticsConsent("granted");
    setVisible(false);
    window.location.reload();
  }

  function decline() {
    setAnalyticsConsent("denied");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-border/80 bg-background/95 px-4 py-4 backdrop-blur-xl sm:bottom-4 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:border sm:shadow-lg print:hidden"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use privacy-conscious analytics to understand which features help you
          find suburbs — anonymous session only, no ads.{" "}
          <Link href="/cookies" className="text-foreground underline-offset-4 hover:underline">
            Cookie policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <Button type="button" size="sm" onClick={accept}>
            Accept
          </Button>
          <Button type="button" size="sm" variant="outline" onClick={decline}>
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
