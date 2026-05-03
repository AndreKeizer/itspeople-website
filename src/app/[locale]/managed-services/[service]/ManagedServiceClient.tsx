"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { managedServicesContent } from "@/lib/managedServices";

type Props = {
  slug: string;
};

export default function ManagedServiceClient({ slug }: Props) {
  const locale = useLocale() as "nl" | "en";
  const d = managedServicesContent[locale];
  const service = d.services.find((s) => s.slug === slug);

  if (!service || service.comingSoon) {
    return null;
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href={`/${locale}/managed-services`} className="inline-flex items-center gap-2 text-its-green hover:text-white text-sm font-semibold mb-6 transition-colors">
              {d.servicePageBackToPillar}
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-its-dark bg-its-green px-2.5 py-1 rounded-full">
                {String(service.number).padStart(2, "0")} / 03
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
      {service.problem && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageProblem}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed lg:col-span-2">{service.problem}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Approach */}
      {service.approach && (
        <section className="py-16 bg-its-warm">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageApproach}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed lg:col-span-2">{service.approach}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pillars (six TSO pijlers) */}
      {service.pillars && service.pillars.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal mb-4">{d.servicePagePillars}</h2>
              <p className="text-its-green-dark italic font-semibold leading-snug">&ldquo;{d.servicePageQuoteLine}&rdquo;</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.pillars.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-its-warm rounded-2xl p-6 border border-its-gray-light/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-its-green/10 border border-its-green/20 flex items-center justify-center text-its-green-dark text-sm font-bold mb-4">{p.number}</div>
                  <h3 className="font-bold text-its-charcoal mb-2 leading-snug">{p.title}</h3>
                  <p className="text-its-gray-mid text-sm leading-relaxed">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 bg-its-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal">{d.servicePageBenefits}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.benefits.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl p-8 border border-its-gray-light/30">
                  <h3 className="text-xl font-bold text-its-green-dark mb-3 leading-snug">{b.title}</h3>
                  <p className="text-its-gray-mid leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience */}
      {service.audience && service.audience.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageAudience}</h2>
              <ul className="space-y-3 lg:col-span-2">
                {service.audience.map((a) => (
                  <li key={a} className="flex gap-3 text-its-gray-mid leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-its-green/15 border border-its-green/30 flex items-center justify-center text-its-green-dark text-xs font-bold mt-0.5">✓</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Workmode */}
      {service.workMode && service.workMode.length > 0 && (
        <section className="py-16 bg-its-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal">{d.servicePageWorkMode}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {service.workMode.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-7 border border-its-gray-light/30">
                  <h3 className="text-lg font-bold text-its-charcoal mb-3 leading-snug">{w.title}</h3>
                  <p className="text-its-gray-mid leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tiers */}
      {service.tiers && service.tiers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal mb-4">{d.servicePageTiers}</h2>
              <p className="text-its-gray-mid leading-relaxed">
                {locale === "nl"
                  ? "Beschikbaar als maandelijks abonnement in drie tiers, afgestemd op de omvang en complexiteit van uw programma of portfolio. Tarieven worden niet publiek gepubliceerd; wij stellen per organisatie een offerte op maat op."
                  : "Available as a monthly subscription in three tiers, tailored to the scale and complexity of your programme or portfolio. Rates are not published; we prepare a tailored quote per organisation."}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.tiers.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-2xl p-7 border transition-all duration-300 ${
                  i === 1
                    ? "bg-its-green/5 border-its-green/30"
                    : "bg-its-warm border-its-gray-light/30"
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-its-green-dark">{t.tier}</span>
                  <h3 className="text-xl font-bold text-its-charcoal mt-1 mb-3">{t.name}</h3>
                  <p className="text-its-gray-mid text-sm leading-relaxed">{t.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proof */}
      {service.proof && (
        <section className="py-16 bg-its-warm">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
              <h2 className="text-2xl font-bold text-its-charcoal lg:col-span-1">{d.servicePageProof}</h2>
              <p className="text-its-gray-mid leading-relaxed lg:col-span-2">{service.proof}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Why */}
      {service.whyItems && service.whyItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal">{d.servicePageWhy}</h2>
            </motion.div>
            <div className="space-y-3 max-w-4xl mx-auto">
              {service.whyItems.map((w, i) => (
                <motion.div key={w.strength} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-its-warm rounded-xl p-5 border border-its-gray-light/30 grid md:grid-cols-3 gap-4">
                  <h3 className="text-base font-bold text-its-charcoal leading-snug md:col-span-1">{w.strength}</h3>
                  <p className="text-sm text-its-gray-mid leading-relaxed md:col-span-2">{w.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-its-dark via-its-deep to-its-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {locale === "nl" ? "Vraag een vrijblijvende kennismaking aan" : "Request a no-obligation introduction"}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              {locale === "nl"
                ? "Bent u benieuwd hoe het TSO uw organisatie kan helpen om programma's en portfolios effectiever te beheersen, onafhankelijk, data-gedreven en kostenefficiënt? Neem contact op voor een vrijblijvend adviesgesprek en ontvang een offerte op maat."
                : "Curious how the TSO can help you control programmes and portfolios more effectively, independently, data-driven and cost-efficient? Get in touch for a no-obligation conversation and receive a tailored quote."}
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
    </>
  );
}
