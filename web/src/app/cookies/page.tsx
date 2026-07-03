import { LegalPage, LegalSection } from "@/components/legal/legal-page";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Cookie Policy",
  description: `How ${SITE_NAME} uses cookies and similar technologies on your device.`,
  path: "/cookies",
});

const LAST_UPDATED = "1 July 2026";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description={`This policy explains how ${SITE_NAME} uses cookies and similar storage technologies when you visit our website.`}
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="What are cookies?">
        <p>
          Cookies are small text files stored on your device by a website. Similar technologies
          include local storage and session storage, which let a site remember information
          between visits or during a session.
        </p>
      </LegalSection>

      <LegalSection title="How we use cookies and local storage">
        <p>
          {SITE_NAME} uses a minimal set of technologies to make the site work and to remember
          your preferences. We do not use cookies for third-party advertising.
        </p>
        <p>The following storage is used on your device:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-foreground">Pinned suburbs</strong> — remembers
            up to three suburbs you have pinned for comparison
          </li>
          <li>
            <strong className="font-medium text-foreground">Onboarding state</strong> — records
            whether you have completed the introductory tour
          </li>
          <li>
            <strong className="font-medium text-foreground">Display preferences</strong> — stores
            minor UI preferences such as hero image rotation
          </li>
          <li>
            <strong className="font-medium text-foreground">Analytics consent</strong> — records
            whether you have accepted or declined anonymous usage analytics
          </li>
          <li>
            <strong className="font-medium text-foreground">Analytics session</strong> — a random
            session identifier (httpOnly cookie) used only if you accept analytics, to group
            anonymous events within a visit
          </li>
        </ul>
        <p>
          These are functional technologies required or helpful for core features. They are not
          used to track you across other websites.
        </p>
      </LegalSection>

      <LegalSection title="Essential hosting cookies">
        <p>
          Our hosting provider (Cloudflare) may set strictly necessary cookies or similar
          identifiers to deliver the site securely, prevent abuse, and maintain performance.
          These are standard for web applications and are not used for marketing.
        </p>
      </LegalSection>

      <LegalSection title="Analytics">
        <p>
          If you accept analytics in the site banner, we collect anonymous feature-usage events
          (for example explore filter changes, suburb clicks, and listing link clicks) to improve
          {SITE_NAME}. Events are stored on our database with a random session id — no account, no
          third-party ad trackers, and no cross-site profiling.
        </p>
        <p>
          If you decline, no analytics cookies are set and no usage events are recorded. You can
          change your mind later by clearing site cookies for {SITE_NAME}.
        </p>
      </LegalSection>

      <LegalSection title="Managing cookies and local storage">
        <p>
          You can control cookies and local storage through your browser settings. Most browsers
          allow you to block cookies, delete existing cookies, or clear site data for a specific
          website.
        </p>
        <p>
          If you disable or clear storage, some {SITE_NAME} features — such as pinned suburbs or
          saved tour progress — may not work as expected until you use them again.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this Cookie Policy when our use of cookies changes. The &quot;Last
          updated&quot; date at the top of this page indicates when it was last revised.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this Cookie Policy can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline-offset-4 hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
