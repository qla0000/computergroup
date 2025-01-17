export default function Services() {
    const services = [
      {
        title: "Frontend Fejlesztés",
        description: "Modern, reszponzív webalkalmazások React és Next.js használatával",
        icon: "🎨"
      },
      {
        title: "Backend Fejlesztés",
        description: "Skálázható szerveroldali megoldások Node.js és TypeScript alapokon",
        icon: "⚙️"
      },
      {
        title: "UI/UX Tervezés",
        description: "Felhasználóbarát felületek tervezése és implementálása",
        icon: "✨"
      }
    ];
  
    return (
      <section className="py-12 sm:py-16 md:py-20" id="services">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl hover:text-primary-600 transition-colors duration-300">
            Szolgáltatásaink
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group rounded-lg bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-800 sm:p-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-125 sm:text-4xl">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold transition-colors duration-300 group-hover:text-primary-600 sm:mb-4 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100 sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }