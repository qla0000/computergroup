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
    { name: "Kapcsolat", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg' : ''
    }`}>
      {/* Navbar háttér */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-900/70 backdrop-blur-sm dark:bg-primary-950/70' 
          : 'bg-transparent'
      } ${isOpen ? '!bg-primary-900/95 dark:!bg-primary-950/95' : ''}`} />

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
                  <span className={`relative z-10 transition-colors duration-300 
                    text-primary-50 group-hover:text-accent-500 dark:group-hover:text-accent-400`}>
                    {item.name}
                  </span>
                  <span className="absolute inset-x-2 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent-500 transition-transform duration-300 group-hover:scale-x-100 dark:bg-accent-400" />
                </Link>
              ))}
              <button className="ml-4 rounded-full bg-accent-500 px-5 py-2 text-sm font-medium text-primary-950 transition-all duration-300 hover:bg-accent-400 hover:shadow-lg">
                Kapcsolat
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 md:hidden"
            aria-label="Menü megnyitása"
          >
            <div className="space-y-2">
              <span className={`block h-0.5 w-6 bg-primary-900 transition-all duration-300 dark:bg-primary-100 ${
                isOpen ? 'translate-y-2.5 rotate-45' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-primary-900 transition-opacity duration-300 dark:bg-primary-100 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-primary-900 transition-all duration-300 dark:bg-primary-100 ${
                isOpen ? '-translate-y-2.5 -rotate-45' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } fixed bottom-0 left-0 top-20 w-full overflow-y-auto bg-primary-900/90 backdrop-blur-md dark:bg-primary-950/90 transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative rounded-lg px-4 py-3 text-base font-medium text-primary-50 transition-colors hover:text-accent-500 dark:text-primary-50 dark:hover:text-accent-400"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 scale-95 rounded-lg bg-primary-900/50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-primary-950/50" />
              </Link>
            ))}
            <button className="mt-4 w-full rounded-full bg-accent-500 px-6 py-3 text-base font-medium text-primary-950 transition-all duration-300 hover:bg-accent-400 hover:shadow-lg dark:bg-accent-500 dark:hover:bg-accent-400">
              Kapcsolat
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}