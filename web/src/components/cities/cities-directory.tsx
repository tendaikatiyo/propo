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
        <Link key={city.city} href={cityPath(city.city)} className="group">
          <Card className="h-full transition-shadow group-hover:shadow-[var(--shadow-card)]">
            <CardHeader className="pb-2">
              <CardTitle>{city.city}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5 text-[15px] tracking-[0.15px] text-muted-foreground">
              <p>
                <span className="font-mono text-foreground">{city.suburb_count}</span> suburbs
              </p>
              <p>
                Median rent{" "}
                <span className="font-stat text-foreground">{formatCurrency(city.median_rent)}</span>
              </p>
              <p>
                Median sale{" "}
                <span className="font-stat text-foreground">
                  {formatCurrency(city.median_sale_price)}
                </span>
              </p>
              <p>
                Avg yield{" "}
                <span className="font-stat text-foreground">{formatPercent(city.average_yield)}</span>
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
