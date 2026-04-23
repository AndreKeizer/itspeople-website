import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons — Het Team achter ITsPeople",
  description: "Maak kennis met het team van ITsPeople. Meer dan 20 jaar ervaring in digitale transformatie, IT consultancy en strategisch advies voor de Nederlandse publieke sector en zorgsector.",
  openGraph: {
    title: "Over Ons | ITsPeople",
    description: "Het team achter ITsPeople: 20+ jaar ervaring in digitale transformatie voor overheid en zorg.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
