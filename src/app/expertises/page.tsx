"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const expertises = [
  {
    title: "Digitale Strategie",
    icon: "🎯",
    description: "Van visie naar executie. Wij helpen organisaties hun digitale strategie te vertalen naar concrete roadmaps en meetbare resultaten.",
    detail: "Een digitale strategie is meer dan een IT-plan. Het is de blauwdruk voor hoe uw organisatie technologie inzet om waarde te creëren. Wij combineren strategisch inzicht met praktische ervaring om roadmaps te ontwikkelen die niet alleen ambitieus zijn, maar ook haalbaar. Van digitale volwassenheidsanalyses tot concrete implementatieplannen, wij begeleiden het hele traject.",
    topics: ["Digitale volwassenheidsanalyse", "Strategische roadmaps", "Business-IT alignment", "Digitale innovatie"],
  },
  {
    title: "NIS2 & Compliance",
    icon: "🛡️",
    description: "Integrale compliance-aanpak die wetgeving vertaalt naar werkbare processen, rollen en beheersingskaders.",
    detail: "De NIS2-richtlijn stelt organisaties voor nieuwe uitdagingen op het gebied van cybersecurity en compliance. Onze experts helpen u bij het vertalen van deze wetgeving naar concrete maatregelen die passen bij uw organisatie. Van gap-analyses tot implementatie en borging, wij zorgen dat compliance geen papieren tijger wordt maar een integraal onderdeel van uw bedrijfsvoering.",
    topics: ["NIS2 gap-analyse", "Compliance frameworks", "Bestuurlijke aansprakelijkheid", "Security governance"],
  },
  {
    title: "Innovatief Werkgedrag",
    icon: "💡",
    description: "Organisaties helpen een cultuur van innovatie te creëren door middel van gedragsverandering en leiderschap.",
    detail: "Innovatie begint bij mensen. Wij helpen organisaties om een cultuur te creëren waarin innovatief werkgedrag wordt gestimuleerd en beloond. Door middel van leiderschapsontwikkeling, teaminterventies en gedragsveranderingsprogramma's zorgen wij dat innovatie niet alleen een ambitie is, maar dagelijkse praktijk wordt.",
    topics: ["Innovatiecultuur", "Leiderschapsontwikkeling", "Gedragsverandering", "Design thinking"],
  },
  {
    title: "Datakwaliteit & Governance",
    icon: "📊",
    description: "Structuur, kwaliteit en governance van data als fundament voor data-gedreven besluitvorming.",
    detail: "Data-gedreven werken begint bij betrouwbare data. Onze experts helpen organisaties om hun datalandschap te structureren, datakwaliteit te waarborgen en governance in te richten die ervoor zorgt dat data een strategisch asset wordt. Van data-inventarisaties tot kwaliteitsdashboards en governance frameworks.",
    topics: ["Data-inventarisatie", "Kwaliteitsdashboards", "Data governance framework", "Master data management"],
  },
  {
    title: "IT-Governance",
    icon: "⚙️",
    description: "De juiste governance-structuren inrichten voor effectieve IT-besturing en waardecreatie.",
    detail: "Effectieve IT-governance zorgt ervoor dat technologie-investeringen waarde opleveren en risico's beheersbaar blijven. Wij helpen organisaties om governance-structuren in te richten die passen bij hun volwassenheid en ambities. Van portfolio management tot decision-making frameworks en performance dashboards.",
    topics: ["Portfolio management", "Decision frameworks", "Performance dashboards", "Risk management"],
  },
  {
    title: "AI & Transformatie",
    icon: "🤖",
    description: "AI Act classificatie, risicobeoordeling en governance van AI-toepassingen binnen uw organisatie.",
    detail: "Artificial Intelligence biedt enorme kansen, maar vraagt ook om verantwoord gebruik. Wij helpen organisaties om AI-toepassingen te classificeren volgens de AI Act, risico's te beoordelen en governance in te richten die innovatie stimuleert binnen verantwoorde kaders. Van AI-readiness assessments tot implementatie en monitoring.",
    topics: ["AI Act classificatie", "Risicobeoordeling", "AI governance", "Responsible AI"],
  },
];

export default function ExpertisesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Expertises</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Specialisaties die het <span className="gradient-text">verschil maken</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Naast onze kerndiensten bieden wij diepgaande expertise op specifieke gebieden waar organisaties vandaag de grootste uitdagingen ervaren.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {expertises.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-its-gray-light/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{exp.icon}</span>
                    <h2 className="text-2xl font-bold text-its-charcoal">{exp.title}</h2>
                  </div>
                  <p className="text-its-gray-mid text-lg leading-relaxed mb-4">{exp.description}</p>
                  <p className="text-its-gray-mid leading-relaxed">{exp.detail}</p>
                </div>
                <div className="bg-its-warm rounded-xl p-6">
                  <h3 className="font-bold text-its-charcoal text-sm uppercase tracking-wider mb-4">Onderwerpen</h3>
                  <ul className="space-y-2">
                    {exp.topics.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-its-gray-mid">
                        <span className="w-1.5 h-1.5 rounded-full bg-its-green flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="text-its-green-dark text-sm font-semibold hover:text-its-green transition-colors">
                      Meer weten →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
