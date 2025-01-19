export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-900 to-primary-950 py-24 text-white">
      <div className="absolute inset-0">
        <div className="animate-pulse-slow absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-primary-400 opacity-20" />
        <div className="animate-pulse-slow absolute -right-32 top-0 h-64 w-64 rounded-full bg-accent-400 opacity-20" />
      </div>
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Készen áll a következő projektjére?
        </h2>
        <p className="mb-8 text-xl opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Vegye fel velünk a kapcsolatot és beszéljük meg az Ön igényeit!
        </p>
        <button className="rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-primary-950 transition-all duration-300 hover:bg-accent-400 hover:shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:scale-105 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
          Kapcsolatfelvétel
        </button>
      </div>
    </section>
  );
}