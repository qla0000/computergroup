import Image from "next/image";
import Link from "next/link";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export default function Footer() {
  const navigation = {
    main: [
      { name: "Kezdőlap", href: "/" },
      { name: "Szolgáltatások", href: "/services" },
      { name: "Portfólió", href: "/portfolio" },
      { name: "Kapcsolat", href: "/contact" },
    ],
    services: [
      { name: "Webfejlesztés", href: "/services#development" },
      { name: "Backend Fejlesztés", href: "/services#backend" },
      { name: "UI/UX Tervezés", href: "/services#design" },
    ],
    contact: {
      email: "info@pelda.hu",
      phone: "+36 1 234 5678",
      address: "1234 Budapest, Példa utca 1.",
    },
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props: IconProps) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: (props: IconProps) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="relative isolate z-[9999] overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 before:absolute before:inset-0 dark:before:bg-primary-900">
      <div className="relative z-[2]">
        <div className="animate-float bg-primary-200/20 dark:bg-primary-300/10 absolute -left-32 bottom-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-float-delayed bg-accent-200/20 dark:bg-accent-300/10 absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-700" />

      <div className="container relative z-[2] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-6 inline-block transform transition-all duration-300 hover:scale-105">
              <Image
                src="/logo/new-logo.webp"
                alt="Company Logo"
                width={180}
                height={48}
                className="block dark:hidden"
              />
              <Image
                src="/logo/new-logo-white.webp"
                alt="Company Logo Dark"
                width={180}
                height={48}
                className="hidden dark:block"
              />
            </div>
            <p className="max-w-sm text-lg font-medium text-primary-800 dark:text-primary-200">
              Modern webalkalmazások fejlesztése, amelyek előreviszik
              vállalkozását.
            </p>
            <div className="mt-8 flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-full bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-primary-800"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon
                    className="h-5 w-5 text-primary-600 transition-colors duration-300 group-hover:text-accent-500 dark:text-primary-300"
                    aria-hidden={true}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4 xl:grid-cols-3">
            <nav>
              <h3 className="mb-6 text-lg font-bold text-primary-900 dark:text-primary-50">
                Menü
              </h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <div className="relative">
                      <Link
                        href={item.href}
                        className="group flex items-center text-primary-600 transition-all duration-300 hover:text-accent-500 dark:text-primary-300"
                      >
                        <span className="absolute left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-6" />
                        <span className="ml-0 transition-all duration-300 group-hover:ml-8">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h3 className="mb-6 text-lg font-bold text-primary-900 dark:text-primary-50">
                Szolgáltatások
              </h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <div className="relative">
                      <Link
                        href={item.href}
                        className="group flex items-center text-primary-600 transition-all duration-300 hover:text-accent-500 dark:text-primary-300"
                      >
                        <span className="absolute left-0 h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-6" />
                        <span className="ml-0 transition-all duration-300 group-hover:ml-8">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-lg font-bold text-primary-900 dark:text-primary-50">
              Kapcsolat
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${navigation.contact.email}`}
                  className="group flex items-center space-x-3 text-primary-600 dark:text-primary-300"
                >
                  <div className="rounded-full bg-white p-2 shadow-md transition-all duration-300 group-hover:shadow-lg dark:bg-primary-800">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="transition-colors duration-300 group-hover:text-accent-500">
                    {navigation.contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${navigation.contact.phone.replace(/\s/g, '')}`}
                  className="group flex items-center space-x-3 text-primary-600 dark:text-primary-300"
                >
                  <div className="rounded-full bg-white p-2 shadow-md transition-all duration-300 group-hover:shadow-lg dark:bg-primary-800">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="transition-colors duration-300 group-hover:text-accent-500">
                    {navigation.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(navigation.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-primary-600 dark:text-primary-300"
                >
                  <div className="rounded-full bg-white p-2 shadow-md transition-all duration-300 group-hover:shadow-lg dark:bg-primary-800">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="transition-colors duration-300 group-hover:text-accent-500">
                    {navigation.contact.address}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-700" />
          <div className="flex flex-col items-center justify-between space-y-4 text-sm text-primary-500 sm:flex-row sm:space-y-0 dark:text-primary-400">
            <p>© {new Date().getFullYear()} Minden jog fenntartva.</p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="hover:text-accent-500">
                Adatvédelem
              </Link>
              <Link href="/terms" className="hover:text-accent-500">
                ÁSZF
              </Link>
              <Link href="/cookies" className="hover:text-accent-500">
                Cookie szabályzat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
