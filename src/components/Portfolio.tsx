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
      image: "/bg-webdesign.jpg",
      category: "Weboldal",
    },
  ];

  return (
    <section className="to-primary-950 relative overflow-hidden bg-gradient-to-br from-primary-900 py-24">
      {/* Háttérkép */}
      <div
        className="absolute inset-0 scale-110 bg-[url('/portfolio.jpg')] bg-cover bg-fixed bg-center bg-no-repeat sm:scale-105"
        style={
          {
            transform: "scale(var(--bg-scale))",
            transformOrigin: "center center",
            ["--bg-scale" as string]:
              "calc(1.1 + (0.4 * (1 - var(--viewport-scale))))",
            ["--viewport-scale" as string]:
              "clamp(0, (100vw - 400px) / 800, 1)",
          } as React.CSSProperties
        }
        aria-hidden="true"
      />
      <div className="from-primary-900/50 to-primary-950/50 absolute inset-0 bg-gradient-to-br" />

      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-300/10 absolute left-1/4 top-1/4 h-32 w-32 rounded-full" />
        <div className="animate-float-delayed bg-accent-300/10 absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full" />
      </div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
          Portfólió
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="dark:bg-primary-800/50 group relative aspect-video animate-[scaleIn_0.6s_ease-out_forwards] overflow-hidden rounded-lg bg-white/10 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
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
