"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    eyebrow: "Ons Team",
    titleA: "De mensen die het ",
    titleB: "verschil maken",
    intro: "Ons team bestaat uit ervaren consultants, projectmanagers en specialisten die gedreven worden door één gemeenschappelijk doel: duurzame verandering realiseren.",
    foundersLabel: "De Founders",
    foundersSub: "André Keizer & Mario Kornuijt",
    foundersQuote: "Wij geloven dat duurzame verandering altijd over de as van de mens loopt.",
    teamLabel: "Het Team",
    teamSub: "Expertise, diversiteit en samenwerking",
    joinLine: "Wil jij ook het verschil maken?",
    joinCta: "Bekijk onze vacatures",
    founders: [
      { name: "André Keizer", role: "Founder & Programmadirecteur Transformaties", image: asset("/images/andre-casual.jpg"), quote: "Duurzame verandering loopt altijd over de as van de mens.", specialties: ["Strategie", "Transformatie", "Leiderschap"] },
      { name: "Mario Kornuijt", role: "Co-Founder & Programmadirecteur Transformaties", image: asset("/images/mario-casual.jpg"), quote: "Complexe transformaties vragen om eenvoudige oplossingen.", specialties: ["Business Consultancy", "Governance", "Klantrelaties"] },
    ],
    team: [
      { name: "Geert Eikelboom", role: "Lid Raad van Advies", image: asset("/images/team/geert-eikelboom.jpg") },
      { name: "Melissa Crijns", role: "Head of Talent Acquisition & HR", image: asset("/images/team/melissa-crijns.png") },
      { name: "Olav Bleijenberg", role: "Principal Business Consultant", image: asset("/images/team/olav-bleijenberg.jpg") },
      { name: "Angelina den Besten", role: "Senior Project & Process Manager", image: asset("/images/team/angelina-den-besten.jpg") },
      { name: "Pieter Pannekeet", role: "Senior Projectmanager", image: asset("/images/team/pieter-pannekeet.jpg") },
      { name: "Werner Smeenk", role: "Senior Projectmanager", image: asset("/images/team/werner-smeenk.jpg") },
      { name: "Alev Kokus", role: "Projectmanager", image: asset("/images/team/alev-kokus.jpg") },
      { name: "Manon de Bont", role: "Projectmanager", image: asset("/images/team/manon-de-bont.jpg") },
      { name: "Daniel Mulder", role: "Senior Business Consultant", image: asset("/images/team/daniel-mulder.jpg") },
      { name: "Ali Mokarram", role: "Business Consultant", image: asset("/images/team/ali-mokarram.jpg") },
      { name: "Jordy van der Velde", role: "Business Consultant", image: asset("/images/team/jordy-van-der-velde.jpg") },
      { name: "Loris Cornelissen", role: "Business Consultant", image: asset("/images/team/loris-cornelissen.jpg") },
      { name: "Pip Horsman", role: "Business Consultant", image: asset("/images/team/pip-horsman.jpg") },
      { name: "Rico van Leeuwen", role: "Business Consultant", image: asset("/images/team/rico-van-leeuwen.jpg") },
      { name: "Stephanie Solingen", role: "Business Consultant", image: asset("/images/team/stephanie-solingen.jpg") },
      { name: "Jerry de Jong", role: "Junior Business Consultant", image: asset("/images/team/jerry-de-jong.jpg") },
      { name: "Matthijs Oosterbeek", role: "Data Consultant", image: asset("/images/team/matthijs-oosterbeek.jpg") },
      { name: "Mandy van Es", role: "Testmanager", image: asset("/images/team/mandy-van-es.jpg") },
      { name: "Sven Visser", role: "Inside Sales Representative", image: asset("/images/team/sven-visser.jpg") },
      { name: "Diana Jane Acuna", role: "Office Manager", image: asset("/images/team/diana-jane-acuna.jpg") },
    ],
  },
  en: {
    eyebrow: "Our Team",
    titleA: "The people who make the ",
    titleB: "difference",
    intro: "Our team consists of experienced consultants, project managers and specialists driven by one shared purpose: delivering sustainable change.",
    foundersLabel: "The Founders",
    foundersSub: "André Keizer & Mario Kornuijt",
    foundersQuote: "We believe sustainable change always runs through people.",
    teamLabel: "The Team",
    teamSub: "Expertise, diversity and collaboration",
    joinLine: "Want to make a difference too?",
    joinCta: "View our vacancies",
    founders: [
      { name: "André Keizer", role: "Founder & Programme Director Transformations", image: asset("/images/andre-casual.jpg"), quote: "Sustainable change always runs through people.", specialties: ["Strategy", "Transformation", "Leadership"] },
      { name: "Mario Kornuijt", role: "Co-Founder & Programme Director Transformations", image: asset("/images/mario-casual.jpg"), quote: "Complex transformations call for simple solutions.", specialties: ["Business Consultancy", "Governance", "Client Relations"] },
    ],
    team: [
      { name: "Geert Eikelboom", role: "Lid Raad van Advies", image: asset("/images/team/geert-eikelboom.jpg") },
      { name: "Melissa Crijns", role: "Head of Talent Acquisition & HR", image: asset("/images/team/melissa-crijns.png") },
      { name: "Olav Bleijenberg", role: "Principal Business Consultant", image: asset("/images/team/olav-bleijenberg.jpg") },
      { name: "Angelina den Besten", role: "Senior Project & Process Manager", image: asset("/images/team/angelina-den-besten.jpg") },
      { name: "Pieter Pannekeet", role: "Senior Project Manager", image: asset("/images/team/pieter-pannekeet.jpg") },
      { name: "Werner Smeenk", role: "Senior Project Manager", image: asset("/images/team/werner-smeenk.jpg") },
      { name: "Alev Kokus", role: "Project Manager", image: asset("/images/team/alev-kokus.jpg") },
      { name: "Manon de Bont", role: "Project Manager", image: asset("/images/team/manon-de-bont.jpg") },
      { name: "Daniel Mulder", role: "Senior Business Consultant", image: asset("/images/team/daniel-mulder.jpg") },
      { name: "Ali Mokarram", role: "Business Consultant", image: asset("/images/team/ali-mokarram.jpg") },
      { name: "Jordy van der Velde", role: "Business Consultant", image: asset("/images/team/jordy-van-der-velde.jpg") },
      { name: "Loris Cornelissen", role: "Business Consultant", image: asset("/images/team/loris-cornelissen.jpg") },
      { name: "Pip Horsman", role: "Business Consultant", image: asset("/images/team/pip-horsman.jpg") },
      { name: "Rico van Leeuwen", role: "Business Consultant", image: asset("/images/team/rico-van-leeuwen.jpg") },
      { name: "Stephanie Solingen", role: "Business Consultant", image: asset("/images/team/stephanie-solingen.jpg") },
      { name: "Jerry de Jong", role: "Junior Business Consultant", image: asset("/images/team/jerry-de-jong.jpg") },
      { name: "Matthijs Oosterbeek", role: "Data Consultant", image: asset("/images/team/matthijs-oosterbeek.jpg") },
      { name: "Mandy van Es", role: "Test Manager", image: asset("/images/team/mandy-van-es.jpg") },
      { name: "Sven Visser", role: "Inside Sales Representative", image: asset("/images/team/sven-visser.jpg") },
      { name: "Diana Jane Acuna", role: "Office Manager", image: asset("/images/team/diana-jane-acuna.jpg") },
    ],
  },
};

export default function Team() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  return (
    <section id="team" className="relative py-28 bg-its-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.eyebrow}</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            {d.titleA}<span className="gradient-text">{d.titleB}</span>
          </h2>
          <p className="text-its-gray-mid text-lg leading-relaxed">{d.intro}</p>
        </motion.div>

        {/* Founders banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-16">
          <Image src={asset("/images/founders-together.jpg")} alt="André Keizer & Mario Kornuijt, Founders ITsPeople" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-its-dark/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
            <div>
              <p className="text-white font-bold text-xl mb-1">{d.foundersLabel}</p>
              <p className="text-white/60 text-sm">{d.foundersSub}</p>
            </div>
            <p className="text-white/50 text-sm italic hidden sm:block max-w-md text-right">
              &ldquo;{d.foundersQuote}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Founders detail */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {d.founders.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                </div>
              </div>
              <h3 className="font-bold text-xl text-its-charcoal mb-1">{member.name}</h3>
              <p className="text-its-green-dark font-medium text-sm mb-3">{member.role}</p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/5 text-its-green-dark border border-its-green/10">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12">
          <Image src={asset("/images/team-women.jpg")} alt="Team ITsPeople" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-white font-bold text-lg">{d.teamLabel}</p>
            <p className="text-white/60 text-sm">{d.teamSub}</p>
          </div>
        </motion.div>

        {/* Full team grid, circular avatars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {d.team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.05, 0.4) }} className="group text-center">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-its-green/30 transition-all duration-300">
                <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-its-charcoal mb-0.5">{member.name}</h3>
              <p className="text-its-green-dark font-medium text-xs sm:text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <p className="text-its-gray-mid mb-4">{d.joinLine}</p>
          <a href="#careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300">
            {d.joinCta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
