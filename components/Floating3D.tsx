"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

export default function Floating3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 25, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const { scrollY } = useScroll();
  const scrollRotate = useTransform(scrollY, [0, 1500], [0, 60]);
  const scrollTranslateY = useTransform(scrollY, [0, 1500], [0, -120]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 50; // translates -25px to 25px
      const y = (clientY / innerHeight - 0.5) * 50; // translates -25px to 25px
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform layers
  const transformLayer1 = {
    x: smoothMouseX,
    y: smoothMouseY,
    rotate: scrollRotate,
  };

  const transformLayer2 = {
    x: useTransform(smoothMouseX, (val) => -val * 1.3),
    y: useTransform(smoothMouseY, (val) => -val * 1.3),
    rotate: useTransform(scrollRotate, (val) => val * -0.7),
  };

  const transformLayer3 = {
    x: useTransform(smoothMouseX, (val) => val * 0.8),
    y: useTransform(smoothMouseY, (val) => val * 0.8),
    translateY: scrollTranslateY,
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Golden Glowing Orb & Concentric Rings */}
      <motion.div
        style={transformLayer1}
        className="absolute top-1/4 -right-16 w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-accent-gold/15 flex items-center justify-center"
      >
        <div className="w-[85%] h-[85%] rounded-full border border-accent-gold/10 border-dashed" />
        <div className="absolute w-3 h-3 bg-accent-gold rounded-full blur-[1px] top-6 left-1/4 animate-pulse-slow" />
      </motion.div>

      {/* Abstract Lantern Geometric Wireframe */}
      <motion.div
        style={transformLayer2}
        className="absolute bottom-1/4 -left-16 w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-accent-gold/15 flex items-center justify-center"
      >
        <div className="w-[70%] h-[70%] rounded-full border border-accent-gold/10" />
        <div className="w-[45%] h-[45%] rounded-full border border-accent-gold/20 border-dotted" />
        <div className="absolute w-full h-[1px] bg-accent-gold/10 rotate-45" />
        <div className="absolute w-full h-[1px] bg-accent-gold/10 -rotate-45" />
        <div className="absolute w-1 h-1 bg-accent-gold rounded-full bottom-10 right-1/3" />
      </motion.div>

      {/* Ambient background light flare */}
      <motion.div
        style={transformLayer3}
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-accent-gold/[0.02] blur-[80px] sm:blur-[120px]"
      />
    </div>
  );
}
