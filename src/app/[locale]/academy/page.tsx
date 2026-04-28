"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

/* ───────── Training Data ───────── */

type Training = {
  name: string;
  price: string;
  duration: string;
  level: "Basis" | "Gevorderd" | "Expert" | "Basic" | "Advanced" | "Professional";
  description: string;
  badge?: "Info-Tech";
};

type Segment = {
  id: string;
  label: string;
  icon: string;
  trainings: Training[];
};

const data = {
  nl: {
    segments: [
      {
        id: "project-management",
        label: "Project Management",
        icon: "📋",
        trainings: [
          { name: "PRINCE2 Foundation & Practitioner", price: "€1.495", duration: "3 dagen", level: "Gevorderd", description: "Behaal je PRINCE2 Foundation én Practitioner certificering in één intensieve training." },
          { name: "Agile / Scrum Master Certificering", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Word gecertificeerd Scrum Master en leer agile teams effectief begeleiden." },
          { name: "IPMA-D Projectmanagement", price: "€1.695", duration: "3 dagen", level: "Gevorderd", description: "De internationaal erkende IPMA-D certificering voor projectmanagers." },
          { name: "Risicomanagement in Projecten", price: "€695", duration: "1 dag", level: "Gevorderd", description: "Identificeer, analyseer en beheers risico's in complexe projectomgevingen." },
        ],
      },
      {
        id: "it-consultancy",
        label: "IT Consultancy & Strategie",
        icon: "💡",
        trainings: [
          { name: "IT Strategy & Business Alignment", price: "€1.895", duration: "3 dagen", level: "Expert", description: "Ontwikkel een IT-strategie die naadloos aansluit bij bedrijfsdoelstellingen. Info-Tech methodologie.", badge: "Info-Tech" },
          { name: "AI Strategy & Roadmap Development", price: "€1.695", duration: "2 dagen", level: "Expert", description: "Ontwerp een pragmatische AI-strategie en implementatie-roadmap voor organisaties." },
          { name: "IT Operating Model Design", price: "€1.495", duration: "2 dagen", level: "Expert", description: "Ontwerp een effectief IT-operating model dat waarde levert aan de business.", badge: "Info-Tech" },
          { name: "IT Governance & Decision-Making", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Implementeer governance-frameworks die betere IT-besluitvorming mogelijk maken." },
          { name: "Trusted Advisor: strategisch klantadvies", price: "€995", duration: "2 dagen", level: "Gevorderd", description: "Ontwikkel de vaardigheden om een strategisch vertrouwde adviseur te worden voor je klanten." },
          { name: "Business Case Development", price: "€895", duration: "1 dag", level: "Gevorderd", description: "Leer overtuigende business cases bouwen die investeringsbeslissingen onderbouwen." },
          { name: "Change Management Professional", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Begeleid organisatieveranderingen succesvol met bewezen change management methoden." },
          { name: "Digital Transformation Leadership", price: "€1.495", duration: "2 dagen", level: "Expert", description: "Leid digitale transformatieprogramma's van strategie tot succesvolle implementatie." },
        ],
      },
      {
        id: "security-compliance",
        label: "Security & Compliance",
        icon: "🔒",
        trainings: [
          { name: "EU AI Act Compliance & Governance", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Begrijp de EU AI Act en implementeer compliant AI-governance binnen je organisatie." },
          { name: "NIS2 Implementation & Readiness", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Bereid je organisatie voor op NIS2-compliance met praktische implementatiestappen." },
          { name: "DORA Compliance voor Financiële Sector", price: "€1.495", duration: "2 dagen", level: "Expert", description: "Implementeer DORA-vereisten voor digitale operationele weerbaarheid in de financiële sector." },
          { name: "IT Risk Management Program", price: "€1.695", duration: "3 dagen", level: "Expert", description: "Bouw een compleet IT-risicomanagementprogramma op basis van het Info-Tech framework.", badge: "Info-Tech" },
          { name: "ISO 27001 Lead Implementer", price: "€2.295", duration: "3 dagen", level: "Expert", description: "Word Lead Implementer voor ISO 27001 informatiebeveiliging managementsystemen." },
          { name: "AVG/GDPR Privacy Officer", price: "€1.495", duration: "2 dagen", level: "Gevorderd", description: "Alle kennis en vaardigheden om als Privacy Officer AVG/GDPR-compliance te waarborgen." },
          { name: "Cybersecurity Awareness Training", price: "€495", duration: "1 dag", level: "Basis", description: "Verhoog het cybersecurity-bewustzijn binnen teams met praktische scenario's en best practices." },
          { name: "AI Risk Management Framework", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Ontwikkel en implementeer een framework voor het beheersen van AI-gerelateerde risico's." },
        ],
      },
      {
        id: "data-ai",
        label: "Data & AI",
        icon: "🤖",
        trainings: [
          { name: "AI Readiness Assessment Workshop", price: "€1.495", duration: "2 dagen", level: "Gevorderd", description: "Beoordeel de AI-gereedheid van je organisatie en definieer concrete vervolgstappen." },
          { name: "Generative AI voor Professionals", price: "€895", duration: "1 dag", level: "Basis", description: "Leer generatieve AI effectief inzetten in je dagelijkse werk voor meer productiviteit." },
          { name: "Agentic AI Design & Implementation", price: "€1.695", duration: "2 dagen", level: "Expert", description: "Ontwerp en implementeer autonome AI-agents die complexe taken zelfstandig uitvoeren." },
          { name: "Data Governance & Quality Management", price: "€1.295", duration: "2 dagen", level: "Gevorderd", description: "Implementeer data governance en zorg voor betrouwbare, kwalitatieve data in je organisatie." },
          { name: "AI Compliance Strategy Development", price: "€1.495", duration: "2 dagen", level: "Expert", description: "Ontwikkel een strategie die AI-innovatie combineert met volledige compliance." },
          { name: "Responsible AI Governance", price: "€1.095", duration: "2 dagen", level: "Gevorderd", description: "Implementeer verantwoord AI-gebruik met ethische kaders en governance-structuren." },
          { name: "Data-Driven Decision Making", price: "€795", duration: "1 dag", level: "Basis", description: "Neem betere beslissingen door data effectief te analyseren en te interpreteren." },
        ],
      },
      {
        id: "presenteren-communicatie",
        label: "Presenteren & Communicatie",
        icon: "🎤",
        trainings: [
          { name: "Storytelling met Data", price: "€695", duration: "1 dag", level: "Basis", description: "Vertaal complexe data naar overtuigende verhalen die je publiek in beweging brengen." },
          { name: "Executive Presenting & Board Communication", price: "€995", duration: "2 dagen", level: "Expert", description: "Presenteer met impact op C-level en in bestuurskamers." },
          { name: "Klantcommunicatie & Stakeholder Management", price: "€795", duration: "1 dag", level: "Gevorderd", description: "Verbeter je klantcommunicatie en manage stakeholders effectief." },
        ],
      },
    ],
    badgeColors: { "Info-Tech": { bg: "bg-blue-100", text: "text-blue-700" } },
    badgeLabels: { "Info-Tech": "Info-Tech Partner" },
    levelColors: {
      "Basis": "bg-green-100 text-green-700",
      "Gevorderd": "bg-blue-100 text-blue-700",
      "Expert": "bg-purple-100 text-purple-700",
    },
    tracks: [
      {
        level: "Senior Consultant Advanced",
        color: "from-its-green-dark to-its-green-mid",
        modules: ["Strategisch Advies", "Trusted Advisor", "Business Case Development", "Change Management Advanced", "Stakeholder Management Senior"],
        description: "Voor ervaren consultants die hun strategische adviesvaardigheden naar het hoogste niveau willen brengen.",
      },
      {
        level: "Programma Management",
        color: "from-its-green-mid to-its-green",
        modules: ["IPMA & Prince2", "Programma Governance", "Finance & Budgettering", "Risk Management Advanced", "Benefits Realization"],
        description: "De complete leerroute voor het managen van complexe programma's en portfolio's.",
      },
      {
        level: "Medior Consultant",
        color: "from-its-green to-its-lime",
        modules: ["AI & Data Strategie", "Klantwaarde Creëren", "Stakeholder Management", "Risk Management", "Data Governance Basics"],
        description: "Verdieping en verbreding voor consultants die klaar zijn voor de volgende stap.",
      },
      {
        level: "ERP & Cloud Specialist",
        color: "from-its-lime to-its-green",
        modules: ["Cloud Foundations", "Requirements Analyse", "ERP Implementatie", "Stakeholder Management", "Risk Management"],
        description: "Specialisatie in cloud-migraties en ERP-implementaties voor technisch georiënteerde consultants.",
      },
    ],
    events: [
      { month: "Jan", icon: "🥂", name: "Nieuwjaarsreceptie" },
      { month: "Apr", icon: "🌷", name: "SpringSamen" },
      { month: "Jun", icon: "☀️", name: "SummerSamen" },
      { month: "Sep", icon: "👨‍👩‍👧‍👦", name: "FamilyDay" },
      { month: "Okt", icon: "🍂", name: "AutumnSamen" },
      { month: "Dec", icon: "🎄", name: "XmasSamen" },
    ],
    baselineModules: [
      "Welkom & Collega's", "Kennis Delen", "Communicatie & Insights",
      "Feedback & Speak Up", "Deliver as Promised", "Presenteren",
      "Klantbegrip", "Match Your Message",
    ],
    heroLabel: "ITs Academy",
    heroTitle: "Groei · Ontwikkeling ·",
    heroTitleHighlight: "Excellentie",
    heroDesc: "De ITs Academy investeert continu in de ontwikkeling van onze consultants. Van onboarding tot senior level, gestructureerde learning tracks die professionals naar het volgende niveau brengen.",
    philosophyTitle: "Onze filosofie",
    philosophyP1: "Bij ITsPeople geloven wij dat de beste consultants nooit uitgeleerd zijn. Daarom investeren wij structureel in de ontwikkeling van onze mensen. De ITs Academy biedt een compleet programma van trainingen, coaching en praktijkervaring.",
    philosophyP2: "Elke consultant volgt een persoonlijk ontwikkelpad dat aansluit bij hun ervaring, ambities en de behoeften van onze klanten. Van soft skills tot vakinhoudelijke verdieping, van individuele coaching tot groepstrainingen.",
    philosophyP3: "Het resultaat: professionals die niet alleen excellent zijn in hun vak, maar ook in staat zijn om het verschil te maken voor onze klanten.",
    trainingLabel: "Trainingsaanbod",
    trainingHeading: "Professionele Trainingen & Certificeringen",
    trainingDesc: "Van projectmanagement tot AI, van security tot presentatievaardigheden, ontdek ons complete aanbod van {count} trainingen.",
    enrollButton: "Inschrijven",
    incompanyLabel: "In-Company",
    incompanyTitle: "Alle trainingen ook op maat, bij u op locatie",
    incompanyDesc: "Elke training uit ons aanbod is ook beschikbaar als in-company variant. Wij passen het programma aan op uw organisatie, uw uitdagingen en uw team. Training op locatie, op het moment dat het u uitkomt.",
    incompanyBullet1: "Maatwerk inhoud afgestemd op uw praktijk",
    incompanyBullet2: "Flexibele planning, bij u op locatie",
    incompanyBullet3: "Gecertificeerde trainers met praktijkervaring",
    incompanyBullet4: "Combineer met andere trainingen voor maximaal effect",
    incompanyButton: "Vraag offerte aan →",
    incompanyDiscount: "10% korting",
    incompanyPackageDesc: "Boek 5 of meer trainingen en ontvang 10% korting op het totale pakket. Combineer trainingen uit verschillende segmenten voor een op maat samengesteld ontwikkelprogramma.",
    baselineTitle: "Onboarding Baseline",
    baselineDesc: "Elke nieuwe consultant start met onze baseline. Dit fundament zorgt ervoor dat iedereen de ITsPeople-manier van werken beheerst, van kennisdeling tot klantcommunicatie.",
    tracksTitle: "Learning Tracks",
    tracksDesc: "Vier gespecialiseerde leerroutes voor verschillende carrièrepaden binnen ITsPeople.",
    eventsTitle: "Samen Events",
    eventsDesc: "Het hele jaar door organiseren wij evenementen om onze mensen samen te brengen, te inspireren en te vieren.",
    ctaHeading: "Wil jij groeien bij ITsPeople?",
    ctaDesc: "De ITs Academy staat klaar om jou te begeleiden in je professionele ontwikkeling. Bekijk onze vacatures en ontdek wat wij te bieden hebben.",
    ctaButton: "Bekijk vacatures →",
    minRead: "min read",
  },
  en: {
    segments: [
      {
        id: "project-management",
        label: "Project Management",
        icon: "📋",
        trainings: [
          { name: "PRINCE2 Foundation & Practitioner", price: "€1.495", duration: "3 days", level: "Advanced", description: "Achieve your PRINCE2 Foundation and Practitioner certification in one intensive training." },
          { name: "Agile / Scrum Master Certification", price: "€1.295", duration: "2 days", level: "Advanced", description: "Become a certified Scrum Master and learn to guide agile teams effectively." },
          { name: "IPMA-D Project Management", price: "€1.695", duration: "3 days", level: "Advanced", description: "The internationally recognised IPMA-D certification for project managers." },
          { name: "Risk Management in Projects", price: "€695", duration: "1 day", level: "Advanced", description: "Identify, analyse and manage risks in complex project environments." },
        ],
      },
      {
        id: "it-consultancy",
        label: "IT Consultancy & Strategy",
        icon: "💡",
        trainings: [
          { name: "IT Strategy & Business Alignment", price: "€1.895", duration: "3 days", level: "Professional", description: "Develop an IT strategy that seamlessly aligns with business objectives. Info-Tech methodology.", badge: "Info-Tech" },
          { name: "AI Strategy & Roadmap Development", price: "€1.695", duration: "2 days", level: "Professional", description: "Design a pragmatic AI strategy and implementation roadmap for organisations." },
          { name: "IT Operating Model Design", price: "€1.495", duration: "2 days", level: "Professional", description: "Design an effective IT operating model that delivers value to the business.", badge: "Info-Tech" },
          { name: "IT Governance & Decision-Making", price: "€1.295", duration: "2 days", level: "Advanced", description: "Implement governance frameworks that enable better IT decision-making." },
          { name: "Trusted Advisor: Strategic Client Advisory", price: "€995", duration: "2 days", level: "Advanced", description: "Develop the skills to become a strategic trusted advisor to your clients." },
          { name: "Business Case Development", price: "€895", duration: "1 day", level: "Advanced", description: "Learn to build compelling business cases that underpin investment decisions." },
          { name: "Change Management Professional", price: "€1.295", duration: "2 days", level: "Advanced", description: "Guide organisational change successfully with proven change management methods." },
          { name: "Digital Transformation Leadership", price: "€1.495", duration: "2 days", level: "Professional", description: "Lead digital transformation programmes from strategy to successful implementation." },
        ],
      },
      {
        id: "security-compliance",
        label: "Security & Compliance",
        icon: "🔒",
        trainings: [
          { name: "EU AI Act Compliance & Governance", price: "€1.295", duration: "2 days", level: "Advanced", description: "Understand the EU AI Act and implement compliant AI governance within your organisation." },
          { name: "NIS2 Implementation & Readiness", price: "€1.295", duration: "2 days", level: "Advanced", description: "Prepare your organisation for NIS2 compliance with practical implementation steps." },
          { name: "DORA Compliance for Financial Sector", price: "€1.495", duration: "2 days", level: "Professional", description: "Implement DORA requirements for digital operational resilience in the financial sector." },
          { name: "IT Risk Management Programme", price: "€1.695", duration: "3 days", level: "Professional", description: "Build a complete IT risk management programme based on the Info-Tech framework.", badge: "Info-Tech" },
          { name: "ISO 27001 Lead Implementer", price: "€2.295", duration: "3 days", level: "Professional", description: "Become a Lead Implementer for ISO 27001 information security management systems." },
          { name: "GDPR Privacy Officer", price: "€1.495", duration: "2 days", level: "Advanced", description: "All the knowledge and skills to ensure GDPR compliance as a Privacy Officer." },
          { name: "Cybersecurity Awareness Training", price: "€495", duration: "1 day", level: "Basic", description: "Raise cybersecurity awareness within teams with practical scenarios and best practices." },
          { name: "AI Risk Management Framework", price: "€1.295", duration: "2 days", level: "Advanced", description: "Develop and implement a framework for managing AI-related risks." },
        ],
      },
      {
        id: "data-ai",
        label: "Data & AI",
        icon: "🤖",
        trainings: [
          { name: "AI Readiness Assessment Workshop", price: "€1.495", duration: "2 days", level: "Advanced", description: "Assess your organisation's AI readiness and define concrete next steps." },
          { name: "Generative AI for Professionals", price: "€895", duration: "1 day", level: "Basic", description: "Learn to use generative AI effectively in your daily work for greater productivity." },
          { name: "Agentic AI Design & Implementation", price: "€1.695", duration: "2 days", level: "Professional", description: "Design and implement autonomous AI agents that execute complex tasks independently." },
          { name: "Data Governance & Quality Management", price: "€1.295", duration: "2 days", level: "Advanced", description: "Implement data governance and ensure reliable, high-quality data in your organisation." },
          { name: "AI Compliance Strategy Development", price: "€1.495", duration: "2 days", level: "Professional", description: "Develop a strategy that combines AI innovation with full compliance." },
          { name: "Responsible AI Governance", price: "€1.095", duration: "2 days", level: "Advanced", description: "Implement responsible AI use with ethical frameworks and governance structures." },
          { name: "Data-Driven Decision Making", price: "€795", duration: "1 day", level: "Basic", description: "Make better decisions by effectively analysing and interpreting data." },
        ],
      },
      {
        id: "presenteren-communicatie",
        label: "Presenting & Communication",
        icon: "🎤",
        trainings: [
          { name: "Storytelling with Data", price: "€695", duration: "1 day", level: "Basic", description: "Translate complex data into compelling stories that move your audience." },
          { name: "Executive Presenting & Board Communication", price: "€995", duration: "2 days", level: "Professional", description: "Present with impact at C-level and in boardrooms." },
          { name: "Client Communication & Stakeholder Management", price: "€795", duration: "1 day", level: "Advanced", description: "Improve your client communication and manage stakeholders effectively." },
        ],
      },
    ],
    badgeColors: { "Info-Tech": { bg: "bg-blue-100", text: "text-blue-700" } },
    badgeLabels: { "Info-Tech": "Info-Tech Partner" },
    levelColors: {
      "Basic": "bg-green-100 text-green-700",
      "Advanced": "bg-blue-100 text-blue-700",
      "Professional": "bg-purple-100 text-purple-700",
    },
    tracks: [
      {
        level: "Senior Consultant Advanced",
        color: "from-its-green-dark to-its-green-mid",
        modules: ["Strategic Advisory", "Trusted Advisor", "Business Case Development", "Advanced Change Management", "Senior Stakeholder Management"],
        description: "For experienced consultants who want to take their strategic advisory skills to the highest level.",
      },
      {
        level: "Programme Management",
        color: "from-its-green-mid to-its-green",
        modules: ["IPMA & Prince2", "Programme Governance", "Finance & Budgeting", "Advanced Risk Management", "Benefits Realisation"],
        description: "The complete learning route for managing complex programmes and portfolios.",
      },
      {
        level: "Medior Consultant",
        color: "from-its-green to-its-lime",
        modules: ["AI & Data Strategy", "Creating Client Value", "Stakeholder Management", "Risk Management", "Data Governance Basics"],
        description: "Deepen and broaden your skills for consultants ready for the next step.",
      },
      {
        level: "ERP & Cloud Specialist",
        color: "from-its-lime to-its-green",
        modules: ["Cloud Foundations", "Requirements Analysis", "ERP Implementation", "Stakeholder Management", "Risk Management"],
        description: "Specialisation in cloud migrations and ERP implementations for technically-oriented consultants.",
      },
    ],
    events: [
      { month: "Jan", icon: "🥂", name: "New Year Reception" },
      { month: "Apr", icon: "🌷", name: "Spring Together" },
      { month: "Jun", icon: "☀️", name: "Summer Together" },
      { month: "Sep", icon: "👨‍👩‍👧‍👦", name: "Family Day" },
      { month: "Oct", icon: "🍂", name: "Autumn Together" },
      { month: "Dec", icon: "🎄", name: "Christmas Together" },
    ],
    baselineModules: [
      "Welcome & Colleagues", "Knowledge Sharing", "Communication & Insights",
      "Feedback & Speak Up", "Deliver as Promised", "Presenting",
      "Client Understanding", "Match Your Message",
    ],
    heroLabel: "ITs Academy",
    heroTitle: "Growth · Development ·",
    heroTitleHighlight: "Excellence",
    heroDesc: "ITs Academy continuously invests in the development of our consultants. From onboarding to senior level, structured learning tracks that take professionals to the next level.",
    philosophyTitle: "Our Philosophy",
    philosophyP1: "At ITsPeople, we believe that the best consultants are never done learning. That's why we continuously invest in the development of our people. ITs Academy offers a complete programme of training, coaching and practical experience.",
    philosophyP2: "Every consultant follows a personal development path that matches their experience, ambitions and our clients' needs. From soft skills to technical deepening, from individual coaching to group training.",
    philosophyP3: "The result: professionals who are not only excellent in their field, but also able to make a difference for our clients.",
    trainingLabel: "Training Offering",
    trainingHeading: "Professional Training & Certifications",
    trainingDesc: "From project management to AI, from security to presentation skills, discover our complete offering of {count} trainings.",
    enrollButton: "Enrol",
    incompanyLabel: "In-Company",
    incompanyTitle: "All trainings also available on-site, tailored to your needs",
    incompanyDesc: "Every training from our offering is also available as an in-company variant. We tailor the programme to your organisation, your challenges and your team. Training on-site, at the time that suits you.",
    incompanyBullet1: "Bespoke content tailored to your practice",
    incompanyBullet2: "Flexible scheduling, on-site at your location",
    incompanyBullet3: "Certified trainers with practical experience",
    incompanyBullet4: "Combine trainings for maximum impact",
    incompanyButton: "Request quote →",
    incompanyDiscount: "10% discount",
    incompanyPackageDesc: "Book 5 or more trainings and receive 10% discount on the total package. Combine trainings from different segments for a custom-designed development programme.",
    baselineTitle: "Onboarding Baseline",
    baselineDesc: "Every new consultant starts with our baseline. This foundation ensures everyone masters the ITsPeople way of working, from knowledge sharing to client communication.",
    tracksTitle: "Learning Tracks",
    tracksDesc: "Four specialised learning routes for different career paths within ITsPeople.",
    eventsTitle: "Together Events",
    eventsDesc: "Throughout the year we organise events to bring our people together, inspire and celebrate.",
    ctaHeading: "Do you want to grow at ITsPeople?",
    ctaDesc: "ITs Academy is ready to guide you in your professional development. View our vacancies and discover what we have to offer.",
    ctaButton: "View vacancies →",
    minRead: "min read",
  },
};

/* ───────── Component ───────── */

export default function AcademyPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  const [activeSegment, setActiveSegment] = useState(d.segments[0].id);
  const active = d.segments.find((s) => s.id === activeSegment) ?? d.segments[0];

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

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.philosophyTitle}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                {d.philosophyP1}
              </p>
              <p className="text-its-gray-mid leading-relaxed mb-6">
                {d.philosophyP2}
              </p>
              <p className="text-its-gray-mid leading-relaxed">
                {d.philosophyP3}
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src={asset("/images/team-work.jpg")} alt="ITs Academy training" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRAININGSAANBOD ═══════════ */}
      <section className="py-20 bg-white" id="trainingen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#78BE20] text-sm font-semibold tracking-wider uppercase">{d.trainingLabel}</span>
            <h2 className="text-3xl font-bold text-[#3E3E35] mt-2">{d.trainingHeading}</h2>
            <p className="text-its-gray-mid mt-4 max-w-2xl mx-auto">
              {d.trainingDesc.replace("{count}", d.segments.reduce((sum, s) => sum + s.trainings.length, 0).toString())}
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {d.segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(seg.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSegment === seg.id
                    ? "bg-[#4A7729] text-white shadow-lg shadow-[#4A7729]/25"
                    : "bg-its-warm text-[#3E3E35] hover:bg-[#78BE20]/20"
                }`}
              >
                <span className="mr-1.5">{seg.icon}</span>
                {seg.label}
              </button>
            ))}
          </div>

          {/* Training Cards Grid */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {active.trainings.map((t) => (
              <div
                key={t.name}
                className="relative bg-white rounded-2xl border border-its-gray-light/30 p-6 hover:shadow-lg hover:border-[#78BE20]/40 transition-all duration-300 flex flex-col"
              >
                {/* Top row: badge + level */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {t.badge && (
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${(d.badgeColors as Record<string, { bg: string; text: string }>)[t.badge].bg} ${(d.badgeColors as Record<string, { bg: string; text: string }>)[t.badge].text}`}>
                      {(d.badgeLabels as Record<string, string>)[t.badge]}
                    </span>
                  )}
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${(d.levelColors as Record<string, string>)[t.level]}`}>
                    {t.level}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                    {t.duration}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-[#3E3E35] text-lg mb-2 leading-snug">{t.name}</h3>

                {/* Description */}
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4 flex-1">{t.description}</p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-its-gray-light/30">
                  <span className="text-2xl font-bold text-[#4A7729]">{t.price}</span>
                  <Link
                    href={locale === "nl" ? `/contact?training=${encodeURIComponent(t.name)}` : `/en/contact?training=${encodeURIComponent(t.name)}`}
                    className="px-5 py-2.5 rounded-lg bg-[#4A7729] hover:bg-[#3d6422] text-white text-sm font-semibold transition-colors duration-300"
                  >
                    {d.enrollButton}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ IN-COMPANY ═══════════ */}
      <section className="py-16 bg-gradient-to-br from-[#4A7729] to-[#3d6422]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#78BE20] text-sm font-semibold tracking-wider uppercase">{d.incompanyLabel}</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">{d.incompanyTitle}</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                {d.incompanyDesc}
              </p>
              <ul className="space-y-3 text-white/80 text-sm mb-8">
                <li className="flex items-center gap-2"><span className="text-[#78BE20]">✓</span> {d.incompanyBullet1}</li>
                <li className="flex items-center gap-2"><span className="text-[#78BE20]">✓</span> {d.incompanyBullet2}</li>
                <li className="flex items-center gap-2"><span className="text-[#78BE20]">✓</span> {d.incompanyBullet3}</li>
                <li className="flex items-center gap-2"><span className="text-[#78BE20]">✓</span> {d.incompanyBullet4}</li>
              </ul>
              <Link
                href={locale === "nl" ? "/contact?type=incompany" : "/en/contact?type=incompany"}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#4A7729] font-semibold hover:bg-[#78BE20] hover:text-white transition-all duration-300"
              >
                {d.incompanyButton}
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <div className="text-center">
                  <span className="text-5xl">🎯</span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">{locale === "nl" ? "In-Company Pakket" : "In-Company Package"}</h3>
                  <p className="text-white/70 text-sm mb-6">{locale === "nl" ? "Boek 5 of meer trainingen en ontvang" : "Book 5 or more trainings and receive"}</p>
                  <div className="bg-[#78BE20] text-white text-4xl font-black py-4 rounded-xl mb-4">
                    {d.incompanyDiscount}
                  </div>
                  <p className="text-white/60 text-sm">{d.incompanyPackageDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onboarding Baseline */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-its-dark to-its-deep rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">🎓 {d.baselineTitle}</h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
              {d.baselineDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {d.baselineModules.map((mod, i) => {
                const colors = [
                  "from-its-green-dark to-its-green-mid",
                  "from-its-green-mid to-its-green",
                  "from-its-green to-its-lime",
                  "from-its-lime to-its-green",
                  "from-its-green-mid to-its-lime",
                  "from-its-green-dark to-its-green",
                  "from-its-lime to-its-green-mid",
                  "from-its-green to-its-green-dark",
                ];
                return (
                <div key={mod} className={`px-4 py-3 rounded-xl bg-gradient-to-br ${colors[i % colors.length]} text-white font-medium text-sm text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                  {mod}
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Tracks */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-its-charcoal">{d.tracksTitle}</h2>
            <p className="text-its-gray-mid mt-4 max-w-xl mx-auto">
              {d.tracksDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {d.tracks.map((track, i) => (
              <motion.div key={track.level} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative bg-white rounded-2xl p-8 border border-its-gray-light/30 hover:shadow-lg transition-all duration-500">
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${track.color}`} />
                <h3 className="font-bold text-its-charcoal text-xl mb-2">{track.level}</h3>
                <p className="text-its-gray-mid text-sm mb-6">{track.description}</p>
                <div className="space-y-2">
                  {track.modules.map((mod) => (
                    <div key={mod} className="flex items-center gap-3 text-sm text-its-gray-mid">
                      <span className="w-1.5 h-1.5 rounded-full bg-its-green flex-shrink-0" />
                      {mod}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Samen Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-its-charcoal">{d.eventsTitle}</h2>
            <p className="text-its-gray-mid mt-4 max-w-xl mx-auto">
              {d.eventsDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {d.events.map((event, i) => (
              <motion.div key={event.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center p-4 rounded-xl bg-its-warm border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-md transition-all duration-300">
                <span className="text-2xl block mb-2">{event.icon}</span>
                <p className="text-xs font-bold text-its-green uppercase tracking-wider mb-1">{event.month}</p>
                <p className="text-sm font-semibold text-its-charcoal">{event.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {["/images/team-sept-1.jpg", "/images/team-sept-2.jpg", "/images/team-sept-3.jpg"].map((img, i) => (
              <motion.div key={img} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src={asset(img)} alt={locale === "nl" ? "Samen Event" : "Together Event"} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-its-warm text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.ctaHeading}</h2>
          <p className="text-its-gray-mid text-lg mb-8">
            {d.ctaDesc}
          </p>
          <Link href={locale === "nl" ? "/werken-bij" : "/en/careers"} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300">
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
