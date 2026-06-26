"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alignment, setAlignment] = useState("partnership");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-primary-dark text-text-light">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#F9F8F3] dark:bg-gradient-to-b dark:from-primary-dark dark:via-primary-dark dark:to-[#142B1A] border-b border-neutral-200 dark:border-accent-gold/15 text-neutral-900 dark:text-text-light">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <T k="contact.heroTitle" />
          </h1>
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mx-auto font-light leading-relaxed">
            <T k="contact.heroSub" />
          </p>
        </div>
      </section>

      {/* 2. FORM & INFORMATION CONTAINER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-primary-dark">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Info Side Panel */}
            <div className="lg:col-span-5 bg-primary-dark text-text-light p-8 sm:p-12 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl shadow-primary-dark/10 border border-accent-gold/20">
              {/* Subtle accent background */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent-gold/[0.04] blur-2xl pointer-events-none" />

              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-accent-gold">
                  <T k="contact.panelTitle" />
                </h2>
                <p className="text-sm text-text-light/75 font-light leading-relaxed mb-10 max-w-sm">
                  <T k="contact.panelSub" />
                </p>

                {/* Details */}
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold mb-1">
                        <T k="contact.location" />
                      </h3>
                      <p className="text-xs sm:text-sm text-text-light/85 font-light">
                        <T k="contact.locationVal" />
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent-gold mb-1">
                        <T k="contact.email" />
                      </h3>
                      <p className="text-xs sm:text-sm text-text-light/85 font-light">
                        <T k="contact.emailVal" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Redirects & Social Link lists */}
              <div className="mt-12 space-y-6">
                <a
                  href="https://wa.me/923312627716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded border border-accent-gold bg-accent-gold text-primary-dark font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-accent-gold hover:shadow-lg hover:shadow-accent-gold/20"
                  aria-label="Connect via WhatsApp Direct Messaging"
                >
                  <MessageSquare className="h-5 w-5 fill-current" aria-hidden="true" /> <T k="contact.whatsapp" />
                </a>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-text-light/65">
                    <T k="contact.follow" />
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.linkedin.com/in/alnibrasgroup/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5 transition-all duration-300"
                      aria-label="LinkedIn Company Profile"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/alnibrasorg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5 transition-all duration-300"
                      aria-label="Facebook Page"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="lg:col-span-7 bg-[#FAFAF4] p-8 sm:p-12 rounded-2xl shadow-md border border-primary-dark/5 relative flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-neutral-800 dark:text-text-light/90 mb-2">
                        <T k="contact.labelName" />
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={t("contact.placeholderName")}
                        className="w-full px-4 py-3 rounded-lg bg-white text-neutral-950 placeholder-neutral-500 border border-neutral-300 focus:border-accent-gold focus:outline-none dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-400 dark:border-neutral-800 transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-neutral-800 dark:text-text-light/90 mb-2">
                        <T k="contact.labelEmail" />
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder={t("contact.placeholderEmail")}
                        className="w-full px-4 py-3 rounded-lg bg-white text-neutral-950 placeholder-neutral-500 border border-neutral-300 focus:border-accent-gold focus:outline-none dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-400 dark:border-neutral-800 transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Select alignment */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-neutral-800 dark:text-text-light/90 mb-2">
                        <T k="contact.labelAlignment" />
                      </label>
                      <select
                        value={alignment}
                        onChange={(e) => setAlignment(e.target.value)}
                        aria-label="Area of Operational Alignment"
                        className="w-full px-4 py-3 rounded-lg bg-white text-neutral-950 border border-neutral-300 focus:border-accent-gold focus:outline-none dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 transition-all duration-300 text-sm appearance-none"
                      >
                        <option value="partnership">{t("contact.optionPartnership")}</option>
                        <option value="investment">{t("contact.optionInvestment")}</option>
                        <option value="mentorship">{t("contact.optionMentorship")}</option>
                        <option value="general">{t("contact.optionGeneral")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-wider font-bold text-neutral-800 dark:text-text-light/90 mb-2">
                        <T k="contact.labelMessage" />
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        placeholder={t("contact.placeholderMessage")}
                        className="w-full px-4 py-3 rounded-lg bg-white text-neutral-950 placeholder-neutral-500 border border-neutral-300 focus:border-accent-gold focus:outline-none dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-400 dark:border-neutral-800 transition-all duration-300 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary-dark text-text-light font-extrabold text-sm uppercase tracking-wider rounded transition-all duration-300 hover:bg-accent-gold hover:text-neutral-950 hover:shadow-lg hover:shadow-accent-gold/15"
                    >
                      <T k="contact.btnSubmit" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-8 bg-[#142B1A] border border-accent-gold/30 rounded-xl text-white shadow-lg shadow-[#142B1A]/20"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold mb-6 border border-accent-gold/25">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-3 text-accent-gold">
                      <T k="contact.successTitle" />
                    </h3>
                    <p className="text-sm text-text-light/80 max-w-sm font-light leading-relaxed mb-2">
                      <T k="contact.successSub" />
                    </p>
                    <span className="text-[10px] text-text-light/45 italic mt-4">
                      {t("contact.formRefreshing")}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
