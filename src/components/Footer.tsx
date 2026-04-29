"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

const t = {
  tagline: {
    nl: "Complexe transformaties, gecentreerd rondom mensen.",
    en: "Complex transformations, centred around people.",
  },
  services: { nl: "Diensten", en: "Services" },
  company: { nl: "Bedrijf", en: "Company" },
  contact: { nl: "Contact", en: "Contact" },
  about: { nl: "Over ons", en: "About us" },
  cases: { nl: "Cases", en: "Cases" },
  insights: { nl: "Insights", en: "Insights" },
  academy: { nl: "Academy", en: "Academy" },
  careers: { nl: "Werken bij", en: "Careers" },
  rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
  privacy: { nl: "Privacyverklaring", en: "Privacy policy" },
  svcBusiness: { nl: "Business Consultancy", en: "Business Consultancy" },
  svcProject: { nl: "Project Management", en: "Project Management" },
  svcProcess: { nl: "Proces Management", en: "Process Management" },
  svcData: { nl: "Data Management", en: "Data Management" },
  svcTest: { nl: "Testen & QA", en: "Testing & QA" },
};

export default function Footer() {
  const locale = useLocale() as "nl" | "en";
  const L = `/${locale}`;

  return (
    <footer className="bg-its-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold tracking-tight block mb-4">
              <span className="text-its-green">ITs</span>
              <span className="text-white">People</span>
            </span>
            <p className="text-its-gray-mid text-sm leading-relaxed mb-2">
              Make the Difference
            </p>
            <p className="text-its-gray-mid text-sm leading-relaxed">{t.tagline[locale]}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.services[locale]}</h4>
            <ul className="space-y-3 text-sm text-its-gray-mid">
              <li><Link href={`${L}/diensten`} className="hover:text-its-green transition-colors">{t.svcBusiness[locale]}</Link></li>
              <li><Link href={`${L}/diensten`} className="hover:text-its-green transition-colors">{t.svcProject[locale]}</Link></li>
              <li><Link href={`${L}/diensten`} className="hover:text-its-green transition-colors">{t.svcProcess[locale]}</Link></li>
              <li><Link href={`${L}/diensten`} className="hover:text-its-green transition-colors">{t.svcData[locale]}</Link></li>
              <li><Link href={`${L}/diensten`} className="hover:text-its-green transition-colors">{t.svcTest[locale]}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.company[locale]}</h4>
            <ul className="space-y-3 text-sm text-its-gray-mid">
              <li><Link href={`${L}/over-ons`} className="hover:text-its-green transition-colors">{t.about[locale]}</Link></li>
              <li><Link href={`${L}/cases`} className="hover:text-its-green transition-colors">{t.cases[locale]}</Link></li>
              <li><Link href={`${L}/insights`} className="hover:text-its-green transition-colors">{t.insights[locale]}</Link></li>
              <li><Link href={`${L}/academy`} className="hover:text-its-green transition-colors">{t.academy[locale]}</Link></li>
              <li><Link href={`${L}/werken-bij`} className="hover:text-its-green transition-colors">{t.careers[locale]}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">{t.contact[locale]}</h4>
            <ul className="space-y-3 text-sm text-its-gray-mid">
              <li>Hogeweg 105</li>
              <li>5301 LL Zaltbommel</li>
              <li><a href="mailto:info@itspeople.nl" className="hover:text-its-green transition-colors">info@itspeople.nl</a></li>
              <li><a href="tel:+31302270954" className="hover:text-its-green transition-colors">+31 (0) 30 22 70 954</a></li>
            </ul>
            <a
              href="https://www.linkedin.com/company/itspeople"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-its-gray-mid hover:text-its-green transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-its-gray-mid">
          <p>&copy; 2026 ITsPeople. {t.rights[locale]}</p>
          <div className="flex gap-6">
            <Link href={`${L}/contact`} className="hover:text-its-green transition-colors">{t.contact[locale]}</Link>
            <Link href={`${L}/privacy`} className="hover:text-its-green transition-colors">{t.privacy[locale]}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
