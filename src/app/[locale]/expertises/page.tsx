"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const data = {
  nl: {
    expertises: [
      {
        title: "Digitale Strategie",
        image: "/images/tools/digital-transformation.jpg",
        description: "Van visie naar executie. Wij helpen organisaties hun digitale strategie te vertalen naar concrete roadmaps en meetbare resultaten.",
        detail: "Een digitale strategie is meer dan een IT-plan. Het is de blauwdruk voor hoe uw organisatie technologie inzet om waarde te creëren. Wij combineren strategisch inzicht met praktische ervaring om roadmaps te ontwikkelen die niet alleen ambitieus zijn, maar ook haalbaar. Van digitale volwassenheidsanalyses tot concrete implementatieplannen, wij begeleiden het hele traject.",
        topics: ["Digitale volwassenheidsanalyse", "Strategische roadmaps", "Business-IT alignment", "Digitale innovatie"],
      },
      {
        title: "NIS2 & Compliance",
        image: "/images/insights/cybersecurity.jpg",
        description: "Integrale compliance-aanpak die wetgeving vertaalt naar werkbare processen, rollen en beheersingskaders.",
        detail: "De NIS2-richtlijn stelt organisaties voor nieuwe uitdagingen op het gebied van cybersecurity en compliance. Onze experts helpen u bij het vertalen van deze wetgeving naar concrete maatregelen die passen bij uw organisatie. Van gap-analyses tot implementatie en borging, wij zorgen dat compliance geen papieren tijger wordt maar een integraal onderdeel van uw bedrijfsvoering.",
        topics: ["NIS2 gap-analyse", "Compliance frameworks", "Bestuurlijke aansprakelijkheid", "Security governance"],
      },
      {
        title: "Innovatief Werkgedrag",
        image: "/images/team-collab.jpg",
        description: "Organisaties helpen een cultuur van innovatie te creëren door middel van gedragsverandering en leiderschap.",
        detail: "Innovatie begint bij mensen. Wij helpen organisaties om een cultuur te creëren waarin innovatief werkgedrag wordt gestimuleerd en beloond. Door middel van leiderschapsontwikkeling, teaminterventies en gedragsveranderingsprogramma's zorgen wij dat innovatie niet alleen een ambitie is, maar dagelijkse praktijk wordt.",
        topics: ["Innovatiecultuur", "Leiderschapsontwikkeling", "Gedragsverandering", "Design thinking"],
      },
      {
        title: "Datakwaliteit & Governance",
        image: "/images/services/data-management.jpg",
        description: "Structuur, kwaliteit en governance van data als fundament voor data-gedreven besluitvorming.",
        detail: "Data-gedreven werken begint bij betrouwbare data. Onze experts helpen organisaties om hun datalandschap te structureren, datakwaliteit te waarborgen en governance in te richten die ervoor zorgt dat data een strategisch asset wordt. Van data-inventarisaties tot kwaliteitsdashboards en governance frameworks.",
        topics: ["Data-inventarisatie", "Kwaliteitsdashboards", "Data governance framework", "Master data management"],
      },
      {
        title: "IT-Governance",
        image: "/images/tools/compliance-security.jpg",
        description: "De juiste governance-structuren inrichten voor effectieve IT-besturing en waardecreatie.",
        detail: "Effectieve IT-governance zorgt ervoor dat technologie-investeringen waarde opleveren en risico's beheersbaar blijven. Wij helpen organisaties om governance-structuren in te richten die passen bij hun volwassenheid en ambities. Van portfolio management tot decision-making frameworks en performance dashboards.",
        topics: ["Portfolio management", "Decision frameworks", "Performance dashboards", "Risk management"],
      },
      {
        title: "AI & Transformatie",
        image: "/images/services/ai-governance.jpg",
        description: "AI Act classificatie, risicobeoordeling en governance van AI-toepassingen binnen uw organisatie.",
        detail: "Artificial Intelligence biedt enorme kansen, maar vraagt ook om verantwoord gebruik. Wij helpen organisaties om AI-toepassingen te classificeren volgens de AI Act, risico's te beoordelen en governance in te richten die innovatie stimuleert binnen verantwoorde kaders. Van AI-readiness assessments tot implementatie en monitoring.",
        topics: ["AI Act classificatie", "Risicobeoordeling", "AI governance", "Responsible AI"],
      },
    ],
    heroLabel: "Expertises",
    heroTitle: "Specialisaties die het",
    heroTitleHighlight: "verschil maken",
    heroDesc: "Naast onze kerndiensten bieden wij diepgaande expertise op specifieke gebieden waar organisaties vandaag de grootste uitdagingen ervaren.",
    topicsLabel: "Onderwerpen",
    learnMore: "Meer weten →",
  },
  en: {
    expertises: [
      {
        title: "Digital Strategy",
        icon: "🎯",
        description: "From vision to execution. We help organisations translate their digital strategy into concrete roadmaps and measurable results.",
        detail: "A digital strategy is more than an IT plan. It is the blueprint for how your organisation uses technology to create value. We combine strategic insight with practical experience to develop roadmaps that are not only ambitious but also achievable. From digital maturity analyses to concrete implementation plans, we guide the entire journey.",
        topics: ["Digital maturity analysis", "Strategic roadmaps", "Business-IT alignment", "Digital innovation"],
      },
      {
        title: "NIS2 & Compliance",
        image: "/images/insights/cybersecurity.jpg",
        description: "Comprehensive compliance approach that translates legislation into workable processes, roles and governance frameworks.",
        detail: "The NIS2 Directive presents organisations with new challenges in cybersecurity and compliance. Our experts help you translate this legislation into concrete measures that fit your organisation. From gap analyses to implementation and embedding, we ensure compliance is not just a paper tiger but an integral part of your operations.",
        topics: ["NIS2 gap analysis", "Compliance frameworks", "Executive accountability", "Security governance"],
      },
      {
        title: "Innovative Work Behaviour",
        image: "/images/team-collab.jpg",
        description: "Help organisations create a culture of innovation through behaviour change and leadership.",
        detail: "Innovation starts with people. We help organisations create a culture where innovative work behaviour is stimulated and rewarded. Through leadership development, team interventions and behaviour change programmes, we ensure that innovation is not just an ambition, but becomes daily practice.",
        topics: ["Innovation culture", "Leadership development", "Behaviour change", "Design thinking"],
      },
      {
        title: "Data Quality & Governance",
        image: "/images/services/data-management.jpg",
        description: "Structure, quality and governance of data as the foundation for data-driven decision-making.",
        detail: "Data-driven working starts with reliable data. Our experts help organisations structure their data landscape, ensure data quality and implement governance that makes data a strategic asset. From data inventories to quality dashboards and governance frameworks.",
        topics: ["Data inventory", "Quality dashboards", "Data governance framework", "Master data management"],
      },
      {
        title: "IT Governance",
        image: "/images/tools/compliance-security.jpg",
        description: "Implementing the right governance structures for effective IT management and value creation.",
        detail: "Effective IT governance ensures that technology investments deliver value and risks remain manageable. We help organisations implement governance structures that fit their maturity and ambitions. From portfolio management to decision-making frameworks and performance dashboards.",
        topics: ["Portfolio management", "Decision frameworks", "Performance dashboards", "Risk management"],
      },
      {
        title: "AI & Transformation",
        image: "/images/services/ai-governance.jpg",
        description: "AI Act classification, risk assessment and governance of AI applications within your organisation.",
        detail: "Artificial Intelligence offers enormous opportunities, but also requires responsible use. We help organisations classify AI applications according to the AI Act, assess risks and implement governance that encourages innovation within responsible frameworks. From AI readiness assessments to implementation and monitoring.",
        topics: ["AI Act classification", "Risk assessment", "AI governance", "Responsible AI"],
      },
    ],
    heroLabel: "Expertises",
    heroTitle: "Specialisations that",
    heroTitleHighlight: "make the difference",
    heroDesc: "In addition to our core services, we offer in-depth expertise in specific areas where organisations today face their greatest challenges.",
    topicsLabel: "Topics",
    learnMore: "Learn more →",
  },
};

export default function ExpertisesPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.heroLabel}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              {d.heroTitle} <span className="gradient-text">{d.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              {d.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {d.expertises.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden border border-its-gray-light/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="grid lg:grid-cols-3">
                <div className="relative lg:col-span-1 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={exp.image ?? "/images/team-meeting.jpg"}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
                  <h2 className="text-2xl font-bold text-its-charcoal mb-4">{exp.title}</h2>
                  <p className="text-its-gray-mid text-lg leading-relaxed mb-4">{exp.description}</p>
                  <p className="text-its-gray-mid leading-relaxed mb-6">{exp.detail}</p>
                  <div className="bg-its-warm rounded-xl p-6">
                    <h3 className="font-bold text-its-charcoal text-sm uppercase tracking-wider mb-4">{d.topicsLabel}</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-its-gray-mid">
                          <span className="w-1.5 h-1.5 rounded-full bg-its-green flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link href={locale === "nl" ? "/contact" : "/en/contact"} className="text-its-green-dark text-sm font-semibold hover:text-its-green transition-colors">
                        {d.learnMore}
                      </Link>
                    </div>
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
