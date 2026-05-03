import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werken bij ITsPeople, Carrière in IT Consultancy",
  description: "Werk bij ITsPeople als IT consultant, project manager of data specialist. Ontdek onze vacatures, cultuur en arbeidsvoorwaarden. Maak het verschil in digitale transformatie.",
  openGraph: {
    title: "Werken bij ITsPeople",
    description: "Carrière in IT consultancy: ontdek vacatures en onze cultuur.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
