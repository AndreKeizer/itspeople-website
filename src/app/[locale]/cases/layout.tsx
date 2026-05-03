import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases, Bewezen Resultaten in Digitale Transformatie",
  description: "Ontdek onze succesverhalen in digitale transformatie, AI governance en IT implementatie bij organisaties als RVO, UMC Utrecht, Het CAK en Amsterdam UMC.",
  openGraph: {
    title: "Cases | ITsPeople",
    description: "Bewezen resultaten in digitale transformatie bij overheid en zorg.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
