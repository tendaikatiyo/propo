import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { absoluteUrl, FAVICON_PATH, SITE_URL } from "@/lib/seo";

export function siteJsonLd(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl(FAVICON_PATH),
      description: SITE_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en-ZW",
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${absoluteUrl("/explore")}?city={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

export function suburbPageJsonLd({
  city,
  suburb,
  citySlug,
  suburbSlug,
  description,
}: {
  city: string;
  suburb: string;
  citySlug: string;
  suburbSlug: string;
  description: string;
}): Record<string, unknown>[] {
  const pageUrl = absoluteUrl(`/cities/${citySlug}/${suburbSlug}`);
  const pageName = `${suburb}, ${city} — houses to rent, property for sale & land`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cities",
          item: absoluteUrl("/cities"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: city,
          item: absoluteUrl(`/cities/${citySlug}`),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: suburb,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageName,
      description,
      url: pageUrl,
      inLanguage: "en-ZW",
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: {
        "@type": "Place",
        name: suburb,
        containedInPlace: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "Country",
            name: "Zimbabwe",
          },
        },
      },
    },
  ];
}
