export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-900 to-primary-950 py-24 text-white">
      <div className="absolute inset-0">
        <div className="animate-pulse-slow absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary-400 opacity-20" />
        <div className="animate-pulse-slow absolute -right-32 top-32 h-64 w-64 rounded-full bg-accent-400 opacity-20" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 translate-y-10 transform opacity-0 text-4xl font-bold sm:text-5xl md:text-6xl animate-[slideUp_1s_ease-out_forwards]">
            Kapcsolat
          </h1>
          <p className="text-xl text-primary-100 translate-y-10 transform opacity-0 animate-[slideUp_1s_ease-out_0.3s_forwards]">
            Vegye fel velünk a kapcsolatot és beszéljük meg projektje részleteit
          </p>
        </div>
      </div>
    </section>
  );
}