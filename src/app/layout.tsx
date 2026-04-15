import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "ITsPeople | Premium IT Consultancy & Digital Transformation Nederland",
  description: "ITsPeople begeleidt organisaties bij complexe digitale transformaties. Van strategie tot implementatie. 150+ succesvolle projecten, €80M+ programme value. Contact ons voor een gratis consultatie.",
  keywords: ['IT consultancy', 'digitale transformatie', 'project management', 'cybersecurity', 'NIS2', 'enterprise architecture', 'change management', 'Nederland'],
  authors: [{ name: 'ITsPeople', url: 'https://www.itspeople.nl' }],
  creator: 'ITsPeople',
  publisher: 'ITsPeople',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.itspeople.nl',
    siteName: 'ITsPeople',
    title: 'ITsPeople | Premium IT Consultancy & Digital Transformation',
    description: 'ITsPeople begeleidt organisaties bij complexe digitale transformaties. 150+ succesvolle projecten, €80M+ programme value.',
    images: [
      {
        url: 'https://www.itspeople.nl/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ITsPeople - Premium IT Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITsPeople | Premium IT Consultancy & Digital Transformation',
    description: 'ITsPeople begeleidt organisaties bij complexe digitale transformaties. 150+ succesvolle projecten, €80M+ programme value.',
    images: ['https://www.itspeople.nl/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.itspeople.nl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ITsPeople",
              "description": "Premium IT Consultancy gespecialiseerd in digitale transformatie",
              "url": "https://www.itspeople.nl",
              "logo": "https://www.itspeople.nl/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31-629-526-339",
                "contactType": "customer service",
                "areaServed": "NL",
                "availableLanguage": ["Dutch", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zaltbommel",
                "addressCountry": "NL"
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "André Keizer",
                  "jobTitle": "Founder & Managing Partner"
                },
                {
                  "@type": "Person", 
                  "name": "Mario Kornuijt",
                  "jobTitle": "Managing Partner"
                }
              ],
              "employee": [
                {
                  "@type": "Person",
                  "name": "André Keizer",
                  "jobTitle": "Founder & Managing Partner"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/itspeople",
                "https://www.joinitspeople.nl"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "47"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Client UMC Utrecht"
                  },
                  "reviewBody": "Uitstekende begeleiding bij onze digitale transformatie. Zeer professioneel en resultaatgericht."
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-its-warm text-its-charcoal antialiased">
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
