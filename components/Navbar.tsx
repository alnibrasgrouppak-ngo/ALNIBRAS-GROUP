"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/I18nContext";
import { useTheme } from "@/components/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.verticals"), href: "/verticals" },
    { name: t("navbar.capabilities"), href: "/skills" },
    { name: t("navbar.finance"), href: "/finance" },
    { name: t("navbar.insights"), href: "/blog" },
    { name: t("navbar.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo container */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-11 shrink-0 overflow-visible">
              <Image
                src="/logo-icon.svg"
                alt=""
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105 animate-shine"
                priority
              />
            </div>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-accent-gold group-hover:brightness-110 transition-all duration-300">
              {t("navbar.title")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    isActive
                      ? "text-accent-gold"
                      : "text-neutral-700 dark:text-text-light/80 hover:text-brand-accent-inspire"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Theme Toggle Control */}
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 dark:text-text-light/80 hover:text-accent-gold transition-colors duration-300 rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-text-dark" />}
            </button>

            {/* Language Toggle Selector */}
            <button
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-2.5 py-1 text-[10px] font-bold border border-accent-gold/30 hover:border-accent-gold text-accent-gold hover:bg-accent-gold/5 rounded uppercase transition-all duration-300"
            >
              {locale === "en" ? "اردو" : "EN"}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-accent-gold bg-accent-gold/5 text-xs font-semibold tracking-wider text-accent-gold rounded uppercase transition-all duration-300 hover:bg-brand-accent-inspire hover:text-primary-dark hover:border-brand-accent-inspire hover:shadow-lg hover:shadow-brand-accent-inspire/30 hover:-translate-y-[2px]"
            >
              {t("navbar.join")} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>

          {/* Hamburger toggle button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Control (Mobile view) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 dark:text-text-light/80 hover:text-accent-gold transition-colors duration-300 rounded-full bg-neutral-200/50 dark:bg-white/5 border border-neutral-300 dark:border-white/5"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Language Toggle Selector (Mobile view) */}
            <button
              onClick={() => setLocale(locale === "en" ? "ur" : "en")}
              className="px-2.5 py-1 text-[10px] font-bold border border-accent-gold/30 hover:border-accent-gold text-accent-gold rounded uppercase transition-all duration-300"
            >
              {locale === "en" ? "اردو" : "EN"}
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-neutral-900 dark:text-text-light hover:text-accent-gold focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-accent-gold/15 bg-primary-dark/95 backdrop-blur-xl"
          >
            <div className="space-y-1 px-4 py-6 sm:px-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded text-base font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-accent-gold bg-accent-gold/5 border-l-2 border-accent-gold"
                        : "text-text-light/80 hover:text-accent-gold hover:bg-neutral-200/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-accent-gold/15 mt-4 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent-gold text-neutral-950 font-bold text-sm rounded tracking-wider uppercase transition-all duration-300 hover:bg-brand-accent-inspire hover:text-neutral-950 shadow-md shadow-brand-accent-inspire/15"
                >
                  {t("navbar.join")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
