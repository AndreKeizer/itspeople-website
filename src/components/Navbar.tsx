"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Diensten", href: "/diensten" },
  { label: "Expertises", href: "/expertises" },
  { label: "Cases", href: "/cases" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Academy", href: "/academy" },
  { label: "Insights", href: "/insights" },
  { label: "Tools", href: "/tools" },
  { label: "Werken bij", href: "/werken-bij" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
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
          <Link href="/" className="flex items-center">
            <Image
              src={showTransparent ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="ITsPeople"
              width={160}
              height={48}
              className="h-10 w-auto transition-all duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
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
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 rounded-lg bg-its-green hover:bg-its-green-dark text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/20"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-its-gray-light/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
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
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-3 rounded-lg bg-its-green text-white text-center font-semibold"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
