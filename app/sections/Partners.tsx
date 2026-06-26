"use client";

import { motion } from "framer-motion";
import T from "@/components/T";

const partners = [
  {
    name: "Punjab Education Foundation",
    abbr: "PEF",
    description: "Government education partnership",
  },
  {
    name: "Lahore Chamber of Commerce",
    abbr: "LCCI",
    description: "Business ecosystem support",
  },
  {
    name: "State Bank of Pakistan",
    abbr: "SBP",
    description: "Financial literacy framework",
  },
  {
    name: "PITB Punjab",
    abbr: "PITB",
    description: "Technology infrastructure",
  },
  {
    name: "Islamic Development Bank",
    abbr: "IsDB",
    description: "Shariah-compliant finance guidance",
  },
  {
    name: "UNICEF Pakistan",
    abbr: "UNICEF",
    description: "Youth development advisory",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-50 dark:bg-primary-dark/30 border-t border-neutral-200 dark:border-accent-gold/10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900 dark:text-text-light"
          >
            <T k="home.partnersTitle" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-neutral-600 dark:text-text-light/70 max-w-xl mx-auto font-light"
          >
            <T k="home.partnersSub" />
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.abbr}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center justify-center p-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-accent-gold/40 hover:shadow-lg hover:shadow-accent-gold/5 transition-all duration-500 cursor-default"
              title={partner.name}
            >
              {/* Abbreviation as logo placeholder */}
              <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-400 dark:text-white/20 group-hover:text-accent-gold transition-colors duration-500 select-none">
                {partner.abbr}
              </span>
              <span className="mt-2 text-[10px] text-neutral-500 dark:text-white/40 group-hover:text-accent-gold/70 font-medium uppercase tracking-wider transition-colors duration-500 text-center leading-tight">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
