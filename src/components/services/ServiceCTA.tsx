export default function ServiceCTA() {
  return (
    <section className="to-primary-950 relative overflow-hidden bg-gradient-to-br from-primary-900 py-24 text-white">
      {/* Háttérkép */}
      <div
        className="absolute inset-0 scale-110 bg-[url('/bg-servicecta.jpg')] bg-cover bg-fixed bg-center bg-no-repeat sm:scale-105"
        style={
          {
            transform: "scale(var(--bg-scale))",
            transformOrigin: "center center",
            ["--bg-scale" as string]:
              "calc(1.1 + (0.4 * (1 - var(--viewport-scale))))",
            ["--viewport-scale" as string]:
              "clamp(0, (100vw - 400px) / 800, 1)",
          } as React.CSSProperties
        }
        aria-hidden="true"
      />
      <div className="from-primary-900/60 to-primary-950/60 absolute inset-0 bg-gradient-to-br backdrop-blur-[1px]" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-6 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-3xl font-bold opacity-0 sm:text-4xl">
          Készen áll a következő projektjére?
        </h2>
        <p className="mb-8 translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-xl text-primary-100 opacity-0">
          Vegye fel velünk a kapcsolatot és beszéljük meg az Ön igényeit!
        </p>
        <a href="/contact">
          <button className="text-primary-950 translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold opacity-0 transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:bg-accent-400 hover:shadow-[0_10px_40px_rgba(255,193,7,0.5)] active:scale-95">
            Kapcsolatfelvétel
          </button>
        </a>
      </div>
    </section>
  );
}
