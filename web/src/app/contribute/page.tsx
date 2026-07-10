import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { BackLink } from "@/components/layout/back-nav";
import { LandReportForm } from "@/components/rent-reports/land-report-form";
import { RentReportForm } from "@/components/rent-reports/rent-report-form";
import { SaleReportForm } from "@/components/rent-reports/sale-report-form";
import { contributeBackNav } from "@/lib/contribute-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  contributePageCopy,
  parseContributionMode,
  type ContributionMode,
} from "@/lib/rent-reports";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const lens = parseContributionMode(sp.mode);
  const copy = contributePageCopy(lens);

  return buildPageMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    path: "/contribute",
  });
}

function ContributionForm({
  lens,
  initialCitySlug,
  initialSuburbSlug,
}: {
  lens: ContributionMode;
  initialCitySlug?: string;
  initialSuburbSlug?: string;
}) {
  if (lens === "buy") {
    return (
      <SaleReportForm
        initialCitySlug={initialCitySlug}
        initialSuburbSlug={initialSuburbSlug}
      />
    );
  }
  if (lens === "land") {
    return (
      <LandReportForm
        initialCitySlug={initialCitySlug}
        initialSuburbSlug={initialSuburbSlug}
      />
    );
  }
  return (
    <RentReportForm
      initialCitySlug={initialCitySlug}
      initialSuburbSlug={initialSuburbSlug}
    />
  );
}

export default async function ContributePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; suburb?: string; mode?: string }>;
}) {
  const sp = await searchParams;

  if (sp.mode === "invest") {
    const params = new URLSearchParams();
    if (sp.city) params.set("city", sp.city);
    if (sp.suburb) params.set("suburb", sp.suburb);
    const qs = params.toString();
    redirect(qs ? `/contribute?${qs}` : "/contribute");
  }

  const lens = parseContributionMode(sp.mode);
  const copy = contributePageCopy(lens);
  const back = contributeBackNav({
    citySlug: sp.city,
    suburbSlug: sp.suburb,
    mode: lens,
  });

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-1 sm:space-y-8 sm:px-0">
      <BackLink href={back.href} label={back.label} showOnMobile />

      <PageHeader title={copy.title} description={copy.description} />

      <Card>
        <CardHeader className="px-4 pt-5 sm:px-6 sm:pt-6">
          <CardTitle className="text-lg sm:text-xl">Why contribute?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-4 pb-5 text-[15px] leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">
          <p>{copy.whyLead}</p>
          <p className="hidden sm:block">{copy.whyDetail}</p>
          <details className="sm:hidden">
            <summary className="cursor-pointer text-foreground underline-offset-4 hover:underline">
              More about how we use this
            </summary>
            <p className="mt-2">{copy.whyDetail}</p>
          </details>
        </CardContent>
      </Card>

      <ContributionForm
        lens={lens}
        initialCitySlug={sp.city}
        initialSuburbSlug={sp.suburb}
      />
    </div>
  );
}
