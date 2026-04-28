"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const t = {
  h1a: { nl: "Klaar voor de ", en: "Ready for the " },
  h1b: { nl: "volgende stap?", en: "next step?" },
  sub: {
    nl: "Wilt u meer weten over wat ITsPeople voor uw organisatie kan betekenen? Neem contact op, wij vertellen u er graag over.",
    en: "Curious what ITsPeople can mean for your organisation? Reach out, we'd love to tell you more.",
  },
};

export default function CTA() {
  const locale = useLocale() as "nl" | "en";
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={asset("/images/building.jpg")}
          alt="ITsPeople kantoor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-its-dark/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-white">
            {t.h1a[locale]}
            <span className="gradient-text">{t.h1b[locale]}</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.sub[locale]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@itspeople.nl"
              className="px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25"
            >
              info@itspeople.nl
            </a>
            <a
              href="tel:+31302270954"
              className="px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:bg-white/5"
            >
              +31 (0) 30 22 70 954
            </a>
          </div>

          {/* Address */}
          <p className="mt-10 text-white/40 text-sm">
            📍 Hogeweg 105, 5301 LL Zaltbommel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
