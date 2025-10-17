"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { ThemeToggle } from "@/components/shell/ThemeToggle";
import { cn } from "@/lib/utils";

type TopbarProps = {
  collapsed: boolean;
  onToggleSidebar: () => void;
};

export function Topbar({ collapsed, onToggleSidebar }: TopbarProps) {
  return (
    <header className="flex h-[var(--topbar-h)] items-center justify-between gap-4 px-4 md:px-6">
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:border-zinc-800 dark:text-zinc-300",
            "md:hidden"
          )}
          aria-label={collapsed ? "Expandir navegación" : "Colapsar navegación"}
        >
          <span className="text-lg">≡</span>
        </button>
        <div className="relative w-full max-w-[420px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Buscar..." className="h-9 w-full rounded-xl bg-zinc-100 pl-9" aria-label="Buscar" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/projects"
          className="hidden rounded-xl border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:text-indigo-600 dark:border-zinc-800 dark:text-zinc-200 md:inline-flex"
        >
          Proyectos
        </Link>
        <Link
          href="/contact"
          className="hidden rounded-xl border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:text-indigo-600 dark:border-zinc-800 dark:text-zinc-200 md:inline-flex"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
