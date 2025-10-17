import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "indigo" | "neutral";
};

const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",
  indigo:
    "border border-indigo-200/60 bg-indigo-50 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400",
  neutral:
    "border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-200"
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        styles[variant],
        className
      )}
      {...props}
    />
  );
}
