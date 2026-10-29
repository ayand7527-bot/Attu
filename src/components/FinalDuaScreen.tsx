/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { BIRTHDAY_DATA } from "../config/birthdayData";
import { IslamicStar, CrescentDetail, GoldFlourishDivider } from "./IslamicGeometry";
import { soundManager } from "../utils/audio";
import { RotateCcw, Heart, Share2, Sparkles } from "lucide-react";

interface Props {
  onReplay: () => void;
}

export const FinalDuaScreen: React.FC<Props> = ({ onReplay }) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleRestart = () => {
    soundManager.playChime([440, 554.37, 659.25, 880]);
    onReplay();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Attu's Birthday Surprise | October 30`,
          text: `A special birthday celebration with sincere prayers for Attiya (Attu).`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section
      id="dua"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#080A09] via-[#0D281E] to-[#060807] text-center overflow-hidden"
      aria-label="Final Dua and Blessing Screen"
    >
      {/* Deep Emerald & Antique Gold Ambient Glows */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#123B2C]/35 blur-[150px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full bg-[#C7A45B]/15 blur-[120px] pointer-events-none bottom-0 right-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full flex flex-col items-center px-4">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mb-6"
        >
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-b from-[#123B2C] to-[#080A09] border-2 border-[#C7A45B] shadow-[0_0_30px_rgba(199,164,91,0.3)]">
            <CrescentDetail className="w-12 h-12" />
          </div>
          <div className="absolute -top-1 -right-1">
            <IslamicStar size={20} />
          </div>
        </motion.div>

        {/* Section Pill Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-body font-medium uppercase tracking-[0.2em] text-[#C7A45B] mb-3"
        >
          <span>Khatm-e-Dua</span>
          <span aria-hidden="true">·</span>
          <span>{BIRTHDAY_DATA.recipient.birthDateFormatted}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-gold-gradient tracking-normal mb-4"
        >
          {BIRTHDAY_DATA.finalDua.title}
        </motion.h2>

        {/* Classical Arabic Du'a Script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          dir="rtl"
          className="w-full my-4 p-4 sm:p-6 rounded-2xl bg-[#080A09]/70 border border-[#C7A45B]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
        >
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#E6CB85] leading-[2.4] tracking-normal select-none drop-shadow-[0_2px_10px_rgba(199,164,91,0.3)]">
            {BIRTHDAY_DATA.finalDua.arabicCalligraphy}
          </p>
        </motion.div>

        <GoldFlourishDivider className="my-4" />

        {/* Core Urdu Dua Box Required by Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="relative w-full my-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#123B2C]/50 via-[#0A231A]/60 to-[#080A09]/80 border-2 border-[#C7A45B]/60 shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[11px] uppercase tracking-wider text-[#E6CB85] font-body font-medium">
            <Heart className="w-3.5 h-3.5 text-[#C7A45B] fill-[#C7A45B]/30" />
            <span>Dedicated Du'a For Attu</span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-normal text-[#F4EBDD] leading-relaxed mb-4">
            "{BIRTHDAY_DATA.finalDua.urduDua}"
          </p>

          <p className="text-xs sm:text-sm font-body font-normal text-[#F4EBDD]/85 leading-relaxed max-w-lg mx-auto pt-2 border-t border-[#C7A45B]/20">
            {BIRTHDAY_DATA.finalDua.englishMeaning}
          </p>
        </motion.div>

        {/* Concluding heartfelt wish */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg font-heading font-normal text-[#C7A45B] tracking-wide my-4"
        >
          {BIRTHDAY_DATA.finalDua.concludingWords}
        </motion.p>

        {/* REPLAY & CELEBRATION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
        >
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full bg-[#123B2C] hover:bg-[#184E3B] border-2 border-[#C7A45B] text-[#F4EBDD] font-button font-medium tracking-wider text-xs sm:text-sm shadow-[0_8px_30px_rgba(199,164,91,0.25)] hover:border-[#E6CB85] active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A45B]"
          >
            <RotateCcw className="w-4 h-4 text-[#C7A45B]" />
            <span>Replay Experience</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full border border-[#C7A45B]/60 text-xs font-button font-medium uppercase tracking-widest text-[#E6CB85] hover:bg-[#C7A45B]/10 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#C7A45B]" />
            <span>{copiedLink ? "Link Copied!" : "Share Surprise"}</span>
          </button>
        </motion.div>

        {/* Quiet Footer Note */}
        <div className="mt-16 pt-8 border-t border-[#C7A45B]/15 text-[11px] text-[#F4EBDD]/50 font-body font-normal flex items-center justify-center gap-2">
          <span>Crafted with pure prayers & highest respect</span>
          <span aria-hidden="true">·</span>
          <span>October 30</span>
          <span aria-hidden="true">·</span>
          <Sparkles className="w-3 h-3 text-[#C7A45B]/50" />
        </div>
      </div>
    </section>
  );
};
