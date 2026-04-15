"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "André Keizer",
    role: "Founder & Managing Partner",
    image: "/images/andre-casual.jpg",
    quote: "Duurzame verandering loopt altijd over de as van de mens.",
    specialties: ["Strategie", "Transformatie", "Leiderschap"],
    bio: "André is de drijvende kracht achter ITsPeople. Met meer dan 15 jaar ervaring in het begeleiden van complexe transformaties combineert hij strategisch inzicht met een diepgewortelde overtuiging dat mensen het verschil maken. Zijn expertise ligt op het snijvlak van organisatiestrategie, verandermanagement en leiderschap.",
  },
  {
    name: "Mario Kornuijt",
    role: "Co-Founder & Managing Partner",
    image: "/images/mario-casual.jpg",
    quote: "Complexe transformaties vragen om eenvoudige oplossingen.",
    specialties: ["Business Consultancy", "Governance", "Klantrelaties"],
    bio: "Mario brengt jarenlange ervaring mee in business consultancy en governance. Hij gelooft in de kracht van eenvoud, zelfs bij de meest complexe vraagstukken. Zijn talent voor het opbouwen van vertrouwensrelaties met klanten maakt hem een onmisbare schakel in het succes van ITsPeople.",
  },
];

const team = [
  {
    name: "Alev Kokus",
    role: "Senior Projectmanager",
    image: "/images/alev-kokus.jpg",
    quote: "Structuur en verbinding, daar ontstaan de beste projectresultaten.",
    specialties: ["Projectmanagement", "Stakeholder Management", "Governance"],
  },
  {
    name: "René Massaut",
    role: "Head of Sales",
    image: "/images/rene-massaut.jpg",
    quote: "Vertrouwen opbouwen begint bij écht luisteren naar de klant.",
    specialties: ["Sales", "Business Development", "Klantrelaties"],
  },
  {
    name: "Melissa Crijns",
    role: "Head of Talent Acquisition",
    image: "/images/melissa-crijns.jpg",
    quote: "De juiste mensen vinden begint bij het begrijpen van de organisatie.",
    specialties: ["Talent Acquisition", "Recruitment", "Employer Branding"],
  },
];

const values = [
  { title: "Persoonlijk", description: "Samenwerken door mensen te verbinden vanuit authenticiteit.", icon: "🤝" },
  { title: "Deskundig", description: "Experts die gedreven zijn en focussen op blijvend resultaat.", icon: "🎯" },
  { title: "Inspirerend", description: "Inzichten delen, enthousiasme overdragen, mensen meenemen.", icon: "✨" },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Over ITsPeople</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Duurzame verandering loopt over de <span className="gradient-text">as van de mens</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Wij zijn een organisatieadviesbureau waarbij de mens centraal staat. Het zijn namelijk de mensen die het verschil maken en duurzame verandering creëren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">Ons verhaal</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                ITsPeople is ontstaan vanuit de overtuiging dat technologie alleen waarde creëert wanneer mensen centraal staan. Onze founders André Keizer en Mario Kornuijt zagen hoe transformatieprojecten vastliepen, niet door technische beperkingen, maar door onvoldoende aandacht voor de menselijke factor.
              </p>
              <p className="text-its-gray-mid leading-relaxed mb-6">
                Van financiële sector tot overheid, van zorg tot industrie, wij verbinden organisatie, mensen en technologie met elkaar richting een succesvolle transformatie. Met onze unieke aanpak richten wij ons op strategie-implementatie en het realiseren van complexe transformaties.
              </p>
              <p className="text-its-gray-mid leading-relaxed">
                Vandaag de dag is ITsPeople een groeiend team van ervaren consultants, projectmanagers en specialisten die allemaal één ding gemeen hebben: de drive om het verschil te maken.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/building.jpg" alt="ITsPeople kantoor" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-its-charcoal text-center mb-12">Onze waarden</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-8 rounded-2xl bg-white border border-its-gray-light/30">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="font-bold text-xl text-its-charcoal mb-2">{v.title}</h3>
                <p className="text-its-gray-mid leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">De Founders</span>
            <h2 className="text-4xl font-bold mt-4 text-its-charcoal">De mensen achter ITsPeople</h2>
          </motion.div>

          {/* Together photo */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-16">
            <Image src="/images/founders-together.jpg" alt="André Keizer & Mario Kornuijt" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-its-dark/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
              <div>
                <p className="text-white font-bold text-xl mb-1">André Keizer & Mario Kornuijt</p>
                <p className="text-white/60 text-sm">Founders ITsPeople</p>
              </div>
              <p className="text-white/50 text-sm italic hidden sm:block max-w-md text-right">
                &ldquo;Wij geloven dat duurzame verandering altijd over de as van de mens loopt.&rdquo;
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {founders.map((f, i) => (
              <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                  <Image src={f.image} alt={f.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-sm italic">&ldquo;{f.quote}&rdquo;</p>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-its-charcoal mb-1">{f.name}</h3>
                <p className="text-its-green-dark font-medium text-sm mb-3">{f.role}</p>
                <p className="text-its-gray-mid text-sm leading-relaxed mb-4">{f.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {f.specialties.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/5 text-its-green-dark border border-its-green/10">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Ons Team</span>
            <h2 className="text-4xl font-bold mt-4 text-its-charcoal">De mensen die het <span className="gradient-text">verschil maken</span></h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12">
            <Image src="/images/team-women.jpg" alt="Team ITsPeople" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">Het Team</p>
              <p className="text-white/60 text-sm">Expertise, diversiteit en samenwerking</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-sm italic">&ldquo;{m.quote}&rdquo;</p>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-its-charcoal mb-1">{m.name}</h3>
                <p className="text-its-green-dark font-medium text-sm mb-3">{m.role}</p>
                <div className="flex flex-wrap gap-2">
                  {m.specialties.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/5 text-its-green-dark border border-its-green/10">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Make-A-Wish */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 flex items-center gap-6 p-8 rounded-2xl bg-white border border-its-gray-light/30">
            <span className="text-5xl">⭐</span>
            <div>
              <h3 className="font-bold text-xl text-its-charcoal mb-2">Trotse partner van Make-A-Wish</h3>
              <p className="text-its-gray-mid leading-relaxed">
                Wij geloven in het verschil maken, ook buiten onze projecten. Als trotse partner van Make-A-Wish dragen wij bij aan het vervullen van de wensen van ernstig zieke kinderen. Omdat het verschil maken in ons DNA zit.
              </p>
            </div>
          </motion.div>

          {/* Join CTA */}
          <div className="text-center mt-16">
            <p className="text-its-gray-mid mb-4">Wil jij ook het verschil maken?</p>
            <Link href="/werken-bij" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
              Bekijk onze vacatures →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
