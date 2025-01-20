import {
  SiReact,
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit 
} from "@icons-pack/react-simple-icons";

export default function TechStack() {
  const technologies = [
    { name: "React", Icon: SiReact, delay: "0" },
    { name: "Next.js", Icon: SiNextdotjs, delay: "100" },
    { name: "TypeScript", Icon: SiTypescript, delay: "200" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, delay: "300" },
    { name: "Node.js", Icon: SiNodedotjs, delay: "400" },
    { name: "MongoDB", Icon: SiMongodb, delay: "500" },
    { name: "PostgreSQL", Icon: SiPostgresql, delay: "600" },
    { name: "Docker", Icon: SiDocker, delay: "700" },
    { name: "AWS", Icon: SiAmazon, delay: "800" },
    { name: "Git", Icon: SiGit, delay: "900" }
  ];

  return (
    <section className="relative overflow-hidden bg-primary-50 py-24 dark:bg-gradient-to-br dark:from-primary-900 dark:to-primary-950">
      {/* Lebegő elemek */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-primary-200/30 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/30 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-900 sm:text-4xl dark:text-primary-50">
          Technológiáink
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map(({ name, Icon, delay }) => (
            <div
              key={name}
              className="group flex animate-[fadeIn_0.5s_ease-out_forwards] flex-col items-center opacity-0"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="relative mb-4 h-20 w-20 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute -inset-2 rounded-full bg-white/50 backdrop-blur-sm dark:bg-primary-800/50" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-primary-500/10 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full w-full items-center justify-center p-4 text-primary-700 text-2xl transition-all duration-500 group-hover:rotate-6 dark:text-primary-700">
                  <Icon />
                </div>
              </div>
              <span className="text-center text-sm font-medium text-primary-700 transition-colors duration-300 group-hover:text-accent-600 dark:text-primary-900 dark:group-hover:text-accent-500">
                {name}
              </span>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 mt-8">
            <p className="text-center text-xl font-semibold text-primary-700 transition-colors duration-300 hover:text-accent-500 dark:text-primary-900 dark:hover:text-accent-400">
              És még sok más...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
