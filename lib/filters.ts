import { Project } from "@/data/projects";

const COLLATOR = new Intl.Collator("es", { sensitivity: "base", usage: "search" });

export function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function matchIncludes(source: string, query: string) {
  return COLLATOR.compare(normalizeText(source), normalizeText(query)) === 0 ||
    normalizeText(source).includes(normalizeText(query));
}

export function filterProjects(
  projects: Project[],
  selectedTags: string[],
  query: string
) {
  const normalizedQuery = normalizeText(query);
  return projects.filter((project) => {
    if (selectedTags.length > 0) {
      const hasTag = project.tags.some((tag) => selectedTags.includes(tag));
      if (!hasTag) {
        return false;
      }
    }

    if (!normalizedQuery) {
      return true;
    }

    const title = normalizeText(project.title);
    const summary = normalizeText(project.summary);
    return title.includes(normalizedQuery) || summary.includes(normalizedQuery);
  });
}
