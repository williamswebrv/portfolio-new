"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Años de experiencia", value: "8+" },
  { label: "Proyectos lanzados", value: "32" },
  { label: "Equipos guiados", value: "12" }
];

export function QuickStats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-[#0B0D12]"
        >
          <p className="text-2xl font-semibold tabular-nums">{stat.value}</p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
