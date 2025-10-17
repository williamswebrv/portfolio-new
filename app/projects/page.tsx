"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { TagChips } from "@/components/projects/TagChips";
import { Input } from "@/components/ui/Input";
import { filterProjects } from "@/lib/filters";
import { motion } from "framer-motion";

const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
const tagCounts = projects.reduce<Record<string, number>>((acc, project) => {
  project.tags.forEach((tag) => {
    acc[tag] = (acc[tag] ?? 0) + 1;
  });
  return acc;
}, {});
const tagsWithCount = allTags.map((tag) => `${tag}|${tagCounts[tag] ?? 0}`);

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => filterProjects(projects, selectedTags, query), [selectedTags, query]);

  const handleToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-4"
      >
        <div>
          <h1 className="text-2xl font-semibold md:text-3xl">Proyectos</h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Explora casos de estudio enfocados en estrategia de producto, diseño y resultados medibles.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <TagChips tags={tagsWithCount} selected={selectedTags} onToggle={handleToggle} />
          <div className="md:self-end">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects…"
              className="h-9 max-w-xs"
              aria-label="Buscar proyectos"
            />
          </div>
        </div>
      </motion.div>

      <ProjectGrid projects={filtered} selectedTags={selectedTags} query={query} />
    </div>
  );
}
