import type { Metadata } from "next";

const siteUrl = "https://www.itspeople.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ITsPeople | IT Consultancy & Digitale Transformatie",
    template: "%s | ITsPeople",
  },
  description:
    "ITsPeople begeleidt organisaties bij complexe digitale transformaties. Van strategie tot implementatie: AI governance, NIS2 compliance, data management en transformationeel leiderschap voor overheid en zorg.",
  keywords: [
    "IT consultancy",
    "digitale transformatie",
    "AI governance",
    "NIS2 compliance",
    "data management",
    "IT governance",
    "zorgsector IT",
    "transformatie advies",
    "business consultancy",
    "project management",
    "quality assurance",
    "AI Act",
    "referentiearchitectuur",
    "digital transformation",
    "ITsPeople",
  ],
  authors: [{ name: "ITsPeople", url: siteUrl }],
  creator: "ITsPeople",
  publisher: "ITsPeople",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "nl-NL": `${siteUrl}/nl`,
      "en-US": `${siteUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "ITsPeople",
    title: "ITsPeople | IT Consultancy & Digitale Transformatie",
    description:
      "Van strategie tot implementatie: AI governance, NIS2 compliance, data management en transformationeel leiderschap voor overheid en zorg.",
    images: [
      {
        url: `${siteUrl}/images/team-meeting.jpg`,
        width: 1200,
        height: 630,
        alt: "ITsPeople - Premium IT Consultancy & Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITsPeople | IT Consultancy & Digitale Transformatie",
    description:
      "Van strategie tot implementatie: AI governance, NIS2 compliance, data management en transformationeel leiderschap.",
    images: [`${siteUrl}/images/team-meeting.jpg`],
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
