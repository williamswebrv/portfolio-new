export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Nova Labs",
    role: "Principal Product Designer",
    start: "Jun 2022",
    end: "Present",
    highlights: [
      "Co-lideré la visión de producto de una suite de analítica con más de 40k usuarios activos.",
      "Organicé programas de discovery continuo y síntesis trimestral para stakeholders.",
      "Facilité guilds de diseño transversal para compartir aprendizajes y estándares."
    ],
    stack: ["Next.js", "Figma", "Storybook", "Amplitude"]
  },
  {
    company: "Helix Commerce",
    role: "Senior Product Designer",
    start: "May 2020",
    end: "May 2022",
    highlights: [
      "Rediseñé el flujo de checkout global logrando +8pt en CSAT.",
      "Introduje experimentos A/B guiados por métricas north-star.",
      "Mentoricé a 4 diseñadores de producto en prácticas de investigación."
    ],
    stack: ["React", "Node", "Mixpanel"]
  },
  {
    company: "Atlas Health",
    role: "Product Designer",
    start: "Jan 2018",
    end: "Apr 2020",
    highlights: [
      "Lancé una app de bienestar corporativo para 12 países simultáneamente.",
      "Implementé tableros de resultados en tiempo real para clientes enterprise.",
      "Construí un playbook de diseño accesible y escalable."
    ],
    stack: ["React Native", "Notion", "Looker"]
  }
];
