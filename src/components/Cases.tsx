"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    sector: "Financiële Sector",
    title: "Digitale transformatie bij een grote verzekeraar",
    challenge: "Versnipperde processen en gebrek aan grip op een €20M transformatieprogramma.",
    approach: "Target Operating Model, Business Control Framework, en Transition Support Office ingericht.",
    results: ["40% snellere doorlooptijd", "98% compliance score", "€3.2M besparing gerealiseerd"],
    image: "/images/team-discussion.jpg",
    color: "its-green-dark",
  },
  {
    sector: "Overheid",
    title: "NIS2-implementatie bij een uitvoeringsorganisatie",
    challenge: "Complexe regelgeving vertalen naar werkbare processen binnen strikte deadlines.",
    approach: "Integrale compliance-aanpak: gap-analyse, procesherontwerp, governance en training.",
    results: ["100% NIS2 compliant", "Audit-ready in 4 maanden", "Bestuurlijke borging gerealiseerd"],
    image: "/images/team-office.jpg",
    color: "its-green",
  },
  {
    sector: "Zorg",
    title: "Security governance voor een universitair medisch centrum",
    challenge: "Informatiebeveiligingsbeleid dat niet aansloot bij de dagelijkse praktijk van zorgprofessionals.",
    approach: "BIO/NEN 7510 compliance gecombineerd met security awareness programma.",
    results: ["90% awareness score", "ISO 27001 certificering", "Cultuurverandering gerealiseerd"],
    image: "/images/team-sept-1.jpg",
    color: "its-lime",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            Case Studies
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            Bewezen <span className="gradient-text">resultaat</span>
          </h2>
          <p className="text-its-gray-mid text-lg leading-relaxed">
            Van strategie tot realisatie — bekijk hoe wij organisaties hebben
            geholpen bij hun complexe transformaties.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative rounded-2xl overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={c.image} alt={c.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-its-green/90 text-xs font-semibold text-white">
                    {c.sector}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-bold text-its-charcoal mb-4">{c.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-1">Uitdaging</p>
                    <p className="text-its-gray-mid text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-its-green uppercase tracking-wider mb-1">Aanpak</p>
                    <p className="text-its-gray-mid text-sm leading-relaxed">{c.approach}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-3">
                  {c.results.map((r) => (
                    <span
                      key={r}
                      className="px-4 py-2 rounded-lg bg-its-green/5 border border-its-green/15 text-sm font-semibold text-its-green-dark"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
