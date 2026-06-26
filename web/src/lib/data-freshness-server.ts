import { stat } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "..", "data");

const DATA_FILES = [
  "market_metrics.json",
  "cities.json",
  "clean_rentals.json",
  "clean_sales.json",
  "rankings.json",
] as const;

export async function getDataUpdatedAt(): Promise<string | null> {
  let latest = 0;

  for (const file of DATA_FILES) {
    try {
      const filePath = path.join(DATA_DIR, file);
      const { mtimeMs } = await stat(filePath);
      if (mtimeMs > latest) latest = mtimeMs;
    } catch {
      // skip missing files
    }
  }

  if (latest === 0) return null;
  return new Date(latest).toISOString();
}
