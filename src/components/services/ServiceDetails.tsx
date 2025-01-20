export default function ServiceDetails() {
  const services = [
    {
      title: "Tervezés",
      description:
        "Közösen meghatározzuk az üzleti célját, megtervezzük az eléréséhez szükséges weboldal struktúráját és tartalmát, majd elkészítjük annak tervrajzát.",
      features: [
        "Üzleti célok meghatározása",
        "Weboldal struktúra tervezés",
        "Tartalom tervezés",
        "Wireframe készítés",
      ],
      icon: "📝",
    },
    {
      title: "Szövegírás",
      description:
        "Segítünk a tartalom összeállításában és a szövegírásban, hogy az önazonos, de mégis hatásos, könnyen érthető és konverzióra optimalizált legyen.",
      features: [
        "SEO-optimalizált szövegek",
        "Konverziófókuszú tartalom",
        "Márkahang kialakítása",
        "Könnyen érthető fogalmazás",
      ],
      icon: "✍️",
    },
    {
      title: "Webdesign kidolgozás",
      description:
        "Kidolgozzuk a weboldalát egyedi látványtervét, amely személyiségét és márkáját tükrözi, így bizalmat, hitelességet és profizmust sugall majd.",
      features: [
        "Egyedi dizájn",
        "Márkaidentitás tükrözése",
        "Modern megjelenés",
        "UX/UI tervezés",
      ],
      icon: "🎨",
    },
    {
      title: "Webfejlesztés",
      description:
        "Megépítjük a megbeszéltek szerinti tervet – minden eszközön tökéletesen megjelenő – reszponzív kialakítást úgy, hogy közben minél jobban megfeleljen a keresőmotorok elvárásainak.",
      features: [
        "Reszponzív fejlesztés",
        "SEO-barát kódolás",
        "Teljesítményoptimalizálás",
        "Keresztböngésző kompatibilitás",
      ],
      icon: "💻",
    },
    {
      title: "Támogatás, karbantartás",
      description:
        "Átadás után sem hagyunk magadra, gondoskodunk weboldala biztonságáról és rendelkezésedre állunk, ha módosítanál a tartalmán.",
      features: [
        "Folyamatos biztonsági frissítések",
        "Rendszeres mentések",
        "Technikai támogatás",
        "Tartalom frissítések",
      ],
      icon: "🛠️",
    },
    {
      title: "Hirdetés, Marketing",
      description:
        "Segítünk kidolgozni a megfelelő hirdetési stratégiákat a szükséges platformokon – Google, Facebook, Instagram, stb.",
      features: [
        "Google Ads kampányok",
        "Social media marketing",
        "Analitika és követés",
        "Konverzióoptimalizálás",
      ],
      icon: "📈",
    },
  ];

  return (
    <section className="dark:to-primary-950 relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900">
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
        {/* Új lebegő elemek */}
        <div className="animate-float-slow bg-primary-300/20 dark:bg-primary-400/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full blur-xl" />
        <div className="animate-float-delayed-slow bg-accent-300/20 dark:bg-accent-400/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full blur-xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group animate-[fadeIn_0.5s_ease-out_forwards] rounded-lg bg-white/80 p-6 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl sm:p-8 dark:bg-primary-800 dark:hover:bg-primary-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Dekoratív elemek */}
              <div className="bg-accent-500/10 dark:bg-accent-400/5 group-hover:bg-accent-500/20 dark:group-hover:bg-accent-400/10 absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl transition-all duration-500" />
              <div className="bg-primary-500/10 dark:bg-primary-400/5 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-400/10 absolute -bottom-4 -left-4 h-24 w-24 rounded-full blur-2xl transition-all duration-500" />

              <div className="relative">
                <div className="mb-4 text-4xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:transform">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary-900 transition-all duration-300 group-hover:text-accent-600 dark:text-primary-50 dark:group-hover:text-accent-400">
                  {service.title}
                </h3>
                <p className="mb-4 text-primary-800 transition-all duration-300 dark:text-primary-200">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-primary-700 transition-all duration-300 group-hover:translate-x-1 dark:text-primary-300"
                    >
                      <span className="mr-2 text-accent-600 transition-all duration-300 group-hover:scale-125 dark:text-accent-400">
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Üveghatású keret */}
              <div className="group-hover:ring-accent-500/20 dark:ring-primary-200/10 absolute inset-0 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
