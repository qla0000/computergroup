"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const services = [
    {
      title: "Weboldal készítés",
      description:
        "Magasan képzett szakembereink állnak az Ön rendelkezésére a tervezéstől a kivitelezésig. A weboldal készítés folyamatát Ön mindenkor nyomon követheti. A végeredményt úgy alakítjuk ki, hogy testre szabott, hatékony, könnyen kezelhető felület legyen, ami az Ön céljait szolgálja.",
      icon: "🎨",
    },
    {
      title: "Nagy látogatottságú rendszerek fejlesztése",
      description:
        "A nagy látogatottságú honlapjaink a kor minden követelményeinek is eleget tesznek. Segítségével a piacot hazai és nemzetközi szinten is nyomon követjük. A webáruház és weboldal készítés során figyelembe vesszük a kül- és belföldi trendeket, a versenytársak szokásait is.",
      icon: "⚙️",
    },
    {
      title: "Webáruház készítés",
      description:
        "Olyan online megoldásokat kínálunk hírlevelél, weblap, webáruház, webportál készítés területén, amelyeket belső munkatársak is könnyen kezelhetnek. Minden esetben átlátható, felhasználóbarát kezelőfelületet biztosítunk a tartalmak egyszerű módosításához.",
      icon: "🛍️",
    },
  ];

  return (
    <section
      ref={ref}
      className="parallax-section relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-24"
    >
      {/* Háttérkép */}
      <div
        className="parallax-bg bg-[url('/bg-services.jpg')]"
        aria-hidden="true"
      />
      <div className="from-primary-900/50 to-primary-950/50 absolute inset-0 bg-gradient-to-br" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full" />
      </div>

      {/* Tartalom */}
      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
          Szolgáltatásaink
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-lg bg-white/10 p-6 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                hasAnimated ? "animate-[fadeIn_0.5s_ease-out_forwards]" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent-400 sm:mb-4 sm:text-xl">
                {service.title}
              </h3>
              <p className="text-sm text-primary-100 transition-colors duration-300 sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
