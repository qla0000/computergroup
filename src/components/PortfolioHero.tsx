export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-32">
      {/* Háttérkép */}
      <div 
        className="absolute inset-0 bg-[url('/portfolio.jpg')] bg-cover bg-center bg-no-repeat bg-fixed scale-110 sm:scale-105"
        style={{ 
          transform: 'scale(var(--bg-scale))',
          transformOrigin: 'center center',
          '--bg-scale': 'calc(1.1 + (0.4 * (1 - var(--viewport-scale))))',
          '--viewport-scale': 'clamp(0, (100vw - 400px) / 800, 1)'
        } as any}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-950/50" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-primary-300/10" />
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 h-20 w-20 rounded-full bg-accent-300/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-4 translate-y-10 transform opacity-0 text-4xl font-bold sm:text-5xl md:text-6xl animate-[slideUp_1s_ease-out_forwards]">
            Portfóliónk
          </h1>
          <p className="text-lg text-primary-100 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
            Ismerje meg eddigi munkáinkat és sikeres projektjeinket
          </p>
        </div>
      </div>
    </section>
  );
}