import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-gold)] text-[#0a0a0f] hover:bg-[#b09340] shadow-[0_0_15px_rgba(201,168,76,0.2)]",
        outline:
          "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface)] hover:text-white",
        ghost: "hover:bg-[var(--color-surface)] hover:text-white",
        neumorph: "neumorph hover:bg-[rgba(255,255,255,0.02)] active:neumorph-inset",
        admin_primary: "bg-[#0071e3] text-white hover:bg-[#0077ED] border border-transparent rounded-[10px]",
        admin_ghost: "text-[#0071e3] hover:bg-[rgba(0,113,227,0.1)] rounded-[10px]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
