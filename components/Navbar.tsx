"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/I18nContext";
import { useTheme } from "@/components/ThemeContext";

const NAV_LINKS = [
  { key: "Home", href: "/#home" },
  { key: "Ecosystem", href: "/#ecosystem" },
  { key: "Verticals", href: "/verticals" },
  { key: "Impact", href: "/#impact" },
  { key: "FAQ", href: "/#faq" },
  { key: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();

  // Scroll spy: detect which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_LINKS
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    const elements: HTMLElement[] = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      for (const el of elements) observer.unobserve(el);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo container */}
          <Link
            href="/#home"
            onClick={handleClick}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-full border border-accent-gold/30 shadow-sm">
              <Image
                src="/logo.new.jpg"
                alt="Al Nibras Group logo"
                fill
                className="object-cover scale-[1.45] transition-transform duration-500 group-hover:scale-[1.55] animate-shine"
                priority
              />
            </div>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-accent-gold group-hover:brightness-110 transition-all duration-300">
              {t("navbar.title")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={handleClick}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    isActive
                      ? "text-accent-gold"
                      : "text-neutral-700 dark:text-text-light/80 hover:text-brand-accent-inspire"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.key}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 dark:text-text-light/80 hover:text-accent-gold transition-colors duration-300 rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-text-dark" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-2.5 py-1 text-[10px] font-bold border border-accent-gold/30 hover:border-accent-gold text-accent-gold hover:bg-accent-gold/5 rounded uppercase transition-all duration-300"
            >
              {locale === "en" ? "اردو" : "EN"}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-accent-gold bg-accent-gold/5 text-xs font-semibold tracking-wider text-accent-gold rounded uppercase transition-all duration-300 hover:bg-brand-accent-inspire hover:text-primary-dark hover:border-brand-accent-inspire hover:shadow-lg hover:shadow-brand-accent-inspire/30 hover:-translate-y-[2px]"
            >
              {t("navbar.join")} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 dark:text-text-light/80 hover:text-accent-gold transition-colors duration-300 rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-2.5 py-1 text-[10px] font-bold border border-accent-gold/30 hover:border-accent-gold text-accent-gold rounded uppercase transition-all duration-300"
            >
              {locale === "en" ? "اردو" : "EN"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-neutral-900 dark:text-text-light hover:text-accent-gold focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-accent-gold/15 bg-primary-dark/95 backdrop-blur-xl"
          >
            <nav className="space-y-1 px-4 py-6 sm:px-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("/#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={handleClick}
                    className={`block py-3 px-4 rounded text-base font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-accent-gold bg-accent-gold/5 border-l-2 border-accent-gold"
                        : "text-text-light/80 hover:text-accent-gold hover:bg-neutral-200/50 dark:hover:bg-white/5"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.key}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-accent-gold/15 mt-4 px-4">
                <Link
                  href="/contact"
                  onClick={handleClick}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent-gold text-neutral-950 font-bold text-sm rounded tracking-wider uppercase transition-all duration-300 hover:bg-brand-accent-inspire hover:text-neutral-950 shadow-md shadow-brand-accent-inspire/15"
                >
                  {t("navbar.join")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
