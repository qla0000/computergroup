"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Kezdőlap", href: "/" },
    { name: "Szolgáltatások", href: "/services" },
    { name: "Portfólió", href: "/portfolio" },
    { name: "Kapcsolat", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Navbar háttér */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? "bg-primary-900/70 dark:bg-primary-950/70 backdrop-blur-sm"
            : "bg-transparent"
        } ${isOpen ? "!bg-primary-900/95 dark:!bg-primary-950/95" : ""}`}
      />

      {/* Navbar tartalom */}
      <div className="container relative mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={32}
              className="dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      scrolled
                        ? "text-primary-900 dark:text-primary-50"
                        : "text-primary-950 dark:text-primary-50"
                    } group-hover:text-accent-500 dark:group-hover:text-accent-400`}
                  >
                    {item.name}
                  </span>
                  <span className="absolute inset-x-2 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent-500 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-100 md:hidden dark:hover:bg-primary-800"
            aria-label="Menü megnyitása"
          >
            <div className="space-y-2">
              <span
                className={`block h-0.5 w-6 bg-primary-900 transition-all duration-300 dark:bg-primary-100 ${
                  isOpen ? "translate-y-2.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-primary-900 transition-opacity duration-300 dark:bg-primary-100 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-primary-900 transition-all duration-300 dark:bg-primary-100 ${
                  isOpen ? "-translate-y-2.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } from-primary-900/95 to-primary-950/95 fixed bottom-0 left-0 top-20 w-full overflow-y-auto bg-gradient-to-b backdrop-blur-md transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Navigációs linkek */}
          <div className="flex flex-col items-center space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative w-64 transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary-800/30 relative overflow-hidden rounded-xl p-4 backdrop-blur-sm">
                  <div className="from-primary-600/10 to-accent-500/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg font-medium text-primary-50">
                      {item.name}
                    </span>
                    <svg
                      className="h-5 w-5 transform text-primary-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Kapcsolat gomb */}
          <div className="mt-8 flex justify-center">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-primary-950 hover:shadow-accent-500/25 group relative overflow-hidden rounded-full bg-accent-500 px-8 py-3 text-center text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent-400"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent-400/50 h-full w-full animate-pulse-slow rounded-full opacity-0 group-hover:opacity-100" />
              </div>
              <span className="relative z-10">Kapcsolatfelvétel</span>
            </a>
          </div>

          {/* Közösségi média ikonok */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="#"
              className="transform text-primary-200 transition-all duration-300 hover:scale-125 hover:text-accent-300"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="transform text-primary-200 transition-all duration-300 hover:scale-125 hover:text-accent-300"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
