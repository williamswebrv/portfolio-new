"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Globe2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProfileHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0B0D12]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-pink-200 opacity-60 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/40 to-pink-500/40 opacity-40 blur-3xl" />
      <div className="relative z-10 px-6 py-10 md:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/avatar.jpg"
              alt="Retrato de la persona"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white dark:ring-[#0B0D12]"
            />
            <div>
              <h1 className="text-3xl font-semibold md:text-4xl">Alexandra Ríos</h1>
              <p className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />Barcelona, España</span>
                <span className="inline-flex items-center gap-1"><Globe2 className="h-4 w-4" />Producto &amp; Diseño Estratégico</span>
                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center gap-1 text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
                >
                  <Linkedin className="h-4 w-4" />LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="md">Disponibilidad</Button>
            <Button variant="ghost" size="md">
              Ver CV
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
