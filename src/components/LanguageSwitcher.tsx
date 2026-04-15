"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: "nl" | "en") {
    if (next === locale) return;
    // Replace first path segment with new locale
    const segments = pathname.split("/");
    if (segments[1] === "nl" || segments[1] === "en") {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      <button
        onClick={() => switchTo("nl")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "nl"
            ? "text-its-green"
            : "text-its-gray-mid hover:text-its-charcoal"
        }`}
        aria-label="Nederlands"
      >
        NL
      </button>
      <span className="text-its-gray-light">|</span>
      <button
        onClick={() => switchTo("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-its-green"
            : "text-its-gray-mid hover:text-its-charcoal"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
