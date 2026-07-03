import Link from "next/link";

import { DevelopersInterestForm } from "@/components/developers/developers-interest-form";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Developers",
  description:
    "Express interest in programmatic access to Propo suburb medians, rental yields, trends, and listing data for Zimbabwe property markets.",
  path: "/developers",
});

const PLANNED_ENDPOINTS = [
  "Suburb medians — rent, sale, and segment-level where sample size allows",
  "Rental yields and opportunity scores by suburb",
  "Daily price and supply trends (30 / 90 / 180 day windows)",
  "Active listings with fair-value context",
  "City rankings and market movers",
] as const;

export default function DevelopersPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Developers"
        description="Propo is a property data index for Zimbabwe. A public API is not available yet — tell us what you would use and we will prioritise access."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>What we are exploring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            <p>
              The website already aggregates public listing data into suburb-level medians, yields,
              trends, and rankings. A future API would expose the same signals for tools you build —
              dashboards, CRM plugins, valuation models, or research pipelines.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {PLANNED_ENDPOINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What exists today</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
            <p>
              The consumer site is live. Internal routes power the web app only — there is no
              documented public API, API keys, or rate-limited developer access yet.
            </p>
            <p>
              Data is derived from publicly available listings, not verified transactions. Read our{" "}
              <Link
                href="/methodology"
                className="text-foreground underline-offset-4 hover:underline"
              >
                methodology
              </Link>{" "}
              for how medians, confidence scores, and trends are calculated.
            </p>
            <p>
              Need something sooner? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              with your use case.
            </p>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <DevelopersInterestForm />
        </div>
      </div>
    </div>
  );
}
