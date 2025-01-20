import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">
      {/* Háttér videó vagy animált gradient */}
      <div className="from-primary-400/20 to-accent-400/20 animate-gradient absolute inset-0 bg-gradient-to-br" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-64 w-64 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute right-1/4 top-1/2 h-48 w-48 rounded-full" />
      </div>

      {/* Fő tartalom */}
      <div className="relative flex h-full w-full items-center justify-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Modern iroda belső tér"
            fill
            className="scale-105 transform object-cover brightness-50 transition-transform duration-[3s] hover:scale-100"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl text-center text-white">
          <h1 className="mb-4 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-4xl font-bold opacity-0 sm:mb-6 sm:text-5xl md:text-7xl">
            Digitális Megoldások a Jövőért
          </h1>
          <p className="mx-auto mb-6 max-w-2xl translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-lg opacity-0 sm:mb-8 sm:text-xl md:text-2xl">
            Modern webalkalmazások fejlesztése, amelyek előreviszik
            vállalkozását
          </p>
          <a href="/contact">
            <button className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] rounded-full bg-primary-500 px-6 py-3 text-base font-semibold opacity-0 transition-all duration-300 hover:scale-105 hover:bg-primary-600 hover:shadow-[0_0_30px_rgba(3,169,244,0.5)] sm:px-8 sm:py-4 sm:text-lg">
              Kapcsolatfelvétel
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
