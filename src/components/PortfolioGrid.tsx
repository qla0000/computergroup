import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern webáruház fejlesztése React és Next.js alapokon",
    image: "/ia-forrest.png",
    category: "Webshop",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"]
  },
  {
    title: "SaaS Dashboard",
    description: "Komplex adminisztrációs felület vállalatirányítási rendszerhez",
    image: "/ia-forrest.png",
    category: "Alkalmazás",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
  },
  {
    title: "Vállalati Weboldal",
    description: "Reszponzív vállalati weboldal tervezése és fejlesztése",
    image: "/ia-forrest.png",
    category: "Weboldal",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"]
  }
];

export default function PortfolioGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl dark:bg-primary-900"
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
                <h3 className="mb-2 text-xl font-bold text-primary-900 dark:text-primary-50">{project.title}</h3>
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