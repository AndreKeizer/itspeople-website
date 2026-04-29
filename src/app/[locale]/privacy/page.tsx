"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

const content = {
  nl: {
    title: "Privacyverklaring",
    lastUpdated: "Laatst bijgewerkt: 29 april 2026",
    intro:
      "ITsPeople hecht groot belang aan de bescherming van uw persoonsgegevens. In deze privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij dat doen en welke rechten u heeft.",
    sections: [
      {
        heading: "1. Wie zijn wij?",
        body: "ITsPeople is een IT-adviesbureau gevestigd in Zaltbommel, Nederland. Wij ondersteunen organisaties bij complexe digitale transformaties.\n\nContactgegevens:\nITsPeople\nHogeweg 105\n5301 LL Zaltbommel\nE-mail: info@itspeople.nl\nTelefoon: +31 (0) 30 22 70 954",
      },
      {
        heading: "2. Welke gegevens verzamelen wij?",
        body: "Wij kunnen de volgende persoonsgegevens verwerken:\n\n- Naam, e-mailadres en telefoonnummer (via contactformulieren)\n- Bedrijfsnaam en functie\n- IP-adres en browserinformatie (automatisch via onze website)\n- Gegevens die u zelf verstrekt in berichten of sollicitaties",
      },
      {
        heading: "3. Waarom verwerken wij uw gegevens?",
        body: "Wij verwerken uw persoonsgegevens voor de volgende doeleinden:\n\n- Het beantwoorden van uw vragen via het contactformulier\n- Het uitvoeren van onze dienstverlening\n- Het verbeteren van onze website en gebruikservaring\n- Het voldoen aan wettelijke verplichtingen\n- Werving en selectie (bij sollicitaties)",
      },
      {
        heading: "4. Rechtsgrond",
        body: "Wij verwerken uw gegevens op basis van:\n\n- Uw toestemming (bijv. bij het invullen van een formulier)\n- De uitvoering van een overeenkomst\n- Een gerechtvaardigd belang (bijv. websiteanalyse)\n- Een wettelijke verplichting",
      },
      {
        heading: "5. Cookies",
        body: "Onze website maakt gebruik van cookies om de website goed te laten functioneren en om het gebruik te analyseren. Wij gebruiken:\n\n- Functionele cookies: noodzakelijk voor de werking van de website\n- Analytische cookies: om het gebruik van de website te meten en te verbeteren\n\nU kunt cookies blokkeren via uw browserinstellingen.",
      },
      {
        heading: "6. Delen met derden",
        body: "Wij delen uw persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij hiertoe wettelijk verplicht zijn. Eventuele verwerkers waarmee wij samenwerken hebben een verwerkersovereenkomst getekend.",
      },
      {
        heading: "7. Bewaartermijn",
        body: "Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk voor het doel waarvoor ze zijn verzameld. Contactgegevens worden maximaal 2 jaar na het laatste contact bewaard, tenzij er een actieve zakelijke relatie bestaat.",
      },
      {
        heading: "8. Uw rechten (AVG/GDPR)",
        body: "Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:\n\n- Recht op inzage in uw persoonsgegevens\n- Recht op rectificatie (correctie) van uw gegevens\n- Recht op verwijdering van uw gegevens\n- Recht op beperking van de verwerking\n- Recht op dataportabiliteit\n- Recht van bezwaar tegen de verwerking\n\nU kunt een verzoek indienen via info@itspeople.nl. Wij reageren binnen 30 dagen.",
      },
      {
        heading: "9. Beveiliging",
        body: "Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang.",
      },
      {
        heading: "10. Klachten",
        body: "Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan contact met ons op via info@itspeople.nl. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: 29 April 2026",
    intro:
      "ITsPeople is committed to protecting your personal data. In this privacy policy, we explain what data we collect, why we do so, and what rights you have.",
    sections: [
      {
        heading: "1. Who are we?",
        body: "ITsPeople is an IT consultancy firm based in Zaltbommel, the Netherlands. We help organisations navigate complex digital transformations.\n\nContact details:\nITsPeople\nHogeweg 105\n5301 LL Zaltbommel\nEmail: info@itspeople.nl\nPhone: +31 (0) 30 22 70 954",
      },
      {
        heading: "2. What data do we collect?",
        body: "We may process the following personal data:\n\n- Name, email address and phone number (via contact forms)\n- Company name and job title\n- IP address and browser information (automatically via our website)\n- Information you provide in messages or job applications",
      },
      {
        heading: "3. Why do we process your data?",
        body: "We process your personal data for the following purposes:\n\n- Responding to your enquiries via the contact form\n- Delivering our consultancy services\n- Improving our website and user experience\n- Complying with legal obligations\n- Recruitment and selection (for job applications)",
      },
      {
        heading: "4. Legal basis",
        body: "We process your data based on:\n\n- Your consent (e.g. when submitting a form)\n- Performance of a contract\n- Legitimate interest (e.g. website analytics)\n- Legal obligation",
      },
      {
        heading: "5. Cookies",
        body: "Our website uses cookies to ensure proper functionality and to analyse usage. We use:\n\n- Functional cookies: necessary for the website to operate\n- Analytical cookies: to measure and improve website usage\n\nYou can block cookies through your browser settings.",
      },
      {
        heading: "6. Sharing with third parties",
        body: "We do not share your personal data with third parties unless it is necessary for the delivery of our services or when we are legally required to do so. Any processors we work with have signed a data processing agreement.",
      },
      {
        heading: "7. Retention period",
        body: "We do not retain your personal data longer than strictly necessary for the purpose for which it was collected. Contact details are stored for a maximum of 2 years after last contact, unless an active business relationship exists.",
      },
      {
        heading: "8. Your rights (GDPR)",
        body: "Under the General Data Protection Regulation (GDPR), you have the following rights:\n\n- Right of access to your personal data\n- Right to rectification (correction) of your data\n- Right to erasure of your data\n- Right to restriction of processing\n- Right to data portability\n- Right to object to processing\n\nYou can submit a request via info@itspeople.nl. We will respond within 30 days.",
      },
      {
        heading: "9. Security",
        body: "We take appropriate technical and organisational measures to protect your personal data against loss, misuse and unauthorised access.",
      },
      {
        heading: "10. Complaints",
        body: "If you have a complaint about the processing of your personal data, please contact us at info@itspeople.nl. You also have the right to file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens, www.autoriteitpersoonsgegevens.nl).",
      },
    ],
  },
};

export default function PrivacyPage() {
  const locale = useLocale() as "nl" | "en";
  const d = content[locale];

  return (
    <section className="py-28 bg-its-warm">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-its-charcoal mb-4">
          {d.title}
        </h1>
        <p className="text-its-gray-mid text-sm mb-8">{d.lastUpdated}</p>
        <p className="text-its-gray-mid text-lg leading-relaxed mb-12">
          {d.intro}
        </p>

        <div className="space-y-10">
          {d.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-its-charcoal mb-4">
                {section.heading}
              </h2>
              <div className="text-its-gray-mid leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-its-gray-light/30">
          <p className="text-its-gray-mid text-sm">
            {locale === "nl"
              ? "Heeft u vragen over deze privacyverklaring? Neem dan "
              : "Do you have questions about this privacy policy? Please "}
            <Link
              href={`/${locale}/contact`}
              className="text-its-green-dark hover:text-its-green font-semibold transition-colors"
            >
              {locale === "nl" ? "contact" : "contact"}
            </Link>
            {locale === "nl" ? " met ons op." : " us."}
          </p>
        </div>
      </div>
    </section>
  );
}
