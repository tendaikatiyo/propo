import { PageHeader } from "@/components/layout/page-header";
import { BackLink } from "@/components/layout/back-nav";
import { RentReportForm } from "@/components/rent-reports/rent-report-form";
import { contributeBackNav } from "@/lib/contribute-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo";
import { parseExploreMode } from "@/lib/mode";

export const metadata = buildPageMetadata({
  title: "Share your rent",
  description:
    "Help fill gaps in Zimbabwe suburb rent data — anonymously share what you currently pay so others searching can see community rent ranges.",
  path: "/contribute",
});

export default async function ContributePage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; suburb?: string; mode?: string }>;
}) {
  const sp = await searchParams;
  const lens = parseExploreMode(sp.mode ?? null);
  const back = contributeBackNav({
    citySlug: sp.city,
    suburbSlug: sp.suburb,
    mode: lens,
  });

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <BackLink href={back.href} label={back.label} showOnMobile />

      <PageHeader        title="Share your rent"
        description="Know what rent actually costs where you live? Help others searching — share yours anonymously."
      />

      <Card>
        <CardHeader>
          <CardTitle>Why contribute?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Propo tracks listings from major online portals, but many occupied homes never appear
            there — especially in suburbs with thin coverage.
          </p>
          <p>
            Your report is reviewed before anything goes public. Approved submissions may show as a
            community rent range on suburb profiles — separate from portal medians.
          </p>
        </CardContent>
      </Card>

      <RentReportForm
        initialCitySlug={sp.city}
        initialSuburbSlug={sp.suburb}
      />
    </div>
  );
}
