"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const data = {
  nl: {
    founders: [
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
    ],
    team: [
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
    ],
    values: [
      { title: "Persoonlijk", description: "Samenwerken door mensen te verbinden vanuit authenticiteit.", icon: "🤝" },
      { title: "Deskundig", description: "Experts die gedreven zijn en focussen op blijvend resultaat.", icon: "🎯" },
      { title: "Inspirerend", description: "Inzichten delen, enthousiasme overdragen, mensen meenemen.", icon: "✨" },
    ],
    heroLabel: "Over ITsPeople",
    heroTitle: "Duurzame verandering loopt over de",
    heroTitleHighlight: "as van de mens",
    heroDesc: "Wij zijn een organisatieadviesbureau waarbij de mens centraal staat. Het zijn namelijk de mensen die het verschil maken en duurzame verandering creëren.",
    storyTitle: "Ons verhaal",
    storyP1: "ITsPeople is ontstaan vanuit de overtuiging dat technologie alleen waarde creëert wanneer mensen centraal staan. Onze founders André Keizer en Mario Kornuijt zagen hoe transformatieprojecten vastliepen, niet door technische beperkingen, maar door onvoldoende aandacht voor de menselijke factor.",
    storyP2: "Van financiële sector tot overheid, van zorg tot industrie, wij verbinden organisatie, mensen en technologie met elkaar richting een succesvolle transformatie. Met onze unieke aanpak richten wij ons op strategie-implementatie en het realiseren van complexe transformaties.",
    storyP3: "Vandaag de dag is ITsPeople een groeiend team van ervaren consultants, projectmanagers en specialisten die allemaal één ding gemeen hebben: de drive om het verschil te maken.",
    valuesTitle: "Onze waarden",
    foundersLabel: "De Founders",
    foundersTitle: "De mensen achter ITsPeople",
    founderQuote: "Wij geloven dat duurzame verandering altijd over de as van de mens loopt.",
    foundersText: "Founders ITsPeople",
    teamLabel: "Ons Team",
    teamTitle: "De mensen die het",
    teamTitleHighlight: "verschil maken",
    teamSubtitle: "Expertise, diversiteit en samenwerking",
    wishTitle: "Trotse partner van Make-A-Wish",
    wishDesc: "Wij geloven in het verschil maken, ook buiten onze projecten. Als trotse partner van Make-A-Wish dragen wij bij aan het vervullen van de wensen van ernstig zieke kinderen. Omdat het verschil maken in ons DNA zit.",
    joinCTA: "Wil jij ook het verschil maken?",
    joinButton: "Bekijk onze vacatures →",
  },
  en: {
    founders: [
      {
        name: "André Keizer",
        role: "Founder & Managing Partner",
        image: "/images/andre-casual.jpg",
        quote: "Sustainable change always runs through the heart of people.",
        specialties: ["Strategy", "Transformation", "Leadership"],
        bio: "André is the driving force behind ITsPeople. With more than 15 years' experience guiding complex transformations, he combines strategic insight with a deep-rooted conviction that people make the difference. His expertise lies at the intersection of organisational strategy, change management and leadership.",
      },
      {
        name: "Mario Kornuijt",
        role: "Co-Founder & Managing Partner",
        image: "/images/mario-casual.jpg",
        quote: "Complex transformations require simple solutions.",
        specialties: ["Business Consultancy", "Governance", "Client Relations"],
        bio: "Mario brings years of experience in business consultancy and governance. He believes in the power of simplicity, even with the most complex issues. His talent for building trusting relationships with clients makes him an indispensable key to ITsPeople's success.",
      },
    ],
    team: [
      {
        name: "Alev Kokus",
        role: "Senior Project Manager",
        image: "/images/alev-kokus.jpg",
        quote: "Structure and connection, that's where the best project results come from.",
        specialties: ["Project Management", "Stakeholder Management", "Governance"],
      },
      {
        name: "René Massaut",
        role: "Head of Sales",
        image: "/images/rene-massaut.jpg",
        quote: "Building trust starts with truly listening to the client.",
        specialties: ["Sales", "Business Development", "Client Relations"],
      },
      {
        name: "Melissa Crijns",
        role: "Head of Talent Acquisition",
        image: "/images/melissa-crijns.jpg",
        quote: "Finding the right people starts with understanding the organisation.",
        specialties: ["Talent Acquisition", "Recruitment", "Employer Branding"],
      },
    ],
    values: [
      { title: "Personal", description: "Collaborate by connecting people with authenticity.", icon: "🤝" },
      { title: "Skilled", description: "Experts who are driven and focus on lasting results.", icon: "🎯" },
      { title: "Inspiring", description: "Share insights, convey enthusiasm, bring people along.", icon: "✨" },
    ],
    heroLabel: "About ITsPeople",
    heroTitle: "Sustainable change runs through the",
    heroTitleHighlight: "heart of people",
    heroDesc: "We are an organisational consultancy where people are central. It is people who make the difference and create sustainable change.",
    storyTitle: "Our Story",
    storyP1: "ITsPeople was founded on the conviction that technology only creates value when people are at the centre. Our founders André Keizer and Mario Kornuijt saw how transformation projects got stuck, not because of technical limitations, but because of insufficient attention to the human factor.",
    storyP2: "From the financial sector to government, from healthcare to industry, we connect organisations, people and technology towards successful transformation. With our unique approach, we focus on strategy implementation and delivering complex transformations.",
    storyP3: "Today, ITsPeople is a growing team of experienced consultants, project managers and specialists who all share one thing: the drive to make a difference.",
    valuesTitle: "Our Values",
    foundersLabel: "The Founders",
    foundersTitle: "The people behind ITsPeople",
    founderQuote: "We believe that sustainable change always runs through the heart of people.",
    foundersText: "Founders ITsPeople",
    teamLabel: "Our Team",
    teamTitle: "The people who",
    teamTitleHighlight: "make the difference",
    teamSubtitle: "Expertise, diversity and collaboration",
    wishTitle: "Proud partner of Make-A-Wish",
    wishDesc: "We believe in making a difference, even beyond our projects. As a proud partner of Make-A-Wish, we help fulfil the wishes of seriously ill children. Because making a difference is in our DNA.",
    joinCTA: "Do you want to make a difference too?",
    joinButton: "View our vacancies →",
  },
};

export default function OverOnsPage() {
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

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-its-charcoal mb-6">{d.storyTitle}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
                {d.storyP1}
              </p>
              <p className="text-its-gray-mid leading-relaxed mb-6">
                {d.storyP2}
              </p>
              <p className="text-its-gray-mid leading-relaxed">
                {d.storyP3}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/building.jpg" alt={locale === "nl" ? "ITsPeople kantoor" : "ITsPeople office"} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-its-charcoal text-center mb-12">{d.valuesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {d.values.map((v) => (
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
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.foundersLabel}</span>
            <h2 className="text-4xl font-bold mt-4 text-its-charcoal">{d.foundersTitle}</h2>
          </motion.div>

          {/* Together photo */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-16">
            <Image src="/images/founders-together.jpg" alt="André Keizer & Mario Kornuijt" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-its-dark/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
              <div>
                <p className="text-white font-bold text-xl mb-1">André Keizer & Mario Kornuijt</p>
                <p className="text-white/60 text-sm">{d.foundersText}</p>
              </div>
              <p className="text-white/50 text-sm italic hidden sm:block max-w-md text-right">
                &ldquo;{d.founderQuote}&rdquo;
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {d.founders.map((f, i) => (
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
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.teamLabel}</span>
            <h2 className="text-4xl font-bold mt-4 text-its-charcoal">{d.teamTitle} <span className="gradient-text">{d.teamTitleHighlight}</span></h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12">
            <Image src="/images/team-women.jpg" alt={locale === "nl" ? "Team ITsPeople" : "ITsPeople Team"} fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">{locale === "nl" ? "Het Team" : "The Team"}</p>
              <p className="text-white/60 text-sm">{d.teamSubtitle}</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {d.team.map((m, i) => (
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
              <h3 className="font-bold text-xl text-its-charcoal mb-2">{d.wishTitle}</h3>
              <p className="text-its-gray-mid leading-relaxed">
                {d.wishDesc}
              </p>
            </div>
          </motion.div>

          {/* Join CTA */}
          <div className="text-center mt-16">
            <p className="text-its-gray-mid mb-4">{d.joinCTA}</p>
            <Link href={locale === "nl" ? "/werken-bij" : "/en/careers"} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
              {d.joinButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
