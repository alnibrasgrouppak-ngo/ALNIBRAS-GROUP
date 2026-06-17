import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import T from "@/components/T";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-primary-dark text-neutral-900 dark:text-text-light border-t border-neutral-300 dark:border-accent-gold/15 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-neutral-300 dark:border-white/10">
          {/* Logo / Brand Side */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group self-start">
              <div className="relative w-11 h-14 shrink-0 overflow-visible">
                <Image
                  src="/logo-icon.svg"
                  alt=""
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-accent-gold group-hover:brightness-110 transition-all duration-300">
                <T k="navbar.title" />
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-text-light/85 max-w-sm font-light leading-relaxed">
              <T k="footer.desc" />
            </p>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              <T k="footer.navTitle" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.homeHub" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.founderVision" />
                </Link>
              </li>
              <li>
                <Link
                  href="/verticals"
                  className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.operationalVerticals" />
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.groupCapabilities" />
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.financeApp" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              <T k="footer.connectTitle" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.editorialInsights" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block"
                >
                  <T k="footer.connectStrategically" />
                </Link>
              </li>
              <li>
                <a
                  href="https://al-nibras-finance.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light"
                >
                  <T k="footer.liveFinanceAlpha" /> <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-neutral-500 dark:text-text-light/80 font-light gap-4">
          <p className="text-center sm:text-left leading-relaxed">
            <T k="footer.rights" />
          </p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-accent-gold transition-colors duration-300">
              <T k="footer.sitemap" />
            </Link>
            <Link href="/" className="hover:text-accent-gold transition-colors duration-300">
              <T k="footer.privacy" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
