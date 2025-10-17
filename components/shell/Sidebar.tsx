"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LayoutDashboard, Briefcase, Layers, Mail, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/projects", label: "Proyectos", icon: Layers },
  { href: "/experience", label: "Experiencia", icon: Briefcase },
  { href: "/contact", label: "Contacto", icon: Mail }
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: (collapsed: boolean) => void;
};

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        "flex min-h-screen flex-col border-r border-zinc-200 bg-white px-4 py-6 transition-all dark:border-zinc-800 dark:bg-[#0B0D12]",
        collapsed ? "items-center px-3" : ""
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(!collapsed)}
        className="mb-8 flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-zinc-200"
        aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
      >
        <LayoutDashboard className="h-5 w-5" />
        {!collapsed && <span>Panel</span>}
        <ChevronDown className={cn("h-4 w-4 transition", collapsed ? "rotate-180" : "rotate-0")} />
      </button>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                "text-zinc-700 hover:bg-zinc-100/70 dark:text-zinc-200 dark:hover:bg-zinc-900/50",
                isActive &&
                  "border border-indigo-200/60 bg-indigo-50 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
              )}
              aria-current={isActive ? "page" : undefined}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
