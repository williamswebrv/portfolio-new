"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-[#0B0D12]"
    >
      <h2 className="text-lg font-semibold">Sobre mí</h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        Diseñadora de producto enfocada en experiencias data-driven, alineando estrategia, investigación y ejecución. Me encanta
        construir sistemas que escalen narrativas de negocio y empoderen a los equipos a tomar decisiones con claridad.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        En los últimos años he liderado descubrimientos, definido roadmaps y co-creado con ingeniería para lanzar productos que
        priorizan accesibilidad y crecimiento sostenible.
      </p>
      <button
        className="mt-4 text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
        type="button"
      >
        Leer más →
      </button>
    </motion.div>
  );
}
