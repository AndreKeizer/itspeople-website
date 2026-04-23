import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten — IT Consultancy, Project Management & Data Management",
  description: "Van business consultancy en project management tot data management, quality assurance en AI governance. ITsPeople levert end-to-end transformatiediensten voor overheid en zorg.",
  openGraph: {
    title: "Diensten | ITsPeople",
    description: "End-to-end transformatiediensten: business consultancy, project management, data management, quality assurance en AI governance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
