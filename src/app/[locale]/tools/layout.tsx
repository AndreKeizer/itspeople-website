import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools, Interactieve Self-Assessment Scans",
  description: "Gratis interactieve tools om de volwassenheid van uw organisatie te meten. Van innovatie readiness tot IT governance en NIS2 compliance scans.",
  openGraph: {
    title: "Interactieve Tools | ITsPeople",
    description: "Gratis self-assessment tools voor innovatie, IT governance en NIS2 compliance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
