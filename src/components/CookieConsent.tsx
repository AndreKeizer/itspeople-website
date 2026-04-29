"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const copy = {
  nl: {
    text: "Deze website gebruikt functionele cookies om de website goed te laten werken. Wij plaatsen geen tracking- of marketingcookies.",
    accept: "Accepteren",
    privacy: "Privacyverklaring",
  },
  en: {
    text: "This website uses functional cookies to ensure proper functionality. We do not place tracking or marketing cookies.",
    accept: "Accept",
    privacy: "Privacy Policy",
  },
};

export default function CookieConsent() {
  const locale = useLocale() as "nl" | "en";
  const t = copy[locale] ?? copy.nl;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't accepted yet (use a simple flag in memory
    // since localStorage is not always available in static exports)
    try {
      if (!sessionStorage.getItem("its-cookie-ok")) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      sessionStorage.setItem("its-cookie-ok", "1");
    } catch { /* ignore */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[9999] p-4">
      <div className="max-w-4xl mx-auto bg-its-dark/95 backdrop-blur-sm text-white rounded-xl shadow-2xl p-5 flex flex-col sm:flex-row items-center gap-4 border border-white/10">
        <p className="text-sm leading-relaxed flex-1">
          {t.text}{" "}
          <Link href={`/${locale}/privacy`} className="underline text-its-lime hover:text-its-green transition-colors">
            {t.privacy}
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-6 py-2.5 bg-its-green hover:bg-its-green-dark text-white font-semibold rounded-lg transition-all duration-300 text-sm"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
