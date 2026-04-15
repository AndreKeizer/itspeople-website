"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { label: "Alle", active: true },
  { label: "Artikelen", active: false },
  { label: "Whitepapers", active: false },
  { label: "Podcast", active: false },
  { label: "Video's", active: false },
];

const featured = {
  type: "Podcast",
  title: "The Transformation Talk",
  description: "Onze podcast over digitale transformatie, leiderschap en de menselijke factor. Elke twee weken een nieuw gesprek met experts en leiders uit het veld.",
  episodes: "12 episodes",
  icon: "🎙️",
};

const items = [
  {
    type: "Artikel",
    image: "/images/team-sept-1.jpg",
    title: "NIS2 compliance: wat betekent het voor uw organisatie?",
    excerpt: "Een praktische gids voor het implementeren van de NIS2-richtlijn.",
    date: "Feb 2026",
    readTime: "8 min",
  },
  {
    type: "Whitepaper",
    image: "/images/team-sept-2.jpg",
    title: "Business Control Framework — Het complete handboek",
    excerpt: "Download ons whitepaper over integrale beheersing van strategie, processen en compliance.",
    date: "Jan 2026",
    readTime: "20 min",
  },
  {
    type: "Video",
    image: "/images/team-sept-3.jpg",
    title: "André Keizer over de toekomst van digitale transformatie",
    excerpt: "Keynote van André op het Transformation Summit 2025.",
    date: "Dec 2025",
    readTime: "18 min",
  },
  {
    type: "Artikel",
    image: "/images/team-meeting.jpg",
    title: "De 5 pijlers van een succesvolle digitale transformatie",
    excerpt: "Hoe organisaties hun transformatie versnellen met een mensgerichte aanpak.",
    date: "Feb 2026",
    readTime: "5 min",
  },
  {
    type: "Artikel",
    image: "/images/team-work.jpg",
    title: "Data-gedreven werken: van buzzword naar resultaat",
    excerpt: "Het ITs Productivity Center als motor voor data-gedreven inzichten.",
    date: "Jan 2026",
    readTime: "6 min",
  },
  {
    type: "Whitepaper",
    image: "/images/team-collab.jpg",
    title: "Target Operating Model — Uw blauwdruk voor transformatie",
    excerpt: "Stap-voor-stap handleiding voor het ontwerpen en implementeren van een TOM.",
    date: "Nov 2025",
    readTime: "15 min",
  },
];

const typeColors: Record<string, string> = {
  Artikel: "bg-its-green",
  Whitepaper: "bg-its-green-dark",
  Video: "bg-its-charcoal",
  Podcast: "bg-its-lime",
};

export default function InsightsHub() {
  return (
    <section id="insights" className="relative py-28 bg-its-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            Insights Hub
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
            Kennis &amp; Inzichten
          </h2>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat.active
                    ? "bg-its-green text-white"
                    : "bg-white border border-its-gray-light/30 text-its-gray-mid hover:border-its-green/30 hover:text-its-green-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured: Podcast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-its-dark to-its-deep"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-its-green/10 border border-its-green/20 flex items-center justify-center text-5xl">
              {featured.icon}
            </div>
            <div className="flex-grow">
              <span className="text-its-lime text-xs font-bold uppercase tracking-wider">
                {featured.type}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                {featured.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                {featured.description}
              </p>
            </div>
            <a
              href="#"
              className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all"
            >
              Beluister nu →
            </a>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-its-gray-mid mb-2">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-its-gray-mid" />
                  <span>{item.readTime}</span>
                </div>
                <h3 className="font-bold text-its-charcoal group-hover:text-its-green-dark transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-its-gray-mid text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-its-charcoal/15 text-its-charcoal font-semibold text-sm hover:bg-white transition-all"
          >
            Bekijk alle insights →
          </a>
        </div>
      </div>
    </section>
  );
}
