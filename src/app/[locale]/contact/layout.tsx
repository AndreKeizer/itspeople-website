import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact, Neem Contact op met ITsPeople",
  description: "Neem contact op met ITsPeople voor een vrijblijvend adviesgesprek over digitale transformatie, AI governance, NIS2 compliance of IT consultancy.",
  openGraph: {
    title: "Contact | ITsPeople",
    description: "Neem contact op voor een vrijblijvend adviesgesprek over digitale transformatie.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
