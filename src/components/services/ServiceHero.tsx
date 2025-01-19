import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 py-20">
      {/* Háttérkép */}
      <div className="absolute inset-0">
        <Image
          src="/code.jpg"
          alt="Szolgáltatások háttér"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-primary-950/80" />
      </div>

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary-300/10" />
        <div className="animate-float-delayed absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-accent-300/10" />
      </div>

      {/* Fő tartalom */}
      <div className="relative container mx-auto px-4">
        <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-4 translate-y-10 transform opacity-0 text-4xl font-bold sm:text-5xl md:text-6xl animate-[slideUp_1s_ease-out_forwards]">
            Szolgáltatásaink
          </h1>
          <p className="mb-6 mx-auto max-w-2xl translate-y-10 transform opacity-0 text-lg sm:text-xl md:text-2xl animate-[slideUp_1s_ease-out_0.3s_forwards]">
            Értékesítést segítő weboldalakat készítünk vállalkozásának
          </p>
          <p className="text-primary-200 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.6s_forwards]">
            Együtt gondolkodunk. Számíthat ránk a stratégiai tervezéstől kezdve, a tartalom és a design kialakításán át, egészen a lenyűgöző végeredmény publikálásig.
          </p>
        </div>
      </div>
    </section>
  );
}