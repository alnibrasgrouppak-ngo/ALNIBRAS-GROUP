"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GraduationCap, School, TrendingUp, Users } from "lucide-react";
import T from "@/components/T";

interface CounterItemProps {
  icon: React.ElementType;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}

function CounterItem({ icon: Icon, value, prefix = "", suffix = "", label, delay }: CounterItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold mb-5">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-accent-gold select-none" aria-hidden="true">
        {prefix}{displayValue}{suffix}
      </span>
      <span className="sr-only">{prefix}{value}{suffix}</span>
      <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-text-light/80 font-medium leading-relaxed max-w-[200px]">
        <T k={label} />
      </p>
    </motion.div>
  );
}

export default function ImpactStats() {
  const stats = [
    {
      icon: GraduationCap,
      value: 500,
      suffix: "+",
      label: "home.impactStat1",
      delay: 0,
    },
    {
      icon: School,
      value: 3,
      suffix: "",
      label: "home.impactStat2",
      delay: 0.1,
    },
    {
      icon: TrendingUp,
      value: 2,
      prefix: "PKR ",
      suffix: "M+",
      label: "home.impactStat3",
      delay: 0.2,
    },
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "home.impactStat4",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="impact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 z-10 bg-[#0a0a0a] dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle gold particle accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-accent-gold/30 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-accent-gold/20 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent-gold/25 rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-accent-gold/15 rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-10 left-1/2 w-[400px] h-[400px] rounded-full bg-accent-gold/[0.02] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            <T k="home.impactTitle" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-white/60 max-w-xl mx-auto font-light"
          >
            <T k="home.impactSub" />
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat) => (
            <CounterItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
