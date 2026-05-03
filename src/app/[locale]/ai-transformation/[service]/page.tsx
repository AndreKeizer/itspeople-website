import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { aiTransformationContent } from "@/lib/aiTransformation";
import { routing } from "@/i18n/routing";
import AIServiceClient from "./AIServiceClient";

export function generateStaticParams() {
  // Generate static paths for every locale + service slug combination.
  // We use the NL list as canonical because slugs are identical across locales.
  return routing.locales.flatMap((locale) =>
    aiTransformationContent.nl.services.map((s) => ({ locale, service: s.slug }))
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service: slug } = await params;
  setRequestLocale(locale);

  const service = aiTransformationContent.nl.services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  return <AIServiceClient service={service} />;
}
