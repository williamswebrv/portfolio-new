"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

type ProjectGridProps = {
  projects: Project[];
  selectedTags: string[];
  query: string;
};

export function ProjectGrid({ projects, selectedTags, query }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div
        className="rounded-2xl border border-dashed border-zinc-300 p-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
        aria-live="polite"
      >
        No projects match your filters.
      </div>
    );
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      aria-label={`Proyectos filtrados por ${selectedTags.join(", ") || "todos"}. Búsqueda: ${query || "vacía"}.`}
    >
      {projects.map((project) => (
        <motion.div key={project.slug} variants={item} transition={{ duration: 0.35 }}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
