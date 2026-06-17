"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Home, BarChart2, Award, User, CheckCircle2, RotateCcw } from "lucide-react";
import { useI18n } from "@/components/I18nContext";

interface Quest {
  id: number;
  name: string;
  reward: number;
  completed: boolean;
}

export default function WalletMockup() {
  const { t } = useI18n();
  const [balance, setBalance] = useState(4850);
  const [quests, setQuests] = useState<Quest[]>([
    { id: 1, name: t("finance.mockup.quest1", "Complete Logic Block 4"), reward: 150, completed: false },
    { id: 2, name: t("finance.mockup.quest2", "Perfect Attendance Week"), reward: 300, completed: false },
    { id: 3, name: t("finance.mockup.quest3", "Peer Mentorship Hour"), reward: 200, completed: false },
  ]);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
 
  const handleCompleteQuest = (questId: number) => {
    setQuests((prevQuests) =>
      prevQuests.map((q) => {
        if (q.id === questId && !q.completed) {
          setBalance((prevBal) => prevBal + q.reward);
          setActiveAlert(`${t("finance.mockup.rewardPrefix", "+PKR")} ${q.reward}`);
          setTimeout(() => setActiveAlert(null), 1500);
          return { ...q, completed: true };
        }
        return q;
      })
    );
  };
 
  const handleReset = () => {
    setBalance(4850);
    setQuests([
      { id: 1, name: t("finance.mockup.quest1", "Complete Logic Block 4"), reward: 150, completed: false },
      { id: 2, name: t("finance.mockup.quest2", "Perfect Attendance Week"), reward: 300, completed: false },
      { id: 3, name: t("finance.mockup.quest3", "Peer Mentorship Hour"), reward: 200, completed: false },
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* 3D Rotational Hover Wrapper */}
      <motion.div
        whileHover={{
          rotateY: 8,
          rotateX: 4,
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        className="perspective-1000 relative"
      >
        {/* Smartphone Mockup */}
        <div className="w-[300px] h-[580px] bg-black border-[10px] border-[#222] rounded-[40px] shadow-2xl shadow-primary-dark/40 overflow-hidden relative border-t-[12px] border-b-[12px] ring-1 ring-accent-gold/20">
          
          {/* Top Speaker/Notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-12 h-1 bg-neutral-800 rounded-full" />
          </div>

          {/* Screen Content */}
          <div className="w-full h-full bg-[#0B150E] text-white p-5 flex flex-col justify-between select-none pt-7 relative">
            
            {/* Phone Status Bar */}
            <div className="flex items-center justify-between text-[10px] text-white/50 mb-4 font-mono">
              <span>{t("finance.mockup.title", "Al Nibras Fin")}</span>
              <div className="flex items-center space-x-1">
                <span>{t("finance.mockup.time", "11:05 AM")}</span>
                <Battery className="h-3.5 w-3.5 fill-white/20" />
              </div>
            </div>
 
            {/* Wallet Balance Card */}
            <div className="bg-gradient-to-br from-[#16331D] to-[#0E1F12] border border-accent-gold/30 rounded-xl p-4 relative overflow-hidden">
              <span className="text-[9px] uppercase tracking-wider text-accent-gold font-semibold">
                {t("finance.mockup.walletLabel", "Mustafai Student Wallet")}
              </span>
              
              {/* Dynamic Balance Counter */}
              <div className="flex items-baseline space-x-1 my-1">
                <span className="text-2xl font-bold tracking-tight">{t("finance.mockup.currency", "PKR")}</span>
                <motion.span
                  key={balance}
                  initial={{ scale: 1.2, color: "#C9A227" }}
                  animate={{ scale: 1, color: "#FFF" }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-extrabold"
                >
                  {balance.toLocaleString()}
                </motion.span>
              </div>
 
              <div className="flex items-center gap-1.5 text-[9px] text-[#8FBF97] font-semibold mt-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8FBF97] animate-pulse" />
                {t("finance.mockup.status", "Halal Rewards Active")}
              </div>
 
              {/* Float Floating reward notice */}
              <AnimatePresence>
                {activeAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    animate={{ opacity: 1, y: -25, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute right-4 bottom-4 text-xs font-bold text-accent-gold bg-primary-dark/80 px-2 py-1 rounded border border-accent-gold/40 shadow-lg pointer-events-none"
                  >
                    {activeAlert}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
 
            {/* Quests Section */}
            <div className="flex-grow my-4 flex flex-col justify-start">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-bold text-accent-gold uppercase tracking-wider">
                  {t("finance.mockup.questTitle", "Available Quests")}
                </p>
                {quests.some((q) => q.completed) && (
                  <button
                    onClick={handleReset}
                    className="text-[9px] text-white/40 hover:text-white flex items-center gap-0.5 transition-colors duration-300"
                  >
                    <RotateCcw className="h-2.5 w-2.5" /> {t("finance.mockup.reset", "Reset")}
                  </button>
                )}
              </div>

              {/* Quest List */}
              <div className="space-y-2">
                {quests.map((quest) => (
                  <motion.button
                    key={quest.id}
                    onClick={() => handleCompleteQuest(quest.id)}
                    disabled={quest.completed}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border text-left transition-all duration-300 text-[11px] ${
                      quest.completed
                        ? "bg-accent-gold/5 border-accent-gold/40 text-white/50 cursor-default"
                        : "bg-white/3 border-white/5 text-white/90 hover:bg-white/8 hover:border-accent-gold/35"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {quest.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-accent-gold shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-white/30 shrink-0" />
                      )}
                      <span className={quest.completed ? "line-through font-light" : "font-medium"}>
                        {quest.name}
                      </span>
                    </div>
                    <span
                      className={`font-semibold shrink-0 ${
                        quest.completed ? "text-accent-gold/60" : "text-accent-gold"
                      }`}
                    >
                      {t("finance.mockup.rewardPrefix", "+PKR")} {quest.reward}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Phone Bottom Navigation */}
            <div className="flex justify-around items-center pt-3 border-t border-white/8 text-white/45 text-xs">
              <Home className="h-4 w-4 text-accent-gold cursor-pointer" />
              <BarChart2 className="h-4 w-4 hover:text-white transition-colors duration-300 cursor-pointer" />
              <Award className="h-4 w-4 hover:text-white transition-colors duration-300 cursor-pointer" />
              <User className="h-4 w-4 hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.div>
      <p className="text-xs text-text-light/50 font-light select-none italic text-center max-w-[280px]">
        {t("finance.mockup.tapSimulate", "*Tap the screen quests to simulate learning validation and earn micro-rewards.")}
      </p>
    </div>
  );
}
