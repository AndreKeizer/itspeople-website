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

/* Split logos into two rows for a richer visual effect */
const mid = Math.ceil(clients.length / 2);
const row1 = clients.slice(0, mid);
const row2 = clients.slice(mid);

function LogoRow({ items, duration, reverse = false }: { items: typeof clients; duration: number; reverse?: boolean }) {
  /* Duplicate list so the second copy seamlessly follows the first */
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex-shrink-0 h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src={client.src}
              alt={client.name}
              width={160}
              height={56}
              className="max-h-14 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const locale = useLocale() as "nl" | "en";
  const heading =
    locale === "en"
      ? "Trusted by leading organisations"
      : "Vertrouwd door toonaangevende organisaties";

  return (
    <section className="py-16 bg-white border-b border-its-gray-light/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold text-its-gray-mid tracking-wider uppercase mb-10"
        >
          {heading}
        </motion.p>
      </div>

      <div className="space-y-8">
        <LogoRow items={row1} duration={35} />
        <LogoRow items={row2} duration={30} reverse />
      </div>
    </section>
  );
}
