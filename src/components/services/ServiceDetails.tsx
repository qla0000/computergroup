export default function ServiceDetails() {
  const services = [
    {
      title: "Frontend Fejlesztés",
      description: "Modern, reszponzív webalkalmazások React és Next.js használatával",
      features: [
        "Reszponzív webdesign",
        "Modern UI komponensek",
        "Teljesítményoptimalizálás",
        "SEO-barát fejlesztés"
      ],
      icon: "🎨"
    },
    {
      title: "Backend Fejlesztés",
      description: "Skálázható szerveroldali megoldások Node.js és TypeScript alapokon",
      features: [
        "API fejlesztés",
        "Adatbázis tervezés",
        "Biztonságos authentikáció",
        "Teljesítmény optimalizálás"
      ],
      icon: "⚙️"
    },
    {
      title: "UI/UX Tervezés",
      description: "Felhasználóbarát felületek tervezése és implementálása",
      features: [
        "Felhasználói felület tervezés",
        "Prototípus készítés",
        "Használhatósági tesztelés",
        "Design rendszerek"
      ],
      icon: "✨"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-primary-900 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-125">
                {service.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-accent-500">
                {service.title}
              </h3>
              <p className="mb-6 text-primary-700 dark:text-primary-200">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li 
                    key={feature} 
                    className="flex items-center text-primary-600 dark:text-primary-300 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="mr-2 text-accent-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}