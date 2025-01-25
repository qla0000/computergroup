// components/HeroSection.tsx
"use client";

import { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[var(--viewport-height)] overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          height: 'var(--app-height)',
          backgroundImage: 'url(/code.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">
            Szolgáltatásaink
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Értékesítést segítő weboldalakat készítünk vállalkozásának
          </p>
          <button className="rounded-lg px-8 py-3 font-semibold transition-all">
            Együtt gondolkodunk. Számíthat ránk a stratégiai tervezéstől kezdve,
            a tartalom és a design kialakításán át, egészen a lenyűgöző
            végeredmény publikálásig.
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;