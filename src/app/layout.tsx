import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITsPeople | Premium IT Consultancy & Digital Transformation",
  description:
    "ITsPeople guides organisations through complex digital transformations. From strategy to implementation.",
  authors: [{ name: "ITsPeople", url: "https://www.itspeople.nl" }],
  creator: "ITsPeople",
  publisher: "ITsPeople",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.itspeople.nl" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
