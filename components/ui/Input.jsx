import * as React from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Input = React.forwardRef(({ className, type, isAdmin = false, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-text-muted)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        isAdmin 
          ? "border border-[var(--color-admin-border)] bg-white text-[var(--color-admin-text)] focus-visible:ring-2 focus-visible:ring-[var(--color-admin-blue)] rounded-[10px]"
          : "border border-[var(--color-border)] bg-[rgba(0,0,0,0.5)] text-white focus-visible:border-[var(--color-gold)] focus-visible:ring-1 focus-visible:ring-[var(--color-gold)]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
