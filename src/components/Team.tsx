"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "André Keizer",
    role: "Founder & Managing Partner",
    image: "/images/andre-casual.jpg",
    quote: "Duurzame verandering loopt altijd over de as van de mens.",
    specialties: ["Strategie", "Transformatie", "Leiderschap"],
  },
  {
    name: "Mario Kornuijt",
    role: "Co-Founder & Managing Partner",
    image: "/images/mario-casual.jpg",
    quote: "Complexe transformaties vragen om eenvoudige oplossingen.",
    specialties: ["Business Consultancy", "Governance", "Klantrelaties"],
  },
];

const team = [
  {
    name: "Alev Kokus",
    role: "Senior Projectmanager",
    image: "/images/alev-kokus.jpg",
    quote: "Structuur en verbinding — daar ontstaan de beste projectresultaten.",
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

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-its-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            Ons Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            De mensen die het{" "}
            <span className="gradient-text">verschil maken</span>
          </h2>
          <p className="text-its-gray-mid text-lg leading-relaxed">
            Ons team bestaat uit ervaren consultants, projectmanagers en
            specialisten die gedreven worden door één gemeenschappelijk doel:
            duurzame verandering realiseren.
          </p>
        </motion.div>

        {/* Founders duo photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-16"
        >
          <Image
            src="/images/founders-together.jpg"
            alt="André Keizer & Mario Kornuijt — Founders ITsPeople"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-its-dark/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
            <div>
              <p className="text-white font-bold text-xl mb-1">De Founders</p>
              <p className="text-white/60 text-sm">André Keizer & Mario Kornuijt</p>
            </div>
            <p className="text-white/50 text-sm italic hidden sm:block max-w-md text-right">
              &ldquo;Wij geloven dat duurzame verandering altijd over de as van de mens loopt.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {founders.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-xl text-its-charcoal mb-1">{member.name}</h3>
              <p className="text-its-green-dark font-medium text-sm mb-3">{member.role}</p>

              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/5 text-its-green-dark border border-its-green/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team women photo — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-12"
        >
          <Image
            src="/images/team-women.jpg"
            alt="Team ITsPeople"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-white font-bold text-lg">Het Team</p>
            <p className="text-white/60 text-sm">Expertise, diversiteit en samenwerking</p>
          </div>
        </motion.div>

        {/* Other team members */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-xl text-its-charcoal mb-1">{member.name}</h3>
              <p className="text-its-green-dark font-medium text-sm mb-3">{member.role}</p>

              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-its-green/5 text-its-green-dark border border-its-green/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-its-gray-mid mb-4">
            Wil jij ook het verschil maken?
          </p>
          <a
            href="#careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold transition-all duration-300"
          >
            Bekijk onze vacatures
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
