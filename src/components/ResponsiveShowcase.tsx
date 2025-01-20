export default function ResponsiveShowcase() {
  const features = [
    { icon: "💻", text: "Reszponzív dizájn" },
    { icon: "🚀", text: "Gyors betöltés" },
    { icon: "🎨", text: "Modern megjelenés" },
    { icon: "📱", text: "Mobilbarát felület" }
  ];

  return (
    <section className="relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-300/10" />
        <div className="animate-float-delayed absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-300/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Szöveg rész */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-primary-900 sm:text-4xl dark:text-primary-50">
              Weboldal készítés
            </h2>
            <p className="text-lg text-primary-700 dark:text-primary-200">
              Weboldal készítés területén magasan képzett szakembereink állnak az Ön rendelkezésére a tervezéstől a kivitelezésig. A weboldal készítés folyamatát Ön mindenkor nyomon követheti. A végeredményt úgy alakítjuk ki, hogy testre szabott, hatékony, könnyen kezelhető felület legyen, ami az Ön céljait szolgálja.
            </p>
            <p className="mt-4 text-lg text-primary-700 dark:text-primary-200">
              A nagy látogatottságú honlapjaink a kor minden követelményeinek is eleget tesznek. Segítségével a piacot hazai és nemzetközi szinten is nyomon követjük.
            </p>
            
            {/* Új feature lista */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.text}
                  className="group flex items-center space-x-3 rounded-lg bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-primary-800/50"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-primary-900 dark:text-primary-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kép rész */}
          <div className="relative mx-auto max-w-2xl lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-primary-800">
              <div className="absolute -right-6 -top-6 h-24 w-24 animate-spin-slow rounded-full bg-accent-500/10 blur-xl" />
              <div className="absolute -left-6 -bottom-6 h-24 w-24 animate-spin-slow rounded-full bg-primary-500/10 blur-xl" />
              <img
                src="/responsiveness-devices-final.jpg"
                alt="Reszponzív weboldal megjelenítése különböző eszközökön"
                className="relative h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-900/10 dark:ring-primary-50/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 