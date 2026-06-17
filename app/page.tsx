import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, ArrowUpRight } from "lucide-react";
import Floating3D from "@/components/Floating3D";
import StatCounter from "@/components/StatCounter";
import InteractiveEcosystem from "@/components/InteractiveEcosystem";
import MetallicText from "@/components/MetallicText";
import T from "@/components/T";

export default function Home() {
  return (
    <div className="relative w-full bg-primary-dark text-neutral-900 dark:text-text-light overflow-hidden">
      {/* 3D Parallax floating backgrounds */}
      <Floating3D />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-gold/20 bg-accent-gold/5 text-xs font-semibold tracking-widest text-accent-gold uppercase mb-8 backdrop-blur-md">
            <T k="home.tagline" />
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-3xl">
            <T k="home.headline" />
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-700 dark:text-text-light/80 max-w-2xl mb-12 font-light leading-relaxed">
            <T k="home.sub" />
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full max-w-md">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-accent-gold bg-accent-gold text-primary-dark font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-accent-gold hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-[2px]"
            >
              <T k="home.ctaJoin" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-text-light font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/5 hover:-translate-y-[2px]"
            >
              <T k="home.ctaExplore" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="relative w-full bg-white dark:bg-[#1A120B]/30 text-neutral-900 dark:text-text-light py-20 px-4 sm:px-6 lg:px-8 z-10 border-b border-neutral-200 dark:border-primary-dark/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-neutral-50 dark:bg-primary-dark/[0.02] border border-neutral-300 dark:border-primary-dark/[0.04]">
              <StatCounter value={26} suffix="M+" seoFallback="26M+ Out-of-school youth empowered through systematic intervention" />
              <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-text-light/90 max-w-xs font-medium leading-relaxed">
                <T k="home.stat1" />
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-neutral-50 dark:bg-primary-dark/[0.02] border border-neutral-300 dark:border-primary-dark/[0.04]">
              <StatCounter value={3} suffix="" seoFallback="3 Interconnected operational verticals running seamlessly" />
              <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-text-light/90 max-w-xs font-medium leading-relaxed">
                <T k="home.stat2" />
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-neutral-50 dark:bg-primary-dark/[0.02] border border-neutral-300 dark:border-primary-dark/[0.04]">
              <StatCounter value={1} suffix=" Loop" seoFallback="1 Loop Self-sustaining economic cycle independent of foreign charity" />
              <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-text-light/90 max-w-xs font-medium leading-relaxed">
                <T k="home.stat3" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ECOSYSTEM (COORDINATED HOVER & HARDWARE-ACCELERATED SVG FLOWS) */}
      <InteractiveEcosystem />

      {/* 4. FEATURED VERTICALS (Bento Card Style) */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-neutral-200 dark:border-accent-gold/15 bg-neutral-50 dark:bg-primary-dark/45 backdrop-blur-3xl">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-neutral-900 dark:text-text-light">
              <T k="home.verticalsTitle" />
            </h2>
            <p className="text-sm sm:text-lg text-neutral-700 dark:text-text-light/90 max-w-xl mx-auto font-light">
              <T k="home.verticalsSub" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Vertical Card 1 */}
            <div className="w-full flex flex-col bg-neutral-50 dark:bg-white/[0.02] border border-neutral-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/55 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/education-team.png"
                  alt="Al Nibras Education System in action in Lahore"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    <T k="home.bentoCards.c1.title" />
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6">
                    <T k="home.bentoCards.c1.desc" />
                  </p>
                </div>
                <Link
                  href="/verticals"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold uppercase tracking-wider hover:brightness-110 self-start group/link"
                >
                  <T k="home.bentoCards.c1.cta" /> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Vertical Card 2 */}
            <div className="w-full flex flex-col bg-neutral-50 dark:bg-white/[0.02] border border-neutral-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/55 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/finance-mockup.png"
                  alt=""
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    <T k="home.bentoCards.c2.title" />
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6">
                    <T k="home.bentoCards.c2.desc" />
                  </p>
                </div>
                <Link
                  href="/finance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold uppercase tracking-wider hover:brightness-110 self-start group/link"
                >
                  <T k="home.bentoCards.c2.cta" /> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Vertical Card 3 */}
            <div className="w-full flex flex-col bg-neutral-50 dark:bg-white/[0.02] border border-neutral-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/55 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/technology-operators.png"
                  alt="Al Nibras Student Operators coding in premium high-tech workspace"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-text-light group-hover:text-accent-gold transition-colors duration-300">
                    <T k="home.bentoCards.c3.title" />
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6">
                    <T k="home.bentoCards.c3.desc" />
                  </p>
                </div>
                <Link
                  href="/verticals"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold uppercase tracking-wider hover:brightness-110 self-start group/link"
                >
                  <T k="home.bentoCards.c3.cta" /> <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL BLOCK */}
      <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-bg-light text-neutral-900 dark:text-text-light z-10">
        <div className="mx-auto max-w-4xl">
          <div className="relative p-10 sm:p-16 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/5 rounded-2xl shadow-xl shadow-neutral-100 dark:shadow-black/20 flex flex-col items-center text-center">
            <Quote className="h-10 w-10 text-accent-gold/45 mb-8" />
            <p className="font-heading text-xl sm:text-2xl font-semibold italic text-neutral-900 dark:text-text-light mb-8 leading-relaxed max-w-2xl">
              &ldquo;<T k="home.testimonial" />&rdquo;
            </p>
            <div className="text-xs uppercase tracking-widest font-extrabold text-neutral-700 dark:text-text-light/90">
              <T k="home.testimonialAuthor" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BLOCK */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-accent-gold text-neutral-950 text-center z-10 font-medium">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight mb-4">
            <T k="home.ctaTitle" />
          </h2>
          <p className="text-sm sm:text-lg text-neutral-800 max-w-xl mx-auto mb-10 font-semibold leading-relaxed">
            <T k="home.ctaSub" />
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-8 py-4 bg-primary-dark text-text-light font-bold text-sm rounded uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-neutral-950 hover:border-2 hover:border-neutral-950 hover:px-[30px] hover:py-[14px]"
          >
            <T k="home.ctaBtn" /> <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
