"use client";

import { motion } from "framer-motion";
import Floating3D from "@/components/Floating3D";
import T from "@/components/T";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 z-10"
    >
      {/* 3D Parallax floating backgrounds */}
      <Floating3D />

      <div className="mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-xs font-semibold tracking-widest text-accent-gold uppercase mb-8 backdrop-blur-md"
        >
          <T k="home.tagline" />
        </motion.div>

        {/* Headline — H1 for SEO */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-3xl"
        >
          <T k="home.headline" />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mb-12 font-light leading-relaxed"
        >
          <T k="home.sub" />
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full max-w-md"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-accent-gold bg-accent-gold text-primary-dark font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-accent-gold hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-[2px]"
          >
            <T k="home.ctaJoin" />
          </a>
          <a
            href="#ecosystem"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-text-light font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5 hover:-translate-y-[2px]"
          >
            <T k="home.ctaExplore" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
