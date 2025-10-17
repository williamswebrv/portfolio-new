import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AboutMe } from "@/components/profile/AboutMe";
import { QuickStats } from "@/components/profile/QuickStats";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, Globe2 } from "lucide-react";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-12">
      <ProfileHeader />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <AboutMe />
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-[#0B0D12]">
          <h2 className="text-lg font-semibold">Contacto rápido</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-indigo-500" />
              <span>Barcelona, España · Trabajo remoto y presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-indigo-500" />
              <a href="https://portfolio.example.com" className="hover:text-indigo-500">
                portfolio.example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-indigo-500" />
              <a href="mailto:hola@alexrios.design" className="hover:text-indigo-500">
                hola@alexrios.design
              </a>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge variant="indigo">Disponible para consultoría</Badge>
            <Badge variant="neutral">Hablo ES · EN</Badge>
          </div>
        </div>
      </div>

      <QuickStats />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Proyectos destacados</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Selección curada de proyectos recientes que combinan estrategia y craft.
            </p>
          </div>
        </div>
        <ProjectGrid projects={featured} selectedTags={[]} query="" />
      </section>
    </div>
  );
}
