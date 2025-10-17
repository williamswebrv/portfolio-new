"use client";

import { cn } from "@/lib/utils";

type TagChipsProps = {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
};

export function TagChips({ tags, selected, onToggle }: TagChipsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => {
        const [label, rawCount] = tag.split("|");
        const count = rawCount ? Number(rawCount) : undefined;
        const isSelected = selected.includes(label);
        return (
          <button
            key={label}
            type="button"
            onClick={() => onToggle(label)}
            aria-pressed={isSelected}
            className={cn(
              "inline-flex h-8 items-center gap-2 rounded-full border px-3 text-xs font-medium transition",
              isSelected
                ? "border-indigo-200/60 bg-indigo-50 text-indigo-600 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400"
                : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-zinc-900"
            )}
          >
            <span>{label}</span>
            {typeof count === "number" && !Number.isNaN(count) && (
              <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
