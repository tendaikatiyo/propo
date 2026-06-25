import { CitiesDirectory } from "@/components/cities/cities-directory";

export const revalidate = 3600;

export default function CitiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Cities</h1>
        <p className="text-muted-foreground">
          Browse property market data across Zimbabwe by city.
        </p>
      </div>
      <CitiesDirectory />
    </div>
  );
}
