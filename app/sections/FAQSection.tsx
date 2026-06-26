"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import T from "@/components/T";

const faqItems = [
  { id: "faq-1", qKey: "home.faqQ1", aKey: "home.faqA1" },
  { id: "faq-2", qKey: "home.faqQ2", aKey: "home.faqA2" },
  { id: "faq-3", qKey: "home.faqQ3", aKey: "home.faqA3" },
  { id: "faq-4", qKey: "home.faqQ4", aKey: "home.faqA4" },
  { id: "faq-5", qKey: "home.faqQ5", aKey: "home.faqA5" },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${item.id}-panel`;
  const headingId = `${item.id}-heading`;

  return (
    <div className="border border-neutral-200 dark:border-white/10 rounded-xl overflow-hidden transition-colors duration-300 hover:border-accent-gold/30">
      <h3 id={headingId} className="m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between px-6 py-5 text-left text-base sm:text-lg font-semibold text-neutral-900 dark:text-text-light hover:text-accent-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
        >
          <span>
            <T k={item.qKey} />
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-4 flex-shrink-0"
          >
            <ChevronDown
              className={`h-5 w-5 transition-colors duration-300 ${
                isOpen ? "text-accent-gold" : "text-neutral-400 dark:text-white/40"
              }`}
              aria-hidden="true"
            />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 text-sm sm:text-base text-neutral-600 dark:text-text-light/75 font-light leading-relaxed">
              <p className="m-0">
                <T k={item.aKey} />
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 bg-white dark:bg-primary-dark/50 border-t border-neutral-200 dark:border-accent-gold/10"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900 dark:text-text-light"
          >
            <T k="home.faqTitle" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-neutral-600 dark:text-text-light/70 max-w-xl mx-auto font-light"
          >
            <T k="home.faqSub" />
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
