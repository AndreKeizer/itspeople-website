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
      comingSoon: true,
    },
    {
      slug: "application-management",
      number: 3,
      image: "/images/services/quality-assurance.jpg",
      statement: "Wat wij bouwen, blijven wij beheren.",
      title: "Application Management",
      shortDesc:
        "Doorlopend beheer, doorontwikkeling, monitoring en compliance-rapportage van uw applicaties. Sluit naadloos aan op onze AI-Accelerated Development en AI-Driven Migration trajecten, zodat u één partner houdt van strategie tot operatie.",
      comingSoon: true,
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
      comingSoon: true,
    },
    {
      slug: "application-management",
      number: 3,
      image: "/images/services/quality-assurance.jpg",
      statement: "What we build, we keep running.",
      title: "Application Management",
      shortDesc:
        "Continuous management, evolution, monitoring and compliance reporting of your applications. Connects seamlessly to our AI-Accelerated Development and AI-Driven Migration tracks, so you keep one partner from strategy to operations.",
      comingSoon: true,
    },
  ],
};

export const managedServicesContent = { nl: NL, en: EN } as const;
