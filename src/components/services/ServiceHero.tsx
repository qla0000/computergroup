export default function ServiceHero() {
  return (
    <section className="to-primary-950 relative overflow-hidden bg-gradient-to-br from-primary-900 py-20">
      {/* Háttérkép */}
      <div
        className="absolute inset-0 scale-110 bg-[url('/code.jpg')] bg-cover bg-fixed bg-center bg-no-repeat sm:scale-105"
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
      <div className="from-primary-900/60 to-primary-950/60 absolute inset-0 bg-gradient-to-br" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full" />
      </div>

      {/* Fő tartalom */}
      <div className="container relative mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-4 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-4xl font-bold opacity-0 sm:text-5xl md:text-6xl">
            Szolgáltatásaink
          </h1>
          <p className="mx-auto mb-6 max-w-2xl translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-lg opacity-0 sm:text-xl md:text-2xl">
            Értékesítést segítő weboldalakat készítünk vállalkozásának
          </p>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] text-primary-200 opacity-0">
            Együtt gondolkodunk. Számíthat ránk a stratégiai tervezéstől kezdve,
            a tartalom és a design kialakításán át, egészen a lenyűgöző
            végeredmény publikálásig.
          </p>
        </div>
      </div>
    </section>
  );
}
