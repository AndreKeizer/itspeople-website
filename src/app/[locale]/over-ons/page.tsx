"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    founders: [
      {
        name: "André Keizer",
        role: "Founder & Programmadirecteur Transformaties",
        image: asset("/images/team/andre-keizer.jpg"),
        quote: "Duurzame verandering loopt altijd over de as van de mens.",
        specialties: ["Strategie", "Transformatie", "Leiderschap"],
        bio: "André is de drijvende kracht achter ITsPeople. Met meer dan 15 jaar ervaring in het begeleiden van complexe transformaties combineert hij strategisch inzicht met een diepgewortelde overtuiging dat mensen het verschil maken. Zijn expertise ligt op het snijvlak van organisatiestrategie, verandermanagement en leiderschap.",
      },
      {
        name: "Mario Kornuijt",
        role: "Co-Founder & Programmadirecteur Transformaties",
        image: asset("/images/team/mario-kornuijt.jpg"),
        quote: "Complexe transformaties vragen om eenvoudige oplossingen.",
        specialties: ["Business Consultancy", "Governance", "Klantrelaties"],
        bio: "Mario brengt jarenlange ervaring mee in business consultancy en governance. Hij gelooft in de kracht van eenvoud, zelfs bij de meest complexe vraagstukken. Zijn talent voor het opbouwen van vertrouwensrelaties met klanten maakt hem een onmisbare schakel in het succes van ITsPeople.",
      },
    ],
    team: [
      { name: "André Keizer", role: "Founder & Programmadirecteur Transformaties", image: asset("/images/team/andre-keizer.jpg"), specialties: ["Strategie", "Transformatie", "Leiderschap"] },
      { name: "Mario Kornuijt", role: "Co-Founder & Programmadirecteur Transformaties", image: asset("/images/team/mario-kornuijt.jpg"), specialties: ["Business Consultancy", "Governance", "Klantrelaties"] },
      { name: "Geert Eikelboom", role: "Lid Raad van Advies · CEO (gepensioneerd)", image: asset("/images/team/geert-eikelboom.jpg"), specialties: ["Strategie", "Leiderschap", "Governance"] },
      { name: "Melissa Crijns", role: "Head of Talent Acquisition & HR", image: asset("/images/team/melissa-crijns.png"), specialties: ["Talent Acquisition", "HR", "Employer Branding"] },
      { name: "Olav Bleijenberg", role: "Principal Business Consultant", image: asset("/images/team/olav-bleijenberg.jpg"), specialties: ["Strategie", "Business Consultancy", "Transformatie"] },
      { name: "Angelina den Besten", role: "Senior Project & Process Manager", image: asset("/images/team/angelina-den-besten.jpg"), specialties: ["Projectmanagement", "Procesoptimalisatie", "Governance"] },
      { name: "Pieter Pannekeet", role: "Senior Projectmanager", image: asset("/images/team/pieter-pannekeet.jpg"), specialties: ["Projectmanagement", "Stakeholder Management", "Planning & Control"] },
      { name: "Werner Smeenk", role: "Senior Projectmanager", image: asset("/images/team/werner-smeenk.jpg"), specialties: ["Projectmanagement", "Risicomanagement", "Governance"] },
      { name: "Alev Kokus", role: "Projectmanager", image: asset("/images/team/alev-kokus.jpg"), specialties: ["Projectmanagement", "Stakeholder Management", "Governance"] },
      { name: "Manon de Bont", role: "Projectmanager", image: asset("/images/team/manon-de-bont.jpg"), specialties: ["Projectmanagement", "Verandermanagement", "Communicatie"] },
      { name: "Daniel Mulder", role: "Senior Business Consultant", image: asset("/images/team/daniel-mulder.jpg"), specialties: ["Business Analyse", "Transformatie", "Stakeholder Management"] },
      { name: "Ali Mokarram", role: "Business Consultant", image: asset("/images/team/ali-mokarram.jpg"), specialties: ["Business Analyse", "Procesinrichting", "Digitale Transformatie"] },
      { name: "Jordy van der Velde", role: "Business Consultant", image: asset("/images/team/jordy-van-der-velde.jpg"), specialties: ["Business Analyse", "Transformatie", "Ketenregie"] },
      { name: "Loris Cornelissen", role: "Business Consultant", image: asset("/images/team/loris-cornelissen.jpg"), specialties: ["Business Analyse", "Data-analyse", "Implementatie"] },
      { name: "Pip Horsman", role: "Business Consultant", image: asset("/images/team/pip-horsman.jpg"), specialties: ["Business Analyse", "Stakeholder Management", "Agile"] },
      { name: "Rico van Leeuwen", role: "Business Consultant", image: asset("/images/team/rico-van-leeuwen.jpg"), specialties: ["Business Analyse", "Transformatie", "Risicomanagement"] },
      { name: "Stephanie Solingen", role: "Business Consultant", image: asset("/images/team/stephanie-solingen.jpg"), specialties: ["Business Analyse", "Verandermanagement", "Communicatie"] },
      { name: "Jerry de Jong", role: "Junior Business Consultant", image: asset("/images/team/jerry-de-jong.jpg"), specialties: ["Business Analyse", "Data-analyse", "Onderzoek"] },
      { name: "Matthijs Oosterbeek", role: "Data Consultant", image: asset("/images/team/matthijs-oosterbeek.jpg"), specialties: ["Data-architectuur", "Analytics", "BI & Rapportage"] },
      { name: "Mandy van Es", role: "Testmanager", image: asset("/images/team/mandy-van-es.jpg"), specialties: ["Testmanagement", "Kwaliteitsborging", "Agile Testing"] },
      { name: "Sven Visser", role: "Inside Sales Representative", image: asset("/images/team/sven-visser.jpg"), specialties: ["Sales", "Klantrelaties", "Business Development"] },
      { name: "Diana Jane Acuna", role: "Office Manager", image: asset("/images/team/diana-jane-acuna.jpg"), specialties: ["Office Management", "Organisatie", "Facilitair"] },
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
    eventsLabel: "Events & Acties",
    eventsTitle: "Samen het verschil maken, ook buiten onze projecten",
    eventsIntro: "Als trotse partner van Make-A-Wish grijpen wij elke gelegenheid aan om bij te dragen aan de wensen van ernstig zieke kinderen. Van sponsoracties tot fysieke uitdagingen, onze collega's komen graag in beweging voor het goede doel.",
    events: [
      {
        title: "Make-A-Wish Business Challenge, € 10.116 opgehaald",
        date: "2024",
        location: "Amsterdam",
        tag: "Make-A-Wish",
        description: "Met het hele team hebben wij deelgenomen aan de Make-A-Wish Business Challenge, een fondswervingsactie waarbij bedrijven hun ondernemerschap inzetten om zoveel mogelijk geld op te halen voor ernstig zieke kinderen. Onder het motto 'Time to shine' bedachten wij creatieve acties, zetten we ons netwerk in en werkten we intensief samen. Het resultaat: een cheque van € 10.116, goed voor de op één na hoogste score van alle deelnemende bedrijven. Een prestatie waar wij met recht trots op zijn.",
        images: [
          { src: asset("/images/events/make-a-wish-cheque.jpg"), alt: "Het ITsPeople team met de cheque van € 10.116 voor Make-A-Wish" },
          { src: asset("/images/events/make-a-wish-kickoff.jpg"), alt: "Kick-off van de Make-A-Wish Business Challenge onder het motto Time to shine" },
          { src: asset("/images/events/make-a-wish-workshop.jpg"), alt: "ITsPeople team aan het werk tijdens de Business Challenge werksessie" },
        ],
      },
      {
        title: "Rope for Hope, afdaling World Trade Center Amsterdam",
        date: "2024",
        location: "World Trade Center, Amsterdam",
        tag: "Make-A-Wish",
        description: "Onze collega Rico is bij de Make-A-Wish Rope for Hope-actie van de gevel van het World Trade Center in Amsterdam afgedaald en heeft daarmee € 1.000 opgehaald voor Make-A-Wish. Samen met de andere deelnemers kon Make-A-Wish dankzij deze actie opnieuw een aantal wensen van ernstig zieke kinderen vervullen. Een moedige uitdaging voor een doel dat écht telt.",
        images: [
          { src: asset("/images/events/rope-for-hope-check.jpg"), alt: "Rico met de cheque van € 1.000 voor Make-A-Wish na de Rope for Hope-actie" },
          { src: asset("/images/events/rope-for-hope-descent.jpg"), alt: "Rico tijdens de afdaling langs de gevel van het World Trade Center Amsterdam" },
          { src: asset("/images/events/rope-for-hope-geared-up.jpg"), alt: "Rico klaar voor de afdaling, in uitrusting met helm en harnas" },
        ],
      },
    ],
    joinCTA: "Wil jij ook het verschil maken?",
    joinButton: "Bekijk onze vacatures →",
  },
  en: {
    founders: [
      {
        name: "André Keizer",
        role: "Founder & Programme Director Transformations",
        image: asset("/images/team/andre-keizer.jpg"),
        quote: "Sustainable change always runs through the heart of people.",
        specialties: ["Strategy", "Transformation", "Leadership"],
        bio: "André is the driving force behind ITsPeople. With more than 15 years' experience guiding complex transformations, he combines strategic insight with a deep-rooted conviction that people make the difference. His expertise lies at the intersection of organisational strategy, change management and leadership.",
      },
      {
        name: "Mario Kornuijt",
        role: "Co-Founder & Programme Director Transformations",
        image: asset("/images/team/mario-kornuijt.jpg"),
        quote: "Complex transformations require simple solutions.",
        specialties: ["Business Consultancy", "Governance", "Client Relations"],
        bio: "Mario brings years of experience in business consultancy and governance. He believes in the power of simplicity, even with the most complex issues. His talent for building trusting relationships with clients makes him an indispensable key to ITsPeople's success.",
      },
    ],
    team: [
      { name: "André Keizer", role: "Founder & Programme Director Transformations", image: asset("/images/team/andre-keizer.jpg"), specialties: ["Strategy", "Transformation", "Leadership"] },
      { name: "Mario Kornuijt", role: "Co-Founder & Programme Director Transformations", image: asset("/images/team/mario-kornuijt.jpg"), specialties: ["Business Consultancy", "Governance", "Client Relations"] },
      { name: "Geert Eikelboom", role: "Advisory Board Member · CEO (retired)", image: asset("/images/team/geert-eikelboom.jpg"), specialties: ["Strategy", "Leadership", "Governance"] },
      { name: "Melissa Crijns", role: "Head of Talent Acquisition & HR", image: asset("/images/team/melissa-crijns.png"), specialties: ["Talent Acquisition", "HR", "Employer Branding"] },
      { name: "Olav Bleijenberg", role: "Principal Business Consultant", image: asset("/images/team/olav-bleijenberg.jpg"), specialties: ["Strategy", "Business Consultancy", "Transformation"] },
      { name: "Angelina den Besten", role: "Senior Project & Process Manager", image: asset("/images/team/angelina-den-besten.jpg"), specialties: ["Project Management", "Process Optimisation", "Governance"] },
      { name: "Pieter Pannekeet", role: "Senior Project Manager", image: asset("/images/team/pieter-pannekeet.jpg"), specialties: ["Project Management", "Stakeholder Management", "Planning & Control"] },
      { name: "Werner Smeenk", role: "Senior Project Manager", image: asset("/images/team/werner-smeenk.jpg"), specialties: ["Project Management", "Risk Management", "Governance"] },
      { name: "Alev Kokus", role: "Project Manager", image: asset("/images/team/alev-kokus.jpg"), specialties: ["Project Management", "Stakeholder Management", "Governance"] },
      { name: "Manon de Bont", role: "Project Manager", image: asset("/images/team/manon-de-bont.jpg"), specialties: ["Project Management", "Change Management", "Communication"] },
      { name: "Daniel Mulder", role: "Senior Business Consultant", image: asset("/images/team/daniel-mulder.jpg"), specialties: ["Business Analysis", "Transformation", "Stakeholder Management"] },
      { name: "Ali Mokarram", role: "Business Consultant", image: asset("/images/team/ali-mokarram.jpg"), specialties: ["Business Analysis", "Process Design", "Digital Transformation"] },
      { name: "Jordy van der Velde", role: "Business Consultant", image: asset("/images/team/jordy-van-der-velde.jpg"), specialties: ["Business Analysis", "Transformation", "Chain Orchestration"] },
      { name: "Loris Cornelissen", role: "Business Consultant", image: asset("/images/team/loris-cornelissen.jpg"), specialties: ["Business Analysis", "Data Analysis", "Implementation"] },
      { name: "Pip Horsman", role: "Business Consultant", image: asset("/images/team/pip-horsman.jpg"), specialties: ["Business Analysis", "Stakeholder Management", "Agile"] },
      { name: "Rico van Leeuwen", role: "Business Consultant", image: asset("/images/team/rico-van-leeuwen.jpg"), specialties: ["Business Analysis", "Transformation", "Risk Management"] },
      { name: "Stephanie Solingen", role: "Business Consultant", image: asset("/images/team/stephanie-solingen.jpg"), specialties: ["Business Analysis", "Change Management", "Communication"] },
      { name: "Jerry de Jong", role: "Junior Business Consultant", image: asset("/images/team/jerry-de-jong.jpg"), specialties: ["Business Analysis", "Data Analysis", "Research"] },
      { name: "Matthijs Oosterbeek", role: "Data Consultant", image: asset("/images/team/matthijs-oosterbeek.jpg"), specialties: ["Data Architecture", "Analytics", "BI & Reporting"] },
      { name: "Mandy van Es", role: "Test Manager", image: asset("/images/team/mandy-van-es.jpg"), specialties: ["Test Management", "Quality Assurance", "Agile Testing"] },
      { name: "Sven Visser", role: "Inside Sales Representative", image: asset("/images/team/sven-visser.jpg"), specialties: ["Sales", "Client Relations", "Business Development"] },
      { name: "Diana Jane Acuna", role: "Office Manager", image: asset("/images/team/diana-jane-acuna.jpg"), specialties: ["Office Management", "Organisation", "Facilities"] },
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
    eventsLabel: "Events & Initiatives",
    eventsTitle: "Making a difference together, also beyond our projects",
    eventsIntro: "As a proud partner of Make-A-Wish, we take every opportunity to contribute to the wishes of seriously ill children. From sponsorships to physical challenges, our colleagues love to put themselves in motion for a good cause.",
    events: [
      {
        title: "Make-A-Wish Business Challenge, € 10,116 raised",
        date: "2024",
        location: "Amsterdam",
        tag: "Make-A-Wish",
        description: "With the entire team, we took part in the Make-A-Wish Business Challenge, a fundraising initiative in which companies use their entrepreneurial skills to raise as much money as possible for seriously ill children. Under the motto 'Time to shine', we developed creative campaigns, activated our network and collaborated intensively. The result: a cheque of € 10,116, good for the second-highest score among all participating companies. A performance we are genuinely proud of.",
        images: [
          { src: asset("/images/events/make-a-wish-cheque.jpg"), alt: "The ITsPeople team holding the € 10,116 cheque for Make-A-Wish" },
          { src: asset("/images/events/make-a-wish-kickoff.jpg"), alt: "Kick-off of the Make-A-Wish Business Challenge under the motto Time to shine" },
          { src: asset("/images/events/make-a-wish-workshop.jpg"), alt: "ITsPeople team at work during the Business Challenge workshop" },
        ],
      },
      {
        title: "Rope for Hope, descent of the World Trade Center Amsterdam",
        date: "2024",
        location: "World Trade Center, Amsterdam",
        tag: "Make-A-Wish",
        description: "Our colleague Rico took part in the Make-A-Wish Rope for Hope challenge and abseiled down the façade of the World Trade Center in Amsterdam, raising € 1,000 for Make-A-Wish. Together with the other participants, this effort allowed Make-A-Wish to grant several wishes for seriously ill children. A courageous challenge for a cause that truly matters.",
        images: [
          { src: asset("/images/events/rope-for-hope-check.jpg"), alt: "Rico holding the € 1,000 cheque for Make-A-Wish after the Rope for Hope challenge" },
          { src: asset("/images/events/rope-for-hope-descent.jpg"), alt: "Rico abseiling down the façade of the World Trade Center Amsterdam" },
          { src: asset("/images/events/rope-for-hope-geared-up.jpg"), alt: "Rico geared up with helmet and harness, ready for the descent" },
        ],
      },
    ],
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
                <Image src={asset("/images/building.jpg")} alt={locale === "nl" ? "ITsPeople kantoor" : "ITsPeople office"} fill className="object-cover" />
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
            <Image src={asset("/images/founders-together.jpg")} alt="André Keizer & Mario Kornuijt" fill className="object-cover object-top" />
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
            <Image src={asset("/images/team-women.jpg")} alt={locale === "nl" ? "Team ITsPeople" : "ITsPeople Team"} fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">{locale === "nl" ? "Het Team" : "The Team"}</p>
              <p className="text-white/60 text-sm">{d.teamSubtitle}</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {d.team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.4) }} className="group text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-its-green/30 transition-all duration-300">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg text-its-charcoal mb-1">{m.name}</h3>
                <p className="text-its-green-dark font-medium text-sm mb-3">{m.role}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {m.specialties.map((s) => (
                    <span key={s} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-its-green/5 text-its-green-dark border border-its-green/10">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Events & Initiatives */}
          <div className="mt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.eventsLabel}</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4 text-its-charcoal">{d.eventsTitle}</h2>
              <p className="text-its-gray-mid leading-relaxed">{d.eventsIntro}</p>
            </motion.div>

            <div className="space-y-12">
              {d.events.map((ev, i) => (
                <motion.article
                  key={ev.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-white border border-its-gray-light/30 overflow-hidden"
                >
                  <div
                    className={`grid gap-1 bg-its-gray-light/20 ${
                      ev.images.length >= 4
                        ? "grid-cols-2 md:grid-cols-4"
                        : "md:grid-cols-3"
                    }`}
                  >
                    {ev.images.map((img) => (
                      <div key={img.src} className="relative aspect-[4/3] bg-its-warm">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-its-green/10 text-its-green-dark border border-its-green/20">{ev.tag}</span>
                      <span className="text-its-gray-mid text-sm">{ev.date}</span>
                      <span className="text-its-gray-mid text-sm">·</span>
                      <span className="text-its-gray-mid text-sm">{ev.location}</span>
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl text-its-charcoal mb-3">{ev.title}</h3>
                    <p className="text-its-gray-mid leading-relaxed">{ev.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Make-A-Wish partner note */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex items-center gap-6 p-8 rounded-2xl bg-white border border-its-gray-light/30">
              <span className="text-5xl">⭐</span>
              <div>
                <h3 className="font-bold text-xl text-its-charcoal mb-2">{d.wishTitle}</h3>
                <p className="text-its-gray-mid leading-relaxed">
                  {d.wishDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Join CTA */}
          <div className="text-center mt-16">
            <p className="text-its-gray-mid mb-4">{d.joinCTA}</p>
            <Link href={`/${locale}/werken-bij`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
              {d.joinButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
