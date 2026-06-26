"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import T from "@/components/T";

export default function Testimonial() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-bg-light text-neutral-900 dark:text-text-light z-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <blockquote className="relative p-10 sm:p-16 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/5 rounded-2xl shadow-xl shadow-neutral-100 dark:shadow-black/20 flex flex-col items-center text-center">
            <Quote className="h-10 w-10 text-accent-gold/45 mb-8" aria-hidden="true" />
            <p className="font-heading text-xl sm:text-2xl font-semibold italic text-neutral-900 dark:text-text-light mb-8 leading-relaxed max-w-2xl">
              &ldquo;<T k="home.testimonial" />&rdquo;
            </p>
            <cite className="text-xs uppercase tracking-widest font-extrabold text-neutral-700 dark:text-text-light/90 not-italic">
              <T k="home.testimonialAuthor" />
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
