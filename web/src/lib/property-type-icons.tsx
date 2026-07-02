import {
  BedDouble,
  Building2,
  Home,
  LayoutGrid,
  Rows3,
  type LucideIcon,
} from "lucide-react";

import type { PropertyType } from "@/lib/types";
import { cn } from "@/lib/utils";

const PROPERTY_TYPE_ICONS: Record<PropertyType, LucideIcon> = {
  house: Home,
  flat: Building2,
  apartment: Building2,
  room: BedDouble,
  townhouse: Rows3,
  commercial: Building2,
};

export function PropertyTypeIcon({
  type,
  className,
}: {
  type: PropertyType | null;
  className?: string;
}) {
  const Icon = type === null ? LayoutGrid : PROPERTY_TYPE_ICONS[type];
  return <Icon className={cn("size-3.5 shrink-0", className)} aria-hidden />;
}
