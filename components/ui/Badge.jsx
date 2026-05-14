import * as React from "react"
import { cva } from "class-variance-authority"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-surface)] text-white hover:bg-[rgba(255,255,255,0.1)]",
        gold:
          "border-transparent bg-[var(--color-gold-glow)] text-[var(--color-gold)] border-[var(--color-gold)] border-opacity-20",
        outline: "text-white border-[var(--color-border)]",
        // Admin Variants
        admin_default: "bg-[#f5f5f7] text-[#1d1d1f] border-transparent",
        admin_success: "bg-[#e5f5ea] text-[#147a3e] border-transparent",
        admin_warning: "bg-[#fff5e5] text-[#b35f00] border-transparent",
        admin_danger: "bg-[#ffe5e5] text-[#cc0000] border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
