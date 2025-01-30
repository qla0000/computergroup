"use client";

import { useRef } from "react";

export default function PortfolioHero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative h-[var(--viewport-height)] overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="fixed inset-0 z-0 h-[var(--viewport-height)] overflow-hidden bg-[url('/bg/portfolio.webp')] bg-cover bg-center bg-fixed"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
          zIndex: -99
        }}
      >
        {/* Dark overlay */}
        <div className="from-primary-900/70 to-primary-950/80 absolute inset-0 bg-gradient-to-br" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-4 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-4xl font-bold opacity-0 sm:text-5xl md:text-6xl">
            Portfóliónk
          </h1>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-lg text-primary-100 opacity-0">
            Ismerje meg eddigi munkáinkat és sikeres projektjeinket
          </p>
        </div>
      </div>
    </section>
  );
}
