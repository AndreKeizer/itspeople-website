/**
 * Shared content for the AI Transformation pillar page and the 8 service detail pages.
 *
 * Source of truth: ITsPeople_AI_Dienstverlening.docx (handover document).
 * NL is the primary locale, EN follows the same structure with translated copy.
 */

export type AIService = {
  slug: string;
  number: number;
  image: string; // path under /public, e.g. "/images/services/...".
  statement: string;
  title: string;
  shortDesc: string;
  problem: string;
  approach: string;
  deliverables: string[];
  audience: string;
  duration: string;
  related: string[]; // slugs of related services
  primaryKeyword: string; // SEO target
};

export type AIPrinciple = {
  title: string;
  body: string;
  image: string;
};

export type AIPillarContent = {
  heroLabel: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubline: string;
  heroIntro: string;
  urgencyTitle: string;
  urgencyStat1: { value: string; label: string };
  urgencyStat2: { value: string; label: string };
  urgencyBody: string;
  reasonsTitle: string;
  reasons: string[];
  reasonsClose: string;
  propositionTitle: string;
  propositionLead: string;
  propositionBody: string;
  principlesTitle: string;
  principles: AIPrinciple[];
  servicesTitle: string;
  servicesIntro: string;
  sectorTitle: string;
  sectorIntro: string;
  sectors: {
    name: string;
    statement: string;
    items: string[];
  }[];
  approachTitle: string;
  approachIntro: string;
  phases: { phase: string; name: string; duration: string; activities: string; result: string }[];
  approachClose: string;
  whyTitle: string;
  whyIntro: string;
  whyItems: { strength: string; benefit: string }[];
  quickscanLabel: string;
  quickscanTitle: string;
  quickscanIntro: string;
  quickscanLead: string;
  quickscanIncludes: string[];
  quickscanPrice: string;
  quickscanDuration: string;
  quickscanCta: string;
  ctaTitle: string;
  ctaIntro: string;
  ctaSteps: string[];
  ctaButton: string;
  ctaSecondary: string;
  servicePageBackToPillar: string;
  servicePageProblem: string;
  servicePageApproach: string;
  servicePageDeliverables: string;
  servicePageMeta: string;
  servicePageAudience: string;
  servicePageDuration: string;
  servicePageRelated: string;
  servicePagePrimaryCta: string;
  servicePageSecondaryCta: string;
  services: AIService[];
};

const NL: AIPillarContent = {
  heroLabel: "AI Transformation Services",
  heroTitle: "Van AI-ambitie naar",
  heroTitleHighlight: "aantoonbare impact",
  heroSubline: "Voor Rijksoverheid en Zorg. Bewezen. Verantwoord. Nu.",
  heroIntro:
    "Elke week verliezen Nederlandse organisaties miljoenen euro's aan inefficiënte processen die AI al had kunnen elimineren. De vraag is niet meer óf u AI inzet. De vraag is wie u daarin vertrouwt.",
  urgencyTitle: "De urgentie: waarom nu handelen loont",
  urgencyStat1: { value: "45%", label: "experimenteert met AI" },
  urgencyStat2: { value: "<12%", label: "haalt structureel waarde" },
  urgencyBody:
    "De Nederlandse publieke sector en zorg staan voor een unieke combinatie van uitdagingen: toenemende werkdruk, krimpende budgetten, stijgende burgerexpectaties en een krappe arbeidsmarkt. AI is niet langer een luxe innovatieproject. Het is een operationele noodzaak. Het verschil tussen wie waarde haalt en wie blijft experimenteren, zit niet in de technologie. Het zit in de aanpak.",
  reasonsTitle: "Waarom AI-initiatieven mislukken",
  reasons: [
    "Zwakke datafundamenten: AI zonder betrouwbare data is een huis zonder fundament.",
    "Strategische disconnect: AI-projecten zonder link met organisatiedoelen verliezen draagvlak.",
    "Adoptieblindheid: technologie implementeren zonder verandermanagement levert weerstand, geen resultaat.",
    "Black-box denken: onverklaarbare modellen wekken geen vertrouwen bij medewerkers en toezichthouders.",
    "Compliance-onderschatting: de AI Act en AVG zijn geen bijzaken, ze zijn de randvoorwaarden.",
  ],
  reasonsClose: "ITsPeople elimineert elk van deze risicofactoren. Stap voor stap. Meetbaar. Met u en uw mensen.",
  propositionTitle: "Onze propositie",
  propositionLead: "AI die landt in de praktijk.",
  propositionBody:
    "ITsPeople biedt een geïntegreerde AI-dienstverlening die vertrekt vanuit uw strategische doelen en eindigt met aantoonbare bedrijfswaarde. Geen losse pilots die stranden, geen technologische oplossingen op zoek naar een probleem. Wij bouwen AI die uw mensen omarmen en uw organisatie versterkt. Wij zijn het enige adviesbureau in Nederland dat AI-strategie combineert met 20 jaar domeinkennis in Rijksoverheid, Zorg en grote ERP-transformaties. Dat maakt ons fundamenteel anders.",
  principlesTitle: "Onze vijf kernprincipes",
  principles: [
    { title: "Strategie vóór technologie", body: "Elk AI-initiatief start bij uw organisatiedoelen, niet bij een tool.", image: "/images/team-discussion.jpg" },
    { title: "Data als fundament", body: "Zonder betrouwbare data, geen betrouwbare AI. Wij beginnen altijd met data governance.", image: "/images/insights/data-strategy.jpg" },
    { title: "Transparantie by design", body: "Geen black boxes. Uw medewerkers en toezichthouders begrijpen wat de AI doet en waarom.", image: "/images/insights/ai-technology.jpg" },
    { title: "Adoptie als succesfactor", body: "AI-implementatie is verandermanagement. Wij begeleiden uw mensen, niet alleen uw systemen.", image: "/images/team-collab.jpg" },
    { title: "Resultaat, niet rapport", body: "Wij blijven betrokken tot de waarde aantoonbaar is gerealiseerd.", image: "/images/team-meeting.jpg" },
  ],
  servicesTitle: "Acht AI-diensten, één coherente aanpak",
  servicesIntro:
    "Onze AI-dienstverlening is opgebouwd als een samenhangend ecosysteem. U kunt instappen op het niveau dat past bij uw organisatievolwassenheid.",
  sectorTitle: "Sectorfocus: domeinkennis als onderscheidend vermogen",
  sectorIntro:
    "Generieke AI-consultants kennen de technologie. Wij kennen de technologie én uw domein. Dat verschil bepaalt of een AI-project slaagt of strandt.",
  sectors: [
    {
      name: "Rijksoverheid & Publieke Sector",
      statement: "Publieke dienstverlening die sneller, eerlijker en transparanter is. Dat is geen utopie. Dat is engineering.",
      items: [
        "Beleidsinformatievoorziening versnellen met AI-gestuurde data-analyse",
        "Toezichts- en handhavingsprocessen versterken via patroonherkenning en risicomodellering",
        "Digitale dienstverlening aan burgers verbeteren via intelligente self-service",
        "Compliancemonitoring op uitvoeringsprocessen bij grote uitvoeringsorganisaties en ministeries",
        "AI-governance inrichten conform IAMA, Z-Inspection en AI Act high-risk kaders",
      ],
    },
    {
      name: "Zorg & Ziekenhuizen",
      statement: "Elke minuut die een zorgprofessional besteedt aan administratie, is een minuut die niet naar de patiënt gaat. Wij geven die minuten terug.",
      items: [
        "Implementatie van ERP-systemen die met AI worden ondersteund over de gehele procesgang",
        "Patiëntveiligheid versterken via predictive monitoring en vroegsignalering",
        "Zorglogistiek optimaliseren: OK-planning, opnameplanning, personele bezetting",
        "Administratieve last verlagen via automatische documentverwerking en codering",
        "Data governance in de zorg: privacy by design, NEN 7510, BIO compliance",
      ],
    },
  ],
  approachTitle: "Onze aanpak: van quickscan tot schaalbare impact",
  approachIntro: "Wij werken in vier fasen die naadloos op elkaar aansluiten. U bepaalt het tempo. Wij bewaken de kwaliteit.",
  phases: [
    { phase: "Fase 1", name: "Oriëntatie", duration: "2 tot 4 weken", activities: "AI Quickscan, stakeholder-interviews, data-assessment, eerste use cases identificeren.", result: "Situatierapport en shortlist kansrijke AI-initiatieven." },
    { phase: "Fase 2", name: "Fundamenten", duration: "4 tot 12 weken", activities: "Data governance, architectuurontwerp, compliance mapping, roadmap opstellen.", result: "AI-ready datafundament en concrete roadmap." },
    { phase: "Fase 3", name: "Experiment & Validatie", duration: "6 tot 16 weken", activities: "Proof of Value per use case, pilotimplementaties, adoptietrajecten starten.", result: "Werkende AI-pilot met meetbare resultaten." },
    { phase: "Fase 4", name: "Schaal & Beheer", duration: "Continu", activities: "Uitrol, monitoring, optimalisatie, governance, kennisoverdracht.", result: "Operationele AI die zichzelf versterkt." },
  ],
  approachClose: "Wij leveren geen proof of concept en verdwijnen. Wij blijven totdat de waarde aantoonbaar in uw organisatie is geland.",
  whyTitle: "Waarom ITsPeople",
  whyIntro: "Vijf onderscheidende krachten die wij meebrengen.",
  whyItems: [
    { strength: "20+ jaar domeinkennis Zorg & Overheid", benefit: "Geen leercurve op uw sector. Wij kennen de politieke dynamiek, de wet- en regelgeving, de ERP-landschappen en de bestuurlijke gevoeligheden." },
    { strength: "Strategie én uitvoering in één hand", benefit: "U hoeft niet te coördineren tussen een strategiebureau en een implementatiepartner. Wij dragen beide. Dat bespaart tijd, frictie en budget." },
    { strength: "AI als versneller, niet als showcase", benefit: "Wij gebruiken AI om uw applicaties sneller te bouwen en uw migraties sneller af te ronden. 40 tot 70 procent tijdwinst is bij ons norm, geen marketingclaim." },
    { strength: "AI Act & AVG geankerd in elke oplossing", benefit: "Compliance is bij ons geen afterthought. Elke AI-oplossing wordt gebouwd met ethiek, transparantie en toezichthoudersvertrouwen als ontwerpprincipe." },
    { strength: "Resultaatgericht partnership", benefit: "Wij koppelen onze betrokkenheid aan meetbare mijlpalen. Onze consultants blijven tot het werkt, niet tot de opdracht op papier klaar is." },
  ],
  quickscanLabel: "Instapproduct",
  quickscanTitle: "AI Act Quickscan",
  quickscanIntro: "Weet u welke AI-systemen in uw organisatie actief zijn? Welke daarvan onder de EU AI Act vallen als high-risk? Of uw organisatie klaar is voor de handhaving die per 2025 actief is?",
  quickscanLead: "De meeste organisaties weten het antwoord op deze vragen niet. Dat is een risico. Wij maken het inzichtelijk in twee weken.",
  quickscanIncludes: [
    "Volledig overzicht van actieve en geplande AI-systemen in uw organisatie",
    "Risicocategorisering conform de EU AI Act (minimaal, beperkt, hoog, onaanvaardbaar)",
    "Gap-analyse ten opzichte van verplichte vereisten per categorie",
    "Prioriteitenmatrix: wat moet nu, wat kan later, wat moet stoppen",
    "Bestuurlijke rapportage voor raad van bestuur en toezichthouder",
  ],
  quickscanPrice: "€12.500 tot €20.000",
  quickscanDuration: "Doorlooptijd 2 weken, direct inzetbaar",
  quickscanCta: "AI Act Quickscan aanvragen →",
  ctaTitle: "Het gesprek dat telt",
  ctaIntro: "AI-transformatie begint niet met een offerte. Het begint met een eerlijk gesprek over waar uw organisatie staat, wat u wilt bereiken en welke stap realistisch haalbaar is in de komende zes maanden. Wij investeren in dat gesprek. Zonder agenda, zonder verkoopdruk.",
  ctaSteps: [
    "Een oriënterend gesprek van 60 minuten met een senior consultant (gratis)",
    "Een beknopte situatieschets van uw AI-readiness op basis van het gesprek",
    "Een concreet voorstel voor een eerste stap: Quickscan, workshop of roadmap-sessie",
  ],
  ctaButton: "Plan een oriënterend gesprek →",
  ctaSecondary: "info@itspeople.nl • +31 (0) 30 22 70 954",
  servicePageBackToPillar: "← Alle AI Transformation services",
  servicePageProblem: "Het probleem",
  servicePageApproach: "Onze aanpak",
  servicePageDeliverables: "Wat u krijgt",
  servicePageMeta: "Geschikt voor en doorlooptijd",
  servicePageAudience: "Geschikt voor",
  servicePageDuration: "Doorlooptijd",
  servicePageRelated: "Ook relevant voor u",
  servicePagePrimaryCta: "AI Act Quickscan aanvragen →",
  servicePageSecondaryCta: "Plan een oriënterend gesprek →",
  services: [
    {
      slug: "ai-readiness-strategie",
      number: 1,
      image: "/images/services/business-consultancy.jpg",
      statement: "Weet waar u staat voordat u bepaalt waar u naartoe wilt.",
      title: "AI Readiness & Strategie",
      shortDesc: "AI Maturity Assessment plus concrete, gefaseerde roadmap, verankerd in uw strategie.",
      problem: "Veel organisaties willen met AI starten, maar weten niet waar te beginnen. Het gevolg: losse pilots die nergens optellen, of vertraging omdat er geen helder vertrekpunt is. De juiste eerste stap vraagt om een eerlijk beeld van data, governance, compliance en cultuur, en om koppeling met de strategische agenda.",
      approach: "Wij analyseren uw data-architectuur, organisatiestructuur, procesvolwassenheid en bestuurlijke context. Op basis hiervan ontwikkelen wij een concrete AI-roadmap: gefaseerd, meetbaar en verankerd in uw strategie. Geen ambitiedocument zonder eigenaarschap, maar een plan dat morgen uitvoerbaar is.",
      deliverables: [
        "AI Maturity Assessment (volledig organisatiebreed)",
        "Gap-analyse op data, governance, compliance en cultuur",
        "AI Roadmap met KPI-gelinkte initiatieven per kwartaal",
        "Business Case per AI-use case met TCO en ROI-projectie",
      ],
      audience: "Organisaties die serieus willen starten maar niet weten waar.",
      duration: "4 tot 6 weken",
      related: ["data-governance-architecture", "ai-governance-compliance", "ai-talent-enablement"],
      primaryKeyword: "AI strategie zorg overheid",
    },
    {
      slug: "data-governance-architecture",
      number: 2,
      image: "/images/services/data-management.jpg",
      statement: "AI is zo betrouwbaar als uw data. En uw data is zo betrouwbaar als uw governance.",
      title: "Data Governance & AI-Ready Architecture",
      shortDesc: "Datafundament op Azure, AWS of GCP, schaalbaar, beheersbaar en auditeerbaar.",
      problem: "Veel organisaties hebben datasilo's, legacy-systemen en rapportages waarvan niemand precies weet hoe ze tot stand komen. Daar bovenop AI bouwen levert onbetrouwbare uitkomsten en ondergraaft het vertrouwen in datagedreven beslissingen.",
      approach: "Wij bouwen de datafundamenten waarop duurzame AI-toepassingen kunnen staan. Van bronkoppeling tot rapportage, van kwaliteitsborging tot privacycompliance. Wij ontwerpen voor schaalbaarheid, beheersbaarheid en auditeerbaarheid, met de cloud-strategie die past bij uw organisatie.",
      deliverables: [
        "Data governance framework inclusief eigenaarschap en kwaliteitsnormen",
        "Data-architectuurontwerp op cloud-platforms (Azure, AWS, GCP)",
        "Data pipeline-inrichting en kwaliteitsmonitoring",
        "AVG en AI Act compliance mapping",
      ],
      audience: "Organisaties met datasilo's, legacy-systemen of onbetrouwbare rapportages.",
      duration: "8 tot 16 weken",
      related: ["ai-readiness-strategie", "predictive-analytics", "ai-driven-migration"],
      primaryKeyword: "Data governance Nederland",
    },
    {
      slug: "intelligente-procesautomatisering",
      number: 3,
      image: "/images/services/process-management.jpg",
      statement: "Uw medewerkers zijn te waardevol voor werk dat een machine beter en sneller kan doen.",
      title: "Intelligente Procesautomatisering",
      shortDesc: "Agentic AI, intelligente documentverwerking en compliance-monitoring die continu draait.",
      problem: "Repetitief administratief werk consumeert capaciteit die u harder nodig heeft voor primaire processen. Tegelijk groeit de compliance-druk: niets mag missen, alles moet aantoonbaar zijn. Steekproefsgewijze kwaliteitscontroles passen niet meer bij dit tempo.",
      approach: "Wij identificeren de processen met het hoogste automatiseringspotentieel en implementeren AI-gedreven oplossingen. Documenten die zichzelf vullen, workflows die autonoom escaleren, compliance-monitoring die continu draait in plaats van steekproefsgewijs. Agentic AI waar zinvol, klassieke automatisering waar het beter past.",
      deliverables: [
        "Intelligente documentverwerking voor contracten, aanvragen en rapporten",
        "AI-gestuurde workflow-automatisering en taakroutering",
        "Geautomatiseerde kwaliteits- en compliancechecks",
        "Agentic AI-agents voor repetitieve kennisprocessen",
      ],
      audience: "Organisaties met hoge administratieve last of compliance-druk.",
      duration: "8 tot 14 weken, tijdsbesparing typisch 30 tot 70 procent",
      related: ["predictive-analytics", "ai-accelerated-development", "ai-talent-enablement"],
      primaryKeyword: "Agentic AI procesautomatisering",
    },
    {
      slug: "predictive-analytics",
      number: 4,
      image: "/images/insights/data-strategy.jpg",
      statement: "Uw data vertelt u al wat er gaat gebeuren. U hoeft alleen te leren luisteren.",
      title: "Predictive Analytics & Beslisondersteuning",
      shortDesc: "Transparante voorspellingsmodellen voor risico, planning, vraag en beleidseffect.",
      problem: "Veel organisaties verzamelen data zonder er beslissingsvoordeel uit te halen. Voorspellingsmodellen worden óf niet gebouwd, óf gebouwd als black box waar niemand mee durft te sturen. Het gevolg: rapportages achteraf in plaats van sturing vooraf.",
      approach: "Wij bouwen transparante voorspellingsmodellen die uw besluitvormers ondersteunen. Geen black box, maar modellen die uw mensen begrijpen, vertrouwen en dagelijks gebruiken. Van risicoprofilering en fraudedetectie tot resource-planning en vraagprognoses, telkens gekoppeld aan een concrete besluitvormingsmoment in uw organisatie.",
      deliverables: [
        "Patiëntenstroom-optimalisatie en zorgvraagprognoses (Zorg)",
        "Fraudedetectie en risicoanalyse in uitkeringsprogramma's (Overheid)",
        "Personeelsplanning en roostersimulaties op basis van historische patronen",
        "Beleidseffectmeting met real-time impact van interventies",
      ],
      audience: "Organisaties die data hebben maar er nog geen beslissingsvoordeel uit halen.",
      duration: "10 tot 20 weken per use case",
      related: ["data-governance-architecture", "ai-governance-compliance", "intelligente-procesautomatisering"],
      primaryKeyword: "Predictive analytics zorg",
    },
    {
      slug: "ai-governance-compliance",
      number: 5,
      image: "/images/services/ai-governance.jpg",
      statement: "De organisatie die AI verantwoord inzet, wint het vertrouwen van burgers, toezichthouders én medewerkers.",
      title: "AI Governance, Ethics & Compliance",
      shortDesc: "EU AI Act, AVG en IAMA-conform AI governance dat innovatie mogelijk maakt.",
      problem: "De EU AI Act is wet. De AVG is wet. Verantwoord AI-gebruik is geen optie meer, het is de licentie om te opereren. Veel organisaties weten niet welke AI-systemen ze in huis hebben, in welke risicocategorie die vallen, of hoe ze auditbestendig laten zien dat zij in control zijn.",
      approach: "ITsPeople helpt u een robuust AI governance framework te bouwen dat innovatie mogelijk maakt in plaats van blokkeert. Wij combineren juridische precisie met operationele werkbaarheid. Het resultaat is een framework dat uw raad van bestuur, OR, toezichthouder en medewerkers vertrouwen geeft, zonder dat het iedere experimentele use case vertraagt.",
      deliverables: [
        "AI risicoframework conform EU AI Act risicocategorieën",
        "Ethiek- en transparantiebeleid voor AI-toepassingen",
        "Model governance: versioning, monitoring, hertraining en audittrails",
        "Stakeholder communicatie naar bestuur, OR, toezichthouder en medewerkers",
      ],
      audience: "Elke organisatie die structureel met AI wil werken. Niet optioneel, wettelijk verplicht.",
      duration: "8 tot 14 weken",
      related: ["ai-readiness-strategie", "data-governance-architecture", "ai-talent-enablement"],
      primaryKeyword: "AI compliance EU AI Act",
    },
    {
      slug: "ai-talent-enablement",
      number: 6,
      image: "/images/team-collab.jpg",
      statement: "De beste AI-tool is waardeloos als uw mensen er niet mee willen of kunnen werken.",
      title: "AI Talent & Organisatie-Enablement",
      shortDesc: "AI-adoptie, in-company trainingen en het opbouwen van een AI Center of Excellence.",
      problem: "Adoptie bepaalt 70 procent van AI-succes, maar wordt structureel onderschat. Eenmalige workshops verdampen, externe AI-experts blijven afhankelijkheden, en interne competenties bouwen zich niet vanzelf op. Het resultaat is dat technologie wel landt maar geen impact heeft.",
      approach: "Wij versnellen de AI-adoptie in uw organisatie via gerichte kennisoverdracht, in-company trainingen en het opbouwen van interne AI-competenties. Niet als een eenmalige workshop, maar als een duurzame capability-opbouw. Wij beoordelen onszelf op of u sterker staat na onze betrokkenheid, niet of u afhankelijker bent geworden.",
      deliverables: [
        "AI literacy-programma's voor management, professionals en uitvoering",
        "In-company AI-training op maat (van prompt engineering tot data science basics)",
        "AI Center of Excellence-opzet, interne competentie verankerd in de lijn",
        "Change management-trajecten bij AI-implementaties",
      ],
      audience: "Elke organisatie. Adoptie bepaalt 70 procent van AI-succes.",
      duration: "12 tot 24 weken",
      related: ["ai-readiness-strategie", "ai-governance-compliance", "intelligente-procesautomatisering"],
      primaryKeyword: "AI Center of Excellence",
    },
    {
      slug: "ai-accelerated-development",
      number: 7,
      image: "/images/insights/ai-technology.jpg",
      statement: "Wat vroeger zes maanden kostte, leveren wij in zes weken. Niet door minder kwaliteit. Door meer intelligentie.",
      title: "AI-Accelerated Application Development",
      shortDesc: "40 tot 70 procent sneller bouwen via AI-coding, AI-testen en architecture-as-code.",
      problem: "Ontwikkelagenda's zijn lang, capaciteit is schaars en legacy-systemen vragen om vervanging. Klassieke ontwikkelteams kunnen het tempo niet meer bijbenen dat zorg- en overheidsorganisaties vandaag nodig hebben.",
      approach: "Wij bouwen enterprise-applicaties tot 70 procent sneller door AI-gedreven ontwikkelteams in te zetten. Autonome AI-agents voor codegeneratie, geautomatiseerd testen en realtime kwaliteitsborging. Onze ontwikkelaars werken niet áán AI, zij werken mét AI als versneller. Het resultaat: sneller naar productie, lagere kosten, hogere kwaliteit.",
      deliverables: [
        "Maatwerkapplicaties voor zorg- en overheidsprocessen, van idee tot productie in weken",
        "Burger- en patiëntportalen met intelligente self-service en realtime data-koppelingen",
        "Workflow- en procesapplicaties die naadloos integreren met Oracle Fusion, AFAS en SAP",
        "Proof of Value-applicaties: van concept naar werkende demo binnen 10 werkdagen",
        "Low-code en pro-code hybride aanpak, afgestemd op uw IT-landschap",
      ],
      audience: "Organisaties met dringende ontwikkelagenda's, beperkte interne capaciteit, of legacy-systemen die om vervanging vragen.",
      duration: "Tijdsbesparing typisch 40 tot 70 procent ten opzichte van traditionele ontwikkeling",
      related: ["ai-driven-migration", "intelligente-procesautomatisering", "data-governance-architecture"],
      primaryKeyword: "AI-accelerated development",
    },
    {
      slug: "ai-driven-migration",
      number: 8,
      image: "/images/services/quality-assurance.jpg",
      statement: "Legacy is niet uw probleem. Stilstaan op legacy is uw probleem.",
      title: "AI-Driven Platform Migration & Modernisering",
      shortDesc: "Legacy-naar-cloud met AI-versnelde codeanalyse, hertaling en migratietesten.",
      problem: "Migraties naar cloud-platforms en moderne architecturen mislukken zelden door technologie. Ze mislukken door scope, kennislek en risicoaversie. Verouderde kernsystemen, end-of-life software en hoge beheerkosten houden organisaties vast in een werkelijkheid die ze achter zich willen laten.",
      approach: "Wij zetten AI in om elk migratierisico te elimineren. Van automatische codeanalyse en documentatie van legacy-systemen, tot AI-gedreven hertaling van code, tot intelligent migratietesten dat onverwachte impact direct in beeld brengt. Wij brengen u in beweging, zonder downtime, zonder paniek.",
      deliverables: [
        "Mainframe-naar-cloud migraties (COBOL, AS/400, Tandem) met AI-codeanalyse",
        "ERP-platformwissels: van legacy naar Oracle Fusion Cloud, SAP S/4HANA of AFAS",
        "On-premise naar cloud-native (Azure, AWS, GCP) met behoud van compliance",
        "Database-migraties met AI-gedreven schema-mapping en data-kwaliteitsborging",
        "Applicatieportfolio-rationalisatie: AI bepaalt wat blijft, vervangt of integreert",
      ],
      audience: "Organisaties met verouderde kernsystemen, end-of-life software, hoge beheerkosten of cloud-transformatie-ambitie.",
      duration: "Migratietijd typisch 30 tot 50 procent korter dan traditionele aanpakken",
      related: ["ai-accelerated-development", "data-governance-architecture", "ai-readiness-strategie"],
      primaryKeyword: "AI-driven migration Oracle Fusion",
    },
  ],
};

const EN: AIPillarContent = {
  heroLabel: "AI Transformation Services",
  heroTitle: "From AI ambition to",
  heroTitleHighlight: "demonstrable impact",
  heroSubline: "For Government and Healthcare. Proven. Responsible. Now.",
  heroIntro:
    "Every week, Dutch organisations lose millions of euros to inefficient processes that AI could already have eliminated. The question is no longer whether you adopt AI. The question is whom you trust to deliver it.",
  urgencyTitle: "The urgency: why acting now pays off",
  urgencyStat1: { value: "45%", label: "experimenting with AI" },
  urgencyStat2: { value: "<12%", label: "achieving structural value" },
  urgencyBody:
    "The Dutch public sector and healthcare face a unique combination of challenges: rising workload, shrinking budgets, growing citizen expectations and a tight labour market. AI is no longer a luxury innovation project. It is an operational necessity. The difference between those who extract value and those who keep experimenting lies not in the technology, but in the approach.",
  reasonsTitle: "Why AI initiatives fail",
  reasons: [
    "Weak data foundations: AI without reliable data is a house without a foundation.",
    "Strategic disconnect: AI projects without a link to organisational goals lose support.",
    "Adoption blindness: deploying technology without change management produces resistance, not results.",
    "Black-box thinking: unexplainable models do not build trust with employees or regulators.",
    "Compliance underestimated: the AI Act and GDPR are not side issues, they are the preconditions.",
  ],
  reasonsClose: "ITsPeople eliminates each of these risks. Step by step. Measurable. With you and your people.",
  propositionTitle: "Our proposition",
  propositionLead: "AI that lands in practice.",
  propositionBody:
    "ITsPeople offers integrated AI services that start from your strategic goals and end with demonstrable business value. No isolated pilots that stall, no technology in search of a problem. We build AI that your people embrace and that strengthens your organisation. We are the only consultancy in the Netherlands that combines AI strategy with 20 years of domain expertise in central government, healthcare and large ERP transformations. That makes us fundamentally different.",
  principlesTitle: "Our five core principles",
  principles: [
    { title: "Strategy before technology", body: "Every AI initiative starts from your organisational goals, not from a tool.", image: "/images/team-discussion.jpg" },
    { title: "Data as the foundation", body: "No reliable AI without reliable data. We always start with data governance.", image: "/images/insights/data-strategy.jpg" },
    { title: "Transparency by design", body: "No black boxes. Your employees and regulators understand what the AI does and why.", image: "/images/insights/ai-technology.jpg" },
    { title: "Adoption as success factor", body: "AI implementation is change management. We guide your people, not just your systems.", image: "/images/team-collab.jpg" },
    { title: "Results, not reports", body: "We stay engaged until value is demonstrably realised.", image: "/images/team-meeting.jpg" },
  ],
  servicesTitle: "Eight AI services, one coherent approach",
  servicesIntro:
    "Our AI services form a coherent ecosystem. You can enter at the level that matches your organisational maturity.",
  sectorTitle: "Sector focus: domain expertise as differentiator",
  sectorIntro:
    "Generic AI consultants know the technology. We know the technology and your domain. That difference determines whether an AI project succeeds or stalls.",
  sectors: [
    {
      name: "Central Government & Public Sector",
      statement: "Public services that are faster, fairer and more transparent. That is not utopia. That is engineering.",
      items: [
        "Accelerate policy information through AI-driven data analysis",
        "Strengthen supervision and enforcement via pattern recognition and risk modelling",
        "Improve digital services to citizens through intelligent self-service",
        "Compliance monitoring on execution processes at large public-sector executive agencies and ministries",
        "Set up AI governance compliant with IAMA, Z-Inspection and AI Act high-risk frameworks",
      ],
    },
    {
      name: "Healthcare & Hospitals",
      statement: "Every minute a healthcare professional spends on administration is a minute not spent on the patient. We give those minutes back.",
      items: [
        "Implementation of ERP systems supported by AI across the full process chain",
        "Strengthen patient safety through predictive monitoring and early signals",
        "Optimise care logistics: OR planning, admission planning, staffing",
        "Reduce administrative load through automated document processing and coding",
        "Healthcare data governance: privacy by design, NEN 7510, BIO compliance",
      ],
    },
  ],
  approachTitle: "Our approach: from quickscan to scaled impact",
  approachIntro: "We work in four phases that connect seamlessly. You set the pace. We safeguard the quality.",
  phases: [
    { phase: "Phase 1", name: "Orientation", duration: "2 to 4 weeks", activities: "AI Quickscan, stakeholder interviews, data assessment, identifying first use cases.", result: "Situation report and shortlist of high-potential AI initiatives." },
    { phase: "Phase 2", name: "Foundations", duration: "4 to 12 weeks", activities: "Data governance, architecture design, compliance mapping, roadmap.", result: "AI-ready data foundation and concrete roadmap." },
    { phase: "Phase 3", name: "Experiment & Validation", duration: "6 to 16 weeks", activities: "Proof of Value per use case, pilot implementations, adoption tracks.", result: "Working AI pilot with measurable results." },
    { phase: "Phase 4", name: "Scale & Operate", duration: "Ongoing", activities: "Roll-out, monitoring, optimisation, governance, knowledge transfer.", result: "Operational AI that reinforces itself." },
  ],
  approachClose: "We do not deliver a proof of concept and disappear. We stay until the value is demonstrably embedded in your organisation.",
  whyTitle: "Why ITsPeople",
  whyIntro: "Five distinguishing strengths we bring.",
  whyItems: [
    { strength: "20+ years domain expertise in healthcare and government", benefit: "No learning curve on your sector. We know the political dynamics, the regulatory landscape, the ERP systems and the boardroom sensitivities." },
    { strength: "Strategy and execution in one hand", benefit: "No coordination between a strategy firm and an implementation partner. We deliver both. That saves time, friction and budget." },
    { strength: "AI as accelerator, not as showcase", benefit: "We use AI to build your applications faster and complete your migrations faster. 40 to 70 percent time savings is our norm, not a marketing claim." },
    { strength: "AI Act and GDPR anchored in every solution", benefit: "Compliance is not an afterthought. Every AI solution is built with ethics, transparency and regulator trust as design principles." },
    { strength: "Outcome-driven partnership", benefit: "We tie our engagement to measurable milestones. Our consultants stay until it works, not until the contract on paper is finished." },
  ],
  quickscanLabel: "Entry product",
  quickscanTitle: "AI Act Quickscan",
  quickscanIntro: "Do you know which AI systems are active in your organisation? Which fall under the EU AI Act as high-risk? Whether your organisation is ready for the enforcement that is active from 2025?",
  quickscanLead: "Most organisations cannot answer these questions. That is a risk. We make it visible in two weeks.",
  quickscanIncludes: [
    "Full inventory of active and planned AI systems",
    "Risk categorisation per EU AI Act (minimal, limited, high, unacceptable)",
    "Gap analysis against mandatory requirements per category",
    "Priority matrix: what must happen now, later, or stop",
    "Executive report for board and regulators",
  ],
  quickscanPrice: "€12,500 to €20,000",
  quickscanDuration: "2-week duration, immediately deployable",
  quickscanCta: "Request the AI Act Quickscan →",
  ctaTitle: "The conversation that matters",
  ctaIntro: "AI transformation does not start with a quote. It starts with an honest conversation about where your organisation stands, what you want to achieve and which step is realistically achievable in the next six months. We invest in that conversation. No agenda, no sales pressure.",
  ctaSteps: [
    "A 60-minute exploratory conversation with a senior consultant (free)",
    "A concise overview of your AI readiness based on the conversation",
    "A concrete proposal for a first step: Quickscan, workshop or roadmap session",
  ],
  ctaButton: "Schedule an exploratory conversation →",
  ctaSecondary: "info@itspeople.nl • +31 (0) 30 22 70 954",
  servicePageBackToPillar: "← All AI Transformation services",
  servicePageProblem: "The problem",
  servicePageApproach: "Our approach",
  servicePageDeliverables: "What you get",
  servicePageMeta: "Suitability and duration",
  servicePageAudience: "Suitable for",
  servicePageDuration: "Duration",
  servicePageRelated: "Also relevant for you",
  servicePagePrimaryCta: "Request the AI Act Quickscan →",
  servicePageSecondaryCta: "Schedule an exploratory conversation →",
  services: [
    {
      slug: "ai-readiness-strategie",
      number: 1,
      image: "/images/services/business-consultancy.jpg",
      statement: "Know where you stand before deciding where you want to go.",
      title: "AI Readiness & Strategy",
      shortDesc: "AI Maturity Assessment and a concrete, phased roadmap, anchored in your strategy.",
      problem: "Many organisations want to start with AI but do not know where to begin. The result: isolated pilots that do not add up, or delays caused by an unclear starting point. The right first step requires an honest view of data, governance, compliance and culture, and connection with the strategic agenda.",
      approach: "We analyse your data architecture, organisational structure, process maturity and executive context. On that basis we develop a concrete AI roadmap: phased, measurable and anchored in your strategy. Not an ambition document without ownership, but a plan that is executable tomorrow.",
      deliverables: [
        "AI Maturity Assessment across the full organisation",
        "Gap analysis on data, governance, compliance and culture",
        "AI Roadmap with KPI-linked initiatives per quarter",
        "Business case per AI use case with TCO and ROI projection",
      ],
      audience: "Organisations that are serious about starting but do not know where.",
      duration: "4 to 6 weeks",
      related: ["data-governance-architecture", "ai-governance-compliance", "ai-talent-enablement"],
      primaryKeyword: "AI strategy healthcare government",
    },
    {
      slug: "data-governance-architecture",
      number: 2,
      image: "/images/services/data-management.jpg",
      statement: "AI is only as reliable as your data. And your data is only as reliable as your governance.",
      title: "Data Governance & AI-Ready Architecture",
      shortDesc: "Data foundation on Azure, AWS or GCP, scalable, manageable and auditable.",
      problem: "Many organisations have data silos, legacy systems and reports whose origins nobody fully understands. Building AI on top of that produces unreliable outcomes and undermines trust in data-driven decision-making.",
      approach: "We build the data foundations on which durable AI applications can stand. From source connection to reporting, from quality assurance to privacy compliance. We design for scalability, manageability and auditability, with the cloud strategy that fits your organisation.",
      deliverables: [
        "Data governance framework including ownership and quality standards",
        "Data architecture design on cloud platforms (Azure, AWS, GCP)",
        "Data pipeline implementation and quality monitoring",
        "GDPR and AI Act compliance mapping",
      ],
      audience: "Organisations with data silos, legacy systems or unreliable reporting.",
      duration: "8 to 16 weeks",
      related: ["ai-readiness-strategie", "predictive-analytics", "ai-driven-migration"],
      primaryKeyword: "Data governance Netherlands",
    },
    {
      slug: "intelligente-procesautomatisering",
      number: 3,
      image: "/images/services/process-management.jpg",
      statement: "Your people are too valuable for work a machine can do better and faster.",
      title: "Intelligent Process Automation",
      shortDesc: "Agentic AI, intelligent document processing and continuous compliance monitoring.",
      problem: "Repetitive administrative work consumes capacity you need for primary processes. At the same time, compliance pressure rises: nothing may be missed, everything must be demonstrable. Sample-based quality controls no longer match this pace.",
      approach: "We identify the processes with the highest automation potential and implement AI-driven solutions. Documents that fill themselves, workflows that escalate autonomously, compliance monitoring that runs continuously instead of in samples. Agentic AI where it adds value, classical automation where it fits better.",
      deliverables: [
        "Intelligent document processing for contracts, applications and reports",
        "AI-driven workflow automation and task routing",
        "Automated quality and compliance checks",
        "Agentic AI agents for repetitive knowledge processes",
      ],
      audience: "Organisations with high administrative load or compliance pressure.",
      duration: "8 to 14 weeks, time savings typically 30 to 70 percent",
      related: ["predictive-analytics", "ai-accelerated-development", "ai-talent-enablement"],
      primaryKeyword: "Agentic AI process automation",
    },
    {
      slug: "predictive-analytics",
      number: 4,
      image: "/images/insights/data-strategy.jpg",
      statement: "Your data is already telling you what will happen. You only need to learn to listen.",
      title: "Predictive Analytics & Decision Support",
      shortDesc: "Transparent predictive models for risk, planning, demand and policy effect.",
      problem: "Many organisations collect data without extracting decision-making advantage. Predictive models are either not built, or built as black boxes that nobody dares to use. The result: hindsight reports rather than foresight steering.",
      approach: "We build transparent predictive models that support your decision-makers. No black box, but models your people understand, trust and use daily. From risk profiling and fraud detection to resource planning and demand forecasting, always tied to a concrete decision moment in your organisation.",
      deliverables: [
        "Patient flow optimisation and care demand forecasts (Healthcare)",
        "Fraud detection and risk analysis in benefit programmes (Government)",
        "Workforce planning and roster simulations based on historical patterns",
        "Policy effect measurement with real-time impact of interventions",
      ],
      audience: "Organisations with data but no decision-making advantage yet.",
      duration: "10 to 20 weeks per use case",
      related: ["data-governance-architecture", "ai-governance-compliance", "intelligente-procesautomatisering"],
      primaryKeyword: "Predictive analytics healthcare",
    },
    {
      slug: "ai-governance-compliance",
      number: 5,
      image: "/images/services/ai-governance.jpg",
      statement: "The organisation that uses AI responsibly wins the trust of citizens, regulators and employees.",
      title: "AI Governance, Ethics & Compliance",
      shortDesc: "EU AI Act, GDPR and IAMA-compliant AI governance that enables innovation.",
      problem: "The EU AI Act is law. The GDPR is law. Responsible AI is no longer optional, it is the licence to operate. Many organisations do not know which AI systems they have, which risk category they fall into, or how to demonstrate to auditors that they are in control.",
      approach: "ITsPeople helps you build a robust AI governance framework that enables innovation rather than blocking it. We combine legal precision with operational workability. The result is a framework that gives your board, works council, regulators and employees confidence, without slowing every experimental use case.",
      deliverables: [
        "AI risk framework aligned with EU AI Act risk categories",
        "Ethics and transparency policy for AI applications",
        "Model governance: versioning, monitoring, retraining and audit trails",
        "Stakeholder communication for board, works council, regulators and employees",
      ],
      audience: "Every organisation that wants to work structurally with AI. Not optional, legally required.",
      duration: "8 to 14 weeks",
      related: ["ai-readiness-strategie", "data-governance-architecture", "ai-talent-enablement"],
      primaryKeyword: "AI compliance EU AI Act",
    },
    {
      slug: "ai-talent-enablement",
      number: 6,
      image: "/images/team-collab.jpg",
      statement: "The best AI tool is worthless if your people will not or cannot use it.",
      title: "AI Talent & Organisation Enablement",
      shortDesc: "AI adoption, in-company training and building an AI Center of Excellence.",
      problem: "Adoption determines 70 percent of AI success but is structurally underestimated. One-off workshops fade away, external AI experts remain dependencies, and internal capabilities do not build by themselves. The result is technology that lands without delivering impact.",
      approach: "We accelerate AI adoption through targeted knowledge transfer, in-company training and building internal AI competencies. Not as a one-off workshop, but as durable capability building. We measure ourselves on whether you stand stronger after our engagement, not on whether you became more dependent.",
      deliverables: [
        "AI literacy programmes for management, professionals and operations",
        "In-company AI training tailored to your context (from prompt engineering to data science basics)",
        "AI Center of Excellence setup, internal capability anchored in the line",
        "Change management tracks for AI implementations",
      ],
      audience: "Every organisation. Adoption determines 70 percent of AI success.",
      duration: "12 to 24 weeks",
      related: ["ai-readiness-strategie", "ai-governance-compliance", "intelligente-procesautomatisering"],
      primaryKeyword: "AI Center of Excellence",
    },
    {
      slug: "ai-accelerated-development",
      number: 7,
      image: "/images/insights/ai-technology.jpg",
      statement: "What used to take six months we deliver in six weeks. Not by reducing quality. By adding intelligence.",
      title: "AI-Accelerated Application Development",
      shortDesc: "40 to 70 percent faster development through AI coding, AI testing and architecture-as-code.",
      problem: "Development backlogs are long, capacity is scarce and legacy systems are due for replacement. Classical development teams can no longer keep up with the pace healthcare and government organisations need today.",
      approach: "We build enterprise applications up to 70 percent faster by deploying AI-driven development teams. Autonomous AI agents for code generation, automated testing and real-time quality assurance. Our developers do not work on AI, they work with AI as accelerator. The result: faster to production, lower cost, higher quality.",
      deliverables: [
        "Custom applications for healthcare and government processes, from idea to production in weeks",
        "Citizen and patient portals with intelligent self-service and real-time data integrations",
        "Workflow and process applications integrating with Oracle Fusion, AFAS and SAP",
        "Proof of Value applications: from concept to working demo within 10 working days",
        "Hybrid low-code and pro-code approach, tailored to your IT landscape",
      ],
      audience: "Organisations with urgent development backlogs, limited internal capacity, or legacy systems due for replacement.",
      duration: "Time savings typically 40 to 70 percent compared with traditional development",
      related: ["ai-driven-migration", "intelligente-procesautomatisering", "data-governance-architecture"],
      primaryKeyword: "AI-accelerated development",
    },
    {
      slug: "ai-driven-migration",
      number: 8,
      image: "/images/services/quality-assurance.jpg",
      statement: "Legacy is not your problem. Standing still on legacy is your problem.",
      title: "AI-Driven Platform Migration & Modernisation",
      shortDesc: "Legacy-to-cloud with AI-accelerated code analysis, code rewrite and migration testing.",
      problem: "Migrations to cloud platforms and modern architectures rarely fail because of technology. They fail because of scope, knowledge loss and risk aversion. Outdated core systems, end-of-life software and high run costs trap organisations in a present they want to leave behind.",
      approach: "We use AI to eliminate every migration risk. From automated code analysis and documentation of legacy systems, to AI-driven code rewriting, to intelligent migration testing that surfaces unexpected impact instantly. We move you forward, without downtime, without panic.",
      deliverables: [
        "Mainframe-to-cloud migrations (COBOL, AS/400, Tandem) with AI code analysis",
        "ERP platform shifts: from legacy to Oracle Fusion Cloud, SAP S/4HANA or AFAS",
        "On-premise to cloud-native (Azure, AWS, GCP) with compliance preserved",
        "Database migrations with AI-driven schema mapping and data quality assurance",
        "Application portfolio rationalisation: AI determines what stays, replaces or integrates",
      ],
      audience: "Organisations with outdated core systems, end-of-life software, high run costs or cloud transformation ambition.",
      duration: "Migration time typically 30 to 50 percent shorter than traditional approaches",
      related: ["ai-accelerated-development", "data-governance-architecture", "ai-readiness-strategie"],
      primaryKeyword: "AI-driven migration Oracle Fusion",
    },
  ],
};

export const aiTransformationContent = { nl: NL, en: EN } as const;
