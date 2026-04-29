"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    services: [
      {
        image: asset("/images/services/business-consultancy.jpg"),
        title: "Business Consultancy",
        description: "Van strategie naar beheersing. Strategisch advies dat direct vertaalt naar concrete besturing, onafhankelijke audits en toekomstvaste architectuur.",
        features: ["Target Operating Model", "Business case ontwikkeling", "Programma governance", "Executive advisory", "IT-audits", "Cybersecurity audits", "Architectuur dienstverlening"],
        detail: "Onze Business Consultants werken nauw samen met directie en management om strategische doelen te vertalen naar concrete plannen. Wij ontwerpen Target Operating Models, bouwen business cases en richten governance in die ervoor zorgt dat transformaties op koers blijven. Daarnaast leveren wij onafhankelijke IT-audits en cybersecurity-audits die bestuurders inzicht geven in risico's, beheersing en compliance, en ondersteunen wij organisaties met architectuur­dienstverlening: van enterprise- en solution-architectuur tot integratie en cloud-landschappen. Met een bewezen aanpak die strategie, audit en architectuur verbindt met uitvoering, helpen wij organisaties om grip te krijgen op complexe veranderingen.",
      },
      {
        image: asset("/images/services/project-management.jpg"),
        title: "Project Management",
        description: "Complexe verandertrajecten van begin tot eind realiseren. Voor en samen met de klant.",
        features: ["Programmamanagement", "Agile & Waterval", "Transition Support Office", "Risicomanagement", "IPMA-gecertificeerde programma- en projectmanagers", "SAFe-gecertificeerde Scrum Masters", "Program Execution Framework inclusief tooling en dashboards"],
        detail: "Onze projectmanagers zijn ervaren professionals die complexe transformaties leiden. Of het nu gaat om een Agile transitie, een ERP-implementatie of een organisatiebrede verandering, wij zorgen voor structuur, voortgang en resultaat. Met ons Transition Support Office bieden wij een integraal ondersteuningskader dat programma's succesvol over de finish brengt.",
      },
      {
        image: asset("/images/services/process-management.jpg"),
        title: "Proces Management",
        description: "Het ITsPeople Target Operating Model: services, processen, governance en IT in kaart brengen en optimaliseren.",
        features: ["Procesarchitectuur", "Waardestroomanalyse", "Ketenintegratie", "Business Control Framework", "Target Operating Model Design", "Procesorchestratie & governance-inrichting", "Volwassenheidsassessment bedrijfsprocessen"],
        detail: "Processen vormen het zenuwstelsel van elke organisatie. Onze procesmanagers brengen de huidige en gewenste situatie in kaart, identificeren verbeterkansen en begeleiden de implementatie langs alle lagen van het Target Operating Model. Daarbij gaat het niet alleen om de optimalisatie van individuele processen, maar om de orchestratie van processen in onderlinge samenhang, geborgd via een integraal Business Control Framework. Van waardestroomanalyses tot ketenintegraties, wij zorgen dat uw organisatie effectief, efficiënt en toekomstbestendig opereert.",
      },
      {
        image: asset("/images/services/data-management.jpg"),
        title: "Data Management",
        description: "Het ITs Productivity Center: structuur, kwaliteit, visualisatie en data-gedreven inzichten.",
        features: ["Data governance", "Datakwaliteit & DQS Framework", "Data-migratie & -validatie", "Visualisatie & dashboards", "AI & Analytics", "Master data management", "Data-architectuur & -modellering"],
        detail: "Data is de brandstof voor moderne organisaties. Ons ITs Productivity Center helpt organisaties om hun data te structureren, de kwaliteit te waarborgen en inzichten te genereren die besluitvorming verbeteren. Voor complexe datamigraties zetten wij het Data Quality Score (DQS) Framework in: een gestructureerde methode om datakwaliteit objectief en meetbaar vast te stellen door subjectieve begrippen om te zetten in geautomatiseerde validatieregels. Van data governance frameworks tot geavanceerde dashboards en AI-toepassingen, wij maken data werkend voor uw organisatie.",
      },
      {
        image: asset("/images/services/quality-assurance.jpg"),
        title: "Testen & Quality Assurance",
        description: "Onafhankelijke kwaliteitsborging met het Transformation Quality Assurance Framework (TQA-F) voor complexe transformatieprogramma's.",
        features: ["TQA-F implementatie", "Teststrategie & -beleid", "Test coördinatie", "Testautomatisering", "DevOps & CI/CD testing", "Performance & security testing", "Regressietesten & impactanalyse", "Onafhankelijke programma-assurance"],
        detail: "Kwaliteit is geen sluitpost maar een strategisch instrument. Wij bieden het Transformation Quality Assurance Framework (TQA-F): een onafhankelijk kwaliteitsborgingsraamwerk dat besturen een objectief, kwantitatief en continu bijgewerkt beeld geeft van programmagezondheid over acht dimensies. Daarnaast zorgen onze testprofessionals ervoor dat systemen en processen voldoen aan de gestelde eisen. Van teststrategie tot automatisering, van functioneel testen tot performance en security testing, van DevOps-integratie tot onafhankelijke programma-assurance. Wij helpen organisaties om risico's te beheersen en kosten te besparen door vroegtijdig fouten te signaleren en kwaliteit structureel te borgen.",
      },
    ],
    heroLabel: "Onze Diensten",
    heroTitle: "End-to-end",
    heroTitleHighlight: "transformatie",
    heroDesc: "Van strategie tot realisatie. Wij bieden een compleet pakket aan diensten om uw organisatie succesvol te transformeren. Elke dienst wordt op maat ingezet, passend bij uw specifieke uitdagingen.",
    whatWeoffer: "Wat wij bieden",
    learnMore: "Meer weten →",
    ctaHeading: "Benieuwd welke diensten bij uw uitdaging passen?",
    ctaDesc: "Wij denken graag met u mee. Plan een vrijblijvend gesprek in en ontdek wat ITsPeople voor uw organisatie kan betekenen.",
    ctaButton: "Neem contact op →",
  },
  en: {
    services: [
      {
        image: asset("/images/services/business-consultancy.jpg"),
        title: "Business Consultancy",
        description: "From strategy to control. Strategic advice that translates directly into concrete steering, independent audits and future-proof architecture.",
        features: ["Target Operating Model", "Business case development", "Programme governance", "Executive advisory", "IT audits", "Cybersecurity audits", "Architecture services"],
        detail: "Our Business Consultants work closely with executives and management to translate strategic goals into concrete plans. We design Target Operating Models, build business cases and establish governance that keeps transformations on track. In addition, we deliver independent IT audits and cybersecurity audits that give boards clear insight into risk, control and compliance, and we support organisations with architecture services: from enterprise and solution architecture to integration and cloud landscapes. With a proven approach that links strategy, audit and architecture to execution, we help organisations gain control of complex changes.",
      },
      {
        image: asset("/images/services/project-management.jpg"),
        title: "Project Management",
        description: "Delivering complex transformation programmes from start to finish. With and for the client.",
        features: ["Programme management", "Agile & Waterfall", "Transition Support Office", "Risk management", "IPMA-certified programme and project managers", "SAFe-certified Scrum Masters", "Program Execution Framework including tooling and dashboards"],
        detail: "Our project managers are experienced professionals who lead complex transformations. Whether it's an Agile transition, an ERP implementation or an organisation-wide change, we provide structure, progress and results. With our Transition Support Office, we offer a comprehensive support framework that brings programmes successfully to completion.",
      },
      {
        image: asset("/images/services/process-management.jpg"),
        title: "Process Management",
        description: "The ITsPeople Target Operating Model: mapping and optimising services, processes, governance and IT.",
        features: ["Process architecture", "Value stream analysis", "Supply chain integration", "Business Control Framework", "Target Operating Model Design", "Process orchestration & governance design", "Business process maturity assessment"],
        detail: "Processes are the nervous system of every organisation. Our process managers map the current and desired situation, identify improvement opportunities and guide implementation across all layers of the Target Operating Model. This is not just about optimising individual processes, but about orchestrating processes in their interrelationships, embedded through an integrated Business Control Framework. From value stream analyses to supply chain integrations, we ensure your organisation operates effectively, efficiently and future-proof.",
      },
      {
        image: asset("/images/services/data-management.jpg"),
        title: "Data Management",
        description: "The ITs Productivity Centre: structure, quality, visualisation and data-driven insights.",
        features: ["Data governance", "Data quality & DQS Framework", "Data migration & validation", "Visualisation & dashboards", "AI & Analytics", "Master data management", "Data architecture & modelling"],
        detail: "Data is the fuel for modern organisations. Our ITs Productivity Centre helps organisations structure their data, guarantee quality and generate insights that improve decision-making. For complex data migrations, we deploy the Data Quality Score (DQS) Framework: a structured method to objectively and measurably determine data quality by converting subjective concepts into automated validation rules. From data governance frameworks to advanced dashboards and AI applications, we make data work for your organisation.",
      },
      {
        image: asset("/images/services/quality-assurance.jpg"),
        title: "Testing & Quality Assurance",
        description: "Independent quality assurance with the Transformation Quality Assurance Framework (TQA-F) for complex transformation programmes.",
        features: ["TQA-F implementation", "Test strategy & policy", "Test coordination", "Test automation", "DevOps & CI/CD testing", "Performance & security testing", "Regression testing & impact analysis", "Independent programme assurance"],
        detail: "Quality is not an afterthought but a strategic tool. We offer the Transformation Quality Assurance Framework (TQA-F): an independent quality assurance framework that gives executive boards an objective, quantitative and continuously updated view of programme health across eight dimensions. Additionally, our testing professionals ensure that systems and processes meet the required standards. From test strategy to automation, from functional testing to performance and security testing, from DevOps integration to independent programme assurance. We help organisations manage risks and save costs by identifying errors early and embedding quality structurally.",
      },
    ],
    heroLabel: "Our Services",
    heroTitle: "End-to-end",
    heroTitleHighlight: "transformation",
    heroDesc: "From strategy to realisation. We offer a complete package of services to successfully transform your organisation. Each service is deployed to suit your specific challenges.",
    whatWeoffer: "What we offer",
    learnMore: "Learn more →",
    ctaHeading: "Curious about which services fit your challenge?",
    ctaDesc: "We'd like to think it through with you. Schedule a no-commitment conversation and discover what ITsPeople can mean for your organisation.",
    ctaButton: "Get in touch →",
  },
};

export default function DienstenPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <>
      {/* Hero */}
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

      {/* Services detail */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {d.services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title above everything */}
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">{service.title}</h2>

              {/* Image + features side-by-side */}
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-its-dark/10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className={`bg-white rounded-2xl p-8 border border-its-gray-light/30 flex flex-col ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-bold text-its-charcoal mb-4">{d.whatWeoffer}</h3>
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-its-gray-mid">
                        <span className="text-its-green text-sm">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all duration-300">
                      {d.learnMore}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Description below */}
              <div className="mt-8">
                <p className="text-its-gray-mid text-lg leading-relaxed mb-4">{service.description}</p>
                <p className="text-its-gray-mid leading-relaxed">{service.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-its-charcoal mb-6">
            {d.ctaHeading}
          </h2>
          <p className="text-its-gray-mid text-lg mb-8">
            {d.ctaDesc}
          </p>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25">
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
