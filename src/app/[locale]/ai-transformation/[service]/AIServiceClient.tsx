"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { aiTransformationContent, type AIService } from "@/lib/aiTransformation";

type Props = {
  service: AIService;
};

export default function AIServiceClient({ service: nlService }: Props) {
  const locale = useLocale() as "nl" | "en";
  const d = aiTransformationContent[locale];
  // Look up the localised version by slug; fall back to the prop (NL) if missing.
  const service = d.services.find((s) => s.slug === nlService.slug) ?? nlService;

  const related = service.related
    .map((r) => d.services.find((s) => s.slug === r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href={`/${locale}/ai-transformation`} className="inline-flex items-center gap-2 text-its-green hover:text-white text-sm font-semibold mb-6 transition-colors">
              {d.servicePageBackToPillar}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-its-dark bg-its-green px-2.5 py-1 rounded-full">
                {String(service.number).padStart(2, "0")} / 08
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">{d.heroLabel}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h1>
            <p className="text-its-green text-xl sm:text-2xl italic font-semibold leading-snug max-w-3xl">&ldquo;{service.statement}&rdquo;</p>
            <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-3xl">{service.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
            <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageProblem}</h2>
            <p className="text-its-gray-mid text-lg leading-relaxed lg:col-span-2">{service.problem}</p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
            <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageApproach}</h2>
            <p className="text-its-gray-mid text-lg leading-relaxed lg:col-span-2">{service.approach}</p>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
            <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageDeliverables}</h2>
            <ul className="space-y-3 lg:col-span-2">
              {service.deliverables.map((deliv) => (
                <li key={deliv} className="flex gap-3 text-its-gray-mid leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-its-green/15 border border-its-green/30 flex items-center justify-center text-its-green-dark text-xs font-bold mt-0.5">✓</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Meta */}
      <section className="py-12 bg-its-warm">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-its-gray-light/30">
            <div className="text-xs uppercase tracking-wider text-its-green-dark font-bold mb-2">{d.servicePageAudience}</div>
            <p className="text-its-charcoal leading-relaxed">{service.audience}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-its-gray-light/30">
            <div className="text-xs uppercase tracking-wider text-its-green-dark font-bold mb-2">{d.servicePageDuration}</div>
            <p className="text-its-charcoal leading-relaxed">{service.duration}</p>
          </motion.div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-gradient-to-br from-its-dark via-its-deep to-its-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {locale === "nl" ? "Klaar voor de eerste stap?" : "Ready for the first step?"}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              {locale === "nl"
                ? "Begin met de AI Act Quickscan om in twee weken een helder beeld te krijgen van uw AI-portfolio en de stappen die nu nodig zijn. Of plan een vrijblijvend gesprek om eerst kennis te maken."
                : "Start with the AI Act Quickscan to get a clear view of your AI portfolio and required next steps in two weeks. Or schedule an exploratory conversation to get acquainted first."}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                {d.servicePagePrimaryCta}
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-white/20 hover:border-its-green/50 hover:bg-white/5 text-white font-semibold transition-all">
                {d.servicePageSecondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-its-charcoal mb-8">{d.servicePageRelated}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/${locale}/ai-transformation/${r.slug}`} className="group block bg-its-warm rounded-2xl p-6 border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg transition-all duration-300">
                  <span className="text-xs font-bold text-its-green-dark bg-its-green/10 px-2.5 py-1 rounded-full">{String(r.number).padStart(2, "0")}</span>
                  <h3 className="text-base font-bold text-its-charcoal mt-3 mb-2 group-hover:text-its-green-dark transition-colors leading-snug">{r.title}</h3>
                  <p className="text-its-gray-mid text-sm leading-relaxed mb-3">{r.shortDesc}</p>
                  <p className="text-its-green-dark text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    {locale === "nl" ? "Lees meer →" : "Read more →"}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
