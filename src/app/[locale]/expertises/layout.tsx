import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertises — Digitale Strategie, NIS2, AI & Data Governance",
  description: "Diepgaande expertise in digitale strategie, NIS2 compliance, innovatief werkgedrag, datakwaliteit, IT governance en AI & transformatie. Specialisaties die het verschil maken.",
  openGraph: {
    title: "Expertises | ITsPeople",
    description: "Specialisaties in digitale strategie, NIS2 compliance, datakwaliteit, IT governance en AI transformatie.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
