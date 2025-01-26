"use client";

import { useEffect, useState } from "react";

export default function ContactHero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + scrolled * 0.0005;
      setScale(Math.min(newScale, 1.15));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="to-primary-950 relative isolate overflow-hidden bg-gradient-to-br from-primary-900 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="mobile-viewport fixed inset-0 h-[var(--viewport-height)] bg-[url('/hero/backend.webp')] bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-950/95 backdrop-blur-[1px]" />
      <div className="container relative mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-6 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-4xl font-bold opacity-0 sm:text-5xl md:text-6xl">
            Kapcsolat
          </h1>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-xl text-primary-100 opacity-0">
            Vegye fel velünk a kapcsolatot és beszéljük meg projektje részleteit
          </p>
        </div>
      </div>
    </section>
  );
}
