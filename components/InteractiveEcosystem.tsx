"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveFlow from "@/components/InteractiveFlow";
import { useI18n } from "@/components/I18nContext";

export default function InteractiveEcosystem() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const { t } = useI18n();

  return (
    <div className="w-full">
      {/* 3. INTERACTIVE FLOW LOOP */}
      <section className="relative w-full bg-bg-light text-neutral-900 dark:text-text-light py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-text-light tracking-tight mb-4">
              {t("home.ecoTitle", "The Self-Sustaining Ecosystem")}
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 dark:text-text-light/75 max-w-xl mx-auto font-light">
              {t("home.ecoSub", "How Al Nibras Group closes the loop between foundational learning and premium financial autonomy.")}
            </p>
          </div>

          <InteractiveFlow activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
      </section>

      {/* 3.5. FLAGSHIP ECOSYSTEM BANNER */}
      <section className="relative w-full pb-16 pt-8 px-4 sm:px-6 lg:px-8 z-10 bg-primary-dark">
        <div className="mx-auto max-w-6xl">
          <div className="relative w-full aspect-[2.4/1] rounded-2xl sm:rounded-3xl overflow-hidden border border-accent-gold/15 shadow-[0_0_50px_rgba(201,162,39,0.06)] group">
            {/* LCP Optimized Priority Hero Banner */}
            <Image
              src="/al-nibras-hero-banner.png"
              alt="Al Nibras Group Ecosystem Blueprint — NGO, Finance, Education"
              fill
              sizes="(max-w-1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              priority
            />

            {/* Hardware GPU Accelerated SVG Pipeline Path */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible transform-gpu will-change-[transform]"
              viewBox="0 0 1000 416" 
              preserveAspectRatio="none"
              style={{ willChange: "transform" }}
            >
              <defs>
                <linearGradient id="auraglow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#00F2FE" />
                </linearGradient>
                <filter id="aurablur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              <AnimatePresence>
                {activeStep !== null && (
                  <>
                    {/* Glowing outer aura around the entire banner border */}
                    <motion.rect
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      x="0"
                      y="0"
                      width="1000"
                      height="416"
                      rx="24"
                      stroke="url(#auraglow)"
                      strokeWidth="4.5"
                      fill="none"
                      filter="url(#aurablur)"
                      className="transition-all duration-300 transform-gpu will-change-[transform]"
                      style={{ willChange: "transform" }}
                    />

                    {/* Dynamic Pipeline Path Loop */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.9 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      d={
                        activeStep === 1
                          ? "M 100,320 Q 200,80 500,80" // School path flowing up
                          : activeStep === 2
                          ? "M 500,80 Q 750,80 900,200" // Finance path flowing right
                          : activeStep === 3
                          ? "M 900,200 Q 800,320 500,320" // Business path flowing left
                          : "M 100,320 Q 200,80 500,80 Q 750,80 900,200 Q 800,320 500,320 Q 200,320 100,320 Z" // Full Loop
                      }
                      stroke="url(#auraglow)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      filter="url(#aurablur)"
                      className="transform-gpu will-change-[transform]"
                      style={{ willChange: "transform" }}
                    />
                    
                    {/* Pulsating speed node dash along the path */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 1, 
                        strokeDashoffset: [-80, 0] 
                      }}
                      exit={{ opacity: 0 }}
                      d={
                        activeStep === 1
                          ? "M 100,320 Q 200,80 500,80"
                          : activeStep === 2
                          ? "M 500,80 Q 750,80 900,200"
                          : activeStep === 3
                          ? "M 900,200 Q 800,320 500,320"
                          : "M 100,320 Q 200,80 500,80 Q 750,80 900,200 Q 800,320 500,320 Q 200,320 100,320 Z"
                      }
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="20 60"
                      transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                      className="transform-gpu will-change-[transform]"
                      style={{ willChange: "transform" }}
                    />
                  </>
                )}
              </AnimatePresence>
            </svg>
            
            {/* Subtle premium glass glow border overlay */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/5 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
