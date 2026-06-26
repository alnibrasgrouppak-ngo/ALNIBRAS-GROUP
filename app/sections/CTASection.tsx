"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import T from "@/components/T";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] via-[#c9a227] to-[#c5a028]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4"
        >
          <T k="home.ctaTitle2" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-lg text-neutral-800 max-w-xl mx-auto mb-10 font-semibold leading-relaxed"
        >
          <T k="home.ctaSub2" />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-8 py-4 bg-neutral-950 text-white font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-[2px]"
          >
            <T k="home.ctaBtnPartner" /> <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-8 py-4 bg-transparent border-2 border-neutral-950 text-neutral-950 font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-neutral-950 hover:text-white hover:-translate-y-[2px]"
          >
            <T k="home.ctaBtnDonate" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
