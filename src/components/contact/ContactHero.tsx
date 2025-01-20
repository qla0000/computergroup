export default function ContactHero() {
  return (
    <section className="to-primary-950 relative overflow-hidden bg-gradient-to-br from-primary-900 py-24 text-white">
      {/* Háttérkép */}
      <div
        className="absolute inset-0 scale-110 bg-[url('/backend.jpg')] bg-cover bg-fixed bg-center bg-no-repeat sm:scale-105"
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

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-4xl font-bold opacity-0 sm:text-5xl md:text-6xl">
            Kapcsolat
          </h1>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-xl text-primary-100 opacity-0">
            Vegye fel velünk a kapcsolatot és beszéljük meg projektje részleteit
          </p>
        </div>
      </div>
    </section>
  );
}
