"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";

export default function ResponsiveShowcase() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        setIsContentVisible(true);
      }, 300);
    }
  }, [isVisible, hasAnimated]);

  const features = [
    { icon: "💻", text: "Reszponzív dizájn" },
    { icon: "🚀", text: "Gyors betöltés" },
    { icon: "🎨", text: "Modern megjelenés" },
    { icon: "📱", text: "Mobilbarát felület" },
  ];

  return (
    <section
      ref={ref}
      className={`dark:to-primary-950 relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900 ${
        hasAnimated ? "animate" : ""
      }`}
    >
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Szöveg rész */}
          <div
            className={`text-center opacity-0 transition-opacity duration-500 lg:text-left ${
              hasAnimated ? "slide-in-left" : ""
            } ${isContentVisible ? "opacity-100" : ""}`}
          >
            <h2 className="mb-6 text-3xl font-bold text-primary-900 sm:text-4xl dark:text-primary-50">
              Weboldal készítés
            </h2>
            <p className="text-lg text-primary-700 dark:text-primary-200">
              Weboldal készítés területén magasan képzett szakembereink állnak
              az Ön rendelkezésére a tervezéstől a kivitelezésig. A weboldal
              készítés folyamatát Ön mindenkor nyomon követheti. A végeredményt
              úgy alakítjuk ki, hogy testre szabott, hatékony, könnyen kezelhető
              felület legyen, ami az Ön céljait szolgálja.
            </p>
            <p className="mt-4 text-lg text-primary-700 dark:text-primary-200">
              A nagy látogatottságú honlapjaink a kor minden követelményeinek is
              eleget tesznek. Segítségével a piacot hazai és nemzetközi szinten
              is nyomon követjük.
            </p>

            {/* Új feature lista */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="dark:bg-primary-800/50 group flex items-center space-x-3 rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-primary-900 dark:text-primary-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kép rész */}
          <div
            className={`relative w-full opacity-0 transition-opacity duration-500 ${
              hasAnimated ? "fade-in" : ""
            } ${isContentVisible ? "opacity-100" : ""}`}
          >
            <div className="dark:bg-primary-800/50 relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              {/* Dekoratív elemek */}
              <div className="bg-accent-500/20 absolute -right-8 -top-8 h-32 w-32 animate-spin-slow rounded-full blur-2xl" />
              <div className="bg-primary-500/20 absolute -bottom-8 -left-8 h-32 w-32 animate-spin-slow rounded-full blur-2xl" />

              {/* Kép */}
              <Image
                src="/responsiveness-devices-final.jpg"
                alt="Reszponzív weboldal megjelenítése különböző eszközökön"
                className="h-full w-full scale-105 object-cover transition-transform duration-700 hover:scale-110"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                priority
                quality={85}
              />

              {/* Üveghatású keret */}
              <div className="dark:bg-primary-950/10 dark:ring-primary-200/10 absolute inset-0 rounded-2xl bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-inset ring-white/10 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" />

              {/* Fényes szegély effekt */}
              <div className="via-primary-500/10 absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent to-transparent opacity-50 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
