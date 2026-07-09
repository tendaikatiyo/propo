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
    <div className="mx-auto max-w-2xl space-y-8">
      <BackLink href={back.href} label={back.label} showOnMobile />

      <PageHeader title={copy.title} description={copy.description} />

      <Card>
        <CardHeader>
          <CardTitle>Why contribute?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
          <p>{copy.whyLead}</p>
          <p>{copy.whyDetail}</p>
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
