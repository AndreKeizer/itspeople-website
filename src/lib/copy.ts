// Centralized bilingual copy for static UI strings.
// Page-specific rich content (Academy trainings, Cases, Insights articles) lives in its own file.

export type Locale = "nl" | "en";

export const copy = {
  nav: {
    home: { nl: "Home", en: "Home" },
    services: { nl: "Diensten", en: "Services" },
    businessServices: { nl: "Bedrijfsdiensten", en: "Business Services" },
    businessServicesTeaser: {
      nl: "Consultancy, projectmanagement, proces, data en quality assurance. Bewezen aanpak voor complexe transformaties.",
      en: "Consultancy, project management, process, data and quality assurance. Proven approach for complex transformations.",
    },
    aiTransformation: { nl: "AI Transformation", en: "AI Transformation" },
    aiTransformationTeaser: {
      nl: "AI-strategie en implementatie voor Rijksoverheid en Zorg. Van AI Act Quickscan tot schaalbare impact.",
      en: "AI strategy and implementation for government and healthcare. From AI Act Quickscan to scalable impact.",
    },
    managedServices: { nl: "Managed Services", en: "Managed Services" },
    managedServicesTeaser: {
      nl: "Doorlopende programmabeheersing, security en applicatiebeheer. Vaste maandtarieven, onafhankelijke rapportage.",
      en: "Continuous programme control, security and application management. Fixed monthly fees, independent reporting.",
    },
    learnMore: { nl: "Meer weten", en: "Learn more" },
    expertises: { nl: "Expertises", en: "Expertises" },
    cases: { nl: "Cases", en: "Cases" },
    academy: { nl: "Academy", en: "Academy" },
    insights: { nl: "Insights", en: "Insights" },
    about: { nl: "Over ons", en: "About us" },
    careers: { nl: "Werken bij", en: "Careers" },
    freelancers: { nl: "Freelancers", en: "Freelancers" },
    knowledge: { nl: "Kennis", en: "Knowledge" },
    tools: { nl: "Tools & Scans", en: "Tools & Scans" },
    contact: { nl: "Contact", en: "Contact" },
    getInTouch: { nl: "Neem contact op", en: "Get in touch" },
  },
  hero: {
    eyebrow: { nl: "Premium IT Consultancy", en: "Premium IT Consultancy" },
    titlePrefix: { nl: "Wij maken", en: "We deliver" },
    titleAccent: { nl: "digitale transformatie", en: "digital transformation" },
    titleSuffix: { nl: "behapbaar", en: "that works" },
    description: {
      nl: "ITsPeople begeleidt organisaties bij complexe transformaties. Van strategie tot realisatie. Met mensgerichte aanpak, strategisch inzicht en hands-on mentaliteit.",
      en: "ITsPeople guides organisations through complex transformations. From strategy to realisation. With a people-first approach, strategic insight and a hands-on mentality.",
    },
    ctaPrimary: { nl: "Ontdek onze aanpak", en: "Discover our approach" },
    ctaSecondary: { nl: "Bekijk cases", en: "View cases" },
    stats: {
      projects: { nl: "Succesvolle projecten", en: "Successful projects" },
      value: { nl: "Programma waarde", en: "Programme value" },
      years: { nl: "Jaar ervaring", en: "Years of experience" },
    },
  },
  about: {
    eyebrow: { nl: "Over ITsPeople", en: "About ITsPeople" },
    title: { nl: "Strategisch partner in transformatie", en: "Your strategic transformation partner" },
    p1: {
      nl: "ITsPeople is een premium consultancy die grote organisaties ondersteunt bij hun belangrijkste digitale uitdagingen. Wij combineren strategisch inzicht, diepgaande vakkennis en hands-on uitvoeringskracht.",
      en: "ITsPeople is a premium consultancy supporting large organisations on their most critical digital challenges. We combine strategic insight, deep domain expertise and hands-on execution power.",
    },
    p2: {
      nl: "Onze consultants werken aan complexe transformaties bij toonaangevende klanten in de financiële sector, bij de overheid en in de zorg. Wij leveren waarde op het snijvlak van mens, proces en technologie.",
      en: "Our consultants deliver complex transformations for leading clients in financial services, government and healthcare, at the intersection of people, process and technology.",
    },
    p3: {
      nl: "Wat ons onderscheidt is de mensgerichte aanpak. Wij geloven dat echte verandering alleen slaagt als mensen de ruimte krijgen om mee te bewegen.",
      en: "What sets us apart is our people-first approach. We believe real change only succeeds when people are given the space to move along with it.",
    },
  },
  services: {
    eyebrow: { nl: "Onze diensten", en: "Our services" },
    title: { nl: "Wat wij leveren", en: "What we deliver" },
    subtitle: {
      nl: "Van strategie tot realisatie: een integraal aanbod voor complexe transformaties.",
      en: "From strategy to realisation: an integrated offering for complex transformations.",
    },
    items: {
      strategy: {
        title: { nl: "Strategie & Advies", en: "Strategy & Advisory" },
        desc: {
          nl: "IT-strategie, operating models en roadmaps die strategische doelen vertalen naar uitvoerbare keuzes.",
          en: "IT strategy, operating models and roadmaps that translate strategic goals into actionable choices.",
        },
      },
      programma: {
        title: { nl: "Programma- & Projectmanagement", en: "Programme & Project Management" },
        desc: {
          nl: "Sturing op complexe transformatieprogramma's met strakke governance en een Business Control Framework.",
          en: "Steering complex transformation programmes with robust governance and a Business Control Framework.",
        },
      },
      transformation: {
        title: { nl: "Digitale Transformatie", en: "Digital Transformation" },
        desc: {
          nl: "End-to-end begeleiding van digitale transformaties, van Target Operating Model tot borging.",
          en: "End-to-end guidance through digital transformations, from Target Operating Model to embedding.",
        },
      },
      change: {
        title: { nl: "Change Management", en: "Change Management" },
        desc: {
          nl: "Mensgerichte verandering: communicatie, adoptie en leiderschap die transformaties laten beklijven.",
          en: "People-first change: communication, adoption and leadership that make transformations stick.",
        },
      },
      security: {
        title: { nl: "Security & Compliance", en: "Security & Compliance" },
        desc: {
          nl: "NIS2, DORA, ISO 27001 en AI Act: pragmatische implementatie met aantoonbare borging.",
          en: "NIS2, DORA, ISO 27001 and the EU AI Act: pragmatic implementation with demonstrable assurance.",
        },
      },
      data: {
        title: { nl: "Data & AI", en: "Data & AI" },
        desc: {
          nl: "Data governance, AI-strategie en datagedreven besluitvorming voor toekomstvaste organisaties.",
          en: "Data governance, AI strategy and data-driven decision making for future-proof organisations.",
        },
      },
    },
  },
  cta: {
    title: { nl: "Klaar om uw transformatie te starten?", en: "Ready to start your transformation?" },
    subtitle: {
      nl: "Neem contact met ons op voor een vrijblijvend gesprek. Wij denken graag met u mee.",
      en: "Reach out for a no-obligation conversation. We'd love to think along with you.",
    },
    button: { nl: "Neem contact op", en: "Get in touch" },
  },
  footer: {
    tagline: {
      nl: "Premium IT consultancy voor complexe digitale transformaties.",
      en: "Premium IT consultancy for complex digital transformations.",
    },
    services: { nl: "Diensten", en: "Services" },
    company: { nl: "Bedrijf", en: "Company" },
    contact: { nl: "Contact", en: "Contact" },
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
  },
  clients: {
    heading: {
      nl: "Vertrouwd door toonaangevende organisaties",
      en: "Trusted by leading organisations",
    },
  },
  stats: {
    projects: { nl: "Projecten", en: "Projects" },
    value: { nl: "Programma waarde", en: "Programme value" },
    consultants: { nl: "Consultants", en: "Consultants" },
    years: { nl: "Jaar ervaring", en: "Years of experience" },
  },
  testimonials: {
    eyebrow: { nl: "Wat klanten zeggen", en: "What clients say" },
    title: { nl: "Resultaat dat telt", en: "Results that matter" },
  },
  expertises: {
    eyebrow: { nl: "Expertises", en: "Expertises" },
    title: { nl: "Specialistische kennis, breed inzetbaar", en: "Specialist knowledge, broadly applicable" },
    subtitle: {
      nl: "Onze consultants zijn specialisten met een brede blik. Wij combineren diepgaande domeinkennis met pragmatische uitvoering.",
      en: "Our consultants are specialists with a broad perspective. We combine deep domain knowledge with pragmatic execution.",
    },
  },
  team: {
    eyebrow: { nl: "Ons team", en: "Our team" },
    title: { nl: "De mensen achter ITsPeople", en: "The people behind ITsPeople" },
    subtitle: {
      nl: "Ervaren consultants die het verschil maken op complexe transformaties.",
      en: "Experienced consultants who make the difference on complex transformations.",
    },
  },
  casesHome: {
    eyebrow: { nl: "Case Studies", en: "Case Studies" },
    title: { nl: "Bewezen resultaat", en: "Proven results" },
    subtitle: {
      nl: "Van strategie tot realisatie: zo hebben wij organisaties geholpen bij hun complexe transformaties.",
      en: "From strategy to realisation: how we've helped organisations through complex transformations.",
    },
    viewCase: { nl: "Lees case →", en: "Read case →" },
    viewAll: { nl: "Alle cases bekijken", en: "View all cases" },
  },
  academyHome: {
    eyebrow: { nl: "ITs Academy", en: "ITs Academy" },
    title: { nl: "Groei · Ontwikkeling · Excellentie", en: "Growth · Development · Excellence" },
    subtitle: {
      nl: "De ITs Academy investeert continu in de ontwikkeling van onze consultants. Van onboarding tot senior level: gestructureerde learning tracks die professionals naar het volgende niveau brengen.",
      en: "The ITs Academy continuously invests in the development of our consultants. From onboarding to senior level: structured learning tracks that take professionals to the next level.",
    },
  },
  insightsHome: {
    eyebrow: { nl: "Insights", en: "Insights" },
    title: { nl: "Kennis & inzichten", en: "Knowledge & insights" },
    subtitle: {
      nl: "Artikelen, whitepapers en podcasts over digitale transformatie, governance, compliance en de menselijke factor.",
      en: "Articles, whitepapers and podcasts on digital transformation, governance, compliance and the human factor.",
    },
    viewAll: { nl: "Alle insights bekijken", en: "View all insights" },
  },
} as const;

export function t<T extends { nl: string; en: string }>(
  field: T,
  locale: Locale
): string {
  return field[locale];
}
