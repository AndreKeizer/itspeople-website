"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { aiTransformationContent } from "@/lib/aiTransformation";
import { asset } from "@/lib/basePath";

export default function AITransformationPage() {
  const locale = useLocale() as "nl" | "en";
  const d = aiTransformationContent[locale];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.heroLabel}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white leading-tight">
              {d.heroTitle} <span className="gradient-text">{d.heroTitleHighlight}</span>.
            </h1>
            <p className="text-its-green text-lg font-semibold mb-6 max-w-3xl">{d.heroSubline}</p>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">{d.heroIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#quickscan" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all">
                {d.quickscanCta}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-its-green/50 hover:bg-white/5 text-white font-semibold text-sm transition-all">
                {d.ctaButton}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.urgencyTitle}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">{d.urgencyBody}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-its-warm border border-its-gray-light/30">
                  <div className="text-4xl font-bold gradient-text mb-2">{d.urgencyStat1.value}</div>
                  <div className="text-xs text-its-gray-mid font-medium">{d.urgencyStat1.label}</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-its-warm border border-its-gray-light/30">
                  <div className="text-4xl font-bold gradient-text mb-2">{d.urgencyStat2.value}</div>
                  <div className="text-xs text-its-gray-mid font-medium">{d.urgencyStat2.label}</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-its-warm rounded-2xl p-8 border border-its-gray-light/30">
              <h3 className="text-xl font-bold text-its-charcoal mb-4">{d.reasonsTitle}</h3>
              <ul className="space-y-3">
                {d.reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-its-gray-mid leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-its-green mt-2.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-its-gray-light/30 text-its-charcoal font-semibold leading-relaxed">{d.reasonsClose}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proposition + Principles */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal mb-4">{d.propositionTitle}</h2>
            <p className="text-2xl gradient-text font-bold mb-4">{d.propositionLead}</p>
            <p className="text-its-gray-mid leading-relaxed">{d.propositionBody}</p>
          </motion.div>

          <h3 className="text-xl font-bold text-its-charcoal text-center mb-8 mt-16">{d.principlesTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {d.principles.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group bg-white rounded-2xl border border-its-gray-light/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image src={asset(p.image)} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 via-its-dark/15 to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 text-its-green-dark text-sm font-bold flex items-center justify-center shadow-md">{i + 1}</div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-its-charcoal mb-2 leading-snug">{p.title}</h4>
                  <p className="text-its-gray-mid text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            {d.services.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={`/${locale}/ai-transformation/${s.slug}`} className="group flex flex-col h-full bg-its-warm rounded-2xl border border-its-gray-light/30 hover:shadow-lg hover:shadow-its-green/5 hover:border-its-green/30 transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={asset(s.image)} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-its-dark/55 via-its-dark/15 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-bold text-its-dark bg-white/95 px-2.5 py-1 rounded-full shadow-sm">{String(s.number).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <p className="text-its-green-dark italic font-semibold leading-snug mb-4">&ldquo;{s.statement}&rdquo;</p>
                    <h3 className="text-lg font-bold text-its-charcoal mb-2 group-hover:text-its-green-dark transition-colors leading-snug">{s.title}</h3>
                    <p className="text-its-gray-mid text-sm leading-relaxed mb-4 flex-grow">{s.shortDesc}</p>
                    <p className="text-its-green-dark text-sm font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                      {locale === "nl" ? "Lees meer →" : "Read more →"}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal mb-4">{d.sectorTitle}</h2>
            <p className="text-its-gray-mid leading-relaxed">{d.sectorIntro}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {d.sectors.map((sector, i) => (
              <motion.div key={sector.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-its-gray-light/30">
                <h3 className="text-xl font-bold text-its-charcoal mb-3">{sector.name}</h3>
                <p className="text-its-green-dark italic font-semibold leading-snug mb-5">&ldquo;{sector.statement}&rdquo;</p>
                <ul className="space-y-3">
                  {sector.items.map((item) => (
                    <li key={item} className="flex gap-3 text-its-gray-mid leading-relaxed text-sm">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-its-green mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach (4 phases) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal mb-4">{d.approachTitle}</h2>
            <p className="text-its-gray-mid leading-relaxed">{d.approachIntro}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.phases.map((p, i) => (
              <motion.div key={p.phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-its-warm rounded-2xl p-6 border border-its-gray-light/30">
                <span className="text-xs font-bold text-its-green-dark uppercase tracking-wider">{p.phase}</span>
                <h3 className="text-lg font-bold text-its-charcoal mt-1 mb-1">{p.name}</h3>
                <p className="text-xs text-its-gray-mid font-medium mb-4">{p.duration}</p>
                <p className="text-sm text-its-gray-mid leading-relaxed mb-4">{p.activities}</p>
                <p className="text-sm text-its-charcoal font-semibold leading-relaxed pt-3 border-t border-its-gray-light/30">{p.result}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-its-gray-mid italic mt-8 max-w-3xl mx-auto leading-relaxed">{d.approachClose}</p>
        </div>
      </section>

      {/* Why ITsPeople */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal mb-4">{d.whyTitle}</h2>
            <p className="text-its-gray-mid leading-relaxed">{d.whyIntro}</p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {d.whyItems.map((item, i) => (
              <motion.div key={item.strength} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-6 border border-its-gray-light/30 grid md:grid-cols-3 gap-4">
                <h3 className="text-base font-bold text-its-charcoal leading-snug md:col-span-1">{item.strength}</h3>
                <p className="text-sm text-its-gray-mid leading-relaxed md:col-span-2">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Act Quickscan */}
      <section id="quickscan" className="py-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.quickscanLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">{d.quickscanTitle}</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">{d.quickscanIntro}</p>
            <p className="text-its-green font-semibold mb-8 text-lg">{d.quickscanLead}</p>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 mb-8">
              <ul className="space-y-3">
                {d.quickscanIncludes.map((q) => (
                  <li key={q} className="flex gap-3 text-white/80 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-its-green/20 border border-its-green/40 flex items-center justify-center text-its-green text-xs font-bold mt-0.5">✓</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-its-green font-bold mb-1">{locale === "nl" ? "Investering" : "Investment"}</div>
                  <div className="text-2xl font-bold text-white">{d.quickscanPrice}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-its-green font-bold mb-1">{locale === "nl" ? "Doorlooptijd" : "Duration"}</div>
                  <div className="text-white">{d.quickscanDuration}</div>
                </div>
              </div>
            </div>

            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              {d.quickscanCta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-its-warm scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.ctaTitle}</h2>
            <p className="text-its-gray-mid text-lg leading-relaxed mb-8">{d.ctaIntro}</p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 mb-10">
              {d.ctaSteps.map((step) => (
                <li key={step} className="flex gap-3 text-its-gray-mid leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-its-green/15 border border-its-green/30 flex items-center justify-center text-its-green-dark text-xs font-bold mt-0.5">✓</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
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
