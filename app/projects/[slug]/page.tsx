import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectData = projects.find((item) => item.slug === params.slug);

  if (!projectData) {
    notFound();
  }

  const project = projectData;

  const [context, process, solution, results, techStack] = project.content;

  return (
    <div className="space-y-10 pb-12">
      <Button asChild variant="ghost" size="sm" className="w-fit">
        <Link href="/projects">← Volver a proyectos</Link>
      </Button>

      <ProjectHeader project={project} />

      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Contexto</h2>
          <div className="prose prose-zinc mt-3 max-w-none dark:prose-invert">
            <p>{context}</p>
          </div>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Proceso</h2>
          <div className="prose prose-zinc mt-3 max-w-none dark:prose-invert">
            <p>{process}</p>
          </div>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Solución</h2>
          <div className="prose prose-zinc mt-3 max-w-none dark:prose-invert">
            <p>{solution}</p>
          </div>
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Resultados</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 text-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {results && (
            <div className="prose prose-zinc mt-3 max-w-none text-sm dark:prose-invert">
              <p>{results}</p>
            </div>
          )}
        </section>
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Tech stack</h2>
          <div className="prose prose-zinc mt-3 max-w-none text-sm dark:prose-invert">
            <p>{techStack}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
