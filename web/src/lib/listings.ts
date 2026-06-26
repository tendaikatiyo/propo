/** Matches analytics `clean_data.py` land normalisation (residential_land, land, stand, etc.). */
export function isLandPropertyType(propertyType: string | null | undefined): boolean {
  if (!propertyType) return false;
  const value = propertyType.toLowerCase();
  if (value === "land") return true;
  return value.endsWith("_land") || value.includes("residential_land");
}
