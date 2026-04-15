"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    slug: "digitale-transformatie-verzekeraar",
    sector: "Financiële Sector",
    title: "Digitale transformatie bij een grote verzekeraar",
    challenge: "Een grote Nederlandse verzekeraar stond voor een ingrijpende digitale transformatie. Het programma van €20 miljoen liep tegen versnipperde processen aan, gebrek aan grip op voortgang en kosten, en onvoldoende aansluiting tussen strategie en uitvoering. De directie had behoefte aan een integraal besturingskader dat overzicht en sturing mogelijk maakte.",
    approach: "ITsPeople heeft een Target Operating Model ontworpen dat als kompas diende voor de gehele transformatie. Daarnaast hebben wij een Business Control Framework ingericht dat real-time inzicht gaf in de voortgang, risico's en financiën van het programma. Een Transition Support Office zorgde voor de dagelijkse coördinatie en escalatie. Onze consultants werkten hand in hand met de interne teams, waarbij kennisoverdracht een essentieel onderdeel was van de aanpak.",
    results: ["40% snellere doorlooptijd", "98% compliance score", "€3.2M besparing gerealiseerd", "Volledige kennisoverdracht naar intern team"],
    image: "/images/team-discussion.jpg",
    testimonial: "ITsPeople heeft ons geholpen om grip te krijgen op een complex transformatieprogramma. Hun combinatie van strategisch inzicht en hands-on mentaliteit is uniek.",
    testimonialAuthor: "Director Digital Transformation",
    testimonialOrg: "Grote financiële instelling",
  },
  {
    slug: "nis2-implementatie-overheid",
    sector: "Overheid",
    title: "NIS2-implementatie bij een uitvoeringsorganisatie",
    challenge: "Een grote uitvoeringsorganisatie van de overheid moest vóór de deadline voldoen aan de NIS2-richtlijn. De complexiteit van de regelgeving, gecombineerd met een uitgebreid IT-landschap en meerdere stakeholders, maakte dit tot een uitdaging van formaat. Er was behoefte aan een pragmatische aanpak die compliance combineerde met werkbare processen.",
    approach: "Wij startten met een uitgebreide gap-analyse om de huidige situatie in kaart te brengen. Op basis hiervan ontwikkelden wij een compliance roadmap met duidelijke prioriteiten en mijlpalen. Processen werden herontworpen om te voldoen aan de NIS2-eisen, governance-structuren werden ingericht en medewerkers werden getraind. Bestuurlijke borging was een kernonderdeel van de aanpak, zodat compliance niet alleen operationeel maar ook strategisch verankerd werd.",
    results: ["100% NIS2 compliant", "Audit-ready in 4 maanden", "Bestuurlijke borging gerealiseerd", "Training voor 200+ medewerkers"],
    image: "/images/team-office.jpg",
    testimonial: "De NIS2-implementatie leek een onmogelijke opgave. Het team van ITsPeople maakte het werkbaar, begrijpelijk en, het allerbelangrijkste, geborgd in onze organisatie.",
    testimonialAuthor: "CISO",
    testimonialOrg: "Uitvoeringsorganisatie overheid",
  },
  {
    slug: "security-governance-umc",
    sector: "Zorg",
    title: "Security governance voor een universitair medisch centrum",
    challenge: "Een universitair medisch centrum kampte met een informatiebeveiligingsbeleid dat niet aansloot bij de dagelijkse praktijk van zorgprofessionals. De BIO/NEN 7510 normen werden onvoldoende nageleefd, niet uit onwil maar omdat het beleid te abstract en te ver verwijderd was van de werkvloer. Er was behoefte aan een aanpak die security awareness combineerde met werkbare procedures.",
    approach: "ITsPeople koos voor een mensgerichte aanpak. Wij combineerden BIO/NEN 7510 compliance met een uitgebreid security awareness programma. Het beleid werd herschreven in begrijpelijke taal, procedures werden vereenvoudigd en er werden security champions aangesteld per afdeling. Door workshops, e-learning modules en regelmatige phishing simulaties werd security een gedeelde verantwoordelijkheid in plaats van een IT-aangelegenheid.",
    results: ["90% awareness score", "ISO 27001 certificering", "Cultuurverandering gerealiseerd", "Security champions netwerk opgezet"],
    image: "/images/team-sept-1.jpg",
    testimonial: "Wat ITsPeople onderscheidt is hun focus op de mens. Technisch waren we al ver, maar de adoptie bleef achter. Zij hebben dat opgelost.",
    testimonialAuthor: "CIO",
    testimonialOrg: "Universitair Medisch Centrum",
  },
];

export default function CasesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Case Studies</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Bewezen <span className="gradient-text">resultaat</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Van strategie tot realisatie, bekijk hoe wij organisaties hebben geholpen bij hun complexe transformaties.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              id={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 shadow-sm"
            >
              {/* Image header */}
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 rounded-full bg-its-green/90 text-xs font-semibold text-white">{c.sector}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">{c.title}</h2>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-3">De uitdaging</h3>
                      <p className="text-its-gray-mid leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-its-green uppercase tracking-wider mb-3">Onze aanpak</h3>
                      <p className="text-its-gray-mid leading-relaxed">{c.approach}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-its-charcoal uppercase tracking-wider mb-4">Resultaten</h3>
                    <div className="space-y-3 mb-8">
                      {c.results.map((r) => (
                        <div key={r} className="px-4 py-3 rounded-lg bg-its-green/5 border border-its-green/15 text-sm font-semibold text-its-green-dark">
                          {r}
                        </div>
                      ))}
                    </div>

                    <div className="p-5 rounded-xl bg-its-warm border-l-4 border-its-green">
                      <p className="text-its-charcoal italic text-sm leading-relaxed mb-3">
                        &ldquo;{c.testimonial}&rdquo;
                      </p>
                      <p className="text-its-gray-mid text-xs">
                        {c.testimonialAuthor}, {c.testimonialOrg}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-its-charcoal mb-6">Herkenbaar? Laten we praten.</h2>
          <p className="text-its-gray-mid text-lg mb-8">
            Elke transformatie is uniek. Wij denken graag met u mee over de aanpak die past bij uw specifieke situatie.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300">
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}
