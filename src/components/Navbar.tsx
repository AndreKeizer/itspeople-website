"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { copy, type Locale } from "@/lib/copy";
import LanguageSwitcher from "./LanguageSwitcher";
import { asset } from "@/lib/basePath";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [kennisOpen, setKennisOpen] = useState(false);
  const kennisRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  const kennisItems = [
    { label: copy.nav.academy[locale], href: `/${locale}/academy` },
    { label: copy.nav.insights[locale], href: `/${locale}/insights` },
    { label: copy.nav.tools[locale], href: `/${locale}/tools` },
  ];

  const navLinks = [
    { label: copy.nav.services[locale], href: `/${locale}/diensten` },
    { label: copy.nav.expertises[locale], href: `/${locale}/expertises` },
    { label: copy.nav.cases[locale], href: `/${locale}/cases` },
    { label: copy.nav.about[locale], href: `/${locale}/over-ons` },
    { label: copy.nav.careers[locale], href: `/${locale}/werken-bij` },
    { label: copy.nav.freelancers[locale], href: `/${locale}/freelancers` },
  ];

  const kennisActive = kennisItems.some((i) => pathname === i.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (kennisRef.current && !kennisRef.current.contains(e.target as Node)) {
        setKennisOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    setKennisOpen(false);
  }, [pathname]);

  const isHome = pathname === `/${locale}` || pathname === "/";
  const showTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl border-b border-its-gray-light/30 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src={showTransparent ? asset("/images/logo-dark.png") : asset("/images/logo-light.png")}
              alt="ITsPeople"
              width={160}
              height={48}
              className="h-10 w-auto transition-all duration-300"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-5 ml-12">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 relative group ${
                    showTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : isActive
                        ? "text-its-green-dark"
                        : "text-its-gray-mid hover:text-its-charcoal"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-its-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Kennis dropdown */}
            <div ref={kennisRef} className="relative">
              <button
                onClick={() => setKennisOpen((o) => !o)}
                className={`flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors duration-300 relative group ${
                  showTransparent
                    ? kennisActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : kennisActive
                      ? "text-its-green-dark"
                      : "text-its-gray-mid hover:text-its-charcoal"
                }`}
              >
                {copy.nav.knowledge[locale]}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${kennisOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-its-green transition-all duration-300 ${
                    kennisActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
              <AnimatePresence>
                {kennisOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] rounded-xl bg-white border border-its-gray-light/40 shadow-xl shadow-its-dark/10 overflow-hidden"
                  >
                    {kennisItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setKennisOpen(false)}
                          className={`block px-5 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-its-green/5 text-its-green-dark"
                              : "text-its-gray-mid hover:bg-its-warm hover:text-its-charcoal"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(4).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 relative group ${
                    showTransparent
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : isActive
                        ? "text-its-green-dark"
                        : "text-its-gray-mid hover:text-its-charcoal"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-its-green transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <LanguageSwitcher />
            <Link
              href={`/${locale}/contact`}
              className="ml-1 px-6 py-2.5 rounded-lg bg-its-green hover:bg-its-green-dark text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/20"
            >
              {copy.nav.contact[locale]}
            </Link>
          </div>

          <div className="xl:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 block ${showTransparent ? "bg-white" : "bg-its-charcoal"}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 block ${showTransparent ? "bg-white" : "bg-its-charcoal"}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 block ${showTransparent ? "bg-white" : "bg-its-charcoal"}`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-its-gray-light/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-its-green-dark"
                      : "text-its-gray-mid hover:text-its-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-its-gray-mid/70 mb-3">
                  {copy.nav.knowledge[locale]}
                </p>
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-its-green/30">
                  {kennisItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-base font-medium transition-colors ${
                        pathname === item.href
                          ? "text-its-green-dark"
                          : "text-its-gray-mid hover:text-its-charcoal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "text-its-green-dark"
                      : "text-its-gray-mid hover:text-its-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg bg-its-green text-white text-center font-semibold"
              >
                {copy.nav.contact[locale]}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
