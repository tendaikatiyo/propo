import type { Metadata } from "next";

import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
};

const LAST_UPDATED = "28 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`This policy explains how ${SITE_NAME} handles information when you use our property data index for Zimbabwe.`}
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Overview">
        <p>
          {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates a property
          market intelligence website. We are committed to handling personal information
          responsibly and transparently. This policy describes what we collect, why we collect
          it, and the choices available to you.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>
          <strong className="font-medium text-foreground">Information you provide.</strong>{" "}
          {SITE_NAME} does not require you to create an account. We do not ask for your name,
          email address, or payment details to browse the site.
        </p>
        <p>
          <strong className="font-medium text-foreground">Information stored on your device.</strong>{" "}
          We use your browser&apos;s local storage to remember preferences such as pinned
          suburbs, onboarding progress, and display settings. This data stays on your device
          unless you clear it.
        </p>
        <p>
          <strong className="font-medium text-foreground">Automatically collected information.</strong>{" "}
          When you visit the site, our hosting provider may log standard technical data such as
          your IP address, browser type, referring page, and timestamps. We use this information
          to operate, secure, and improve the service.
        </p>
        <p>
          <strong className="font-medium text-foreground">Property listing data.</strong> Market
          statistics and listings shown on {SITE_NAME} are derived from publicly available
          third-party property listings. That data relates to properties, not to you as an
          individual user.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use the information described above to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide and maintain the website and its features</li>
          <li>Remember your preferences across visits</li>
          <li>Monitor performance, diagnose errors, and protect against abuse</li>
          <li>Improve our data products and user experience</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Legal bases">
        <p>
          Where applicable, we process information on the basis of legitimate interests in
          operating and improving the service, and on the basis of your consent where required
          for non-essential storage on your device.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          We use third-party infrastructure and data providers to run {SITE_NAME}, including
          hosting (Cloudflare) and database services (Supabase). These providers process
          technical data on our behalf under their own privacy terms. Property listing content
          originates from independent sources and may be subject to those sources&apos; terms.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          Information stored in your browser remains until you delete it or clear site data.
          Server logs are retained only as long as needed for security, troubleshooting, and
          operational purposes, then deleted or aggregated.
        </p>
      </LegalSection>

      <LegalSection title="Your choices and rights">
        <p>
          You can clear local storage through your browser settings to remove saved preferences.
          Depending on your location, you may have rights to access, correct, delete, or restrict
          processing of personal information we hold about you. To exercise these rights, contact
          us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          {SITE_NAME} is not directed at children under 16, and we do not knowingly collect
          personal information from children.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date
          at the top of this page will reflect the most recent revision. Continued use of the
          site after changes take effect constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          If you have questions about this Privacy Policy or how we handle information, please
          contact us at{" "}
          <a href="mailto:hello@propo.fyi" className="text-foreground underline-offset-4 hover:underline">
            hello@propo.fyi
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
