"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

const data = {
  nl: {
    values: [
      { title: "Persoonlijk", description: "Samenwerken door mensen te verbinden vanuit authenticiteit.", icon: "🤝" },
      { title: "Deskundig", description: "Experts die gedreven zijn en focussen op blijvend resultaat.", icon: "🎯" },
      { title: "Inspirerend", description: "Inzichten delen, enthousiasme overdragen, mensen meenemen.", icon: "✨" },
    ],
    eyebrow: "Over ITsPeople",
    titleA: "Duurzame verandering loopt over de ",
    titleB: "as van de mens",
    p1: "Wij zijn een organisatieadviesbureau waarbij de mens centraal staat. Het zijn namelijk de mensen die het verschil maken en duurzame verandering creëren.",
    p2: "Van financiële sector tot overheid, van zorg tot industrie, wij verbinden organisatie, mensen en technologie met elkaar richting een succesvolle transformatie. Met onze unieke aanpak richten wij ons op strategie-implementatie en het realiseren van complexe transformaties.",
    quote: "Wij geloven dat duurzame verandering altijd over de as van de mens loopt.",
    quoteAuthor: "— André Keizer, Founder & Managing Partner",
    mawTitle: "Trotse partner van Make-A-Wish",
    mawSub: "Wij geloven in het verschil maken, ook buiten onze projecten.",
  },
  en: {
    values: [
      { title: "Personal", description: "Collaborating by connecting people with authenticity.", icon: "🤝" },
      { title: "Expert", description: "Driven experts focused on lasting results.", icon: "🎯" },
      { title: "Inspiring", description: "Sharing insights, transferring enthusiasm, bringing people along.", icon: "✨" },
    ],
    eyebrow: "About ITsPeople",
    titleA: "Sustainable change runs through ",
    titleB: "people",
    p1: "We are a management consultancy with people at the centre. It's people who make the difference and create sustainable change.",
    p2: "From financial services to government, from healthcare to industry, we connect organisation, people and technology towards successful transformation. Our unique approach focuses on strategy implementation and delivering complex transformations.",
    quote: "We believe sustainable change always runs through people.",
    quoteAuthor: "— André Keizer, Founder & Managing Partner",
    mawTitle: "Proud partner of Make-A-Wish",
    mawSub: "We believe in making a difference, also beyond our projects.",
  },
};

export default function About() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  return (
    <section id="over-ons" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-8">
              <Image src="/images/andre-casual.jpg" alt="André Keizer - Founder & Managing Partner" fill className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-its-dark/80 to-transparent">
                <p className="text-white font-bold text-lg">André Keizer</p>
                <p className="text-white/70 text-sm">Founder & Managing Partner</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {d.values.map((v) => (
                <div key={v.title} className="text-center p-4 rounded-xl bg-its-warm">
                  <span className="text-2xl block mb-2">{v.icon}</span>
                  <h4 className="font-bold text-sm text-its-charcoal mb-1">{v.title}</h4>
                  <p className="text-xs text-its-gray-mid leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.eyebrow}</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
              {d.titleA}<span className="gradient-text">{d.titleB}</span>
            </h2>
            <p className="text-its-gray-mid text-lg leading-relaxed mb-6">{d.p1}</p>
            <p className="text-its-gray-mid leading-relaxed mb-8">{d.p2}</p>

            <div className="relative pl-6 border-l-4 border-its-green mb-8 py-2">
              <p className="text-its-charcoal italic text-lg leading-relaxed font-medium">
                &ldquo;{d.quote}&rdquo;
              </p>
              <p className="text-its-gray-mid text-sm mt-3">{d.quoteAuthor}</p>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-its-green/5 border border-its-green/15">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-bold text-its-charcoal text-sm">{d.mawTitle}</p>
                <p className="text-its-gray-mid text-sm">{d.mawSub}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
