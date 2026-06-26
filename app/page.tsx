import HeroSection from "@/app/sections/HeroSection";
import EcosystemLoop from "@/app/sections/EcosystemLoop";
import VerticalsSection from "@/app/sections/VerticalsSection";
import ImpactStats from "@/app/sections/ImpactStats";
import Partners from "@/app/sections/Partners";
import Testimonial from "@/app/sections/Testimonial";
import FAQSection from "@/app/sections/FAQSection";
import CTASection from "@/app/sections/CTASection";
import ContactSection from "@/app/sections/ContactSection";
import T from "@/components/T";

function AIAtaGlance() {
  return (
    <section
      id="glance"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10 bg-white dark:bg-primary-dark/20 border-t border-neutral-200 dark:border-accent-gold/10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900 dark:text-text-light">
            <T k="home.glanceTitle" />
          </h2>
          <p className="text-sm sm:text-lg text-neutral-600 dark:text-text-light/70 max-w-xl mx-auto font-light">
            <T k="home.glanceSub" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Identity & Location */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-accent-gold uppercase tracking-widest block mb-2">
                Identity & Head Office
              </span>
              <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-text-light mb-4">
                <T k="home.glanceCard1Title" />
              </h3>
              <p className="text-sm text-neutral-600 dark:text-text-light/80 font-light leading-relaxed">
                <T k="home.glanceCard1Desc" />
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/5 text-xs text-neutral-500 dark:text-white/40">
              <T k="home.glanceCard1Footer" />
            </div>
          </div>

          {/* Card 2: Mission & Governance */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-accent-gold uppercase tracking-widest block mb-2">
                Mission & Governance
              </span>
              <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-text-light mb-4">
                <T k="home.glanceCard2Title" />
              </h3>
              <p className="text-sm text-neutral-600 dark:text-text-light/80 font-light leading-relaxed">
                <T k="home.glanceCard2Desc" />
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/5 text-xs text-neutral-500 dark:text-white/40">
              <T k="home.glanceCard2Footer" />
            </div>
          </div>

          {/* Card 3: Core Verticals */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-accent-gold uppercase tracking-widest block mb-2">
                Core Infrastructure
              </span>
              <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-text-light mb-4">
                <T k="home.glanceCard3Title" />
              </h3>
              <p className="text-sm text-neutral-600 dark:text-text-light/80 font-light leading-relaxed">
                <T k="home.glanceCard3Desc" />
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-white/5 text-xs text-neutral-500 dark:text-white/40">
              <T k="home.glanceCard3Footer" />
            </div>
          </div>
        </div>

        {/* Model Comparison Block */}
        <div className="mt-16 bg-neutral-50 dark:bg-primary-dark/40 border border-neutral-200 dark:border-white/5 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-text-light mb-3">
              <T k="home.glanceCompTitle" />
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-text-light/70 max-w-2xl mx-auto font-light">
              <T k="home.glanceCompSubtitle" />
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Split line for large screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-white/10 -translate-x-1/2" />

            {/* Traditional Aid Side */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Traditional Model
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-neutral-800 dark:text-text-light/90">
                <T k="home.glanceCompAidTitle" />
              </h4>
              <p className="text-sm text-neutral-600 dark:text-text-light/70 font-light leading-relaxed">
                <T k="home.glanceCompAidDesc" />
              </p>
            </div>

            {/* Al Nibras Side */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-gold/10 text-accent-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                Al Nibras Closed-Loop
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-neutral-900 dark:text-text-light">
                <T k="home.glanceCompNibrasTitle" />
              </h4>
              <p className="text-sm text-neutral-600 dark:text-text-light/80 font-light leading-relaxed">
                <T k="home.glanceCompNibrasDesc" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative w-full bg-primary-dark text-neutral-900 dark:text-text-light overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. AI At a Glance Summary Block */}
      <AIAtaGlance />

      {/* 3. Ecosystem Loop Section (Stats + Interactive Ecosystem) */}
      <EcosystemLoop />

      {/* 4. Verticals Section */}
      <VerticalsSection />

      {/* 5. Impact Stats Section */}
      <ImpactStats />

      {/* 6. Partners Section */}
      <Partners />

      {/* 7. Testimonial Section */}
      <Testimonial />

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* 9. CTA Section */}
      <CTASection />

      {/* 10. Contact Section */}
      <ContactSection />
    </div>
  );
}
