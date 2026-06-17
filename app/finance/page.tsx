"use client";

import Link from "next/link";
import { ShieldCheck, Star, Lock, ArrowUpRight } from "lucide-react";
import WalletMockup from "@/components/WalletMockup";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

export default function Finance() {
  const { t } = useI18n();

  const features = [
    {
      icon: Star,
      title: t("finance.featuresList.f1.title", "Gamified Action Loop"),
      desc: t("finance.featuresList.f1.desc", "Students earn direct financial reward metrics upon finishing educational modules, ensuring direct psychological validation of knowledge acquisition."),
    },
    {
      icon: ShieldCheck,
      title: t("finance.featuresList.f2.title", "Zero-Interest Framework"),
      desc: t("finance.featuresList.f2.desc", "Designed under strict asset-backed economic principles. Absolutely zero speculative metrics or debt creation loops are present."),
    },
    {
      icon: Lock,
      title: t("finance.featuresList.f3.title", "Parental Guardrails"),
      desc: t("finance.featuresList.f3.desc", "Full institutional oversight coupled with robust family authorization structures ensures a completely safe data space for young users."),
    },
  ];

  return (
    <div className="w-full bg-primary-dark text-text-light">
      {/* 1. HERO SECTION & INTERACTIVE PHONE MOCKUP */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark dark:bg-gradient-to-b dark:from-primary-dark dark:to-[#142B1A] border-b border-accent-gold/15">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Halal Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-gold bg-accent-gold/10 text-xs font-bold tracking-wider text-accent-gold uppercase mb-6 self-start">
                <ShieldCheck className="h-4 w-4" /> <T k="finance.halalBadge" />
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                <T k="finance.heroTitle" />
              </h1>

              <p className="text-base sm:text-lg text-neutral-700 dark:text-text-light/80 font-light leading-relaxed mb-10 max-w-xl">
                <T k="finance.heroSub" />
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-md">
                <a
                  href="https://al-nibras-finance.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent-gold text-neutral-950 font-extrabold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-accent-gold border border-accent-gold hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-[2px]"
                >
                  <T k="finance.ctaAlpha" /> <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-white/5 text-text-light font-bold text-sm rounded uppercase tracking-wider border border-white/20 transition-all duration-300 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5 hover:-translate-y-[2px]"
                >
                  <T k="finance.ctaDemo" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <WalletMockup />
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES MATRIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A120B]/30 text-neutral-900 dark:text-text-light">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-text-light tracking-tight mb-4">
              <T k="finance.featuresTitle" />
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-text-light/90 max-w-lg mx-auto font-light leading-relaxed">
              <T k="finance.featuresSub" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const FeatIcon = feat.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-neutral-300 dark:border-primary-dark/5 bg-neutral-50 dark:bg-primary-dark/[0.01] hover:bg-neutral-100 dark:hover:bg-primary-dark/[0.02] hover:border-accent-gold/30 hover:shadow-lg hover:shadow-primary-dark/2 hover:-translate-y-[2px] transition-all duration-300 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold mb-6 group-hover:bg-neutral-200 dark:group-hover:bg-primary-dark group-hover:text-accent-gold transition-colors duration-300">
                    <FeatIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-text-light mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
