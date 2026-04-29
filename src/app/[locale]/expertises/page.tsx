"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    expertises: [
      {
        title: "Digitale Strategie",
        image: asset("/images/tools/digital-transformation.jpg"),
        description: "Van visie naar executie. Wij helpen organisaties hun digitale strategie te vertalen naar concrete roadmaps en meetbare resultaten.",
        detail: "Een digitale strategie is meer dan een IT-plan. Het is de blauwdruk voor hoe uw organisatie technologie inzet om waarde te creëren. Wij combineren strategisch inzicht met praktische ervaring om roadmaps te ontwikkelen die niet alleen ambitieus zijn, maar ook haalbaar. Van digitale volwassenheidsanalyses tot concrete implementatieplannen, wij begeleiden het hele traject.",
        topics: ["Digitale volwassenheidsanalyse", "Strategische roadmaps", "Business-IT alignment", "Digitale innovatie"],
      },
      {
        title: "NIS2 & Compliance",
        image: asset("/images/insights/cybersecurity.jpg"),
        description: "Integrale compliance-aanpak die wetgeving vertaalt naar werkbare processen, rollen en beheersingskaders.",
        detail: "De NIS2-richtlijn stelt organisaties voor nieuwe uitdagingen op het gebied van cybersecurity en compliance. Onze experts helpen u bij het vertalen van deze wetgeving naar concrete maatregelen die passen bij uw organisatie. Van gap-analyses tot implementatie en borging, wij zorgen dat compliance geen papieren tijger wordt maar een integraal onderdeel van uw bedrijfsvoering.",
        topics: ["NIS2 gap-analyse", "Compliance frameworks", "Bestuurlijke aansprakelijkheid", "Security governance"],
      },
      {
        title: "Innovatief Werkgedrag",
        image: asset("/images/team-collab.jpg"),
        description: "Organisaties helpen een cultuur van innovatie te creëren door middel van gedragsverandering en leiderschap.",
        detail: "Innovatie begint bij mensen. Wij helpen organisaties om een cultuur te creëren waarin innovatief werkgedrag wordt gestimuleerd en beloond. Door middel van leiderschapsontwikkeling, teaminterventies en gedragsveranderingsprogramma's zorgen wij dat innovatie niet alleen een ambitie is, maar dagelijkse praktijk wordt.",
        topics: ["Innovatiecultuur", "Leiderschapsontwikkeling", "Gedragsverandering", "Design thinking"],
      },
      {
        title: "Datakwaliteit & Governance",
        image: asset("/images/services/data-management.jpg"),
        description: "Structuur, kwaliteit en governance van data als fundament voor data-gedreven besluitvorming.",
        detail: "Data-gedreven werken begint bij betrouwbare data. Onze experts helpen organisaties om hun datalandschap te structureren, datakwaliteit te waarborgen en governance in te richten die ervoor zorgt dat data een strategisch asset wordt. Van data-inventarisaties tot kwaliteitsdashboards en governance frameworks.",
        topics: ["Data-inventarisatie", "Kwaliteitsdashboards", "Data governance framework", "Master data management"],
      },
      {
        title: "IT-Governance",
        image: asset("/images/tools/compliance-security.jpg"),
        description: "De juiste governance-structuren inrichten voor effectieve IT-besturing en waardecreatie.",
        detail: "Effectieve IT-governance zorgt ervoor dat technologie-investeringen waarde opleveren en risico's beheersbaar blijven. Wij helpen organisaties om governance-structuren in te richten die passen bij hun volwassenheid en ambities. Van portfolio management tot decision-making frameworks en performance dashboards.",
        topics: ["Portfolio management", "Decision frameworks", "Performance dashboards", "Risk management"],
      },
      {
        title: "AI & Transformatie",
        image: asset("/images/services/ai-governance.jpg"),
        description: "AI Act classificatie, risicobeoordeling en governance van AI-toepassingen binnen uw organisatie.",
        detail: "Artificial Intelligence biedt enorme kansen, maar vraagt ook om verantwoord gebruik. Wij helpen organisaties om AI-toepassingen te classificeren volgens de AI Act, risico's te beoordelen en governance in te richten die innovatie stimuleert binnen verantwoorde kaders. Van AI-readiness assessments tot implementatie en monitoring.",
        topics: ["AI Act classificatie", "Risicobeoordeling", "AI governance", "Responsible AI"],
        modal: {
          headline: "AI die werkt. Voor organisaties die niet mogen falen.",
          intro: "ITsPeople combineert 20+ jaar transformatie-ervaring in de publieke sector met de kracht van kunstmatige intelligentie. Geen experimenten — maar bewezen oplossingen die passen bij de complexiteit, verantwoordelijkheid en schaal van overheid en zorg.",
          challenge: "Elke organisatie hoort dat AI alles gaat veranderen. Maar voor de Rijksoverheid, ziekenhuizen en uitvoeringsorganisaties is de werkelijkheid genuanceerder. Jullie werken met gevoelige data, strenge compliance-eisen en maatschappelijke verantwoordelijkheid. Wij bouwen geen generieke AI-tools. Wij ontwerpen intelligente oplossingen die naadloos aansluiten op de processen, governance en cultuur van jullie organisatie — en die voldoen aan de strengste eisen op het gebied van de AI Act, AVG en informatiebeveiliging.",
          services: [
            { title: "AI-strategie & Roadmap", body: "Van bestuurlijke onzekerheid naar een concreet, uitvoerbaar AI-implementatieplan. Wij helpen directies en besturen om de juiste prioriteiten te stellen, de business case scherp te krijgen en een roadmap te formuleren die aansluit bij bestaande programma's en budgetcycli.", result: "Een helder AI-beleidskader met governance, prioritering en een gefaseerd implementatiepad." },
            { title: "Intelligente Procesautomatisering", body: "Tijdrovende, repetitieve taken die uw beste mensen bezighouden? Wij ontwerpen en implementeren AI-agents die autonoom complexe taken uitvoeren — van documentanalyse en rapportgeneratie tot geautomatiseerde kwaliteitscontroles in ERP-omgevingen.", result: "Tot 80% tijdsbesparing op operationele taken, met volledige audittrail en menselijke controle." },
            { title: "Multi-Agent Systemen", body: "De volgende generatie automatisering gaat verder dan één chatbot. ITsPeople bouwt teams van gespecialiseerde AI-agents die samenwerken aan complexe opdrachten — van recruitment en screening tot due diligence en compliance-monitoring.", result: "Autonome, 24/7 opererende digitale teams die schaalbaar zijn zonder lineaire groei in FTE." },
            { title: "Data Governance & AI-architectuur", body: "AI is zo sterk als de data eronder. Wij ontwerpen robuuste data-architecturen die de basis leggen voor betrouwbare AI-toepassingen. Van dataclassificatie en kwaliteitsmanagement tot het inrichten van data lakes en integratielandschappen.", result: "Een schaalbare, compliant data-infrastructuur die AI-toepassingen voedt met betrouwbare data." },
            { title: "AI Act Compliance & Quickscan", body: "De Europese AI Act stelt nieuwe eisen aan organisaties die AI inzetten. Wij bieden een gerichte quickscan die uw huidige en geplande AI-toepassingen toetst aan de nieuwe wetgeving, risicoklassen classificeert en een concreet compliance-pad oplevert.", result: "Volledige transparantie over uw AI-risicoprofiel en een pragmatisch actieplan." },
            { title: "Cybersecurity & NIS2/DORA", body: "AI-systemen vereisen een stevig beveiligingsfundament. In samenwerking met gespecialiseerde partners helpen wij organisaties om hun AI-infrastructuur te beschermen conform NIS2 en DORA — met continue monitoring, dreigingsdetectie en incident response.", result: "Een beveiligde AI-omgeving die voldoet aan de nieuwste Europese regelgeving." },
          ],
          stats: [
            { value: "20+", label: "Jaar ervaring" },
            { value: "€400M+", label: "Programmabudget" },
            { value: "6", label: "AI-agents operationeel" },
            { value: "100%", label: "AVG-compliant" },
          ],
          steps: [
            { nr: "01", title: "Verkennen — De AI Quickscan", body: "In een gestructureerde sessie brengen wij samen de kansen, risico's en randvoorwaarden in kaart." },
            { nr: "02", title: "Ontwerpen — Strategie & Architectuur", body: "Op basis van de quickscan ontwerpen wij een AI-strategie die past bij uw organisatie, inclusief governance-model en roadmap." },
            { nr: "03", title: "Realiseren — Implementatie & Borging", body: "Wij bouwen de oplossing, trainen de agents op uw context en borgen de kwaliteit met onze TQA-methodiek." },
          ],
          whyTitle: "Waarom ITsPeople?",
          whyItems: [
            { title: "Wij kennen uw wereld", body: "Meer dan 20 jaar ervaring in de Nederlandse publieke sector — van het Gemeenschappelijk Landbouwbeleid bij RVO tot Oracle Fusion Cloud bij Het CAK." },
            { title: "Wij bouwen, wij adviseren niet alleen", body: "Waar andere consultants stoppen bij het rapport, begint ITsPeople pas. Wij ontwerpen AI-oplossingen én implementeren ze." },
            { title: "Wij zijn model-onafhankelijk", body: "Geen vendor lock-in. Wij werken met de beste AI-modellen voor elke specifieke taak — met AVG-compliance als standaard." },
            { title: "Wij zijn gebouwd op vertrouwen", body: "Onze klanten zijn organisaties waar fouten maatschappelijke consequenties hebben. Dat vraagt om een partner die kwaliteit boven snelheid stelt." },
          ],
          ctaTitle: "Klaar om AI te laten werken voor uw organisatie?",
          ctaBody: "De vraag is niet óf AI een rol gaat spelen in uw organisatie — maar hoe u ervoor zorgt dat het veilig, verantwoord en effectief gebeurt.",
          ctaButton: "Neem contact op →",
          closeLabel: "Sluiten",
        },
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
        image: asset("/images/insights/cybersecurity.jpg"),
        description: "Comprehensive compliance approach that translates legislation into workable processes, roles and governance frameworks.",
        detail: "The NIS2 Directive presents organisations with new challenges in cybersecurity and compliance. Our experts help you translate this legislation into concrete measures that fit your organisation. From gap analyses to implementation and embedding, we ensure compliance is not just a paper tiger but an integral part of your operations.",
        topics: ["NIS2 gap analysis", "Compliance frameworks", "Executive accountability", "Security governance"],
      },
      {
        title: "Innovative Work Behaviour",
        image: asset("/images/team-collab.jpg"),
        description: "Help organisations create a culture of innovation through behaviour change and leadership.",
        detail: "Innovation starts with people. We help organisations create a culture where innovative work behaviour is stimulated and rewarded. Through leadership development, team interventions and behaviour change programmes, we ensure that innovation is not just an ambition, but becomes daily practice.",
        topics: ["Innovation culture", "Leadership development", "Behaviour change", "Design thinking"],
      },
      {
        title: "Data Quality & Governance",
        image: asset("/images/services/data-management.jpg"),
        description: "Structure, quality and governance of data as the foundation for data-driven decision-making.",
        detail: "Data-driven working starts with reliable data. Our experts help organisations structure their data landscape, ensure data quality and implement governance that makes data a strategic asset. From data inventories to quality dashboards and governance frameworks.",
        topics: ["Data inventory", "Quality dashboards", "Data governance framework", "Master data management"],
      },
      {
        title: "IT Governance",
        image: asset("/images/tools/compliance-security.jpg"),
        description: "Implementing the right governance structures for effective IT management and value creation.",
        detail: "Effective IT governance ensures that technology investments deliver value and risks remain manageable. We help organisations implement governance structures that fit their maturity and ambitions. From portfolio management to decision-making frameworks and performance dashboards.",
        topics: ["Portfolio management", "Decision frameworks", "Performance dashboards", "Risk management"],
      },
      {
        title: "AI & Transformation",
        image: asset("/images/services/ai-governance.jpg"),
        description: "AI Act classification, risk assessment and governance of AI applications within your organisation.",
        detail: "Artificial Intelligence offers enormous opportunities, but also requires responsible use. We help organisations classify AI applications according to the AI Act, assess risks and implement governance that encourages innovation within responsible frameworks. From AI readiness assessments to implementation and monitoring.",
        topics: ["AI Act classification", "Risk assessment", "AI governance", "Responsible AI"],
        modal: {
          headline: "AI that works. For organisations that cannot afford to fail.",
          intro: "ITsPeople combines 20+ years of transformation experience in the public sector with the power of artificial intelligence. No experiments — but proven solutions that match the complexity, responsibility and scale of government and healthcare.",
          challenge: "Every organisation hears that AI will change everything. But for national government, hospitals and executive agencies, reality is more nuanced. You work with sensitive data, strict compliance requirements and societal responsibility. We don't build generic AI tools. We design intelligent solutions that seamlessly connect to the processes, governance and culture of your organisation — meeting the strictest requirements of the AI Act, GDPR and information security.",
          services: [
            { title: "AI Strategy & Roadmap", body: "From executive uncertainty to a concrete, actionable AI implementation plan. We help boards set the right priorities, sharpen the business case and formulate a roadmap aligned with existing programmes and budget cycles.", result: "A clear AI policy framework with governance, prioritisation and a phased implementation path." },
            { title: "Intelligent Process Automation", body: "Time-consuming, repetitive tasks keeping your best people busy? We design and implement AI agents that autonomously execute complex tasks — from document analysis and report generation to automated quality controls in ERP environments.", result: "Up to 80% time savings on operational tasks, with full audit trail and human control." },
            { title: "Multi-Agent Systems", body: "The next generation of automation goes beyond a single chatbot. ITsPeople builds teams of specialised AI agents that collaborate on complex assignments — from recruitment and screening to due diligence and compliance monitoring.", result: "Autonomous, 24/7 operating digital teams that scale without linear FTE growth." },
            { title: "Data Governance & AI Architecture", body: "AI is only as strong as the data beneath it. We design robust data architectures that lay the foundation for reliable AI applications. From data classification and quality management to data lakes and integration landscapes.", result: "A scalable, compliant data infrastructure feeding AI applications with reliable data." },
            { title: "AI Act Compliance & Quickscan", body: "The European AI Act sets new requirements for organisations deploying AI. We offer a targeted quickscan that tests your current and planned AI applications against the new legislation, classifies risk categories and delivers a concrete compliance path.", result: "Full transparency on your AI risk profile and a pragmatic action plan." },
            { title: "Cybersecurity & NIS2/DORA", body: "AI systems require a solid security foundation. Together with specialised partners, we help organisations protect their AI infrastructure in compliance with NIS2 and DORA — with continuous monitoring, threat detection and incident response.", result: "A secured AI environment meeting the latest European regulations." },
          ],
          stats: [
            { value: "20+", label: "Years experience" },
            { value: "€400M+", label: "Programme budget" },
            { value: "6", label: "AI agents operational" },
            { value: "100%", label: "GDPR compliant" },
          ],
          steps: [
            { nr: "01", title: "Explore — The AI Quickscan", body: "In a structured session, we map opportunities, risks and preconditions together." },
            { nr: "02", title: "Design — Strategy & Architecture", body: "Based on the quickscan, we design an AI strategy that fits your organisation, including governance model and roadmap." },
            { nr: "03", title: "Deliver — Implementation & Embedding", body: "We build the solution, train the agents on your context and assure quality with our TQA methodology." },
          ],
          whyTitle: "Why ITsPeople?",
          whyItems: [
            { title: "We know your world", body: "20+ years of experience in the Dutch public sector — from agricultural policy at RVO to Oracle Fusion Cloud at Het CAK." },
            { title: "We build, not just advise", body: "Where other consultants stop at the report, ITsPeople is just getting started. We design AI solutions and implement them." },
            { title: "We are model-independent", body: "No vendor lock-in. We work with the best AI models for each specific task — with GDPR compliance as standard." },
            { title: "We are built on trust", body: "Our clients are organisations where mistakes have societal consequences. That demands a partner who prioritises quality over speed." },
          ],
          ctaTitle: "Ready to make AI work for your organisation?",
          ctaBody: "The question is not whether AI will play a role in your organisation — but how you ensure it happens safely, responsibly and effectively.",
          ctaButton: "Get in touch →",
          closeLabel: "Close",
        },
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

type ModalData = {
  headline: string; intro: string; challenge: string;
  services: { title: string; body: string; result: string }[];
  stats: { value: string; label: string }[];
  steps: { nr: string; title: string; body: string }[];
  whyTitle: string; whyItems: { title: string; body: string }[];
  ctaTitle: string; ctaBody: string; ctaButton: string; closeLabel: string;
};

export default function ExpertisesPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  const [openModal, setOpenModal] = useState<ModalData | null>(null);

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
                    src={exp.image ?? asset("/images/team-meeting.jpg")}
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
                      {("modal" in exp && exp.modal) ? (
                        <button
                          onClick={() => setOpenModal((exp as { modal: ModalData }).modal)}
                          className="text-its-green-dark text-sm font-semibold hover:text-its-green transition-colors"
                        >
                          {d.learnMore}
                        </button>
                      ) : (
                        <Link href={`/${locale}/contact`} className="text-its-green-dark text-sm font-semibold hover:text-its-green transition-colors">
                          {d.learnMore}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(null)}
            className="fixed inset-0 z-50 bg-its-dark/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full my-10 overflow-hidden shadow-2xl"
            >
              {/* Hero header */}
              <div className="relative bg-gradient-to-br from-its-dark via-its-deep to-its-dark p-10 sm:p-14">
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <button
                  onClick={() => setOpenModal(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center transition-colors"
                  aria-label={openModal.closeLabel}
                >
                  ✕
                </button>
                <div className="relative z-10">
                  <span className="text-its-green text-xs font-bold uppercase tracking-widest">AI & Transformatie</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight">{openModal.headline}</h2>
                  <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{openModal.intro}</p>
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-12">
                {/* Challenge */}
                <div className="border-l-4 border-its-green pl-6">
                  <p className="text-its-gray-mid leading-relaxed text-lg">{openModal.challenge}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {openModal.stats.map((s) => (
                    <div key={s.label} className="text-center p-4 bg-its-warm rounded-xl">
                      <div className="text-2xl sm:text-3xl font-bold text-its-green-dark">{s.value}</div>
                      <div className="text-xs uppercase tracking-wider text-its-gray-mid font-semibold mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-2xl font-bold text-its-charcoal mb-8">{locale === "nl" ? "Wat wij doen" : "What we do"}</h3>
                  <div className="space-y-6">
                    {openModal.services.map((svc, si) => (
                      <div key={svc.title} className="bg-its-warm rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <span className="text-its-green font-bold text-lg flex-shrink-0">0{si + 1}</span>
                          <div>
                            <h4 className="font-bold text-its-charcoal text-lg mb-2">{svc.title}</h4>
                            <p className="text-its-gray-mid leading-relaxed mb-3">{svc.body}</p>
                            <p className="text-its-green-dark text-sm font-semibold">{locale === "nl" ? "Resultaat:" : "Result:"} {svc.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="bg-gradient-to-r from-its-dark to-its-deep rounded-2xl p-8 sm:p-10">
                  <h3 className="text-xl font-bold text-white mb-6">{locale === "nl" ? "Onze aanpak in drie stappen" : "Our approach in three steps"}</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {openModal.steps.map((step) => (
                      <div key={step.nr}>
                        <span className="text-its-green text-3xl font-bold">{step.nr}</span>
                        <h4 className="font-bold text-white mt-2 mb-2 text-sm">{step.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why ITsPeople */}
                <div>
                  <h3 className="text-2xl font-bold text-its-charcoal mb-6">{openModal.whyTitle}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {openModal.whyItems.map((item) => (
                      <div key={item.title} className="p-5 border border-its-gray-light/30 rounded-xl">
                        <h4 className="font-bold text-its-charcoal mb-2">{item.title}</h4>
                        <p className="text-its-gray-mid text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 border-t border-its-gray-light/30">
                  <h3 className="text-2xl font-bold text-its-charcoal mb-3">{openModal.ctaTitle}</h3>
                  <p className="text-its-gray-mid mb-6 max-w-lg mx-auto">{openModal.ctaBody}</p>
                  <Link
                    href={`/${locale}/contact`}
                    onClick={() => setOpenModal(null)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25"
                  >
                    {openModal.ctaButton}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
