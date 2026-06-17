"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wallet, Laptop, RefreshCw } from "lucide-react";
import { useI18n } from "@/components/I18nContext";

interface InteractiveFlowProps {
  activeStep?: number | null;
  setActiveStep?: (step: number | null) => void;
}

export default function InteractiveFlow({ activeStep, setActiveStep }: InteractiveFlowProps) {
  const { t } = useI18n();

  const nodes = [
    {
      id: 1,
      icon: GraduationCap,
      title: t("home.flow.s1.title", "1. School"),
      description: t("home.flow.s1.desc", "Mustafai School System delivers premium basic education and modern tech orientation."),
    },
    {
      id: 2,
      icon: Wallet,
      title: t("home.flow.s2.title", "2. Finance"),
      description: t("home.flow.s2.desc", "Kids interact with our Halal banking app to master digital micro-savings and economics."),
    },
    {
      id: 3,
      icon: Laptop,
      title: t("home.flow.s3.title", "3. Business"),
      description: t("home.flow.s3.desc", "Student Operators Program deploys them into active technical execution fields."),
    },
    {
      id: 4,
      icon: RefreshCw,
      title: t("home.flow.s4.title", "4. Revenue"),
      description: t("home.flow.s4.desc", "Generated enterprise revenue directly funds and expands the school ecosystem."),
    },
  ];

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8">
      {/* SVG Flow connector for desktop view */}
      <div className="absolute inset-x-0 top-16 hidden md:block z-0 pointer-events-none h-1">
        <svg className="w-full h-4 overflow-visible" fill="none">
          <motion.path
            d="M 120,2 Q 240,2 360,2 Q 480,2 600,2 Q 720,2 840,2"
            stroke="rgba(201, 162, 39, 0.15)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <motion.path
            d="M 120,2 Q 240,2 360,2 Q 480,2 600,2 Q 720,2 840,2"
            stroke="#C9A227"
            strokeWidth="2"
            strokeDasharray="12 24"
            animate={{ strokeDashoffset: [-72, 0] }}
            transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Nodes Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isActive = activeStep === node.id;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onMouseEnter={() => setActiveStep?.(node.id)}
              onMouseLeave={() => setActiveStep?.(null)}
              className={`flex flex-col items-center bg-white dark:bg-[#1A120B] p-6 rounded-lg shadow-md shadow-primary-dark/2 border hover:border-accent-gold/30 hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                isActive ? "border-accent-gold/45 shadow-xl -translate-y-1.5" : "border-accent-gold/10 dark:border-accent-gold/5"
              }`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-primary-dark/5 text-accent-gold group-hover:bg-neutral-200 dark:group-hover:bg-primary-dark group-hover:text-accent-gold transition-all duration-300 mb-5 relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-accent-gold/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm pointer-events-none" />
                <Icon className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-text-light mb-2 text-center group-hover:text-accent-gold transition-colors duration-300 select-none">
                {node.title}
              </h3>
              
              <p className="text-xs text-neutral-600 dark:text-text-light/75 text-center leading-relaxed font-light">
                {node.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
