import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Modern webáruház fejlesztése React és Next.js alapokon. Teljes körű e-commerce megoldás egyedi design-nal és adminisztrációs felülettel.",
    image: "/ecommerce.jpg",
    category: "Webáruház",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Vállalati Weboldal",
    description:
      "Reszponzív vállalati weboldal tervezése és fejlesztése. Modern, letisztult design SEO-optimalizálással.",
    image: "/portfolio/corporate.webp",
    category: "Weboldal",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Komplex adminisztrációs felület vállalatirányítási rendszerhez. Valós idejű adatmegjelenítés és elemzések.",
    image: "/saas-dashboard.jpg",
    category: "Alkalmazás",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    link: "#",
  },
  {
    title: "Ingatlan Portál",
    description:
      "Ingatlan kereső és hirdető platform fejlesztése részletes keresési funkciókkal és térképes megjelenítéssel.",
    image: "/portfolio/realestate.webp",
    category: "Webportál",
    technologies: ["Next.js", "MongoDB", "Google Maps API", "AWS S3"],
    link: "#",
  },
  {
    title: "Étterem Weboldal",
    description:
      "Étterem bemutatkozó oldal online foglalási rendszerrel és ételrendelési lehetőséggel.",
    image: "/portfolio/restaurant.webp",
    category: "Weboldal",
    technologies: ["React", "Firebase", "Stripe", "Google Calendar API"],
    link: "#",
  },
  {
    title: "Oktatási Platform",
    description:
      "Online oktatási platform videós tartalmakkal, kvízekkel és előrehaladás követéssel.",
    image: "/portfolio/education.webp",
    category: "E-learning",
    technologies: ["Next.js", "PostgreSQL", "AWS", "Mux Video"],
    link: "#",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="dark:to-primary-950 bg-primary-50 py-20 dark:bg-gradient-to-br dark:from-primary-900">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl dark:bg-primary-800"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-primary-50">
                  {project.title}
                </h3>
                <p className="mb-4 text-primary-700 dark:text-primary-200">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-100 px-3 py-1 text-sm text-accent-800 dark:bg-accent-900 dark:text-accent-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
