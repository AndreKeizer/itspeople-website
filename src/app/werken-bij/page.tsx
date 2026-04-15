"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const vacatures = [
  {
    title: "Senior Business Consultant",
    type: "Fulltime",
    location: "Zaltbommel / Hybride",
    description: "Als Senior Business Consultant bij ITsPeople werk je aan complexe transformatieprojecten bij toonaangevende organisaties. Je adviseert op strategisch niveau, ontwerpt Target Operating Models en begeleidt verandertrajecten van begin tot eind.",
    requirements: ["Minimaal 7 jaar ervaring in consultancy", "Ervaring met transformatieprogramma's", "Sterke stakeholder management vaardigheden", "HBO/WO werk- en denkniveau"],
  },
  {
    title: "Projectmanager",
    type: "Fulltime",
    location: "Zaltbommel / Hybride",
    description: "Als Projectmanager bij ITsPeople leid je complexe IT- en organisatietransformaties. Je zorgt voor structuur, voortgang en resultaat in uitdagende omgevingen. Van Agile tot Waterval, je bent thuis in verschillende methodieken.",
    requirements: ["Minimaal 5 jaar ervaring als projectmanager", "IPMA of Prince2 certificering", "Ervaring in de financiële sector, overheid of zorg", "Sterk in risicomanagement"],
  },
  {
    title: "Data Consultant",
    type: "Fulltime",
    location: "Zaltbommel / Hybride",
    description: "Als Data Consultant help je organisaties om data-gedreven te werken. Van data governance tot visualisatie, van kwaliteitsverbetering tot AI-toepassingen. Je combineert technische kennis met organisatorisch inzicht.",
    requirements: ["Minimaal 3 jaar ervaring in data management", "Kennis van data governance frameworks", "Ervaring met BI-tools en dashboarding", "Analytisch en communicatief sterk"],
  },
  {
    title: "NIS2 Compliance Specialist",
    type: "Fulltime",
    location: "Zaltbommel / Hybride",
    description: "Als NIS2 Compliance Specialist help je organisaties om te voldoen aan de NIS2-richtlijn. Je voert gap-analyses uit, ontwerpt compliance frameworks en begeleidt implementatietrajecten.",
    requirements: ["Ervaring met compliance en informatiebeveiliging", "Kennis van NIS2, BIO of ISO 27001", "In staat om complexe materie toegankelijk te maken", "Ervaring met governance en risicomanagement"],
  },
];

const benefits = [
  { icon: "📚", title: "ITs Academy", description: "Structurele investering in jouw ontwikkeling via onze eigen academy." },
  { icon: "🏠", title: "Hybride werken", description: "Flexibiliteit in waar en wanneer je werkt, afgestemd op het project." },
  { icon: "🚗", title: "Mobiliteit", description: "Leaseauto of mobiliteitsbudget naar keuze." },
  { icon: "💰", title: "Competitief salaris", description: "Marktconform salaris met bonus en pensioenregeling." },
  { icon: "🎉", title: "Samen Events", description: "Zes keer per jaar samen vieren, van nieuwjaar tot kerst." },
  { icon: "⭐", title: "Make-A-Wish", description: "Samen het verschil maken, ook buiten projecten." },
];

export default function WerkenBijPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Werken bij ITsPeople</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Maak het <span className="gradient-text">verschil</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Bij ITsPeople werk je aan uitdagende transformatieprojecten bij toonaangevende organisaties. Met een team van experts die gedreven worden door één gemeenschappelijk doel: duurzame verandering realiseren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why ITsPeople */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">Waarom ITsPeople?</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                Bij ITsPeople ben je geen nummer. Je bent een professional die het verschil maakt. Wij investeren in jouw ontwikkeling, geven je de ruimte om te groeien en bieden uitdagende projecten waar je echt impact hebt.
              </p>
              <p className="text-its-gray-mid leading-relaxed mb-6">
                Onze consultants werken bij organisaties als Rabobank, Rijksoverheid, UMC Utrecht en Aegon. Projecten waarbij complexiteit, menselijkheid en resultaat hand in hand gaan.
              </p>
              <p className="text-its-gray-mid leading-relaxed">
                En tussendoor vieren we samen. Zes keer per jaar komen we bij elkaar voor onze Samen Events. Omdat het verschil maken ook samen mag zijn.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/team-collab.jpg" alt="Werken bij ITsPeople" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-its-charcoal text-center mb-12">Wat wij bieden</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-white border border-its-gray-light/30 text-center">
                <span className="text-3xl block mb-3">{b.icon}</span>
                <h3 className="font-bold text-its-charcoal mb-2">{b.title}</h3>
                <p className="text-its-gray-mid text-sm">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-its-charcoal">Openstaande vacatures</h2>
            <p className="text-its-gray-mid mt-4">Staat jouw droombaan er niet bij? Stuur een open sollicitatie naar hr@itspeople.nl.</p>
          </motion.div>

          <div className="space-y-6">
            {vacatures.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-its-warm rounded-2xl p-8 border border-its-gray-light/30 hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-its-charcoal">{v.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/10 text-its-green-dark">{v.type}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-its-charcoal/5 text-its-gray-mid">{v.location}</span>
                    </div>
                    <p className="text-its-gray-mid leading-relaxed mb-4">{v.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {v.requirements.map((r) => (
                        <span key={r} className="px-3 py-1 rounded-full text-xs bg-white border border-its-gray-light/30 text-its-gray-mid">{r}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all whitespace-nowrap">
                    Solliciteer →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open sollicitatie */}
      <section className="py-20 bg-its-warm text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-its-charcoal mb-6">Jouw functie staat er niet bij?</h2>
          <p className="text-its-gray-mid text-lg mb-8">
            Wij zijn altijd op zoek naar talent. Stuur je CV en motivatie naar hr@itspeople.nl en wie weet maken wij binnenkort samen het verschil.
          </p>
          <a href="mailto:hr@itspeople.nl" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
            Stuur een open sollicitatie →
          </a>
        </div>
      </section>
    </>
  );
}
