import Image from "next/image";

import { LOGOMARK_PATH } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function PropoLogomark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={LOGOMARK_PATH}
      alt="Propo"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      priority
    />
  );
}
