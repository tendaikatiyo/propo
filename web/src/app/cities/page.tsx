import { CitiesDirectoryClient } from "@/components/cities/cities-directory";
import { BackLink } from "@/components/layout/back-nav";
import { PageHeader } from "@/components/layout/page-header";
import { fetchCities } from "@/lib/data-server";
import { sortCitiesByMarketSize } from "@/lib/geo";

export const revalidate = 3600;

export default async function CitiesPage() {
  const cities = sortCitiesByMarketSize(await fetchCities());

  return (
    <div className="space-y-10">
      <BackLink href="/" label="Back to home" />
      <PageHeader
        title="Cities"
        description="Browse property market data across Zimbabwe. Larger markets are listed first."
      />
      <CitiesDirectoryClient cities={cities} />
    </div>
  );
}
