import type React from "react"

import { cn } from "@/lib/utils"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  variant: {
    default: "bg-primary text-black hover:bg-accent transition-colors duration-200",
    outline: "border border-primary text-primary hover:bg-primary hover:text-black transition-colors duration-200",
    ghost: "hover:bg-accent/10 text-foreground hover:text-primary",
    link: "underline-offset-4 hover:underline text-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants.variant[variant || "default"],
        buttonVariants.size[size || "default"],
        className,
      )}
      {...props}
    />
  )
}

