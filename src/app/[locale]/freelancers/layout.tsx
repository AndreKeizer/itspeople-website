import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelancers — Word Partner van ITsPeople",
  description: "Sluit je aan bij het netwerk van ITsPeople als freelance IT consultant, project manager of specialist. Werk aan uitdagende transformatieprojecten bij top-organisaties.",
  openGraph: {
    title: "Freelancers | ITsPeople",
    description: "Word partner van ITsPeople als freelance IT consultant.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
