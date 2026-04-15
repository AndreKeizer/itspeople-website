"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

const clients = [
  { name: "ASML", src: "/logos/asml.png" },
  { name: "Sociale Verzekeringsbank", src: "/logos/svb.png" },
  { name: "Rabobank", src: "/logos/rabobank.png" },
  { name: "TKP", src: "/logos/tkp.png" },
  { name: "Het CAK", src: "/logos/cak.jpeg" },
  { name: "UMC Utrecht", src: "/logos/umc-utrecht.jpeg" },
  { name: "Erasmus MC", src: "/logos/erasmus-mc.png" },
  { name: "Rijkswaterstaat", src: "/logos/rijkswaterstaat.png" },
  { name: "Douane - Ministerie van Financiën", src: "/logos/douane.png" },
  { name: "Ministerie van LNV", src: "/logos/min-lnv.jpeg" },
  { name: "de Rechtspraak", src: "/logos/rechtspraak.jpeg" },
  { name: "Politie", src: "/logos/politie.jpeg" },
  { name: "RVO", src: "/logos/rvo.png" },
  { name: "Interxion", src: "/logos/interxion.png" },
  { name: "NXP", src: "/logos/nxp.png" },
  { name: "Freescale", src: "/logos/freescale.png" },
  { name: "Athlon", src: "/logos/athlon.jpeg" },
  { name: "DLL", src: "/logos/dll.png" },
  { name: "VTTI", src: "/logos/vtti.png" },
  { name: "Insight", src: "/logos/insight.png" },
  { name: "GSN", src: "/logos/gsn.png" },
  { name: "Topaz", src: "/logos/topaz.jpeg" },
  { name: "Treant Zorggroep", src: "/logos/treant.png" },
  { name: "Gelre Ziekenhuizen", src: "/logos/gelre.png" },
  { name: "ASC", src: "/logos/asc.png" },
  { name: "Rainforest Alliance", src: "/logos/rainforest-alliance.png" },
];

export default function Clients() {
  const locale = useLocale() as "nl" | "en";
  const heading = locale === "en"
    ? "Trusted by leading organisations"
    : "Vertrouwd door toonaangevende organisaties";
  return (
    <section className="py-16 bg-white border-b border-its-gray-light/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-its-gray-mid tracking-wider uppercase mb-10">
          {heading}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-10 items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="relative h-14 flex items-center justify-center transition-all duration-300"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={160}
                height={56}
                className="max-h-14 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
