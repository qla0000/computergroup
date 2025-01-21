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
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsChanging(false);
      }, 300);
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
          className={`absolute inset-0 transition-all duration-1000 ${
            currentSlide === index 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="transform object-cover brightness-[0.4] transition-transform duration-[3s] hover:scale-105"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-800/60 to-primary-900/80" />
        </div>
      ))}

      {/* Lebegő elemek továbbfejlesztett animációkkal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary-300/20 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-accent-300/20 blur-2xl animate-[float_8s_ease-in-out_2s_infinite]" />
        <div className="absolute left-1/3 bottom-1/4 h-32 w-32 rounded-full bg-primary-400/10 blur-xl animate-[float_7s_ease-in-out_1s_infinite]" />
      </div>

      {/* Tartalom továbbfejlesztett animációkkal */}
      <div className="relative flex h-full items-center justify-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-7xl text-center transition-all duration-700 ${
              currentSlide === index
                ? "pointer-events-auto translate-y-0 opacity-100 scale-100"
                : isChanging
                ? "pointer-events-none -translate-y-10 opacity-0 scale-95"
                : "pointer-events-none translate-y-10 opacity-0 scale-95"
            }`}
          >
            <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-5xl md:text-7xl animate-[fadeIn_0.5s_ease-out_forwards]">
              {slide.title}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-xl md:text-2xl animate-[fadeIn_0.5s_ease-out_0.3s_forwards] opacity-0">
              {slide.description}
            </p>
            <a href={slide.buttonLink}>
              <button className="rounded-full bg-accent-500 px-6 py-3 text-base font-semibold text-primary-950 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:bg-accent-400 hover:shadow-[0_10px_40px_rgba(255,193,7,0.5)] active:scale-95 sm:px-8 sm:py-4 sm:text-lg animate-[fadeIn_0.5s_ease-out_0.6s_forwards] opacity-0">
                {slide.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Navigáció továbbfejlesztett animációkkal */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 animate-[fadeIn_1s_ease-out_forwards]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === index
                ? "h-3 w-12 bg-accent-400 shadow-[0_0_20px_rgba(255,193,7,0.5)] sm:h-4 sm:w-16"
                : "h-3 w-3 bg-primary-300 hover:bg-primary-400 hover:shadow-[0_0_15px_rgba(58,169,255,0.3)] sm:h-4 sm:w-4"
            }`}
            aria-label={`Ugrás a ${index + 1}. diára`}
          />
        ))}
      </div>
    </section>
  );
}
