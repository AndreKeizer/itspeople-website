"use client";

import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { image: "/images/services/business-consultancy.jpg", title: "Business Consultancy", desc: "Van strategie naar beheersing en meetbare resultaten." },
  { image: "/images/services/project-management.jpg", title: "Project Management", desc: "Complexe verandertrajecten van begin tot eind realiseren." },
  { image: "/images/services/process-management.jpg", title: "Proces Management", desc: "Services, processen, governance en IT optimaliseren." },
  { image: "/images/services/data-management.jpg", title: "Data Management", desc: "Structuur, kwaliteit, visualisatie en data-gedreven inzichten." },
  { image: "/images/services/quality-assurance.jpg", title: "Testen & Quality Assurance", desc: "Risicobeheersing door professionele quality assurance." },
  { image: "/images/services/ai-governance.jpg", title: "AI Governance & Strategy", desc: "Enterprise AI transformatie met compliance-first approach voor regulated industries." },
];

const cases = [
  { sector: "Financiële Sector", title: "AI-enhanced digitale transformatie", result: "40% efficiency door intelligente processen", image: "/images/team-discussion.jpg" },
  { sector: "Overheid", title: "AI Act + NIS2 compliance framework", result: "100% regulatory compliant AI governance", image: "/images/team-office.jpg" },
  { sector: "Zorg", title: "AI governance & data intelligence UMC", result: "€27M programme met AI-driven insights", image: "/images/team-sept-1.jpg" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Stats />

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-its-gray-light/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="text-3xl font-bold text-its-green mb-2">150+</div>
              <div className="text-its-gray-mid text-sm">Succesvolle projecten</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center">
              <div className="text-3xl font-bold text-its-green mb-2">95%</div>
              <div className="text-its-gray-mid text-sm">Client satisfaction</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-center">
              <div className="text-3xl font-bold text-its-green mb-2">€80M+</div>
              <div className="text-its-gray-mid text-sm">Programme value delivered</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center">
              <div className="text-3xl font-bold text-its-green mb-2">10+</div>
              <div className="text-its-gray-mid text-sm">Years expertise</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Onze Expertise</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">Van strategie naar <span className="gradient-text">meetbaar succes</span></h2>
            <p className="text-its-gray-mid text-xl leading-relaxed">End-to-end transformatie met bewezen methodieken. Van boardroom strategie tot hands-on implementatie.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href="/diensten" className="block rounded-2xl bg-white border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 cursor-pointer overflow-hidden">
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
            <Link href="/diensten" className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              Bekijk al onze diensten →
            </Link>
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">Bewezen <span className="gradient-text">resultaat</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {cases.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href="/cases" className="block group rounded-2xl overflow-hidden bg-its-warm border border-its-gray-light/20 hover:shadow-lg transition-all duration-500 cursor-pointer">
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
            <Link href="/cases" className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              Bekijk alle cases →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Intelligence & Governance Section */}
      <section className="py-28 bg-its-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">AI & Intelligent Automation</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">Enterprise AI met <span className="bg-gradient-to-r from-its-green to-green-300 bg-clip-text text-transparent">governance excellence</span></h2>
            <p className="text-gray-300 text-xl leading-relaxed">Van AI strategy tot €M programme delivery in highly regulated environments. Compliance-first, resultaat-gedreven.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Strategy & Roadmapping</h3>
              <p className="text-gray-300 leading-relaxed">Enterprise AI transformation roadmaps met compliance-first approach voor regulated industries. Van boardroom strategie tot hands-on implementation.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Governance & Compliance</h3>
              <p className="text-gray-300 leading-relaxed">AI Act + NIS2 compliant AI governance frameworks. Risk management, ethical AI guidelines en audit-ready AI systems voor enterprise omgevingen.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-its-green/10 to-its-green/5 backdrop-blur-sm rounded-2xl p-8 border border-its-green/20">
              <div className="w-16 h-16 bg-its-green/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-its-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Implementation & Integration</h3>
              <p className="text-gray-300 leading-relaxed">Custom AI solutions geïntegreerd met ERP systems (Oracle/SAP). ML-driven business intelligence en process automation voor measurable impact.</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-its-green/10 via-its-green/5 to-its-green/10 rounded-3xl p-8 md:p-12 text-center border border-its-green/20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI Readiness Assessment</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Ontdek uw AI transformation potential. Comprehensive assessment van AI maturity, compliance readiness en ROI projectie voor uw AI initiatives.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tools" className="inline-flex items-center gap-2 bg-its-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-its-green-dark transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Start AI Assessment
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  AI Strategy Gesprek
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-gray-400 text-sm mb-4">Trusted by leading organizations for AI transformation</p>
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
              <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Over ITsPeople</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
                Duurzame verandering loopt over de <span className="gradient-text">as van de mens</span>
              </h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                Wij zijn een organisatieadviesbureau waarbij de mens centraal staat. Het zijn namelijk de mensen die het verschil maken en duurzame verandering creëren.
              </p>

              <div className="relative pl-6 border-l-4 border-its-green mb-8 py-2">
                <p className="text-its-charcoal italic text-lg leading-relaxed font-medium">
                  &ldquo;Wij geloven dat duurzame verandering altijd over de as van de mens loopt.&rdquo;
                </p>
                <p className="text-its-gray-mid text-sm mt-3">— André Keizer, Founder &amp; Managing Partner</p>
              </div>

              <Link href="/over-ons" className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
                Lees meer over ons →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thought Leadership Preview */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Insights & Research</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">Thought <span className="gradient-text">leadership</span></h2>
            <p className="text-its-gray-mid text-lg leading-relaxed">Onze experts delen hun kennis over digitale transformatie, cybersecurity en organisatieverandering.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/insights" className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/ai-technology.jpg" alt="AI & Enterprise Architecture" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">AI & Automation</span>
                  <span className="text-its-gray-mid text-xs">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">AI Governance in Regulated Industries</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">Compliance-first AI implementation voor enterprise organisaties in justice & security sectoren...</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  Lees verder →
                </div>
              </Link>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Link href="/insights" className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/cybersecurity.jpg" alt="NIS2 Compliance" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">Cybersecurity</span>
                  <span className="text-its-gray-mid text-xs">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">NIS2 Compliance: Praktische Implementatie</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">Een stap-voor-stap gids naar volledige NIS2 compliance voor Nederlandse organisaties...</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  Lees verder →
                </div>
              </Link>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link href="/insights" className="block group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl mb-4 overflow-hidden relative border border-its-green/10">
                  <Image src="/images/insights/data-strategy.jpg" alt="Data-Driven Decision Making" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/60 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-its-green/10 text-xs font-semibold text-its-green-dark">Data Strategy</span>
                  <span className="text-its-gray-mid text-xs">6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-its-charcoal mb-2 group-hover:text-its-green transition-colors">Data-Driven Decision Making in 2026</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">Waarom organisaties die niet data-gedreven opereren de concurrentiestrijd verliezen...</p>
                <div className="flex items-center gap-2 text-its-green-dark text-sm font-semibold group-hover:text-its-green transition-colors">
                  Lees verder →
                </div>
              </Link>
            </motion.article>
          </div>

          <div className="text-center">
            <Link href="/insights" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-green/5 border border-its-green/20 text-its-green-dark font-semibold hover:bg-its-green/10 hover:border-its-green/30 transition-all">
              Alle insights & research →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="py-28 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Assessment Tools</span>
            <h2 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">Meet uw <span className="gradient-text">transformation readiness</span></h2>
            <p className="text-its-gray-mid text-xl leading-relaxed">Gratis tools om de digitale maturiteit van uw organisatie te beoordelen.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative">
                  <Image src="/images/tools/digital-transformation.jpg" alt="Digital Transformation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-its-green/80 to-its-green-dark/80" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-its-charcoal mb-1">Digital Transformation Readiness</h3>
                  <p className="text-its-gray-mid text-sm">5 minuten • Gepersonaliseerd rapport</p>
                </div>
              </div>
              <p className="text-its-gray-mid leading-relaxed mb-6">Ontdek hoe klaar uw organisatie is voor digitale transformatie. Krijg concrete aanbevelingen en benchmark uw positie tegen de markt.</p>
              <Link href="/tools" className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                Start Assessment
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl border border-its-gray-light/30 hover:border-its-green/30 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative">
                  <Image src="/images/tools/compliance-security.jpg" alt="NIS2 Compliance" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-its-green/80 to-its-green-dark/80" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-its-charcoal mb-1">NIS2 Compliance Check</h3>
                  <p className="text-its-gray-mid text-sm">3 minuten • Direct resultaat</p>
                </div>
              </div>
              <p className="text-its-gray-mid leading-relaxed mb-6">Controleer uw NIS2 compliance status en krijg een geprioriteerde actieplan voor volledige compliance binnen de gestelde termijnen.</p>
              <Link href="/tools" className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                Check Compliance
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
                    <h3 className="text-xl font-bold text-white mb-1">AI Readiness Assessment</h3>
                    <p className="text-gray-300 text-sm">7 minuten • AI strategy rapport</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">Bepaal uw AI transformation potential. Comprehensive assessment van AI maturity, compliance readiness en ROI projectie voor enterprise AI initiatives.</p>
                <Link href="/tools" className="block w-full py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/25 group-hover:scale-[1.02] text-center">
                  Start AI Assessment
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/tools" className="inline-flex items-center gap-2 text-its-green-dark font-semibold hover:text-its-green transition-colors">
              Alle assessment tools →
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/building.jpg" alt="ITsPeople kantoor" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-its-dark/95 via-its-dark/90 to-its-dark/95" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-white">
              Transformeer uw organisatie met <span className="gradient-text">ITsPeople</span>
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              Van strategie tot implementatie. Wij maken complexe digitale transformaties succesvol.
            </p>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              150+ succesvolle projecten • €80M+ programme value • 95% client satisfaction
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-bold mb-2">Gratis Consultatie</h3>
              <p className="text-white/60 text-sm mb-4">30 minuten strategiegesprek met onze experts</p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-all">
                Plan gesprek
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 md:scale-105 md:border-its-green/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-white font-bold mb-2">Quick Assessment</h3>
              <p className="text-white/60 text-sm mb-4">Ontdek uw transformation readiness in 5 minuten</p>
              <Link href="/tools" className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all">
                Start nu
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-white font-bold mb-2">Case Studies</h3>
              <p className="text-white/60 text-sm mb-4">Zie hoe wij anderen succesvol hebben geholpen</p>
              <Link href="/cases" className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold transition-all">
                Bekijk cases
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center">
            <p className="text-white/40 text-sm mb-4">Vertrouwd door leading organisaties</p>
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
