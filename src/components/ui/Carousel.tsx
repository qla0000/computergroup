"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/carousel/responsiveness.webp",
    title: "Modern weboldalak készítése",
    description:
      "Valójában egy dolgot csinálunk, de annak minden részletét, ráadásul szívből: WEBOLDALT",
    buttonText: "Kapcsolatfelvétel",
    buttonLink: "/contact",
  },
  {
    image: "/carousel/ui-design-mac.webp",
    title: "Együtt gondolkodunk",
    description:
      "Számíthatsz ránk a stratégiai tervezéstől kezdve, a tartalom és a design kialakításán át, egészen a lenyűgöző végeredmény publikálásig.",
    buttonText: "Szolgáltatásaink",
    buttonLink: "/services",
  },
  {
    image: "/carousel/webpage-on-mac.webp",
    title: "Hosszútávú partnerség",
    description:
      "Nálunk a weboldalkészítés nemcsak egyszeri tevékenység, hanem egy hosszú távú partnerség kezdete. Évek múlva is ott leszünk, ha változtatni, fejleszteni szeretne az oldalán.",
    buttonText: "Portfólió",
    buttonLink: "/portfolio",
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e: TouchEvent) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      setCurrentSlide((prev) => 
        distance > 0 
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="relative h-[var(--viewport-height)] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 will-change-[opacity,transform] ${
            currentSlide === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            quality={85}
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            placeholder="blur"
            blurDataURL={slide.image}
            style={{
              objectFit: 'cover',
              color: 'transparent'
            }}
          />
          <div className="from-primary-800/60 to-primary-900/80 absolute inset-0 bg-gradient-to-b" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl px-4 text-center">
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-7xl">
                {slide.title}
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-50 sm:text-xl md:text-2xl">
                {slide.description}
              </p>
              <Link href={slide.buttonLink} className="relative z-20 inline-block">
                <button 
                  type="button"
                  className="group relative rounded-full bg-primary-500 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(3,169,244,0.8)]"
                  aria-label={`${slide.buttonText} - Ugrás a ${slide.buttonLink} oldalra`}
                >
                  <span className="relative z-10 text-white">
                    {slide.buttonText}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "h-3 w-12 bg-accent-400 shadow-[0_0_20px_rgba(3,169,244,1)] sm:h-4 sm:w-16"
                : "h-3 w-3 bg-primary-300 hover:bg-primary-400 hover:shadow-[0_0_15px_rgba(58,169,255,0.3)] sm:h-4 sm:w-4"
            }`}
            aria-label={`Ugrás a ${index + 1}. diára`}
          />
        ))}
      </div>
    </section>
  );
}
