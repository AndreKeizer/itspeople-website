"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = {
  nl: {
    tag: "Contact",
    heading1: "Laten we",
    heading2: "praten",
    intro: "Benieuwd wat ITsPeople voor uw organisatie kan betekenen? Neem contact op, wij denken graag met u mee.",
    form: {
      title: "Stuur ons een bericht",
      labels: {
        naam: "Naam",
        email: "E-mail",
        telefoon: "Telefoon",
        organisatie: "Organisatie",
        onderwerp: "Onderwerp",
        bericht: "Bericht",
      },
      selectTopic: "Selecteer een onderwerp",
      topics: [
        { value: "diensten", label: "Diensten" },
        { value: "cases", label: "Cases & referenties" },
        { value: "samenwerking", label: "Samenwerking" },
        { value: "werken-bij", label: "Werken bij ITsPeople" },
        { value: "anders", label: "Anders" },
      ],
      required: "(verplicht)",
      submit: "Verstuur bericht →",
      success: "Bedankt voor uw bericht!",
      successMsg: "Wij nemen zo snel mogelijk contact met u op. Meestal binnen 1 werkdag.",
    },
    contact: {
      title: "Contactgegevens",
      email: "E-mail",
      phone: "Telefoon",
      address: "Adres",
      linkedin: "LinkedIn",
      office: "Ons kantoor",
      city: "Zaltbommel",
    },
  },
  en: {
    tag: "Contact",
    heading1: "Let's",
    heading2: "talk",
    intro: "Curious about what ITsPeople can mean for your organisation? Get in touch, we'd love to explore together.",
    form: {
      title: "Send us a message",
      labels: {
        naam: "Name",
        email: "Email",
        telefoon: "Phone",
        organisatie: "Organisation",
        onderwerp: "Subject",
        bericht: "Message",
      },
      selectTopic: "Select a subject",
      topics: [
        { value: "diensten", label: "Services" },
        { value: "cases", label: "Cases & References" },
        { value: "samenwerking", label: "Partnership" },
        { value: "werken-bij", label: "Careers" },
        { value: "anders", label: "Other" },
      ],
      required: "(required)",
      submit: "Send message →",
      success: "Thank you for your message!",
      successMsg: "We'll get back to you as soon as possible. Usually within 1 business day.",
    },
    contact: {
      title: "Contact details",
      email: "Email",
      phone: "Phone",
      address: "Address",
      linkedin: "LinkedIn",
      office: "Our office",
      city: "Zaltbommel",
    },
  },
};

export default function ContactPage() {
  const locale = useLocale() as "nl" | "en";
  const d = data[locale];

  const [formData, setFormData] = useState({ naam: "", email: "", telefoon: "", organisatie: "", onderwerp: "", bericht: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-its-dark via-its-deep to-its-dark">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-its-green text-sm font-semibold tracking-wider uppercase">{d.tag}</span>
            <h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-6 tracking-tight text-white">
              {d.heading1} <span className="gradient-text">{d.heading2}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              {d.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-its-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-its-green/20 text-center">
                  <span className="text-5xl block mb-4">✅</span>
                  <h2 className="text-2xl font-bold text-its-charcoal mb-4">{d.form.success}</h2>
                  <p className="text-its-gray-mid">{d.form.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-its-gray-light/30">
                  <h2 className="text-2xl font-bold text-its-charcoal mb-6">{d.form.title}</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.naam} {d.form.required}</label>
                      <input type="text" required value={formData.naam} onChange={(e) => setFormData({ ...formData, naam: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.email} {d.form.required}</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.telefoon}</label>
                      <input type="tel" value={formData.telefoon} onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.organisatie}</label>
                      <input type="text" value={formData.organisatie} onChange={(e) => setFormData({ ...formData, organisatie: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.onderwerp}</label>
                    <select value={formData.onderwerp} onChange={(e) => setFormData({ ...formData, onderwerp: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50">
                      <option value="">{d.form.selectTopic}</option>
                      {d.form.topics.map((topic) => (
                        <option key={topic.value} value={topic.value}>{topic.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-its-charcoal mb-1">{d.form.labels.bericht} {d.form.required}</label>
                    <textarea required rows={5} value={formData.bericht} onChange={(e) => setFormData({ ...formData, bericht: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-its-gray-light/30 bg-its-warm text-its-charcoal text-sm focus:outline-none focus:border-its-green/50 resize-none" />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 rounded-lg bg-its-green hover:bg-its-green-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-its-green/20">
                    {d.form.submit}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-its-charcoal mb-6">{d.contact.title}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-its-gray-light/30">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-bold text-its-charcoal text-sm">{d.contact.email}</p>
                      <a href="mailto:info@itspeople.nl" className="text-its-green-dark hover:text-its-green transition-colors">info@itspeople.nl</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-its-gray-light/30">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold text-its-charcoal text-sm">{d.contact.phone}</p>
                      <a href="tel:+31302270954" className="text-its-green-dark hover:text-its-green transition-colors">+31 (0) 30 22 70 954</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-its-gray-light/30">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-its-charcoal text-sm">{d.contact.address}</p>
                      <p className="text-its-gray-mid">Hogeweg 105</p>
                      <p className="text-its-gray-mid">5301 LL Zaltbommel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-its-gray-light/30">
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="font-bold text-its-charcoal text-sm">{d.contact.linkedin}</p>
                      <a href="https://www.linkedin.com/company/itspeople" target="_blank" rel="noopener noreferrer" className="text-its-green-dark hover:text-its-green transition-colors">linkedin.com/company/itspeople</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/images/building.jpg" alt="ITsPeople office Zaltbommel" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-its-dark/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold">{d.contact.office}</p>
                  <p className="text-white/60 text-sm">{d.contact.city}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
