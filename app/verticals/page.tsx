"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Wallet, Laptop, CheckCircle2 } from "lucide-react";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

export default function Verticals() {
  const { t } = useI18n();

  const pillars = [
    {
      id: "education",
      icon: GraduationCap,
      titleKey: "verticals.pillars.p1.title",
      taglineKey: "verticals.pillars.p1.tagline",
      descKey: "verticals.pillars.p1.desc",
      img: "/education-team.png",
      bulletKeys: [
        "verticals.pillars.p1.b1",
        "verticals.pillars.p1.b2",
        "verticals.pillars.p1.b3",
      ],
      linkTextKey: null as string | null,
      linkHref: null as string | null,
    },
    {
      id: "finance",
      icon: Wallet,
      titleKey: "verticals.pillars.p2.title",
      taglineKey: "verticals.pillars.p2.tagline",
      descKey: "verticals.pillars.p2.desc",
      img: "/finance-mockup.png",
      bulletKeys: [
        "verticals.pillars.p2.b1",
        "verticals.pillars.p2.b2",
        "verticals.pillars.p2.b3",
      ],
      linkTextKey: "verticals.pillars.p2.linkText",
      linkHref: "/finance",
    },
    {
      id: "technology",
      icon: Laptop,
      titleKey: "verticals.pillars.p3.title",
      taglineKey: "verticals.pillars.p3.tagline",
      descKey: "verticals.pillars.p3.desc",
      img: "/technology-operators.png",
      bulletKeys: [
        "verticals.pillars.p3.b1",
        "verticals.pillars.p3.b2",
        "verticals.pillars.p3.b3",
      ],
      linkTextKey: null,
      linkHref: null,
    },
  ];

  return (
    <div className="w-full bg-primary-dark text-text-light">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#F9F8F3] dark:bg-gradient-to-b dark:from-primary-dark dark:via-primary-dark dark:to-[#142B1A] border-b border-neutral-200 dark:border-accent-gold/15 text-neutral-900 dark:text-text-light">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            <T k="verticals.heroTitle" />
          </h1>
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mx-auto font-light leading-relaxed">
            <T k="verticals.heroSub" />
          </p>
        </div>
      </section>

      {/* 2. PILLARS DETAIL BLOCKS */}
      <section className="bg-white text-primary-dark">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const isEven = index % 2 === 1;

          return (
            <div
              key={pillar.id}
              className={`py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-300/60 dark:border-accent-gold/15 ${
                isEven ? "bg-neutral-50" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-7xl">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Content Block */}
                  <div className={`w-full flex flex-col justify-center ${isEven ? "lg:order-2" : ""}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold mb-6">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-[11px] font-bold text-accent-gold uppercase tracking-widest mb-1">
                      {t(pillar.taglineKey)}
                    </span>

                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-text-light mb-6 tracking-tight">
                      {t(pillar.titleKey)}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6">
                      {t(pillar.descKey)}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-3 mb-8">
                      {pillar.bulletKeys.map((bulletKey, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-text-light/90 leading-relaxed font-light">
                          <CheckCircle2 className="h-4 w-4 text-accent-gold shrink-0 mt-0.5" />
                          <span>{t(bulletKey)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Conditional app link button */}
                    {pillar.linkHref && pillar.linkTextKey && (
                      <Link
                        href={pillar.linkHref}
                        className="inline-flex items-center justify-center px-6 py-3 border border-accent-gold bg-accent-gold text-primary-dark font-bold text-xs uppercase tracking-wider rounded transition-all duration-300 hover:bg-transparent hover:text-accent-gold hover:shadow-md hover:shadow-accent-gold/10 self-start"
                      >
                        {t(pillar.linkTextKey)}
                      </Link>
                    )}
                  </div>

                  {/* Image Block */}
                  <div className={`relative w-full ${isEven ? "lg:order-1" : ""}`}>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-neutral-300 dark:border-white/5 bg-primary-dark/5 group">
                      <Image
                        src={pillar.img}
                        alt={t(pillar.titleKey)}
                        fill
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-103 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/15 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
