"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";
import { ExperienceItem } from "@/components/experience/ExperienceItem";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 }
        }
      }}
      className="relative"
    >
      <span className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden />
      {experiences.map((experience) => (
        <motion.div key={experience.company} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>
          <ExperienceItem experience={experience} />
        </motion.div>
      ))}
    </motion.div>
  );
}
