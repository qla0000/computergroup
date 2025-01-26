"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const stats = [
    { number: "100+", label: "Sikeres projekt" },
    { number: "50+", label: "Elégedett ügyfél" },
    { number: "5+", label: "Év tapasztalat" },
    { number: "24/7", label: "Támogatás" },
  ];

  return (
    <section
      ref={ref}
      className="dark:to-primary-950 relative overflow-hidden bg-primary-50 py-16 dark:bg-gradient-to-br dark:from-primary-900"
    >
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group text-center ${
                hasAnimated
                  ? "animate-[statsAppear_0.6s_ease-out_forwards]"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-2 text-4xl font-bold text-primary-700 dark:text-primary-200">
                {stat.number}
              </div>
              <div className="text-primary-700 dark:text-primary-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
