"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    vacatures: [
      { title: "Senior Business Consultant", type: "Fulltime", location: "Zaltbommel / Hybride", description: "Als Senior Business Consultant bij ITsPeople werk je aan complexe transformatieprojecten bij toonaangevende organisaties. Je adviseert op strategisch niveau, ontwerpt Target Operating Models en begeleidt verandertrajecten van begin tot eind.", requirements: ["Minimaal 7 jaar ervaring in consultancy", "Ervaring met transformatieprogramma's", "Sterke stakeholder management vaardigheden", "HBO/WO werk- en denkniveau"] },
      { title: "Projectmanager", type: "Fulltime", location: "Zaltbommel / Hybride", description: "Als Projectmanager bij ITsPeople leid je complexe IT- en organisatietransformaties. Je zorgt voor structuur, voortgang en resultaat in uitdagende omgevingen. Van Agile tot Waterval, je bent thuis in verschillende methodieken.", requirements: ["Minimaal 5 jaar ervaring als projectmanager", "IPMA of Prince2 certificering", "Ervaring in de financiële sector, overheid of zorg", "Sterk in risicomanagement"] },
      { title: "Data Consultant", type: "Fulltime", location: "Zaltbommel / Hybride", description: "Als Data Consultant help je organisaties om data-gedreven te werken. Van data governance tot visualisatie, van kwaliteitsverbetering tot AI-toepassingen. Je combineert technische kennis met organisatorisch inzicht.", requirements: ["Minimaal 3 jaar ervaring in data management", "Kennis van data governance frameworks", "Ervaring met BI-tools en dashboarding", "Analytisch en communicatief sterk"] },
      { title: "NIS2 Compliance Specialist", type: "Fulltime", location: "Zaltbommel / Hybride", description: "Als NIS2 Compliance Specialist help je organisaties om te voldoen aan de NIS2-richtlijn. Je voert gap-analyses uit, ontwerpt compliance frameworks en begeleidt implementatietrajecten.", requirements: ["Ervaring met compliance en informatiebeveiliging", "Kennis van NIS2, BIO of ISO 27001", "In staat om complexe materie toegankelijk te maken", "Ervaring met governance en risicomanagement"] },
    ],
    benefits: [
      { image: asset("/images/benefits/academy.jpg"), title: "ITs Academy", description: "Structurele investering in jouw ontwikkeling via onze eigen academy." },
      { image: asset("/images/benefits/hybrid.jpg"), title: "Hybride werken", description: "Flexibiliteit in waar en wanneer je werkt, afgestemd op het project." },
      { image: asset("/images/benefits/mobility.jpg"), title: "Mobiliteit", description: "Leaseauto of mobiliteitsbudget naar keuze." },
      { image: asset("/images/benefits/salary.jpg"), title: "Competitief salaris", description: "Marktconform salaris met bonus en pensioenregeling." },
      { image: asset("/images/benefits/events.jpg"), title: "Samen Events", description: "Zes keer per jaar samen vieren, van nieuwjaar tot kerst." },
      { image: asset("/images/benefits/make-a-wish-logo.jpg"), title: "Make-A-Wish", description: "Samen het verschil maken, ook buiten projecten." },
    ],
    heroLabel: "Werken bij ITsPeople",
    heroTitle: "Maak het",
    heroTitleHighlight: "verschil",
    heroDesc: "Bij ITsPeople werk je aan uitdagende transformatieprojecten bij toonaangevende organisaties. Met een team van experts die gedreven worden door één gemeenschappelijk doel: duurzame verandering realiseren.",
    whyTitle: "Waarom ITsPeople?",
    whyP1: "Bij ITsPeople ben je geen nummer. Je bent een professional die het verschil maakt. Wij investeren in jouw ontwikkeling, geven je de ruimte om te groeien en bieden uitdagende projecten waar je echt impact hebt.",
    whyP2: "Onze consultants werken bij organisaties als Rabobank, Rijksoverheid, UMC Utrecht en Aegon. Projecten waarbij complexiteit, menselijkheid en resultaat hand in hand gaan.",
    whyP3: "En tussendoor vieren we samen. Zes keer per jaar komen we bij elkaar voor onze Samen Events. Omdat het verschil maken ook samen mag zijn.",
    heroVacancyCta: "We zoeken nu",
    heroVacancyCtaSuffix: "collega's",
    heroVacancyCtaLink: "bekijk vacatures →",
    sidebarTitle: "Open posities",
    sidebarSubtitle: "Direct solliciteren",
    sidebarViewAll: "Alle vacatures →",
    benefitsTitle: "Wat wij bieden",
    eventsTitle: "Recente Samen Events",
    eventsIntro: "Een kijkje achter de schermen: van maandelijkse ITsMonthly tot gezamenlijke workshops en goede doelen-acties. Dit is hoe wij samen werken aan ons vak, én aan elkaar.",
    events: [
      {
        image: asset("/images/events/itsmonthly-mei-2026-tafel.jpg"),
        secondaryImage: asset("/images/events/itsmonthly-mei-2026-workshop.jpg"),
        date: "April 2026",
        eventType: "ITsMonthly",
        title: "ITsMonthly: kennis delen, mensen vieren en samen genieten",
        lead: "Onze maandelijkse ITsMonthly stond afgelopen vrijdag weer in het teken van waar we als ITsPeople voor staan: scherp blijven op onze koers, blijven leren én tijd maken voor elkaar.",
        sections: [
          { heading: "Update: waar staan we?", body: "We trapten af met een gezamenlijke stand van zaken. Hoe staan we ervoor op onze strategische speerpunten, wat speelt er bij onze opdrachtgevers in de zorg en bij de Rijksoverheid, en welke ontwikkelingen vragen de komende periode onze aandacht? Een open en eerlijk gesprek dat ons als team weer scherp op één lijn zet." },
          { heading: "Workshop Portfoliomanagement", body: "Vervolgens dook de groep in een interactieve workshop portfoliomanagement. Met een fysieke spelopstelling werd inzichtelijk hoe je keuzes maakt tussen projecten, capaciteit verdeelt en strategische waarde stuurt, precies de uitdagingen waar onze klanten dagelijks mee worstelen. Door het zelf te doen in plaats van erover te praten, kwamen de principes van prioritering, schaarste en governance heel tastbaar binnen. Een mooie aanvulling op het advieswerk dat we voor programma's en directies leveren." },
          { heading: "Verjaardagen en jubilea", body: "Geen ITsMonthly zonder de mensen die ITsPeople maken tot wat het is. We hebben een aantal collega's in het zonnetje gezet die de afgelopen periode jarig waren of een jubileum vierden. Dank voor jullie inzet, plezier en betrokkenheid, jullie zijn het verschil." },
          { heading: "Samen aan tafel", body: "We sloten af zoals het hoort: met z'n allen aan een lange tafel, een goed glas en nog betere gesprekken. Want naast de inhoud is het juist de onderlinge band die ons als ITsPeople sterk maakt. Daar investeren we graag in." },
        ],
        closing: "Op naar de volgende ITsMonthly, en de volgende stap voor onze klanten, ons team en onze ambitie.",
      },
    ],
    vacanciesTitle: "Openstaande vacatures",
    vacanciesDesc: "Staat jouw droombaan er niet bij? Stuur een open sollicitatie naar hr@itspeople.nl.",
    apply: "Solliciteer →",
    careerSiteTitle: "Klaar om het verschil te maken?",
    careerSiteDesc: "Op onze carrièresite vind je al onze actuele vacatures, verhalen van collega's en een kijkje achter de schermen bij ITsPeople. Of je nu een ervaren consultant bent of net aan het begin van je carrière staat, ontdek welke rol bij jou past en hoe jij kunt bijdragen aan duurzame verandering bij toonaangevende organisaties.",
    careerSiteButton: "Bekijk alle vacatures op joinitspeople.nl →",
    openTitle: "Jouw functie staat er niet bij?",
    openDesc: "Wij zijn altijd op zoek naar talent. Stuur je CV en motivatie naar hr@itspeople.nl en wie weet maken wij binnenkort samen het verschil.",
    openButton: "Stuur een open sollicitatie →",
  },
  en: {
    vacatures: [
      { title: "Senior Business Consultant", type: "Fulltime", location: "Zaltbommel / Hybrid", description: "As a Senior Business Consultant at ITsPeople, you work on complex transformation projects at leading organisations. You advise at a strategic level, design Target Operating Models and guide change programmes from start to finish.", requirements: ["Minimum 7 years consulting experience", "Experience with transformation programmes", "Strong stakeholder management skills", "Bachelor's degree or equivalent"] },
      { title: "Project Manager", type: "Fulltime", location: "Zaltbommel / Hybrid", description: "As a Project Manager at ITsPeople, you lead complex IT and organisational transformations. You ensure structure, progress and results in challenging environments. From Agile to Waterfall, you're at home in different methodologies.", requirements: ["Minimum 5 years experience as project manager", "IPMA or Prince2 certification", "Experience in financial sector, government or healthcare", "Strong in risk management"] },
      { title: "Data Consultant", type: "Fulltime", location: "Zaltbommel / Hybrid", description: "As a Data Consultant, you help organisations work data-driven. From data governance to visualisation, from quality improvement to AI applications. You combine technical knowledge with organisational insight.", requirements: ["Minimum 3 years data management experience", "Knowledge of data governance frameworks", "Experience with BI tools and dashboarding", "Analytically and communicatively strong"] },
      { title: "NIS2 Compliance Specialist", type: "Fulltime", location: "Zaltbommel / Hybrid", description: "As a NIS2 Compliance Specialist, you help organisations comply with the NIS2 Directive. You conduct gap analyses, design compliance frameworks and guide implementation programmes.", requirements: ["Experience with compliance and information security", "Knowledge of NIS2, BIO or ISO 27001", "Able to make complex matters accessible", "Experience with governance and risk management"] },
    ],
    benefits: [
      { image: asset("/images/benefits/academy.jpg"), title: "ITs Academy", description: "Structural investment in your development through our own academy." },
      { image: asset("/images/benefits/hybrid.jpg"), title: "Hybrid working", description: "Flexibility in where and when you work, tailored to the project." },
      { image: asset("/images/benefits/mobility.jpg"), title: "Mobility", description: "Company car or mobility budget of your choice." },
      { image: asset("/images/benefits/salary.jpg"), title: "Competitive salary", description: "Market-competitive salary with bonus and pension scheme." },
      { image: asset("/images/benefits/events.jpg"), title: "Together Events", description: "Celebrate together six times a year, from New Year to Christmas." },
      { image: asset("/images/benefits/make-a-wish-logo.jpg"), title: "Make-A-Wish", description: "Making a difference together, also beyond projects." },
    ],
    heroLabel: "Work at ITsPeople",
    heroTitle: "Make the",
    heroTitleHighlight: "difference",
    heroDesc: "At ITsPeople, you work on challenging transformation projects at leading organisations. With a team of experts driven by one common goal: creating sustainable change.",
    whyTitle: "Why ITsPeople?",
    whyP1: "At ITsPeople, you're not a number. You're a professional who makes a difference. We invest in your development, give you room to grow and offer challenging projects where you have real impact.",
    whyP2: "Our consultants work for organisations like Rabobank, Government, UMC Utrecht and Aegon. Projects where complexity, humanity and results go hand in hand.",
    whyP3: "And along the way we celebrate together. Six times a year we get together for our Together Events. Because making a difference can also be together.",
    heroVacancyCta: "We're hiring for",
    heroVacancyCtaSuffix: "roles",
    heroVacancyCtaLink: "view vacancies →",
    sidebarTitle: "Open positions",
    sidebarSubtitle: "Apply directly",
    sidebarViewAll: "View all vacancies →",
    benefitsTitle: "What we offer",
    eventsTitle: "Recent Together Events",
    eventsIntro: "A look behind the scenes: from our monthly ITsMonthly to joint workshops and charity initiatives. This is how we work on our craft together, and on each other.",
    events: [
      {
        image: asset("/images/events/itsmonthly-mei-2026-tafel.jpg"),
        secondaryImage: asset("/images/events/itsmonthly-mei-2026-workshop.jpg"),
        date: "April 2026",
        eventType: "ITsMonthly",
        title: "ITsMonthly: sharing knowledge, celebrating people and enjoying time together",
        lead: "Our monthly ITsMonthly last Friday was once again all about what we stand for as ITsPeople: staying sharp on our direction, continuing to learn, and making time for each other.",
        sections: [
          { heading: "Update: where do we stand?", body: "We kicked off with a shared update on progress. Where we stand on our strategic priorities, what's happening at our clients in healthcare and central government, and which developments require our attention in the coming period. An open and honest conversation that aligns us as a team." },
          { heading: "Portfolio Management Workshop", body: "Next, the group dove into an interactive portfolio management workshop. With a physical game setup, we explored how to make choices between projects, allocate capacity and steer on strategic value, exactly the challenges our clients face every day. By doing it ourselves rather than just talking about it, the principles of prioritisation, scarcity and governance landed tangibly. A valuable complement to the advisory work we deliver to programmes and executive teams." },
          { heading: "Birthdays and anniversaries", body: "No ITsMonthly without celebrating the people who make ITsPeople what it is. We put a number of colleagues in the spotlight who recently celebrated a birthday or anniversary. Thank you for your dedication, energy and commitment, you make the difference." },
          { heading: "Together at the table", body: "We closed the evening as it should be: all together at one long table, with a good drink and even better conversations. Because alongside the substance, it is the bond between us that makes ITsPeople strong. We are happy to invest in that." },
        ],
        closing: "On to the next ITsMonthly, and the next step for our clients, our team and our ambition.",
      },
    ],
    vacanciesTitle: "Open vacancies",
    vacanciesDesc: "Not seeing your dream job? Send an open application to hr@itspeople.nl.",
    apply: "Apply →",
    careerSiteTitle: "Ready to make a difference?",
    careerSiteDesc: "On our career site you'll find all our current vacancies, stories from colleagues and a behind-the-scenes look at ITsPeople. Whether you're a seasoned consultant or just starting your career, discover which role suits you and how you can contribute to sustainable change at leading organisations.",
    careerSiteButton: "View all vacancies on joinitspeople.nl →",
    openTitle: "Your position isn't listed?",
    openDesc: "We're always looking for talent. Send your CV and motivation to hr@itspeople.nl and who knows, we'll soon make a difference together.",
    openButton: "Send an open application →",
  },
};

export default function WerkenBijPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  const heroRef = useRef<HTMLElement | null>(null);
  const vacaturesRef = useRef<HTMLElement | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const heroEl = heroRef.current;
    const vacaturesEl = vacaturesRef.current;
    let heroVisible = true;
    let vacaturesVisible = false;
    const update = () => setShowSidebar(!heroVisible && !vacaturesVisible);

    const heroObs = new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }, { threshold: 0.1 });
    const vacObs = new IntersectionObserver(([e]) => { vacaturesVisible = e.isIntersecting; update(); }, { threshold: 0.05 });
    if (heroEl) heroObs.observe(heroEl);
    if (vacaturesEl) vacObs.observe(vacaturesEl);
    return () => { heroObs.disconnect(); vacObs.disconnect(); };
  }, []);

  const scrollToVacatures = (e: React.MouseEvent) => {
    e.preventDefault();
    vacaturesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
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
            <a
              href="#vacatures"
              onClick={scrollToVacatures}
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-its-green/10 hover:bg-its-green/20 border border-its-green/30 text-its-green text-sm font-semibold transition-all"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-its-green text-its-dark text-xs font-bold">{d.vacatures.length}</span>
              <span>{d.heroVacancyCta} {d.vacatures.length} {d.heroVacancyCtaSuffix}, {d.heroVacancyCtaLink}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sticky sidebar (desktop only) */}
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block fixed right-6 top-28 z-30 w-72"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-its-gray-light/30 overflow-hidden">
              <div className="bg-gradient-to-br from-its-dark to-its-deep px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-its-green text-its-dark text-xs font-bold">{d.vacatures.length}</span>
                  <h4 className="text-white font-bold text-sm">{d.sidebarTitle}</h4>
                </div>
                <p className="text-white/60 text-xs">{d.sidebarSubtitle}</p>
              </div>
              <div className="divide-y divide-its-gray-light/20">
                {d.vacatures.map((v) => (
                  <a
                    key={v.title}
                    href="#vacatures"
                    onClick={scrollToVacatures}
                    className="block px-5 py-3 hover:bg-its-warm transition-colors group"
                  >
                    <div className="text-sm font-semibold text-its-charcoal group-hover:text-its-green-dark transition-colors leading-snug">{v.title}</div>
                    <div className="text-[11px] text-its-gray-mid mt-0.5">{v.location}</div>
                  </a>
                ))}
              </div>
              <a
                href="#vacatures"
                onClick={scrollToVacatures}
                className="block px-5 py-3 bg-its-warm text-center text-xs font-semibold text-its-green-dark hover:bg-its-green/10 transition-colors"
              >
                {d.sidebarViewAll}
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Why ITsPeople */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.whyTitle}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                {d.whyP1}
              </p>
              <p className="text-its-gray-mid leading-relaxed mb-6">
                {d.whyP2}
              </p>
              <p className="text-its-gray-mid leading-relaxed">
                {d.whyP3}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src={asset("/images/team-collab.jpg")} alt={locale === "nl" ? "Werken bij ITsPeople" : "Working at ITsPeople"} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-its-charcoal text-center mb-12">{d.benefitsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {d.benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl bg-white border border-its-gray-light/30 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-bold text-white text-lg">{b.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-its-gray-mid text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recente Samen Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-its-charcoal">{d.eventsTitle}</h2>
            <p className="text-its-gray-mid mt-4 leading-relaxed">{d.eventsIntro}</p>
          </motion.div>

          <div className="space-y-12">
            {d.events.map((event, i) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-its-warm rounded-2xl overflow-hidden border border-its-gray-light/30"
              >
                <div className="relative aspect-[21/9] overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-its-dark/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider bg-its-green">{event.eventType}</span>
                      <span className="text-white/80 text-xs font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{event.title}</h3>
                  </div>
                </div>
                <div className="p-8 lg:p-10 space-y-5">
                  <p className="text-its-gray-mid text-lg leading-relaxed">{event.lead}</p>
                  {event.sections.slice(0, 2).map((s) => (
                    <div key={s.heading}>
                      <h4 className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-2">{s.heading}</h4>
                      <p className="text-its-gray-mid leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                  {event.secondaryImage && (
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden my-6">
                      <Image src={event.secondaryImage} alt={`${event.title}, workshop`} fill className="object-cover" />
                    </div>
                  )}
                  {event.sections.slice(2).map((s) => (
                    <div key={s.heading}>
                      <h4 className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-2">{s.heading}</h4>
                      <p className="text-its-gray-mid leading-relaxed">{s.body}</p>
                    </div>
                  ))}
                  {event.closing && (
                    <p className="text-its-charcoal font-semibold leading-relaxed pt-2 border-t border-its-gray-light/30">{event.closing}</p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section ref={vacaturesRef} id="vacatures" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-its-charcoal">{d.vacanciesTitle}</h2>
            <p className="text-its-gray-mid mt-4">{d.vacanciesDesc}</p>
          </motion.div>

          <div className="space-y-6">
            {d.vacatures.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-its-warm rounded-2xl p-8 border border-its-gray-light/30 hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-its-charcoal">{v.title}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/10 text-its-green-dark">{v.type}</span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-its-charcoal/5 text-its-gray-mid">{v.location}</span>
                    </div>
                    <p className="text-its-gray-mid leading-relaxed mb-4">{v.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {v.requirements.map((r) => (
                        <span key={r} className="px-3 py-1 rounded-full text-xs bg-white border border-its-gray-light/30 text-its-gray-mid">{r}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="https://www.joinitspeople.nl/#jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all whitespace-nowrap"
                  >
                    {d.apply}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career site CTA */}
      <section className="py-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{d.careerSiteTitle}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {d.careerSiteDesc}
            </p>
            <a
              href="https://www.joinitspeople.nl/#jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {d.careerSiteButton}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Open sollicitatie */}
      <section className="py-20 bg-its-warm text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.openTitle}</h2>
          <p className="text-its-gray-mid text-lg mb-8">
            {d.openDesc}
          </p>
          <a href="mailto:hr@itspeople.nl" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
            {d.openButton}
          </a>
        </div>
      </section>
    </>
  );
}
