import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <Image
        src={project.cover}
        alt={project.title}
        width={1200}
        height={640}
        className="h-auto w-full rounded-3xl border border-zinc-200 object-cover dark:border-zinc-800"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold md:text-4xl">{project.title}</h1>
          <span className="rounded-full border border-zinc-200 px-4 py-1 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            {project.year}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="indigo">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {project.links?.demo && (
            <Link
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Ver demo ↗
            </Link>
          )}
          {project.links?.repo && (
            <Link
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Ver repositorio ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
