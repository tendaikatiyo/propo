import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { SITE_NAME } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description: `Terms and conditions for using the ${SITE_NAME} property data index.`,
  path: "/terms",
});

const LAST_UPDATED = "28 June 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      description={`Please read these terms carefully before using ${SITE_NAME}. By accessing or using the site, you agree to be bound by them.`}
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Agreement">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the{" "}
          {SITE_NAME} website and related services (collectively, the &quot;Service&quot;),
          operated by {SITE_NAME}. If you do not agree to these Terms, do not use the Service.
        </p>
      </LegalSection>

      <LegalSection title="About the Service">
        <p>
          {SITE_NAME} is a property market intelligence tool for Zimbabwe. It aggregates and
          presents information about suburbs, rental and sale medians, yields, and related market
          signals derived from publicly available listing data.
        </p>
        <p>
          {SITE_NAME} is an informational platform. We are not a real estate agency, broker,
          valuer, or financial adviser, and we do not facilitate property transactions.
        </p>
      </LegalSection>

      <LegalSection title="No professional advice">
        <p>
          Content on {SITE_NAME} — including medians, scores, rankings, and listings — is provided
          for general research and informational purposes only. It does not constitute legal,
          financial, investment, or property advice. You should independently verify any
          information and consult qualified professionals before making property decisions.
        </p>
      </LegalSection>

      <LegalSection title="Data accuracy and availability">
        <p>
          Market data is compiled from third-party sources and automated processing. While we
          aim to keep information current and accurate, we do not guarantee completeness,
          correctness, or timeliness. Suburb medians, yields, and scores are statistical
          summaries and may not reflect individual properties or current market conditions.
        </p>
        <p>
          The Service may be modified, suspended, or discontinued at any time without notice.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the Service in violation of applicable laws or regulations</li>
          <li>Attempt to gain unauthorised access to our systems or data</li>
          <li>Crawl or harvest data from the Service at scale without permission</li>
          <li>Interfere with or disrupt the Service or its infrastructure</li>
          <li>Misrepresent {SITE_NAME} data as official valuations or guaranteed forecasts</li>
        </ul>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The {SITE_NAME} name, branding, website design, analytics methodology, and original
          content are owned by us or our licensors and protected by applicable intellectual
          property laws. You may not copy, modify, distribute, or create derivative works from
          the Service except as permitted by law or with our written consent.
        </p>
        <p>
          Third-party listing content and trademarks remain the property of their respective
          owners.
        </p>
      </LegalSection>

      <LegalSection title="Third-party links and data">
        <p>
          The Service may reference or link to third-party websites and data sources. We are not
          responsible for the content, policies, or practices of third parties. Your use of
          third-party services is at your own risk and subject to their terms.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of warranties">
        <p>
          The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis,
          without warranties of any kind, whether express or implied, including implied warranties
          of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {SITE_NAME} and its operators will not be
          liable for any indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits, data, or goodwill, arising from your use of or inability to use
          the Service. Our total liability for any claim relating to the Service is limited to
          the amount you paid us to use the Service in the twelve months before the claim, or
          zero if the Service is provided free of charge.
        </p>
      </LegalSection>

      <LegalSection title="Indemnity">
        <p>
          You agree to indemnify and hold harmless {SITE_NAME} and its operators from claims,
          damages, and expenses (including reasonable legal fees) arising from your misuse of the
          Service or violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these Terms">
        <p>
          We may revise these Terms at any time. Updated Terms will be posted on this page with
          a revised &quot;Last updated&quot; date. Your continued use of the Service after changes
          become effective constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of Zimbabwe, without regard to conflict-of-law
          principles. Any disputes arising from these Terms or the Service shall be subject to
          the exclusive jurisdiction of the courts of Zimbabwe, unless otherwise required by
          applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:hello@propo.fyi" className="text-foreground underline-offset-4 hover:underline">
            hello@propo.fyi
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
