"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition will-change-transform hover:shadow-lg dark:border-zinc-800 dark:bg-[#0B0D12]"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative">
          <Image
            src={project.cover}
            alt={project.title}
            width={640}
            height={360}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="neutral" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-zinc-500 dark:text-zinc-400">{project.year}</span>
            <span className="inline-flex items-center gap-1 text-indigo-600 transition group-hover:text-indigo-500 dark:text-indigo-400">
              Ver caso
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
