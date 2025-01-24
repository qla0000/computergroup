"use client";

import { useEffect, useState } from "react";

export default function ServiceHero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + (scrolled * 0.0005);
      setScale(Math.min(newScale, 1.15));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-20 isolate">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="fixed inset-0 bg-[url('/code.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            height: "100vh",
            clipPath: "inset(0 0 -100% 0)"
          }}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-primary-950/80 backdrop-blur-[1px]" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute left-1/4 top-1/4 h-16 w-16 rounded-full bg-primary-300/10 md:h-32 md:w-32" />
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 h-12 w-12 rounded-full bg-accent-300/10 md:h-24 md:w-24" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-3 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-3xl font-bold opacity-0 sm:text-4xl md:text-5xl">
            Szolgáltatásaink
          </h1>
          <p className="mx-auto mb-4 max-w-2xl translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-base opacity-0 sm:text-lg md:text-xl">
            Értékesítést segítő weboldalakat készítünk vállalkozásának
          </p>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] text-sm text-primary-200 opacity-0 md:text-base">
            Együtt gondolkodunk. Számíthat ránk a stratégiai tervezéstől kezdve,
            a tartalom és a design kialakításán át, egészen a lenyűgöző
            végeredmény publikálásig.
          </p>
        </div>
      </div>
    </section>
  );
}
