import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "../data");
const listingsPath = path.join(dataDir, "listings.json");

const parseNumber = (value) => {
  if (value == null) return null;
  const numeric = String(value).replace(/[^
0-9.]/g, "").trim();
  if (!numeric) return null;
  const parsed = Number(numeric);
  return Number.isNaN(parsed) ? null : parsed;
};

const parsePrice = (raw = "") => {
  const normalized = String(raw).replace(/,/g, "").trim();
  const currencyMatch = normalized.match(/\b(USD|ZWL|EUR|GBP)\b/i);
  const currency = currencyMatch ? currencyMatch[1].toUpperCase() : null;
  const priceMatch = normalized.match(/([0-9]+(?:\.[0-9]+)?)/);
  const price = priceMatch ? parseFloat(priceMatch[1]) : null;
  return { price, currency, price_raw: String(raw).trim() };
};

const cleanText = (value) => {
  return String(value ?? "").trim().replace(/\s+/g, " ");
};

const normalizeListing = (item) => {
  const title = cleanText(item.title);
  const location = cleanText(item.location);
  const parsedPrice = parsePrice(item.price_raw || item.price || "");
  const bedrooms = parseNumber(item.bedrooms);
  const bathrooms = parseNumber(item.bathrooms);
  const lounges = parseNumber(item.lounges);
  const suburb = location.split(",")[0]?.trim() || "";
  const city = location.split(",").slice(-1)[0]?.trim() || "";
  const type = title.toLowerCase().includes("flat")
    ? "flat"
    : title.toLowerCase().includes("room")
    ? "room"
    : title.toLowerCase().includes("house")
    ? "house"
    : item.type || "house";

  return {
    id: cleanText(item.id) || null,
    title,
    type,
    listing_type: cleanText(item.listing_type || "rent"),
    price_raw: parsedPrice.price_raw,
    price: parsedPrice.price ?? null,
    currency: parsedPrice.currency || "USD",
    bedrooms: bedrooms ?? 0,
    bathrooms: bathrooms ?? 0,
    lounges: lounges ?? 0,
    location,
    suburb,
    city,
    image: cleanText(item.image),
    url: cleanText(item.url),
    scraped_at: item.scraped_at || new Date().toISOString(),
  };
};

const run = async () => {
  const raw = await fs.readFile(listingsPath, "utf8");
  const listings = JSON.parse(raw || "[]");
  const normalized = listings.map(normalizeListing);
  await fs.writeFile(listingsPath, JSON.stringify(normalized, null, 2));
  console.log(`Normalized ${normalized.length} listings and wrote back to ${listingsPath}`);
};

run().catch((error) => {
  console.error("Normalization failed:", error?.message || error);
  process.exit(1);
});
