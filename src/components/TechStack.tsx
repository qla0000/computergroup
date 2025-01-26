"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
} from "@icons-pack/react-simple-icons";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

const TECH_ICONS = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  NodeJS: SiNodedotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  AWS: SiAmazon,
  Git: SiGit,
} as const;

export default function TechStack() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const technologies = Object.entries(TECH_ICONS).map(([name, Icon], index) => ({
    name,
    Icon,
    delay: (index * 50).toString(),
  }));

  return (
    <section
      ref={ref}
      className="dark:to-primary-950 relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900"
    >
      <div className="container relative mx-auto px-4">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-primary-900 sm:text-4xl dark:text-primary-50 ${
            hasAnimated
              ? "animate-[slideDown_1s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          Technológiáink
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map(({ name, Icon, delay }) => (
            <div
              key={name}
              className={`group flex flex-col items-center opacity-0 ${
                hasAnimated ? "animate-[fadeIn_0.5s_ease-out_forwards]" : ""
              }`}
              style={{ animationDelay: `${hasAnimated ? delay : 0}ms` }}
            >
              <div className="relative mb-4 h-20 w-20 transition-transform duration-300 group-hover:scale-110">
                <div className="dark:bg-primary-800/50 absolute inset-0 rounded-full bg-primary-200 backdrop-blur-sm" />
                <div className="relative flex h-full w-full items-center justify-center p-4">
                  <Icon className="text-2xl text-primary-700 dark:text-primary-700" />
                </div>
              </div>
              <span className="text-center text-sm font-medium text-primary-700 transition-colors duration-300 group-hover:text-accent-600 dark:text-primary-900 dark:group-hover:text-accent-500">
                {name}
              </span>
            </div>
          ))}
          <div
            className={`col-span-2 mt-8 opacity-0 sm:col-span-3 md:col-span-4 lg:col-span-5 ${
              hasAnimated ? "animate-[fadeIn_0.5s_ease-out_1s_forwards]" : ""
            }`}
          >
            <p className="text-center text-xl font-semibold text-primary-700 transition-colors duration-300 hover:text-accent-500 dark:text-primary-900 dark:hover:text-accent-400">
              És még sok más...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
