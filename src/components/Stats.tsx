export default function Stats() {
  const stats = [
    { number: "100+", label: "Sikeres projekt" },
    { number: "50+", label: "Elégedett ügyfél" },
    { number: "5+", label: "Év tapasztalat" },
    { number: "24/7", label: "Támogatás" },
  ];

  return (
    <section className="dark:to-primary-950 bg-gradient-to-b from-white to-primary-50 py-16 dark:from-primary-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group animate-[fadeIn_1s_ease-out_forwards] text-center opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-2 text-4xl font-bold text-accent-500 transition-all duration-300 group-hover:scale-110 dark:text-accent-400">
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
