"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

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
};

const data = {
  nl: {
    categories: ["Alle", "Artikelen", "Whitepapers", "Podcast", "Video's"],
    featured: {
      type: "Podcast",
      title: "The Transformation Talk",
      description: "Onze podcast over digitale transformatie, leiderschap en de menselijke factor. Elke twee weken een nieuw gesprek met experts en leiders uit het veld. Van NIS2-compliance tot innovatief werkgedrag, van data-gedreven werken tot de toekomst van AI in organisaties.",
      episodes: "12 episodes",
      button: "Beluister nu →",
    },
    items: [
      {
        type: "Whitepapers",
        image: "/images/team-collab.jpg",
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
        image: "/images/team-sept-1.jpg",
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
        image: "/images/team-meeting.jpg",
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
        image: "/images/team-work.jpg",
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
        image: "/images/team-sept-2.jpg",
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
        image: "/images/team-collab.jpg",
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
        type: "Artikelen",
        image: "/images/team-discussion.jpg",
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
        type: "Video's",
        image: "/images/team-sept-3.jpg",
        title: "André Keizer over de toekomst van digitale transformatie",
        content: `Keynote van André Keizer op het Transformation Summit 2025.`,
        date: "Dec 2025",
        readTime: "18 min",
      },
    ],
    typeColors: {
      "Artikelen": "bg-its-green",
      "Whitepapers": "bg-its-green-dark",
      "Video's": "bg-its-charcoal",
      "Podcast": "bg-its-lime",
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
    categories: ["All", "Articles", "Whitepapers", "Podcast", "Videos"],
    featured: {
      type: "Podcast",
      title: "The Transformation Talk",
      description: "Our podcast on digital transformation, leadership and the human factor. A new conversation with experts and leaders from the field every two weeks. From NIS2 compliance to innovative work behaviour, from data-driven working to the future of AI in organisations.",
      episodes: "12 episodes",
      button: "Listen now →",
    },
    items: [
      {
        type: "Whitepapers",
        image: "/images/team-collab.jpg",
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
        image: "/images/team-sept-1.jpg",
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
        image: "/images/team-meeting.jpg",
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
        image: "/images/team-work.jpg",
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
        image: "/images/team-sept-2.jpg",
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
        image: "/images/team-collab.jpg",
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
        type: "Articles",
        image: "/images/team-discussion.jpg",
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
        type: "Videos",
        image: "/images/team-sept-3.jpg",
        title: "André Keizer on the future of digital transformation",
        content: `Keynote by André Keizer at Transformation Summit 2025.`,
        date: "Dec 2025",
        readTime: "18 min",
      },
    ],
    typeColors: {
      "Articles": "bg-its-green",
      "Whitepapers": "bg-its-green-dark",
      "Videos": "bg-its-charcoal",
      "Podcast": "bg-its-lime",
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
      const res = await fetch("/api/whitepaper-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          whitepaper: leadItem.whitepaperId ?? leadItem.title,
          ...form,
          locale,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
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

          {/* Featured Podcast */}
          {(activeCategory === (locale === "nl" ? "Alle" : "All") || activeCategory === "Podcast") && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-its-dark to-its-deep">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-its-green/10 border border-its-green/20 flex items-center justify-center text-5xl">🎙️</div>
                <div className="flex-grow">
                  <span className="text-its-lime text-xs font-bold uppercase tracking-wider">{d.featured.type}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">{d.featured.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">{d.featured.description}</p>
                  <p className="text-its-green text-sm font-medium mt-2">{d.featured.episodes}</p>
                </div>
                <button className="flex-shrink-0 px-6 py-3 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold text-sm transition-all">
                  {d.featured.button}
                </button>
              </div>
            </motion.div>
          )}

          {/* Content grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => {
              const clickable = (locale === "nl" && (item.type === "Artikelen" || item.type === "Whitepapers")) || (locale === "en" && (item.type === "Articles" || item.type === "Whitepapers"));
              const itemType = locale === "nl" ? item.type : item.type === "Artikelen" ? "Articles" : item.type === "Whitepapers" ? "Whitepapers" : item.type === "Video's" ? "Videos" : item.type;
              const typeColor = (d.typeColors as Record<string, string>)[itemType] || "bg-its-green";

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => clickable && openItem(item)}
                  className={`group bg-white rounded-2xl overflow-hidden border border-its-gray-light/20 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500 ${clickable ? "cursor-pointer" : ""}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
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
                    {clickable && (
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
              <div className="relative aspect-[21/9]">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-its-charcoal font-bold flex items-center justify-center"
                  aria-label={d.closeLabel}
                >
                  ✕
                </button>
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
              </div>
              <div className="p-8 lg:p-10 space-y-6">
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
