"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { asset } from "@/lib/basePath";

const data = {
  nl: {
    heroLabel: "Freelancers bij ITsPeople",
    heroTitle: "Flexibiliteit en toch",
    heroTitleHighlight: "samenhorigheid",
    heroDesc:
      "Bij ITsPeople werken wij graag samen met gedreven freelancers. Jij behoudt je vrijheid, wij bieden de context, opdrachten en community die het werk rijker maken.",
    introTitle: "Freelancer én onderdeel van het team",
    introP1:
      "Een groot deel van onze opdrachten realiseren wij samen met freelance professionals. Zij staan vaak aan de voorkant bij onze klanten en vertegenwoordigen ITsPeople met dezelfde kwaliteit en betrokkenheid als onze eigen consultants.",
    introP2:
      "Wij geloven dat flexibiliteit en verbondenheid prima samengaan. Daarom nemen wij onze freelancers actief mee in onze trainingen en opleidingen via de ITs Academy. En ook onze medewerkersbijeenkomsten, seminars en workshops staan voor hen open.",
    introP3:
      "Zo combineer je de vrijheid van het freelance-bestaan met de warmte van een betrokken team dat met je meedenkt, jouw ontwikkeling stimuleert en je verbindt aan interessante opdrachten.",
    pillarsTitle: "Wat jij bij ons vindt",
    pillars: [
      {
        title: "Inspirerende opdrachten",
        description:
          "Wij plaatsen jou bij toonaangevende klanten in de financiële sector, bij de overheid en in de zorg. Werk waar complexiteit, mens en impact samenkomen.",
      },
      {
        title: "Toegang tot de ITs Academy",
        description:
          "Je volgt kosteloos onze trainingen en opleidingen mee. Van leiderschap en transformatie tot data, AI en compliance, jouw ontwikkeling blijft doorlopen.",
      },
      {
        title: "Community en events",
        description:
          "Je bent welkom bij onze medewerkersbijeenkomsten, seminars en workshops. Je bouwt een netwerk op van ervaren collega's die je verder helpen.",
      },
      {
        title: "Persoonlijke begeleiding",
        description:
          "We zien jou als professional, niet als CV. Een vast aanspreekpunt denkt met je mee over opdrachten, tarieven en jouw lange-termijn-ambities.",
      },
      {
        title: "Eerlijke samenwerking",
        description:
          "Heldere afspraken, transparante tarieven en korte lijnen. Geen onnodige bureaucratie, wel partnerschap dat verder gaat dan een enkele opdracht.",
      },
      {
        title: "Impact maken, samen",
        description:
          "Wij geloven dat duurzame verandering altijd over de as van de mens loopt. Als freelancer draag je direct bij aan transformaties die er echt toe doen.",
      },
    ],
    quote:
      "Flexibiliteit en toch samenhorigheid. Dat is wat wij onze freelancers bieden: de ruimte om ondernemer te zijn, met de kracht van een team om je heen.",
    quoteAttribution: "André Keizer, Founder ITsPeople",
    stepsTitle: "Zo werken wij samen",
    steps: [
      {
        number: "01",
        title: "Kennismaken",
        description:
          "Je laat je gegevens achter en wij plannen een open gesprek in, zonder verplichtingen. We leren elkaar kennen en bespreken jouw expertise en ambities.",
      },
      {
        number: "02",
        title: "Matchen",
        description:
          "Op basis van jouw profiel en onze opdrachtenportefeuille zoeken we samen de opdracht die bij je past. Inhoudelijk, qua cultuur en qua tarief.",
      },
      {
        number: "03",
        title: "Samenwerken",
        description:
          "Je gaat aan de slag bij onze klant en wordt onderdeel van de ITsPeople-community. Trainingen, events en een vast aanspreekpunt horen daar standaard bij.",
      },
    ],
    formLabel: "Sluit je bij ons aan",
    formTitle: "Laat je gegevens achter",
    formDesc:
      "Ben jij freelancer en nieuwsgierig naar samenwerken met ITsPeople? Laat hieronder je contactgegevens achter. Wij nemen snel persoonlijk contact met je op en nemen je graag mee in onze dienstverlening, trainingen en klantbijeenkomsten.",
    name: "Naam",
    email: "E-mail",
    phone: "Telefoon (optioneel)",
    expertise: "Jouw expertise",
    expertisePlaceholder: "Bijv. Programmamanagement, Data & AI, NIS2 compliance",
    availability: "Beschikbaarheid (optioneel)",
    availabilityPlaceholder: "Bijv. 32 uur per week, vanaf 1 juni",
    message: "Bericht (optioneel)",
    messagePlaceholder: "Vertel ons wat over jezelf en wat je zoekt",
    submit: "Verstuur aanvraag",
    submitting: "Versturen...",
    successTitle: "Bedankt voor je interesse!",
    successBody:
      "Jouw gegevens zijn goed ontvangen. Wij nemen binnen enkele werkdagen persoonlijk contact met je op.",
    errorTitle: "Er ging iets mis",
    errorBody:
      "Probeer het nogmaals of stuur direct een bericht naar info@itspeople.nl.",
    privacy:
      "Jouw gegevens gebruiken wij uitsluitend om contact met je op te nemen en je te informeren over relevante opdrachten, trainingen en bijeenkomsten.",
  },
  en: {
    heroLabel: "Freelancers at ITsPeople",
    heroTitle: "Flexibility and still",
    heroTitleHighlight: "togetherness",
    heroDesc:
      "At ITsPeople we love to work with driven freelancers. You keep your freedom, we offer the context, the assignments and the community that make the work richer.",
    introTitle: "Freelancer, and part of the team",
    introP1:
      "A significant share of our engagements is delivered together with freelance professionals. They represent ITsPeople at our clients with the same quality and commitment as our own consultants.",
    introP2:
      "We believe flexibility and belonging go hand in hand. That is why we actively involve our freelancers in the trainings and programmes of the ITs Academy, and our employee events, seminars and workshops are open to them too.",
    introP3:
      "So you combine the freedom of freelancing with the warmth of an engaged team that thinks with you, invests in your development and connects you to inspiring assignments.",
    pillarsTitle: "What you will find with us",
    pillars: [
      {
        title: "Inspiring assignments",
        description:
          "We place you at leading clients in financial services, government and healthcare. Work where complexity, people and impact come together.",
      },
      {
        title: "Access to the ITs Academy",
        description:
          "Join our trainings and development programmes at no cost. From leadership and transformation to data, AI and compliance: your growth continues.",
      },
      {
        title: "Community and events",
        description:
          "You are welcome at our employee gatherings, seminars and workshops. Build a network of experienced peers who help you move forward.",
      },
      {
        title: "Personal guidance",
        description:
          "We see you as a professional, not a CV. A dedicated contact thinks along with you about assignments, rates and your long-term ambitions.",
      },
      {
        title: "Fair collaboration",
        description:
          "Clear agreements, transparent rates and short lines. No unnecessary bureaucracy, just partnership that goes beyond a single assignment.",
      },
      {
        title: "Make an impact, together",
        description:
          "We believe sustainable change always runs through people. As a freelancer you contribute directly to transformations that truly matter.",
      },
    ],
    quote:
      "Flexibility and still togetherness. That is what we offer our freelancers: the space to be an entrepreneur, with the strength of a team around you.",
    quoteAttribution: "André Keizer, Founder ITsPeople",
    stepsTitle: "How we work together",
    steps: [
      {
        number: "01",
        title: "Get to know each other",
        description:
          "You leave your details and we schedule an open conversation, no strings attached. We learn who you are, your expertise and your ambitions.",
      },
      {
        number: "02",
        title: "Match",
        description:
          "Based on your profile and our portfolio of engagements we jointly find the assignment that fits. In content, culture and commercials.",
      },
      {
        number: "03",
        title: "Collaborate",
        description:
          "You start at our client and become part of the ITsPeople community. Trainings, events and a dedicated contact come as standard.",
      },
    ],
    formLabel: "Join us",
    formTitle: "Leave your details",
    formDesc:
      "Are you a freelancer curious about working with ITsPeople? Leave your contact details below. We will reach out personally and are glad to involve you in our services, trainings and client events.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    expertise: "Your expertise",
    expertisePlaceholder: "E.g. Programme management, Data & AI, NIS2 compliance",
    availability: "Availability (optional)",
    availabilityPlaceholder: "E.g. 32 hours per week, from 1 June",
    message: "Message (optional)",
    messagePlaceholder: "Tell us a bit about yourself and what you are looking for",
    submit: "Send request",
    submitting: "Sending...",
    successTitle: "Thank you for reaching out!",
    successBody:
      "We have received your details and will contact you personally within a few working days.",
    errorTitle: "Something went wrong",
    errorBody:
      "Please try again or send a message directly to info@itspeople.nl.",
    privacy:
      "We use your details solely to contact you and keep you informed about relevant assignments, trainings and events.",
  },
};

export default function FreelancersPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    availability: "",
    message: "",
  });
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const subject = encodeURIComponent(`Freelancer aanmelding — ${form.name}`);
      const body = encodeURIComponent(
        `Naam: ${form.name}\nE-mail: ${form.email}\nTelefoon: ${form.phone || "-"}\nExpertise: ${form.expertise}\nBeschikbaarheid: ${form.availability}\n\nBericht:\n${form.message || "(geen)"}`
      );
      window.location.href = `mailto:info@itspeople.nl?subject=${subject}&body=${body}`;
      setState("success");
      setForm({ name: "", email: "", phone: "", expertise: "", availability: "", message: "" });
    } catch {
      setState("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0">
          <Image
            src={asset("/images/team-collab.jpg")}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-its-dark/90 via-its-deep/85 to-its-dark/95" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.heroLabel}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white max-w-4xl">
              {d.heroTitle} <span className="gradient-text">{d.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              {d.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-its-charcoal mb-6">{d.introTitle}</h2>
              <p className="text-its-gray-mid text-lg leading-relaxed mb-5">{d.introP1}</p>
              <p className="text-its-gray-mid leading-relaxed mb-5">{d.introP2}</p>
              <p className="text-its-gray-mid leading-relaxed">{d.introP3}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-its-dark/10">
                <Image src={asset("/images/team-discussion.jpg")} alt={d.introTitle} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-its-charcoal">{d.pillarsTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-white border border-its-gray-light/40 hover:border-its-green/40 hover:shadow-lg hover:shadow-its-green/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-its-green/10 flex items-center justify-center mb-5 group-hover:bg-its-green/20 transition-colors">
                  <span className="text-its-green-dark font-bold">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-its-charcoal mb-3">{p.title}</h3>
                <p className="text-its-gray-mid text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-24 overflow-hidden bg-its-dark">
        <div className="absolute inset-0">
          <Image src={asset("/images/founders-together.jpg")} alt="" fill className="object-cover object-top opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-its-dark via-its-deep/90 to-its-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-its-green text-5xl font-serif leading-none">&ldquo;</span>
            <p className="text-white text-2xl sm:text-3xl font-light leading-snug mt-2 mb-6">
              {d.quote}
            </p>
            <p className="text-white/60 text-sm uppercase tracking-wider">{d.quoteAttribution}</p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-its-charcoal mb-14"
          >
            {d.stepsTitle}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {d.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-its-warm border border-its-gray-light/30"
              >
                <span className="text-5xl font-bold gradient-text block mb-4">{step.number}</span>
                <h3 className="text-xl font-bold text-its-charcoal mb-3">{step.title}</h3>
                <p className="text-its-gray-mid leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="aanmelden" className="relative py-24 overflow-hidden bg-gradient-to-br from-its-warm via-white to-its-warm">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.formLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-its-charcoal mt-4 mb-5">{d.formTitle}</h2>
            <p className="text-its-gray-mid text-lg max-w-2xl mx-auto leading-relaxed">{d.formDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-its-gray-light/40 shadow-xl shadow-its-dark/5 p-8 sm:p-12"
          >
            {state === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-its-green/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-its-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-its-charcoal mb-3">{d.successTitle}</h3>
                <p className="text-its-gray-mid max-w-md mx-auto">{d.successBody}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-its-charcoal">{d.name} *</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-its-charcoal">{d.email} *</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="text-sm font-semibold text-its-charcoal">{d.phone}</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-its-charcoal">{d.availability}</span>
                    <input
                      type="text"
                      value={form.availability}
                      onChange={update("availability")}
                      placeholder={d.availabilityPlaceholder}
                      className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-its-charcoal">{d.expertise}</span>
                  <input
                    type="text"
                    value={form.expertise}
                    onChange={update("expertise")}
                    placeholder={d.expertisePlaceholder}
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-its-charcoal">{d.message}</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder={d.messagePlaceholder}
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-its-gray-light/50 focus:border-its-green focus:outline-none focus:ring-2 focus:ring-its-green/20 transition-all bg-white resize-none"
                  />
                </label>

                <p className="text-xs text-its-gray-mid">{d.privacy}</p>

                {state === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                    <p className="font-semibold text-red-700 text-sm">{d.errorTitle}</p>
                    <p className="text-red-600 text-sm mt-1">{d.errorBody}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-its-green/25"
                >
                  {state === "submitting" ? d.submitting : d.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
