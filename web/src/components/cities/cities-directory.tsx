import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCities } from "@/lib/data-server";
import { formatCurrency, formatPercent } from "@/lib/format";
import { cityPath } from "@/lib/slug";

export const revalidate = 3600;

export async function CitiesDirectory() {
  const cities = await fetchCities();
  const sorted = [...cities].sort((a, b) => a.city.localeCompare(b.city));

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((city) => (
        <Link key={city.city} href={cityPath(city.city)}>
          <Card className="h-full transition-colors hover:bg-muted/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{city.city}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>{city.suburb_count} suburbs</p>
              <p>Median rent {formatCurrency(city.median_rent)}</p>
              <p>Median sale {formatCurrency(city.median_sale_price)}</p>
              <p>Avg yield {formatPercent(city.average_yield)}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
