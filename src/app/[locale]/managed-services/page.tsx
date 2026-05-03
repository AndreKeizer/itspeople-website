"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { managedServicesContent } from "@/lib/managedServices";
import { asset } from "@/lib/basePath";

export default function ManagedServicesPage() {
  const locale = useLocale() as "nl" | "en";
  const d = managedServicesContent[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.heroLabel}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white leading-tight">
              {d.heroTitle}{" "}
              {(() => {
                const highlight = d.heroTitleHighlight;
                // Split the highlight on the lowercase 's' that immediately follows 'IT'
                // (the brand wink). Render the 's' in white, the rest in the green gradient.
                const parts = highlight.split(/(?<=IT)(s)(?=\b|\s|$)/);
                // parts[0] ends with "IT" and parts[1] is "s" (the brand wink).
                // Render the trailing "IT" + "s" in italic, leave the rest upright.
                if (parts.length === 3) {
                  const beforeIT = parts[0].slice(0, -2);
                  const itLetters = parts[0].slice(-2);
                  return (
                    <>
                      <span className="gradient-text">{beforeIT}</span>
                      <span className="gradient-text italic">{itLetters}</span>
                      <span className="text-white italic">{parts[1]}</span>
                      <span className="gradient-text">{parts[2]}</span>
                    </>
                  );
                }
                return <span className="gradient-text">{highlight}</span>;
              })()}
              .
            </h1>
            <p className="text-its-green text-lg font-semibold mb-6 max-w-3xl">{d.heroSubline}</p>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">{d.heroIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all">
                {d.ctaButton}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal mb-4">{d.servicesTitle}</h2>
            <p className="text-its-gray-mid leading-relaxed">{d.servicesIntro}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.services.map((s, i) => {
              const cardBody = (
                <div className="flex flex-col h-full bg-its-warm rounded-2xl border border-its-gray-light/30 hover:shadow-lg hover:shadow-its-green/5 hover:border-its-green/30 transition-all duration-300 overflow-hidden group">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={asset(s.image)} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-its-dark/55 via-its-dark/15 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-bold text-its-dark bg-white/95 px-2.5 py-1 rounded-full shadow-sm">{String(s.number).padStart(2, "0")}</span>
                    {s.comingSoon && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white bg-its-charcoal/85 backdrop-blur px-2.5 py-1 rounded-full">
                        {d.comingSoonBadge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <p className="text-its-green-dark italic font-semibold leading-snug mb-4">&ldquo;{s.statement}&rdquo;</p>
                    <h3 className={`text-lg font-bold mb-2 leading-snug transition-colors ${s.comingSoon ? "text-its-charcoal" : "text-its-charcoal group-hover:text-its-green-dark"}`}>
                      {s.title}
                    </h3>
                    <p className="text-its-gray-mid text-sm leading-relaxed mb-4 flex-grow">{s.shortDesc}</p>
                    {!s.comingSoon && (
                      <p className="text-its-green-dark text-sm font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                        {locale === "nl" ? "Lees meer →" : "Read more →"}
                      </p>
                    )}
                  </div>
                </div>
              );

              if (s.comingSoon) {
                return (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="opacity-90"
                  >
                    {cardBody}
                  </motion.div>
                );
              }
              return (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href={`/${locale}/managed-services/${s.slug}`} className="block h-full">
                    {cardBody}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.ctaTitle}</h2>
            <p className="text-its-gray-mid text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{d.ctaIntro}</p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
              {d.ctaButton}
            </Link>
            <p className="text-its-gray-mid text-sm mt-6">{d.ctaSecondary}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
