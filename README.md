# Portafolio Next.js 15

Portafolio moderno construido con Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Hook Form y Zod.

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Visita `http://localhost:3000` para ver el portafolio.

## Estructura principal

- `app/` páginas, layout y API.
- `components/` UI reutilizable y vistas.
- `data/` fuentes de datos para proyectos y experiencia.
- `lib/` utilidades de tema y filtros.
- `public/` activos estáticos como avatar y covers.

## Contenido editable

- Edita `data/projects.ts` para añadir, actualizar o eliminar proyectos. Asegúrate de mantener el formato tipado y agrega nuevas imágenes en `public/covers/` (los archivos incluidos son marcadores de posición en texto plano).
- Edita `data/experience.ts` para modificar tu timeline profesional.
- Cambia el avatar reemplazando `public/avatar.jpg` por tu propia imagen (idealmente 448×448 px). El repositorio incluye marcadores de posición en texto plano para evitar binarios.
- Ajusta colores o tokens actualizando variables en `app/globals.css` y la configuración de Tailwind.

## Producción

```bash
npm run build
npm run start
```

## Accesibilidad

- Los elementos interactivos respetan `focus-visible` con resaltes índigo.
- El formulario de contacto usa etiquetas semánticas y validación con mensajes accesibles.
- El tema se persiste en `localStorage` y respeta la preferencia del sistema.
