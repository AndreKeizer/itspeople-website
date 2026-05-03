import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { managedServicesContent } from "@/lib/managedServices";
import { routing } from "@/i18n/routing";
import ManagedServiceClient from "./ManagedServiceClient";

export function generateStaticParams() {
  // Only generate routes for services that are not flagged as comingSoon.
  const slugs = managedServicesContent.nl.services
    .filter((s) => !s.comingSoon)
    .map((s) => s.slug);
  return routing.locales.flatMap((locale) =>
    slugs.map((service) => ({ locale, service }))
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service: slug } = await params;
  setRequestLocale(locale);

  const service = managedServicesContent.nl.services.find((s) => s.slug === slug);
  if (!service || service.comingSoon) {
    notFound();
  }

  return <ManagedServiceClient slug={slug} />;
}
