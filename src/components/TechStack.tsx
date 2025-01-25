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

export default function TechStack() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const technologies = [
    { name: "React", Icon: SiReact, delay: "0" },
    { name: "Next.js", Icon: SiNextdotjs, delay: "100" },
    { name: "TypeScript", Icon: SiTypescript, delay: "200" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, delay: "300" },
    { name: "Node.js", Icon: SiNodedotjs, delay: "400" },
    { name: "MongoDB", Icon: SiMongodb, delay: "500" },
    { name: "PostgreSQL", Icon: SiPostgresql, delay: "600" },
    { name: "Docker", Icon: SiDocker, delay: "700" },
    { name: "AWS", Icon: SiAmazon, delay: "800" },
    { name: "Git", Icon: SiGit, delay: "900" },
  ];

  return (
    <section
      ref={ref}
      className="dark:to-primary-950 relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900"
    >
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

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
                <div className="dark:bg-primary-800/50 absolute -inset-2 rounded-full bg-white/50 backdrop-blur-sm" />
                <div className="via-primary-500/10 absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full w-full items-center justify-center p-4 text-2xl text-primary-700 transition-all duration-500 group-hover:rotate-6 dark:text-primary-700">
                  <Icon />
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
