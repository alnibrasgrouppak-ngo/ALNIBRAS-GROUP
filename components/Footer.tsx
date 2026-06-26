import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import T from "@/components/T";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-primary-dark text-neutral-900 dark:text-text-light border-t border-neutral-300 dark:border-accent-gold/15 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-neutral-300 dark:border-white/10">
          {/* Column 1: Logo / Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/#home" className="flex items-center gap-3.5 group self-start">
              <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full border border-accent-gold/20 shadow-sm">
                <Image
                  src="/logo.new.jpg"
                  alt="Al Nibras Group logo"
                  fill
                  className="object-cover scale-[1.45] transition-transform duration-500 group-hover:scale-[1.55]"
                />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-accent-gold group-hover:brightness-110 transition-all duration-300">
                <T k="navbar.title" />
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-text-light/85 max-w-sm font-light leading-relaxed">
              <T k="footer.desc" />
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/alnibrasorg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-white/10 text-neutral-500 dark:text-white/40 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                aria-label="Follow Al Nibras Group on Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alnibrasgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-white/10 text-neutral-500 dark:text-white/40 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                aria-label="Follow Al Nibras Group on LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/AlNibrasGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-white/10 text-neutral-500 dark:text-white/40 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                aria-label="Follow Al Nibras Group on X (Twitter)"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/alnibrasgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-white/10 text-neutral-500 dark:text-white/40 hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
                aria-label="Follow Al Nibras Group on Instagram"
              >
                <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Ecosystem Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              <T k="footer.navTitle" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  <T k="footer.homeHub" />
                </Link>
              </li>
              <li>
                <Link href="/#ecosystem" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  Ecosystem Loop
                </Link>
              </li>
              <li>
                <Link href="/verticals" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  <T k="footer.operationalVerticals" />
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  Impact Stats
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Insights & Connect */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              <T k="footer.connectTitle" />
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
                  <T k="footer.editorialInsights" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold hover:pl-1 transition-all duration-300 font-light block">
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

          {/* Column 4: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-neutral-600 dark:text-text-light/75 font-light">
                Lahore, Punjab, Pakistan
              </li>
              <li>
                <a href="mailto:info@alnibras.pk" className="text-sm text-neutral-600 dark:text-text-light/75 hover:text-accent-gold transition-colors duration-300 font-light">
                  info@alnibras.pk
                </a>
              </li>
              <li className="text-sm text-neutral-600 dark:text-text-light/75 font-light">
                +923312627716
              </li>
            </ul>
            <div className="pt-2 border-t border-neutral-200 dark:border-white/5 space-y-1">
              <p className="text-[10px] text-neutral-400 dark:text-white/30 uppercase tracking-wider font-medium">
                Registered Social Enterprise, Lahore, Pakistan
              </p>
              <p className="text-[9px] text-accent-gold/80 font-bold uppercase tracking-wider">
                SECP Reg No: ENT-2026-0987-PB
              </p>
              <p className="text-[9px] text-neutral-500 dark:text-white/40 font-light">
                Founder: Faizan Gillani • Strategic Advisor: Abbas Hussain
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-neutral-500 dark:text-text-light/80 font-light gap-4">
          <p className="text-center sm:text-left leading-relaxed">
            <T k="footer.rights" />
          </p>
          <div className="flex space-x-6">
            <Link href="/#home" className="hover:text-accent-gold transition-colors duration-300">
              <T k="footer.sitemap" />
            </Link>
            <Link href="/#home" className="hover:text-accent-gold transition-colors duration-300">
              <T k="footer.privacy" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
