"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const t = {
  badge: { nl: "Make the Difference", en: "Make the Difference" },
  h1a: { nl: "Transformaties die ", en: "Transformations that " },
  h1b: { nl: "mensen bewegen", en: "move people" },
  sub: {
    nl: "Wij begeleiden organisaties bij het realiseren van complexe digitale transformaties. Gecentreerd rondom mensen, gedreven door data en technologie.",
    en: "We guide organisations through complex digital transformations. Centred around people, driven by data and technology.",
  },
  cta1: { nl: "Laten we praten", en: "Let's talk" },
  cta2: { nl: "Onze diensten", en: "Our services" },
};

export default function Hero() {
  const locale = useLocale() as "nl" | "en";
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/team-collab.jpg")}
          alt="ITsPeople team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-its-dark/95 via-its-dark/80 to-its-dark/40" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating accent */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-its-green/10 blur-[120px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-its-green/25 bg-its-green/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-its-green animate-pulse" />
            <span className="text-sm text-its-green font-medium">
              {t.badge[locale]}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-white"
          >
            {t.h1a[locale]}
            <span className="gradient-text">{t.h1b[locale]}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            {t.sub[locale]}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="group px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25 flex items-center gap-2"
            >
              {t.cta1[locale]}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/diensten`}
              className="px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:bg-white/5"
            >
              {t.cta2[locale]}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/25 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-its-green" />
        </motion.div>
      </motion.div>
    </section>
  );
}
