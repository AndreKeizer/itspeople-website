"use client";

import { motion } from "framer-motion";

const tracks = [
  {
    level: "Senior Consultant Advanced",
    color: "from-its-green-dark to-its-green-mid",
    modules: ["Strategisch Advies", "Trusted Advisor", "Business Case Development", "Change Management Advanced", "Stakeholder Management Senior"],
  },
  {
    level: "Programma Management",
    color: "from-its-green-mid to-its-green",
    modules: ["IPMA & Prince2", "Programma Governance", "Finance & Budgettering", "Risk Management Advanced", "Benefits Realization"],
  },
  {
    level: "Medior Consultant",
    color: "from-its-green to-its-lime",
    modules: ["AI & Data Strategie", "Klantwaarde Creëren", "Stakeholder Management", "Risk Management", "Data Governance Basics"],
  },
  {
    level: "ERP & Cloud Specialist",
    color: "from-its-lime to-its-green",
    modules: ["Cloud Foundations", "Requirements Analyse", "ERP Implementatie", "Stakeholder Management", "Risk Management"],
  },
];

const events = [
  { month: "Jan", icon: "🥂", name: "Nieuwjaarsreceptie" },
  { month: "Apr", icon: "🌷", name: "SpringSamen" },
  { month: "Jun", icon: "☀️", name: "SummerSamen" },
  { month: "Sep", icon: "👨‍👩‍👧‍👦", name: "FamilyDay" },
  { month: "Okt", icon: "🍂", name: "AutumnSamen" },
  { month: "Dec", icon: "🎄", name: "XmasSamen" },
];

export default function Academy() {
  return (
    <section id="academy" className="relative py-28 bg-its-warm overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-its-green/3 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            ITs Academy
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            Groei · Ontwikkeling ·{" "}
            <span className="gradient-text">Excellentie</span>
          </h2>
          <p className="text-its-gray-mid text-lg leading-relaxed">
            De ITs Academy investeert continu in de ontwikkeling van onze
            consultants. Van onboarding tot senior level — gestructureerde
            learning tracks die professionals naar het volgende niveau brengen.
          </p>
        </motion.div>

        {/* Training Tracks */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tracks.map((track, i) => (
            <motion.div
              key={track.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-its-gray-light/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500"
            >
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${track.color}`} />

              <h3 className="font-bold text-its-charcoal text-lg mb-4">
                {track.level}
              </h3>

              <div className="space-y-2">
                {track.modules.map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center gap-3 text-sm text-its-gray-mid"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-its-green flex-shrink-0" />
                    {mod}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Onboarding baseline callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-its-dark to-its-deep rounded-2xl p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                🎓 Onboarding Baseline
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                Elke nieuwe consultant start met onze baseline: Welkom &
                Collega's, Kennis Delen, Communicatie & Insights, Feedback &
                Speak Up, Deliver as Promised, Presenteren, Klantbegrip en Match
                Your Message.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Welkom", "Kennis Delen", "Feedback", "Presenteren", "Klantbegrip"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/10 text-its-green border border-its-green/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Samen Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center font-bold text-2xl text-its-charcoal mb-8">
            Samen Events
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {events.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-center p-4 rounded-xl bg-white border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl block mb-2">{event.icon}</span>
                <p className="text-xs font-bold text-its-green uppercase tracking-wider mb-1">
                  {event.month}
                </p>
                <p className="text-sm font-semibold text-its-charcoal">
                  {event.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
