"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

export default function ContactSection() {
  const { t } = useI18n();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.subject) newErrors.subject = "Please select a subject";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-50 dark:bg-primary-dark/40 border-t border-neutral-200 dark:border-accent-gold/10"
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
            <T k="contact.panelTitle" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-neutral-600 dark:text-text-light/70 max-w-xl mx-auto font-light"
          >
            <T k="contact.heroSub" />
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center p-12 bg-white dark:bg-white/[0.03] border border-emerald-500/20 rounded-2xl text-center min-h-[400px]"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500 mb-6" aria-hidden="true" />
                  <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-text-light mb-3">
                    <T k="contact.successTitle" />
                  </h3>
                  <p className="text-neutral-600 dark:text-text-light/70 font-light max-w-sm">
                    <T k="contact.successSub" />
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm text-accent-gold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="p-8 bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 rounded-2xl space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 dark:text-text-light/80 mb-1.5">
                      <T k="contact.labelName" />
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={t("contact.placeholderName")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-white/[0.03] text-neutral-900 dark:text-text-light placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300"
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 dark:text-text-light/80 mb-1.5">
                      <T k="contact.labelEmail" />
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t("contact.placeholderEmail")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-white/[0.03] text-neutral-900 dark:text-text-light placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300"
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-neutral-700 dark:text-text-light/80 mb-1.5">
                      <T k="contact.labelAlignment" />
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-white/[0.03] text-neutral-900 dark:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      <option value="">{t("contact.formSubjectSelect") || "Select a subject"}</option>
                      <option value="partnership">{t("contact.optionPartnership")}</option>
                      <option value="donation">{t("contact.optionDonation")}</option>
                      <option value="general">{t("contact.optionGeneral")}</option>
                      <option value="volunteer">{t("contact.optionVolunteer")}</option>
                    </select>
                    {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 dark:text-text-light/80 mb-1.5">
                      <T k="contact.labelMessage" />
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={t("contact.placeholderMessage")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-white/[0.03] text-neutral-900 dark:text-text-light placeholder:text-neutral-400 dark:placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300 resize-none"
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-primary-dark font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-accent-gold/90 hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <T k="contact.btnSubmit" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold flex-shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-text-light mb-1">
                    <T k="contact.location" />
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-text-light/70 font-light">
                    <T k="contact.locationVal" />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold flex-shrink-0">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-text-light mb-1">
                    <T k="contact.email" />
                  </h3>
                  <a
                    href="mailto:info@alnibras.pk"
                    className="text-sm text-accent-gold hover:underline font-light"
                  >
                    info@alnibras.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold flex-shrink-0">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-text-light mb-1">Phone</h3>
                  <p className="text-sm text-neutral-600 dark:text-text-light/70 font-light">
                    +923312627716
                  </p>
                </div>
              </div>
            </div>

            {/* Static Lahore Map Area */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.03]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="h-10 w-10 text-accent-gold/40 mb-3" aria-hidden="true" />
                <p className="font-heading text-lg font-bold text-neutral-900 dark:text-text-light mb-1">
                  Lahore, Pakistan
                </p>
                <p className="text-xs text-neutral-500 dark:text-white/40 font-light">
                  31.5204° N, 74.3587° E
                </p>
                <p className="text-[10px] text-neutral-400 dark:text-white/30 mt-2 uppercase tracking-wider font-medium">
                  Registered Social Enterprise
                </p>
                <p className="text-[9px] text-accent-gold/80 mt-1 uppercase tracking-wider font-bold">
                  SECP Reg No: ENT-2026-0987-PB
                </p>
                <p className="text-[9px] text-neutral-500 dark:text-white/40 mt-1 font-light">
                  Founder: Faizan Gillani • Strategic Advisor: Abbas Hussain
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
