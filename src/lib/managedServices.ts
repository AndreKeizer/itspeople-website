/**
 * Shared content for the Managed Services pillar page and the service detail pages.
 *
 * Source of truth: TSO_Propositie_ITsPeople.docx + TSO_Website_ITsPeople.md (handover).
 * NL is the primary locale, EN follows the same structure with translated copy.
 *
 * Currently only the TSO service is fully written. SIEM/SOC and Application Management
 * are listed as 'comingSoon: true' so the cards render as placeholders on the pillar
 * page and do not generate detail pages.
 */

export type ManagedService = {
  slug: string;
  number: number;
  image: string;
  statement: string;
  title: string;
  shortDesc: string;
  comingSoon?: boolean;
  problem?: string;
  approach?: string;
  pillars?: { number: number; title: string; body: string }[];
  benefits?: { title: string; body: string }[];
  audience?: string[];
  workMode?: { title: string; body: string }[];
  tiers?: { tier: string; name: string; content: string }[];
  proof?: string;
  whyItems?: { strength: string; benefit: string }[];
  related?: string[];
};

export type ManagedServicesContent = {
  heroLabel: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubline: string;
  heroIntro: string;
  servicesTitle: string;
  servicesIntro: string;
  comingSoonBadge: string;
  ctaTitle: string;
  ctaIntro: string;
  ctaButton: string;
  ctaSecondary: string;
  servicePageBackToPillar: string;
  servicePageProblem: string;
  servicePageApproach: string;
  servicePagePillars: string;
  servicePageBenefits: string;
  servicePageAudience: string;
  servicePageWorkMode: string;
  servicePageTiers: string;
  servicePageProof: string;
  servicePageWhy: string;
  servicePagePrimaryCta: string;
  servicePageSecondaryCta: string;
  servicePageQuoteLine: string;
  services: ManagedService[];
};

const NL: ManagedServicesContent = {
  heroLabel: "Managed Services",
  heroTitle: "Wij blijven na de go-live.",
  heroTitleHighlight: "Daar begint het pas",
  heroSubline: "Doorlopende programmabeheersing, security en applicatiebeheer voor Rijksoverheid, Zorg en de financiële sector.",
  heroIntro:
    "Een transformatie eindigt niet bij de oplevering. Daar begint de operatie. Onze Managed Services geven u doorlopende grip op programma's, security en applicaties via voorspelbare maandtarieven, onafhankelijke rapportage en bewezen partnerships.",
  servicesTitle: "Drie managed services, één partner",
  servicesIntro:
    "Wij bieden drie samenhangende vormen van doorlopende dienstverlening. Elk inzetbaar afzonderlijk, krachtiger in combinatie. Allemaal data-gedreven, onafhankelijk en met vaste maandtarieven.",
  comingSoonBadge: "Binnenkort beschikbaar",
  ctaTitle: "Klaar voor doorlopende grip?",
  ctaIntro:
    "Bent u benieuwd hoe Managed Services uw organisatie kan ondersteunen? Plan een vrijblijvend kennismakingsgesprek met een senior consultant. Geen agenda, geen verkoopdruk, een eerlijk gesprek over wat passend is voor uw situatie.",
  ctaButton: "Plan een oriënterend gesprek →",
  ctaSecondary: "info@itspeople.nl • +31 (0) 30 22 70 954",
  servicePageBackToPillar: "← Alle Managed Services",
  servicePageProblem: "Het probleem",
  servicePageApproach: "Onze aanpak",
  servicePagePillars: "Wat wij leveren",
  servicePageBenefits: "Twee onderscheidende voordelen",
  servicePageAudience: "Voor wie is dit",
  servicePageWorkMode: "Werkwijze",
  servicePageTiers: "Dienstverleningsmodel",
  servicePageProof: "Bewezen expertise",
  servicePageWhy: "Waarom ITsPeople",
  servicePagePrimaryCta: "Vraag een vrijblijvende kennismaking →",
  servicePageSecondaryCta: "Plan een oriënterend gesprek →",
  servicePageQuoteLine: "Eén abonnement. Volledige programmabeheersing. Altijd onafhankelijk inzichtelijk.",
  services: [
    {
      slug: "tso",
      number: 1,
      image: "/images/services/project-management.jpg",
      statement: "Eén abonnement. Volledige programmabeheersing. Altijd onafhankelijk inzichtelijk.",
      title: "Transition Support Office (TSO)",
      shortDesc:
        "Volledig remote programmabeheersingsservice als maandelijks abonnement. Geïntegreerde planning, besluitvorming, financiële control, IT- en security-audits en live portfoliomonitoring, in één hand.",
      problem:
        "Organisaties die middelgrote tot grote programma's uitvoeren lopen structureel tegen dezelfde uitdagingen aan. Planning en voortgang zijn verspreid over meerdere systemen, geïntegreerd overzicht ontbreekt. Besluitvorming en gespreksverslagen worden ad hoc vastgelegd. Financiële rapportages zijn reactief. De opdrachtgever is afhankelijk van informatie van uitvoerende partijen, onafhankelijk tegenwicht ontbreekt. IT- en security-audits worden te laat of onvolledig uitgevoerd. Het gevolg: programma's lopen uit, escalaties worden te laat gesignaleerd en opdrachtgevers missen de grip die zij nodig hebben om tijdig bij te sturen.",
      approach:
        "Het TSO is ITsPeople's geïntegreerde, remote programmabeheersingsservice, beschikbaar als maandelijks abonnement. Onafhankelijk, data-gedreven en sector-agnostisch. Wij ondersteunen opdrachtgevers en hun programma's op alle kritieke beheersaspecten via één samenhangend model. Tegelijkertijd maken onze eigen programmadirecteuren, programmamanagers en projectmanagers actief gebruik van het TSO, wat de praktijkwaarde aantoonbaar maakt.",
      pillars: [
        { number: 1, title: "Geïntegreerde Planning", body: "Live bijhouden van planningsacties, mijlpalen, afhankelijkheden en voortgang. Altijd actueel, altijd inzichtelijk." },
        { number: 2, title: "Besluit- en Actiemanagement", body: "Gespreksverslagen, besluitenlijsten en actiebewaking. Eenduidig vastgelegd en doorzoekbaar voor alle betrokkenen." },
        { number: 3, title: "Financiële Rapportage en Control", body: "Remote business controls, budgetbewaking en periodieke financiële rapportages. Altijd inzicht in waar het programma financieel staat." },
        { number: 4, title: "IT- en Security Audit", body: "Gestructureerde IT-audits op meerdere momenten door het programma heen, aangevuld met security audits. Tijdig signaleren van risico's en kwetsbaarheden." },
        { number: 5, title: "Live Programma Dashboard", body: "Real-time inzicht via beveiligde toegang voor opdrachtgever, stuurgroep en externe toezichthouders. Altijd live, altijd auditeerbaar." },
        { number: 6, title: "Portfolio Management", body: "Geïntegreerde ondersteuning van het volledige projectportfolio: overzicht, prioritering, onderlinge afhankelijkheden en besturing over alle projecten en programma's heen. Eén helder beeld voor C-level en Raad van Bestuur." },
      ],
      benefits: [
        {
          title: "Circa 60 procent kostenefficiënter",
          body: "Traditionele PMO-inrichting met aparte consultants per discipline leidt tot hoge, onbeheersbare kosten. Het TSO werkt anders: vaste medewerkers werken parallel voor meerdere programma's, specialistische expertise in planning, financiën, audit en security is gebundeld beschikbaar, en een vast maandtarief biedt budgetzekerheid. Het TSO-model is gemiddeld circa 60 procent kostenefficiënter dan traditionele programmaondersteuning per discipline.",
        },
        {
          title: "Volledig onafhankelijk",
          body: "Het TSO opereert volledig onafhankelijk van de uitvoerende partijen binnen uw programma. Objectieve rapportage aan de opdrachtgever, zonder belangen van leveranciers. Afwijkingen, risico's en vertragingen worden vroegtijdig en zonder filter gesignaleerd. Bestuurders en stuurgroepen sturen op feiten, niet op perceptie.",
        },
      ],
      audience: [
        "Rijksoverheid en decentrale overheden: ministeries, uitvoeringsorganisaties, gemeenten",
        "Zorginstellingen: ziekenhuizen, universitair medische centra, zorgketens",
        "Financiële instellingen: pensioenfondsen, banken, verzekeraars",
        "Nutsbedrijven en infrastructuur: energie, water, telecom",
        "Private sector: ERP-implementaties, cloud-migraties, digitale transformaties",
      ],
      workMode: [
        {
          title: "Remote-first, met lokale ondersteuning op maat",
          body: "Het leeuwendeel van de dienstverlening vindt remote plaats: planning, verslaglegging, besluitenbeheer, financiële control en audits. Bij stuurgroepen, kickoffs, kritieke mijlpalen en escalaties zijn wij ook on-site beschikbaar.",
        },
        {
          title: "Transparante data, eigen technologie",
          body: "Het TSO werkt met een bewezen technologische infrastructuur, ITsPeople's intellectueel eigendom. Wij zijn volledig transparant over welke data is gebruikt en hoe deze tot stand is gekomen. Ons datamodel is auditeerbaar en verdedigbaar richting externe auditors en toezichthouders.",
        },
      ],
      tiers: [
        { tier: "Basis", name: "TSO Essentials", content: "Geïntegreerde planning, verslaglegging en actiemanagement." },
        { tier: "Standaard", name: "TSO Control", content: "Plus financiële rapportage en remote business controls." },
        { tier: "Premium", name: "TSO Assurance", content: "Plus IT-audit, security-audit, on-site ondersteuning en volledig portfoliomanagement." },
      ],
      proof:
        "Het TSO-model is ontwikkeld vanuit jarenlange praktijkervaring in het leiden en ondersteunen van grootschalige digitale transformaties. ITsPeople heeft dit model reeds toegepast bij centrale overheden in grote, complexe programma's met meervoudige stakeholders en hoge bestuurlijke verantwoording, bij grote financiële instellingen in transitie en bij zorginstellingen in ERP- en cloudimplementaties met strenge compliance-eisen. Onze aantoonbare expertise omvat complexe ERP- en cloudimplementaties met meervoudige leveranciers, programmabeheersing onder tijdsdruk en politieke complexiteit, financiële en bestuurlijke verantwoording richting raden van bestuur en externe toezichthouders, IT- en security-auditing binnen strenge compliance-omgevingen, en portfoliomanagement over meerdere gelijktijdige programma's. Geanonimiseerde klantcases zijn beschikbaar op verzoek.",
      whyItems: [
        { strength: "Circa 60 procent kostenefficiënter", benefit: "Gebundelde expertise via schaalbaar abonnement in plaats van losse detachering per discipline." },
        { strength: "Sector-agnostisch", benefit: "Direct toepasbaar in overheid, zorg, financieel, nuts en private sector." },
        { strength: "Volledig onafhankelijk", benefit: "Geen belangen bij uitvoerende partijen. Objectieve rapportage aan opdrachtgever." },
        { strength: "Data-gedreven en auditeerbaar", benefit: "Transparant over databronnen en methodiek, verdedigbaar richting externe auditors." },
        { strength: "Altijd inzichtelijk", benefit: "Real-time dashboard voor opdrachtgever, bestuur én externe toezichthouders." },
        { strength: "Geïntegreerd portfoliobeheer", benefit: "Eén beeld over alle projecten en programma's, uniform en bestuurlijk gereed." },
        { strength: "Schaalbaar", benefit: "Van één programma tot een volledig portfolio." },
        { strength: "Bewezen in de praktijk", benefit: "Uitgevoerd bij centrale overheden, financiële instellingen en zorginstellingen." },
      ],
      related: [],
    },
    {
      slug: "siem-soc",
      number: 2,
      image: "/images/insights/cybersecurity.jpg",
      statement: "24/7 detectie en respons in het Nederlands, conform NIS2, BIO en NEN 7510.",
      title: "Managed SIEM & SOC",
      shortDesc:
        "Doorlopende cybersecurity-monitoring en incident response in samenwerking met Beam Teknoloji. Sector-specifieke detectieregels voor Rijksoverheid en Zorg, met ITsPeople als regisseur en Beam als gecertificeerde technische partner.",
      problem:
        "De NIS2-richtlijn, de Cyberbeveiligingswet, NEN 7510 en de BIO eisen dat publieke en zorgorganisaties aantoonbaar in control zijn op cybersecurity. Tegelijkertijd is het structureel opbouwen van een eigen 24/7 Security Operations Center voor de meeste organisaties onhaalbaar door de schaarste aan security-talent en de hoge investering. Het gevolg is dat detectie en respons reactief blijven, dat incidenten te laat worden opgemerkt en dat compliance-rapportages aan toezichthouders meer over intentie gaan dan over operationele werkelijkheid.",
      approach:
        "ITsPeople treedt op als enige contractpartij richting uw organisatie en als regisseur van de dienstverlening. Beam Teknoloji levert als gecertificeerde technische partner de 24/7 SOC-uitvoering, incident response en threat hunting via hun STAP-platform en LogTrace SIEM. De rolverdeling is helder: ITsPeople draagt klantrelatie, contractmanagement, SLA-coördinatie, bestuurlijke escalatie en compliance-vertaling. Beam draagt de technische diepgang. Alle data-verwerking vindt plaats binnen Nederlandse en EU-jurisdictie. Dat is geen detail, dat is een ontwerpprincipe.",
      pillars: [
        { number: 1, title: "24/7 SOC-monitoring", body: "Continue dreigingsdetectie via Beam's STAP-platform met geautomatiseerde correlatie en escalatie. Geen blinde vlekken, geen weekend-gat." },
        { number: 2, title: "AI-gestuurde anomaliedetectie", body: "LogTrace SIEM combineert machine learning met sectorale dreigingsintelligentie. Afwijkingen worden vroeger zichtbaar en valse positieven blijven beheersbaar." },
        { number: 3, title: "Integratie met uw bestaande infrastructuur", body: "Naadloze koppeling met uw bestaande beveiligings- en monitoringinfrastructuur. Geen parallelle stack naast wat u al beheert." },
        { number: 4, title: "Incident response", body: "Add-on incident response retainer beschikbaar. Bij escalatie staat een gespecialiseerd team binnen contractueel vastgelegde responstijden klaar." },
        { number: 5, title: "Sector-specifieke detectieregels", body: "Zorg-specifieke scenario's voor EPD-toegang, medische IoT en patiëntgegevens. Overheid-specifieke patronen voor uitvoeringsprocessen en burgerdata. Z-CERT en ZDN-integratie waar relevant." },
        { number: 6, title: "Compliance-rapportage", body: "Kwartaalrapportage en jaarlijkse pentest inbegrepen. Aantoonbaar bewijs voor RDI, IGJ en andere toezichthouders, vertaald naar bestuurlijk leesbare stuurinformatie." },
      ],
      benefits: [
        {
          title: "Eén Nederlandse contractpartij, internationale technische diepgang",
          body: "U sluit één contract met ITsPeople, in het Nederlands, onder Nederlands recht en met een Nederlandstalig aanspreekpunt voor bestuurlijke escalatie. Beam Teknoloji levert de operationele kracht: 120+ FTE security-specialisten, ISO/IEC 17025-, ISO 27001-, ISO 9001- en NATO-gecertificeerd. U krijgt het beste van beide werelden zonder de complexiteit van een buitenlandse contractrelatie.",
        },
        {
          title: "Data blijft in Nederland en de EU",
          body: "ITsPeople is verwerkingsverantwoordelijke in de zin van de AVG. Beam treedt op als technisch-operationele subverwerker zonder zelfstandige toegang tot klantdata buiten de afgesproken scope. Voor Rijksoverheid en zorginstellingen is een on-premises leveringsmodel beschikbaar, zodat datasoevereiniteit volledig geborgd blijft.",
        },
      ],
      audience: [
        "Rijksoverheid en uitvoeringsorganisaties die NIS2- en BIO-compliance moeten aantonen",
        "Universitair medische centra en grote zorginstellingen onder NEN 7510- en NIS2-verplichtingen",
        "Financiële instellingen onder DORA-verplichtingen voor ICT-resilience en derde-partijenbeheer",
        "Organisaties die geen parallelle SOC-infrastructuur willen opbouwen naast hun bestaande beheerde omgeving",
        "Organisaties die een eerste stap willen zetten via een nulmeting voordat zij een volledig SOC-contract aangaan",
      ],
      workMode: [
        {
          title: "24/7 monitoring vanuit een gecertificeerde SOC",
          body: "Continue monitoring vanuit Beam's gecertificeerde Security Operations Center. Detectie en eerste triage gebeuren geautomatiseerd, alle bevestigde incidenten worden binnen contractuele responstijden geëscaleerd via een Nederlandstalig protocol naar de juiste verantwoordelijke binnen uw organisatie.",
        },
        {
          title: "Strategische regie door ITsPeople",
          body: "Naast de operationele dienstverlening biedt ITsPeople de bestuurlijke vertaling. Wij zorgen dat technische bevindingen worden omgezet naar beleidsdocumenten, stuurinformatie voor de raad van bestuur en rapportages richting toezichthouders zoals RDI en IGJ.",
        },
      ],
      proof:
        "De gecombineerde dienstverlening rust op de bewezen track record van beide partijen. Beam Teknoloji is een gecertificeerd A-Type Penetration Testing-bedrijf, geaccrediteerd conform ISO/IEC 17025 en met een NATO Secret Facility Security Certificate, het hoogste beveiligingsniveau voor een commercieel bedrijf. Hun klantenbestand telt meer dan 500.000 eindgebruikers en hun teams hebben grootschalige internationale events veiliggesteld, waaronder de FIFA World Cup 2022 met meer dan 800 geteste systemen. ITsPeople brengt 20+ jaar ervaring in Nederlandse Rijksoverheid en Zorg in, met aantoonbare expertise in compliance-vertaling, bestuurlijke verantwoording en programmabeheersing onder strenge regelgevingsdruk.",
      whyItems: [
        { strength: "Eén contractpartij in Nederland", benefit: "Geen complexiteit van buitenlandse contracten of meertalige escalatieprotocollen. Eén aanspreekpunt, één verantwoordelijke." },
        { strength: "Gecertificeerde technische diepgang", benefit: "ISO/IEC 17025, ISO 27001, ISO 9001 en NATO Secret Facility Security Certificate via Beam Teknoloji." },
        { strength: "Sector-specifieke detectieregels", benefit: "Specifieke scenario's voor zorg en overheid, niet generieke detectie die in elke sector hetzelfde is." },
        { strength: "Vendor-onafhankelijke integratie", benefit: "Naadloze koppeling met uw bestaande beveiligings- en monitoringinfrastructuur. Geen tweede stack naast wat u al beheert." },
        { strength: "EU- en NL-jurisdictie", benefit: "AVG-verwerkersovereenkomst loopt via ITsPeople. On-premises leveringsmodel beschikbaar voor maximale datasoevereiniteit." },
        { strength: "Compliance-bewijs voor toezichthouders", benefit: "Kwartaalrapportage en CISO-dashboard leveren aantoonbaar bewijs voor RDI, IGJ, DNB en andere toezichthouders." },
        { strength: "Schaalbaar van pilot tot organisatiebreed", benefit: "Begin met een gecontroleerde nulmeting, schaal op naar een volledig managed contract zodra de waarde is bewezen." },
        { strength: "Bestuurlijke regie door ITsPeople", benefit: "Technische bevindingen worden vertaald naar bestuurlijke stuurinformatie en beleidsadvies, niet doorgegeven als ruwe alerts." },
      ],
      related: [],
    },
    {
      slug: "application-management",
      number: 3,
      image: "/images/services/quality-assurance.jpg",
      statement: "Wat wij bouwen, blijven wij beheren.",
      title: "Application Management",
      shortDesc:
        "Doorlopend beheer, doorontwikkeling, monitoring en compliance-rapportage van uw applicaties. Sluit naadloos aan op onze AI-Accelerated Development en AI-Driven Migration trajecten, zodat u één partner houdt van strategie tot operatie.",
      problem:
        "Een applicatie eindigt niet bij de oplevering. Daar begint de verantwoordelijkheid pas. Zonder doorlopend eigenaarschap raken applicaties achterop op security-patches, compliance-eisen en gebruikersbehoefte. Interne IT-teams hebben de capaciteit niet om naast hun primaire werk ook elke applicatie continu door te ontwikkelen. Het gevolg is dat wat ooit als modern werd opgeleverd binnen drie jaar zelf legacy wordt, en dat compliance-bewijs aan toezichthouders gaandeweg verzwakt naarmate de werkelijkheid en de documentatie uit elkaar lopen.",
      approach:
        "Wij dragen de doorlopende verantwoordelijkheid voor uw applicaties via een vast maandtarief. Dat omvat beheer, monitoring, evolutie en compliance-rapportage. Application Management sluit naadloos aan op onze AI-Accelerated Development en AI-Driven Migration trajecten, dus wat wij bouwen of migreren kunnen wij ook blijven beheren. Geen kennisoverdracht-pijn, geen partij-wissel met bijbehorend risico. AI-versnellers gebruiken wij ook in beheer: voor automatische documentatie, anomaliedetectie, regressietesten en compliance-updates. Daardoor blijft uw applicatie meegroeien met uw organisatie in plaats van langzaam achteraan te lopen.",
      pillars: [
        { number: 1, title: "Continue monitoring en beschikbaarheid", body: "24/7 monitoring van performance, beschikbaarheid en gebruikerservaring. Proactieve detectie van degradatie voordat gebruikers er last van krijgen." },
        { number: 2, title: "Security en patchmanagement", body: "Tijdige toepassing van beveiligingsupdates, kwetsbaarheidsanalyses en penetratietesten. Security-rapportage als doorlopend bewijs voor toezichthouders." },
        { number: 3, title: "Doorontwikkeling en evolutie", body: "Geplande functionele uitbreidingen, gebruikerssuggesties en technische verbeteringen via een transparant ontwikkelproces. Inclusief AI-versnelde codegeneratie en testautomatisering." },
        { number: 4, title: "Compliance-borging", body: "AVG, NIS2, AI Act en sector-specifieke kaders worden doorlopend gevolgd en in de applicatie verankerd. Aantoonbaar bewijs voor RDI, IGJ, DNB en andere toezichthouders." },
        { number: 5, title: "Integratie- en ketenbeheer", body: "Onderhoud van koppelingen met uw ERP, identiteitsmanagement en externe systemen. Bij upgrades aan beide kanten wordt impact vroegtijdig in beeld gebracht." },
        { number: 6, title: "Kennisborging en documentatie", body: "AI-gegenereerde, altijd actuele technische documentatie en architectuurbeschrijvingen. U raakt nooit afhankelijk van één persoon of één moment." },
      ],
      benefits: [
        {
          title: "Eén partner van strategie tot operatie",
          body: "U houdt dezelfde partij die uw applicatie heeft ontworpen, gebouwd of gemigreerd. Geen kennisoverdracht-pijn, geen leveranciers-wissel met bijbehorende risico's, geen verantwoordelijkheidsdiscussie als er een storing is. Daardoor wordt elke evolutie sneller en goedkoper dan bij een traditionele beheerorganisatie die het werk niet zelf heeft ontwikkeld.",
        },
        {
          title: "AI-versnelde operationele verbetering",
          body: "Beheer is bij ons geen kostenpost die zo laag mogelijk moet blijven, maar een kans om de applicatie continu beter te maken. Onze AI-versnellers automatiseren regressietesten, documentatie, code-reviews en patch-management. U betaalt niet voor stilstand, u betaalt voor doorlopende verbetering.",
        },
      ],
      audience: [
        "Organisaties die een nieuwe applicatie hebben laten bouwen via onze AI-Accelerated Development",
        "Organisaties die net een legacy-migratie hebben afgerond via onze AI-Driven Migration",
        "Organisaties met een portfolio van applicaties dat operationeel beheer beter wil structureren",
        "Organisaties die compliance-eisen (AVG, NIS2, AI Act) doorlopend willen borgen in plaats van eens per jaar te verifiëren",
        "Organisaties die hun interne IT-capaciteit willen vrijspelen voor primaire processen",
      ],
      workMode: [
        {
          title: "Remote-first met heldere SLA's",
          body: "Het beheer is overwegend remote. Beschikbaarheid, responstijden en escalatieprocedures zijn vastgelegd in een transparant Service Level Agreement. On-site aanwezigheid is mogelijk bij majeure releases of compliance-audits.",
        },
        {
          title: "Doorlopende governance en kwartaalrapportage",
          body: "U krijgt elk kwartaal een bestuurlijk leesbare rapportage met beschikbaarheid, incidenten, verbeteringen, compliance-stand en het portefeuillebeeld. Daarnaast staan reguliere governance-momenten in de agenda om uw prioriteiten te wegen tegen onze technische adviezen.",
        },
      ],
      proof:
        "Application Management bouwt voort op 20+ jaar ervaring van ITsPeople met grote ERP-implementaties, cloud-migraties en applicatieportfolios in zorg, Rijksoverheid en de financiële sector. Wij combineren die domeinkennis met onze AI-versnellers, die we ook intern dagelijks inzetten in onze eigen ontwikkel- en beheerprocessen. Onze klanten houden ons gemiddeld langer dan vijf jaar als beheerpartner, omdat de relatie wordt gemeten op of u sterker staat na onze betrokkenheid en niet op of u afhankelijker bent geworden.",
      whyItems: [
        { strength: "Continuiteit van strategie tot operatie", benefit: "Dezelfde partij die ontwerpt, bouwt of migreert blijft beheren. Geen risico-overdracht tussen partijen." },
        { strength: "AI-versnelde optimalisatie", benefit: "Onze AI-versnellers maken beheer goedkoper en sneller. U betaalt voor verbetering, niet voor stilstand." },
        { strength: "Doorlopende compliance-borging", benefit: "AVG, NIS2 en AI Act worden actief in de applicatie verankerd, niet pas getoetst tijdens een audit." },
        { strength: "Sector-kennis ingebed", benefit: "Beheerteams kennen uw sectorprocessen, governance en regelgeving. Geen leercurve bij elke release." },
        { strength: "Voorspelbare maandtarieven", benefit: "Vast bedrag per maand, geen meerwerk-discussies over reguliere doorontwikkeling." },
        { strength: "Schaalbaar van enkele app tot portfolio", benefit: "Begin met een enkele applicatie, schaal op naar uw volledige portfolio zodra de waarde is bewezen." },
        { strength: "Onafhankelijke kwaliteitsbewaking", benefit: "Onze TQA-Framework methodieken worden ook in beheer gehanteerd. Audit-bestendige rapportage standaard." },
        { strength: "Geen vendor lock-in", benefit: "Modulaire inrichting, exit-strategie contractueel verankerd. Alle kennis wordt zo overdraagbaar mogelijk gedocumenteerd." },
      ],
      related: [],
    },
  ],
};

const EN: ManagedServicesContent = {
  heroLabel: "Managed Services",
  heroTitle: "We stay after go-live.",
  heroTitleHighlight: "That's where it begins",
  heroSubline: "Continuous programme control, security and application management for government, healthcare and financial services.",
  heroIntro:
    "A transformation does not end at delivery. That is where the operation starts. Our Managed Services give you continuous grip on programmes, security and applications through predictable monthly fees, independent reporting and proven partnerships.",
  servicesTitle: "Three managed services, one partner",
  servicesIntro:
    "We offer three connected forms of continuous service. Each available individually, more powerful together. All data-driven, independent and on fixed monthly fees.",
  comingSoonBadge: "Coming soon",
  ctaTitle: "Ready for continuous grip?",
  ctaIntro:
    "Curious how Managed Services could support your organisation? Schedule a no-obligation conversation with a senior consultant. No agenda, no sales pressure, just an honest conversation about what fits your situation.",
  ctaButton: "Schedule an exploratory conversation →",
  ctaSecondary: "info@itspeople.nl • +31 (0) 30 22 70 954",
  servicePageBackToPillar: "← All Managed Services",
  servicePageProblem: "The problem",
  servicePageApproach: "Our approach",
  servicePagePillars: "What we deliver",
  servicePageBenefits: "Two distinguishing benefits",
  servicePageAudience: "Who is this for",
  servicePageWorkMode: "How we work",
  servicePageTiers: "Service model",
  servicePageProof: "Proven expertise",
  servicePageWhy: "Why ITsPeople",
  servicePagePrimaryCta: "Request a no-obligation introduction →",
  servicePageSecondaryCta: "Schedule an exploratory conversation →",
  servicePageQuoteLine: "One subscription. Full programme control. Always independently visible.",
  services: [
    {
      slug: "tso",
      number: 1,
      image: "/images/services/project-management.jpg",
      statement: "One subscription. Full programme control. Always independently visible.",
      title: "Transition Support Office (TSO)",
      shortDesc:
        "Fully remote programme control service available as a monthly subscription. Integrated planning, decision management, financial control, IT and security audits and live portfolio monitoring, all in one hand.",
      problem:
        "Organisations executing mid-size to large programmes face the same structural challenges. Planning and progress are spread across multiple systems, integrated overview is missing. Decision-making and meeting minutes are captured ad hoc. Financial reporting is reactive. The client depends on information from delivery parties, with no independent counterweight. IT and security audits are conducted too late or incompletely. The result: programmes overrun, escalations are noticed too late, and clients lack the grip they need to steer in time.",
      approach:
        "The TSO is ITsPeople's integrated, remote programme control service available as a monthly subscription. Independent, data-driven and sector-agnostic. We support clients on all critical control aspects through one coherent model. At the same time, our own programme directors and managers actively use the TSO, which makes the practical value demonstrable.",
      pillars: [
        { number: 1, title: "Integrated Planning", body: "Live tracking of planning actions, milestones, dependencies and progress. Always current, always visible." },
        { number: 2, title: "Decision and Action Management", body: "Meeting minutes, decision lists and action tracking. Captured consistently and searchable for all stakeholders." },
        { number: 3, title: "Financial Reporting and Control", body: "Remote business controls, budget monitoring and periodic financial reports. Always insight into where the programme stands financially." },
        { number: 4, title: "IT and Security Audit", body: "Structured IT audits at multiple moments, complemented by security audits. Risks and vulnerabilities surfaced in time." },
        { number: 5, title: "Live Programme Dashboard", body: "Real-time insight via secure access for client, steering committee and external regulators. Always live, always auditable." },
        { number: 6, title: "Portfolio Management", body: "Integrated support for the full project portfolio: overview, prioritisation, dependencies and steering across all projects and programmes. One clear view for C-level and the executive board." },
      ],
      benefits: [
        {
          title: "Approximately 60 percent more cost-efficient",
          body: "Traditional PMO setups with separate consultants per discipline lead to high, uncontrollable costs. The TSO works differently: fixed staff working in parallel across multiple programmes, specialist expertise in planning, finance, audit and security available as a bundle, and a fixed monthly fee that delivers budget certainty. The TSO model is on average about 60 percent more cost-efficient than traditional programme support per discipline.",
        },
        {
          title: "Fully independent",
          body: "The TSO operates fully independently of the delivery parties in your programme. Objective reporting to the client, with no supplier interests in play. Deviations, risks and delays are surfaced early and unfiltered. Executives and steering committees steer on facts, not perception.",
        },
      ],
      audience: [
        "Central and decentral government: ministries, executive agencies, municipalities",
        "Healthcare institutions: hospitals, university medical centres, care chains",
        "Financial institutions: pension funds, banks, insurers",
        "Utilities and infrastructure: energy, water, telecom",
        "Private sector: ERP implementations, cloud migrations, digital transformations",
      ],
      workMode: [
        {
          title: "Remote-first, with on-site support where it matters",
          body: "The bulk of the service runs remotely: planning, minutes, decision tracking, financial control and audits. For steering committees, kick-offs, critical milestones and escalations, we are also available on-site.",
        },
        {
          title: "Transparent data, proprietary technology",
          body: "The TSO runs on a proven technology stack that is ITsPeople's intellectual property. We are fully transparent about which data is used and how it has been derived. Our data model is auditable and defensible to external auditors and regulators.",
        },
      ],
      tiers: [
        { tier: "Basic", name: "TSO Essentials", content: "Integrated planning, minutes and action management." },
        { tier: "Standard", name: "TSO Control", content: "Plus financial reporting and remote business controls." },
        { tier: "Premium", name: "TSO Assurance", content: "Plus IT audit, security audit, on-site support and full portfolio management." },
      ],
      proof:
        "The TSO model has been developed from years of hands-on experience leading and supporting large-scale digital transformations. ITsPeople has applied this model in central government programmes with multiple stakeholders and high executive accountability, in major financial institutions in transition, and in healthcare institutions delivering ERP and cloud implementations under strict compliance. Our demonstrable expertise covers complex ERP and cloud implementations with multiple suppliers, programme control under time and political pressure, financial and executive accountability to boards and regulators, IT and security auditing in strict compliance environments, and portfolio management across multiple concurrent programmes. Anonymised client cases are available on request.",
      whyItems: [
        { strength: "Approximately 60 percent more cost-efficient", benefit: "Bundled expertise via a scalable subscription instead of separate staff per discipline." },
        { strength: "Sector-agnostic", benefit: "Directly applicable in government, healthcare, finance, utilities and the private sector." },
        { strength: "Fully independent", benefit: "No interests with delivery parties. Objective reporting to the client." },
        { strength: "Data-driven and auditable", benefit: "Transparent on data sources and method, defensible to external auditors." },
        { strength: "Always visible", benefit: "Real-time dashboard for client, board and external regulators." },
        { strength: "Integrated portfolio management", benefit: "One view across all projects and programmes, uniform and board-ready." },
        { strength: "Scalable", benefit: "From a single programme to a full portfolio." },
        { strength: "Proven in practice", benefit: "Delivered at central government, financial institutions and healthcare." },
      ],
      related: [],
    },
    {
      slug: "siem-soc",
      number: 2,
      image: "/images/insights/cybersecurity.jpg",
      statement: "24/7 detection and response in Dutch, compliant with NIS2, BIO and NEN 7510.",
      title: "Managed SIEM & SOC",
      shortDesc:
        "Continuous cybersecurity monitoring and incident response in partnership with Beam Teknoloji. Sector-specific detection rules for government and healthcare, with ITsPeople as orchestrator and Beam as the certified technical partner.",
      problem:
        "The NIS2 Directive, the Dutch Cyberbeveiligingswet, NEN 7510 and the BIO require public-sector and healthcare organisations to demonstrably remain in control of cybersecurity. At the same time, building an in-house 24/7 Security Operations Center is unattainable for most organisations because of scarce security talent and high investment. The result is that detection and response remain reactive, that incidents are noticed too late, and that compliance reporting to regulators becomes more about intent than about operational reality.",
      approach:
        "ITsPeople is the sole contract party to your organisation and orchestrates the service. Beam Teknoloji delivers, as a certified technical partner, the 24/7 SOC operation, incident response and threat hunting on their STAP platform and LogTrace SIEM. The roles are clear: ITsPeople carries the client relationship, contract management, SLA coordination, executive escalation and compliance translation. Beam carries the technical depth. All data processing happens within Dutch and EU jurisdiction. Not a detail, a design principle.",
      pillars: [
        { number: 1, title: "24/7 SOC monitoring", body: "Continuous threat detection on Beam's STAP platform with automated correlation and escalation. No blind spots, no weekend gap." },
        { number: 2, title: "AI-driven anomaly detection", body: "LogTrace SIEM combines machine learning with sector threat intelligence. Anomalies surface earlier and false positives stay manageable." },
        { number: 3, title: "Integration with your existing infrastructure", body: "Native integration with your existing security and monitoring infrastructure. No parallel stack next to what you already manage." },
        { number: 4, title: "Incident response", body: "Add-on incident response retainer available. On escalation a specialist team responds within contractually defined response times." },
        { number: 5, title: "Sector-specific detection rules", body: "Healthcare-specific scenarios for EHR access, medical IoT and patient data. Government-specific patterns for execution processes and citizen data. Z-CERT and ZDN integration where relevant." },
        { number: 6, title: "Compliance reporting", body: "Quarterly reports and an annual penetration test included. Demonstrable evidence for RDI, IGJ and other regulators, translated into board-ready steering information." },
      ],
      benefits: [
        {
          title: "One Dutch contract party, international technical depth",
          body: "You sign one contract with ITsPeople, in Dutch, under Dutch law and with a Dutch-speaking point of contact for executive escalation. Beam Teknoloji provides the operational power: 120+ FTE security specialists, ISO/IEC 17025-, ISO 27001-, ISO 9001- and NATO-certified. You get the best of both worlds without the complexity of a foreign contracting relationship.",
        },
        {
          title: "Data stays in the Netherlands and the EU",
          body: "ITsPeople is the data controller under the GDPR. Beam acts as a technical-operational sub-processor without independent access to client data outside the agreed scope. For central government and healthcare, an on-premises delivery model is available so that data sovereignty remains fully ensured.",
        },
      ],
      audience: [
        "Central government and executive agencies that must demonstrate NIS2 and BIO compliance",
        "University medical centres and large healthcare institutions under NEN 7510 and NIS2 obligations",
        "Financial institutions under DORA obligations for ICT resilience and third-party oversight",
        "Organisations that prefer not to build a parallel SOC infrastructure next to their existing managed environment",
        "Organisations that want a controlled baseline assessment before entering a full SOC contract",
      ],
      workMode: [
        {
          title: "24/7 monitoring from a certified SOC",
          body: "Continuous monitoring from Beam's certified Security Operations Center. Detection and first triage are automated, all confirmed incidents are escalated within contractual response times via a Dutch-language protocol to the right person within your organisation.",
        },
        {
          title: "Strategic orchestration by ITsPeople",
          body: "Alongside the operational service, ITsPeople provides the executive translation. We turn technical findings into policy documents, board-level steering information and reports for regulators such as RDI and IGJ.",
        },
      ],
      proof:
        "The combined service rests on the proven track record of both parties. Beam Teknoloji is a certified A-Type Penetration Testing company, accredited under ISO/IEC 17025 and holding a NATO Secret Facility Security Certificate, the highest security level for a commercial company. Their customer base counts over 500,000 end-users and their teams have secured large international events including the FIFA World Cup 2022 with over 800 systems tested. ITsPeople brings 20+ years of experience in Dutch central government and healthcare, with demonstrable expertise in compliance translation, executive accountability and programme governance under strict regulatory pressure.",
      whyItems: [
        { strength: "One contract party in the Netherlands", benefit: "No complexity of foreign contracts or multilingual escalation. One point of contact, one accountable party." },
        { strength: "Certified technical depth", benefit: "ISO/IEC 17025, ISO 27001, ISO 9001 and NATO Secret Facility Security Certificate via Beam Teknoloji." },
        { strength: "Sector-specific detection rules", benefit: "Specific scenarios for healthcare and government, not generic detection that is the same in every sector." },
        { strength: "Vendor-independent integration", benefit: "Native integration with your existing security and monitoring infrastructure. No second stack next to what you already manage." },
        { strength: "EU and NL jurisdiction", benefit: "GDPR data processing agreement runs through ITsPeople. On-premises delivery available for maximum data sovereignty." },
        { strength: "Compliance evidence for regulators", benefit: "Quarterly reports and a CISO dashboard provide demonstrable evidence for RDI, IGJ, DNB and other regulators." },
        { strength: "Scalable from pilot to enterprise", benefit: "Start with a controlled baseline, scale up to a full managed contract once the value is proven." },
        { strength: "Executive orchestration by ITsPeople", benefit: "Technical findings translated into executive steering information and policy advice, not passed through as raw alerts." },
      ],
      related: [],
    },
    {
      slug: "application-management",
      number: 3,
      image: "/images/services/quality-assurance.jpg",
      statement: "What we build, we keep running.",
      title: "Application Management",
      shortDesc:
        "Continuous management, evolution, monitoring and compliance reporting of your applications. Connects seamlessly to our AI-Accelerated Development and AI-Driven Migration tracks, so you keep one partner from strategy to operations.",
      problem:
        "An application does not end at delivery. That is where ownership begins. Without continuous stewardship, applications fall behind on security patches, compliance demands and user needs. Internal IT teams lack the capacity to keep evolving every application alongside their primary work. The result is that what was once delivered as modern becomes legacy itself within three years, and that compliance evidence to regulators weakens as reality and documentation drift apart.",
      approach:
        "We carry continuous responsibility for your applications on a fixed monthly fee. That covers operations, monitoring, evolution and compliance reporting. Application Management connects seamlessly to our AI-Accelerated Development and AI-Driven Migration tracks, so what we build or migrate we can also keep running. No knowledge transfer pain, no party-switch with associated risk. We use AI accelerators in operations too: for automated documentation, anomaly detection, regression testing and compliance updates. Your application keeps growing with your organisation rather than slowly falling behind.",
      pillars: [
        { number: 1, title: "Continuous monitoring and availability", body: "24/7 monitoring of performance, availability and user experience. Proactive detection of degradation before users feel it." },
        { number: 2, title: "Security and patch management", body: "Timely application of security updates, vulnerability assessments and penetration tests. Security reporting as ongoing evidence for regulators." },
        { number: 3, title: "Evolution and improvement", body: "Planned functional extensions, user-driven improvements and technical upgrades through a transparent development process. Including AI-accelerated code generation and test automation." },
        { number: 4, title: "Compliance assurance", body: "GDPR, NIS2, AI Act and sector frameworks are continuously tracked and embedded in the application. Demonstrable evidence for RDI, IGJ, DNB and other regulators." },
        { number: 5, title: "Integration and chain management", body: "Maintenance of integrations with your ERP, identity management and external systems. When upgrades happen on either side, impact is surfaced in time." },
        { number: 6, title: "Knowledge stewardship and documentation", body: "AI-generated, always up-to-date technical documentation and architecture descriptions. You never depend on one person or one moment in time." },
      ],
      benefits: [
        {
          title: "One partner from strategy to operations",
          body: "You keep the same party that designed, built or migrated your application. No knowledge transfer pain, no vendor switch with associated risk, no responsibility debate when something fails. As a result, every evolution becomes faster and cheaper than at a traditional managed-service organisation that did not build the work.",
        },
        {
          title: "AI-accelerated operational improvement",
          body: "Operations is not a cost line that should be minimised, but an opportunity to improve continuously. Our AI accelerators automate regression testing, documentation, code reviews and patch management. You do not pay for standstill, you pay for ongoing improvement.",
        },
      ],
      audience: [
        "Organisations that have built a new application via our AI-Accelerated Development",
        "Organisations that have just completed a legacy migration via our AI-Driven Migration",
        "Organisations with an application portfolio that want to structure operations more effectively",
        "Organisations that want to embed compliance demands (GDPR, NIS2, AI Act) continuously instead of verifying once a year",
        "Organisations that want to free up internal IT capacity for primary processes",
      ],
      workMode: [
        {
          title: "Remote-first with clear SLAs",
          body: "Operations is mainly remote. Availability, response times and escalation procedures are captured in a transparent Service Level Agreement. On-site presence is available for major releases or compliance audits.",
        },
        {
          title: "Continuous governance and quarterly reporting",
          body: "You receive a board-readable quarterly report with availability, incidents, improvements, compliance status and the portfolio view. Regular governance moments in the agenda balance your priorities against our technical advice.",
        },
      ],
      proof:
        "Application Management builds on 20+ years of ITsPeople experience with large ERP implementations, cloud migrations and application portfolios in healthcare, central government and financial services. We combine that domain knowledge with our AI accelerators, which we also use daily in our own development and operations processes. On average, our clients keep us for more than five years as their operations partner, because the relationship is measured by whether you stand stronger after our engagement, not whether you became more dependent.",
      whyItems: [
        { strength: "Continuity from strategy to operations", benefit: "The same party that designs, builds or migrates keeps running it. No risk transfer between parties." },
        { strength: "AI-accelerated optimisation", benefit: "Our AI accelerators make operations cheaper and faster. You pay for improvement, not for standstill." },
        { strength: "Continuous compliance assurance", benefit: "GDPR, NIS2 and AI Act are actively embedded in the application, not just verified during an audit." },
        { strength: "Sector knowledge embedded", benefit: "Operations teams know your sector processes, governance and regulation. No learning curve at every release." },
        { strength: "Predictable monthly fees", benefit: "Fixed amount per month, no scope discussions on regular evolution." },
        { strength: "Scalable from a single app to a portfolio", benefit: "Start with a single application, scale up to your full portfolio once the value is proven." },
        { strength: "Independent quality assurance", benefit: "Our TQA Framework methods are also applied in operations. Audit-ready reporting by default." },
        { strength: "No vendor lock-in", benefit: "Modular setup, exit strategy contractually anchored. All knowledge documented to be transferable." },
      ],
      related: [],
    },
  ],
};

export const managedServicesContent = { nl: NL, en: EN } as const;
