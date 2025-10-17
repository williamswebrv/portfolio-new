export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  year: number;
  links?: { demo?: string; repo?: string };
  highlights: string[];
  content: string[];
};

export const projects: Project[] = [
  {
    slug: "nebulon-analytics",
    title: "Nebulon Analytics Dashboard",
    summary:
      "Plataforma de análisis de producto con vistas colaborativas y reportes en tiempo real para equipos de growth.",
    cover: "/covers/project-1.jpg",
    tags: ["UX/UI", "Next.js", "React", "Tailwind"],
    year: 2024,
    links: {
      demo: "https://example.com/nebulon",
      repo: "https://github.com/example/nebulon"
    },
    highlights: [
      "Reduje el tiempo de configuración de reportes en un 45%.",
      "Implementé un sistema de permisos granular para equipos globales.",
      "Definí un nuevo lenguaje visual para el ecosistema de dashboards."
    ],
    content: [
      "Nebulon Analytics nació como respuesta a la necesidad de los equipos de producto de centralizar métricas y colaborar de forma asíncrona. Lideré el descubrimiento con entrevistas y mapas de journey para identificar oportunidades clave.",
      "El proceso de diseño incluyó workshops de co-creación, prototipos de alta fidelidad en Figma y pruebas moderadas con perfiles de growth managers y analistas.",
      "La solución final priorizó la personalización de vistas, alertas inteligentes y handoff impecable hacia equipos de ingeniería.",
      "Los resultados demostraron un incremento del 28% en adopción interna y un NPS de 54 puntos dentro de los primeros dos meses.",
      "El stack técnico se construyó sobre Next.js, TypeScript, GraphQL y componentes escalables en Tailwind CSS."
    ]
  },
  {
    slug: "aurora-commerce",
    title: "Aurora Ecommerce Experience",
    summary:
      "Experiencia omnicanal para un retailer premium, con catálogo personalizado y checkout asistido por IA.",
    cover: "/covers/project-2.jpg",
    tags: ["UX/UI", "Next.js", "Node", "AI"],
    year: 2023,
    links: {
      demo: "https://example.com/aurora"
    },
    highlights: [
      "Optimicé la conversión en mobile en un 32% tras rediseñar el flujo de checkout.",
      "Integré recomendaciones inteligentes basadas en comportamiento en tiempo real.",
      "Construí un design system adaptable con tokens compartidos para retail y B2B."
    ],
    content: [
      "Aurora necesitaba una experiencia consistente entre tiendas físicas y digitales. Realicé un análisis comparativo y definí arquetipos de compradores para cada segmento.",
      "Prototipamos journeys clave en sesiones semanales con stakeholders y priorizamos funcionalidades mediante RICE.",
      "El lanzamiento incluyó un asistente de IA para descubrimiento de productos y un checkout expres con métodos de pago locales.",
      "Tras el despliegue medimos mejoras en conversión, tasa de repetición y satisfacción post-compra.",
      "Tecnologías: Next.js, TypeScript, Node, servicios headless de comercio y pipelines CI/CD basados en Vercel." 
    ]
  },
  {
    slug: "helios-design-system",
    title: "Helios Design System",
    summary:
      "Sistema de diseño multiplataforma con librerías escalables y governance colaborativa para equipos de producto.",
    cover: "/covers/project-3.jpg",
    tags: ["Design System", "React", "Tailwind"],
    year: 2022,
    links: {
      repo: "https://github.com/example/helios"
    },
    highlights: [
      "Reduje en 60% el tiempo de handoff entre diseño e ingeniería.",
      "Implementé tokens de diseño sincronizados en Figma y código.",
      "Documenté patrones accesibles AA y AAA para componentes críticos."
    ],
    content: [
      "El reto fue consolidar tres bibliotecas en una sola fuente de verdad. Coordiné squads de diseño, frontend y QA para definir principios y roadmap.",
      "Diseñamos más de 60 componentes reutilizables con soporte para temas claros y oscuros, además de variantes densas.",
      "Se implementó automatización para publicar paquetes en npm y documentación interactiva.",
      "El sistema se adoptó en 14 productos en menos de seis meses, reduciendo deuda de interfaz y bugs visuales.",
      "Stack: React, Storybook, Tailwind, Tokens JSON y scripts personalizados en Node." 
    ]
  },
  {
    slug: "orbit-logistics",
    title: "Orbit Logistics Platform",
    summary:
      "Suite operacional para coordinar rutas, inventario y trazabilidad en tiempo real para operadores logísticos.",
    cover: "/covers/project-2.jpg",
    tags: ["UX/UI", "Next.js", "Node"],
    year: 2021,
    highlights: [
      "Optimicé el ruteo reduciendo tiempos de entrega en un 18%.",
      "Incorporé tableros predictivos con visualizaciones personalizadas.",
      "Implementé auditorías de accesibilidad y entrenamiento cross-team."
    ],
    content: [
      "Orbit necesitaba una plataforma unificada para controlar operaciones en LATAM. Realicé shadowing en centros de distribución para mapear necesidades.",
      "Diseñamos módulos modulares que cubrían monitoreo en vivo, gestión de inventario y comunicación con conductores.",
      "Validamos prototipos con operadoras y gerentes regionales para priorizar automatizaciones clave.",
      "El lanzamiento logró reducir incidencias críticas y mejorar los SLA con clientes enterprise.",
      "Stack: Next.js, NestJS, WebSockets y mapas vectoriales con Mapbox."
    ]
  },
  {
    slug: "lyra-ai-assistant",
    title: "Lyra AI Assistant",
    summary:
      "Asistente inteligente para equipos de soporte que automatiza respuestas y recomienda soluciones contextualizadas.",
    cover: "/covers/project-1.jpg",
    tags: ["AI", "React", "Tailwind"],
    year: 2024,
    highlights: [
      "Automatización del 45% de tickets repetitivos con supervisión humana.",
      "Panel de entrenamiento con métricas tabulares y aprendizaje continuo.",
      "Implementación ética y transparente para manejo de datos sensibles."
    ],
    content: [
      "Lyra surgió para escalar el soporte sin perder calidad humana. Mapeamos procesos y definimos niveles de intervención humana.",
      "Diseñé la experiencia del entrenador de IA con visualizaciones tabulares de desempeño y controles granulares.",
      "Integramos guardrails y revisiones humanas para mitigar sesgos y asegurar cumplimiento legal.",
      "Tras el piloto inicial, el tiempo medio de resolución bajó en 36% y la satisfacción del soporte subió a 4.6/5.",
      "La solución combinó modelos conversacionales, embeddings y un panel operativo construido con React y Tailwind."
    ]
  },
  {
    slug: "pulse-mobile",
    title: "Pulse Mobile Wellness",
    summary:
      "Aplicación móvil híbrida para monitorear bienestar, retos de hábitos y sesiones de coaching personalizadas.",
    cover: "/covers/project-3.jpg",
    tags: ["UX/UI", "React", "Design System"],
    year: 2020,
    highlights: [
      "Incremento del 25% en retención de usuarios activos mensuales.",
      "Definición de métricas north-star y tableros de experimentación.",
      "Escalamiento a 8 mercados con localización adaptable."
    ],
    content: [
      "Pulse necesitaba aumentar la retención y engagement. Conduje research remoto y definí hipótesis de crecimiento.",
      "El diseño incorporó un sistema de misiones, seguimiento de hábitos y recomendaciones con base en datos biométricos.",
      "La arquitectura permitió lanzar programas localizados y contenidos personalizados.",
      "Medimos mejoras constantes en stickiness gracias a cohorts trimestrales y experimentos guiados.",
      "Stack: React Native, TypeScript, APIs de salud y pipelines de analítica."
    ]
  }
];
