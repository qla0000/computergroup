import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      image: "/ecommerce.jpg",
      category: "Webshop",
    },
    {
      title: "SaaS Dashboard",
      image: "/saas-dashboard.jpg",
      category: "Alkalmazás",
    },
    {
      title: "Vállalati Weboldal",
      image: "/ia-forrest.png",
      category: "Weboldal",
    },
  ];

  return (
    <section
      className="bg-primary-50 py-12 sm:py-16 md:py-20 dark:bg-primary-900"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-primary-100 transition-colors duration-300 hover:text-accent-500 sm:mb-12 sm:text-4xl dark:text-primary-50">
          Portfólió
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative aspect-video animate-[scaleIn_0.6s_ease-out_forwards] overflow-hidden rounded-lg bg-white opacity-0 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-primary-800"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:rotate-2 group-hover:scale-110"
              />
              <div className="from-primary-900/80 absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t to-transparent opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <h3 className="translate-y-4 text-lg font-bold text-primary-50 transition-all duration-500 group-hover:translate-y-0 sm:text-xl">
                  {project.title}
                </h3>
                <p className="translate-y-4 text-sm text-primary-100 transition-all delay-100 duration-500 group-hover:translate-y-0 sm:text-base">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
