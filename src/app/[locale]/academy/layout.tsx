import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy, Opleidingen & Kennisdeling",
  description: "ITsPeople Academy biedt opleidingen en kennissessies over digitale transformatie, AI governance, NIS2 compliance en leiderschap.",
  openGraph: {
    title: "Academy | ITsPeople",
    description: "Opleidingen en kennissessies over digitale transformatie en AI governance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
