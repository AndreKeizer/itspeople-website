import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ITsPeople | Premium IT Consultancy & Digital Transformation",
  description:
    "ITsPeople guides organisations through complex digital transformations. From strategy to implementation.",
  authors: [{ name: "ITsPeople", url: "https://www.itspeople.nl" }],
  creator: "ITsPeople",
  publisher: "ITsPeople",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.itspeople.nl" },
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
