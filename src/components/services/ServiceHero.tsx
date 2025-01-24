import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative min-h-[30vh] overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-20">
      {/* Parallax háttérkép */}
      <div className="fixed inset-0 -z-10 h-[150%] w-full">
        <div 
          className="absolute inset-0 h-full w-full"
          style={{ 
            transform: "translateZ(0px) scale(1.1)",
            willChange: "transform",
            transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          <Image
            src="/code.jpg"
            alt="Háttérkép"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 to-primary-950/80" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-16 w-16 rounded-full md:h-32 md:w-32" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-12 w-12 rounded-full md:h-24 md:w-24" />
      </div>

      {/* Fő tartalom */}
      <div className="container relative mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-3 translate-y-10 transform animate-[slideUp_1s_ease-out_forwards] text-3xl font-bold opacity-0 sm:text-4xl md:text-5xl">
            Szolgáltatásaink
          </h1>
          <p className="mx-auto mb-4 max-w-2xl translate-y-10 transform animate-[slideUp_1s_ease-out_0.3s_forwards] text-base opacity-0 sm:text-lg md:text-xl">
            Értékesítést segítő weboldalakat készítünk vállalkozásának
          </p>
          <p className="translate-y-10 transform animate-[slideUp_1s_ease-out_0.6s_forwards] text-sm text-primary-200 opacity-0 md:text-base">
            Együtt gondolkodunk. Számíthat ránk a stratégiai tervezéstől kezdve,
            a tartalom és a design kialakításán át, egészen a lenyűgöző
            végeredmény publikálásig.
          </p>
        </div>
      </div>
    </section>
  );
}
