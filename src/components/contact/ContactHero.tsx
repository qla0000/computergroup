export default function ContactHero() {
  return (
    <section className="to-primary-950 relative overflow-hidden bg-gradient-to-b from-primary-900 py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-32 h-64 w-64 animate-pulse-slow rounded-full bg-primary-400 opacity-20" />
        <div className="absolute -right-32 top-32 h-64 w-64 animate-pulse-slow rounded-full bg-accent-400 opacity-20" />
      </div>
      <div className="container mx-auto px-4">
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
