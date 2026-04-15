"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🎯",
    title: "Business Consultancy",
    description: "Van strategie naar beheersing. Strategisch advies dat direct vertaalt naar concrete besturing en meetbare resultaten.",
    features: ["Target Operating Model", "Business case ontwikkeling", "Programma governance", "Executive advisory"],
    detail: "Onze Business Consultants werken nauw samen met directie en management om strategische doelen te vertalen naar concrete plannen. Wij ontwerpen Target Operating Models, bouwen business cases en richten governance in die ervoor zorgt dat transformaties op koers blijven. Met een bewezen aanpak die strategie verbindt met uitvoering, helpen wij organisaties om grip te krijgen op complexe veranderingen.",
  },
  {
    icon: "📋",
    title: "Project Management",
    description: "Complexe verandertrajecten van begin tot eind realiseren. Voor en samen met de klant.",
    features: ["Programmamanagement", "Agile & Waterval", "Transition Support Office", "Risicomanagement"],
    detail: "Onze projectmanagers zijn ervaren professionals die complexe transformaties leiden. Of het nu gaat om een Agile transitie, een ERP-implementatie of een organisatiebrede verandering, wij zorgen voor structuur, voortgang en resultaat. Met ons Transition Support Office bieden wij een integraal ondersteuningskader dat programma's succesvol over de finish brengt.",
  },
  {
    icon: "🔄",
    title: "Proces Management",
    description: "Het ITs Target Operating Model: services, processen, governance en IT in kaart brengen en optimaliseren.",
    features: ["Procesarchitectuur", "Waardestroomanalyse", "Ketenintegratie", "Automatisering"],
    detail: "Processen vormen het zenuwstelsel van elke organisatie. Onze procesmanagers brengen de huidige en gewenste situatie in kaart, identificeren verbeterkansen en begeleiden de implementatie van geoptimaliseerde processen. Van waardestroomanalyses tot ketenintegraties, wij zorgen dat processen effectief, efficiënt en toekomstbestendig zijn.",
  },
  {
    icon: "📊",
    title: "Data Management",
    description: "Het ITs Productivity Center: structuur, kwaliteit, visualisatie en data-gedreven inzichten.",
    features: ["Data governance", "Datakwaliteit", "Visualisatie & dashboards", "AI & Analytics"],
    detail: "Data is de brandstof voor moderne organisaties. Ons ITs Productivity Center helpt organisaties om hun data te structureren, de kwaliteit te waarborgen en inzichten te genereren die besluitvorming verbeteren. Van data governance frameworks tot geavanceerde dashboards en AI-toepassingen, wij maken data werkend voor uw organisatie.",
  },
  {
    icon: "🛡️",
    title: "Testen & Quality Assurance",
    description: "Risicobeheersing en kostenbesparing door professionele quality assurance van systemen en processen.",
    features: ["Teststrategie & -beleid", "Test coördinatie", "Testautomatisering", "DevOps testing"],
    detail: "Kwaliteit is geen sluitpost maar een strategisch instrument. Onze testprofessionals zorgen ervoor dat systemen en processen voldoen aan de gestelde eisen. Van teststrategie tot automatisering, van functioneel testen tot performance en security testing. Wij helpen organisaties om risico's te beheersen en kosten te besparen door vroegtijdig fouten te signaleren.",
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Onze Diensten</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              End-to-end <span className="gradient-text">transformatie</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Van strategie tot realisatie. Wij bieden een compleet pakket aan diensten om uw organisatie succesvol te transformeren. Elke dienst wordt op maat ingezet, passend bij uw specifieke uitdagingen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h2 className="text-3xl font-bold text-its-charcoal mb-4">{service.title}</h2>
                <p className="text-its-gray-mid text-lg leading-relaxed mb-4">{service.description}</p>
                <p className="text-its-gray-mid leading-relaxed mb-6">{service.detail}</p>
              </div>

              <div className={`bg-white rounded-2xl p-8 border border-its-gray-light/30 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-bold text-its-charcoal mb-4">Wat wij bieden</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-its-gray-mid">
                      <span className="text-its-green text-sm">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all duration-300">
                    Meer weten →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-its-charcoal mb-6">
            Benieuwd welke diensten bij uw uitdaging passen?
          </h2>
          <p className="text-its-gray-mid text-lg mb-8">
            Wij denken graag met u mee. Plan een vrijblijvend gesprek in en ontdek wat ITsPeople voor uw organisatie kan betekenen.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25">
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}
