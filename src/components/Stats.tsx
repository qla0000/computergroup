export default function Stats() {
  const stats = [
    { number: "100+", label: "Sikeres projekt" },
    { number: "50+", label: "Elégedett ügyfél" },
    { number: "5+", label: "Év tapasztalat" },
    { number: "24/7", label: "Támogatás" },
  ];

  return (
    <section className="relative overflow-hidden bg-primary-50 py-16 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group animate-[fadeIn_1s_ease-out_forwards] text-center opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-2 text-4xl font-bold text-primary-700 transition-all duration-300 group-hover:scale-110 dark:text-primary-200">
                {stat.number}
              </div>
              <div className="text-primary-700 dark:text-primary-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
