"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import T from "@/components/T";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

interface VerticalCardProps {
  index: number;
  imageSrc: string;
  imageAlt: string;
  titleKey: string;
  descKey: string;
  ctaKey: string;
  ctaHref: string;
  badge: { text: string; color: "emerald" | "amber" };
}

function VerticalCard({
  index,
  imageSrc,
  imageAlt,
  titleKey,
  descKey,
  ctaKey,
  ctaHref,
  badge,
}: VerticalCardProps) {
  const badgeColors =
    badge.color === "emerald"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : "bg-amber-500/10 text-amber-400 border-amber-500/20";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="w-full flex flex-col bg-neutral-50 dark:bg-white/[0.02] border-t-2 border-t-accent-gold/40 border border-neutral-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-accent-gold/55 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-gold/10"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-sm ${badgeColors}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                badge.color === "emerald" ? "bg-emerald-400" : "bg-amber-400"
              } animate-pulse`}
            />
            {badge.text}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-heading text-2xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-text-light group-hover:text-accent-gold transition-colors duration-300">
            <T k={titleKey} />
          </h3>
          <p className="text-sm text-neutral-700 dark:text-text-light/90 font-light leading-relaxed mb-6">
            <T k={descKey} />
          </p>
        </div>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold uppercase tracking-wider hover:brightness-110 self-start group/link"
        >
          <T k={ctaKey} />{" "}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function VerticalsSection() {
  const cards: VerticalCardProps[] = [
    {
      index: 0,
      imageSrc: "/education-team.png",
      imageAlt:
        "Al Nibras Education System in action — students with tablets in Lahore classroom",
      titleKey: "home.bentoCards.c1.title",
      descKey: "home.bentoCards.c1.desc",
      ctaKey: "home.bentoCards.c1.cta",
      ctaHref: "/verticals/",
      badge: { text: "Active", color: "emerald" },
    },
    {
      index: 1,
      imageSrc: "/finance-mockup.png",
      imageAlt:
        "Al Nibras Finance App mockup — Shariah-compliant micro-savings interface",
      titleKey: "home.bentoCards.c2.title",
      descKey: "home.bentoCards.c2.desc",
      ctaKey: "home.bentoCards.c2.cta",
      ctaHref: "/finance/",
      badge: { text: "Coming Soon", color: "amber" },
    },
    {
      index: 2,
      imageSrc: "/technology-operators.png",
      imageAlt:
        "Al Nibras Student Operators coding in premium high-tech workspace in Lahore",
      titleKey: "home.bentoCards.c3.title",
      descKey: "home.bentoCards.c3.desc",
      ctaKey: "home.bentoCards.c3.cta",
      ctaHref: "/verticals/",
      badge: { text: "Active", color: "emerald" },
    },
  ];

  return (
    <section
      id="verticals"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 border-t border-neutral-200 dark:border-accent-gold/15 bg-neutral-50 dark:bg-primary-dark/45 backdrop-blur-3xl"
    >
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
          {cards.map((card) => (
            <VerticalCard key={card.titleKey} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
