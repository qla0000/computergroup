export default function ServiceDetails() {
  const services = [
    {
      title: "Tervezés",
      description: "Közösen meghatározzuk az üzleti célját, megtervezzük az eléréséhez szükséges weboldal struktúráját és tartalmát, majd elkészítjük annak tervrajzát.",
      features: [
        "Üzleti célok elemzése",
        "Weboldal struktúra tervezés",
        "Tartalom stratégia",
        "Wireframe készítés"
      ],
      icon: "📋"
    },
    {
      title: "Szövegírás",
      description: "Segítünk a tartalom összeállításában és a szövegírásban, hogy az önazonos, de mégis hatásos, könnyen érthető és konverzióra optimalizált legyen.",
      features: [
        "SEO-optimalizált szövegírás",
        "Konverziófókuszú tartalom",
        "Márkaidentitás tükrözése",
        "Célközönség-specifikus megfogalmazás"
      ],
      icon: "✍️"
    },
    {
      title: "Webdesign kidolgozás",
      description: "Kidolgozzuk a weboldalát egyedi látványtervét, amely személyiségét és márkáját tükrözi, így bizalmat, hitelességet és profizmust sugall majd.",
      features: [
        "Egyedi dizájn tervezés",
        "Reszponzív megjelenés",
        "Modern UI elemek",
        "Márkaidentitás integráció"
      ],
      icon: "🎨"
    },
    {
      title: "Webfejlesztés",
      description: "Megépítjük a megbeszéltek szerinti tervet – minden eszközön tökéletesen megjelenő – reszponzív kialakítást úgy, hogy közben minél jobban megfeleljen a keresőmotorok elvárásainak.",
      features: [
        "Reszponzív fejlesztés",
        "SEO-barát kódolás",
        "Teljesítményoptimalizálás",
        "Keresztböngésző kompatibilitás"
      ],
      icon: "💻"
    },
    {
      title: "Támogatás, karbantartás",
      description: "Átadás után sem hagyunk magadra, gondoskodunk weboldala biztonságáról és rendelkezésedre állunk, ha módosítanál a tartalmán.",
      features: [
        "Folyamatos biztonsági frissítések",
        "Rendszeres mentések",
        "Technikai támogatás",
        "Tartalom frissítések"
      ],
      icon: "🛠️"
    },
    {
      title: "Hirdetés, Marketing",
      description: "Segítünk kidolgozni a megfelelő hirdetési stratégiákat a szükséges platformokon – Google, Facebook, Instagram, stb.",
      features: [
        "Google Ads kampányok",
        "Social media marketing",
        "Analitika és követés",
        "Konverzióoptimalizálás"
      ],
      icon: "📈"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-6 bg-primary-50 dark:bg-primary-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary-900 dark:text-primary-50 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mb-4 text-primary-700 dark:text-primary-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-primary-600 dark:text-primary-400"
                  >
                    <span className="mr-2">•</span>
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