"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Persoonlijk",
    description: "Samenwerken door mensen te verbinden vanuit authenticiteit.",
    icon: "🤝",
  },
  {
    title: "Deskundig",
    description: "Experts die gedreven zijn en focussen op blijvend resultaat.",
    icon: "🎯",
  },
  {
    title: "Inspirerend",
    description: "Inzichten delen, enthousiasme overdragen, mensen meenemen.",
    icon: "✨",
  },
];

export default function About() {
  return (
    <section id="over-ons" className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: André portrait + values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-8">
              <Image
                src="/images/andre-casual.jpg"
                alt="André Keizer - Founder & Managing Partner"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-its-dark/80 to-transparent">
                <p className="text-white font-bold text-lg">André Keizer</p>
                <p className="text-white/70 text-sm">Founder & Managing Partner</p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map((v) => (
                <div key={v.title} className="text-center p-4 rounded-xl bg-its-warm">
                  <span className="text-2xl block mb-2">{v.icon}</span>
                  <h4 className="font-bold text-sm text-its-charcoal mb-1">{v.title}</h4>
                  <p className="text-xs text-its-gray-mid leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
              Over ITsPeople
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 tracking-tight text-its-charcoal">
              Duurzame verandering loopt over de{" "}
              <span className="gradient-text">as van de mens</span>
            </h2>
            <p className="text-its-gray-mid text-lg leading-relaxed mb-6">
              Wij zijn een organisatieadviesbureau waarbij de mens centraal
              staat. Het zijn namelijk de mensen die het verschil maken en
              duurzame verandering creëren.
            </p>
            <p className="text-its-gray-mid leading-relaxed mb-8">
              Van financiële sector tot overheid, van zorg tot industrie — wij
              verbinden organisatie, mensen en technologie met elkaar richting
              een succesvolle transformatie. Met onze unieke aanpak richten wij
              ons op strategie-implementatie en het realiseren van complexe
              transformaties.
            </p>

            {/* Quote */}
            <div className="relative pl-6 border-l-4 border-its-green mb-8 py-2">
              <p className="text-its-charcoal italic text-lg leading-relaxed font-medium">
                &ldquo;Wij geloven dat duurzame verandering altijd over de as
                van de mens loopt.&rdquo;
              </p>
              <p className="text-its-gray-mid text-sm mt-3">
                — André Keizer, Founder &amp; Managing Partner
              </p>
            </div>

            {/* Make-A-Wish */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-its-green/5 border border-its-green/15">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-bold text-its-charcoal text-sm">
                  Trotse partner van Make-A-Wish
                </p>
                <p className="text-its-gray-mid text-sm">
                  Wij geloven in het verschil maken — ook buiten onze projecten.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
