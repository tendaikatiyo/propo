import { DATASET_SCALE, DATASET_UPDATE_CADENCE, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { absoluteUrl, LOGOMARK_PATH, SITE_URL } from "@/lib/seo";

export function siteJsonLd(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl(LOGOMARK_PATH),
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
          urlTemplate: `${SITE_URL}/explore`,
        },
        description:
          "Browse Zimbabwe suburb and land directories; open a suburb profile for rent, sale, and land medians.",
      },
    },
  ];
}

/** schema.org Dataset for methodology — helps crawlers treat Propo as a maintained market dataset. */
export function methodologyDatasetJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Propo Zimbabwe property market database",
    description:
      "Suburb-level median asking rent, median asking sale price, gross yield, land price per square metre, " +
      "and listing trends for Zimbabwe, refreshed from major online property portals.",
    url: absoluteUrl("/methodology"),
    inLanguage: "en-ZW",
    isAccessibleForFree: true,
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    spatialCoverage: {
      "@type": "Country",
      name: "Zimbabwe",
    },
    keywords: [
      "Zimbabwe property",
      "suburb medians",
      "rent",
      "sale",
      "land",
      "rental yield",
      "Harare",
      "Bulawayo",
    ],
    variableMeasured: [
      { "@type": "PropertyValue", name: "Median asking rent (USD)" },
      { "@type": "PropertyValue", name: "Median asking sale price (USD)" },
      { "@type": "PropertyValue", name: "Gross rental yield" },
      { "@type": "PropertyValue", name: "Median land price per square metre (USD)" },
    ],
    size: DATASET_SCALE.suburbMarketsLabel,
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "text/html",
      contentUrl: absoluteUrl("/sitemap.xml"),
      description: "Sitemap of suburb and city market profile pages.",
    },
    license: absoluteUrl("/terms"),
    temporalCoverage: "2024/..",
    measurementTechnique: `Daily pipeline aggregation of normalized portal listings; refreshed ${DATASET_UPDATE_CADENCE}.`,
  };
}

export function suburbPageJsonLd({
  city,
  suburb,
  citySlug,
  suburbSlug,
  description,
  medianRent,
  medianSale,
  grossYield,
  landPricePerSqm,
}: {
  city: string;
  suburb: string;
  citySlug: string;
  suburbSlug: string;
  description: string;
  medianRent: number | null;
  medianSale: number | null;
  grossYield: number | null | undefined;
  landPricePerSqm: number | null | undefined;
}): Record<string, unknown>[] {
  const pageUrl = absoluteUrl(`/cities/${citySlug}/${suburbSlug}`);
  const pageName = `${suburb}, ${city} — rent, sale & land prices`;
  const placeEntity = {
    "@context": "https://schema.org",
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
    additionalProperty: [
      ...(medianRent != null
        ? [
            {
              "@type": "PropertyValue",
              name: "Median asking rent",
              value: medianRent,
              unitText: "USD",
            },
          ]
        : []),
      ...(medianSale != null
        ? [
            {
              "@type": "PropertyValue",
              name: "Median asking sale price",
              value: medianSale,
              unitText: "USD",
            },
          ]
        : []),
      ...(grossYield != null && !Number.isNaN(grossYield)
        ? [
            {
              "@type": "PropertyValue",
              name: "Estimated gross rental yield",
              value: grossYield,
              unitText: "percent",
            },
          ]
        : []),
      ...(landPricePerSqm != null && !Number.isNaN(landPricePerSqm)
        ? [
            {
              "@type": "PropertyValue",
              name: "Median land price per square metre",
              value: landPricePerSqm,
              unitText: "USD/sqm",
            },
          ]
        : []),
    ],
  };

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
      about: placeEntity,
      mainEntity: placeEntity,
    },
  ];
}
