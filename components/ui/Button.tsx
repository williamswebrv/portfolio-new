"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md";
  icon?: ReactNode;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 active:bg-indigo-700",
  outline:
    "border border-zinc-200 text-zinc-900 shadow-sm transition hover:bg-zinc-100/70 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900/60",
  ghost:
    "text-zinc-700 transition hover:bg-zinc-100/60 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-zinc-200 dark:hover:bg-zinc-900/60"
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 rounded-xl px-3 text-sm",
  md: "h-10 rounded-xl px-4 text-sm"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", icon, children, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 font-medium",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
