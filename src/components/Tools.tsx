"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const data = {
  nl: {
    tag: "Interactieve Tools",
    heading1: "Ontdek waar uw organisatie",
    heading2: "staat",
    description: "Onze gratis self-assessment tools geven u direct inzicht in de volwassenheid van uw organisatie op cruciale gebieden.",
    tools: [
      {
        icon: "💡",
        title: "Innovation Readiness Scan",
        description: "Ontdek hoe innovatie-ready uw organisatie is. Onze scan analyseert 6 dimensies: cultuur, leiderschap, processen, technologie, mensen en strategie.",
        duration: "10 minuten",
        output: "Persoonlijk rapport met aanbevelingen",
        cta: "Start de scan",
        color: "from-its-green to-its-lime",
      },
      {
        icon: "⚙️",
        title: "IT-Governance Scan",
        description: "Beoordeel de volwassenheid van uw IT-governance. Van besluitvorming tot risicomanagement: krijg inzicht in uw sterke punten en verbeterkansen.",
        duration: "15 minuten",
        output: "Volwassenheidsrapport met benchmark",
        cta: "Start de scan",
        color: "from-its-green-dark to-its-green",
      },
      {
        icon: "🛡️",
        title: "NIS2 Readiness Check",
        description: "Voldoet uw organisatie al aan de NIS2-richtlijn? Deze quick check geeft u in 5 minuten inzicht in uw compliance-status.",
        duration: "5 minuten",
        output: "Compliance scorecard met actieplan",
        cta: "Check nu",
        color: "from-its-charcoal to-its-green-dark",
      },
    ],
  },
  en: {
    tag: "Interactive Tools",
    heading1: "Find out where your organisation",
    heading2: "stands",
    description: "Our free self-assessment tools give you immediate insight into your organisation's maturity in critical areas.",
    tools: [
      {
        icon: "💡",
        title: "Innovation Readiness Scan",
        description: "Discover how innovation-ready your organisation is. Our scan analyses 6 dimensions: culture, leadership, processes, technology, people and strategy.",
        duration: "10 minutes",
        output: "Personal report with recommendations",
        cta: "Start scan",
        color: "from-its-green to-its-lime",
      },
      {
        icon: "⚙️",
        title: "IT-Governance Scan",
        description: "Assess the maturity of your IT governance. From decision-making to risk management: gain insight into your strengths and improvement opportunities.",
        duration: "15 minutes",
        output: "Maturity report with benchmark",
        cta: "Start scan",
        color: "from-its-green-dark to-its-green",
      },
      {
        icon: "🛡️",
        title: "NIS2 Readiness Check",
        description: "Does your organisation already comply with NIS2? This quick check gives you insight into your compliance status in just 5 minutes.",
        duration: "5 minutes",
        output: "Compliance scorecard with action plan",
        cta: "Check now",
        color: "from-its-charcoal to-its-green-dark",
      },
    ],
  },
};

export default function Tools() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <section id="tools" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-its-dark via-its-deep to-its-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            {d.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-white">
            {d.heading1}{" "}
            <span className="gradient-text">{d.heading2}</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            {d.description}
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {d.tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-all duration-500 flex flex-col"
            >
              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${tool.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

              <span className="text-4xl mb-4">{tool.icon}</span>
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{tool.description}</p>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-6 text-xs text-white/40">
                <span className="flex items-center gap-1">
                  ⏱ {tool.duration}
                </span>
                <span className="flex items-center gap-1">
                  📄 {tool.output}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-its-green/10 border border-its-green/20 text-its-green font-semibold text-sm hover:bg-its-green hover:text-white transition-all duration-300"
              >
                {tool.cta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
