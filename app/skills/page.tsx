"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Sparkles, Terminal, CheckCircle } from "lucide-react";
import type { LucideProps } from "lucide-react";
import MetallicText from "@/components/MetallicText";
import T from "@/components/T";
import { useI18n } from "@/components/I18nContext";

interface SkillItem {
  name: string;
  level: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
  skills: SkillItem[];
  tools: string[];
}

export default function Skills() {
  const { t } = useI18n();

  const categories: SkillCategory[] = [
    {
      title: t("skills.categories.c1.title", "Digital Marketing & Lead Generation Automation"),
      description: t("skills.categories.c1.desc", "Leveraging cutting-edge cloud architectures to automate lead pathways and streamline growth operations."),
      icon: Cpu,
      skills: [
        { name: t("skills.categories.c1.skills.s1", "Automated Customer Pipelines & Lead Capture"), level: t("skills.categories.c1.levels.expert", "Expert") },
        { name: t("skills.categories.c1.skills.s2", "Multi-Source API Synchronizations"), level: t("skills.categories.c1.levels.expert", "Expert") },
        { name: t("skills.categories.c1.skills.s3", "AI-Powered Conversational Workflows"), level: t("skills.categories.c1.levels.advanced", "Advanced") },
        { name: t("skills.categories.c1.skills.s4", "Dynamic CRM Synchronization Loops"), level: t("skills.categories.c1.levels.expert", "Expert") },
      ],
      tools: [
        t("skills.categories.c1.tools.t1", "n8n.io"),
        t("skills.categories.c1.tools.t2", "Make.com"),
        t("skills.categories.c1.tools.t3", "HubSpot CRM"),
        t("skills.categories.c1.tools.t4", "Zapier"),
        t("skills.categories.c1.tools.t5", "Meta API")
      ],
    },
    {
      title: t("skills.categories.c2.title", "Growth Marketing Strategies & Next.js Application Engineering"),
      description: t("skills.categories.c2.desc", "Building blazing-fast web assets integrated with structured growth metrics and interactive user retention elements."),
      icon: Terminal,
      skills: [
        { name: t("skills.categories.c2.skills.s1", "Full-Stack React & Next.js Core Engineering"), level: t("skills.categories.c2.levels.expert", "Expert") },
        { name: t("skills.categories.c2.skills.s2", "SEO Optimization & Lighthouse PageSpeed Tuning"), level: t("skills.categories.c2.levels.expert", "Expert") },
        { name: t("skills.categories.c2.skills.s3", "A/B Testing & Micro-Interaction Design"), level: t("skills.categories.c2.levels.advanced", "Advanced") },
        { name: t("skills.categories.c2.skills.s4", "Dynamic Layout Motion Animations"), level: t("skills.categories.c2.levels.expert", "Expert") },
      ],
      tools: [
        t("skills.categories.c2.tools.t1", "Next.js (App Router)"),
        t("skills.categories.c2.tools.t2", "TypeScript"),
        t("skills.categories.c2.tools.t3", "Tailwind CSS"),
        t("skills.categories.c2.tools.t4", "Framer Motion"),
        t("skills.categories.c2.tools.t5", "Vercel Analytics")
      ],
    },
    {
      title: t("skills.categories.c3.title", "Shariah-Compliant Micro-Savings Fintech Architecture"),
      description: t("skills.categories.c3.desc", "Designing gamified Shariah-compliant digital wallets and product suites aimed at child financial literacy."),
      icon: Layers,
      skills: [
        { name: t("skills.categories.c3.skills.s1", "Shariah-Compliant Digital Ledger Specs"), level: t("skills.categories.c3.levels.expert", "Expert") },
        { name: t("skills.categories.c3.skills.s2", "Gamified Savings Rewards Mechanics"), level: t("skills.categories.c3.levels.expert", "Expert") },
        { name: t("skills.categories.c3.skills.s3", "Secure Mobile-First Sandbox Testing"), level: t("skills.categories.c3.levels.advanced", "Advanced") },
        { name: t("skills.categories.c3.skills.s4", "Product Management & Parent-Child Account Loops"), level: t("skills.categories.c3.levels.expert", "Expert") },
      ],
      tools: [
        t("skills.categories.c3.tools.t1", "Product Specs"),
        t("skills.categories.c3.tools.t2", "Figma Prototyping"),
        t("skills.categories.c3.tools.t3", "Islamic Finance Frameworks"),
        t("skills.categories.c3.tools.t4", "UX Wireframing")
      ],
    },
  ];

  // Animation variants for container cascading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  return (
    <article className="w-full min-h-screen bg-primary-dark text-text-light">
      {/* 1. HERO HEADER */}
      <section 
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-primary-dark dark:bg-gradient-to-b dark:from-primary-dark dark:via-primary-dark dark:to-[#241A0F]/20 border-b border-accent-gold/15"
        aria-labelledby="skills-hero-title"
      >
        <div className="absolute inset-0 bg-brand-accent-inspire/[0.005] pointer-events-none" />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-xs font-semibold tracking-widest text-accent-gold uppercase mb-8 backdrop-blur-md">
            <T k="skills.badge" />
          </div>
          <h1 id="skills-hero-title" className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <T k="skills.heroTitle" />
          </h1>
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mx-auto font-light leading-relaxed">
            <T k="skills.heroSub" />
          </p>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID SECTION */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent"
        aria-labelledby="skills-grid-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-gold/25 bg-accent-gold/5 text-[10px] font-bold tracking-widest text-accent-gold uppercase mb-4">
              <T k="skills.gridBadge" />
            </span>
            <h2 id="skills-grid-title" className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              <T k="skills.gridTitle" />
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-text-light/85 max-w-lg mx-auto font-light leading-relaxed">
              <T k="skills.gridSub" />
            </p>
          </div>

          {/* Interactive Skill Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full"
          >
            {categories.map((category, idx) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="w-full glass-panel dark:bg-[#1A120B]/45 bg-neutral-50/80 border border-neutral-300 dark:border-accent-gold/15 text-neutral-900 dark:text-text-light rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-brand-accent-inspire/40 transition-all duration-300 group shadow-sm hover:shadow-xl"
                >
                  <div>
                    {/* Header: Icon & Category Title */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold border border-accent-gold/20 transition-all duration-300 group-hover:bg-brand-accent-inspire/10 group-hover:text-brand-accent-inspire group-hover:border-brand-accent-inspire/30 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                        <CategoryIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-[9px] font-extrabold tracking-wider uppercase text-neutral-700 dark:text-text-light/50 border border-neutral-300 dark:border-white/5 rounded px-2.5 py-1">
                        {t("skills.verticalLabel", "Vertical")} #{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold tracking-tight mb-4 group-hover:text-brand-accent-inspire transition-colors duration-300">
                      {category.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-8">
                      {category.description}
                    </p>

                    {/* Skill Checklist */}
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent-gold mb-4">
                      {t("skills.coreDisciplines", "Core Disciplines")}
                    </h4>
                    <ul className="space-y-3 mb-8" aria-label={`List of disciplines for ${category.title}`}>
                      {category.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs font-light text-neutral-800 dark:text-text-light/90">
                          <CheckCircle className="h-4 w-4 text-accent-gold shrink-0 mt-0.5" aria-hidden="true" />
                          <span>
                            {skill.name} — <strong className="text-accent-gold font-semibold">{skill.level}</strong>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools / Ecosystem Frameworks */}
                  <div>
                    <div className="pt-6 border-t border-neutral-300 dark:border-white/10">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-700 dark:text-text-light/90 mb-3.5">
                        {t("skills.ecosystemFrameworks", "Ecosystem Frameworks")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider rounded bg-neutral-200/80 dark:bg-white/5 border border-neutral-300 dark:border-white/5 text-neutral-900 dark:text-text-light/90 hover:border-brand-accent-inspire/35 hover:text-brand-accent-inspire hover:bg-brand-accent-inspire/5 transition-all duration-300 select-none"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA & COLLABORATION PROSPECT */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-dark dark:bg-gradient-to-t dark:from-primary-dark dark:via-primary-dark dark:to-[#241A0F]/20 text-center relative overflow-hidden border-t border-accent-gold/15"
        aria-labelledby="skills-cta-title"
      >
        <div className="absolute inset-0 bg-brand-accent-inspire/[0.005] pointer-events-none" />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="flex flex-col items-center">
            <Sparkles className="h-10 w-10 text-accent-gold mb-6 animate-pulse" aria-hidden="true" />
            <h2 id="skills-cta-title" className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
              <T k="skills.ctaTitle" />
            </h2>
            <p className="text-sm sm:text-lg text-neutral-700 dark:text-text-light/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              <T k="skills.ctaSub" />
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-8 py-4 border border-accent-gold bg-accent-gold/5 text-xs font-semibold tracking-wider text-accent-gold rounded uppercase transition-all duration-300 hover:bg-brand-accent-inspire hover:text-primary-dark hover:border-brand-accent-inspire hover:shadow-lg hover:shadow-brand-accent-inspire/30 hover:-translate-y-[2px]"
              aria-label="Connect with our operations team"
            >
              <T k="skills.ctaBtn" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
