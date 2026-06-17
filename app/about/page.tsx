"use client";

import Image from "next/image";
import { Calendar, Award, Compass, Users } from "lucide-react";
import ManifestoMatrix from "@/components/ManifestoMatrix";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

export default function About() {
  const { t } = useI18n();

  const milestoneIcons = [Compass, Users, Award, Calendar];
  const milestoneKeys = ["m1", "m2", "m3", "m4"];

  return (
    <div className="w-full bg-primary-dark text-text-light">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#F9F8F3] dark:bg-gradient-to-b dark:from-primary-dark dark:via-primary-dark dark:to-[#142B1A] border-b border-neutral-300 dark:border-accent-gold/15 text-neutral-900 dark:text-text-light">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <T k="about.heroTitle" />
          </h1>
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/90 max-w-2xl mx-auto font-light leading-relaxed">
            <T k="about.heroSub" />
          </p>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-primary-dark">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Founder Image Frame */}
            <div className="relative flex justify-center w-full">
              <div className="w-full relative max-w-md aspect-[4/5] p-3 border border-accent-gold rounded-2xl bg-primary-dark/5 shadow-2xl shadow-primary-dark/10 group">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-primary-dark/10">
                  <Image
                    src="/founder.jpg"
                    alt="Faizan Gillani — Founder of Al Nibras Group"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-103 grayscale-[15%] group-hover:grayscale-0"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/45 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="w-full flex flex-col justify-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-text-light mb-6 tracking-tight">
                <T k="about.storyTitle" />
              </h2>
              <div className="space-y-6 text-sm sm:text-base text-neutral-700 dark:text-text-light/90 font-light leading-relaxed">
                <p>
                  <T k="about.storyP1" />
                </p>
                <p>
                  <T k="about.storyP2" />
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent-gold/30 bg-accent-gold/5 text-accent-gold text-xs font-bold uppercase rounded mt-8 self-start">
                <T k="common.headquarters" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL-LANGUAGE QUOTE BLOCK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-[#142B1A] border-t border-b border-accent-gold/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-gold/[0.01] pointer-events-none" />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col items-center">
            {/* Urdu Quote */}
            <div
              className="font-nastaleeq text-2xl sm:text-4xl leading-[2.2] sm:leading-[2.2] text-brand-text-gold mb-8 font-semibold select-none text-center"
              dir="rtl"
            >
              &ldquo;{t("about.quoteUrdu")}&rdquo;
            </div>

            {/* English Quote */}
            <p className="text-base sm:text-xl text-neutral-800 dark:text-text-light/95 italic font-light leading-relaxed mb-8 max-w-2xl">
              &ldquo;{t("about.quoteEnglish")}&rdquo;
            </p>

            {/* Quote Author */}
            <div className="text-xs uppercase tracking-widest text-neutral-600 dark:text-text-light/70 font-bold">
              {t("about.quoteAuthor")}
            </div>
          </div>
        </div>
      </section>

      {/* 11 Educational Hallucinations & Solutions Matrix */}
      <ManifestoMatrix />

      {/* 4. TIMELINE SYSTEM */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-primary-dark">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-text-light tracking-tight mb-4">
              <T k="about.timelineTitle" />
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-text-light/90 max-w-lg mx-auto font-light leading-relaxed">
              <T k="about.timelineSub" />
            </p>
          </div>

          <div className="relative border-l border-accent-gold/30 ml-4 sm:ml-6 space-y-12">
            {milestoneKeys.map((mKey, index) => {
              const MilestoneIcon = milestoneIcons[index];
              return (
                <div key={index} className="relative pl-8 sm:pl-12 group">
                  {/* Timeline bullet icon */}
                  <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-accent-gold text-primary-dark border border-accent-gold shadow-md shadow-accent-gold/20 transition-transform duration-300 group-hover:scale-110">
                    <MilestoneIcon className="h-4 w-4" />
                  </div>

                  <div className="font-heading text-2xl font-bold text-accent-gold mb-1 leading-none select-none">
                    {t(`about.milestones.${mKey}.year`)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-text-light mb-2">
                    {t(`about.milestones.${mKey}.title`)}
                  </h3>

                  <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed max-w-2xl">
                    {t(`about.milestones.${mKey}.desc`)}
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
