import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.itspeople.nl/#organization",
      name: "ITsPeople",
      url: "https://www.itspeople.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.itspeople.nl/images/logo-dark.png",
      },
      description:
        "ITsPeople is een consultingfirm gespecialiseerd in digitale transformatie en strategisch management. Wij ondersteunen organisaties bij complexe bedrijfsuitdagingen, met bijzondere expertise in grootschalige transformatieprojecten voor overheid en zorg.",
      foundingDate: "2003",
      founder: {
        "@type": "Person",
        name: "Andre Keizer",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NL",
        addressLocality: "Nederland",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@itspeople.nl",
        contactType: "customer service",
        availableLanguage: ["Dutch", "English"],
      },
      sameAs: [
        "https://www.linkedin.com/company/itspeople/",
        "https://github.com/AndreKeizer/itspeople-website",
      ],
      knowsAbout: [
        "Digital Transformation",
        "IT Governance",
        "AI Governance",
        "NIS2 Compliance",
        "Data Management",
        "Project Management",
        "Quality Assurance",
        "Business Consultancy",
        "Healthcare IT",
        "Public Sector IT",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.itspeople.nl/#website",
      url: "https://www.itspeople.nl",
      name: "ITsPeople",
      publisher: { "@id": "https://www.itspeople.nl/#organization" },
      inLanguage: ["nl-NL", "en-US"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.itspeople.nl/#service",
      name: "ITsPeople",
      url: "https://www.itspeople.nl",
      provider: { "@id": "https://www.itspeople.nl/#organization" },
      serviceType: "IT Consultancy & Digital Transformation",
      areaServed: {
        "@type": "Country",
        name: "Netherlands",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consultancy Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Consultancy",
              description: "Van strategie naar beheersing en meetbare resultaten.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project Management",
              description: "Complexe verandertrajecten van begin tot eind realiseren.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Management",
              description: "Structuur, kwaliteit, visualisatie en data-gedreven inzichten.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Governance & Strategy",
              description: "Enterprise AI transformatie met compliance-first approach.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Quality Assurance",
              description: "Risicobeheersing door professionele quality assurance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NIS2 & Compliance",
              description: "Integrale compliance-aanpak die wetgeving vertaalt naar werkbare processen.",
            },
          },
        ],
      },
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-its-warm text-its-charcoal antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main className="overflow-hidden">{children}</main>
          <Footer />
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
