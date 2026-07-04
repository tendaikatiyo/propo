import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `Why ${SITE_NAME} exists — suburb-level property data for Zimbabwe, built to explore the market in detail.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <PageHeader
        title="About"
        description={`The story behind ${SITE_NAME} and why it exists.`}
      />

      <div className="space-y-5 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
        <p>
          I&apos;m Tendai. I&apos;ve always been fascinated by the Zimbabwe property market, but I
          couldn&apos;t find data that let me explore it at a granular level — the kind of detail
          that helps you appreciate all the miniature differences between suburbs, price bands, and
          market segments.
        </p>
        <p>
          I know there are others like me. Maybe not huge crowds, but enough of you that it felt
          worth building something.
        </p>
        <p>
          {SITE_NAME} is my attempt to pull that picture together: suburb medians, trends,
          fair-value context, and land metrics — so you can browse the market with more nuance than
          a flat list of ads allows.
        </p>
        <p>
          Questions, ideas, or corrections?{" "}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Reach out to me
          </Link>{" "}
          — I&apos;d love to hear from you.
        </p>
      </div>
    </div>
  );
}
