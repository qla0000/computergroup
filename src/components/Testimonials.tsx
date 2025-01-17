"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper CSS importok
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Nagy Péter",
    role: "CEO, TechStart Kft.",
    content: "Kiváló munkát végeztek a weboldalunk fejlesztésében. Professzionális és megbízható partner.",
    image: "/profile.png"
  },
  {
    name: "Kiss Anna",
    role: "Marketing Vezető, Digital Solutions",
    content: "A csapat kreativitása és szakértelme kiemelkedő. Maximálisan elégedettek vagyunk az eredménnyel.",
    image: "/profile.png"
  },
  {
    name: "Kovács János",
    role: "Alapító, InnoTech",
    content: "Rugalmas és hatékony együttműködés, modern technológiai megoldások. Csak ajánlani tudom!",
    image: "/profile.png"
  }
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Ügyfeleink Mondták</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
                <div className="mb-4 text-gray-600 dark:text-gray-300">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
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