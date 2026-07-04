import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { CONTACT_EMAIL, DATASET_SCALE, DATASET_UPDATE_CADENCE, SITE_NAME } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `Why ${SITE_NAME} exists — a continuously updated property market database for Zimbabwe, built to explore suburb-level detail.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <PageHeader
        title="About"
        description={`The story behind ${SITE_NAME} — currently in public beta.`}
      />

      <div className="space-y-5 text-[15px] leading-relaxed tracking-[0.15px] text-muted-foreground">
        <p>
          {SITE_NAME} is in <strong className="font-medium text-foreground">beta</strong>. The
          dataset and product are evolving — you may spot gaps, rough edges, or numbers that shift as
          the pipeline improves. That&apos;s expected at this stage, and your feedback helps shape
          what comes next.
        </p>
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
          {`${SITE_NAME} is my attempt to pull that picture together: a property market database updated ${DATASET_UPDATE_CADENCE} — covering ${DATASET_SCALE.suburbMarketsLabel} across ${DATASET_SCALE.citiesLabel} — with medians, trends, fair-value context, and land metrics. It's a way to browse the market with more nuance than a flat list of ads allows.`}
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
