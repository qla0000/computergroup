"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper CSS importok
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Nagy Péter",
    role: "CEO, TechStart Kft.",
    content:
      "Kiváló munkát végeztek a weboldalunk fejlesztésében. Professzionális és megbízható partner.",
    image: "/profile.png",
  },
  {
    name: "Kiss Anna",
    role: "Marketing Vezető, Digital Solutions",
    content:
      "A csapat kreativitása és szakértelme kiemelkedő. Maximálisan elégedettek vagyunk az eredménnyel.",
    image: "/profile.png",
  },
  {
    name: "Kovács János",
    role: "Alapító, InnoTech",
    content:
      "Rugalmas és hatékony együttműködés, modern technológiai megoldások. Csak ajánlani tudom!",
    image: "/profile.png",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="parallax-section relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-24">
      {/* Háttérkép */}
      <div
        className="parallax-bg bg-[url('/bg-testimonials.jpg')]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-950/50" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full" />
      </div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
          Ügyfeleink Mondták
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="dark:bg-primary-800/50 rounded-lg bg-white/10 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 text-primary-100">
                  <p>&quot;{testimonial.content}&quot;</p>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-accent-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-200">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
