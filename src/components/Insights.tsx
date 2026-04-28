"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    tag: "Insights",
    heading: "Kennis &amp; Inzichten",
    viewAll: "Alle artikelen →",
    articles: [
      {
        image: asset("/images/team-sept-1.jpg"),
        tag: "Compliance",
        title: "NIS2 compliance: wat betekent het voor uw organisatie?",
        excerpt: "Van bestuurlijke aansprakelijkheid tot integrale compliance-aanpak: een praktische gids.",
        date: "Februari 2026",
        readTime: "8 min",
      },
      {
        image: asset("/images/team-sept-2.jpg"),
        tag: "Digitale Strategie",
        title: "De 5 pijlers van een succesvolle digitale transformatie",
        excerpt: "Hoe organisaties hun transformatie versnellen met een mensgerichte aanpak.",
        date: "Februari 2026",
        readTime: "5 min",
      },
      {
        image: asset("/images/team-sept-3.jpg"),
        tag: "Data Management",
        title: "Data-gedreven werken: van buzzword naar resultaat",
        excerpt: "Het ITs Productivity Center als motor voor data-gedreven inzichten.",
        date: "Januari 2026",
        readTime: "6 min",
      },
    ],
  },
  en: {
    tag: "Insights",
    heading: "Knowledge &amp; Insights",
    viewAll: "View all articles →",
    articles: [
      {
        image: asset("/images/team-sept-1.jpg"),
        tag: "Compliance",
        title: "NIS2 compliance: what it means for your organisation",
        excerpt: "From board-level accountability to integrated compliance approach: a practical guide.",
        date: "February 2026",
        readTime: "8 min",
      },
      {
        image: asset("/images/team-sept-2.jpg"),
        tag: "Digital Strategy",
        title: "The 5 pillars of successful digital transformation",
        excerpt: "How organisations accelerate transformation with a human-centred approach.",
        date: "February 2026",
        readTime: "5 min",
      },
      {
        image: asset("/images/team-sept-3.jpg"),
        tag: "Data Management",
        title: "Data-driven working: from buzzword to results",
        excerpt: "The ITs Productivity Center as engine for data-driven insights.",
        date: "January 2026",
        readTime: "6 min",
      },
    ],
  },
};

export default function Insights() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  return (
    <section id="insights" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
              {d.tag}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-its-charcoal">
              {d.heading}
            </h2>
          </div>
          <a
            href="#"
            className="text-its-green-dark font-semibold hover:text-its-green transition-colors flex items-center gap-2"
          >
            {d.viewAll}
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {d.articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-its-green/90 text-xs font-semibold text-white">
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-its-gray-mid mb-3">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-its-gray-mid" />
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-lg font-bold mb-3 text-its-charcoal group-hover:text-its-green-dark transition-colors duration-300 leading-snug">
                {article.title}
              </h3>

              <p className="text-its-gray-mid text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
