"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["Alle", "Artikelen", "Whitepapers", "Podcast", "Video's"];

const featured = {
  type: "Podcast",
  title: "The Transformation Talk",
  description: "Onze podcast over digitale transformatie, leiderschap en de menselijke factor. Elke twee weken een nieuw gesprek met experts en leiders uit het veld. Van NIS2-compliance tot innovatief werkgedrag, van data-gedreven werken tot de toekomst van AI in organisaties.",
  episodes: "12 episodes",
};

const items = [
  {
    type: "Artikelen",
    image: "/images/team-sept-1.jpg",
    title: "NIS2 compliance: wat betekent het voor uw organisatie?",
    content: `De NIS2-richtlijn is de opvolger van de oorspronkelijke NIS-richtlijn en breidt de scope aanzienlijk uit. Waar de eerste richtlijn vooral gericht was op essentiële diensten, raakt NIS2 een veel breder scala aan organisaties.

Wat betekent dit concreet? Organisaties moeten een risicogebaseerde aanpak hanteren voor hun cybersecurity. Dit omvat niet alleen technische maatregelen, maar ook organisatorische aspecten zoals governance, incidentmanagement en supply chain security.

Bestuurlijke aansprakelijkheid is een belangrijk nieuw element. Directie en bestuur worden persoonlijk verantwoordelijk voor het naleven van de NIS2-verplichtingen. Dit maakt cybersecurity definitief een boardroom-onderwerp.

Bij ITsPeople hanteren wij een integrale compliance-aanpak. Wij starten met een gap-analyse om de huidige situatie in kaart te brengen. Op basis hiervan ontwikkelen wij een pragmatische roadmap die compliance combineert met werkbare processen. Omdat wij geloven dat echte compliance niet draait om documenten, maar om gedrag.`,
    date: "Feb 2026",
    readTime: "8 min",
  },
  {
    type: "Artikelen",
    image: "/images/team-meeting.jpg",
    title: "De 5 pijlers van een succesvolle digitale transformatie",
    content: `Digitale transformatie is meer dan technologie implementeren. Het is een fundamentele verandering in hoe een organisatie waarde creëert, levert en vasthoudt. Na het begeleiden van meer dan 50 transformaties hebben wij vijf pijlers geïdentificeerd die het verschil maken.

Pijler 1: Mensgerichte aanpak. Technologie is een middel, mensen zijn de sleutel. Zonder draagvlak, adoptie en eigenaarschap stranden transformaties. Investeer in change management en betrek medewerkers vanaf dag één.

Pijler 2: Strategische helderheid. Iedereen in de organisatie moet begrijpen waarom de transformatie nodig is en waar deze naartoe leidt. Een helder Target Operating Model biedt dit kompas.

Pijler 3: Data-gedreven besluitvorming. Baseer keuzes op feiten, niet op onderbuikgevoel. Een Business Control Framework biedt real-time inzicht in voortgang, risico's en resultaten.

Pijler 4: Agile governance. Rigide projectplannen werken niet in een dynamische omgeving. Kies voor governance die flexibiliteit biedt zonder controle te verliezen.

Pijler 5: Duurzame borging. Een transformatie is pas geslaagd als de verandering beklijft. Investeer in kennisoverdracht, documentatie en continue verbetering.`,
    date: "Feb 2026",
    readTime: "5 min",
  },
  {
    type: "Artikelen",
    image: "/images/team-work.jpg",
    title: "Data-gedreven werken: van buzzword naar resultaat",
    content: `Vrijwel elke organisatie wil data-gedreven werken. Maar in de praktijk blijkt de weg van ambitie naar resultaat vaak langer dan verwacht. Data is versnipperd, de kwaliteit laat te wensen over en medewerkers weten niet hoe ze data moeten interpreteren.

Het ITs Productivity Center biedt een gestructureerde aanpak om data-gedreven werken te realiseren. Wij beginnen bij het fundament: data-inventarisatie en kwaliteitsverbetering. Zonder betrouwbare data zijn dashboards en analyses waardeloos.

Vervolgens richten wij governance in. Wie is verantwoordelijk voor welke data? Welke kwaliteitseisen gelden er? Hoe worden wijzigingen beheerd? Een helder governance framework voorkomt dat data-initiatieven verzanden.

De volgende stap is visualisatie en toegankelijkheid. Wij bouwen dashboards die niet alleen mooi zijn, maar ook bruikbaar. Dashboards die aansluiten bij de dagelijkse besluitvorming van managers en medewerkers.

Tot slot investeren wij in data-geletterdheid. Want data-gedreven werken is pas succesvol als medewerkers in staat zijn om data te interpreteren en te gebruiken in hun werk.`,
    date: "Jan 2026",
    readTime: "6 min",
  },
  {
    type: "Whitepapers",
    image: "/images/team-sept-2.jpg",
    title: "Target Operating Model: uw blauwdruk voor transformatie",
    content: `Een Target Operating Model (TOM) is de blauwdruk die beschrijft hoe een organisatie haar strategie gaat realiseren. Het verbindt de strategische doelen met de operationele inrichting, van processen en governance tot technologie en mensen.

Bij ITsPeople hebben wij een bewezen methodologie ontwikkeld voor het ontwerpen en implementeren van een TOM. Onze aanpak combineert strategische analyse met praktische haalbaarheid, zodat het model niet alleen op papier werkt maar ook in de dagelijkse praktijk.

Een goed TOM beantwoordt vier kernvragen: Wat leveren wij? Hoe leveren wij het? Wie levert het? En waarmee leveren wij het? Door deze vragen systematisch te beantwoorden, ontstaat een integraal beeld van de gewenste organisatie.

Het ontwerpen van een TOM is geen eenmalige exercitie. Het is een iteratief proces waarbij stakeholders actief betrokken worden. Onze ervaring leert dat eigenaarschap essentieel is voor een succesvol TOM, het model moet gedragen worden door de organisatie.`,
    date: "Nov 2025",
    readTime: "15 min",
  },
  {
    type: "Whitepapers",
    image: "/images/team-collab.jpg",
    title: "Business Control Framework: het complete handboek",
    content: `Een Business Control Framework (BCF) biedt organisaties integraal inzicht in de voortgang, risico's en resultaten van hun transformatieprogramma's. Het is de cockpit waarmee directie en management sturen op wat er echt toe doet.

Het BCF dat ITsPeople heeft ontwikkeld combineert financiële, operationele en strategische KPI's in één geïntegreerd dashboard. Dit geeft bestuurders real-time inzicht in de gezondheid van hun transformatie, zonder afhankelijk te zijn van maandelijkse rapportages die al verouderd zijn op het moment dat ze worden gelezen.

De kracht van ons BCF zit in de eenvoud. Wij vermijden complexe scorecards met tientallen indicatoren. In plaats daarvan focussen wij op de metrics die er echt toe doen, afgestemd op de specifieke doelen en risico's van het programma.

Implementatie van het BCF gaat hand in hand met governance. Wie rapporteert wat, wanneer en aan wie? Welke escalatiepaden zijn er? Hoe worden beslissingen genomen op basis van de inzichten? Het BCF is geen rapportagetool, het is een besturingsinstrument.`,
    date: "Jan 2026",
    readTime: "20 min",
  },
  {
    type: "Artikelen",
    image: "/images/team-discussion.jpg",
    title: "Mensgerichte transformatie: waarom mensen het verschil maken",
    content: `Na meer dan 50 transformatieprojecten kunnen wij met zekerheid zeggen: het succes van een transformatie wordt niet bepaald door de technologie die wordt geïmplementeerd, maar door de mensen die ermee werken.

Te vaak zien wij organisaties die miljoenen investeren in nieuwe systemen en processen, maar slechts een fractie daarvan besteden aan change management en adoptie. Het resultaat: technisch geslaagde projecten die operationeel falen.

Mensgerichte transformatie betekent dat je mensen niet als sluitpost behandelt, maar als startpunt. Het betekent dat je investeert in begrijpen waarom medewerkers doen wat ze doen, voordat je probeert hun gedrag te veranderen.

Bij ITsPeople integreren wij de menselijke factor in elke fase van de transformatie. Van de eerste strategische analyse tot de uiteindelijke borging. Wij combineren verandermanagementexpertise met diep begrip van organisatiedynamiek.

Het resultaat: transformaties die niet alleen op papier succesvol zijn, maar die ook in de dagelijkse praktijk het verschil maken. Omdat de mensen die het moeten doen, het ook willen doen.`,
    date: "Dec 2025",
    readTime: "7 min",
  },
  {
    type: "Video's",
    image: "/images/team-sept-3.jpg",
    title: "André Keizer over de toekomst van digitale transformatie",
    content: `Keynote van André Keizer op het Transformation Summit 2025. In deze presentatie deelt André zijn visie op de toekomst van digitale transformatie en de rol die mensen daarin spelen.

Onderwerpen die aan bod komen: de evolutie van transformatieprogramma's, de impact van AI op organisaties, het belang van mensgerichte aanpakken en concrete tips voor bestuurders die hun organisatie succesvol willen transformeren.`,
    date: "Dec 2025",
    readTime: "18 min",
  },
];

const typeColors: Record<string, string> = {
  Artikelen: "bg-its-green",
  Whitepapers: "bg-its-green-dark",
  "Video's": "bg-its-charcoal",
  Podcast: "bg-its-lime",
};

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredItems = activeCategory === "Alle"
    ? items
    : items.filter((item) => item.type === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">Insights Hub</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              Kennis & <span className="gradient-text">Inzichten</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Artikelen, whitepapers, podcasts en video's over digitale transformatie, governance, compliance en de menselijke factor.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-its-green text-white"
                    : "bg-white border border-its-gray-light/30 text-its-gray-mid hover:border-its-green/30 hover:text-its-green-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Podcast */}
          {(activeCategory === "Alle" || activeCategory === "Podcast") && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-its-dark to-its-deep">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-its-green/10 border border-its-green/20 flex items-center justify-center text-5xl">🎙️</div>
                <div className="flex-grow">
                  <span className="text-its-lime text-xs font-bold uppercase tracking-wider">{featured.type}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">{featured.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">{featured.description}</p>
                  <p className="text-its-green text-sm font-medium mt-2">{featured.episodes}</p>
                </div>
                <button className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all">
                  Beluister nu →
                </button>
              </div>
            </motion.div>
          )}

          {/* Content grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${typeColors[item.type] || "bg-its-green"}`}>
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
                  <h3 className="font-bold text-its-charcoal group-hover:text-its-green-dark transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-its-gray-mid text-sm leading-relaxed line-clamp-3">
                    {item.content.split("\n\n")[0]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
