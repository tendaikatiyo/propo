"use client";

import { Button } from "@/components/ui/button";
import { propertyTypesForMode } from "@/lib/constants";
import { propertyTypeLabel } from "@/lib/format";
import { PropertyTypeIcon } from "@/lib/property-type-icons";
import type { ExploreMode, PropertyType } from "@/lib/types";

export function PropertyTypeButtons({
  mode,
  value,
  onChange,
}: {
  mode: ExploreMode;
  value: PropertyType | null;
  onChange: (type: PropertyType | null) => void;
}) {
  const propertyTypes = propertyTypesForMode(mode);

  function selectPropertyType(type: PropertyType | null) {
    if (type === null) {
      onChange(null);
      return;
    }
    onChange(value === type ? null : type);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        type="button"
        size="sm"
        variant={value == null ? "default" : "outline"}
        onClick={() => selectPropertyType(null)}
      >
        <PropertyTypeIcon type={null} />
        Any
      </Button>
      {propertyTypes.map((type) => (
        <Button
          key={type}
          type="button"
          size="sm"
          variant={value === type ? "default" : "outline"}
          onClick={() => selectPropertyType(type)}
        >
          <PropertyTypeIcon type={type} />
          {propertyTypeLabel(type)}
        </Button>
      ))}
    </div>
  );
}
