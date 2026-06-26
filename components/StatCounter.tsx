"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  seoFallback?: string;
}

export default function StatCounter({ value, prefix = "", suffix = "", duration = 2, seoFallback }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tight text-neutral-900 dark:text-text-light select-none">
      {/* Animated value visible only to human users */}
      <span aria-hidden="true">
        {prefix}{displayValue}
        <span className="ml-1">{suffix}</span>
      </span>

      {/* Static raw fallback for instant SEO crawler discoverability */}
      <span className="sr-only">
        {prefix}{value}
        {suffix}
      </span>

      {seoFallback && <span className="sr-only">{seoFallback}</span>}
    </span>
  );
}

