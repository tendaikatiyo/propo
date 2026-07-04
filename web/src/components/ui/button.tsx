import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import {
  liquidGlassButtonDefault,
  liquidGlassButtonDestructive,
  liquidGlassButtonGhost,
  liquidGlassButtonOutline,
  liquidGlassButtonSecondary,
} from "@/lib/liquid-glass"
import { motionPress } from "@/lib/motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-[15px] font-medium tracking-normal whitespace-nowrap outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: cn(liquidGlassButtonDefault, motionPress),
        outline: cn(liquidGlassButtonOutline, motionPress),
        secondary: cn(liquidGlassButtonSecondary, motionPress),
        ghost: cn(liquidGlassButtonGhost, motionPress),
        destructive: cn(liquidGlassButtonDestructive, motionPress),
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-1.5 px-5",
        xs: "h-7 gap-1 px-3 text-xs",
        sm: "h-9 gap-1.5 px-4 text-sm",
        lg: "h-11 gap-2 px-6 text-base",
        icon: "size-10 rounded-full",
        "icon-xs": "size-7 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
