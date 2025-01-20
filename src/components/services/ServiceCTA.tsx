export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-24 text-white">
      {/* Háttérkép */}
      <div 
        className="absolute inset-0 bg-[url('/bg-servicecta.jpg')] bg-cover bg-center bg-no-repeat bg-fixed scale-110 sm:scale-105"
        style={{ 
          transform: 'scale(var(--bg-scale))',
          transformOrigin: 'center center',
          '--bg-scale': 'calc(1.1 + (0.4 * (1 - var(--viewport-scale))))',
          '--viewport-scale': 'clamp(0, (100vw - 400px) / 800, 1)'
        } as any}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-primary-950/60 backdrop-blur-[1px]" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary-300/10" />
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-accent-300/10" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_forwards]">
          Készen áll a következő projektjére?
        </h2>
        <p className="mb-8 text-xl text-primary-100 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
          Vegye fel velünk a kapcsolatot és beszéljük meg az Ön igényeit!
        </p>
        <a href="/contact">
          <button className="rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-primary-950 transition-all duration-500 hover:bg-accent-400 hover:shadow-[0_10px_40px_rgba(255,193,7,0.5)] hover:scale-110 hover:-translate-y-2 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards] active:scale-95">
            Kapcsolatfelvétel
          </button>
        </a>
      </div>
    </section>
  );
}