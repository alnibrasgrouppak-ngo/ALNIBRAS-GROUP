"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle, Quote } from "lucide-react";
import MetallicText from "@/components/MetallicText";
import { useI18n } from "@/components/I18nContext";

interface MatrixItem {
  id: number;
  hallucinationNumber: string;
  problemTitle: string;
  problemText: string;
  problemUrdu: string;
  solutionTitle: string;
  solutionText: string;
  solutionUrdu: string;
  tags: string[];
  impactQuote: string;
}

export default function ManifestoMatrix() {
  const { locale, dictionaries, t } = useI18n();

  // Extract the matrix items dynamically from the dictionary
  const itemsObj = dictionaries[locale]?.about?.manifesto?.items || {};
  const matrixData: MatrixItem[] = Object.keys(itemsObj).length > 0 ? Object.keys(itemsObj).map(key => {
    const item = itemsObj[key];
    // Map the string ID (e.g. "m1") back to a numeric ID if needed, or just use the index
    const idNum = parseInt(key.replace('m', ''), 10) || 1;
    return {
      id: idNum,
      hallucinationNumber: item.hallucinationNumber,
      problemTitle: item.problemTitle,
      problemText: item.problemText,
      problemUrdu: item.problemUrdu,
      solutionTitle: item.solutionTitle,
      solutionText: item.solutionText,
      solutionUrdu: item.solutionUrdu,
      tags: item.tags,
      impactQuote: item.impactQuote,
    };
  }).sort((a, b) => a.id - b.id) : [];

  return (
    <div className="w-full bg-neutral-100/50 dark:bg-primary-dark/30 py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-300 dark:border-accent-gold/15">
      <div className="mx-auto max-w-7xl">
        {/* Title / Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-accent-gold/25 bg-accent-gold/5 text-[10px] font-bold tracking-widest text-accent-gold uppercase mb-4">
            {t("about.manifesto.ecoPhilosophy", "Ecosystem Philosophy")}
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-text-light tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            {t("about.manifesto.titlePrefix", "Abbas Hussain × Al Nibras:")} <br />
            11 <span className="text-accent-gold font-normal">{t("about.manifesto.hallucinations", "Educational Hallucinations")}</span> & <MetallicText>{t("about.manifesto.solutions", "Rebellious Solutions")}</MetallicText>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-text-light/75 max-w-xl mx-auto font-light leading-relaxed">
            {t("about.manifesto.sub", "Will Richardson and Abbas Hussain diagnosed Pakistan's deep educational shortcomings. Al Nibras Group delivers concrete system answers.")}
          </p>
        </div>

        {/* 11 Matrices responsive column stack */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {matrixData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.25) }}
              className="rounded-2xl border border-accent-gold/15 overflow-hidden bg-primary-dark/80 hover:border-brand-accent-inspire/40 hover:shadow-2xl hover:shadow-brand-accent-inspire/5 transition-all duration-300 group"
            >
              {/* Problem/Solution Contrast Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-accent-gold/10">
                {/* ❌ Problem Block */}
                <div 
                  className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-[#240C0C] dark:to-[#111111] dark:bg-gradient-to-br"
                >
                  <div>
                    <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase tracking-widest mb-4">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                      {item.hallucinationNumber}
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
                      {item.problemTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-text-light/85 font-light leading-relaxed">
                      {item.problemText}
                    </p>
                  </div>
                  {/* Styled Urdu Block */}
                  <div 
                    dir="rtl" 
                    className="text-right font-nastaleeq text-sm text-brand-text-gold leading-[2.2] mt-6 border-r border-brand-text-gold/35 pr-3 font-semibold select-none"
                  >
                    {item.problemUrdu}
                  </div>
                </div>

                {/* ✅ Solution Block */}
                <div 
                  className="p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-[#241A0F] dark:to-[#111111] dark:bg-gradient-to-br"
                >
                  <div>
                    <div className="flex items-center gap-2 text-accent-gold font-bold text-[10px] uppercase tracking-widest mb-4">
                      <CheckCircle className="h-4 w-4 text-accent-gold shrink-0" />
                      {t("about.manifesto.solutionLabel", "Al Nibras Solution")}
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight group-hover:text-brand-accent-inspire transition-colors duration-300">
                      {item.solutionTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-text-light/85 font-light leading-relaxed">
                      {item.solutionText}
                    </p>
                  </div>
                  {/* Styled Urdu Block */}
                  <div 
                    dir="rtl" 
                    className="text-right font-nastaleeq text-sm text-brand-text-gold leading-[2.2] mt-6 border-r border-brand-text-gold/35 pr-3 font-semibold select-none"
                  >
                    {item.solutionUrdu}
                  </div>
                </div>
              </div>

              {/* Card Footer Meta & Quote */}
              <div className="bg-primary-dark/95 border-t border-accent-gold/15 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Meta tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded bg-accent-gold/5 border border-accent-gold/20 text-accent-gold/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Abbas Hussain Quote / Impact */}
                <div className="flex items-center gap-2 text-[11px] text-text-light/80 font-light italic">
                  <Quote className="h-3 w-3 text-accent-gold/45 shrink-0" />
                  <span>{item.impactQuote}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
