"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🎯",
    title: "Business Consultancy",
    description:
      "Van strategie naar beheersing. Strategisch advies dat direct vertaalt naar concrete besturing en meetbare resultaten.",
    features: ["Target Operating Model", "Business case ontwikkeling", "Programma governance", "Executive advisory"],
    color: "its-charcoal",
  },
  {
    icon: "📋",
    title: "Project Management",
    description:
      "Complexe verandertrajecten van begin tot eind realiseren. Voor en samen met de klant.",
    features: ["Programmamanagement", "Agile & Waterval", "Transition Support Office", "Risicomanagement"],
    color: "its-green-mid",
  },
  {
    icon: "🔄",
    title: "Proces Management",
    description:
      "Het ITs Target Operating Model: services, processen, governance en IT in kaart brengen en optimaliseren.",
    features: ["Procesarchitectuur", "Waardestroomanalyse", "Ketenintegratie", "Automatisering"],
    color: "its-green",
  },
  {
    icon: "📊",
    title: "Data Management",
    description:
      "Het ITs Productivity Center: structuur, kwaliteit, visualisatie en data-gedreven inzichten.",
    features: ["Data governance", "Datakwaliteit", "Visualisatie & dashboards", "AI & Analytics"],
    color: "its-lime",
  },
  {
    icon: "🛡️",
    title: "Testen & Quality Assurance",
    description:
      "Risicobeheersing en kostenbesparing door professionele quality assurance van systemen en processen.",
    features: ["Teststrategie & -beleid", "Test coördinatie", "Testautomatisering", "DevOps testing"],
    color: "its-gray-mid",
  },
];

export default function Services() {
  return (
    <section id="diensten" className="relative py-28 bg-its-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            Onze Diensten
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            End-to-end transformatie
          </h2>
          <p className="text-its-gray-mid text-lg leading-relaxed">
            Van strategie tot realisatie. Wij bieden een compleet pakket aan
            diensten om uw organisatie succesvol te transformeren.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <span className="text-3xl mb-4 block">{service.icon}</span>

              <h3 className="text-xl font-bold mb-3 text-its-charcoal group-hover:text-its-green-dark transition-colors">
                {service.title}
              </h3>

              <p className="text-its-gray-mid leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-sm text-its-gray-mid flex items-center gap-2">
                    <span className="text-its-green text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-its-green-dark text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Meer informatie
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
