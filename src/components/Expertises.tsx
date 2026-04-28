"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    eyebrow: "Expertises",
    titleA: "Specialisaties die het ",
    titleB: "verschil maken",
    intro: "Naast onze kerndiensten bieden wij diepgaande expertise op specifieke gebieden waar organisaties vandaag de grootste uitdagingen ervaren.",
    items: [
      { title: "Digitale Strategie", description: "Van visie naar executie. Wij helpen organisaties hun digitale strategie te vertalen naar concrete roadmaps en meetbare resultaten.", icon: "🎯" },
      { title: "NIS2 & Compliance", description: "Integrale compliance-aanpak die wetgeving vertaalt naar werkbare processen, rollen en beheersingskaders.", icon: "🛡️" },
      { title: "Innovatief Werkgedrag", description: "Organisaties helpen een cultuur van innovatie te creëren door middel van gedragsverandering en leiderschap.", icon: "💡" },
      { title: "Datakwaliteit & Governance", description: "Structuur, kwaliteit en governance van data als fundament voor data-gedreven besluitvorming.", icon: "📊" },
      { title: "IT-Governance", description: "De juiste governance-structuren inrichten voor effectieve IT-besturing en waardecreatie.", icon: "⚙️" },
      { title: "AI & Transformatie", description: "AI Act classificatie, risicobeoordeling en governance van AI-toepassingen binnen uw organisatie.", icon: "🤖" },
    ],
  },
  en: {
    eyebrow: "Expertises",
    titleA: "Specialisations that make the ",
    titleB: "difference",
    intro: "Beyond our core services, we offer deep expertise in specific areas where organisations face today's biggest challenges.",
    items: [
      { title: "Digital Strategy", description: "From vision to execution. We help organisations translate their digital strategy into concrete roadmaps and measurable results.", icon: "🎯" },
      { title: "NIS2 & Compliance", description: "An integral compliance approach that translates legislation into workable processes, roles and control frameworks.", icon: "🛡️" },
      { title: "Innovative Work Behaviour", description: "Helping organisations build a culture of innovation through behavioural change and leadership.", icon: "💡" },
      { title: "Data Quality & Governance", description: "Structure, quality and governance of data as the foundation for data-driven decision making.", icon: "📊" },
      { title: "IT Governance", description: "Setting up the right governance structures for effective IT steering and value creation.", icon: "⚙️" },
      { title: "AI & Transformation", description: "AI Act classification, risk assessment and governance of AI applications within your organisation.", icon: "🤖" },
    ],
  },
};

export default function Expertises() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  return (
    <section id="expertises" className="relative py-28">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-br from-its-dark via-its-deep to-its-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
              {d.eyebrow}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-white">
              {d.titleA}<span className="gradient-text">{d.titleB}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {d.intro}
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={asset("/images/team-meeting.jpg")}
                alt="ITsPeople team in meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Expertise cards */}
          <div className="grid gap-4">
            {d.items.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-its-green/5 hover:border-its-green/15 transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">
                  {exp.icon}
                </span>
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-its-green transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
