"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", icon: Sun, label: "Claro" },
  { value: "dark", icon: Moon, label: "Oscuro" },
  { value: "system", icon: Monitor, label: "Sistema" }
] as const;

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-pressed={resolvedTheme === "dark"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/50 backdrop-blur transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200"
        aria-label="Cambiar tema"
      >
        {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-40 rounded-xl border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-[#0B0D12]">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-zinc-600 hover:bg-zinc-100/70 dark:text-zinc-300 dark:hover:bg-zinc-900/50"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
