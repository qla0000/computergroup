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
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group animate-[fadeIn_0.5s_ease-out_forwards] rounded-lg bg-white/80 p-6 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-2xl dark:hover:shadow-2xl sm:p-8 dark:bg-primary-800 dark:hover:bg-primary-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <div className="mb-4 text-4xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
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
                      <span className="mr-2 text-accent-600 transition-all duration-300 group-hover:scale-110 dark:text-accent-400">
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
