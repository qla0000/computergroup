import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-24">
      {/* Háttérkép */}
      <div className="absolute inset-0">
        <Image
          src="/portfolio-hero.webp"
          alt="Portfolio háttér"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-950/80 backdrop-blur-sm" />
      </div>

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary-300/10" />
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-accent-300/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-6 translate-y-10 transform opacity-0 text-4xl font-bold sm:text-5xl md:text-6xl animate-[slideUp_1s_ease-out_forwards]">
            Portfóliónk
          </h1>
          <p className="text-xl text-primary-100 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
            Ismerje meg eddigi munkáinkat és sikeres projektjeinket
          </p>
        </div>
      </div>
    </section>
  );
}