"use client";

import { motion } from "framer-motion";

const clients = [
  "Rijksoverheid", "Rabobank", "KPN", "UMC Utrecht", "Aegon",
  "Achmea", "Belastingdienst", "ProRail", "Eneco", "PostNL",
];

export default function Clients() {
  return (
    <section className="py-12 bg-white border-b border-its-gray-light/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-its-gray-mid tracking-wider uppercase mb-8">
          Vertrouwd door toonaangevende organisaties
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="text-its-gray-light font-bold text-lg hover:text-its-gray-mid transition-colors cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
