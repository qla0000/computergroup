"use client";

import { useState, useEffect, TouchEvent } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/responsiveness.jpg",
    title: "Modern weboldalak készítése",
    description:
      "Valójában egy dolgot csinálunk, de annak minden részletét, ráadásul szívből: WEBOLDALT",
    buttonText: "Kapcsolatfelvétel",
    buttonLink: "/contact",
  },
  {
    image: "/ui-design-mac.jpg",
    title: "Együtt gondolkodunk",
    description:
      "Számíthatsz ránk a stratégiai tervezéstől kezdve, a tartalom és a design kialakításán át, egészen a lenyűgöző végeredmény publikálásig.",
    buttonText: "Szolgáltatásaink",
    buttonLink: "/services",
  },
  {
    image: "/webpage-on-mac.jpg",
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

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      className="relative h-screen w-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Háttér képek */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover brightness-[0.4]"
            priority={index === 0}
          />
          <div className="from-primary-800/60 to-primary-900/80 absolute inset-0 bg-gradient-to-b" />
        </div>
      ))}

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/20 absolute left-1/4 top-1/4 h-64 w-64 rounded-full blur-2xl" />
        <div className="animate-float-delayed bg-accent-300/20 absolute right-1/4 top-1/2 h-48 w-48 rounded-full blur-2xl" />
      </div>

      {/* Tartalom */}
      <div className="relative flex h-full items-center justify-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-7xl text-center transition-all duration-1000 ${
              currentSlide === index
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-5xl md:text-7xl">
              {slide.title}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-xl md:text-2xl">
              {slide.description}
            </p>
            <a href={slide.buttonLink}>
              <button className="text-primary-950 rounded-full bg-accent-500 px-6 py-3 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-accent-400 hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] sm:px-8 sm:py-4 sm:text-lg">
                {slide.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Navigáció */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
              currentSlide === index
                ? "w-8 bg-accent-400 shadow-[0_0_10px_rgba(58,169,255,0.5)] sm:w-12"
                : "bg-primary-300 hover:bg-primary-400 hover:shadow-[0_0_10px_rgba(58,169,255,0.3)]"
            }`}
            aria-label={`Ugrás a ${index + 1}. diára`}
          />
        ))}
      </div>
    </section>
  );
}
