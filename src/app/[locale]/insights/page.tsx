"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { asset, BASE } from "@/lib/basePath";

type InsightItem = {
  type: string;
  image: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  sections?: { heading: string; body: string }[];
  gated?: boolean;
  whitepaperId?: string;
  video?: string;
  audio?: string;
  link?: string;
  stats?: { label: string; value: string }[];
};

const data = {
  nl: {
    categories: ["Alle", "Artikelen", "Whitepapers", "Podcast", "Tools", "Video's"],
    podcasts: [
      {
        title: "The Transformation Talk",
        description: "Onze podcast over digitale transformatie, leiderschap en de menselijke factor. Elke twee weken een nieuw gesprek met experts en leiders uit het veld. Van NIS2-compliance tot innovatief werkgedrag, van data-gedreven werken tot de toekomst van AI in organisaties.",
        episodes: "12 afleveringen",
        language: "Nederlands",
        button: "Beluister nu →",
      },
      {
        title: "The Transformation Quality Assurance Framework",
        description: "\"Quality assurance in a transformation programme is only effective when the assuring party has no loyalty conflict with the delivery party. Independence is not optional — it is the precondition for a trustworthy quality verdict.\" — TQA-F Principle 1. Onafhankelijke kwaliteitsborging versus snelheid: wanneer is assurance een rem en wanneer juist de versneller?",
        episodes: "1 aflevering",
        language: "Nederlands",
        button: "Beluister nu →",
        audio: `${BASE}/podcasts/tqa-f-onafhankelijke-kwaliteitsborging.m4a`,
      },
      {
        title: "Data Quality Score (DQS)",
        description: "Het Data Quality Score (DQS) Framework biedt een gestructureerde methode om de kwaliteit van gegevens bij complexe datamigraties op een objectieve en meetbare wijze vast te stellen. Door subjectieve begrippen om te zetten in concrete, geautomatiseerde validatieregels, voorkomt het model discussies over de betrouwbaarheid van de overgezette informatie.",
        episodes: "1 aflevering",
        language: "Nederlands",
        button: "Beluister nu →",
        audio: `${BASE}/podcasts/dqs-data-quality-score.m4a`,
      },
      {
        title: "Referentiearchitectuur Zorgsector",
        description: "Nederlandse ziekenhuizen staan voor een kantelpunt: vergrijzing, personeelstekorten en het Integraal Zorgakkoord vragen om fundamentele veranderingen. Maar hoe vertaal je strategische ambities naar concrete IT-investeringen? Deze podcast verkent waarom 30% van het IT-budget verspild wordt en hoe referentiearchitectuur dat voorkomt.",
        episodes: "1 aflevering",
        language: "Nederlands",
        button: "Beluister nu →",
        audio: `${BASE}/podcasts/referentiearchitectuur-zorgsector.m4a`,
      },
    ],
    items: [
      {
        type: "Whitepapers",
        image: asset("/images/services/quality-assurance.jpg"),
        title: "Transformation Quality Assurance Framework (TQA-F)",
        content: `Onafhankelijke kwaliteitsborging voor complexe transformatieprogramma's in het tijdperk van AI, cloud en versnelde digitalisering. Het TQA-F geeft besturen een objectief, kwantitatief en continu bijgewerkt beeld van programmagezondheid over acht dimensies.`,
        date: "2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "tqa-f",
        sections: [
          { heading: "Waarom dit whitepaper?", body: "Besturen staan vandaag voor een ongekende paradox: de druk om in hoog tempo te transformeren is nooit groter geweest, terwijl de kosten van mislukte transformaties: in operationele verstoring, verloop en reputatieschade: exponentieel zijn toegenomen. AI, cloud-native platformen en continuous delivery verkorten doorlooptijden, maar introduceren ook probabilistisch gedrag, gedeelde aansprakelijkheid met platformleveranciers en nieuwe risicocategorieën waarvoor klassieke project-assurance nooit is ontworpen." },
          { heading: "Wat u ontvangt", body: "Het volledige ITsPeople Transformation Quality Assurance Framework-whitepaper (2026), inclusief de acht kwaliteitsdimensies, de vijf geïntegreerde assurance-modules, de onafhankelijke governance-structuur en de concrete uitkomsten voor executive boards. Na het achterlaten van uw contactgegevens zenden wij u het whitepaper persoonlijk toe." },
        ],
      },
      {
        type: "Artikelen",
        image: asset("/images/andre-portret.jpg"),
        title: "Waarom de meeste transformaties slagen op de go-live en sterven anderhalf jaar later",
        content: `Door Andre Keizer, CEO & oprichter ITsPeople. Bestuurders sturen op mijlpalen, scope en go-live. En toch zakt anderhalf jaar later de helft van de programma's terug naar het oude gedrag. Wat ruim twintig jaar transformatiewerk leert over het verschil tussen winnen en blijven spelen.`,
        date: "Mei 2026",
        readTime: "5 min",
        sections: [
          { heading: "Inleiding", body: "Ik werk inmiddels ruim twintig jaar in grote transformaties. Bij ministeries, uitvoeringsorganisaties, ziekenhuizen en bij financiële instellingen. Geen enkel programma verliep zoals op papier was bedacht. Sommige eindigden in een blijvende transformatie, andere in een dure systeemvervanging zonder het gewenste resultaat. Dat verschil heeft mij jaren beziggehouden. Het zit niet in betere planning, niet in meer geld, niet in slimmer mensen — vaak gold het tegendeel. Het zit in iets wat zelden wordt benoemd, maar achteraf altijd herkenbaar is." },
          { heading: "Het patroon dat ik te vaak heb gezien", body: "Programma's worden bestuurd alsof ze een wedstrijd zijn. Er is een startfluit, een einddatum, een score in de vorm van scope en budget, en aan het eind van de wedstrijd is er gewonnen of verloren. De stuurgroep rapporteert op mijlpalen. De projectleider stuurt op afwijkingen. De leverancier wordt afgerekend op opleveringen. Dat werkt, tot het moment van de go-live. En daarna gebeurt iets dat ik te vaak heb gezien om nog toeval te kunnen noemen: het programmateam vertrekt, de staande organisatie staat er alleen voor en de gebruikers vinden hun weg terug naar het oude gedrag. Het systeem leeft, maar de transformatie sterft. Anderhalf jaar later staat de bestuurder voor diezelfde stuurgroep, alleen heet die nu 'evaluatie', en moet uitleggen waarom de beoogde voordelen niet zijn gerealiseerd." },
          { heading: "Een ander spel", body: "Waarom praten we over transformaties bij grote organisaties, en acteren we alsof het een project is? Een organisatie verandert niet één keer. Een organisatie verandert continu. De wet wijzigt, de keten verschuift, een nieuwe technologie maakt iets mogelijk wat eerder onmogelijk was. Wie zijn organisatie inricht voor één eindstreep, bouwt iets dat alleen op die ene streep klopt, en daarna langzaam uit fase loopt met de werkelijkheid. Het denken in eindige en oneindige spelen ontleen ik aan het werk van Simon Sinek (The Infinite Game, 2019). Wie speelt om te winnen, stopt zodra de wedstrijd voorbij is. Wie speelt om te blijven spelen, bouwt iets dat houdbaar is. Dat is het verschil tussen een go-live en een transformatie." },
          { heading: "Wat wij bij ITsPeople anders doen", body: "Drie dingen die in onze ervaring het verschil maken. Eén: methoden in samenhang. IPMA, PRINCE2, SAFe, Lean Six Sigma en ISTQB zijn complementaire instrumenten die wij koppelen via ons eigen Executie Framework en TQA-Framework, aangevuld met de Innovation Readiness Scan van onze partner Innduce — om de veranderbereidheid van een organisatie objectief in beeld te brengen vóór de eerste investering. Twee: technologie als versneller, mensen als motor. Technologie levert pas waarde wanneer zij wordt ingezet om mensen sneller en beter te laten beslissen, niet om hen te vervangen. Drie: kennisoverdracht als hoofdproduct. Onze instrumenten zijn ontworpen om door de opdrachtgever te worden overgenomen, zodat een volgende verandering geen transformatie meer is, maar een aanpassing." },
          { heading: "Het bewijs zit in de tweede ronde", body: "Opdrachtgevers met wie wij meerdere achtereenvolgende programma's hebben uitgevoerd, doorlopen het tweede programma typisch dertig tot vijftig procent sneller dan het eerste. Niet omdat het tweede programma kleiner is, maar omdat de organisatie zelf is veranderd. De governance is bekend, de bestuurlijke ritmes zijn ingeslepen, de kwaliteitsborging is geïnternaliseerd, de architectuur is ingericht voor verandering in plaats van tegen verandering. En, het allerbelangrijkste: de mensen weten wat van hen wordt verwacht en wat zij van het systeem kunnen verwachten. Verandering is geen project meer. Verandering is een capability geworden." },
          { heading: "De keuze waar bestuurders voor staan", body: "Bestuurders die voor een grote transformatie staan, hebben een keuze. Zij kunnen het programma inrichten als een wedstrijd die gewonnen moet worden. Of zij kunnen het inrichten als een fase in het langere spel van een organisatie die zichzelf voortdurend opnieuw uitvindt. Ik ga niet beweren dat de eerste keuze fout is. Ik beweer wel dat zij eindig is, en de werkelijkheid dat niet. Persoonlijk. Vakkundig. Inspirerend. Dat zijn niet onze marketingwaarden. Dat is hoe wij het spel spelen, en hoe wij willen blijven spelen, samen met onze opdrachtgevers. Make the Difference." },
        ],
      },
      {
        type: "Artikelen",
        image: asset("/images/insights/cybersecurity.jpg"),
        title: "NIS2 compliance: wat betekent het voor uw organisatie?",
        content: `De NIS2-richtlijn is de opvolger van de oorspronkelijke NIS-richtlijn en breidt de scope aanzienlijk uit. Waar de eerste richtlijn vooral gericht was op essentiële diensten, raakt NIS2 een veel breder scala aan organisaties.`,
        date: "Feb 2026",
        readTime: "8 min",
        sections: [
          { heading: "Inleiding", body: "De NIS2-richtlijn is de opvolger van de oorspronkelijke NIS-richtlijn en breidt de scope aanzienlijk uit. Waar de eerste richtlijn vooral gericht was op essentiële diensten, raakt NIS2 een veel breder scala aan organisaties: van energie, transport en zorg tot afvalverwerking, digitale infrastructuur en belangrijke toeleveranciers. Voor veel organisaties is NIS2 daarmee het eerste werkelijk integrale cyberweerbaarheidsregime waar zij onder vallen." },
          { heading: "Wat verandert er precies?", body: "NIS2 verplicht organisaties tot een risicogebaseerde aanpak van cybersecurity. Dit omvat niet alleen technische maatregelen zoals netwerksegmentatie, encryptie en back-upstrategieën, maar ook organisatorische aspecten zoals governance, incidentmanagement, business continuity en supply chain security. Meldplichten zijn strikt: een significant incident moet binnen 24 uur worden gemeld en binnen 72 uur nader worden toegelicht. Ketensecurity wordt expliciet: u bent medeverantwoordelijk voor de beveiliging van uw leveranciers." },
          { heading: "Bestuurlijke aansprakelijkheid", body: "Een belangrijk nieuw element is de persoonlijke aansprakelijkheid van bestuurders. Directie en bestuur worden verantwoordelijk gehouden voor het naleven van de NIS2-verplichtingen. Dit maakt cybersecurity definitief een boardroom-onderwerp en vraagt om aantoonbare betrokkenheid: besluiten moeten worden vastgelegd, risico's moeten expliciet worden geaccepteerd of gemitigeerd, en bestuurders moeten kunnen aantonen dat zij voldoende kennis hebben om te oordelen." },
          { heading: "Onze aanpak", body: "Bij ITsPeople hanteren wij een integrale compliance-aanpak in vier stappen. (1) Een gap-analyse tegen de NIS2-vereisten, met oog voor techniek, processen, governance en ketenrisico's. (2) Een pragmatische roadmap met duidelijke prioriteiten, eigenaarschap en mijlpalen. (3) Herontwerp en implementatie van processen, governance-structuren en incident response-capabilities. (4) Borging in bestuurlijke besluitvorming, awareness en leveranciersmanagement. Wij geloven dat echte compliance niet draait om documenten, maar om gedrag: en daar sturen wij nadrukkelijk op." },
        ],
      },
      {
        type: "Artikelen",
        image: asset("/images/services/business-consultancy.jpg"),
        title: "De 5 pijlers van een succesvolle digitale transformatie",
        content: `Digitale transformatie is meer dan technologie implementeren. Het is een fundamentele verandering in hoe een organisatie waarde creëert, levert en vasthoudt.`,
        date: "Feb 2026",
        readTime: "5 min",
        sections: [
          { heading: "Waarom zoveel transformaties falen", body: "Onderzoek laat al jaren hetzelfde beeld zien: een significant deel van de digitale transformaties behaalt de vooraf gestelde doelen niet. De oorzaak ligt zelden in de gekozen technologie, maar bijna altijd in hoe de verandering wordt aangepakt: onvoldoende strategische helderheid, zwakke governance, te weinig aandacht voor mensen en een gebrek aan stuurinformatie. Na het begeleiden van meer dan vijftig transformaties hebben wij vijf pijlers geïdentificeerd die het verschil maken." },
          { heading: "Pijler 1: Mensgerichte aanpak", body: "Technologie is een middel, mensen zijn de sleutel. Zonder draagvlak, adoptie en eigenaarschap stranden transformaties, hoe indrukwekkend het IT-werk ook is. Wij investeren vanaf dag één in change management, betrekken medewerkers actief bij het ontwerp van nieuwe werkwijzen en meten adoptie net zo hard als we voortgang meten." },
          { heading: "Pijler 2: Strategische helderheid", body: "Iedereen in de organisatie moet begrijpen waarom de transformatie nodig is en waar deze naartoe leidt. Een helder Target Operating Model biedt dit kompas en vertaalt strategie naar concrete keuzes op het gebied van processen, data, technologie en organisatie." },
          { heading: "Pijler 3: Data-gedreven besluitvorming", body: "Baseer keuzes op feiten, niet op onderbuikgevoel. Een Business Control Framework biedt real-time inzicht in voortgang, risico's en resultaten en maakt het mogelijk om bij te sturen voordat problemen escaleren." },
          { heading: "Pijler 4: Agile governance", body: "Rigide projectplannen werken niet in een dynamische omgeving. Kies voor governance die flexibiliteit biedt zonder controle te verliezen: korte besluitvormingscycli, heldere mandaten en expliciete go/no-go-criteria per release." },
          { heading: "Pijler 5: Duurzame borging", body: "Een transformatie is pas geslaagd als de verandering beklijft. Investeer in kennisoverdracht, documentatie en continue verbetering, en zorg dat de nieuwe werkwijze onderdeel wordt van het dagelijkse management-ritme." },
        ],
      },
      {
        type: "Artikelen",
        image: asset("/images/services/data-management.jpg"),
        title: "Data-gedreven werken: van buzzword naar resultaat",
        content: `Vrijwel elke organisatie wil data-gedreven werken. Maar in de praktijk blijkt de weg van ambitie naar resultaat vaak langer dan verwacht.`,
        date: "Jan 2026",
        readTime: "6 min",
        sections: [
          { heading: "De realiteit achter de ambitie", body: "Vrijwel elke organisatie wil data-gedreven werken. Maar in de praktijk blijkt de weg van ambitie naar resultaat vaak langer dan verwacht. Data is versnipperd, kwaliteit laat te wensen over, rollen zijn onduidelijk en medewerkers weten niet hoe ze data moeten interpreteren. Het gevolg: dashboards die niemand gebruikt en beslissingen die alsnog op gevoel worden genomen." },
          { heading: "Fundament op orde", body: "Het ITs Productivity Center hanteert een gestructureerde aanpak die begint bij het fundament: data-inventarisatie, definitie van kernbegrippen en kwaliteitsverbetering. Zonder betrouwbare data zijn zelfs de mooiste dashboards waardeloos." },
          { heading: "Governance inrichten", body: "Vervolgens richten wij data governance in. Wie is eigenaar van welke data? Welke kwaliteitseisen gelden er? Hoe worden wijzigingen beheerd? Een helder governance framework voorkomt dat data-initiatieven verzanden in eindeloze discussies." },
          { heading: "Visualisatie en toegankelijkheid", body: "De volgende stap is visualisatie en toegankelijkheid. Wij bouwen dashboards die niet alleen mooi zijn, maar aansluiten bij de dagelijkse besluitvorming van managers en medewerkers. Daarbij maken wij expliciet welke actie volgt op welke KPI." },
          { heading: "Data-geletterdheid", body: "Tot slot investeren wij in data-geletterdheid. Data-gedreven werken is pas succesvol als medewerkers in staat zijn om data te interpreteren, kritisch te bevragen en te gebruiken in hun werk. Daar zit het werkelijke verschil tussen organisaties die het wél laten werken en organisaties die blijven steken in de ambitie." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/services/process-management.jpg"),
        title: "Target Operating Model: uw blauwdruk voor transformatie",
        content: `Een Target Operating Model (TOM) is de blauwdruk die beschrijft hoe een organisatie haar strategie gaat realiseren.`,
        date: "Nov 2025",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "target-operating-model",
        sections: [
          { heading: "Wat is een Target Operating Model?", body: "Een Target Operating Model (TOM) is de blauwdruk die beschrijft hoe een organisatie haar strategie gaat realiseren. Het verbindt de strategische doelen met de operationele inrichting: van processen, governance en data tot technologie, locaties en mensen. Waar een strategie beschrijft wat u wilt bereiken, beschrijft het TOM hoe u uw organisatie daarvoor inricht." },
          { heading: "De vier kernvragen", body: "Een goed TOM beantwoordt vier kernvragen: Wát leveren wij (producten, diensten, waardeproposities)? Hoé leveren wij het (processen, klantreizen, besturing)? Wíé levert het (organisatie, rollen, skills, partners)? En waarmee leveren wij het (technologie, data, locaties, middelen)? Door deze vragen systematisch te beantwoorden ontstaat een integraal beeld van de gewenste organisatie en worden impliciete keuzes expliciet." },
          { heading: "Onze methodologie", body: "Bij ITsPeople hebben wij een bewezen methodologie ontwikkeld voor het ontwerpen en implementeren van een TOM. Onze aanpak combineert strategische analyse met praktische haalbaarheid, zodat het model niet alleen op papier werkt maar ook in de dagelijkse praktijk. Wij werken in vier fasen: strategische ijking, ontwerp van het TOM, impactanalyse en transitieplan, en begeleide implementatie met borging." },
          { heading: "Eigenaarschap als succesfactor", body: "Het ontwerpen van een TOM is geen eenmalige exercitie. Het is een iteratief proces waarbij stakeholders actief betrokken worden in werksessies, challenge-momenten en besluitvorming. Onze ervaring leert dat eigenaarschap essentieel is voor een succesvol TOM: het model moet gedragen worden door de organisatie, anders wordt het een document in een la." },
          { heading: "Van ontwerp naar realisatie", body: "Het TOM is het startpunt, niet het eindpunt. Wij vertalen het model naar een concrete transitie-roadmap met prioriteiten, afhankelijkheden en businesscases per stap, en begeleiden de implementatie via een Transition Support Office. Zo wordt uit de blauwdruk een bestuurbaar transformatieprogramma." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/insights/data-strategy.jpg"),
        title: "Business Control Framework: het complete handboek",
        content: `Een Business Control Framework (BCF) biedt organisaties integraal inzicht in de voortgang, risico's en resultaten van hun transformatieprogramma's.`,
        date: "Jan 2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "business-control-framework",
        sections: [
          { heading: "Waarom een Business Control Framework?", body: "Een Business Control Framework (BCF) biedt organisaties integraal inzicht in de voortgang, risico's en resultaten van hun transformatieprogramma's. Het is de cockpit waarmee directie en management sturen op wat er echt toe doet. In grote transformaties zijn financiën, scope, planning, baten en risico's doorgaans verspreid over verschillende rapportages en eigenaren: een BCF brengt ze samen in één bestuurbaar geheel." },
          { heading: "Integrale KPI's, één dashboard", body: "Het BCF dat ITsPeople heeft ontwikkeld combineert financiële, operationele en strategische KPI's in één geïntegreerd dashboard. Dit geeft bestuurders real-time inzicht in de gezondheid van hun transformatie, zonder afhankelijk te zijn van maandelijkse rapportages die al verouderd zijn op het moment dat ze worden gelezen." },
          { heading: "Eenvoud als ontwerpprincipe", body: "De kracht van ons BCF zit in eenvoud. Wij vermijden complexe scorecards met tientallen indicatoren. In plaats daarvan focussen wij op de metrics die er écht toe doen, afgestemd op de specifieke doelen en risico's van het programma. Liever tien KPI's waarop daadwerkelijk wordt gestuurd, dan vijftig KPI's die niemand leest." },
          { heading: "Governance, niet alleen rapportage", body: "Implementatie van het BCF gaat hand in hand met governance. Wie rapporteert wat, wanneer en aan wie? Welke escalatiepaden zijn er? Hoe worden beslissingen genomen op basis van de inzichten? Het BCF is geen rapportagetool, het is een besturingsinstrument dat pas werkt als het is ingebed in het besluitvormingsritme." },
          { heading: "Onze implementatie-aanpak", body: "Wij implementeren een BCF in zes stappen: (1) ijking van programdoelstellingen en baten, (2) ontwerp van de KPI-set, (3) inrichting van datastromen en rapportage-tooling, (4) koppeling aan het governance-ritme, (5) training van gebruikers en (6) continue verbetering op basis van bestuurlijke ervaring. Het resultaat is een framework dat meegroeit met het programma en dat bestuurders werkelijk in staat stelt om te sturen." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/team-discussion.jpg"),
        title: "Leiden van Bevlogen Transformaties",
        content: `70% van alle veranderprogramma's faalt. Niet door technologie, maar door mensen. Dit whitepaper onthult waarom medewerkersbetrokkenheid de cruciale succesfactor is die de meeste organisaties over het hoofd zien — en hoe transformationeel leiderschap het verschil maakt tussen een geslaagde transitie en een kostbare mislukking.`,
        date: "2024",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "leiden-van-bevlogen-transformaties",
        sections: [
          { heading: "Waarom dit whitepaper?", body: "Organisaties opereren in een steeds competitievere markt waarin driejarenplannen achterhaald zijn en de aandacht voor de mens meestal minimaal is. McKinsey & Company stelt dat ongeveer 70% van de veranderprogramma's niet hun doelen behaalt, vanwege weerstand en weinig support vanuit management. Dit whitepaper onderzoekt twee trends die het verschil maken: medewerkersbetrokkenheid als succesfactor en de opkomst van een nieuw type leiderschap." },
          { heading: "De betrokkenheidscrisis", body: "Uit onderzoek van Gallup blijkt dat wereldwijd slechts 32% van de medewerkers betrokken is, terwijl 18% volledig mentaal is afgehaakt. Lage betrokkenheid leidt tot meer verloop, lagere productiviteit, slechtere kwaliteit en minder klanttevredenheid. Bevlogen medewerkers daarentegen presteren consequent beter en blijven langer in dienst. Het verschil in verloop kan oplopen tot 43%." },
          { heading: "Transformationeel leiderschap", body: "Traditionele leiderschapsstijlen volstaan niet meer. De opkomst van hybride en empowered teams vraagt om leiderschap dat inspireert, richting geeft en ruimte biedt voor autonomie en ontwikkeling. Transformationeel leiderschap — waarbij de leider medewerkers motiveert om hun volledige potentieel te benutten — blijkt de meest effectieve stijl voor organisaties in transitie." },
          { heading: "Wat u ontvangt", body: "Het volledige ITsPeople whitepaper met wetenschappelijk onderbouwde inzichten over bevlogenheid en betrokkenheid, de rol van de leiderschapsstijl, en concrete handvatten voor leiders: van het creëren van een heldere visie tot het vergroten van betrokkenheid en investeren in leiderschapsontwikkeling. Na het achterlaten van uw contactgegevens zenden wij u het whitepaper persoonlijk toe." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/insights/ai-technology.jpg"),
        title: "De Toekomst van Ziekenhuisarchitectuur in Nederland",
        content: `Organisaties die IT en bedrijfsstrategie niet op één lijn brengen, verspillen gemiddeld 30% van hun IT-budget. Dit whitepaper laat zien hoe referentiearchitectuur zorginstellingen helpt om van strategische ambitie naar concrete, waardevolle IT-investeringen te komen — specifiek voor de Nederlandse context met DBC/DOT, het IZA en de vier zorgwaardestromen.`,
        date: "April 2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "referentiearchitectuur-zorgsector",
        sections: [
          { heading: "Het probleem", body: "Nederlandse ziekenhuizen staan voor een kantelpunt. De vergrijzing versnelt, personeelstekorten groeien en het Integraal Zorgakkoord (IZA) vraagt om fundamentele veranderingen. Tegelijkertijd biedt technologie ongekende mogelijkheden — van AI tot slimme gegevensuitwisseling. Toch worstelen veel zorginstellingen met dezelfde vraag: hoe vertaal je strategische ambities naar concrete IT-investeringen die meetbaar waarde opleveren?" },
          { heading: "De oplossing: referentiearchitectuur", body: "Een bewezen instrument dat drie fundamentele vragen beantwoordt: wat doet onze organisatie (business capabilities in kaart brengen), waar liggen de prioriteiten (strategische focus bepalen vanuit waardecreatie), en waar moeten we investeren (capability gaps vertalen naar een concrete roadmap). Door te vertrekken vanuit wat de organisatie doet in plaats van welke systemen er draaien, ontstaat een stabiel fundament dat niet verandert bij elke reorganisatie of systeemvervanging." },
          { heading: "De vier waardestromen", body: "Nederlandse waardestromen lopen dwars door de muren van instellingen heen — van GGD tot ziekenhuis tot wijkverpleging. Het whitepaper beschrijft vier waardestromen (preventie, diagnostiek, behandeling en herstel & nazorg) en laat zien hoe referentiearchitectuur helpt om IT-investeringen te alignen met deze ketens. Drie technologiedomeinen staan centraal: AI, data-interoperabiliteit (MedMij, Mitz, Nuts) en cloud-modernisering." },
          { heading: "Wat u ontvangt", body: "Het volledige ITsPeople whitepaper met de vierfasenaanpak voor zorginstellingen, de capability-mapping methodiek, vergelijking tussen internationaal en Nederlands zorgmodel, en een concrete investeringsagenda in de taal van de business. Na het achterlaten van uw contactgegevens zenden wij u het whitepaper persoonlijk toe." },
        ],
      },
      {
        type: "Artikelen",
        image: asset("/images/team-collab.jpg"),
        title: "Mensgerichte transformatie: waarom mensen het verschil maken",
        content: `Na meer dan 50 transformatieprojecten kunnen wij met zekerheid zeggen: het succes van een transformatie wordt bepaald door de mensen die ermee werken.`,
        date: "Dec 2025",
        readTime: "7 min",
        sections: [
          { heading: "Technologie is nooit de bottleneck", body: "Na meer dan vijftig transformatieprojecten kunnen wij met zekerheid zeggen: het succes van een transformatie wordt niet bepaald door de technologie die wordt geïmplementeerd, maar door de mensen die ermee werken. Te vaak zien wij organisaties die miljoenen investeren in nieuwe systemen en processen, maar slechts een fractie daarvan besteden aan change management en adoptie." },
          { heading: "Mensen als startpunt, niet als sluitpost", body: "Mensgerichte transformatie betekent dat je mensen niet als sluitpost behandelt, maar als startpunt. Het betekent dat je investeert in begrijpen waarom medewerkers doen wat ze doen, voordat je probeert hun gedrag te veranderen. Het vraagt om luisteren, co-creëren en het expliciet maken van wat er voor mensen op het spel staat." },
          { heading: "Onze aanpak", body: "Bij ITsPeople integreren wij de menselijke factor in elke fase van de transformatie. Van de eerste strategische analyse tot de uiteindelijke borging. Wij combineren verandermanagement-expertise met diep begrip van organisatiedynamiek, werken met change-impact-analyses per medewerkersgroep en bouwen expliciete adoptiemetrics in de programma-rapportage in. Leiderschap krijgt een centrale rol: zonder zichtbaar, consistent gedrag van de top verandert er onderin weinig." },
          { heading: "Resultaat", body: "Het resultaat: transformaties die niet alleen op papier succesvol zijn, maar die ook in de dagelijkse praktijk het verschil maken. Omdat de mensen die het moeten doen, het ook willen doen: en weten hoe ze het moeten doen." },
        ],
      },
      {
        type: "Tools",
        image: asset("/images/services/ai-governance.jpg"),
        title: "IT Governance Quickscan",
        content: `Hoe volwassen is uw IT-organisatie? Beantwoord 15 gerichte vragen over strategie, projectmanagement, data, security en infrastructuur en ontvang direct uw eindscore met concrete verbeterkansen. Gebaseerd op COBIT en bewezen best practices.`,
        date: "2026",
        readTime: "~5 min",
        link: asset("/tools/governance-quickscan.html"),
        stats: [
          { label: "Vragen", value: "15" },
          { label: "Domeinen", value: "5" },
          { label: "Eindscore", value: "0–100" },
        ],
      },
      {
        type: "Video's",
        image: asset("/images/team-sept-3.jpg"),
        title: "ITsPeople, wij maken het verschil",
        content: `De officiële ITsPeople bedrijfsfilm. Ontdek in enkele minuten wie wij zijn, waar wij in geloven en hoe wij samen met onze klanten duurzame transformaties realiseren.`,
        date: "2025",
        readTime: "Bedrijfsfilm",
        video: asset("/videos/itspeople-promo.mp4"),
      },
    ] as InsightItem[],
    typeColors: {
      "Artikelen": "bg-its-green",
      "Whitepapers": "bg-its-green-dark",
      "Video's": "bg-its-charcoal",
      "Podcast": "bg-its-lime",
      "Tools": "bg-its-deep",
    },
    heroLabel: "Insights Hub",
    heroTitle: "Kennis &",
    heroTitleHighlight: "Inzichten",
    heroDesc: "Artikelen, whitepapers, podcasts en video's over digitale transformatie, governance, compliance en de menselijke factor.",
    readMore: "Lees verder →",
    requestWhitepaper: "Whitepaper aanvragen →",
    closeLabel: "Sluiten",
    form: {
      title: "Whitepaper aanvragen",
      intro: "Laat uw gegevens achter en wij zenden u het whitepaper persoonlijk toe.",
      name: "Naam",
      company: "Organisatie",
      email: "Zakelijk e-mailadres",
      phone: "Telefoonnummer (optioneel)",
      message: "Eventuele toelichting (optioneel)",
      submit: "Aanvraag versturen",
      submitting: "Versturen…",
      successTitle: "Dank u wel!",
      successBody: "Wij hebben uw aanvraag ontvangen en sturen het whitepaper binnen één werkdag naar uw e-mailadres.",
      errorTitle: "Er ging iets mis",
      errorBody: "Uw aanvraag kon niet worden verzonden. Probeer het opnieuw of mail rechtstreeks naar info@itspeople.nl.",
      privacy: "Wij gaan zorgvuldig om met uw gegevens en gebruiken deze uitsluitend om uw aanvraag te beantwoorden.",
    },
  },
  en: {
    categories: ["All", "Articles", "Whitepapers", "Podcast", "Tools", "Videos"],
    podcasts: [
      {
        title: "The Transformation Talk",
        description: "Our podcast on digital transformation, leadership and the human factor. A new conversation with experts and leaders from the field every two weeks. From NIS2 compliance to innovative work behaviour, from data-driven working to the future of AI in organisations.",
        episodes: "12 episodes",
        language: "Dutch",
        button: "Listen now →",
      },
      {
        title: "The Transformation Quality Assurance Framework",
        description: "\"Quality assurance in a transformation programme is only effective when the assuring party has no loyalty conflict with the delivery party. Independence is not optional — it is the precondition for a trustworthy quality verdict.\" — TQA-F Principle 1. Independent quality assurance versus speed: when is assurance a brake and when is it the accelerator?",
        episodes: "1 episode",
        language: "Dutch",
        button: "Listen now →",
        audio: `${BASE}/podcasts/tqa-f-onafhankelijke-kwaliteitsborging.m4a`,
      },
      {
        title: "Data Quality Score (DQS)",
        description: "The Data Quality Score (DQS) Framework provides a structured method to objectively and measurably determine data quality in complex data migrations. By converting subjective concepts into concrete, automated validation rules, the model prevents discussions about the reliability of migrated information.",
        episodes: "1 episode",
        language: "Dutch",
        button: "Listen now →",
        audio: `${BASE}/podcasts/dqs-data-quality-score.m4a`,
      },
      {
        title: "Hospital Reference Architecture",
        description: "Dutch hospitals are at a tipping point: an ageing population, staff shortages and the Integral Care Agreement demand fundamental changes. But how do you translate strategic ambitions into concrete IT investments? This podcast explores why 30% of IT budgets are wasted and how reference architecture prevents that.",
        episodes: "1 episode",
        language: "Dutch",
        button: "Listen now →",
        audio: `${BASE}/podcasts/referentiearchitectuur-zorgsector.m4a`,
      },
    ],
    items: [
      {
        type: "Whitepapers",
        image: asset("/images/services/quality-assurance.jpg"),
        title: "Transformation Quality Assurance Framework (TQA-F)",
        content: `Independent quality assurance for complex transformation programmes in the age of AI, cloud and accelerated digitalisation. The TQA-F gives executive boards an objective, quantitative and continuously updated view of programme health across eight dimensions.`,
        date: "2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "tqa-f",
        sections: [
          { heading: "Why this whitepaper?", body: "Boards today face an unprecedented paradox: the pressure to transform at speed has never been higher, while the cost of failed transformations: in operational disruption, attrition and reputational damage: has grown exponentially. AI, cloud-native platforms and continuous delivery compress timelines, but also introduce probabilistic behaviour, shared accountability with platform vendors and new categories of risk that traditional project assurance was never designed to address." },
          { heading: "What you will receive", body: "The full ITsPeople Transformation Quality Assurance Framework whitepaper (2026), including the eight quality dimensions, the five integrated assurance modules, the independent governance structure and the concrete outcomes for executive boards. Once you leave your contact details, we will send the whitepaper to you personally." },
        ],
      },
      {
        type: "Articles",
        image: asset("/images/andre-portret.jpg"),
        title: "Why most transformations succeed at go-live and die eighteen months later",
        content: `By Andre Keizer, CEO & founder of ITsPeople. Executives manage on milestones, scope and go-live dates. Yet eighteen months later, half of all programmes regress to old behaviour. What over twenty years of transformation work teach us about the difference between winning and continuing to play.`,
        date: "May 2026",
        readTime: "5 min",
        sections: [
          { heading: "Introduction", body: "I have been working in major transformations for over twenty years. At ministries, executive agencies, hospitals and financial institutions. Not a single programme unfolded as designed on paper. Some ended in a lasting transformation, others in an expensive system replacement without the intended result. That difference has occupied me for years. It is not about better planning, not about more money, not about smarter people — often the opposite was true. It is about something that is rarely named, but always recognisable in hindsight." },
          { heading: "The pattern I have seen too often", body: "Programmes are governed as if they were a contest. There is a starting whistle, an end date, a score in the form of scope and budget, and at the end of the match someone has won or lost. The steering group reports on milestones. The project lead manages deviations. The supplier is held to delivery dates. That works, until the moment of go-live. And after that, something happens too often to call coincidence: the programme team departs, the standing organisation is left alone, and the users find their way back to the old behaviour. The system is alive, but the transformation dies. Eighteen months later, the executive stands before the same steering group — now renamed 'evaluation' — and has to explain why the intended benefits were not realised." },
          { heading: "A different game", body: "Why do we talk about transformations in large organisations and act as if it were a project? An organisation does not change once. An organisation changes continuously. Legislation shifts, the value chain reconfigures, a new technology makes possible what was previously impossible. Anyone who designs their organisation for a single finish line builds something that only fits that one line, and then slowly drifts out of phase with reality. The distinction between finite and infinite games comes from Simon Sinek's work (The Infinite Game, 2019). Those who play to win stop once the match is over. Those who play to keep playing build something that endures. That is the difference between a go-live and a transformation." },
          { heading: "What we do differently at ITsPeople", body: "Three things that, in our experience, make the difference. One: methods in concert, not in isolation. IPMA, PRINCE2, SAFe, Lean Six Sigma and ISTQB are complementary instruments that we connect through our proprietary Execution Framework and TQA Framework, supplemented by the Innovation Readiness Scan from our partner Innduce — to objectively measure the change readiness of an organisation before the first investment is made. Two: technology as accelerator, people as engine. Technology only delivers value when it enables people to decide faster and better, not when it replaces them. Three: knowledge transfer as our primary product. Our instruments are designed to be adopted by the client, so that the next change is no longer a transformation but an adjustment." },
          { heading: "The proof is in the second round", body: "Clients with whom we have delivered multiple consecutive programmes typically complete the second programme thirty to fifty per cent faster than the first. Not because the second programme is smaller, but because the organisation itself has changed. The governance is familiar, the executive rhythms are ingrained, the quality assurance is internalised, the architecture is built for change instead of against change. And, most importantly: people know what is expected of them and what they can expect from the system. Change is no longer a project. Change has become a capability." },
          { heading: "The choice executives face", body: "Executives standing before a major transformation have a choice. They can set up the programme as a contest to be won. Or they can set it up as a phase in the longer game of an organisation continuously reinventing itself. I will not claim that the first choice is wrong. I will claim that it is finite, and reality is not. Personal. Professional. Inspiring. These are not our marketing values. This is how we play the game, and how we want to keep playing it, together with our clients. Make the Difference." },
        ],
      },
      {
        type: "Articles",
        image: asset("/images/insights/cybersecurity.jpg"),
        title: "NIS2 compliance: what does it mean for your organisation?",
        content: `The NIS2 Directive is the successor to the original NIS Directive and significantly expands the scope. Where the first directive was mainly aimed at essential services, NIS2 affects a much broader range of organisations.`,
        date: "Feb 2026",
        readTime: "8 min",
        sections: [
          { heading: "Introduction", body: "The NIS2 Directive is the successor to the original NIS Directive and significantly expands the scope. Where the first directive was mainly aimed at essential services, NIS2 affects a much broader range of organisations: from energy, transport and healthcare to waste management, digital infrastructure and important suppliers. For many organisations, NIS2 is thus the first truly comprehensive cyber resilience regime they fall under." },
          { heading: "What exactly changes?", body: "NIS2 requires organisations to take a risk-based approach to cybersecurity. This includes not only technical measures such as network segmentation, encryption and backup strategies, but also organisational aspects such as governance, incident management, business continuity and supply chain security. Reporting obligations are strict: a significant incident must be reported within 24 hours and explained in more detail within 72 hours. Supply chain security becomes explicit: you are co-responsible for the security of your suppliers." },
          { heading: "Executive Accountability", body: "An important new element is the personal accountability of executives. Management and boards are held responsible for compliance with NIS2 obligations. This makes cybersecurity definitively a boardroom issue and requires demonstrable involvement: decisions must be documented, risks must be explicitly accepted or mitigated, and executives must be able to demonstrate that they have sufficient knowledge to make judgements." },
          { heading: "Our Approach", body: "At ITsPeople, we take a comprehensive compliance approach in four steps. (1) A gap analysis against NIS2 requirements, with attention to technology, processes, governance and supply chain risks. (2) A pragmatic roadmap with clear priorities, ownership and milestones. (3) Redesign and implementation of processes, governance structures and incident response capabilities. (4) Anchoring in executive decision-making, awareness and supplier management. We believe that true compliance is not about documents, but about behaviour: and we focus deliberately on that." },
        ],
      },
      {
        type: "Articles",
        image: asset("/images/services/business-consultancy.jpg"),
        title: "The 5 pillars of successful digital transformation",
        content: `Digital transformation is more than implementing technology. It is a fundamental change in how an organisation creates, delivers and retains value.`,
        date: "Feb 2026",
        readTime: "5 min",
        sections: [
          { heading: "Why so many transformations fail", body: "Research has shown the same picture for years: a significant portion of digital transformations fail to achieve their stated goals. The cause is rarely the technology chosen, but almost always how the change is approached: insufficient strategic clarity, weak governance, too little attention to people, and a lack of steering information. After guiding more than fifty transformations, we have identified five pillars that make the difference." },
          { heading: "Pillar 1: Human-centred approach", body: "Technology is a means, people are the key. Without buy-in, adoption and ownership, transformations fail, no matter how impressive the IT work is. We invest from day one in change management, actively involve employees in designing new ways of working and measure adoption as rigorously as we measure progress." },
          { heading: "Pillar 2: Strategic clarity", body: "Everyone in the organisation must understand why the transformation is necessary and where it leads. A clear Target Operating Model provides this compass and translates strategy into concrete choices regarding processes, data, technology and organisation." },
          { heading: "Pillar 3: Data-driven decision-making", body: "Base choices on facts, not on gut feeling. A Business Control Framework provides real-time insight into progress, risks and results and enables you to adjust course before problems escalate." },
          { heading: "Pillar 4: Agile governance", body: "Rigid project plans don't work in a dynamic environment. Choose governance that offers flexibility without losing control: short decision-making cycles, clear mandates and explicit go/no-go criteria per release." },
          { heading: "Pillar 5: Sustainable embedding", body: "A transformation is only successful when the change sticks. Invest in knowledge transfer, documentation and continuous improvement, and ensure that the new way of working becomes part of the daily management rhythm." },
        ],
      },
      {
        type: "Articles",
        image: asset("/images/services/data-management.jpg"),
        title: "Data-driven working: from buzzword to results",
        content: `Almost every organisation wants to work data-driven. But in practice, the path from ambition to results often takes longer than expected.`,
        date: "Jan 2026",
        readTime: "6 min",
        sections: [
          { heading: "The reality behind the ambition", body: "Almost every organisation wants to work data-driven. But in practice, the path from ambition to results often takes longer than expected. Data is fragmented, quality is poor, roles are unclear and employees don't know how to interpret data. The result: dashboards that nobody uses and decisions that are still made on gut feeling." },
          { heading: "Foundation in order", body: "The ITs Productivity Center takes a structured approach that starts with the foundation: data inventory, definition of core concepts and quality improvement. Without reliable data, even the most beautiful dashboards are worthless." },
          { heading: "Implementing governance", body: "Next, we implement data governance. Who owns which data? What quality standards apply? How are changes managed? A clear governance framework prevents data initiatives from bogging down in endless discussions." },
          { heading: "Visualisation and accessibility", body: "The next step is visualisation and accessibility. We build dashboards that are not only beautiful, but also align with the daily decision-making of managers and employees. In doing so, we make explicit what action follows which KPI." },
          { heading: "Data literacy", body: "Finally, we invest in data literacy. Data-driven working is only successful when employees are able to interpret data, challenge it critically and use it in their work. That's where the real difference lies between organisations that make it work and organisations that remain stuck in the ambition." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/services/process-management.jpg"),
        title: "Target Operating Model: your transformation blueprint",
        content: `A Target Operating Model (TOM) is the blueprint that describes how an organisation will realise its strategy.`,
        date: "Nov 2025",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "target-operating-model",
        sections: [
          { heading: "What is a Target Operating Model?", body: "A Target Operating Model (TOM) is the blueprint that describes how an organisation will realise its strategy. It connects strategic goals with operational design: from processes, governance and data to technology, locations and people. Where a strategy describes what you want to achieve, the TOM describes how you structure your organisation to achieve it." },
          { heading: "The four core questions", body: "A good TOM answers four core questions: What do we deliver (products, services, value propositions)? How do we deliver it (processes, customer journeys, management)? Who delivers it (organisation, roles, skills, partners)? And with what do we deliver it (technology, data, locations, resources)? By systematically answering these questions, an integrated picture of the desired organisation emerges and implicit choices become explicit." },
          { heading: "Our methodology", body: "At ITsPeople, we have developed a proven methodology for designing and implementing a TOM. Our approach combines strategic analysis with practical feasibility, so the model not only works on paper but also in daily practice. We work in four phases: strategic alignment, TOM design, impact analysis and transition plan, and guided implementation with embedding." },
          { heading: "Ownership as a success factor", body: "Designing a TOM is not a one-time exercise. It is an iterative process where stakeholders are actively involved in working sessions, challenge moments and decision-making. Our experience shows that ownership is essential for a successful TOM: the model must be supported by the organisation, otherwise it becomes a document in a drawer." },
          { heading: "From design to realisation", body: "The TOM is the starting point, not the end point. We translate the model into a concrete transition roadmap with priorities, dependencies and business cases per step, and guide implementation through a Transition Support Office. This turns the blueprint into a manageable transformation programme." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/insights/data-strategy.jpg"),
        title: "Business Control Framework: the complete handbook",
        content: `A Business Control Framework (BCF) provides organisations with integrated insight into the progress, risks and results of their transformation programmes.`,
        date: "Jan 2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "business-control-framework",
        sections: [
          { heading: "Why a Business Control Framework?", body: "A Business Control Framework (BCF) provides organisations with integrated insight into the progress, risks and results of their transformation programmes. It is the cockpit with which management and executives steer what really matters. In large transformations, finances, scope, planning, benefits and risks are usually spread across different reports and owners: a BCF brings them together in one manageable whole." },
          { heading: "Integrated KPIs, one dashboard", body: "The BCF that ITsPeople has developed combines financial, operational and strategic KPIs in one integrated dashboard. This gives executives real-time insight into the health of their transformation, without relying on monthly reports that are already outdated when they are released." },
          { heading: "Simplicity as design principle", body: "The strength of our BCF lies in simplicity. We avoid complex scorecards with dozens of indicators. Instead, we focus on the metrics that really matter, aligned with the specific goals and risks of the programme. Rather ten KPIs that are actually steered on, than fifty KPIs that nobody reads." },
          { heading: "Governance, not just reporting", body: "Implementation of the BCF goes hand in hand with governance. Who reports what, when and to whom? What escalation paths are there? How are decisions made based on insights? The BCF is not a reporting tool, it is a steering instrument that only works when embedded in the decision-making rhythm." },
          { heading: "Our implementation approach", body: "We implement a BCF in six steps: (1) alignment of programme objectives and benefits, (2) design of the KPI set, (3) set-up of data flows and reporting tools, (4) linking to the governance rhythm, (5) training of users and (6) continuous improvement based on executive experience. The result is a framework that grows with the programme and truly enables executives to steer." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/team-discussion.jpg"),
        title: "Leading Passionate Transformations",
        content: `70% of all change programmes fail. Not because of technology, but because of people. This whitepaper reveals why employee engagement is the critical success factor most organisations overlook — and how transformational leadership makes the difference between a successful transition and a costly failure.`,
        date: "2024",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "leiden-van-bevlogen-transformaties",
        sections: [
          { heading: "Why this whitepaper?", body: "Organisations operate in an increasingly competitive market where three-year plans are outdated and attention to people is usually minimal. McKinsey & Company states that approximately 70% of change programmes fail to achieve their goals, due to resistance and insufficient management support. This whitepaper explores two trends that make the difference: employee engagement as a success factor and the emergence of a new type of leadership." },
          { heading: "The engagement crisis", body: "Research by Gallup shows that globally only 32% of employees are engaged, while 18% are completely mentally checked out. Low engagement leads to higher turnover, lower productivity, poorer quality and reduced customer satisfaction. Engaged employees, on the other hand, consistently perform better and stay longer. The difference in turnover can be as high as 43%." },
          { heading: "Transformational leadership", body: "Traditional leadership styles are no longer sufficient. The rise of hybrid and empowered teams requires leadership that inspires, provides direction and offers space for autonomy and development. Transformational leadership — where the leader motivates employees to reach their full potential — proves to be the most effective style for organisations in transition." },
          { heading: "What you receive", body: "The full ITsPeople whitepaper with scientifically substantiated insights on passion and engagement, the role of leadership style, and concrete guidelines for leaders: from creating a clear vision to increasing engagement and investing in leadership development. After leaving your contact details, we will send you the whitepaper personally." },
        ],
      },
      {
        type: "Whitepapers",
        image: asset("/images/insights/ai-technology.jpg"),
        title: "The Future of Hospital Architecture in the Netherlands",
        content: `Organisations that fail to align IT and business strategy waste an average of 30% of their IT budget. This whitepaper shows how reference architecture helps healthcare institutions move from strategic ambition to concrete, valuable IT investments — specifically for the Dutch context with DBC/DOT, the IZA and the four care value streams.`,
        date: "April 2026",
        readTime: "Whitepaper",
        gated: true,
        whitepaperId: "referentiearchitectuur-zorgsector",
        sections: [
          { heading: "The problem", body: "Dutch hospitals are at a tipping point. An ageing population, growing staff shortages and the Integral Care Agreement (IZA) demand fundamental changes. At the same time, technology offers unprecedented possibilities — from AI to smart data exchange. Yet many healthcare institutions struggle with the same question: how do you translate strategic ambitions into concrete IT investments that deliver measurable value?" },
          { heading: "The solution: reference architecture", body: "A proven instrument that answers three fundamental questions: what does our organisation do (mapping business capabilities), where are the priorities (determining strategic focus from value creation), and where should we invest (translating capability gaps into a concrete roadmap). By starting from what the organisation does rather than which systems it runs, a stable foundation emerges that doesn't change with every reorganisation or system replacement." },
          { heading: "The four value streams", body: "Dutch value streams cut across institutional boundaries — from public health to hospitals to community nursing. The whitepaper describes four value streams (prevention, diagnostics, treatment, and recovery & aftercare) and shows how reference architecture helps align IT investments with these chains. Three technology domains are central: AI, data interoperability (MedMij, Mitz, Nuts) and cloud modernisation." },
          { heading: "What you receive", body: "The full ITsPeople whitepaper with the four-phase approach for healthcare institutions, the capability-mapping methodology, comparison between international and Dutch healthcare models, and a concrete investment agenda in business language. After leaving your contact details, we will send you the whitepaper personally." },
        ],
      },
      {
        type: "Articles",
        image: asset("/images/team-collab.jpg"),
        title: "Human-centred transformation: why people make the difference",
        content: `After more than 50 transformation projects, we can say with certainty: the success of a transformation is determined by the people who work with it.`,
        date: "Dec 2025",
        readTime: "7 min",
        sections: [
          { heading: "Technology is never the bottleneck", body: "After more than fifty transformation projects, we can say with certainty: the success of a transformation is not determined by the technology implemented, but by the people who work with it. Too often we see organisations investing millions in new systems and processes, but spending only a fraction of that on change management and adoption." },
          { heading: "People as a starting point, not an afterthought", body: "Human-centred transformation means not treating people as an afterthought, but as a starting point. It means investing in understanding why employees do what they do, before you try to change their behaviour. It requires listening, co-creation and making explicit what is at stake for people." },
          { heading: "Our approach", body: "At ITsPeople, we integrate the human factor in every phase of transformation. From initial strategic analysis to final embedding. We combine change management expertise with deep understanding of organisational dynamics, work with change-impact analyses per employee group and build explicit adoption metrics into programme reporting. Leadership plays a central role: without visible, consistent behaviour from the top, little changes at the bottom." },
          { heading: "Result", body: "The result: transformations that are not only successful on paper, but also make a real difference in daily practice. Because the people who have to do it also want to do it: and know how to do it." },
        ],
      },
      {
        type: "Tools",
        image: asset("/images/services/ai-governance.jpg"),
        title: "IT Governance Quickscan",
        content: `How mature is your IT organisation? Answer 15 targeted questions on strategy, project management, data, security and infrastructure and receive your final score instantly, with concrete improvement opportunities. Based on COBIT and proven best practices.`,
        date: "2026",
        readTime: "~5 min",
        link: asset("/tools/governance-quickscan.html"),
        stats: [
          { label: "Questions", value: "15" },
          { label: "Domains", value: "5" },
          { label: "Final score", value: "0–100" },
        ],
      },
      {
        type: "Videos",
        image: asset("/images/team-sept-3.jpg"),
        title: "ITsPeople, making the difference",
        content: `The official ITsPeople corporate film. In a few minutes, discover who we are, what we stand for and how we deliver sustainable transformations together with our clients.`,
        date: "2025",
        readTime: "Corporate film",
        video: asset("/videos/itspeople-promo.mp4"),
      },
    ] as InsightItem[],
    typeColors: {
      "Articles": "bg-its-green",
      "Whitepapers": "bg-its-green-dark",
      "Videos": "bg-its-charcoal",
      "Podcast": "bg-its-lime",
      "Tools": "bg-its-deep",
    },
    heroLabel: "Insights Hub",
    heroTitle: "Knowledge &",
    heroTitleHighlight: "Insights",
    heroDesc: "Articles, whitepapers, podcasts and videos on digital transformation, governance, compliance and the human factor.",
    readMore: "Read more →",
    requestWhitepaper: "Request whitepaper →",
    closeLabel: "Close",
    form: {
      title: "Request whitepaper",
      intro: "Leave your details and we will send the whitepaper to you personally.",
      name: "Name",
      company: "Organisation",
      email: "Business email",
      phone: "Phone number (optional)",
      message: "Additional notes (optional)",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Thank you!",
      successBody: "We have received your request and will send the whitepaper to your email within one business day.",
      errorTitle: "Something went wrong",
      errorBody: "Your request could not be submitted. Please try again or email us directly at info@itspeople.nl.",
      privacy: "We handle your details with care and use them solely to respond to your request.",
    },
  },
};

export default function InsightsPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];
  const [activeCategory, setActiveCategory] = useState(d.categories[0]);
  const [selected, setSelected] = useState<InsightItem | null>(null);
  const [leadItem, setLeadItem] = useState<InsightItem | null>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const filteredItems = activeCategory === (locale === "nl" ? "Alle" : "All")
    ? d.items
    : d.items.filter((item) => item.type === activeCategory);

  const openItem = (item: InsightItem) => {
    if (item.gated) {
      setLeadItem(item);
      setFormState("idle");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } else {
      setSelected(item);
    }
  };

  const submitLead = async (e: FormEvent) => {
    e.preventDefault();
    if (!leadItem) return;
    setFormState("submitting");
    try {
      const whitepaper = leadItem.whitepaperId ?? leadItem.title;
      const subject = encodeURIComponent(`Whitepaper aanvraag — ${whitepaper}`);
      const body = encodeURIComponent(
        `Naam: ${form.name}\nBedrijf: ${form.company}\nE-mail: ${form.email}\nTelefoon: ${form.phone || "-"}\n\nBericht:\n${form.message || "(geen)"}\n\nWhitepaper: ${whitepaper}\nTaal: ${locale}`
      );
      window.location.href = `mailto:info@itspeople.nl?subject=${subject}&body=${body}`;
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.heroLabel}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              {d.heroTitle} <span className="gradient-text">{d.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              {d.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {d.categories.map((cat) => (
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

          {/* Podcasts */}
          {(activeCategory === (locale === "nl" ? "Alle" : "All") || activeCategory === "Podcast") && (
            <div className="space-y-6 mb-12">
              {d.podcasts.map((podcast, pi) => (
                <motion.div key={podcast.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pi * 0.1 }} className="p-8 rounded-2xl bg-gradient-to-r from-its-dark to-its-deep">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-its-green/10 border border-its-green/20 flex items-center justify-center text-5xl">🎙️</div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-its-lime text-xs font-bold uppercase tracking-wider">Podcast</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white/70 border border-white/10">{podcast.language}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-1 mb-2">{podcast.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-xl">{podcast.description}</p>
                      <p className="text-its-green text-sm font-medium mt-2">{podcast.episodes}</p>
                      {podcast.audio && (
                        <audio controls className="mt-4 w-full max-w-xl" preload="metadata">
                          <source src={podcast.audio} type="audio/mp4" />
                        </audio>
                      )}
                    </div>
                    {!podcast.audio && (
                      <Link href={`/${locale}/contact`} className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all text-center">
                        {podcast.button}
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Content grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => {
              const clickable = Boolean(item.video) || Boolean(item.audio) || Boolean(item.link) || (locale === "nl" && (item.type === "Artikelen" || item.type === "Whitepapers")) || (locale === "en" && (item.type === "Articles" || item.type === "Whitepapers"));
              const itemType = locale === "nl" ? item.type : item.type === "Artikelen" ? "Articles" : item.type === "Whitepapers" ? "Whitepapers" : item.type === "Video's" ? "Videos" : item.type;
              const typeColor = (d.typeColors as Record<string, string>)[itemType] || "bg-its-green";

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => {
                    if (item.link) { window.open(item.link, "_blank", "noopener"); return; }
                    if (clickable) openItem(item);
                  }}
                  className={`group bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 ${clickable ? "cursor-pointer" : ""}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    {item.link && (
                      <>
                        <div className="absolute inset-0 bg-its-dark/40 group-hover:bg-its-dark/25 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                            <svg className="w-7 h-7 text-its-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                    {(item.video || item.audio) && (
                      <>
                        <div className="absolute inset-0 bg-its-dark/40 group-hover:bg-its-dark/25 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                            {item.audio ? (
                              <svg className="w-7 h-7 text-its-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v12a.75.75 0 01-.75.75zM8.25 15a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM4.5 13.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z" />
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-its-green-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${typeColor}`}>
                        {itemType}
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
                      {item.content}
                    </p>
                    {item.stats && (
                      <div className="flex gap-4 mt-4 pt-4 border-t border-its-gray-light/20">
                        {item.stats.map((s) => (
                          <div key={s.label} className="text-center flex-1">
                            <div className="text-lg font-bold text-its-green-dark">{s.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-its-gray-mid font-semibold">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {item.link && (
                      <p className="text-its-green-dark text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        {locale === "nl" ? "Start de scan →" : "Start the scan →"}
                      </p>
                    )}
                    {clickable && !item.link && (
                      <p className="text-its-green-dark text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                        {item.gated ? d.requestWhitepaper : d.readMore}
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead form modal (gated whitepapers) */}
      <AnimatePresence>
        {leadItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLeadItem(null)}
            className="fixed inset-0 z-50 bg-its-dark/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-xl w-full my-10 overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-[21/9]">
                <Image src={leadItem.image} alt={leadItem.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/80 to-transparent" />
                <button
                  onClick={() => setLeadItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-its-charcoal font-bold flex items-center justify-center"
                  aria-label={d.closeLabel}
                >
                  ✕
                </button>
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-2 bg-its-green-dark">
                    {locale === "nl" ? "Whitepapers" : "Whitepapers"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{leadItem.title}</h2>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                {formState === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-its-green/10 border border-its-green/20 flex items-center justify-center text-3xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-its-charcoal mb-2">{d.form.successTitle}</h3>
                    <p className="text-its-gray-mid leading-relaxed">{d.form.successBody}</p>
                    <button
                      onClick={() => setLeadItem(null)}
                      className="mt-6 px-6 py-3 rounded-lg bg-its-charcoal hover:bg-its-dark text-white font-semibold text-sm transition-all"
                    >
                      {d.closeLabel}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submitLead} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-its-charcoal mb-1">{d.form.title}</h3>
                      <p className="text-its-gray-mid text-sm">{d.form.intro}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-xs font-semibold text-its-charcoal uppercase tracking-wider">{d.form.name}</span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="mt-1 w-full px-4 py-2.5 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 text-sm"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold text-its-charcoal uppercase tracking-wider">{d.form.company}</span>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="mt-1 w-full px-4 py-2.5 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 text-sm"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs font-semibold text-its-charcoal uppercase tracking-wider">{d.form.email}</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full px-4 py-2.5 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs font-semibold text-its-charcoal uppercase tracking-wider">{d.form.phone}</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full px-4 py-2.5 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 text-sm"
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs font-semibold text-its-charcoal uppercase tracking-wider">{d.form.message}</span>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-1 w-full px-4 py-2.5 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 text-sm resize-none"
                      />
                    </label>

                    <p className="text-xs text-its-gray-mid leading-relaxed">{d.form.privacy}</p>

                    {formState === "error" && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm">
                        <p className="font-semibold text-red-800">{d.form.errorTitle}</p>
                        <p className="text-red-700">{d.form.errorBody}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting" ? d.form.submitting : d.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-its-dark/70 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full my-10 overflow-hidden shadow-2xl"
            >
              <div className={`relative ${selected.audio ? "aspect-[21/9]" : "aspect-[16/9]"} bg-its-dark`}>
                {selected.video ? (
                  <div className="absolute inset-0">
                    <Image src={selected.image} alt={selected.title} fill className="object-cover opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                      <p className="text-sm font-medium opacity-80">{locale === "nl" ? "Video binnenkort beschikbaar" : "Video coming soon"}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 to-transparent" />
                  </>
                )}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-its-charcoal font-bold flex items-center justify-center"
                  aria-label={d.closeLabel}
                >
                  ✕
                </button>
                {!selected.video && (
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-2 ${(d.typeColors as Record<string, string>)[selected.type] || "bg-its-green"}`}>
                      {selected.type}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{selected.title}</h2>
                    <div className="flex items-center gap-3 text-xs text-white/70 mt-2">
                      <span>{selected.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/70" />
                      <span>{selected.readTime}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-10 space-y-5">
                {selected.audio && (
                  <div>
                    <audio
                      src={selected.audio}
                      controls
                      autoPlay
                      className="w-full mb-4"
                    >
                      Your browser does not support the audio element.
                    </audio>
                    <p className="text-its-gray-mid leading-relaxed">{selected.content}</p>
                  </div>
                )}
                {selected.video && (
                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-3 ${(d.typeColors as Record<string, string>)[selected.type] || "bg-its-green"}`}>
                      {selected.type}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-its-charcoal leading-tight">{selected.title}</h2>
                    <div className="flex items-center gap-3 text-xs text-its-gray-mid mt-2">
                      <span>{selected.date}</span>
                      <span className="w-1 h-1 rounded-full bg-its-gray-mid" />
                      <span>{selected.readTime}</span>
                    </div>
                    <p className="text-its-gray-mid leading-relaxed mt-4">{selected.content}</p>
                  </div>
                )}
                {selected.sections?.map((s) => (
                  <div key={s.heading}>
                    <h3 className="text-sm font-bold text-its-green-dark uppercase tracking-wider mb-2">{s.heading}</h3>
                    <p className="text-its-gray-mid leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
