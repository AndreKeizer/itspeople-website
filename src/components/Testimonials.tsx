"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const data = {
  nl: {
    eyebrow: "Wat klanten zeggen",
    titleA: "Vertrouwen door ",
    titleB: "resultaat",
    items: [
      { quote: "ITsPeople heeft ons geholpen om grip te krijgen op een complex transformatieprogramma. Hun combinatie van strategisch inzicht en hands-on mentaliteit is uniek.", name: "Director Digital Transformation", org: "Grote financiële instelling", initials: "JB" },
      { quote: "De NIS2-implementatie leek een onmogelijke opgave. Het team van ITsPeople maakte het werkbaar, begrijpelijk en, het allerbelangrijkste, geborgd in onze organisatie.", name: "CISO", org: "Uitvoeringsorganisatie overheid", initials: "MV" },
      { quote: "Wat ITsPeople onderscheidt is hun focus op de mens. Technisch waren we al ver, maar de adoptie bleef achter. Zij hebben dat opgelost.", name: "CIO", org: "Universitair Medisch Centrum", initials: "RK" },
      { quote: "Het Business Control Framework dat ITsPeople heeft opgeleverd geeft ons bestuur voor het eerst écht grip op de transformatie.", name: "CFO", org: "Verzekeringsmaatschappij", initials: "SL" },
    ],
  },
  en: {
    eyebrow: "What clients say",
    titleA: "Trust through ",
    titleB: "results",
    items: [
      { quote: "ITsPeople helped us regain control of a complex transformation programme. Their combination of strategic insight and hands-on mentality is unique.", name: "Director Digital Transformation", org: "Large financial institution", initials: "JB" },
      { quote: "The NIS2 implementation seemed impossible. The ITsPeople team made it workable, understandable and, most importantly, embedded in our organisation.", name: "CISO", org: "Government executive agency", initials: "MV" },
      { quote: "What sets ITsPeople apart is their focus on people. Technically we were already advanced, but adoption lagged. They solved that for us.", name: "CIO", org: "University Medical Center", initials: "RK" },
      { quote: "The Business Control Framework ITsPeople delivered finally gives our board real grip on the transformation.", name: "CFO", org: "Insurance company", initials: "SL" },
    ],
  },
};

export default function Testimonials() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  const testimonials = d.items;
  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-its-green text-sm font-semibold tracking-wider uppercase">
            {d.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight text-its-charcoal">
            {d.titleA}<span className="gradient-text">{d.titleB}</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.initials}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-its-warm border border-its-gray-light/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-its-green">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-its-charcoal leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-its-green/10 flex items-center justify-center text-its-green-dark font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-its-charcoal">{t.name}</p>
                  <p className="text-xs text-its-gray-mid">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
