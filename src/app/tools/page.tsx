"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Question {
  question: string;
  options: string[];
}

interface Tool {
  icon: string;
  title: string;
  description: string;
  duration: string;
  output: string;
  color: string;
  questions: Question[];
  resultLabels: string[];
}

const tools: Tool[] = [
  {
    icon: "💡",
    title: "Innovation Readiness Scan",
    description: "Ontdek hoe innovatie-ready uw organisatie is. Onze scan analyseert 6 dimensies: cultuur, leiderschap, processen, technologie, mensen en strategie.",
    duration: "10 minuten",
    output: "Persoonlijk rapport met aanbevelingen",
    color: "from-its-green to-its-lime",
    questions: [
      { question: "Hoe zou u de innovatiecultuur binnen uw organisatie beschrijven?", options: ["Innovatie wordt actief gestimuleerd en beloond", "Er is ruimte voor innovatie, maar het is niet structureel", "Innovatie wordt vooral als risico gezien", "Er is nauwelijks aandacht voor innovatie"] },
      { question: "Hoe betrokken is het leiderschap bij innovatie-initiatieven?", options: ["Leiderschap is actief sponsor van innovatie", "Leiderschap ondersteunt innovatie op afstand", "Leiderschap is neutraal", "Leiderschap remt innovatie af"] },
      { question: "Zijn er gestructureerde processen voor het evalueren van nieuwe ideeën?", options: ["Ja, met duidelijke criteria en governance", "Deels, maar niet formeel vastgelegd", "Alleen ad hoc", "Nee, niet aanwezig"] },
      { question: "Hoe volwassen is de technologische infrastructuur voor innovatie?", options: ["Modern en cloud-native, klaar voor experimenten", "Redelijk up-to-date, maar beperkt flexibel", "Legacy-systemen domineren", "Technologie is een bottleneck"] },
      { question: "Worden medewerkers getraind in innovatieve methoden?", options: ["Ja, structureel via trainingen en workshops", "Incidenteel", "Alleen voor specifieke teams", "Niet of nauwelijks"] },
      { question: "Is innovatie onderdeel van de organisatiestrategie?", options: ["Ja, met duidelijke KPI's en budget", "Ja, maar vooral op papier", "Het wordt genoemd maar niet concreet gemaakt", "Nee"] },
    ],
    resultLabels: ["Innovatie Leider", "Innovatie Volger", "Innovatie Starter", "Innovatie Bewust"],
  },
  {
    icon: "⚙️",
    title: "IT-Governance Scan",
    description: "Beoordeel de volwassenheid van uw IT-governance. Van besluitvorming tot risicomanagement, krijg inzicht in uw sterke punten en verbeterkansen.",
    duration: "15 minuten",
    output: "Volwassenheidsrapport met benchmark",
    color: "from-its-green-dark to-its-green",
    questions: [
      { question: "Hoe worden IT-investeringsbeslissingen genomen?", options: ["Op basis van een integraal portfolio met business cases", "Op basis van business cases per project", "Op gevoel en ervaring", "Geen gestructureerd proces"] },
      { question: "Is er een duidelijke IT-governance structuur?", options: ["Ja, met rollen, verantwoordelijkheden en escalatiepaden", "Deels, maar niet volledig gedocumenteerd", "Informeel", "Niet aanwezig"] },
      { question: "Hoe worden IT-risico's beheerd?", options: ["Structureel risicomanagement met monitoring", "Periodieke risk assessments", "Alleen bij incidenten", "Niet gestructureerd"] },
      { question: "Is er alignment tussen IT en business strategie?", options: ["Volledig geïntegreerd", "Er is regelmatig overleg", "IT volgt de business", "IT en business opereren los van elkaar"] },
      { question: "Hoe wordt IT-performance gemeten?", options: ["Met KPI dashboards en SLA monitoring", "Met periodieke rapportages", "Alleen bij escalaties", "Niet structureel"] },
    ],
    resultLabels: ["Optimaal", "Gemanaged", "Ontwikkelend", "Initieel"],
  },
  {
    icon: "🛡️",
    title: "NIS2 Readiness Check",
    description: "Voldoet uw organisatie al aan de NIS2-richtlijn? Deze quick check geeft u in 5 minuten inzicht in uw compliance-status.",
    duration: "5 minuten",
    output: "Compliance scorecard met actieplan",
    color: "from-its-charcoal to-its-green-dark",
    questions: [
      { question: "Is uw organisatie op de hoogte van de NIS2-richtlijn en de verplichtingen?", options: ["Ja, volledig in kaart gebracht", "Globaal bekend", "Alleen op managementniveau", "Niet of nauwelijks"] },
      { question: "Is er een risicogebaseerde aanpak voor cybersecurity?", options: ["Ja, met regelmatige updates", "Deels geïmplementeerd", "In ontwikkeling", "Niet aanwezig"] },
      { question: "Is incidentmanagement ingericht conform NIS2-eisen?", options: ["Ja, met 24-uurs meldplicht en procedures", "Deels, meldprocedures bestaan", "Alleen ad hoc", "Niet ingericht"] },
      { question: "Is supply chain security onderdeel van uw beleid?", options: ["Ja, leveranciers worden beoordeeld en gemonitord", "Deels, alleen voor kritieke leveranciers", "In ontwikkeling", "Niet aanwezig"] },
      { question: "Is er bestuurlijke verantwoordelijkheid voor cybersecurity vastgelegd?", options: ["Ja, met duidelijke accountability op C-level", "Deels, het is belegd maar niet formeel", "Het is een IT-verantwoordelijkheid", "Niet vastgelegd"] },
    ],
    resultLabels: ["NIS2 Ready", "Op Koers", "In Ontwikkeling", "Actie Vereist"],
  },
];

function ToolScan({ tool }: { tool: Tool }) {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentQ < tool.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const score = answers.reduce((sum, a) => sum + (3 - a), 0);
  const maxScore = tool.questions.length * 3;
  const percentage = Math.round((score / maxScore) * 100);
  const levelIndex = percentage >= 75 ? 0 : percentage >= 50 ? 1 : percentage >= 25 ? 2 : 3;

  const reset = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers([]);
    setDone(false);
  };

  if (!started) {
    return (
      <div className="text-center">
        <p className="text-its-gray-mid mb-2 text-sm">⏱ {tool.duration} · 📄 {tool.output}</p>
        <button onClick={() => setStarted(true)} className={`mt-4 px-8 py-3 rounded-lg bg-gradient-to-r ${tool.color} text-white font-semibold transition-all hover:shadow-lg`}>
          Start de scan →
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-its-green/10 border-4 border-its-green mb-4">
            <span className="text-2xl font-bold text-its-green-dark">{percentage}%</span>
          </div>
          <h3 className="text-xl font-bold text-its-charcoal">{tool.resultLabels[levelIndex]}</h3>
        </div>
        <p className="text-its-gray-mid mb-6 max-w-md mx-auto">
          {percentage >= 75 && "Uitstekend! Uw organisatie scoort hoog. Er zijn nog verbeterkansen, maar de basis is sterk."}
          {percentage >= 50 && percentage < 75 && "Goed op weg. Er zijn concrete verbeterpunten die uw organisatie naar het volgende niveau kunnen brengen."}
          {percentage >= 25 && percentage < 50 && "Er is een goede basis, maar er zijn significante verbeterkansen. Wij helpen u graag verder."}
          {percentage < 25 && "Er is werk aan de winkel. Maar geen zorgen, wij hebben ervaring met organisaties in dezelfde situatie en helpen u graag op weg."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all">
            Bespreek uw resultaten →
          </Link>
          <button onClick={reset} className="px-6 py-3 rounded-lg border border-its-gray-light/30 text-its-gray-mid font-semibold text-sm hover:border-its-green/30 transition-all">
            Opnieuw doen
          </button>
        </div>
      </motion.div>
    );
  }

  const q = tool.questions[currentQ];
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-its-gray-mid">Vraag {currentQ + 1} van {tool.questions.length}</span>
        <div className="flex gap-1">
          {tool.questions.map((_, i) => (
            <div key={i} className={`w-8 h-1 rounded-full ${i <= currentQ ? "bg-its-green" : "bg-its-gray-light/50"}`} />
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <h3 className="text-lg font-bold text-its-charcoal mb-6">{q.question}</h3>
          <div className="space-y-3">
            {q.options.map((opt, oi) => (
              <button key={oi} onClick={() => handleAnswer(oi)} className="w-full text-left p-4 rounded-xl border border-its-gray-light/30 hover:border-its-green/30 hover:bg-its-green/5 transition-all text-sm text-its-gray-mid hover:text-its-charcoal">
                {opt}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Interactieve Tools</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Ontdek waar uw organisatie <span className="gradient-text">staat</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Onze gratis self-assessment tools geven u direct inzicht in de volwassenheid van uw organisatie op cruciale gebieden.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {tools.map((tool, i) => (
            <motion.div key={tool.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative bg-white rounded-2xl p-8 lg:p-12 border border-its-gray-light/30">
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${tool.color}`} />
              <div className="text-center mb-8">
                <span className="text-5xl block mb-4">{tool.icon}</span>
                <h2 className="text-2xl font-bold text-its-charcoal mb-3">{tool.title}</h2>
                <p className="text-its-gray-mid max-w-xl mx-auto">{tool.description}</p>
              </div>
              <ToolScan tool={tool} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
