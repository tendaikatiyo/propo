import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "../data");
const listingsPath = path.join(dataDir, "listings.json");
const suburbsPath = path.join(dataDir, "suburbs.json");

const run = async () => {
  const raw = await fs.readFile(listingsPath, "utf8");
  const listings = JSON.parse(raw || "[]");

  const groups = listings.reduce((acc, listing) => {
    const suburb = String(listing.suburb || "").trim() || "Unknown";
    const city = String(listing.city || "").trim() || "Unknown";
    const key = `${suburb}||${city}`;
    acc[key] = acc[key] || { suburb, city, total_listings: 0, total_price: 0, min_price: null, max_price: null, currency: listing.currency || "USD", sample_listings: [] };
    const group = acc[key];
    const price = Number(listing.price) || 0;
    group.total_listings += 1;
    group.total_price += price;
    group.min_price = group.min_price === null || price < group.min_price ? price : group.min_price;
    group.max_price = group.max_price === null || price > group.max_price ? price : group.max_price;
    if (group.sample_listings.length < 3) group.sample_listings.push({ id: listing.id, title: listing.title, price: listing.price, url: listing.url });
    return acc;
  }, {});

  const suburbs = Object.values(groups).map((group) => ({
    suburb: group.suburb,
    city: group.city,
    currency: group.currency,
    total_listings: group.total_listings,
    avg_price: group.total_listings ? Math.round(group.total_price / group.total_listings) : 0,
    min_price: group.min_price ?? 0,
    max_price: group.max_price ?? 0,
    sample_listings: group.sample_listings,
  }));

  suburbs.sort((a, b) => b.total_listings - a.total_listings);
  await fs.writeFile(suburbsPath, JSON.stringify(suburbs, null, 2));
  console.log(`Generated ${suburbs.length} suburb analytics in ${suburbsPath}`);
};

run().catch((error) => {
  console.error("Aggregation failed:", error?.message || error);
  process.exit(1);
});
