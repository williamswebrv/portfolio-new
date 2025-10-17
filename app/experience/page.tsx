import { experiences } from "@/data/experience";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Experiencia</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Trayectoria liderando equipos multidisciplinarios y escalando productos globales.
        </p>
      </div>
      <ExperienceTimeline experiences={experiences} />
    </div>
  );
}
