"use client";

import InteractiveEcosystem from "@/components/InteractiveEcosystem";
import StatCounter from "@/components/StatCounter";
import T from "@/components/T";

export default function EcosystemLoop() {
  return (
    <div id="ecosystem">
      {/* Stats Bar */}
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

      {/* Interactive Ecosystem (SVG Flow Loop + Hero Banner) */}
      <InteractiveEcosystem />
    </div>
  );
}
