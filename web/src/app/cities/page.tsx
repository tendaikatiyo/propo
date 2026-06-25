import { CitiesDirectory } from "@/components/cities/cities-directory";
import { PageHeader } from "@/components/layout/page-header";

export const revalidate = 3600;

export default function CitiesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Cities"
        description="Browse property market data across Zimbabwe by city."
      />
      <CitiesDirectory />
    </div>
  );
}
