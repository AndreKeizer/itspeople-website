"use client";

import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const data = {
  nl: {
    services: [
      { image: "/images/services/business-consultancy.jpg", title: "Business Consultancy", desc: "Van strategie naar beheersing en meetbare resultaten." },
      { image: "/images/services/project-management.jpg", title: "Project Management", desc: "Complexe verandertrajecten van begin tot eind realiseren." },
      { image: "/images/services/process-management.jpg", title: "Proces Management", desc: "Services, processen, governance en IT optimaliseren." },
      { image: "/images/services/data-management.jpg", title: "Data Management", desc: "Structuur, kwaliteit, visualisatie en data-gedreven inzichten." },
      { image: "/images/services/quality-assurance.jpg", title: "Testen & Quality Assurance", desc: "Risicobeheersing door professionele quality assurance." },
      { image: "/images/services/ai-governance.jpg", title: "AI Governance & Strategy", desc: "Enterprise AI transformatie met compliance-first approach voor regulated industries." },
    ],
    cases: [
      { sector: "Financiële Sector", title: "AI-enhanced digitale transformatie", result: "40% efficiency door intelligente processen", image: "/images/team-discussion.jpg" },
      { sector: "Overheid", title: "AI Act + NIS2 compliance framework", result: "100% regulatory compliant AI governance", image: "/images/team-office.jpg" },
      { sector: "Zorg", title: "AI governance & data intelligence UMC", result: "€27M programme met AI-driven insights", image: "/images/team-sept-1.jpg" },
    ],
    indicators: [
      { stat: "150+", label: "Succesvolle projecten" },
      { stat: "95%", label: "Client satisfaction" },
      { stat: "€80M+", label: "Programme value delivered" },
      { stat: "10+", label: "Years expertise" },
    ],
    expertiseLabel: "Onze Expertise",
    expertiseHeading: "Van strategie naar",
    expertiseHeadingHighlight: "meetbaar succes",
    expertiseDescription: "End-to-end transformatie met bewezen methodieken. Van boardroom strategie tot hands-on implementatie.",
    servicesLink: "Bekijk al onze diensten →",
    casesLabel: "Case Studies",
    casesHeading: "Bewezen",
    casesHeadingHighlight: "resultaat",
    casesLink: "Bekijk alle cases →",
    aiLabel: "AI & Intelligent Automation",
    aiHeading: "Enterprise AI met",
    aiHeadingHighlight: "governance excellence",
    aiDescription: "Van AI strategy tot €M programme delivery in highly regulated environments. Compliance-first, resultaat-gedreven.",
    aiStrategy: "AI Strategy & Roadmapping",
    aiStrategyDesc: "Enterprise AI transformation roadmaps met compliance-first approach voor regulated industries. Van boardroom strategie tot hands-on implementation.",
    aiGovernance: "AI Governance & Compliance",
    aiGovernanceDesc: "AI Act + NIS2 compliant AI governance frameworks. Risk management, ethical AI guidelines en audit-ready AI systems voor enterprise omgevingen.",
    aiImplementation: "AI Implementation & Integration",
    aiImplementationDesc: "Custom AI solutions geïntegreerd met ERP systems (Oracle/SAP). ML-driven business intelligence en process automation voor measurable impact.",
    aiReadinessHeading: "AI Readiness Assessment",
    aiReadinessDescription: "Ontdek uw AI transformation potential. Comprehensive assessment van AI maturity, compliance readiness en ROI projectie voor uw AI initiatives.",
    aiAssessmentButton: "Start AI Assessment",
    aiStrategyButton: "AI Strategy Gesprek",
    aiTrustedLabel: "Trusted by leading organizations for AI transformation",
    aboutLabel: "Over ITsPeople",
    aboutHeading: "Duurzame verandering loopt over de",
    aboutHeadingHighlight: "as van de mens",
    aboutText: "Wij zijn een organisatieadviesbureau waarbij de mens centraal staat. Het zijn namelijk de mensen die het verschil maken en duurzame verandering creëren.",
    aboutQuote: "Wij geloven dat duurzame verandering altijd over de as van de mens loopt.",
    aboutQuoteAuthor: "— André Keizer, Founder & Managing Partner",
    aboutLink: "Lees meer over ons →",
    insightsLabel: "Insights & Research",
    insightsHeading: "Thought",
    insightsHeadingHighlight: "leadership",
    insightsDescription: "Onze experts delen hun kennis over digitale transformatie, cybersecurity en organisatieverandering.",
    insightArticle1Tag: "AI & Automation",
    insightArticle1Title: "AI Governance in Regulated Industries",
    insightArticle1Desc: "Compliance-first AI implementation voor enterprise organisaties in justice & security sectoren...",
    insightArticle2Tag: "Cybersecurity",
    insightArticle2Title: "NIS2 Compliance: Praktische Implementatie",
    insightArticle2Desc: "Een stap-voor-stap gids naar volledige NIS2 compliance voor Nederlandse organisaties...",
    insightArticle3Tag: "Data Strategy",
    insightArticle3Title: "Data-Driven Decision Making in 2026",
    insightArticle3Desc: "Waarom organisaties die niet data-gedreven opereren de concurrentiestrijd verliezen...",
    readMore: "Lees verder →",
    insightsLink: "Alle insights & research →",
    toolsLabel: "Assessment Tools",
    toolsHeading: "Meet uw",
    toolsHeadingHighlight: "transformation readiness",
    toolsDescription: "Gratis tools om de digitale maturiteit van uw organisatie te beoordelen.",
    digitalTransformationTitle: "Digital Transformation Readiness",
    digitalTransformationDesc: "Ontdek hoe klaar uw organisatie is voor digitale transformatie. Krijg concrete aanbevelingen en benchmark uw positie tegen de markt.",
    nis2ComplianceTitle: "NIS2 Compliance Check",
    nis2ComplianceDesc: "Controleer uw NIS2 compliance status en krijg een geprioriteerde actieplan voor volledige compliance binnen de gestelde termijnen.",
    aiReadinessToolTitle: "AI Readiness Assessment",
    aiReadinessToolDesc: "Bepaal uw AI transformation potential. Comprehensive assessment van AI maturity, compliance readiness en ROI projectie voor enterprise AI initiatives.",
    startAssessment: "Start Assessment",
    checkCompliance: "Check Compliance",
    startAIAssessment: "Start AI Assessment",
    toolsLink: "Alle assessment tools →",
    ctaHeading: "Transformeer uw organisatie met",
    ctaHeadingHighlight: "ITsPeople",
    ctaDescription: "Van strategie tot implementatie. Wij maken complexe digitale transformaties succesvol.",
    ctaStats: "150+ succesvolle projecten • €80M+ programme value • 95% client satisfaction",
    freeConsultation: "Gratis Consultatie",
    freeConsultationDesc: "30 minuten strategiegesprek met onze experts",
    planTalk: "Plan gesprek",
    quickAssessment: "Quick Assessment",
    quickAssessmentDesc: "Ontdek uw transformation readiness in 5 minuten",
    startNow: "Start nu",
    caseStudies: "Case Studies",
    caseStudiesDesc: "Zie hoe wij anderen succesvol hebben geholpen",
    viewCases: "Bekijk cases",
    trustedLabel: "Vertrouwd door leading organisaties",
  },
  en: {
    services: [
      { image: "/images/services/business-consultancy.jpg", title: "Business Consultancy", desc: "From strategy to control and measurable results." },
      { image: "/images/services/project-management.jpg", title: "Project Management", desc: "Deliver complex transformation programmes from start to finish." },
      { image: "/images/services/process-management.jpg", title: "Process Management", desc: "Optimise services, processes, governance and IT." },
      { image: "/images/services/data-management.jpg", title: "Data Management", desc: "Structure, quality, visualisation and data-driven insights." },
      { image: "/images/services/quality-assurance.jpg", title: "Testing & Quality Assurance", desc: "Risk management through professional quality assurance." },
      { image: "/images/services/ai-governance.jpg", title: "AI Governance & Strategy", desc: "Enterprise AI transformation with compliance-first approach for regulated industries." },
    ],
    cases: [
      { sector: "Financial Sector", title: "AI-enhanced digital transformation", result: "40% efficiency through intelligent processes", image: "/images/team-discussion.jpg" },
      { sector: "Public Sector", title: "AI Act + NIS2 compliance framework", result: "100% regulatory compliant AI governance", image: "/images/team-office.jpg" },
      { sector: "Healthcare", title: "AI governance & data intelligence UMC", result: "€27M programme with AI-driven insights", image: "/images/team-sept-1.jpg" },
    ],
    indicators: [
      { stat: "150+", label: "Successful projects" },
      { stat: "95%", label: "Client satisfaction" },
      { stat: "€80M+", label: "Programme value delivered" },
      { stat: "10+", label: "Years of expertise" },
    ],
    expertiseLabel: "Our Expertise",
    expertiseHeading: "From strategy to",
    expertiseHeadingHighlight: "measurable success",
    expertiseDescription: "End-to-end transformation with proven methodologies. From boardroom strategy to hands-on implementation.",
    servicesLink: "View all our services →",
    casesLabel: "Case Studies",
    casesHeading: "Proven",
    casesHeadingHighlight: "results",
    casesLink: "View all cases →",
    aiLabel: "AI & Intelligent Automation",
    aiHeading: "Enterprise AI with",
    aiHeadingHighlight: "governance excellence",
    aiDescription: "From AI strategy to €M programme delivery in highly regulated environments. Compliance-first, results-driven.",
    aiStrategy: "AI Strategy & Roadmapping",
    aiStrategyDesc: "Enterprise AI transformation roadmaps with compliance-first approach for regulated industries. From boardroom strategy to hands-on implementation.",
    aiGovernance: "AI Governance & Compliance",
    aiGovernanceDesc: "AI Act + NIS2 compliant AI governance frameworks. Risk management, ethical AI guidelines and audit-ready AI systems for enterprise environments.",
    aiImplementation: "AI Implementation & Integration",
    aiImplementationDesc: "Custom AI solutions integrated with ERP systems (Oracle/SAP). ML-driven business intelligence and process automation for measurable impact.",
    aiReadinessHeading: "AI Readiness Assessment",
    aiReadinessDescription: "Discover your AI transformation potential. Comprehensive assessment of AI maturity, compliance readiness and ROI projection for your AI initiatives.",
    aiAssessmentButton: "Start AI Assessment",
    aiStrategyButton: "AI Strategy Conversation",
    aiTrustedLabel: "Trusted by leading organisations for AI transformation",
    aboutLabel: "About ITsPeople",
    aboutHeading: "Sustainable change runs through the",
    aboutHeadingHighlight: "heart of people",
    aboutText: "We are an organisational consultancy where people are central. It is people who make the difference and create sustainable change.",
    aboutQuote: "We believe that sustainable change always runs through the heart of people.",
    aboutQuoteAuthor: "— André Keizer, Founder & Managing Partner",
    aboutLink: "Read more about us →",
    insightsLabel: "Insights & Research",
    insightsHeading: "Thought",
    insightsHeadingHighlight: "leadership",
    insightsDescription: "Our experts share their knowledge on digital transformation, cybersecurity and organisational change.",
    insightArticle1Tag: "AI & Automation",
    insightArticle1Title: "AI Governance in Regulated Industries",
    insightArticle1Desc: "Compliance-first AI implementation for enterprise organisations in justice & security sectors...",
    insightArticle2Tag: "Cybersecurity",
    insightArticle2Title: "NIS2 Compliance: Practical Implementation",
    insightArticle2Desc: "A step-by-step guide to full NIS2 compliance for Dutch organisations...",
    insightArticle3Tag: "Data Strategy",
    insightArticle3Title: "Data-Driven Decision Making in 2026",
    insightArticle3Desc: "Why organisations that don't operate data-driven lose the competitive battle...",
    readMore: "Read more →",
    insightsLink: "All insights & research →",
    toolsLabel: "Assessment Tools",
    toolsHeading: "Assess your",
    toolsHeadingHighlight: "transformation readiness",
    toolsDescription: "Free tools to evaluate the digital maturity of your organisation.",
    digitalTransformationTitle: "Digital Transformation Readiness",
    digitalTransformationDesc: "Discover how ready your organisation is for digital transformation. Get concrete recommendations and benchmark your position against the market.",
    nis2ComplianceTitle: "NIS2 Compliance Check",
    nis2ComplianceDesc: "Check your NIS2 compliance status and get a prioritised action plan for full compliance within the set timelines.",
    aiReadinessToolTitle: "AI Readiness Assessment",
    aiReadinessToolDesc: "Determine your AI transformation potential. Comprehensive assessment of AI maturity, compliance readiness and ROI projection for enterprise AI initiatives.",
    startAssessment: "Start Assessment",
    checkCompliance: "Check Compliance",
    startAIAssessment: "Start AI Assessment",
    toolsLink: "All assessment tools →",
    ctaHeading: "Transform your organisation with",
    ctaHeadingHighlight: "ITsPeople",
    ctaDescription: "From strategy to implementation. We make complex digital transformations successful.",
    ctaStats: "150+ successful projects • €80M+ programme value • 95% client satisfaction",
    freeConsultation: "Free Consultation",
    freeConsultationDesc: "30-minute strategy conversation with our experts",
    planTalk: "Schedule conversation",
    quickAssessment: "Quick Assessment",
    quickAssessmentDesc: "Discover your transformation readiness in 5 minutes",
    startNow: "Start now",
    caseStudies: "Case Studies",
    caseStudiesDesc: "See how we have helped others succeed",
    viewCases: "View cases",
    trustedLabel: "Trusted by leading organisations",
  },
};

export default function Home() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <>
      <Hero />
      <Clients />
      <Stats />

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-its-gray-light/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            {d.indicators.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-bold text-its-green mb-2">{ind.stat}</div>
                <div className="text-its-gray-mid text-sm">{ind.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.expertiseLabel}</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">{d.expertiseHeading} <span className="gradient-text">{d.expertiseHeadingHighlight}</span></h2>
            <p className="text-its-gray-mid text-xl leading-relaxed">{d.expertiseDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {d.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={locale === "nl" ? "/diensten" : "/en/services"} className="block rounded-2xl bg-white border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-its-gray-mid text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href={locale === "nl" ? "/diensten" : "/en/services"} className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              {d.servicesLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.casesLabel}</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">{d.casesHeading} <span className="gradient-text">{d.casesHeadingHighlight}</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {d.cases.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={locale === "nl" ? "/cases" : "/en/cases"} className="block group rounded-2xl overflow-hidden bg-its-warm border border-its-gray-light/20 hover:shadow-lg transition-all duration-500 cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-its-green/90 text-xs font-semibold text-white">{c.sector}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-its-charcoal mb-2">{c.title}</h3>
                    <span className="px-3 py-1 rounded-lg bg-its-green/5 border border-its-green/15 text-sm font-semibold text-its-green-dark">{c.result}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href={locale === "nl" ? "/cases" : "/en/cases"} className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              {d.casesLink}
            </Link>
          </div>
        </div>
      </section>

      {/* AI Intelligence & Governance Section */}
      <section className="py-28 bg-its-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.aiLabel}</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">{d.aiHeading} <span className="bg-gradient-to-r from-its-green to-green-300 bg-clip-text text-transparent">{d.aiHeadingHighlight}</span></h2>
            <p className="text-gray-300 text-xl leading-relaxed">{d.aiDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{d.aiStrategy}</h3>
              <p className="text-gray-300 leading-relaxed">{d.aiStrategyDesc}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{d.aiGovernance}</h3>
              <p className="text-gray-300 leading-relaxed">{d.aiGovernanceDesc}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{d.aiImplementation}</h3>
              <p className="text-gray-300 leading-relaxed">{d.aiImplementationDesc}</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-its-green/10 via-its-green/5 to-its-green/10 rounded-3xl p-8 md:p-12 text-center border border-its-green/20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{d.aiReadinessHeading}</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{d.aiReadinessDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="inline-flex items-center gap-2 bg-its-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-its-green-dark transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {d.aiAssessmentButton}
                </Link>
                <Link href={locale === "nl" ? "/contact" : "/en/contact"} className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {d.aiStrategyButton}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-gray-400 text-sm mb-4">{d.aiTrustedLabel}</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <span className="text-white font-semibold">UMC Utrecht</span>
                <span className="text-white font-semibold">CAK</span>
                <span className="text-white font-semibold">RVO</span>
                <span className="text-white font-semibold">Geldmaat</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-28 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/founders-together.jpg" alt="André Keizer & Mario Kornuijt" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-lg">André Keizer & Mario Kornuijt</p>
                  <p className="text-white/60 text-sm">Founders ITsPeople</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.aboutLabel}</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
                {d.aboutHeading} <span className="gradient-text">{d.aboutHeadingHighlight}</span>
              </h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                {d.aboutText}
              </p>

              <div className="relative pl-6 border-l-4 border-its-green mb-8 py-2">
                <p className="text-its-charcoal italic text-lg leading-relaxed font-medium">
                  &ldquo;{d.aboutQuote}&rdquo;
                </p>
                <p className="text-its-gray-mid text-sm mt-3">{d.aboutQuoteAuthor}</p>
              </div>

              <Link href={locale === "nl" ? "/over-ons" : "/en/about"} className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
                {d.aboutLink}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Preview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.insightsLabel}</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">{d.insightsHeading} <span className="gradient-text">{d.insightsHeadingHighlight}</span></h2>
            <p className="text-its-gray-mid text-lg leading-relaxed">{d.insightsDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href={locale === "nl" ? "/insights" : "/en/insights"} className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/ai-technology.jpg" alt="AI & Enterprise Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">{d.insightArticle1Tag}</span>
                  <span className="text-its-gray-mid text-xs">{locale === "nl" ? "5 min read" : "5 min read"}</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">{d.insightArticle1Title}</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">{d.insightArticle1Desc}</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  {d.readMore}
                </div>
              </Link>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Link href={locale === "nl" ? "/insights" : "/en/insights"} className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/cybersecurity.jpg" alt="NIS2 Compliance" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">{d.insightArticle2Tag}</span>
                  <span className="text-its-gray-mid text-xs">{locale === "nl" ? "7 min read" : "7 min read"}</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">{d.insightArticle2Title}</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">{d.insightArticle2Desc}</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  {d.readMore}
                </div>
              </Link>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link href={locale === "nl" ? "/insights" : "/en/insights"} className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/data-strategy.jpg" alt="Data-Driven Decision Making" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">{d.insightArticle3Tag}</span>
                  <span className="text-its-gray-mid text-xs">{locale === "nl" ? "6 min read" : "6 min read"}</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">{d.insightArticle3Title}</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">{d.insightArticle3Desc}</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  {d.readMore}
                </div>
              </Link>
            </motion.article>
          </div>

          <div className="text-center">
            <Link href={locale === "nl" ? "/insights" : "/en/insights"} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green/5 border border-its-green/20 text-its-green-dark font-semibold hover:bg-its-green/10 hover:border-its-green/30 transition-all">
              {d.insightsLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="py-28 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.toolsLabel}</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">{d.toolsHeading} <span className="gradient-text">{d.toolsHeadingHighlight}</span></h2>
            <p className="text-its-gray-mid text-xl leading-relaxed">{d.toolsDescription}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative">
                  <Image src="/images/tools/digital-transformation.jpg" alt="Digital Transformation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-its-green/80 to-its-green-dark/80" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-its-charcoal mb-1">{d.digitalTransformationTitle}</h3>
                  <p className="text-its-gray-mid text-sm">{locale === "nl" ? "5 minuten • Gepersonaliseerd rapport" : "5 minutes • Personalised report"}</p>
                </div>
              </div>
              <p className="text-its-gray-mid leading-relaxed mb-6">{d.digitalTransformationDesc}</p>
              <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                {d.startAssessment}
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative">
                  <Image src="/images/tools/compliance-security.jpg" alt="NIS2 Compliance" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-its-green/80 to-its-green-dark/80" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-its-charcoal mb-1">{d.nis2ComplianceTitle}</h3>
                  <p className="text-its-gray-mid text-sm">{locale === "nl" ? "3 minuten • Direct resultaat" : "3 minutes • Instant results"}</p>
                </div>
              </div>
              <p className="text-its-gray-mid leading-relaxed mb-6">{d.nis2ComplianceDesc}</p>
              <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                {d.checkCompliance}
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-its-charcoal to-its-dark p-8 rounded-2xl border border-its-green/20 hover:border-its-green/40 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-its-green/5 to-its-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-its-green/20 flex items-center justify-center backdrop-blur-sm border border-its-green/30">
                    <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{d.aiReadinessToolTitle}</h3>
                    <p className="text-gray-300 text-sm">{locale === "nl" ? "7 minuten • AI strategy rapport" : "7 minutes • AI strategy report"}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{d.aiReadinessToolDesc}</p>
                <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                  {d.startAIAssessment}
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              {d.toolsLink}
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/building.jpg" alt={locale === "nl" ? "ITsPeople kantoor" : "ITsPeople office"} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-its-dark/95 via-its-dark/90 to-its-dark/95" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-white">
              {d.ctaHeading} <span className="gradient-text">{d.ctaHeadingHighlight}</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              {d.ctaDescription}
            </p>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              {d.ctaStats}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-bold mb-2">{d.freeConsultation}</h3>
              <p className="text-white/60 text-sm mb-4">{d.freeConsultationDesc}</p>
              <Link href={locale === "nl" ? "/contact" : "/en/contact"} className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-all">
                {d.planTalk}
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 md:scale-105 md:border-its-green/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-white font-bold mb-2">{d.quickAssessment}</h3>
              <p className="text-white/60 text-sm mb-4">{d.quickAssessmentDesc}</p>
              <Link href={locale === "nl" ? "/tools" : "/en/tools"} className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all">
                {d.startNow}
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-white font-bold mb-2">{d.caseStudies}</h3>
              <p className="text-white/60 text-sm mb-4">{d.caseStudiesDesc}</p>
              <Link href={locale === "nl" ? "/cases" : "/en/cases"} className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-all">
                {d.viewCases}
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
            <p className="text-white/40 text-sm mb-4">{d.trustedLabel}</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <span className="text-white text-lg font-semibold">CAK</span>
              <span className="text-white text-lg font-semibold">RVO</span>
              <span className="text-white text-lg font-semibold">UMC Utrecht</span>
              <span className="text-white text-lg font-semibold">Geldmaat</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
