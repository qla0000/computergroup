export default function Services() {
  const services = [
    {
      title: "Weboldal készítés",
      description:
        "Magasan képzett szakembereink állnak az Ön rendelkezésére a tervezéstől a kivitelezésig. A weboldal készítés folyamatát Ön mindenkor nyomon követheti. A végeredményt úgy alakítjuk ki, hogy testre szabott, hatékony, könnyen kezelhető felület legyen, ami az Ön céljait szolgálja.",
      icon: "🎨",
    },
    {
      title: "Nagy látogatottságú rendszerek fejlesztése",
      description:
        "A nagy látogatottságú honlapjaink a kor minden követelményeinek is eleget tesznek. Segítségével a piacot hazai és nemzetközi szinten is nyomon követjük. A webáruház és weboldal készítés során figyelembe vesszük a kül- és belföldi trendeket, a versenytársak szokásait is.",
      icon: "⚙️",
    },
    {
      title: "Webáruház készítés",
      description:
        "Olyan online megoldásokat kínálunk hírlevelél, weblap, webáruház, webportál készítés területén, amelyeket belső munkatársak is könnyen kezelhetnek. Minden esetben átlátható, felhasználóbarát kezelőfelületet biztosítunk a tartalmak egyszerű módosításához.",
      icon: "🛍️",
    },
  ];

  return (
    <section
      className="bg-primary-50 py-12 sm:py-16 md:py-20 dark:bg-primary-900"
      id="services"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-primary-900 transition-colors duration-300 hover:text-accent-500 sm:mb-12 sm:text-4xl dark:text-primary-50">
          Szolgáltatásaink
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group animate-[fadeIn_0.5s_ease-out_forwards] rounded-lg bg-white p-6 opacity-0 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 dark:bg-primary-800"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary-900 transition-colors duration-300 group-hover:text-accent-500 sm:mb-4 sm:text-xl dark:text-primary-50">
                {service.title}
              </h3>
              <p className="text-sm text-primary-700 transition-colors duration-300 group-hover:text-primary-900 sm:text-base dark:text-primary-200 dark:group-hover:text-primary-50">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
