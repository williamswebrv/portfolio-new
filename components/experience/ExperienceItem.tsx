import { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceItem({ experience, className }: { experience: Experience; className?: string }) {
  return (
    <div className={cn("relative pl-10 pb-8", className)}>
      <span className="absolute left-3 top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-200/60 dark:ring-indigo-500/20" />
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-[#0B0D12]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {experience.role} · {experience.company}
          </h3>
          <span className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {experience.start} — {experience.end}
          </span>
        </div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {experience.stack && (
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
            Stack: {experience.stack.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
