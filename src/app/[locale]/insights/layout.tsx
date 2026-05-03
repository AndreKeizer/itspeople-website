import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kennis & Inzichten, Whitepapers, Artikelen & Podcasts",
  description: "Artikelen, whitepapers en podcasts over digitale transformatie, NIS2 compliance, AI governance, data-gedreven werken en transformationeel leiderschap. Gratis kennisbank van ITsPeople.",
  openGraph: {
    title: "Kennis & Inzichten | ITsPeople",
    description: "Whitepapers, artikelen en podcasts over digitale transformatie, NIS2 compliance en AI governance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
