"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "@/components/shell/Sidebar";
import { Topbar } from "@/components/shell/Topbar";

export function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handler = () => setCollapsed(mediaQuery.matches);
    handler();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const width = collapsed ? "84px" : "280px";
    document.documentElement.style.setProperty("--sidebar-w", width);
  }, [collapsed]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0F1218] dark:text-zinc-100">
      <div className="grid" style={{ gridTemplateColumns: "var(--sidebar-w) 1fr" }}>
        <Sidebar collapsed={collapsed} onToggle={(value) => setCollapsed(value)} />
        <div className="min-h-screen">
          <Topbar collapsed={collapsed} onToggleSidebar={() => setCollapsed((prev) => !prev)} />
          <main className="px-6 pb-16 md:px-8">
            <div className="mx-auto w-full" style={{ maxWidth: "var(--container)" }}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
