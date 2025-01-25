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
      className="relative h-[var(--viewport-height)] overflow-hidden"
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
              ? "scale-100 opacity-100"
              : "scale-110 opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              quality={85}
              placeholder="empty"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
              className="transform object-cover brightness-[0.4] transition-transform duration-[3s] hover:scale-105"
              priority={index === 0}
            />
          </div>
          <div className="from-primary-800/60 to-primary-900/80 absolute inset-0 bg-gradient-to-b" />
        </div>
      ))}

      {/* Tartalom továbbfejlesztett animációkkal */}
      <div className="relative flex h-full items-center justify-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-7xl text-center transition-all duration-700 ${
              currentSlide === index
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : isChanging
                  ? "pointer-events-none -translate-y-10 scale-95 opacity-0"
                  : "pointer-events-none translate-y-10 scale-95 opacity-0"
            }`}
          >
            <h1 className="mb-6 animate-[fadeIn_0.5s_ease-out_forwards] text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-5xl md:text-7xl">
              {slide.title}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl animate-[fadeIn_0.5s_ease-out_0.3s_forwards] text-lg text-primary-50 opacity-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:text-xl md:text-2xl">
              {slide.description}
            </p>
            <a href={slide.buttonLink}>
              <button className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] rounded-full bg-primary-500 px-6 py-3 text-base font-semibold opacity-0 transition-all duration-300 hover:scale-105 hover:bg-primary-600 hover:shadow-[0_0_30px_rgba(3,169,244,0.5)] sm:px-8 sm:py-4 sm:text-lg">
                {slide.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* alsó kis gombok */}
      <div className="absolute bottom-8 left-0 right-0 flex animate-[fadeIn_1s_ease-out_forwards] justify-center space-x-3">
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
