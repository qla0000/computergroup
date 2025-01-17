import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navigation = {
    main: [
      { name: "Kezdőlap", href: "/" },
      { name: "Szolgáltatások", href: "/services" },
      { name: "Portfólió", href: "/portfolio" },
      { name: "Kapcsolat", href: "/contact" }
    ],
    services: [
      { name: "Frontend Fejlesztés", href: "/services#frontend" },
      { name: "Backend Fejlesztés", href: "/services#backend" },
      { name: "UI/UX Tervezés", href: "/services#design" },
      { name: "Mobilfejlesztés", href: "/services#mobile" }
    ],
    company: [
      { name: "Rólunk", href: "/about" },
      { name: "Karrier", href: "/career" },
      { name: "Blog", href: "/blog" },
      { name: "GYIK", href: "/faq" }
    ],
    contact: {
      email: "info@pelda.hu",
      phone: "+36 1 234 5678",
      address: "1234 Budapest, Példa utca 1."
    },
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        )
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        )
      }
    ]
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0">
        <div className="animate-pulse-slow absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-primary-100/10 dark:bg-primary-900/10" />
        <div className="animate-pulse-slow absolute -right-32 top-0 h-64 w-64 rounded-full bg-primary-100/10 dark:bg-primary-900/10" />
      </div>
      
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3 group">
            <div className="mb-4 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={150}
                height={40}
                className="dark:invert"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-200">
              Modern webalkalmazások fejlesztése, amelyek előreviszik vállalkozását
            </p>
          </div>
          <nav className="lg:col-span-2">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Menü</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="lg:col-span-2">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Szolgáltatások</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="lg:col-span-2">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Cég</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name} className="transform transition-all duration-300 hover:translate-x-2">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Kapcsolat</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{navigation.contact.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{navigation.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{navigation.contact.address}</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 transition-all duration-300 hover:scale-125 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <p className="text-gray-600 dark:text-gray-400 transition-opacity duration-300 hover:opacity-75">
              © {new Date().getFullYear()} Minden jog fenntartva.
            </p>
            <div className="flex space-x-6 sm:justify-end">
              <Link href="/privacy" className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                Adatvédelem
              </Link>
              <Link href="/terms" className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                ÁSZF
              </Link>
              <Link href="/cookies" className="text-gray-600 transition-colors duration-300 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                Cookie szabályzat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}